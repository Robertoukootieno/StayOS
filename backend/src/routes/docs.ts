/**
 * API Documentation Routes
 * Serves OpenAPI specification and interactive documentation
 */

import { Router, Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';

const router = Router();

/**
 * Serve OpenAPI specification (YAML)
 * GET /docs/openapi.yaml
 */
router.get('/openapi.yaml', (_req: Request, res: Response) => {
  try {
    const openapiPath = path.join(__dirname, '../../../api/openapi.yaml');
    
    if (!fs.existsSync(openapiPath)) {
      res.status(404).json({
        type: 'https://api.stayos.com/errors/not-found',
        title: 'Not Found',
        status: 404,
        detail: 'OpenAPI specification file not found',
      });
      return;
    }

    const openapiContent = fs.readFileSync(openapiPath, 'utf8');
    res.setHeader('Content-Type', 'application/x-yaml');
    res.send(openapiContent);
  } catch (error) {
    res.status(500).json({
      type: 'https://api.stayos.com/errors/internal-error',
      title: 'Internal Server Error',
      status: 500,
      detail: 'Failed to load OpenAPI specification',
    });
  }
});

/**
 * Serve OpenAPI specification (JSON)
 * GET /docs/openapi.json
 */
router.get('/openapi.json', (_req: Request, res: Response) => {
  try {
    const openapiPath = path.join(__dirname, '../../../api/openapi.yaml');
    
    if (!fs.existsSync(openapiPath)) {
      res.status(404).json({
        type: 'https://api.stayos.com/errors/not-found',
        title: 'Not Found',
        status: 404,
        detail: 'OpenAPI specification file not found',
      });
      return;
    }

    const openapiContent = fs.readFileSync(openapiPath, 'utf8');
    const openapiJson = yaml.load(openapiContent);
    
    res.setHeader('Content-Type', 'application/json');
    res.json(openapiJson);
  } catch (error) {
    res.status(500).json({
      type: 'https://api.stayos.com/errors/internal-error',
      title: 'Internal Server Error',
      status: 500,
      detail: 'Failed to load OpenAPI specification',
    });
  }
});

/**
 * Serve Swagger UI
 * GET /docs
 */
router.get('/', (_req: Request, res: Response) => {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>StayOS API Documentation</title>
  <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@5.10.0/swagger-ui.css">
  <style>
    body {
      margin: 0;
      padding: 0;
    }
    .topbar {
      display: none;
    }
  </style>
</head>
<body>
  <div id="swagger-ui"></div>
  <script src="https://unpkg.com/swagger-ui-dist@5.10.0/swagger-ui-bundle.js"></script>
  <script src="https://unpkg.com/swagger-ui-dist@5.10.0/swagger-ui-standalone-preset.js"></script>
  <script>
    window.onload = function() {
      window.ui = SwaggerUIBundle({
        url: '/docs/openapi.json',
        dom_id: '#swagger-ui',
        deepLinking: true,
        presets: [
          SwaggerUIBundle.presets.apis,
          SwaggerUIStandalonePreset
        ],
        plugins: [
          SwaggerUIBundle.plugins.DownloadUrl
        ],
        layout: "StandaloneLayout",
        defaultModelsExpandDepth: 1,
        defaultModelExpandDepth: 1,
        docExpansion: 'list',
        filter: true,
        showExtensions: true,
        showCommonExtensions: true,
        tryItOutEnabled: true,
      });
    };
  </script>
</body>
</html>
  `;

  res.setHeader('Content-Type', 'text/html');
  res.send(html);
});

/**
 * API information endpoint
 * GET /docs/info
 */
router.get('/info', (_req: Request, res: Response) => {
  res.json({
    name: 'StayOS API',
    version: process.env.npm_package_version || '1.0.0',
    description: 'Comprehensive property management system with restaurant and bar features',
    documentation: {
      interactive: '/docs',
      openapi_yaml: '/docs/openapi.yaml',
      openapi_json: '/docs/openapi.json',
    },
    endpoints: {
      health: '/health',
      venues: '/v1/venues',
      tables: '/v1/venues/:venueId/tables',
      reservations: '/v1/venues/:venueId/reservations',
    },
    support: {
      email: 'support@stayos.com',
      documentation: 'https://docs.stayos.com',
    },
  });
});

export default router;

