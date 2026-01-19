#!/bin/bash

# ============================================
# Kubernetes Resources Deployment Script
# ============================================

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Functions
log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if environment is provided
if [ -z "$1" ]; then
    log_error "Environment not specified"
    echo "Usage: ./deploy-kubernetes.sh <environment>"
    echo "Environments: development, staging, production"
    exit 1
fi

ENVIRONMENT=$1
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
K8S_DIR="${SCRIPT_DIR}/../kubernetes"

# Validate environment
if [[ ! "$ENVIRONMENT" =~ ^(development|staging|production)$ ]]; then
    log_error "Invalid environment: $ENVIRONMENT"
    exit 1
fi

log_info "Deploying Kubernetes resources for environment: $ENVIRONMENT"

# Create namespace
log_info "Creating namespace..."
kubectl apply -f "${K8S_DIR}/namespaces/${ENVIRONMENT}.yaml"

# Wait for namespace to be ready
kubectl wait --for=condition=Ready namespace/${ENVIRONMENT} --timeout=60s

# Create ConfigMaps
log_info "Creating ConfigMaps..."
kubectl apply -f "${K8S_DIR}/config/configmap.yaml" -n ${ENVIRONMENT}

# Create Secrets (in production, use Sealed Secrets or External Secrets Operator)
log_warn "Secrets should be managed using Sealed Secrets or External Secrets Operator in production"
if [ "$ENVIRONMENT" != "production" ]; then
    log_info "Creating secrets from example file..."
    kubectl apply -f "${K8S_DIR}/config/secrets.example.yaml" -n ${ENVIRONMENT}
fi

# Apply Network Policies
log_info "Applying Network Policies..."
kubectl apply -f "${K8S_DIR}/network-policies/" -n ${ENVIRONMENT}

# Deploy infrastructure services (if using in-cluster databases)
if [ "$ENVIRONMENT" == "development" ]; then
    log_info "Deploying in-cluster infrastructure services..."
    # Add deployment of PostgreSQL, Redis, RabbitMQ for development
fi

# Deploy application services
log_info "Deploying application services..."
kubectl apply -f "${K8S_DIR}/deployments/" -n ${ENVIRONMENT}

# Wait for deployments to be ready
log_info "Waiting for deployments to be ready..."
kubectl wait --for=condition=available --timeout=300s \
    deployment/api-gateway \
    -n ${ENVIRONMENT}

# Create services
log_info "Creating services..."
kubectl apply -f "${K8S_DIR}/services/" -n ${ENVIRONMENT}

# Create ingress
log_info "Creating ingress..."
kubectl apply -f "${K8S_DIR}/ingress/" -n ${ENVIRONMENT}

# Display deployment status
log_info "Deployment status:"
kubectl get pods -n ${ENVIRONMENT}
kubectl get services -n ${ENVIRONMENT}
kubectl get ingress -n ${ENVIRONMENT}

log_info "Kubernetes resources deployed successfully!"

# Display next steps
echo ""
log_info "Next steps:"
echo "  1. Check pod logs: kubectl logs -f <pod-name> -n ${ENVIRONMENT}"
echo "  2. Check service endpoints: kubectl get endpoints -n ${ENVIRONMENT}"
echo "  3. Access API: kubectl port-forward svc/api-gateway 3000:3000 -n ${ENVIRONMENT}"

