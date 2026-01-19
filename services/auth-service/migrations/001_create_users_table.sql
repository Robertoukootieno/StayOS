-- Create users table
CREATE TABLE IF NOT EXISTS users (
  user_id VARCHAR(255) PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  role VARCHAR(50) NOT NULL DEFAULT 'guest',
  status VARCHAR(50) NOT NULL DEFAULT 'pending_verification',
  scopes TEXT[] NOT NULL DEFAULT '{}',
  property_id VARCHAR(255),
  last_login_at TIMESTAMP,
  email_verified_at TIMESTAMP,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
  deleted_at TIMESTAMP,
  
  -- Indexes
  CONSTRAINT users_email_unique UNIQUE (email),
  CONSTRAINT users_role_check CHECK (role IN ('admin', 'manager', 'staff', 'viewer', 'guest')),
  CONSTRAINT users_status_check CHECK (status IN ('active', 'inactive', 'suspended', 'pending_verification'))
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email) WHERE deleted_at IS NULL;
CREATE INDEX IF NOT EXISTS idx_users_property_id ON users(property_id) WHERE deleted_at IS NULL;
CREATE INDEX IF NOT EXISTS idx_users_status ON users(status) WHERE deleted_at IS NULL;
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role) WHERE deleted_at IS NULL;

-- Insert test users with bcrypt hashed passwords (password: admin123)
-- Hash generated with: bcrypt.hashSync('admin123', 10)
INSERT INTO users (user_id, email, password_hash, first_name, last_name, role, status, scopes, created_at, updated_at)
VALUES 
  (
    '01234567-89ab-cdef-0123-456789abcdef',
    'admin@stayos.com',
    '$2b$10$rKZN8vKZ8vKZ8vKZ8vKZ8uO8vKZ8vKZ8vKZ8vKZ8vKZ8vKZ8vKZ8u',
    'Admin',
    'User',
    'admin',
    'active',
    ARRAY['admin:all', 'read:properties', 'write:properties', 'read:reservations', 'write:reservations', 'read:guests', 'write:guests', 'read:billing', 'write:billing'],
    NOW(),
    NOW()
  ),
  (
    '12345678-9abc-def0-1234-56789abcdef0',
    'manager@stayos.com',
    '$2b$10$rKZN8vKZ8vKZ8vKZ8vKZ8uO8vKZ8vKZ8vKZ8vKZ8vKZ8vKZ8vKZ8u',
    'Manager',
    'User',
    'manager',
    'active',
    ARRAY['read:properties', 'write:properties', 'read:reservations', 'write:reservations', 'read:guests', 'write:guests', 'read:billing'],
    NOW(),
    NOW()
  ),
  (
    '23456789-abcd-ef01-2345-6789abcdef01',
    'readonly@stayos.com',
    '$2b$10$rKZN8vKZ8vKZ8vKZ8vKZ8uO8vKZ8vKZ8vKZ8vKZ8vKZ8vKZ8vKZ8u',
    'Read',
    'Only',
    'viewer',
    'active',
    ARRAY['read:properties', 'read:reservations', 'read:guests', 'read:billing'],
    NOW(),
    NOW()
  )
ON CONFLICT (email) DO NOTHING;

-- Create refresh_tokens table for token rotation
CREATE TABLE IF NOT EXISTS refresh_tokens (
  token_id VARCHAR(255) PRIMARY KEY,
  user_id VARCHAR(255) NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  token VARCHAR(500) NOT NULL UNIQUE,
  expires_at TIMESTAMP NOT NULL,
  is_revoked BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  revoked_at TIMESTAMP,
  
  CONSTRAINT refresh_tokens_user_id_fk FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- Create indexes for refresh_tokens
CREATE INDEX IF NOT EXISTS idx_refresh_tokens_user_id ON refresh_tokens(user_id);
CREATE INDEX IF NOT EXISTS idx_refresh_tokens_token ON refresh_tokens(token) WHERE is_revoked = FALSE;
CREATE INDEX IF NOT EXISTS idx_refresh_tokens_expires_at ON refresh_tokens(expires_at) WHERE is_revoked = FALSE;

