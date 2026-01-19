import { Request, Response, NextFunction } from 'express';
import { tracingMiddleware } from '../../src/middleware/tracing';

// Mock logger
jest.mock('../../src/config/logger', () => ({
  default: {
    info: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
    debug: jest.fn(),
  },
}));

// Mock OpenTelemetry
jest.mock('@opentelemetry/api', () => ({
  trace: {
    getTracer: jest.fn(() => ({
      startSpan: jest.fn(() => ({
        spanContext: jest.fn(() => ({
          traceId: 'mock-trace-id-1234567890abcdef',
          spanId: 'mock-span-id-12345678',
        })),
        setAttribute: jest.fn(),
        setStatus: jest.fn(),
        end: jest.fn(),
      })),
    })),
  },
  SpanStatusCode: {
    OK: 1,
    ERROR: 2,
  },
  context: {
    with: jest.fn((_ctx, fn) => fn()),
  },
}));

describe('Tracing Middleware', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let nextFunction: NextFunction;

  beforeEach(() => {
    mockRequest = {
      headers: {},
      path: '/test',
      method: 'GET',
    };
    mockResponse = {
      on: jest.fn(),
      statusCode: 200,
    };
    nextFunction = jest.fn();
  });

  describe('Request ID Generation', () => {
    it('should generate a request ID if not provided', () => {
      mockRequest.headers = {};

      tracingMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockRequest.requestId).toBeDefined();
      expect(typeof mockRequest.requestId).toBe('string');
      expect(mockRequest.requestId).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
      expect(nextFunction).toHaveBeenCalled();
    });

    it('should always generate a new request ID (server-side)', () => {
      mockRequest.headers = {
        'x-request-id': 'client-provided-id',
      };

      tracingMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockRequest.requestId).toBeDefined();
      expect(mockRequest.requestId).not.toBe('client-provided-id');
      expect(nextFunction).toHaveBeenCalled();
    });
  });

  describe('Correlation ID Extraction', () => {
    it('should extract correlation ID from X-Correlation-Id header', () => {
      const correlationId = '550e8400-e29b-41d4-a716-446655440000';
      mockRequest.headers = {
        'x-correlation-id': correlationId,
      };

      tracingMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockRequest.correlationId).toBe(correlationId);
      expect(nextFunction).toHaveBeenCalled();
    });

    it('should generate correlation ID if not provided', () => {
      mockRequest.headers = {};

      tracingMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockRequest.correlationId).toBeDefined();
      expect(typeof mockRequest.correlationId).toBe('string');
      expect(nextFunction).toHaveBeenCalled();
    });
  });

  describe('Trace ID and Span ID', () => {
    it('should extract trace ID from X-Trace-Id header if provided', () => {
      const traceId = 'custom-trace-id-1234567890abcdef';
      mockRequest.headers = {
        'x-trace-id': traceId,
      };

      tracingMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockRequest.traceId).toBe(traceId);
      expect(nextFunction).toHaveBeenCalled();
    });

    it('should extract span ID from X-Span-Id header if provided', () => {
      const spanId = 'custom-span-id-12345678';
      mockRequest.headers = {
        'x-span-id': spanId,
      };

      tracingMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockRequest.spanId).toBe(spanId);
      expect(nextFunction).toHaveBeenCalled();
    });

    it('should generate trace ID and span ID from OpenTelemetry if not provided', () => {
      mockRequest.headers = {};

      tracingMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockRequest.traceId).toBeDefined();
      expect(mockRequest.spanId).toBeDefined();
      expect(nextFunction).toHaveBeenCalled();
    });
  });

  describe('Client Context Extraction', () => {
    it('should extract client ID from X-Client-Id header', () => {
      const clientId = 'mobile-app-v1.2.3';
      mockRequest.headers = {
        'x-client-id': clientId,
      };

      tracingMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockRequest.clientId).toBe(clientId);
      expect(nextFunction).toHaveBeenCalled();
    });

    it('should extract client version from X-Client-Version header', () => {
      const clientVersion = '1.2.3';
      mockRequest.headers = {
        'x-client-version': clientVersion,
      };

      tracingMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockRequest.clientVersion).toBe(clientVersion);
      expect(nextFunction).toHaveBeenCalled();
    });

  });

  describe('Response Listener', () => {
    it('should register a finish event listener on response', () => {
      tracingMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockResponse.on).toHaveBeenCalledWith('finish', expect.any(Function));
      expect(nextFunction).toHaveBeenCalled();
    });
  });
});

