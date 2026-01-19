# StayOS Infrastructure

This directory contains all infrastructure-as-code (IaC) and deployment configurations for the StayOS microservices platform.

## 📁 Directory Structure

```
infrastructure/
├── docker/                    # Docker configurations
│   ├── docker-compose.yml    # Local development environment
│   └── Dockerfile.node       # Multi-stage Dockerfile for Node.js services
├── kubernetes/               # Kubernetes manifests
│   ├── namespaces/          # Namespace configurations
│   ├── deployments/         # Deployment manifests
│   ├── services/            # Service manifests
│   ├── ingress/             # Ingress configurations
│   ├── config/              # ConfigMaps and Secrets
│   └── network-policies/    # Network security policies
├── terraform/               # Terraform IaC
│   ├── main.tf             # Main Terraform configuration
│   ├── variables.tf        # Variable definitions
│   ├── outputs.tf          # Output definitions
│   └── environments/       # Environment-specific configurations
├── monitoring/             # Monitoring and observability
│   └── prometheus/        # Prometheus configuration
│       ├── prometheus.yml # Prometheus scrape configs
│       └── rules/        # Alert rules
└── scripts/              # Deployment and utility scripts
    ├── deploy-infrastructure.sh
    ├── deploy-kubernetes.sh
    └── install-monitoring.sh
```

## 🚀 Quick Start

### Prerequisites

- **Docker** 20.10+
- **Docker Compose** 2.0+
- **Kubernetes** 1.28+
- **kubectl** 1.28+
- **Terraform** 1.6+
- **AWS CLI** 2.0+ (for AWS deployments)
- **Helm** 3.0+ (for monitoring stack)

### Local Development

1. **Start local environment:**
   ```bash
   cd infrastructure/docker
   docker-compose up -d
   ```

2. **Check service status:**
   ```bash
   docker-compose ps
   ```

3. **View logs:**
   ```bash
   docker-compose logs -f api-gateway
   ```

4. **Stop environment:**
   ```bash
   docker-compose down
   ```

### Cloud Deployment

#### 1. Deploy Infrastructure (AWS)

```bash
cd infrastructure/scripts
chmod +x *.sh

# Deploy to development
./deploy-infrastructure.sh development

# Deploy to staging
./deploy-infrastructure.sh staging

# Deploy to production (requires confirmation)
./deploy-infrastructure.sh production
```

#### 2. Deploy Kubernetes Resources

```bash
# Deploy to development
./deploy-kubernetes.sh development

# Deploy to staging
./deploy-kubernetes.sh staging

# Deploy to production
./deploy-kubernetes.sh production
```

#### 3. Install Monitoring Stack

```bash
# Install Prometheus, Grafana, Jaeger
./install-monitoring.sh production
```

## 🏗️ Architecture

### Microservices

| Service | Port | Description |
|---------|------|-------------|
| API Gateway | 3000 | Entry point, routing, authentication |
| Auth Service | 3001 | User authentication and authorization |
| Property Service | 3002 | Property management |
| Reservation Service | 3003 | Booking and reservations |
| Restaurant Service | 3004 | Restaurant and bar management |
| Guest Service | 3005 | Guest profiles and preferences |
| Payment Service | 3006 | Payment processing |
| Notification Service | 3007 | Email, SMS, push notifications |
| Analytics Service | 3008 | Analytics and reporting |
| Storage Service | 3009 | File storage and management |

### Infrastructure Components

- **Kubernetes (EKS)**: Container orchestration
- **PostgreSQL (RDS)**: Primary database
- **Redis (ElastiCache)**: Caching and sessions
- **RabbitMQ**: Message broker
- **MinIO/S3**: Object storage
- **Prometheus**: Metrics collection
- **Grafana**: Dashboards and visualization
- **Jaeger**: Distributed tracing
- **Nginx Ingress**: Load balancing and routing

## 🔒 Security

### Network Policies

Network policies enforce zero-trust networking:
- Default deny all traffic
- Explicit allow rules for required communication
- Namespace isolation
- Pod-to-pod encryption with Istio mTLS

### Secrets Management

**Development/Staging:**
- Kubernetes Secrets (base64 encoded)

**Production:**
- Sealed Secrets or External Secrets Operator
- HashiCorp Vault integration
- AWS Secrets Manager

### Security Best Practices

- ✅ Non-root containers
- ✅ Read-only root filesystem
- ✅ Security context constraints
- ✅ Pod security policies
- ✅ Network segmentation
- ✅ TLS/SSL encryption
- ✅ Regular security scanning
- ✅ RBAC enforcement

## 📊 Monitoring

### Metrics

Prometheus collects metrics from:
- Application services (custom metrics)
- Kubernetes cluster (kube-state-metrics)
- Nodes (node-exporter)
- Databases (postgres-exporter, redis-exporter)

### Alerts

Alert rules are defined in `monitoring/prometheus/rules/alerts.yml`:
- Service availability
- Error rates
- Performance degradation
- Resource utilization
- Database health

### Dashboards

Grafana dashboards available for:
- Service overview
- API Gateway metrics
- Database performance
- Cache hit rates
- Message queue depth

## 🔄 CI/CD Pipeline

GitHub Actions workflow (`.github/workflows/ci-cd-pipeline.yml`):

1. **Code Quality**: Linting, type checking
2. **Security Scanning**: Trivy, Snyk, npm audit
3. **Testing**: Unit tests, integration tests
4. **Build**: Docker images for all services
5. **Deploy**: Automated deployment to dev/staging/prod

## 📝 Environment Variables

See `kubernetes/config/configmap.yaml` for configuration options.

Critical secrets (set via Kubernetes Secrets):
- `DATABASE_URL`
- `REDIS_URL`
- `JWT_SECRET`
- `STRIPE_SECRET_KEY`
- `SENDGRID_API_KEY`

## 🛠️ Troubleshooting

### Check pod status
```bash
kubectl get pods -n production
kubectl describe pod <pod-name> -n production
kubectl logs -f <pod-name> -n production
```

### Check service endpoints
```bash
kubectl get endpoints -n production
```

### Port forward for debugging
```bash
kubectl port-forward svc/api-gateway 3000:3000 -n production
```

### Check resource usage
```bash
kubectl top nodes
kubectl top pods -n production
```

## 📚 Additional Documentation

- [Microservices Architecture](../docs/architecture/MICROSERVICES_ARCHITECTURE.md)
- [API Documentation](../api/README.md)
- [Development Guide](../docs/DEVELOPMENT.md)

## 🤝 Contributing

See [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines.

## 📄 License

Proprietary - All rights reserved

