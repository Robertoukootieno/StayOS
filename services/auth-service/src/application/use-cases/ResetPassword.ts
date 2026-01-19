import { UseCase, Result, Logger, Tracer } from '@stayos/shared';
import { IUserRepository } from '../../domain/repositories/IUserRepository';
import { IPasswordHasher } from '../services/IPasswordHasher';

interface ResetPasswordDTO {
  resetToken: string;
  newPassword: string;
}

interface ResetPasswordResponseDTO {
  message: string;
}

export class ResetPassword implements UseCase<ResetPasswordDTO, Result<ResetPasswordResponseDTO>> {
  private logger: Logger;
  private tracer: Tracer;

  constructor(
    private userRepository: IUserRepository,
    private passwordHasher: IPasswordHasher
  ) {
    this.logger = new Logger('ResetPassword');
    this.tracer = new Tracer('auth-service');
  }

  async execute(request: ResetPasswordDTO): Promise<Result<ResetPasswordResponseDTO>> {
    return this.tracer.executeInSpan('ResetPassword.execute', async () => {
      try {
        const { resetToken, newPassword } = request;

        // Validate input
        if (!resetToken || !resetToken.trim()) {
          return Result.fail('Reset token is required');
        }

        if (!newPassword || newPassword.length < 8) {
          return Result.fail('Password must be at least 8 characters');
        }

        // In production, you would:
        // 1. Look up the reset token in database
        // 2. Check if it's expired
        // 3. Get the associated user ID
        // For now, we'll just return an error since we don't have token storage

        this.logger.warn('Password reset attempted but token storage not implemented', {
          resetToken,
        });

        return Result.fail('Password reset functionality requires token storage implementation');

        // Production implementation would look like:
        /*
        const tokenRecord = await this.tokenRepository.findByResetToken(resetToken);
        
        if (!tokenRecord || tokenRecord.expiresAt < new Date()) {
          return Result.fail('Invalid or expired reset token');
        }

        const user = await this.userRepository.findById(tokenRecord.userId);
        
        if (!user) {
          return Result.fail('User not found');
        }

        const passwordHash = await this.passwordHasher.hash(newPassword);
        user.updatePassword(passwordHash);
        
        await this.userRepository.update(user);
        await this.tokenRepository.revokeResetToken(resetToken);

        this.logger.info('Password reset successful', {
          userId: user.id,
        });

        return Result.ok({
          message: 'Password has been reset successfully',
        });
        */
      } catch (error) {
        this.logger.error('Password reset failed', {
          error: error instanceof Error ? error.message : 'Unknown error',
        });
        return Result.fail('Password reset failed');
      }
    });
  }
}

