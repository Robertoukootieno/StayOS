import { Request, Response, NextFunction } from 'express';
import { trace, SpanStatusCode } from '@opentelemetry/api';
import { v4 as uuidv4 } from 'uuid';
import logger from '../config/logger';

/**
 * Correlation & Tracing Middleware
 * 
 * Handles distributed tracing with OpenTelemetry integration:
 * - Generates or extracts X-Request-Id (unique per request)
 * - Extracts or generates X-Correlation-Id (client-provided for multi-request workflows)
 * - Integrates with OpenTelemetry for distributed tracing (X-Trace-Id, X-Span-Id)
 * - Extracts client identification headers (X-Client-Id, X-Client-Version)
 * 
 * This middleware should be applied early in the middleware chain.
 */
export const tracingMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  try {
    // ============================================
    // Request ID (Always generated server-side)
    // ============================================
    req.requestId = uuidv4();

    // ============================================
    // Correlation ID (Client-provided or generated)
    // ============================================
    const correlationId = req.headers['x-correlation-id'] as string;
    req.correlationId = correlationId || uuidv4();

    // ============================================
    // OpenTelemetry Tracing
    // ============================================
    const tracer = trace.getTracer('stayos-api');
    const span = tracer.startSpan(`${req.method} ${req.path}`, {
      attributes: {
        'http.method': req.method,
        'http.url': req.url,
        'http.path': req.path,
        'http.user_agent': req.headers['user-agent'] || 'unknown',
        'correlation.id': req.correlationId,
        'request.id': req.requestId,
      },
    });

    // Extract trace context from headers if provided
    const traceId = req.headers['x-trace-id'] as string;
    const spanId = req.headers['x-span-id'] as string;

    if (traceId) {
      req.traceId = traceId;
    } else {
      // Get trace ID from OpenTelemetry span context
      const spanContext = span.spanContext();
      req.traceId = spanContext.traceId;
    }

    if (spanId) {
      req.spanId = spanId;
    } else {
      // Get span ID from OpenTelemetry span context
      const spanContext = span.spanContext();
      req.spanId = spanContext.spanId;
    }

    // ============================================
    // Client Identification
    // ============================================
    req.clientId = req.headers['x-client-id'] as string;
    req.clientVersion = req.headers['x-client-version'] as string;

    // ============================================
    // Client Context (IP, User Agent, Device, Session)
    // ============================================
    req.clientContext = {
      ip: (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || 
          (req.headers['x-real-ip'] as string) || 
          req.ip || 
          'unknown',
      userAgent: req.headers['user-agent'] || 'unknown',
      deviceId: req.headers['x-device-id'] as string,
      sessionId: req.headers['x-session-id'] as string,
    };

    // ============================================
    // API Version & Feature Flags
    // ============================================
    req.apiVersion = req.headers['x-api-version'] as string;
    
    const featureFlagsHeader = req.headers['x-feature-flags'] as string;
    if (featureFlagsHeader) {
      req.featureFlags = featureFlagsHeader.split(',').map(f => f.trim());
    }

    // ============================================
    // Logging
    // ============================================
    logger.info(`${req.method} ${req.path}`, {
      requestId: req.requestId,
      correlationId: req.correlationId,
      traceId: req.traceId,
      spanId: req.spanId,
      clientId: req.clientId,
      clientVersion: req.clientVersion,
      ip: req.clientContext.ip,
      userAgent: req.clientContext.userAgent,
    });

    // ============================================
    // Response Handling
    // ============================================
    const originalSend = res.send;
    res.send = function (data: any): Response {
      // Record span status based on response status code
      if (res.statusCode >= 400) {
        span.setStatus({
          code: SpanStatusCode.ERROR,
          message: `HTTP ${res.statusCode}`,
        });
      } else {
        span.setStatus({ code: SpanStatusCode.OK });
      }

      span.setAttribute('http.status_code', res.statusCode);
      span.end();

      return originalSend.call(this, data);
    };

    // Handle response finish event
    res.on('finish', () => {
      logger.info(`${req.method} ${req.path} - ${res.statusCode}`, {
        requestId: req.requestId,
        correlationId: req.correlationId,
        statusCode: res.statusCode,
        duration: Date.now() - (req as any).startTime,
      });
    });

    // Store request start time for duration calculation
    (req as any).startTime = Date.now();

    next();
  } catch (error) {
    logger.error('Tracing middleware error:', error);
    // Generate minimal context even if there's an error
    req.requestId = uuidv4();
    req.correlationId = uuidv4();
    req.clientContext = {
      ip: req.ip || 'unknown',
      userAgent: req.headers['user-agent'] || 'unknown',
    };
    next();
  }
};

