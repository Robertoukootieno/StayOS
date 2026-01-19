import { ValueObject } from '@stayos/shared';

export interface TokenProps {
  accessToken: string;
  tokenType: string;
  expiresIn: number;
  refreshToken?: string;
  scope?: string;
}

export class Token extends ValueObject<TokenProps> {
  private constructor(props: TokenProps) {
    super(props);
  }

  public static create(props: TokenProps): Token {
    return new Token(props);
  }

  public get accessToken(): string {
    return this.props.accessToken;
  }

  public get tokenType(): string {
    return this.props.tokenType;
  }

  public get expiresIn(): number {
    return this.props.expiresIn;
  }

  public get refreshToken(): string | undefined {
    return this.props.refreshToken;
  }

  public get scope(): string | undefined {
    return this.props.scope;
  }

  public toJSON(): TokenProps {
    return {
      accessToken: this.props.accessToken,
      tokenType: this.props.tokenType,
      expiresIn: this.props.expiresIn,
      refreshToken: this.props.refreshToken,
      scope: this.props.scope,
    };
  }
}

