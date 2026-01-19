/**
 * Health Check Routes
 * Provides endpoints for monitoring application health and readiness
 */

import { Router, Request, Response } from 'express';
import { AppDataSource } from '../config/database';
import logger from '../config/logger';

const router = Router();

/**
 * Basic health check
 * Returns 200 if application is running
 * GET /health
 */
router.get('/', (_req: Request, res: Response) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    service: 'stayos-api',
  });
});

/**
 * Liveness probe
 * Kubernetes-compatible liveness check
 * Returns 200 if application is alive
 * GET /health/live
 */
router.get('/live', (_req: Request, res: Response) => {
  res.status(200).json({
    status: 'alive',
    timestamp: new Date().toISOString(),
  });
});

/**
 * Readiness probe
 * Kubernetes-compatible readiness check
 * Returns 200 if application is ready to serve traffic
 * Checks database connectivity
 * GET /health/ready
 */
router.get('/ready', async (req: Request, res: Response) => {
  try {
    // Check database connectivity
    const dbCheck = await checkDatabase();

    if (!dbCheck.healthy) {
      logger.error('Readiness check failed: Database unhealthy', {
        service: 'stayos-api',
        requestId: req.requestId,
        error: dbCheck.error,
      });

      res.status(503).json({
        status: 'not_ready',
        timestamp: new Date().toISOString(),
        checks: {
          database: dbCheck,
        },
      });
      return;
    }

    res.status(200).json({
      status: 'ready',
      timestamp: new Date().toISOString(),
      checks: {
        database: dbCheck,
      },
    });
  } catch (error) {
    logger.error('Readiness check failed', {
      service: 'stayos-api',
      requestId: req.requestId,
      error: error instanceof Error ? error.message : 'Unknown error',
    });

    res.status(503).json({
      status: 'not_ready',
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
});

/**
 * Detailed health check
 * Returns comprehensive health information
 * GET /health/detailed
 */
router.get('/detailed', async (req: Request, res: Response) => {
  try {
    const dbCheck = await checkDatabase();
    const memoryUsage = process.memoryUsage();

    const healthData = {
      status: dbCheck.healthy ? 'healthy' : 'degraded',
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version || '1.0.0',
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development',
      checks: {
        database: dbCheck,
      },
      system: {
        platform: process.platform,
        nodeVersion: process.version,
        memory: {
          rss: `${(memoryUsage.rss / 1024 / 1024).toFixed(2)} MB`,
          heapTotal: `${(memoryUsage.heapTotal / 1024 / 1024).toFixed(2)} MB`,
          heapUsed: `${(memoryUsage.heapUsed / 1024 / 1024).toFixed(2)} MB`,
          external: `${(memoryUsage.external / 1024 / 1024).toFixed(2)} MB`,
        },
        cpu: process.cpuUsage(),
      },
    };

    const statusCode = dbCheck.healthy ? 200 : 503;
    res.status(statusCode).json(healthData);
  } catch (error) {
    logger.error('Detailed health check failed', {
      service: 'stayos-api',
      requestId: req.requestId,
      error: error instanceof Error ? error.message : 'Unknown error',
    });

    res.status(503).json({
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
});

/**
 * Check database connectivity
 * @returns Health check result
 */
async function checkDatabase(): Promise<{ healthy: boolean; responseTime?: number; error?: string }> {
  const startTime = Date.now();

  try {
    // Simple query to check database connectivity
    await AppDataSource.query('SELECT 1');
    const responseTime = Date.now() - startTime;

    return {
      healthy: true,
      responseTime,
    };
  } catch (error) {
    return {
      healthy: false,
      error: error instanceof Error ? error.message : 'Unknown database error',
    };
  }
}

export default router;

