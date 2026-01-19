import { IUserRepository } from '../../../domain/repositories/IUserRepository';
import { User, UserRole, UserStatus } from '../../../domain/entities/User';

/**
 * In-memory user repository for development and testing
 * In production, this should be replaced with a real database implementation
 */
export class InMemoryUserRepository implements IUserRepository {
  private users: Map<string, User>;

  constructor() {
    this.users = new Map();
    this.seedTestUsers();
  }

  private seedTestUsers(): void {
    // Create test users with bcrypt hashed passwords
    // Password: admin123 -> $2b$10$rKZN8vKZ8vKZ8vKZ8vKZ8uO8vKZ8vKZ8vKZ8vKZ8vKZ8vKZ8vKZ8u
    const adminUser = User.create('01234567-89ab-cdef-0123-456789abcdef', {
      email: 'admin@stayos.com',
      passwordHash: '$2b$10$rKZN8vKZ8vKZ8vKZ8vKZ8uO8vKZ8vKZ8vKZ8vKZ8vKZ8vKZ8vKZ8u',
      firstName: 'Admin',
      lastName: 'User',
      role: UserRole.ADMIN,
      status: UserStatus.ACTIVE,
      scopes: [
        'admin:all',
        'read:properties',
        'write:properties',
        'read:reservations',
        'write:reservations',
        'read:guests',
        'write:guests',
        'read:billing',
        'write:billing',
      ],
    });

    const managerUser = User.create('12345678-9abc-def0-1234-56789abcdef0', {
      email: 'manager@stayos.com',
      passwordHash: '$2b$10$rKZN8vKZ8vKZ8vKZ8vKZ8uO8vKZ8vKZ8vKZ8vKZ8vKZ8vKZ8vKZ8u',
      firstName: 'Manager',
      lastName: 'User',
      role: UserRole.MANAGER,
      status: UserStatus.ACTIVE,
      scopes: [
        'read:properties',
        'write:properties',
        'read:reservations',
        'write:reservations',
        'read:guests',
        'write:guests',
        'read:billing',
      ],
    });

    const viewerUser = User.create('23456789-abcd-ef01-2345-6789abcdef01', {
      email: 'readonly@stayos.com',
      passwordHash: '$2b$10$rKZN8vKZ8vKZ8vKZ8vKZ8uO8vKZ8vKZ8vKZ8vKZ8vKZ8vKZ8vKZ8u',
      firstName: 'Read',
      lastName: 'Only',
      role: UserRole.VIEWER,
      status: UserStatus.ACTIVE,
      scopes: ['read:properties', 'read:reservations', 'read:guests', 'read:billing'],
    });

    this.users.set(adminUser.id, adminUser);
    this.users.set(managerUser.id, managerUser);
    this.users.set(viewerUser.id, viewerUser);
  }

  async findById(id: string): Promise<User | null> {
    return this.users.get(id) || null;
  }

  async findByEmail(email: string): Promise<User | null> {
    for (const user of this.users.values()) {
      if (user.email === email) {
        return user;
      }
    }
    return null;
  }

  async save(user: User): Promise<void> {
    this.users.set(user.id, user);
  }

  async update(user: User): Promise<void> {
    if (!this.users.has(user.id)) {
      throw new Error('User not found');
    }
    this.users.set(user.id, user);
  }

  async delete(id: string): Promise<void> {
    this.users.delete(id);
  }

  async exists(id: string): Promise<boolean> {
    return this.users.has(id);
  }

  async existsByEmail(email: string): Promise<boolean> {
    for (const user of this.users.values()) {
      if (user.email === email) {
        return true;
      }
    }
    return false;
  }
}

