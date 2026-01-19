import { Token } from '../../domain/value-objects/Token';
import { User } from '../../domain/entities/User';
import { DecodedTokenDTO } from '../dtos/AuthDTO';

export interface ITokenService {
  generateAccessToken(user: User): string;
  generateRefreshToken(userId: string): string;
  generateClientToken(clientId: string, scopes: string[]): string;
  verifyToken(token: string): DecodedTokenDTO;
  createTokenResponse(user: User): Token;
}

