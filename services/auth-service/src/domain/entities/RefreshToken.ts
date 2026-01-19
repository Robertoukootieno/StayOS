import { Entity } from '@stayos/shared';

export interface RefreshTokenProps {
  userId: string;
  token: string;
  expiresAt: Date;
  isRevoked: boolean;
  revokedAt?: Date;
}

export class RefreshToken extends Entity<string> {
  private props: RefreshTokenProps;

  private constructor(id: string, props: RefreshTokenProps, createdAt?: Date, updatedAt?: Date) {
    super(id, createdAt, updatedAt);
    this.props = props;
  }

  public static create(id: string, props: RefreshTokenProps): RefreshToken {
    return new RefreshToken(id, props);
  }

  public static reconstitute(
    id: string,
    props: RefreshTokenProps,
    createdAt: Date,
    updatedAt: Date
  ): RefreshToken {
    return new RefreshToken(id, props, createdAt, updatedAt);
  }

  public get userId(): string {
    return this.props.userId;
  }

  public get token(): string {
    return this.props.token;
  }

  public get expiresAt(): Date {
    return this.props.expiresAt;
  }

  public get isRevoked(): boolean {
    return this.props.isRevoked;
  }

  public get revokedAt(): Date | undefined {
    return this.props.revokedAt;
  }

  public isExpired(): boolean {
    return new Date() > this.props.expiresAt;
  }

  public isValid(): boolean {
    return !this.props.isRevoked && !this.isExpired();
  }

  public revoke(): void {
    if (this.props.isRevoked) {
      throw new Error('Token is already revoked');
    }
    this.props.isRevoked = true;
    this.props.revokedAt = new Date();
    this.touch();
  }

  public toObject(): RefreshTokenProps {
    return { ...this.props };
  }
}

