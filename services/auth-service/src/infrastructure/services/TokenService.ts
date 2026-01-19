import jwt from 'jsonwebtoken';
import { ITokenService } from '../../application/services/ITokenService';
import { Token } from '../../domain/value-objects/Token';
import { User } from '../../domain/entities/User';
import { DecodedTokenDTO } from '../../application/dtos/AuthDTO';

export class TokenService implements ITokenService {
  private jwtSecret: string;
  private jwtRefreshSecret: string;

  constructor() {
    this.jwtSecret = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-this-in-production';
    this.jwtRefreshSecret = process.env.JWT_REFRESH_SECRET || this.jwtSecret;
  }

  generateAccessToken(user: User): string {
    return jwt.sign(
      {
        sub: user.id,
        email: user.email,
        role: user.role,
        scope: user.scopes.join(' '),
      },
      this.jwtSecret,
      { expiresIn: '24h' }
    );
  }

  generateRefreshToken(userId: string): string {
    return jwt.sign(
      {
        sub: userId,
        type: 'refresh',
      },
      this.jwtRefreshSecret,
      { expiresIn: '7d' }
    );
  }

  generateClientToken(clientId: string, scopes: string[]): string {
    return jwt.sign(
      {
        sub: clientId,
        client_id: clientId,
        scope: scopes.join(' '),
      },
      this.jwtSecret,
      { expiresIn: '1h' }
    );
  }

  verifyToken(token: string): DecodedTokenDTO {
    try {
      const decoded = jwt.verify(token, this.jwtSecret) as any;
      return {
        sub: decoded.sub,
        email: decoded.email,
        role: decoded.role,
        scope: decoded.scope,
        scopes: decoded.scope ? decoded.scope.split(' ') : [],
        client_id: decoded.client_id,
        exp: decoded.exp,
        iat: decoded.iat,
      };
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        throw new Error('Token has expired');
      }
      if (error instanceof jwt.JsonWebTokenError) {
        throw new Error('Invalid token');
      }
      throw error;
    }
  }

  createTokenResponse(user: User): Token {
    const accessToken = this.generateAccessToken(user);
    const refreshToken = this.generateRefreshToken(user.id);

    return Token.create({
      accessToken,
      tokenType: 'Bearer',
      expiresIn: 86400, // 24 hours
      refreshToken,
      scope: user.scopes.join(' '),
    });
  }
}

