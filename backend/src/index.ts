import 'reflect-metadata';
import dotenv from 'dotenv';
import app from './app';
import { initializeDatabase } from './config/database';
import logger from './config/logger';
import { initTelemetry } from './config/telemetry';

dotenv.config();

// Initialize OpenTelemetry (must be done before importing instrumented modules)
initTelemetry();

const PORT = process.env.PORT || 8080;

const startServer = async () => {
  try {
    // Initialize database connection (skip if DB is not available for auth testing)
    try {
      await initializeDatabase();
      logger.info('Database initialized successfully');
    } catch (dbError) {
      logger.warn('⚠️  Database connection failed - running without database for auth testing');
      logger.warn('Database error:', dbError);
    }

    // Start Express server
    app.listen(PORT, () => {
      logger.info(`🚀 StayOS API Server Started`);
      logger.info(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
      logger.info(`📖 Server:        http://localhost:${PORT}`);
      logger.info(`🏥 Health Check:  http://localhost:${PORT}/health`);
      logger.info(`📋 API Endpoint:  http://localhost:${PORT}${process.env.API_PREFIX || '/v1'}`);
      logger.info(`🔐 Auth Endpoint: http://localhost:${PORT}${process.env.API_PREFIX || '/v1'}/auth`);
      logger.info(`🌍 Environment:   ${process.env.NODE_ENV || 'development'}`);
      logger.info(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
      logger.info(`✅ Server is ready to accept requests`);
    });
  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
};

// Handle graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM signal received: closing HTTP server');
  process.exit(0);
});

process.on('SIGINT', () => {
  logger.info('SIGINT signal received: closing HTTP server');
  process.exit(0);
});

// Start the server
startServer();

