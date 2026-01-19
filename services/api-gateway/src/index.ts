import 'reflect-metadata';
import dotenv from 'dotenv';
import { app } from './app';
import { Logger } from '@stayos/shared';

// Load environment variables
dotenv.config();

const logger = new Logger('api-gateway');
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
  logger.info(`API Gateway started on port ${PORT}`);
  logger.info(`Environment: ${process.env.NODE_ENV || 'development'}`);
  logger.info(`Health check: http://localhost:${PORT}/health`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM signal received: closing HTTP server');
  process.exit(0);
});

process.on('SIGINT', () => {
  logger.info('SIGINT signal received: closing HTTP server');
  process.exit(0);
});

