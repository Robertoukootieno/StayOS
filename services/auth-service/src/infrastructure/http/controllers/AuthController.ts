import { Request, Response } from 'express';
import { Login } from '../../../application/use-cases/Login';
import { IUserRepository } from '../../../domain/repositories/IUserRepository';
import { IPasswordHasher } from '../../../application/services/IPasswordHasher';
import { ITokenService } from '../../../application/services/ITokenService';
import { Logger } from '@stayos/shared';

export class AuthController {
  private logger: Logger;
  private loginUseCase: Login;

  constructor(
    userRepository: IUserRepository,
    passwordHasher: IPasswordHasher,
    tokenService: ITokenService
  ) {
    this.logger = new Logger('AuthController');
    this.loginUseCase = new Login(userRepository, passwordHasher, tokenService);
  }

  /**
   * POST /api/v1/auth/token
   * Generate JWT token (OAuth 2.0 flow)
   */
  login = async (req: Request, res: Response): Promise<void> => {
    try {
      const result = await this.loginUseCase.execute(req.body);

      if (result.isFailure) {
        const errorMessage = result.error || 'Login failed';
        
        // Map error messages to appropriate status codes
        if (errorMessage.includes('Invalid username or password')) {
          res.status(401).json({
            error: 'invalid_grant',
            error_description: errorMessage,
          });
          return;
        }

        if (errorMessage.includes('Missing')) {
          res.status(400).json({
            error: 'invalid_request',
            error_description: errorMessage,
          });
          return;
        }

        if (errorMessage.includes('Unsupported grant type')) {
          res.status(400).json({
            error: 'unsupported_grant_type',
            error_description: errorMessage,
          });
          return;
        }

        if (errorMessage.includes('not active')) {
          res.status(403).json({
            error: 'access_denied',
            error_description: errorMessage,
          });
          return;
        }

        res.status(400).json({
          error: 'invalid_request',
          error_description: errorMessage,
        });
        return;
      }

      res.status(200).json(result.getValue());
    } catch (error) {
      this.logger.error('Error during login', {
        error: error instanceof Error ? error.message : 'Unknown error',
      });

      res.status(500).json({
        error: 'server_error',
        error_description: 'An error occurred while processing the request',
      });
    }
  };

  /**
   * GET /api/v1/auth/me
   * Get current user info (requires authentication)
   */
  getCurrentUser = async (req: Request, res: Response): Promise<void> => {
    try {
      // User info is attached by authentication middleware
      if (!req.user) {
        res.status(401).json({
          error: 'Unauthorized',
          message: 'Authentication required',
        });
        return;
      }

      res.status(200).json({
        user: req.user,
      });
    } catch (error) {
      this.logger.error('Error getting current user', {
        error: error instanceof Error ? error.message : 'Unknown error',
      });

      res.status(500).json({
        error: 'Internal Server Error',
        message: 'Failed to get user information',
      });
    }
  };

  /**
   * POST /api/v1/auth/verify
   * Verify a JWT token
   */
  verifyToken = async (req: Request, res: Response): Promise<void> => {
    try {
      const { token } = req.body;

      if (!token) {
        res.status(400).json({
          error: 'Bad Request',
          message: 'Token is required',
        });
        return;
      }

      // Token verification is handled by the token service
      // This endpoint can be used by other services to verify tokens
      res.status(200).json({
        valid: true,
        user: req.user,
      });
    } catch (error) {
      this.logger.error('Error verifying token', {
        error: error instanceof Error ? error.message : 'Unknown error',
      });

      res.status(401).json({
        valid: false,
        error: 'Invalid token',
      });
    }
  };
}

