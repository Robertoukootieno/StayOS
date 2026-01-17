import { Request, Response, NextFunction } from 'express';
import logger from '../config/logger';

/**
 * Header Enrichment Middleware
 * 
 * Adds standard response headers to all API responses:
 * - X-Request-Id: Unique request identifier (for debugging)
 * - X-Correlation-Id: Correlation ID (echoed from request)
 * - X-Trace-Id: Distributed tracing ID (OpenTelemetry)
 * - X-Span-Id: Span ID for this request
 * - X-Tenant-Id: Tenant ID (echoed from request)
 * - Content-Language: Language of response content
 * - X-Currency: Currency used in response
 * - X-Timezone: Timezone used in response
 * - X-API-Version: API version
 * 
 * This middleware should be applied early in the middleware chain,
 * after tracing and localization middleware.
 */
export const headerEnrichmentMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  try {
    // Store original res.json to intercept responses
    const originalJson = res.json.bind(res);

    // Override res.json to add headers before sending response
    res.json = function (body: any): Response {
      // ============================================
      // Correlation & Tracing Headers
      // ============================================
      if (req.requestId) {
        res.setHeader('X-Request-Id', req.requestId);
      }

      if (req.correlationId) {
        res.setHeader('X-Correlation-Id', req.correlationId);
      }

      if (req.traceId) {
        res.setHeader('X-Trace-Id', req.traceId);
      }

      if (req.spanId) {
        res.setHeader('X-Span-Id', req.spanId);
      }

      // ============================================
      // Multi-Tenancy Headers
      // ============================================
      if (req.tenantId) {
        res.setHeader('X-Tenant-Id', req.tenantId);
      }

      if (req.brandId) {
        res.setHeader('X-Brand-Id', req.brandId);
      }

      // ============================================
      // Localization Headers
      // ============================================
      if (req.locale) {
        res.setHeader('Content-Language', req.locale.language);
        res.setHeader('X-Currency', req.locale.currency);
        res.setHeader('X-Timezone', req.locale.timezone);
      }

      // ============================================
      // API Version
      // ============================================
      const apiVersion = process.env.API_VERSION || '1.0.0';
      res.setHeader('X-API-Version', apiVersion);

      // ============================================
      // Security Headers (Additional)
      // ============================================
      res.setHeader('X-Content-Type-Options', 'nosniff');
      res.setHeader('X-Frame-Options', 'DENY');
      res.setHeader('X-XSS-Protection', '1; mode=block');

      // ============================================
      // CORS & Caching
      // ============================================
      res.setHeader('Vary', 'Accept-Language, X-Tenant-Id, X-Currency');

      // Call original json method
      return originalJson(body);
    };

    next();
  } catch (error) {
    logger.error('Header enrichment middleware error:', error);
    next();
  }
};

/**
 * Rate Limit Headers Middleware
 *
 * Adds rate limiting headers to responses:
 * - X-RateLimit-Limit: Request limit per time window
 * - X-RateLimit-Remaining: Remaining requests in current window
 * - X-RateLimit-Reset: Time when the rate limit resets (Unix timestamp)
 *
 * This is a placeholder - actual rate limiting logic should be implemented
 * using express-rate-limit or similar library.
 */
export const rateLimitHeadersMiddleware = (_req: Request, res: Response, next: NextFunction): void => {
  try {
    // These values should come from actual rate limiter
    // For now, using placeholder values
    const limit = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100');
    const remaining = 95; // Placeholder
    const resetTime = Math.floor(Date.now() / 1000) + 900; // 15 minutes from now

    res.setHeader('X-RateLimit-Limit', limit.toString());
    res.setHeader('X-RateLimit-Remaining', remaining.toString());
    res.setHeader('X-RateLimit-Reset', resetTime.toString());

    next();
  } catch (error) {
    logger.error('Rate limit headers middleware error:', error);
    next();
  }
};

/**
 * ETag Middleware
 * 
 * Generates ETag for responses to support caching and optimistic locking.
 * This is a simple implementation - for production, consider using
 * a more robust ETag generation strategy.
 */
export const etagMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const originalJson = res.json.bind(res);

    res.json = function (body: any): Response {
      // Generate simple ETag based on response body
      // In production, use a more sophisticated approach
      if (body && typeof body === 'object') {
        const etag = `"${Buffer.from(JSON.stringify(body)).toString('base64').substring(0, 32)}"`;
        res.setHeader('ETag', etag);

        // Check If-None-Match header for conditional requests
        const ifNoneMatch = req.headers['if-none-match'];
        if (ifNoneMatch === etag) {
          res.status(304);
          return res.end() as any;
        }
      }

      return originalJson(body);
    };

    next();
  } catch (error) {
    logger.error('ETag middleware error:', error);
    next();
  }
};

