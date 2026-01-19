import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { Logger } from '@stayos/shared';
import { createDatabasePool, testDatabaseConnection } from './infrastructure/config/database';
import { VenueRepository } from './infrastructure/database/repositories/VenueRepository';
import { createVenueRoutes } from './infrastructure/http/routes/venue.routes';

const logger = new Logger('restaurant-service');

// Create Express app
export const app: Application = express();

// Initialize database
const dbPool = createDatabasePool();

// Test database connection
testDatabaseConnection(dbPool).then((connected) => {
  if (!connected) {
    logger.error('Failed to connect to database');
    process.exit(1);
  }
});

// Initialize repositories
const venueRepository = new VenueRepository(dbPool);

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
app.get('/health', async (req: Request, res: Response) => {
  const dbHealthy = await testDatabaseConnection(dbPool);

  res.status(dbHealthy ? 200 : 503).json({
    status: dbHealthy ? 'healthy' : 'unhealthy',
    service: 'restaurant-service',
    timestamp: new Date().toISOString(),
    checks: {
      database: dbHealthy ? 'up' : 'down',
    },
  });
});

// Readiness check endpoint
app.get('/health/ready', async (req: Request, res: Response) => {
  const dbHealthy = await testDatabaseConnection(dbPool);

  res.status(dbHealthy ? 200 : 503).json({
    status: dbHealthy ? 'ready' : 'not ready',
    service: 'restaurant-service',
    timestamp: new Date().toISOString(),
  });
});

// Liveness check endpoint
app.get('/health/live', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'alive',
    service: 'restaurant-service',
    timestamp: new Date().toISOString(),
  });
});

// API routes
app.use('/api/v1/venues', createVenueRoutes(venueRepository));

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

// Export database pool for cleanup
export { dbPool };
