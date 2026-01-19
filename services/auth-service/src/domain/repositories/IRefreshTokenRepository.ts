import { RefreshToken } from '../entities/RefreshToken';

export interface IRefreshTokenRepository {
  findByToken(token: string): Promise<RefreshToken | null>;
  findByUserId(userId: string): Promise<RefreshToken[]>;
  save(refreshToken: RefreshToken): Promise<void>;
  revoke(tokenId: string): Promise<void>;
  revokeAllForUser(userId: string): Promise<void>;
  deleteExpired(): Promise<void>;
}

