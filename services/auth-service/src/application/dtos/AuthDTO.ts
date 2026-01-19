export interface LoginDTO {
  grant_type: 'password' | 'client_credentials';
  username?: string;
  password?: string;
  client_id?: string;
  client_secret?: string;
}

export interface TokenResponseDTO {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token?: string;
  scope?: string;
}

export interface UserDTO {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  fullName: string;
  role: string;
  status: string;
  scopes: string[];
  propertyId?: string;
  lastLoginAt?: string;
  emailVerifiedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface RegisterDTO {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  propertyId?: string;
}

export interface VerifyTokenDTO {
  token: string;
}

export interface DecodedTokenDTO {
  sub: string;
  email?: string;
  role?: string;
  scope?: string;
  scopes?: string[];
  client_id?: string;
  exp?: number;
  iat?: number;
}

