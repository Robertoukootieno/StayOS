#!/bin/bash

# Script to create base files for each microservice
# Usage: ./create-service-base-files.sh <service-name> <port>

set -e

SERVICE_NAME=$1
PORT=$2
SERVICE_TITLE=$(echo "$SERVICE_NAME" | sed 's/-/ /g' | sed 's/\b\(.\)/\u\1/g')

if [ -z "$SERVICE_NAME" ] || [ -z "$PORT" ]; then
  echo "Usage: ./create-service-base-files.sh <service-name> <port>"
  exit 1
fi

SERVICE_DIR="services/${SERVICE_NAME}"

echo "Creating base files for ${SERVICE_NAME}..."

# Create index.ts
cat > "${SERVICE_DIR}/src/index.ts" << EOF
import 'reflect-metadata';
import dotenv from 'dotenv';
import { app } from './app';
import { Logger } from '@stayos/shared';

// Load environment variables
dotenv.config();

const logger = new Logger('${SERVICE_NAME}');
const PORT = process.env.PORT || ${PORT};

// Start server
app.listen(PORT, () => {
  logger.info(\`${SERVICE_TITLE} started on port \${PORT}\`);
  logger.info(\`Environment: \${process.env.NODE_ENV || 'development'}\`);
  logger.info(\`Health check: http://localhost:\${PORT}/health\`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM signal received: closing HTTP server');
  process.exit(0);
});

process.on('SIGINT', () => {
  logger.info('SIGINT signal received: closing HTTP server');
  process.exit(0);
});
EOF

# Create app.ts
cat > "${SERVICE_DIR}/src/app.ts" << EOF
import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { Logger } from '@stayos/shared';

const logger = new Logger('${SERVICE_NAME}');

// Create Express app
export const app: Application = express();

// Security middleware
app.use(helmet());
app.use(cors());

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Compression middleware
app.use(compression());

// Request logging middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  logger.info(\`\${req.method} \${req.path}\`, {
    method: req.method,
    path: req.path,
    query: req.query,
    ip: req.ip,
  });
  next();
});

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'healthy',
    service: '${SERVICE_NAME}',
    timestamp: new Date().toISOString(),
  });
});

// Readiness check endpoint
app.get('/health/ready', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'ready',
    service: '${SERVICE_NAME}',
    timestamp: new Date().toISOString(),
  });
});

// Liveness check endpoint
app.get('/health/live', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'alive',
    service: '${SERVICE_NAME}',
    timestamp: new Date().toISOString(),
  });
});

// API routes will be added here
// app.use('/api/v1', routes);

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Not Found',
    message: \`Route \${req.method} \${req.path} not found\`,
  });
});

// Error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error('Unhandled error', {
    error: err.message,
    stack: err.stack,
    path: req.path,
  });

  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'An error occurred',
  });
});
EOF

# Create .env.example
cat > "${SERVICE_DIR}/.env.example" << EOF
# ${SERVICE_TITLE} Configuration
NODE_ENV=development
PORT=${PORT}
LOG_LEVEL=info

# Database
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=stayos
DATABASE_USER=postgres
DATABASE_PASSWORD=postgres

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=

# RabbitMQ
RABBITMQ_URL=amqp://localhost:5672

# OpenTelemetry
OTEL_EXPORTER_JAEGER_ENDPOINT=http://localhost:14268/api/traces
OTEL_SERVICE_NAME=${SERVICE_NAME}

# JWT
JWT_SECRET=your-secret-key-change-in-production
JWT_EXPIRES_IN=1h
EOF

echo "✅ Base files created for ${SERVICE_NAME}"

