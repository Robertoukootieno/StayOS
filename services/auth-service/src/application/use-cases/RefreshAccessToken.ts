import { UseCase, Result, Logger, Tracer } from '@stayos/shared';
import { IUserRepository } from '../../domain/repositories/IUserRepository';
import { IRefreshTokenRepository } from '../../domain/repositories/IRefreshTokenRepository';
import { ITokenService } from '../services/ITokenService';
import { TokenResponseDTO } from '../dtos/AuthDTO';
import { RefreshToken } from '../../domain/entities/RefreshToken';
import { v4 as uuidv4 } from 'uuid';

interface RefreshTokenDTO {
  refreshToken: string;
}

export class RefreshAccessToken implements UseCase<RefreshTokenDTO, Result<TokenResponseDTO>> {
  private logger: Logger;
  private tracer: Tracer;

  constructor(
    private userRepository: IUserRepository,
    private refreshTokenRepository: IRefreshTokenRepository,
    private tokenService: ITokenService
  ) {
    this.logger = new Logger('RefreshAccessToken');
    this.tracer = new Tracer('auth-service');
  }

  async execute(request: RefreshTokenDTO): Promise<Result<TokenResponseDTO>> {
    return this.tracer.executeInSpan('RefreshAccessToken.execute', async () => {
      try {
        const { refreshToken } = request;

        // Validate input
        if (!refreshToken || !refreshToken.trim()) {
          return Result.fail('Refresh token is required');
        }

        // Find refresh token
        const tokenRecord = await this.refreshTokenRepository.findByToken(refreshToken);

        if (!tokenRecord) {
          this.logger.warn('Refresh token not found', { refreshToken });
          return Result.fail('Invalid refresh token');
        }

        // Check if token is valid
        if (!tokenRecord.isValid()) {
          this.logger.warn('Refresh token is invalid or expired', {
            tokenId: tokenRecord.id,
            isRevoked: tokenRecord.isRevoked,
            isExpired: tokenRecord.isExpired(),
          });
          return Result.fail('Invalid or expired refresh token');
        }

        // Get user
        const user = await this.userRepository.findById(tokenRecord.userId);

        if (!user) {
          this.logger.error('User not found for refresh token', {
            userId: tokenRecord.userId,
          });
          return Result.fail('User not found');
        }

        // Revoke old refresh token (token rotation)
        tokenRecord.revoke();
        await this.refreshTokenRepository.revoke(tokenRecord.id);

        // Generate new tokens
        const newAccessToken = this.tokenService.generateAccessToken(user);
        const newRefreshTokenValue = this.tokenService.generateRefreshToken(user.id);

        // Save new refresh token
        const newRefreshToken = RefreshToken.create(uuidv4(), {
          userId: user.id,
          token: newRefreshTokenValue,
          expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
          isRevoked: false,
        });

        await this.refreshTokenRepository.save(newRefreshToken);

        this.logger.info('Access token refreshed successfully', {
          userId: user.id,
          oldTokenId: tokenRecord.id,
          newTokenId: newRefreshToken.id,
        });

        return Result.ok({
          access_token: newAccessToken,
          token_type: 'Bearer',
          expires_in: 86400, // 24 hours
          refresh_token: newRefreshTokenValue,
          scope: user.scopes.join(' '),
        });
      } catch (error) {
        this.logger.error('Token refresh failed', {
          error: error instanceof Error ? error.message : 'Unknown error',
        });
        return Result.fail('Token refresh failed');
      }
    });
  }
}

