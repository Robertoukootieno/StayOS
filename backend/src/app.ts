import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import logger from './config/logger';
import authRouter from './routes/auth';
import propertiesRouter from './routes/properties';
import venuesRouter from './routes/venues';
import tablesRouter from './routes/tables';
import reservationsRouter from './routes/reservations';
import healthRouter from './routes/health';
import docsRouter from './routes/docs';

// Import new middleware
import { tracingMiddleware } from './middleware/tracing';
import { localizationMiddleware } from './middleware/localization';
import { headerEnrichmentMiddleware, rateLimitHeadersMiddleware } from './middleware/headers';
import { optionalTenant } from './middleware/tenant';
import { idempotencyMiddleware } from './middleware/idempotency';

dotenv.config();

const app: Application = express();

// ============================================
// MIDDLEWARE
// ============================================

// Security headers
app.use(helmet());

// CORS configuration
const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'],
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Response compression
app.use(compression({
  filter: (req, res) => {
    if (req.headers['x-no-compression']) {
      return false;
    }
    return compression.filter(req, res);
  },
  level: 6, // Compression level (0-9)
}));

// Body parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Rate limiting (global)
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'), // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100'),
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// ============================================
// ENTERPRISE MIDDLEWARE (Phase 3)
// ============================================

// 1. Tracing & Correlation (must be first to generate request IDs)
app.use(tracingMiddleware);

// 2. Localization (extract language, timezone, currency)
app.use(localizationMiddleware);

// 3. Header Enrichment (add response headers)
app.use(headerEnrichmentMiddleware);
app.use(rateLimitHeadersMiddleware);

// 4. Tenant Validation (optional for public endpoints, required for protected)
// Note: We'll apply validateTenant selectively on protected routes
// For now, use optionalTenant globally to extract tenant context if provided
app.use(optionalTenant);

// 5. Idempotency (for POST requests)
app.use(idempotencyMiddleware);

// ============================================
// ROUTES
// ============================================

// Health check routes (no authentication required)
app.use('/health', healthRouter);

// API documentation routes (no authentication required)
app.use('/docs', docsRouter);

// Root endpoint
app.get('/', (_req: Request, res: Response) => {
  res.json({
    name: 'StayOS API',
    version: process.env.API_VERSION || '1.0.0',
    description: 'Comprehensive property management system with restaurant and bar features',
    documentation: '/docs',
    health: '/health',
    timestamp: new Date().toISOString(),
  });
});

// API routes
const apiPrefix = process.env.API_PREFIX || '/v1';
app.use(`${apiPrefix}/auth`, authRouter);
app.use(`${apiPrefix}/properties`, propertiesRouter);
app.use(`${apiPrefix}/venues`, venuesRouter);
app.use(`${apiPrefix}/venues/:venueId/tables`, tablesRouter);
app.use(`${apiPrefix}/venues/:venueId/reservations`, reservationsRouter);

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    type: 'https://stayos.com/errors/not-found',
    title: 'Not Found',
    status: 404,
    detail: `The requested resource ${req.path} was not found`,
    instance: req.path,
  });
});

// Error handler
app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  logger.error('Unhandled error:', err);
  res.status(500).json({
    type: 'https://stayos.com/errors/internal-server-error',
    title: 'Internal Server Error',
    status: 500,
    detail: process.env.NODE_ENV === 'development' ? err.message : 'An unexpected error occurred',
    instance: req.path,
  });
});

export default app;

