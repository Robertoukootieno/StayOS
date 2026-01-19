#!/bin/bash

# Script to create microservice scaffolding following clean architecture principles
# Usage: ./create-service-scaffolding.sh <service-name> <port>

set -e

SERVICE_NAME=$1
PORT=$2

if [ -z "$SERVICE_NAME" ] || [ -z "$PORT" ]; then
  echo "Usage: ./create-service-scaffolding.sh <service-name> <port>"
  echo "Example: ./create-service-scaffolding.sh api-gateway 3000"
  exit 1
fi

SERVICE_DIR="services/${SERVICE_NAME}"

echo "Creating scaffolding for ${SERVICE_NAME} on port ${PORT}..."

# Create directory structure following clean architecture
mkdir -p "${SERVICE_DIR}/src/domain/entities"
mkdir -p "${SERVICE_DIR}/src/domain/value-objects"
mkdir -p "${SERVICE_DIR}/src/domain/repositories"
mkdir -p "${SERVICE_DIR}/src/domain/events"
mkdir -p "${SERVICE_DIR}/src/application/use-cases"
mkdir -p "${SERVICE_DIR}/src/application/dtos"
mkdir -p "${SERVICE_DIR}/src/application/mappers"
mkdir -p "${SERVICE_DIR}/src/infrastructure/database/repositories"
mkdir -p "${SERVICE_DIR}/src/infrastructure/database/entities"
mkdir -p "${SERVICE_DIR}/src/infrastructure/http/controllers"
mkdir -p "${SERVICE_DIR}/src/infrastructure/http/middlewares"
mkdir -p "${SERVICE_DIR}/src/infrastructure/http/routes"
mkdir -p "${SERVICE_DIR}/src/infrastructure/messaging"
mkdir -p "${SERVICE_DIR}/src/infrastructure/config"
mkdir -p "${SERVICE_DIR}/tests/unit"
mkdir -p "${SERVICE_DIR}/tests/integration"
mkdir -p "${SERVICE_DIR}/tests/e2e"

echo "✅ Directory structure created"

# Create package.json
cat > "${SERVICE_DIR}/package.json" << EOF
{
  "name": "@stayos/${SERVICE_NAME}",
  "version": "1.0.0",
  "description": "StayOS ${SERVICE_NAME} microservice",
  "main": "dist/index.js",
  "scripts": {
    "dev": "nodemon --exec ts-node src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "lint": "eslint src --ext .ts",
    "format": "prettier --write \"src/**/*.ts\""
  },
  "keywords": ["stayos", "microservice", "${SERVICE_NAME}"],
  "author": "StayOS Team",
  "license": "MIT",
  "dependencies": {
    "@stayos/shared": "file:../shared",
    "@opentelemetry/api": "^1.9.0",
    "@opentelemetry/auto-instrumentations-node": "^0.68.0",
    "@opentelemetry/resources": "^2.4.0",
    "@opentelemetry/sdk-node": "^0.210.0",
    "@opentelemetry/semantic-conventions": "^1.39.0",
    "class-transformer": "^0.5.1",
    "class-validator": "^0.14.0",
    "compression": "^1.8.1",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "helmet": "^7.1.0",
    "pg": "^8.11.3",
    "reflect-metadata": "^0.1.13",
    "typeorm": "^0.3.17",
    "winston": "^3.11.0"
  },
  "devDependencies": {
    "@types/compression": "^1.8.1",
    "@types/cors": "^2.8.17",
    "@types/express": "^4.17.21",
    "@types/jest": "^29.5.11",
    "@types/node": "^20.10.5",
    "@types/pg": "^8.10.9",
    "@types/supertest": "^6.0.3",
    "@typescript-eslint/eslint-plugin": "^6.15.0",
    "@typescript-eslint/parser": "^6.15.0",
    "eslint": "^8.56.0",
    "jest": "^29.7.0",
    "nodemon": "^3.0.2",
    "prettier": "^3.1.1",
    "supertest": "^7.2.2",
    "ts-jest": "^29.1.1",
    "ts-node": "^10.9.2",
    "typescript": "^5.3.3"
  },
  "engines": {
    "node": ">=20.0.0",
    "npm": ">=9.0.0"
  }
}
EOF

echo "✅ package.json created"

# Create tsconfig.json
cat > "${SERVICE_DIR}/tsconfig.json" << 'EOF'
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "moduleResolution": "node",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,
    "removeComments": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "paths": {
      "@stayos/shared": ["../shared/src"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "tests"]
}
EOF

echo "✅ tsconfig.json created"

echo "✅ Scaffolding for ${SERVICE_NAME} created successfully!"

