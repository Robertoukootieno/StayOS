import { Pool } from 'pg';
import { IRefreshTokenRepository } from '../../../domain/repositories/IRefreshTokenRepository';
import { RefreshToken, RefreshTokenProps } from '../../../domain/entities/RefreshToken';

interface RefreshTokenPersistence {
  token_id: string;
  user_id: string;
  token: string;
  expires_at: Date;
  is_revoked: boolean;
  revoked_at?: Date;
  created_at: Date;
}

export class PostgresRefreshTokenRepository implements IRefreshTokenRepository {
  constructor(private db: Pool) {}

  async findByToken(token: string): Promise<RefreshToken | null> {
    const query = `
      SELECT * FROM refresh_tokens
      WHERE token = $1
    `;

    const result = await this.db.query<RefreshTokenPersistence>(query, [token]);

    if (result.rows.length === 0) {
      return null;
    }

    return this.toDomain(result.rows[0]);
  }

  async findByUserId(userId: string): Promise<RefreshToken[]> {
    const query = `
      SELECT * FROM refresh_tokens
      WHERE user_id = $1 AND is_revoked = FALSE
      ORDER BY created_at DESC
    `;

    const result = await this.db.query<RefreshTokenPersistence>(query, [userId]);

    return result.rows.map((row) => this.toDomain(row));
  }

  async save(refreshToken: RefreshToken): Promise<void> {
    const props = refreshToken.toObject();

    const query = `
      INSERT INTO refresh_tokens (
        token_id, user_id, token, expires_at, is_revoked, revoked_at, created_at
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7
      )
    `;

    await this.db.query(query, [
      refreshToken.id,
      props.userId,
      props.token,
      props.expiresAt,
      props.isRevoked,
      props.revokedAt,
      refreshToken.createdAt,
    ]);
  }

  async revoke(tokenId: string): Promise<void> {
    const query = `
      UPDATE refresh_tokens
      SET is_revoked = TRUE, revoked_at = NOW()
      WHERE token_id = $1
    `;

    await this.db.query(query, [tokenId]);
  }

  async revokeAllForUser(userId: string): Promise<void> {
    const query = `
      UPDATE refresh_tokens
      SET is_revoked = TRUE, revoked_at = NOW()
      WHERE user_id = $1 AND is_revoked = FALSE
    `;

    await this.db.query(query, [userId]);
  }

  async deleteExpired(): Promise<void> {
    const query = `
      DELETE FROM refresh_tokens
      WHERE expires_at < NOW()
    `;

    await this.db.query(query);
  }

  private toDomain(raw: RefreshTokenPersistence): RefreshToken {
    const props: RefreshTokenProps = {
      userId: raw.user_id,
      token: raw.token,
      expiresAt: raw.expires_at,
      isRevoked: raw.is_revoked,
      revokedAt: raw.revoked_at,
    };

    return RefreshToken.reconstitute(raw.token_id, props, raw.created_at, raw.created_at);
  }
}

