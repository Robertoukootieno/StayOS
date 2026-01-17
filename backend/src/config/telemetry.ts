import { NodeSDK } from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import logger from './logger';

/**
 * OpenTelemetry Configuration
 * 
 * Configures distributed tracing for the StayOS API using OpenTelemetry.
 * 
 * Features:
 * - Automatic instrumentation for Express, HTTP, PostgreSQL, etc.
 * - Service name and version metadata
 * - Console exporter for development (can be replaced with OTLP exporter for production)
 * 
 * Environment Variables:
 * - OTEL_ENABLED: Enable/disable OpenTelemetry (default: true in production, false in development)
 * - OTEL_SERVICE_NAME: Service name (default: stayos-api)
 * - OTEL_EXPORTER_OTLP_ENDPOINT: OTLP endpoint for production (e.g., Jaeger, Zipkin)
 */

const isOtelEnabled = process.env.OTEL_ENABLED === 'true' || process.env.NODE_ENV === 'production';
const serviceName = process.env.OTEL_SERVICE_NAME || 'stayos-api';
const serviceVersion = process.env.API_VERSION || '1.0.0';

let sdk: NodeSDK | null = null;

/**
 * Initialize OpenTelemetry SDK
 */
export const initTelemetry = (): void => {
  if (!isOtelEnabled) {
    logger.info('OpenTelemetry is disabled');
    return;
  }

  try {
    sdk = new NodeSDK({
      serviceName,
      instrumentations: [
        getNodeAutoInstrumentations({
          // Disable instrumentations that are not needed
          '@opentelemetry/instrumentation-fs': {
            enabled: false,
          },
        }),
      ],
    });

    sdk.start();

    logger.info('OpenTelemetry initialized', {
      serviceName,
      serviceVersion,
      endpoint: process.env.OTEL_EXPORTER_OTLP_ENDPOINT || 'console',
    });

    // Graceful shutdown
    process.on('SIGTERM', async () => {
      try {
        await sdk?.shutdown();
        logger.info('OpenTelemetry shut down successfully');
      } catch (error) {
        logger.error('Error shutting down OpenTelemetry', error);
      }
    });
  } catch (error) {
    logger.error('Failed to initialize OpenTelemetry', error);
  }
};

/**
 * Shutdown OpenTelemetry SDK
 */
export const shutdownTelemetry = async (): Promise<void> => {
  if (sdk) {
    await sdk.shutdown();
    logger.info('OpenTelemetry shut down');
  }
};

