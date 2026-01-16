/**
 * StayOS API - Configuration Loader
 * 
 * Loads configuration from environment variables or .env file
 * Supports both mock and real authentication servers
 */

const fs = require('fs');
const path = require('path');

// Default configuration (mock server)
const DEFAULT_CONFIG = {
  nodeEnv: 'local',
  apiBaseUrl: 'http://localhost:8080/v1',
  
  // Mock OAuth server (default)
  oauth: {
    authorizationUrl: 'http://localhost:4000/oauth/authorize',
    tokenUrl: 'http://localhost:4000/oauth/token',
    refreshUrl: 'http://localhost:4000/oauth/refresh',
    clientId: 'swagger-ui-client',
    clientSecret: 'mock-secret'
  },
  
  // Mock credentials
  credentials: {
    admin: { username: 'admin', password: 'admin123' },
    manager: { username: 'manager', password: 'manager123' },
    readonly: { username: 'readonly', password: 'readonly123' }
  },
  
  // Mock API keys
  apiKeys: {
    admin: 'test-api-key-12345',
    readonly: 'test-api-key-readonly'
  },
  
  // Mock bearer tokens
  bearerTokens: {
    admin: 'mock.eyJzdWIiOiJ1c2VyLWFkbWluLTAwMSIsInNjb3BlcyI6WyJhZG1pbjphbGwiXX0=.signature',
    manager: 'mock.eyJzdWIiOiJ1c2VyLW1hbmFnZXItMDAxIiwic2NvcGVzIjpbInJlYWQ6cHJvcGVydGllcyIsIndyaXRlOnByb3BlcnRpZXMiXX0=.signature',
    readonly: 'mock.eyJzdWIiOiJ1c2VyLXJlYWRvbmx5LTAwMSIsInNjb3BlcyI6WyJyZWFkOnByb3BlcnRpZXMiXX0=.signature'
  },
  
  swaggerUiPort: 3000,
  useMockAuth: true,
  skipSslVerify: false,
  requestTimeout: 30000,
  verboseLogging: false
};

/**
 * Load .env file if it exists
 */
function loadEnvFile() {
  const envPath = path.join(__dirname, '.env');
  
  if (!fs.existsSync(envPath)) {
    return {};
  }
  
  const envContent = fs.readFileSync(envPath, 'utf8');
  const env = {};
  
  envContent.split('\n').forEach(line => {
    line = line.trim();
    
    // Skip comments and empty lines
    if (!line || line.startsWith('#')) {
      return;
    }
    
    const [key, ...valueParts] = line.split('=');
    const value = valueParts.join('=').trim();
    
    if (key && value) {
      env[key.trim()] = value;
    }
  });
  
  return env;
}

/**
 * Get configuration from environment or .env file
 */
function getConfig() {
  // Load .env file
  const envFile = loadEnvFile();
  
  // Merge with process.env (process.env takes precedence)
  const env = { ...envFile, ...process.env };
  
  // Check if using mock auth
  const useMockAuth = env.USE_MOCK_AUTH !== 'false';
  
  if (useMockAuth) {
    console.log('🎭 Using MOCK authentication server');
    return DEFAULT_CONFIG;
  }
  
  console.log('🔐 Using REAL authentication server');
  
  // Build real configuration
  const config = {
    nodeEnv: env.NODE_ENV || 'staging',
    apiBaseUrl: env.API_BASE_URL || 'https://api-staging.stayos.com/v1',
    
    oauth: {
      authorizationUrl: env.OAUTH_AUTHORIZATION_URL || 'https://auth.stayos.com/oauth/authorize',
      tokenUrl: env.OAUTH_TOKEN_URL || 'https://auth.stayos.com/oauth/token',
      refreshUrl: env.OAUTH_REFRESH_URL || 'https://auth.stayos.com/oauth/refresh',
      clientId: env.OAUTH_CLIENT_ID || 'swagger-ui-client',
      clientSecret: env.OAUTH_CLIENT_SECRET || ''
    },
    
    credentials: {
      admin: {
        username: env.ADMIN_USERNAME || '',
        password: env.ADMIN_PASSWORD || ''
      },
      manager: {
        username: env.MANAGER_USERNAME || '',
        password: env.MANAGER_PASSWORD || ''
      },
      readonly: {
        username: env.READONLY_USERNAME || '',
        password: env.READONLY_PASSWORD || ''
      }
    },
    
    apiKeys: {
      admin: env.API_KEY_ADMIN || '',
      readonly: env.API_KEY_READONLY || ''
    },
    
    bearerTokens: {
      admin: env.BEARER_TOKEN_ADMIN || '',
      manager: env.BEARER_TOKEN_MANAGER || '',
      readonly: env.BEARER_TOKEN_READONLY || ''
    },
    
    swaggerUiPort: parseInt(env.SWAGGER_UI_PORT || '3000'),
    useMockAuth: false,
    skipSslVerify: env.SKIP_SSL_VERIFY === 'true',
    requestTimeout: parseInt(env.REQUEST_TIMEOUT || '30000'),
    verboseLogging: env.VERBOSE_LOGGING === 'true'
  };
  
  return config;
}

/**
 * Generate OpenAPI spec with correct auth URLs
 */
function generateOpenAPIConfig(config) {
  return {
    servers: [
      {
        url: config.apiBaseUrl,
        description: config.nodeEnv === 'production' ? 'Production' : 
                     config.nodeEnv === 'staging' ? 'Staging' : 'Development'
      }
    ],
    components: {
      securitySchemes: {
        OAuth2: {
          type: 'oauth2',
          flows: {
            authorizationCode: {
              authorizationUrl: config.oauth.authorizationUrl,
              tokenUrl: config.oauth.tokenUrl,
              refreshUrl: config.oauth.refreshUrl
            }
          }
        }
      }
    }
  };
}

module.exports = {
  getConfig,
  generateOpenAPIConfig,
  DEFAULT_CONFIG
};

