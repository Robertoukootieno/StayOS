import { Request, Response, NextFunction } from 'express';
import { ITokenService } from '../../../application/services/ITokenService';
import { Logger } from '@stayos/shared';

const logger = new Logger('AuthMiddleware');

export function authenticateMiddleware(tokenService: ITokenService) {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      // Get token from Authorization header
      const authHeader = req.headers.authorization;

      if (!authHeader) {
        res.status(401).json({
          error: 'Unauthorized',
          message: 'No authorization header provided',
        });
        return;
      }

      // Check if it's a Bearer token
      const parts = authHeader.split(' ');
      if (parts.length !== 2 || parts[0] !== 'Bearer') {
        res.status(401).json({
          error: 'Unauthorized',
          message: 'Invalid authorization header format. Expected: Bearer <token>',
        });
        return;
      }

      const token = parts[1];

      // Verify token
      const decoded = tokenService.verifyToken(token);

      // Attach user info to request
      req.user = {
        id: decoded.sub,
        email: decoded.email || '',
        scopes: decoded.scopes || [],
        role: decoded.role || 'user',
      };

      logger.info(`Authenticated user: ${req.user.email}`, {
        userId: req.user.id,
        scopes: req.user.scopes,
      });

      next();
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes('expired')) {
          res.status(401).json({
            error: 'Token Expired',
            message: 'The provided token has expired',
          });
          return;
        }

        if (error.message.includes('Invalid')) {
          res.status(401).json({
            error: 'Invalid Token',
            message: 'The provided token is invalid',
          });
          return;
        }
      }

      logger.error('Authentication error:', error);
      res.status(500).json({
        error: 'Internal Server Error',
        message: 'An error occurred during authentication',
      });
    }
  };
}

export function authorizeMiddleware(...requiredScopes: string[]) {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.user) {
      res.status(401).json({
        error: 'Unauthorized',
        message: 'Authentication required',
      });
      return;
    }

    // Check if user has admin:all scope (bypass all checks)
    if (req.user.scopes.includes('admin:all')) {
      next();
      return;
    }

    // Check if user has any of the required scopes
    const hasRequiredScope = requiredScopes.some((scope) => req.user!.scopes.includes(scope));

    if (!hasRequiredScope) {
      res.status(403).json({
        error: 'Forbidden',
        message: `Insufficient permissions. Required scopes: ${requiredScopes.join(', ')}`,
      });
      return;
    }

    next();
  };
}

