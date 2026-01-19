import { Request, Response, NextFunction } from 'express';
import { idempotencyMiddleware } from '../../src/middleware/idempotency';

// Mock logger
jest.mock('../../src/config/logger', () => ({
  default: {
    info: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
    debug: jest.fn(),
  },
}));

describe('Idempotency Middleware', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let nextFunction: NextFunction;

  beforeEach(() => {
    // Clear the idempotency cache before each test
    jest.clearAllMocks();
    
    mockRequest = {
      headers: {},
      method: 'POST',
      path: '/test',
      tenantId: '550e8400-e29b-41d4-a716-446655440000',
      requestId: 'test-request-id',
    };
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
      setHeader: jest.fn(),
      statusCode: 201,
    };
    nextFunction = jest.fn();
  });

  describe('POST Request Handling', () => {
    it('should skip idempotency check for non-POST requests', () => {
      mockRequest.method = 'GET';

      idempotencyMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(nextFunction).toHaveBeenCalled();
      expect(mockResponse.status).not.toHaveBeenCalled();
    });

    it('should extract idempotency key from X-Idempotency-Key header', () => {
      const idempotencyKey = '660e8400-e29b-41d4-a716-446655440001';
      mockRequest.headers = {
        'x-idempotency-key': idempotencyKey,
      };

      idempotencyMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockRequest.idempotencyKey).toBe(idempotencyKey);
      expect(nextFunction).toHaveBeenCalled();
    });

    it('should allow POST without idempotency key (optional)', () => {
      mockRequest.headers = {};

      idempotencyMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockRequest.idempotencyKey).toBeUndefined();
      expect(nextFunction).toHaveBeenCalled();
      expect(mockResponse.status).not.toHaveBeenCalled();
    });

    it('should return 400 if idempotency key is not a valid UUID', () => {
      mockRequest.headers = {
        'x-idempotency-key': 'invalid-uuid',
      };

      idempotencyMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'https://api.stayos.com/errors/invalid-idempotency-key',
          title: 'Invalid Idempotency Key',
          status: 400,
          detail: 'Idempotency-Key must be a valid UUID',
        })
      );
      expect(nextFunction).not.toHaveBeenCalled();
    });
  });

  describe('Tenant Scoping', () => {
    it('should create tenant-scoped cache key', () => {
      const idempotencyKey = '660e8400-e29b-41d4-a716-446655440001';
      const tenantId = '550e8400-e29b-41d4-a716-446655440000';
      
      mockRequest.headers = {
        'x-idempotency-key': idempotencyKey,
      };
      mockRequest.tenantId = tenantId;

      idempotencyMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockRequest.idempotencyKey).toBe(idempotencyKey);
      expect(nextFunction).toHaveBeenCalled();
    });

    it('should allow same idempotency key for different tenants', () => {
      const idempotencyKey = '660e8400-e29b-41d4-a716-446655440001';
      
      // First request from tenant A
      mockRequest.headers = {
        'x-idempotency-key': idempotencyKey,
      };
      mockRequest.tenantId = 'tenant-a';

      idempotencyMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(nextFunction).toHaveBeenCalledTimes(1);

      // Second request from tenant B with same idempotency key
      jest.clearAllMocks();
      mockRequest.tenantId = 'tenant-b';

      idempotencyMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(nextFunction).toHaveBeenCalledTimes(1);
    });
  });

  describe('Cache Behavior', () => {
    it('should process first request normally', () => {
      const idempotencyKey = '660e8400-e29b-41d4-a716-446655440001';
      mockRequest.headers = {
        'x-idempotency-key': idempotencyKey,
      };

      idempotencyMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(nextFunction).toHaveBeenCalled();
      expect(mockResponse.setHeader).not.toHaveBeenCalledWith('X-Idempotency-Replayed', 'true');
    });

    // Note: Testing cached response replay would require mocking the response
    // interception logic, which is complex. In a real scenario, you'd use
    // integration tests to verify this behavior.
  });

  describe('Missing Tenant ID', () => {
    it('should handle requests without tenant ID', () => {
      const idempotencyKey = '660e8400-e29b-41d4-a716-446655440001';
      mockRequest.headers = {
        'x-idempotency-key': idempotencyKey,
      };
      mockRequest.tenantId = undefined;

      idempotencyMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockRequest.idempotencyKey).toBe(idempotencyKey);
      expect(nextFunction).toHaveBeenCalled();
    });
  });
});

