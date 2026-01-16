/**
 * StayOS API - Dynamic Swagger UI Configuration
 * 
 * This endpoint serves dynamic configuration based on environment
 * Allows switching between mock and real authentication
 */

const { getConfig } = require('./config');

function getSwaggerConfig(req, res) {
  const config = getConfig();
  
  // Generate Swagger UI configuration
  const swaggerConfig = {
    useMockAuth: config.useMockAuth,
    apiBaseUrl: config.apiBaseUrl,
    oauth: {
      authorizationUrl: config.oauth.authorizationUrl,
      tokenUrl: config.oauth.tokenUrl,
      refreshUrl: config.oauth.refreshUrl,
      clientId: config.oauth.clientId
      // Note: clientSecret is NOT exposed to browser for security
    },
    testCredentials: config.useMockAuth ? {
      // Only expose test credentials if using mock auth
      admin: config.credentials.admin,
      manager: config.credentials.manager,
      readonly: config.credentials.readonly
    } : null,
    testTokens: config.useMockAuth ? {
      // Only expose test tokens if using mock auth
      admin: config.bearerTokens.admin,
      manager: config.bearerTokens.manager,
      readonly: config.bearerTokens.readonly
    } : null,
    testApiKeys: config.useMockAuth ? {
      // Only expose test API keys if using mock auth
      admin: config.apiKeys.admin,
      readonly: config.apiKeys.readonly
    } : null
  };
  
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });
  res.end(JSON.stringify(swaggerConfig, null, 2));
}

module.exports = { getSwaggerConfig };

