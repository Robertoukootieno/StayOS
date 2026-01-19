import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { Logger } from '@stayos/shared';
import { PostgresUserRepository } from './infrastructure/database/repositories/PostgresUserRepository';
import { PasswordHasher } from './infrastructure/services/PasswordHasher';
import { TokenService } from './infrastructure/services/TokenService';
import { createAuthRoutes } from './infrastructure/http/routes/auth.routes';
import { createDatabasePool, testDatabaseConnection } from './infrastructure/config/database';

const logger = new Logger('auth-service');

// Create Express app
export const app: Application = express();

// Initialize database
const dbPool = createDatabasePool();

// Test database connection on startup
testDatabaseConnection(dbPool).then((connected) => {
  if (!connected) {
    logger.error('Failed to connect to database');
    process.exit(1);
  }
});

// Initialize services
const userRepository = new PostgresUserRepository(dbPool);
const passwordHasher = new PasswordHasher();
const tokenService = new TokenService();

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
  logger.info(`${req.method} ${req.path}`, {
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
    service: 'auth-service',
    timestamp: new Date().toISOString(),
  });
});

// Readiness check endpoint
app.get('/health/ready', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'ready',
    service: 'auth-service',
    timestamp: new Date().toISOString(),
  });
});

// Liveness check endpoint
app.get('/health/live', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'alive',
    service: 'auth-service',
    timestamp: new Date().toISOString(),
  });
});

// API routes
app.use('/api/v1/auth', createAuthRoutes(userRepository, passwordHasher, tokenService));

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Route ${req.method} ${req.path} not found`,
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
