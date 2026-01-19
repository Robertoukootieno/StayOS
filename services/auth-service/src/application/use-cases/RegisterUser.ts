import { UseCase, Result, Logger, Tracer } from '@stayos/shared';
import { IUserRepository } from '../../domain/repositories/IUserRepository';
import { IPasswordHasher } from '../services/IPasswordHasher';
import { RegisterDTO, UserDTO } from '../dtos/AuthDTO';
import { User, UserRole, UserStatus } from '../../domain/entities/User';
import { v4 as uuidv4 } from 'uuid';

export class RegisterUser implements UseCase<RegisterDTO, Result<UserDTO>> {
  private logger: Logger;
  private tracer: Tracer;

  constructor(
    private userRepository: IUserRepository,
    private passwordHasher: IPasswordHasher
  ) {
    this.logger = new Logger('RegisterUser');
    this.tracer = new Tracer('auth-service');
  }

  async execute(request: RegisterDTO): Promise<Result<UserDTO>> {
    return this.tracer.executeInSpan('RegisterUser.execute', async () => {
      try {
        const { email, password, firstName, lastName, propertyId } = request;

        // Validate input
        if (!email || !email.trim()) {
          return Result.fail('Email is required');
        }

        if (!password || password.length < 8) {
          return Result.fail('Password must be at least 8 characters');
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          return Result.fail('Invalid email format');
        }

        // Check if user already exists
        const existingUser = await this.userRepository.findByEmail(email);
        if (existingUser) {
          return Result.fail('User with this email already exists');
        }

        // Hash password
        const passwordHash = await this.passwordHasher.hash(password);

        // Create user
        const userId = uuidv4();
        const user = User.create(userId, {
          email: email.toLowerCase().trim(),
          passwordHash,
          firstName: firstName?.trim(),
          lastName: lastName?.trim(),
          role: UserRole.GUEST,
          status: UserStatus.PENDING_VERIFICATION,
          scopes: ['read:properties', 'read:reservations'],
          propertyId,
        });

        // Save user
        await this.userRepository.save(user);

        this.logger.info('User registered successfully', {
          userId: user.id,
          email: user.email,
        });

        // Return user DTO
        return Result.ok({
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          fullName: user.fullName,
          role: user.role,
          status: user.status,
          scopes: user.scopes,
          propertyId: user.propertyId,
          lastLoginAt: user.lastLoginAt?.toISOString(),
          emailVerifiedAt: user.emailVerifiedAt?.toISOString(),
          createdAt: user.createdAt.toISOString(),
          updatedAt: user.updatedAt.toISOString(),
        });
      } catch (error) {
        this.logger.error('User registration failed', {
          error: error instanceof Error ? error.message : 'Unknown error',
        });
        return Result.fail('User registration failed');
      }
    });
  }
}

