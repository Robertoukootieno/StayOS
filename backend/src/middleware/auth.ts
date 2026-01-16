import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import logger from '../config/logger';

// Extend Express Request to include user
export interface AuthRequest extends Request {
  user?: {
    id: string;
    email: string;
    scopes: string[];
    role: string;
  };
}

/**
 * JWT Authentication Middleware
 * Validates Bearer tokens and attaches user info to request
 */
export const authenticate = (req: AuthRequest, res: Response, next: NextFunction): void => {
  try {
    // Get token from Authorization header
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
      res.status(401).json({
        type: 'https://stayos.com/errors/unauthorized',
        title: 'Unauthorized',
        status: 401,
        detail: 'No authorization header provided',
        instance: req.path,
      });
      return;
    }

    // Check if it's a Bearer token
    const parts = authHeader.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
      res.status(401).json({
        type: 'https://stayos.com/errors/unauthorized',
        title: 'Unauthorized',
        status: 401,
        detail: 'Invalid authorization header format. Expected: Bearer <token>',
        instance: req.path,
      });
      return;
    }

    const token = parts[1];
    const jwtSecret = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-this-in-production';

    // Verify token
    const decoded = jwt.verify(token, jwtSecret) as any;

    // Attach user info to request
    req.user = {
      id: decoded.sub || decoded.userId,
      email: decoded.email,
      scopes: decoded.scope ? decoded.scope.split(' ') : [],
      role: decoded.role || 'user',
    };

    logger.info(`Authenticated user: ${req.user.email}`, {
      userId: req.user.id,
      scopes: req.user.scopes,
    });

    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      res.status(401).json({
        type: 'https://stayos.com/errors/token-expired',
        title: 'Token Expired',
        status: 401,
        detail: 'The provided token has expired',
        instance: req.path,
      });
      return;
    }

    if (error instanceof jwt.JsonWebTokenError) {
      res.status(401).json({
        type: 'https://stayos.com/errors/invalid-token',
        title: 'Invalid Token',
        status: 401,
        detail: 'The provided token is invalid',
        instance: req.path,
      });
      return;
    }

    logger.error('Authentication error:', error);
    res.status(500).json({
      type: 'https://stayos.com/errors/internal-server-error',
      title: 'Internal Server Error',
      status: 500,
      detail: 'An error occurred during authentication',
      instance: req.path,
    });
  }
};

/**
 * Authorization Middleware - Check if user has required scopes
 */
export const authorize = (...requiredScopes: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction): void => {
    if (!req.user) {
      res.status(401).json({
        type: 'https://stayos.com/errors/unauthorized',
        title: 'Unauthorized',
        status: 401,
        detail: 'Authentication required',
        instance: req.path,
      });
      return;
    }

    // Check if user has admin:all scope (bypass all checks)
    if (req.user.scopes.includes('admin:all')) {
      next();
      return;
    }

    // Check if user has any of the required scopes
    const hasRequiredScope = requiredScopes.some(scope => 
      req.user!.scopes.includes(scope)
    );

    if (!hasRequiredScope) {
      res.status(403).json({
        type: 'https://stayos.com/errors/forbidden',
        title: 'Forbidden',
        status: 403,
        detail: `Insufficient permissions. Required scopes: ${requiredScopes.join(', ')}`,
        instance: req.path,
      });
      return;
    }

    next();
  };
};

/**
 * Optional Authentication - Attach user if token is provided, but don't require it
 */
export const optionalAuth = (req: AuthRequest, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    next();
    return;
  }

  // Try to authenticate, but don't fail if it doesn't work
  authenticate(req, res, (err?: any) => {
    if (err) {
      // Log the error but continue without authentication
      logger.warn('Optional authentication failed:', err);
    }
    next();
  });
};

