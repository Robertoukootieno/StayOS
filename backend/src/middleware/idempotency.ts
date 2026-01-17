import { Request, Response, NextFunction } from 'express';
import logger from '../config/logger';

/**
 * In-memory idempotency store
 * In production, use Redis or similar distributed cache
 */
interface IdempotencyRecord {
  statusCode: number;
  headers: Record<string, string>;
  body: any;
  timestamp: number;
}

const idempotencyStore = new Map<string, IdempotencyRecord>();

/**
 * Cleanup old idempotency records (older than 24 hours)
 */
const cleanupIdempotencyStore = (): void => {
  const now = Date.now();
  const maxAge = 24 * 60 * 60 * 1000; // 24 hours

  for (const [key, record] of idempotencyStore.entries()) {
    if (now - record.timestamp > maxAge) {
      idempotencyStore.delete(key);
    }
  }
};

// Run cleanup every hour
setInterval(cleanupIdempotencyStore, 60 * 60 * 1000);

/**
 * Validate UUID format
 */
const isValidUUID = (uuid: string): boolean => {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
};

/**
 * Idempotency Middleware
 * 
 * Ensures idempotent operations for POST requests using Idempotency-Key header.
 * 
 * How it works:
 * 1. Client sends Idempotency-Key header with POST request
 * 2. Server checks if this key has been seen before
 * 3. If yes, returns the cached response (same status code, headers, body)
 * 4. If no, processes the request and caches the response
 * 
 * This prevents duplicate operations (e.g., double-charging, duplicate reservations)
 * when clients retry failed requests.
 * 
 * Note: In production, use Redis or similar distributed cache instead of in-memory storage.
 */
export const idempotencyMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  try {
    // Only apply to POST requests
    if (req.method !== 'POST') {
      next();
      return;
    }

    // Extract idempotency key from header
    const idempotencyKey = req.headers['idempotency-key'] as string;

    // Idempotency key is optional, but recommended for POST requests
    if (!idempotencyKey) {
      logger.debug('No idempotency key provided for POST request', {
        path: req.path,
        requestId: req.requestId,
      });
      next();
      return;
    }

    // Validate UUID format
    if (!isValidUUID(idempotencyKey)) {
      res.status(400).json({
        type: 'https://api.stayos.com/errors/invalid-idempotency-key',
        title: 'Invalid Idempotency Key',
        status: 400,
        detail: 'Idempotency-Key must be a valid UUID',
        instance: req.path,
        traceId: req.requestId,
      });
      return;
    }

    // Attach to request for logging
    req.idempotencyKey = idempotencyKey;

    // Create composite key: tenantId + idempotencyKey
    // This ensures idempotency keys are scoped to tenants
    const compositeKey = req.tenantId 
      ? `${req.tenantId}:${idempotencyKey}`
      : idempotencyKey;

    // Check if we've seen this idempotency key before
    const cachedResponse = idempotencyStore.get(compositeKey);

    if (cachedResponse) {
      logger.info('Returning cached response for idempotency key', {
        idempotencyKey,
        tenantId: req.tenantId,
        requestId: req.requestId,
        cachedStatusCode: cachedResponse.statusCode,
      });

      // Return cached response
      res.status(cachedResponse.statusCode);
      
      // Set cached headers
      for (const [key, value] of Object.entries(cachedResponse.headers)) {
        res.setHeader(key, value);
      }

      // Add header to indicate this is a cached response
      res.setHeader('X-Idempotency-Replayed', 'true');

      res.json(cachedResponse.body);
      return;
    }

    // Store original res.json to intercept response
    const originalJson = res.json.bind(res);

    // Override res.json to cache the response
    res.json = function (body: any): Response {
      // Cache the response for future requests with same idempotency key
      const record: IdempotencyRecord = {
        statusCode: res.statusCode,
        headers: {},
        body,
        timestamp: Date.now(),
      };

      // Cache relevant headers
      const headersToCache = ['content-type', 'location', 'etag'];
      for (const header of headersToCache) {
        const value = res.getHeader(header);
        if (value) {
          record.headers[header] = value.toString();
        }
      }

      idempotencyStore.set(compositeKey, record);

      logger.debug('Cached response for idempotency key', {
        idempotencyKey,
        tenantId: req.tenantId,
        requestId: req.requestId,
        statusCode: res.statusCode,
      });

      return originalJson(body);
    };

    next();
  } catch (error) {
    logger.error('Idempotency middleware error:', error);
    next();
  }
};

/**
 * Get idempotency store size (for monitoring)
 */
export const getIdempotencyStoreSize = (): number => idempotencyStore.size;

/**
 * Clear idempotency store (for testing)
 */
export const clearIdempotencyStore = (): void => idempotencyStore.clear();

