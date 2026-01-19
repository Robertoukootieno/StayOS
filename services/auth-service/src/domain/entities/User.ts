import { AggregateRoot } from '@stayos/shared';

export enum UserRole {
  ADMIN = 'admin',
  MANAGER = 'manager',
  STAFF = 'staff',
  VIEWER = 'viewer',
  GUEST = 'guest',
}

export enum UserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  SUSPENDED = 'suspended',
  PENDING_VERIFICATION = 'pending_verification',
}

export interface UserProps {
  email: string;
  passwordHash: string;
  firstName?: string;
  lastName?: string;
  role: UserRole;
  status: UserStatus;
  scopes: string[];
  propertyId?: string;
  lastLoginAt?: Date;
  emailVerifiedAt?: Date;
  deletedAt?: Date;
}

export class User extends AggregateRoot<string> {
  private props: UserProps;

  private constructor(id: string, props: UserProps, createdAt?: Date, updatedAt?: Date) {
    super(id, createdAt, updatedAt);
    this.props = props;
  }

  // Factory method to create a new user
  public static create(id: string, props: UserProps): User {
    const user = new User(id, props);
    // Domain event would be emitted here
    return user;
  }

  // Factory method to reconstitute from persistence
  public static reconstitute(
    id: string,
    props: UserProps,
    createdAt: Date,
    updatedAt: Date
  ): User {
    return new User(id, props, createdAt, updatedAt);
  }

  // Getters
  public get email(): string {
    return this.props.email;
  }

  public get passwordHash(): string {
    return this.props.passwordHash;
  }

  public get firstName(): string | undefined {
    return this.props.firstName;
  }

  public get lastName(): string | undefined {
    return this.props.lastName;
  }

  public get fullName(): string {
    if (this.props.firstName && this.props.lastName) {
      return `${this.props.firstName} ${this.props.lastName}`;
    }
    return this.props.firstName || this.props.lastName || this.props.email;
  }

  public get role(): UserRole {
    return this.props.role;
  }

  public get status(): UserStatus {
    return this.props.status;
  }

  public get scopes(): string[] {
    return [...this.props.scopes];
  }

  public get propertyId(): string | undefined {
    return this.props.propertyId;
  }

  public get lastLoginAt(): Date | undefined {
    return this.props.lastLoginAt;
  }

  public get emailVerifiedAt(): Date | undefined {
    return this.props.emailVerifiedAt;
  }

  public get isEmailVerified(): boolean {
    return !!this.props.emailVerifiedAt;
  }

  public get isActive(): boolean {
    return this.props.status === UserStatus.ACTIVE;
  }

  // Business methods
  public updateProfile(updates: Partial<Pick<UserProps, 'firstName' | 'lastName'>>): void {
    if (updates.firstName !== undefined) {
      this.props.firstName = updates.firstName;
    }
    if (updates.lastName !== undefined) {
      this.props.lastName = updates.lastName;
    }
    this.touch();
  }

  public updatePassword(newPasswordHash: string): void {
    this.props.passwordHash = newPasswordHash;
    this.touch();
  }

  public recordLogin(): void {
    this.props.lastLoginAt = new Date();
    this.touch();
  }

  public verifyEmail(): void {
    if (this.props.emailVerifiedAt) {
      throw new Error('Email is already verified');
    }
    this.props.emailVerifiedAt = new Date();
    this.touch();
  }

  public activate(): void {
    if (this.props.status === UserStatus.ACTIVE) {
      throw new Error('User is already active');
    }
    this.props.status = UserStatus.ACTIVE;
    this.touch();
  }

  public suspend(): void {
    if (this.props.status === UserStatus.SUSPENDED) {
      throw new Error('User is already suspended');
    }
    this.props.status = UserStatus.SUSPENDED;
    this.touch();
  }

  public hasScope(scope: string): boolean {
    return this.props.scopes.includes(scope) || this.props.scopes.includes('admin:all');
  }

  public hasAnyScope(scopes: string[]): boolean {
    if (this.props.scopes.includes('admin:all')) {
      return true;
    }
    return scopes.some(scope => this.props.scopes.includes(scope));
  }

  public toObject(): UserProps {
    return { ...this.props };
  }
}

