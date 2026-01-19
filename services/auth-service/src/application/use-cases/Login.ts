import { UseCase, Result, Logger, Tracer } from '@stayos/shared';
import { IUserRepository } from '../../domain/repositories/IUserRepository';
import { IPasswordHasher } from '../services/IPasswordHasher';
import { ITokenService } from '../services/ITokenService';
import { LoginDTO, TokenResponseDTO } from '../dtos/AuthDTO';
import { UserStatus } from '../../domain/entities/User';

export class Login implements UseCase<LoginDTO, Result<TokenResponseDTO>> {
  private logger: Logger;
  private tracer: Tracer;

  constructor(
    private userRepository: IUserRepository,
    private passwordHasher: IPasswordHasher,
    private tokenService: ITokenService
  ) {
    this.logger = new Logger('Login');
    this.tracer = new Tracer('auth-service');
  }

  async execute(request: LoginDTO): Promise<Result<TokenResponseDTO>> {
    return this.tracer.executeInSpan('Login.execute', async (span) => {
      try {
        const { grant_type, username, password, client_id, client_secret } = request;

        // Handle password grant
        if (grant_type === 'password') {
          if (!username || !password) {
            return Result.fail('Missing username or password');
          }

          // Find user by email
          const user = await this.userRepository.findByEmail(username);

          if (!user) {
            this.logger.warn('Login attempt with invalid email', { email: username });
            return Result.fail('Invalid username or password');
          }

          // Verify password
          const isPasswordValid = await this.passwordHasher.compare(password, user.passwordHash);

          if (!isPasswordValid) {
            this.logger.warn('Login attempt with invalid password', { email: username });
            return Result.fail('Invalid username or password');
          }

          // Check user status
          if (user.status !== UserStatus.ACTIVE) {
            this.logger.warn('Login attempt for inactive user', {
              email: username,
              status: user.status,
            });
            return Result.fail('User account is not active');
          }

          // Record login
          user.recordLogin();
          await this.userRepository.update(user);

          // Generate tokens
          const tokenResponse = this.tokenService.createTokenResponse(user);

          this.logger.info('User logged in successfully', {
            userId: user.id,
            email: user.email,
          });

          return Result.ok({
            access_token: tokenResponse.accessToken,
            token_type: tokenResponse.tokenType,
            expires_in: tokenResponse.expiresIn,
            refresh_token: tokenResponse.refreshToken,
            scope: tokenResponse.scope,
          });
        }

        // Handle client credentials grant
        if (grant_type === 'client_credentials') {
          if (!client_id || !client_secret) {
            return Result.fail('Missing client_id or client_secret');
          }

          // For now, accept any client credentials (in production, validate against database)
          const accessToken = this.tokenService.generateClientToken(client_id, [
            'integration:read',
            'integration:write',
          ]);

          this.logger.info('Client credentials token generated', { client_id });

          return Result.ok({
            access_token: accessToken,
            token_type: 'Bearer',
            expires_in: 3600,
            scope: 'integration:read integration:write',
          });
        }

        return Result.fail('Unsupported grant type');
      } catch (error) {
        this.logger.error('Login failed', {
          error: error instanceof Error ? error.message : 'Unknown error',
        });
        return Result.fail('Login failed');
      }
    });
  }
}

