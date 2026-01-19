import { Request, Response, NextFunction } from 'express';
import { validateTenant, optionalTenant } from '../../src/middleware/tenant';

// Mock logger
jest.mock('../../src/config/logger', () => ({
  default: {
    info: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
    debug: jest.fn(),
  },
}));

describe('Tenant Middleware', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let nextFunction: NextFunction;

  beforeEach(() => {
    mockRequest = {
      headers: {},
      path: '/test',
      requestId: 'test-request-id',
    };
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    nextFunction = jest.fn();
  });

  describe('validateTenant', () => {
    it('should extract valid tenant ID and call next()', () => {
      const validTenantId = '550e8400-e29b-41d4-a716-446655440000';
      mockRequest.headers = {
        'x-tenant-id': validTenantId,
      };

      validateTenant(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockRequest.tenantId).toBe(validTenantId);
      expect(nextFunction).toHaveBeenCalled();
      expect(mockResponse.status).not.toHaveBeenCalled();
    });

    it('should extract brand ID and organization ID if provided', () => {
      const validTenantId = '550e8400-e29b-41d4-a716-446655440000';
      const validBrandId = '660e8400-e29b-41d4-a716-446655440001';
      const validOrgId = '770e8400-e29b-41d4-a716-446655440002';

      mockRequest.headers = {
        'x-tenant-id': validTenantId,
        'x-brand-id': validBrandId,
        'x-organization-id': validOrgId,
      };

      validateTenant(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockRequest.tenantId).toBe(validTenantId);
      expect(mockRequest.brandId).toBe(validBrandId);
      expect(mockRequest.organizationId).toBe(validOrgId);
      expect(nextFunction).toHaveBeenCalled();
    });

    it('should return 400 if tenant ID is missing', () => {
      mockRequest.headers = {};

      validateTenant(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'https://api.stayos.com/errors/missing-tenant',
          title: 'Missing Tenant ID',
          status: 400,
          detail: 'X-Tenant-Id header is required for all API requests',
        })
      );
      expect(nextFunction).not.toHaveBeenCalled();
    });

    it('should return 400 if tenant ID is not a valid UUID', () => {
      mockRequest.headers = {
        'x-tenant-id': 'invalid-uuid',
      };

      validateTenant(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'https://api.stayos.com/errors/invalid-tenant',
          title: 'Invalid Tenant ID',
          status: 400,
          detail: 'X-Tenant-Id must be a valid UUID',
        })
      );
      expect(nextFunction).not.toHaveBeenCalled();
    });

    it('should return 400 if brand ID is not a valid UUID', () => {
      const validTenantId = '550e8400-e29b-41d4-a716-446655440000';
      mockRequest.headers = {
        'x-tenant-id': validTenantId,
        'x-brand-id': 'invalid-uuid',
      };

      validateTenant(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'https://api.stayos.com/errors/invalid-brand',
          title: 'Invalid Brand ID',
          status: 400,
          detail: 'X-Brand-Id must be a valid UUID',
        })
      );
      expect(nextFunction).not.toHaveBeenCalled();
    });

    it('should return 400 if organization ID is not a valid UUID', () => {
      const validTenantId = '550e8400-e29b-41d4-a716-446655440000';
      mockRequest.headers = {
        'x-tenant-id': validTenantId,
        'x-organization-id': 'invalid-uuid',
      };

      validateTenant(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'https://api.stayos.com/errors/invalid-organization',
          title: 'Invalid Organization ID',
          status: 400,
          detail: 'X-Organization-Id must be a valid UUID',
        })
      );
      expect(nextFunction).not.toHaveBeenCalled();
    });
  });

  describe('optionalTenant', () => {
    it('should extract tenant ID if provided', () => {
      const validTenantId = '550e8400-e29b-41d4-a716-446655440000';
      mockRequest.headers = {
        'x-tenant-id': validTenantId,
      };

      optionalTenant(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockRequest.tenantId).toBe(validTenantId);
      expect(nextFunction).toHaveBeenCalled();
    });

    it('should call next() even if tenant ID is not provided', () => {
      mockRequest.headers = {};

      optionalTenant(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockRequest.tenantId).toBeUndefined();
      expect(nextFunction).toHaveBeenCalled();
      expect(mockResponse.status).not.toHaveBeenCalled();
    });

    it('should skip invalid tenant IDs and call next()', () => {
      mockRequest.headers = {
        'x-tenant-id': 'invalid-uuid',
      };

      optionalTenant(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockRequest.tenantId).toBeUndefined();
      expect(nextFunction).toHaveBeenCalled();
      expect(mockResponse.status).not.toHaveBeenCalled();
    });
  });
});

