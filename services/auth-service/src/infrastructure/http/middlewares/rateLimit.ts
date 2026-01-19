import { Request, Response, NextFunction } from 'express';
import { Logger } from '@stayos/shared';

const logger = new Logger('RateLimitMiddleware');

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetAt: number;
  };
}

const store: RateLimitStore = {};

// Clean up expired entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  Object.keys(store).forEach((key) => {
    if (store[key].resetAt < now) {
      delete store[key];
    }
  });
}, 5 * 60 * 1000);

export interface RateLimitOptions {
  windowMs: number; // Time window in milliseconds
  max: number; // Max requests per window
  message?: string;
  keyGenerator?: (req: Request) => string;
}

export function rateLimitMiddleware(options: RateLimitOptions) {
  const {
    windowMs,
    max,
    message = 'Too many requests, please try again later',
    keyGenerator = (req: Request) => req.ip || 'unknown',
  } = options;

  return (req: Request, res: Response, next: NextFunction): void => {
    const key = keyGenerator(req);
    const now = Date.now();

    // Initialize or get existing entry
    if (!store[key] || store[key].resetAt < now) {
      store[key] = {
        count: 0,
        resetAt: now + windowMs,
      };
    }

    // Increment count
    store[key].count++;

    // Set rate limit headers
    const remaining = Math.max(0, max - store[key].count);
    const resetTime = Math.ceil(store[key].resetAt / 1000);

    res.setHeader('X-RateLimit-Limit', max.toString());
    res.setHeader('X-RateLimit-Remaining', remaining.toString());
    res.setHeader('X-RateLimit-Reset', resetTime.toString());

    // Check if limit exceeded
    if (store[key].count > max) {
      const retryAfter = Math.ceil((store[key].resetAt - now) / 1000);
      res.setHeader('Retry-After', retryAfter.toString());

      logger.warn('Rate limit exceeded', {
        key,
        count: store[key].count,
        max,
        ip: req.ip,
        path: req.path,
      });

      res.status(429).json({
        error: 'Too Many Requests',
        message,
        retryAfter,
      });
      return;
    }

    next();
  };
}

// Predefined rate limiters for common use cases
export const authRateLimiter = rateLimitMiddleware({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per 15 minutes
  message: 'Too many login attempts, please try again later',
  keyGenerator: (req: Request) => {
    // Rate limit by IP and email combination for login attempts
    const email = req.body.username || req.body.email || '';
    return `${req.ip}:${email}`;
  },
});

export const registerRateLimiter = rateLimitMiddleware({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3, // 3 registrations per hour per IP
  message: 'Too many registration attempts, please try again later',
});

export const passwordResetRateLimiter = rateLimitMiddleware({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3, // 3 password reset requests per hour
  message: 'Too many password reset requests, please try again later',
  keyGenerator: (req: Request) => {
    const email = req.body.email || '';
    return `${req.ip}:${email}`;
  },
});

export const refreshTokenRateLimiter = rateLimitMiddleware({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // 10 refresh requests per 15 minutes
  message: 'Too many token refresh attempts, please try again later',
});

