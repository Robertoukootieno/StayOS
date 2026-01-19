#!/bin/bash

# ============================================
# StayOS Infrastructure Deployment Script
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
    echo "Usage: ./deploy-infrastructure.sh <environment>"
    echo "Environments: development, staging, production"
    exit 1
fi

ENVIRONMENT=$1
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TERRAFORM_DIR="${SCRIPT_DIR}/../terraform"
TFVARS_FILE="${TERRAFORM_DIR}/environments/${ENVIRONMENT}.tfvars"

# Validate environment
if [[ ! "$ENVIRONMENT" =~ ^(development|staging|production)$ ]]; then
    log_error "Invalid environment: $ENVIRONMENT"
    echo "Valid environments: development, staging, production"
    exit 1
fi

# Check if tfvars file exists
if [ ! -f "$TFVARS_FILE" ]; then
    log_error "Environment configuration file not found: $TFVARS_FILE"
    exit 1
fi

log_info "Deploying infrastructure for environment: $ENVIRONMENT"

# Navigate to Terraform directory
cd "$TERRAFORM_DIR"

# Initialize Terraform
log_info "Initializing Terraform..."
terraform init -backend-config="key=${ENVIRONMENT}/terraform.tfstate"

# Validate Terraform configuration
log_info "Validating Terraform configuration..."
terraform validate

# Format Terraform files
log_info "Formatting Terraform files..."
terraform fmt -recursive

# Plan Terraform changes
log_info "Planning Terraform changes..."
terraform plan -var-file="$TFVARS_FILE" -out="${ENVIRONMENT}.tfplan"

# Ask for confirmation
if [ "$ENVIRONMENT" == "production" ]; then
    log_warn "You are about to deploy to PRODUCTION!"
    read -p "Are you sure you want to continue? (yes/no): " -r
    echo
    if [[ ! $REPLY =~ ^[Yy][Ee][Ss]$ ]]; then
        log_info "Deployment cancelled"
        exit 0
    fi
fi

# Apply Terraform changes
log_info "Applying Terraform changes..."
terraform apply "${ENVIRONMENT}.tfplan"

# Clean up plan file
rm -f "${ENVIRONMENT}.tfplan"

# Get outputs
log_info "Retrieving infrastructure outputs..."
terraform output -json > "${ENVIRONMENT}-outputs.json"

log_info "Infrastructure deployment completed successfully!"
log_info "Outputs saved to: ${ENVIRONMENT}-outputs.json"

# Update kubeconfig
log_info "Updating kubeconfig..."
CLUSTER_NAME=$(terraform output -raw eks_cluster_id)
AWS_REGION=$(terraform output -raw aws_region || echo "us-east-1")

aws eks update-kubeconfig --name "$CLUSTER_NAME" --region "$AWS_REGION"

log_info "Kubeconfig updated for cluster: $CLUSTER_NAME"

# Display next steps
echo ""
log_info "Next steps:"
echo "  1. Deploy Kubernetes resources: ./deploy-kubernetes.sh $ENVIRONMENT"
echo "  2. Install monitoring stack: ./install-monitoring.sh $ENVIRONMENT"
echo "  3. Deploy applications: ./deploy-services.sh $ENVIRONMENT"

