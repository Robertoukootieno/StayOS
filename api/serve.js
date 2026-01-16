#!/usr/bin/env node

/**
 * Simple HTTP server to serve the OpenAPI documentation
 * Usage: node serve.js [port]
 * Default port: 3000
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const { getConfig } = require('./config');
const { getSwaggerConfig } = require('./swagger-config');

// Load configuration
const config = getConfig();
const PORT = process.argv[2] || config.swaggerUiPort;
const API_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.yaml': 'text/yaml',
  '.yml': 'text/yaml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  // Handle config endpoint
  if (req.url === '/api/config') {
    return getSwaggerConfig(req, res);
  }

  // Parse URL
  let filePath = req.url === '/' ? '/index.html' : req.url;
  filePath = path.join(API_DIR, filePath);

  // Get file extension
  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';

  // Read and serve file
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - File Not Found</h1>', 'utf-8');
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${error.code}`, 'utf-8');
      }
    } else {
      res.writeHead(200, { 
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*'
      });
      res.end(content, 'utf-8');
    }
  });
});

// Handle port in use error
function tryListen(port, maxRetries = 5) {
  server.listen(port, () => {
    console.log('\n🚀 StayOS API Documentation Server');
    console.log('=====================================');
    console.log(`📖 Documentation: http://localhost:${port}`);
    console.log(`📄 OpenAPI Spec:  http://localhost:${port}/openapi-bundled.yaml`);
    console.log(`\n🔐 Auth Mode: ${config.useMockAuth ? 'MOCK' : 'REAL'}`);
    if (!config.useMockAuth) {
      console.log(`   OAuth Server: ${config.oauth.authorizationUrl}`);
      console.log(`   API Backend:  ${config.apiBaseUrl}`);
    }
    console.log('\n✅ Server running. Press Ctrl+C to stop.\n');
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      if (maxRetries > 0) {
        const nextPort = port + 1;
        console.log(`⚠️  Port ${port} is in use, trying ${nextPort}...`);
        tryListen(nextPort, maxRetries - 1);
      } else {
        console.error(`\n❌ Error: Ports ${PORT}-${port} are all in use.`);
        console.error('Please free up a port or specify a different one:\n');
        console.error(`   node docs/api/serve.js <port>\n`);
        process.exit(1);
      }
    } else {
      console.error('❌ Server error:', err);
      process.exit(1);
    }
  });
}

tryListen(PORT);

