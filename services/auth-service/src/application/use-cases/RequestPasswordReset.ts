import { UseCase, Result, Logger, Tracer } from '@stayos/shared';
import { IUserRepository } from '../../domain/repositories/IUserRepository';
import { v4 as uuidv4 } from 'uuid';

interface RequestPasswordResetDTO {
  email: string;
}

interface PasswordResetResponseDTO {
  message: string;
  resetToken?: string; // In production, this would be sent via email
}

export class RequestPasswordReset implements UseCase<RequestPasswordResetDTO, Result<PasswordResetResponseDTO>> {
  private logger: Logger;
  private tracer: Tracer;

  constructor(private userRepository: IUserRepository) {
    this.logger = new Logger('RequestPasswordReset');
    this.tracer = new Tracer('auth-service');
  }

  async execute(request: RequestPasswordResetDTO): Promise<Result<PasswordResetResponseDTO>> {
    return this.tracer.executeInSpan('RequestPasswordReset.execute', async () => {
      try {
        const { email } = request;

        // Validate input
        if (!email || !email.trim()) {
          return Result.fail('Email is required');
        }

        // Find user by email
        const user = await this.userRepository.findByEmail(email);

        // For security, always return success even if user doesn't exist
        // This prevents email enumeration attacks
        if (!user) {
          this.logger.warn('Password reset requested for non-existent email', { email });
          return Result.ok({
            message: 'If an account with that email exists, a password reset link has been sent.',
          });
        }

        // Generate reset token (in production, store this in database with expiry)
        const resetToken = uuidv4();

        this.logger.info('Password reset requested', {
          userId: user.id,
          email: user.email,
        });

        // In production, you would:
        // 1. Store the reset token in database with expiry (e.g., 1 hour)
        // 2. Send email with reset link containing the token
        // 3. Return only success message (not the token)

        return Result.ok({
          message: 'If an account with that email exists, a password reset link has been sent.',
          resetToken, // Only for development/testing
        });
      } catch (error) {
        this.logger.error('Password reset request failed', {
          error: error instanceof Error ? error.message : 'Unknown error',
        });
        return Result.fail('Password reset request failed');
      }
    });
  }
}

