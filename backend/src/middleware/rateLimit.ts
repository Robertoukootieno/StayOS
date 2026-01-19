/**
 * Rate Limiting Middleware
 * Implements token bucket algorithm for API rate limiting
 */

import { Request, Response, NextFunction } from 'express';
import logger from '../config/logger';

/**
 * Rate limit configuration
 */
interface RateLimitConfig {
  windowMs: number;      // Time window in milliseconds
  maxRequests: number;   // Maximum requests per window
  message?: string;      // Custom error message
  skipSuccessfulRequests?: boolean; // Don't count successful requests
  skipFailedRequests?: boolean;     // Don't count failed requests
}

/**
 * Rate limit store (in-memory)
 * In production, use Redis for distributed rate limiting
 */
interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

/**
 * Clean up expired entries every 5 minutes
 */
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitStore.entries()) {
    if (entry.resetTime < now) {
      rateLimitStore.delete(key);
    }
  }
}, 5 * 60 * 1000);

/**
 * Get rate limit key for request
 * Uses tenant ID + IP address for multi-tenant rate limiting
 */
const getRateLimitKey = (req: Request): string => {
  const tenantId = req.tenantId || 'anonymous';
  const ip = req.ip || req.socket.remoteAddress || 'unknown';
  return `${tenantId}:${ip}`;
};

/**
 * Rate limiting middleware factory
 * @param config - Rate limit configuration
 * @returns Express middleware function
 */
export const rateLimit = (config: RateLimitConfig) => {
  const {
    windowMs,
    maxRequests,
    message = 'Too many requests, please try again later',
    skipSuccessfulRequests = false,
    skipFailedRequests = false,
  } = config;

  return (req: Request, res: Response, next: NextFunction): void => {
    const key = getRateLimitKey(req);
    const now = Date.now();

    // Get or create rate limit entry
    let entry = rateLimitStore.get(key);

    if (!entry || entry.resetTime < now) {
      // Create new entry or reset expired entry
      entry = {
        count: 0,
        resetTime: now + windowMs,
      };
      rateLimitStore.set(key, entry);
    }

    // Increment request count
    entry.count++;

    // Calculate remaining requests and reset time
    const remaining = Math.max(0, maxRequests - entry.count);
    const resetTime = Math.ceil((entry.resetTime - now) / 1000); // seconds

    // Set rate limit headers (RFC 6585)
    res.setHeader('X-RateLimit-Limit', maxRequests.toString());
    res.setHeader('X-RateLimit-Remaining', remaining.toString());
    res.setHeader('X-RateLimit-Reset', resetTime.toString());

    // Check if rate limit exceeded
    if (entry.count > maxRequests) {
      logger.warn('Rate limit exceeded', {
        service: 'stayos-api',
        requestId: req.requestId,
        tenantId: req.tenantId,
        ip: req.ip,
        count: entry.count,
        limit: maxRequests,
      });

      res.status(429).json({
        type: 'https://api.stayos.com/errors/rate-limit-exceeded',
        title: 'Too Many Requests',
        status: 429,
        detail: message,
        instance: req.path,
        traceId: req.requestId,
        retryAfter: resetTime,
      });
      return;
    }

    // Handle skip options
    if (skipSuccessfulRequests || skipFailedRequests) {
      const originalSend = res.send;
      res.send = function (body: any): Response {
        const statusCode = res.statusCode;
        
        if (
          (skipSuccessfulRequests && statusCode < 400) ||
          (skipFailedRequests && statusCode >= 400)
        ) {
          // Decrement count for skipped requests
          if (entry) {
            entry.count = Math.max(0, entry.count - 1);
          }
        }
        
        return originalSend.call(this, body);
      };
    }

    next();
  };
};

/**
 * Preset rate limit configurations
 */
export const RateLimitPresets = {
  /**
   * Strict rate limit for authentication endpoints
   * 5 requests per 15 minutes
   */
  AUTH: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 5,
    message: 'Too many authentication attempts, please try again later',
  },

  /**
   * Standard rate limit for API endpoints
   * 100 requests per minute
   */
  STANDARD: {
    windowMs: 60 * 1000, // 1 minute
    maxRequests: 100,
  },

  /**
   * Relaxed rate limit for read operations
   * 300 requests per minute
   */
  READ: {
    windowMs: 60 * 1000, // 1 minute
    maxRequests: 300,
    skipFailedRequests: true,
  },

  /**
   * Strict rate limit for write operations
   * 30 requests per minute
   */
  WRITE: {
    windowMs: 60 * 1000, // 1 minute
    maxRequests: 30,
  },
};

