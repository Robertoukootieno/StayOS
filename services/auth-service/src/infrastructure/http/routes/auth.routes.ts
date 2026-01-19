import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';
import { IUserRepository } from '../../../domain/repositories/IUserRepository';
import { IPasswordHasher } from '../../../application/services/IPasswordHasher';
import { ITokenService } from '../../../application/services/ITokenService';
import { authenticateMiddleware } from '../middlewares/authenticate';

export function createAuthRoutes(
  userRepository: IUserRepository,
  passwordHasher: IPasswordHasher,
  tokenService: ITokenService
): Router {
  const router = Router();
  const controller = new AuthController(userRepository, passwordHasher, tokenService);

  // Public routes
  router.post('/token', controller.login);
  router.post('/verify', controller.verifyToken);

  // Protected routes
  router.get('/me', authenticateMiddleware(tokenService), controller.getCurrentUser);

  return router;
}

