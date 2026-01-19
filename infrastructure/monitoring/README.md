# StayOS Monitoring Stack

Comprehensive monitoring and observability stack for the StayOS microservices platform.

## Components

### 1. **Prometheus** - Metrics Collection
- **Port**: 9090
- **Purpose**: Time-series database for metrics collection
- **Features**:
  - Service discovery for automatic target detection
  - PromQL for powerful metric queries
  - 30-day data retention
  - Alert rule evaluation

### 2. **Grafana** - Metrics Visualization
- **Port**: 3001
- **Purpose**: Dashboards and visualization
- **Features**:
  - Pre-configured dashboards for all services
  - Real-time metrics visualization
  - Alert management UI
  - Multiple data source support

### 3. **Jaeger** - Distributed Tracing
- **Port**: 16686 (UI), 14268 (Collector), 4317/4318 (OTLP)
- **Purpose**: Distributed tracing and request flow visualization
- **Features**:
  - End-to-end request tracing
  - Service dependency visualization
  - Performance bottleneck identification
  - Trace sampling strategies

### 4. **Alertmanager** - Alert Management
- **Port**: 9093
- **Purpose**: Alert routing and notification
- **Features**:
  - Alert grouping and deduplication
  - Multiple notification channels (Email, Slack)
  - Alert inhibition rules
  - Silence management

### 5. **Node Exporter** - System Metrics
- **Port**: 9100
- **Purpose**: Host-level metrics collection
- **Metrics**: CPU, memory, disk, network

### 6. **cAdvisor** - Container Metrics
- **Port**: 8080
- **Purpose**: Container resource usage and performance metrics

## Quick Start

### Local Development (Docker Compose)

```bash
# Create Docker network (if not exists)
docker network create stayos-network

# Start monitoring stack
cd infrastructure/docker
docker-compose -f docker-compose.monitoring.yml up -d

# Check status
docker-compose -f docker-compose.monitoring.yml ps

# View logs
docker-compose -f docker-compose.monitoring.yml logs -f
```

### Kubernetes Deployment

```bash
# Deploy monitoring stack to Kubernetes
cd infrastructure/scripts
./deploy-monitoring.sh development

# Check deployment status
kubectl get pods -n monitoring

# Access services
kubectl port-forward -n monitoring svc/prometheus 9090:9090
kubectl port-forward -n monitoring svc/grafana 3001:80
kubectl port-forward -n monitoring svc/jaeger-query 16686:16686
```

## Access URLs

### Local Development
- **Prometheus**: http://localhost:9090
- **Grafana**: http://localhost:3001 (admin/admin)
- **Jaeger**: http://localhost:16686
- **Alertmanager**: http://localhost:9093
- **Node Exporter**: http://localhost:9100/metrics
- **cAdvisor**: http://localhost:8080

### Kubernetes
URLs will be provided after deployment via LoadBalancer or Ingress.

## Dashboards

### Pre-configured Grafana Dashboards

1. **Microservices Overview** (`microservices-overview.json`)
   - Service health status
   - Request rates across all services
   - Response time percentiles
   - Error rates
   - Resource usage (CPU, memory)
   - Database and Redis metrics

2. **API Gateway Dashboard** (`api-gateway-dashboard.json`)
   - Total requests
   - Success rate
   - Average response time
   - Active connections
   - Request rate by endpoint
   - Response time distribution

## Metrics

### Application Metrics

All services expose metrics at `/metrics` endpoint:

- `http_requests_total` - Total HTTP requests
- `http_request_duration_seconds` - Request duration histogram
- `http_active_connections` - Active HTTP connections
- `process_cpu_seconds_total` - CPU usage
- `process_resident_memory_bytes` - Memory usage

### Custom Business Metrics

- `reservations_created_total` - Total reservations created
- `payments_processed_total` - Total payments processed
- `notifications_sent_total` - Total notifications sent
- `cache_hits_total` - Cache hit rate
- `database_query_duration_seconds` - Database query performance

## Alerts

### Critical Alerts

- Service down (>5 minutes)
- High error rate (>5% for 5 minutes)
- Database connection failures
- Payment processing failures
- High memory usage (>90%)
- High CPU usage (>80%)

### Warning Alerts

- Elevated error rate (>1% for 10 minutes)
- Slow response times (p95 >1s)
- High disk usage (>80%)
- Certificate expiration (< 7 days)

## Tracing

### Sampling Strategies

- **API Gateway**: 100% (all requests traced)
- **Auth Service**: 100% (security critical)
- **Payment Service**: 100% (financial transactions)
- **Reservation Service**: 100% (core business logic)
- **Property Service**: 50%
- **Restaurant Service**: 50%
- **Guest Service**: 50%
- **Storage Service**: 30%
- **Notification Service**: 30%
- **Analytics Service**: 10%

### Trace Context Propagation

All services use OpenTelemetry for automatic trace context propagation via HTTP headers:
- `traceparent`
- `tracestate`

## Configuration

### Prometheus Configuration
- **File**: `prometheus/prometheus.yml`
- **Scrape Interval**: 15s
- **Evaluation Interval**: 15s
- **Retention**: 30 days

### Grafana Configuration
- **File**: `grafana/grafana.ini`
- **Admin User**: admin
- **Admin Password**: Set via `GRAFANA_ADMIN_PASSWORD` env var

### Jaeger Configuration
- **File**: `jaeger/jaeger-config.yml`
- **Storage**: Elasticsearch (production) / Badger (development)
- **Retention**: 7 days

## Troubleshooting

### Prometheus not scraping targets

```bash
# Check Prometheus targets
curl http://localhost:9090/api/v1/targets

# Check service discovery
curl http://localhost:9090/api/v1/targets/metadata
```

### Grafana dashboards not loading

```bash
# Check Grafana logs
docker logs stayos-grafana

# Verify datasource connection
curl -u admin:admin http://localhost:3001/api/datasources
```

### Jaeger not receiving traces

```bash
# Check Jaeger collector logs
docker logs stayos-jaeger

# Verify OTLP endpoint
curl http://localhost:4318/v1/traces
```

## Best Practices

1. **Set appropriate sampling rates** to balance observability and performance
2. **Use structured logging** with correlation IDs
3. **Define SLOs** (Service Level Objectives) and create alerts based on them
4. **Regular dashboard reviews** to ensure they remain relevant
5. **Alert fatigue prevention** - tune alert thresholds to reduce noise
6. **Retention policies** - balance storage costs with data retention needs

## License

MIT

