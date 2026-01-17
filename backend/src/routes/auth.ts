import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import logger from '../config/logger';
import { authenticate } from '../middleware/auth';

const router = express.Router();

// Test users for development
const TEST_USERS = [
  {
    id: '01234567-89ab-cdef-0123-456789abcdef',
    email: 'admin@stayos.com',
    password: 'admin123',
    role: 'admin',
    scopes: ['admin:all', 'read:properties', 'write:properties', 'read:reservations', 'write:reservations', 'read:guests', 'write:guests', 'read:billing', 'write:billing'],
  },
  {
    id: '12345678-9abc-def0-1234-56789abcdef0',
    email: 'manager@stayos.com',
    password: 'manager123',
    role: 'manager',
    scopes: ['read:properties', 'write:properties', 'read:reservations', 'write:reservations', 'read:guests', 'write:guests', 'read:billing'],
  },
  {
    id: '23456789-abcd-ef01-2345-6789abcdef01',
    email: 'readonly@stayos.com',
    password: 'readonly123',
    role: 'viewer',
    scopes: ['read:properties', 'read:reservations', 'read:guests', 'read:billing'],
  },
];

/**
 * POST /auth/token
 * Generate JWT token for testing (OAuth 2.0 Client Credentials Flow simulation)
 */
router.post('/token', (req: Request, res: Response) => {
  try {
    const { grant_type, username, password, client_id, client_secret } = req.body;

    // Support both password grant and client_credentials grant
    if (grant_type === 'password') {
      // Password grant (for testing)
      if (!username || !password) {
        res.status(400).json({
          error: 'invalid_request',
          error_description: 'Missing username or password',
        });
        return;
      }

      // Find user
      const user = TEST_USERS.find(u => u.email === username && u.password === password);
      
      if (!user) {
        res.status(401).json({
          error: 'invalid_grant',
          error_description: 'Invalid username or password',
        });
        return;
      }

      // Generate tokens
      const jwtSecret = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-this-in-production';

      const accessToken = jwt.sign(
        {
          sub: user.id,
          email: user.email,
          role: user.role,
          scope: user.scopes.join(' '),
        },
        jwtSecret,
        { expiresIn: '24h' } as any
      );

      const refreshToken = jwt.sign(
        {
          sub: user.id,
          type: 'refresh',
        },
        process.env.JWT_REFRESH_SECRET || jwtSecret,
        { expiresIn: '7d' } as any
      );

      logger.info(`Token generated for user: ${user.email}`);

      res.json({
        access_token: accessToken,
        token_type: 'Bearer',
        expires_in: 86400, // 24 hours in seconds
        refresh_token: refreshToken,
        scope: user.scopes.join(' '),
      });
      return;
    }

    if (grant_type === 'client_credentials') {
      // Client credentials grant (for service-to-service)
      if (!client_id || !client_secret) {
        res.status(400).json({
          error: 'invalid_request',
          error_description: 'Missing client_id or client_secret',
        });
        return;
      }

      // For testing, accept any client_id/secret combination
      const jwtSecret = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-this-in-production';
      
      const accessToken = jwt.sign(
        {
          sub: client_id,
          client_id: client_id,
          scope: 'integration:read integration:write',
        },
        jwtSecret,
        { expiresIn: '1h' }
      );

      res.json({
        access_token: accessToken,
        token_type: 'Bearer',
        expires_in: 3600,
        scope: 'integration:read integration:write',
      });
      return;
    }

    res.status(400).json({
      error: 'unsupported_grant_type',
      error_description: 'Only password and client_credentials grant types are supported',
    });
  } catch (error) {
    logger.error('Token generation error:', error);
    res.status(500).json({
      error: 'server_error',
      error_description: 'An error occurred while generating the token',
    });
  }
});

/**
 * GET /auth/me
 * Get current user info (requires authentication)
 */
router.get('/me', authenticate, (req: Request, res: Response) => {
  res.json({
    user: req.user,
  });
});

/**
 * GET /auth/test-users
 * Get list of test users (development only)
 */
router.get('/test-users', (_req: Request, res: Response) => {
  if (process.env.NODE_ENV === 'production') {
    res.status(404).json({
      type: 'https://stayos.com/errors/not-found',
      title: 'Not Found',
      status: 404,
      detail: 'This endpoint is only available in development mode',
    });
    return;
  }

  res.json({
    users: TEST_USERS.map(u => ({
      email: u.email,
      password: u.password,
      role: u.role,
      scopes: u.scopes,
    })),
  });
});

export default router;

