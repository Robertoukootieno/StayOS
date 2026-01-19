import { Pool } from 'pg';
import { IUserRepository } from '../../../domain/repositories/IUserRepository';
import { User, UserRole, UserStatus, UserProps } from '../../../domain/entities/User';

interface UserPersistence {
  user_id: string;
  email: string;
  password_hash: string;
  first_name?: string;
  last_name?: string;
  role: string;
  status: string;
  scopes: string[];
  property_id?: string;
  last_login_at?: Date;
  email_verified_at?: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export class PostgresUserRepository implements IUserRepository {
  constructor(private db: Pool) {}

  async findById(id: string): Promise<User | null> {
    const query = `
      SELECT * FROM users
      WHERE user_id = $1 AND deleted_at IS NULL
    `;

    const result = await this.db.query<UserPersistence>(query, [id]);

    if (result.rows.length === 0) {
      return null;
    }

    return this.toDomain(result.rows[0]);
  }

  async findByEmail(email: string): Promise<User | null> {
    const query = `
      SELECT * FROM users
      WHERE email = $1 AND deleted_at IS NULL
    `;

    const result = await this.db.query<UserPersistence>(query, [email]);

    if (result.rows.length === 0) {
      return null;
    }

    return this.toDomain(result.rows[0]);
  }

  async save(user: User): Promise<void> {
    const props = user.toObject();

    const query = `
      INSERT INTO users (
        user_id, email, password_hash, first_name, last_name, role, status,
        scopes, property_id, last_login_at, email_verified_at, created_at, updated_at
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13
      )
    `;

    await this.db.query(query, [
      user.id,
      props.email,
      props.passwordHash,
      props.firstName,
      props.lastName,
      props.role,
      props.status,
      props.scopes,
      props.propertyId,
      props.lastLoginAt,
      props.emailVerifiedAt,
      user.createdAt,
      user.updatedAt,
    ]);
  }

  async update(user: User): Promise<void> {
    const props = user.toObject();

    const query = `
      UPDATE users SET
        email = $2,
        password_hash = $3,
        first_name = $4,
        last_name = $5,
        role = $6,
        status = $7,
        scopes = $8,
        property_id = $9,
        last_login_at = $10,
        email_verified_at = $11,
        updated_at = $12
      WHERE user_id = $1
    `;

    await this.db.query(query, [
      user.id,
      props.email,
      props.passwordHash,
      props.firstName,
      props.lastName,
      props.role,
      props.status,
      props.scopes,
      props.propertyId,
      props.lastLoginAt,
      props.emailVerifiedAt,
      user.updatedAt,
    ]);
  }

  async delete(id: string): Promise<void> {
    const query = `
      UPDATE users SET deleted_at = NOW(), updated_at = NOW()
      WHERE user_id = $1
    `;

    await this.db.query(query, [id]);
  }

  async exists(id: string): Promise<boolean> {
    const query = `
      SELECT EXISTS(SELECT 1 FROM users WHERE user_id = $1 AND deleted_at IS NULL)
    `;

    const result = await this.db.query(query, [id]);
    return result.rows[0].exists;
  }

  async existsByEmail(email: string): Promise<boolean> {
    const query = `
      SELECT EXISTS(SELECT 1 FROM users WHERE email = $1 AND deleted_at IS NULL)
    `;

    const result = await this.db.query(query, [email]);
    return result.rows[0].exists;
  }

  private toDomain(raw: UserPersistence): User {
    const props: UserProps = {
      email: raw.email,
      passwordHash: raw.password_hash,
      firstName: raw.first_name,
      lastName: raw.last_name,
      role: raw.role as UserRole,
      status: raw.status as UserStatus,
      scopes: raw.scopes,
      propertyId: raw.property_id,
      lastLoginAt: raw.last_login_at,
      emailVerifiedAt: raw.email_verified_at,
    };

    return User.reconstitute(raw.user_id, props, raw.created_at, raw.updated_at);
  }
}

