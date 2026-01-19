#!/bin/bash

# Deploy monitoring stack (Prometheus, Grafana, Jaeger)
# Usage: ./deploy-monitoring.sh [environment]

set -e

ENVIRONMENT=${1:-development}
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "${SCRIPT_DIR}/../.." && pwd)"

echo "🚀 Deploying monitoring stack for environment: ${ENVIRONMENT}"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to print colored output
print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if kubectl is installed
if ! command -v kubectl &> /dev/null; then
    print_error "kubectl is not installed. Please install kubectl first."
    exit 1
fi

# Check if helm is installed
if ! command -v helm &> /dev/null; then
    print_warning "Helm is not installed. Installing Helm..."
    curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
    print_success "Helm installed successfully"
fi

# Create monitoring namespace
echo "📦 Creating monitoring namespace..."
kubectl create namespace monitoring --dry-run=client -o yaml | kubectl apply -f -
print_success "Monitoring namespace created"

# Deploy Prometheus
echo "📊 Deploying Prometheus..."
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update

helm upgrade --install prometheus prometheus-community/kube-prometheus-stack \
    --namespace monitoring \
    --set prometheus.prometheusSpec.retention=30d \
    --set prometheus.prometheusSpec.storageSpec.volumeClaimTemplate.spec.resources.requests.storage=50Gi \
    --set grafana.enabled=false \
    --wait

print_success "Prometheus deployed successfully"

# Deploy Grafana
echo "📈 Deploying Grafana..."
helm repo add grafana https://grafana.github.io/helm-charts
helm repo update

# Create Grafana values file
cat > /tmp/grafana-values.yml << EOF
persistence:
  enabled: true
  size: 10Gi

adminPassword: ${GRAFANA_ADMIN_PASSWORD:-admin}

datasources:
  datasources.yaml:
    apiVersion: 1
    datasources:
      - name: Prometheus
        type: prometheus
        url: http://prometheus-kube-prometheus-prometheus.monitoring:9090
        access: proxy
        isDefault: true

dashboardProviders:
  dashboardproviders.yaml:
    apiVersion: 1
    providers:
      - name: 'default'
        orgId: 1
        folder: ''
        type: file
        disableDeletion: false
        editable: true
        options:
          path: /var/lib/grafana/dashboards/default

dashboards:
  default:
    microservices-overview:
      file: dashboards/microservices-overview.json
    api-gateway:
      file: dashboards/api-gateway-dashboard.json

service:
  type: LoadBalancer
  port: 80
EOF

helm upgrade --install grafana grafana/grafana \
    --namespace monitoring \
    --values /tmp/grafana-values.yml \
    --wait

print_success "Grafana deployed successfully"

# Deploy Jaeger
echo "🔍 Deploying Jaeger..."
helm repo add jaegertracing https://jaegertracing.github.io/helm-charts
helm repo update

helm upgrade --install jaeger jaegertracing/jaeger \
    --namespace monitoring \
    --set provisionDataStore.cassandra=false \
    --set storage.type=elasticsearch \
    --set storage.elasticsearch.host=elasticsearch \
    --set storage.elasticsearch.port=9200 \
    --set query.service.type=LoadBalancer \
    --wait

print_success "Jaeger deployed successfully"

# Get service URLs
echo ""
echo "🎉 Monitoring stack deployed successfully!"
echo ""
echo "📊 Access URLs:"
echo "  Prometheus: http://$(kubectl get svc -n monitoring prometheus-kube-prometheus-prometheus -o jsonpath='{.status.loadBalancer.ingress[0].ip}'):9090"
echo "  Grafana: http://$(kubectl get svc -n monitoring grafana -o jsonpath='{.status.loadBalancer.ingress[0].ip}')"
echo "  Jaeger: http://$(kubectl get svc -n monitoring jaeger-query -o jsonpath='{.status.loadBalancer.ingress[0].ip}'):16686"
echo ""
echo "🔑 Grafana Credentials:"
echo "  Username: admin"
echo "  Password: $(kubectl get secret -n monitoring grafana -o jsonpath='{.data.admin-password}' | base64 --decode)"
echo ""

print_success "Deployment complete!"

