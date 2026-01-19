/**
 * Tests for Validation Middleware
 */

import { Request, Response, NextFunction } from 'express';
import {
  isValidUUID,
  isValidEmail,
  isValidPhone,
  isValidISODate,
  validatePagination,
  validateSort,
  sanitizeString,
  validateRequiredFields,
  validateBodySize,
} from '../../src/middleware/validation';

describe('Validation Middleware', () => {
  describe('isValidUUID', () => {
    it('should return true for valid UUID v4', () => {
      expect(isValidUUID('550e8400-e29b-41d4-a716-446655440000')).toBe(true);
    });

    it('should return true for valid UUID v1', () => {
      expect(isValidUUID('6ba7b810-9dad-11d1-80b4-00c04fd430c8')).toBe(true);
    });

    it('should return false for invalid UUID', () => {
      expect(isValidUUID('invalid-uuid')).toBe(false);
      expect(isValidUUID('550e8400-e29b-41d4-a716')).toBe(false);
      expect(isValidUUID('')).toBe(false);
    });
  });

  describe('isValidEmail', () => {
    it('should return true for valid email', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('user.name+tag@example.co.uk')).toBe(true);
    });

    it('should return false for invalid email', () => {
      expect(isValidEmail('invalid-email')).toBe(false);
      expect(isValidEmail('@example.com')).toBe(false);
      expect(isValidEmail('test@')).toBe(false);
      expect(isValidEmail('')).toBe(false);
    });
  });

  describe('isValidPhone', () => {
    it('should return true for valid E.164 phone number', () => {
      expect(isValidPhone('+254712345678')).toBe(true); // Kenya
      expect(isValidPhone('+12025551234')).toBe(true);  // USA
      expect(isValidPhone('+442071234567')).toBe(true); // UK
    });

    it('should return false for invalid phone number', () => {
      expect(isValidPhone('254712345678')).toBe(false);  // Missing +
      expect(isValidPhone('+0712345678')).toBe(false);   // Invalid country code
      expect(isValidPhone('123')).toBe(false);           // Too short
      expect(isValidPhone('')).toBe(false);
    });
  });

  describe('isValidISODate', () => {
    it('should return true for valid ISO 8601 date', () => {
      expect(isValidISODate('2024-01-15')).toBe(true);
      expect(isValidISODate('2024-01-15T12:00:00Z')).toBe(true);
      expect(isValidISODate('2024-01-15T12:00:00.000Z')).toBe(true);
      expect(isValidISODate('2024-01-15T12:00:00+03:00')).toBe(true);
    });

    it('should return false for invalid date', () => {
      expect(isValidISODate('2024-13-01')).toBe(false);  // Invalid month
      expect(isValidISODate('2024-01-32')).toBe(false);  // Invalid day
      expect(isValidISODate('invalid-date')).toBe(false);
      expect(isValidISODate('')).toBe(false);
    });
  });

  describe('validatePagination', () => {
    it('should return default values when no parameters provided', () => {
      const result = validatePagination();
      expect(result).toEqual({ page: 1, pageSize: 20 });
    });

    it('should parse string parameters', () => {
      const result = validatePagination('2', '50');
      expect(result).toEqual({ page: 2, pageSize: 50 });
    });

    it('should enforce minimum page of 1', () => {
      const result = validatePagination(0, 20);
      expect(result.page).toBe(1);
    });

    it('should enforce maximum pageSize of 100', () => {
      const result = validatePagination(1, 200);
      expect(result.pageSize).toBe(100);
    });

    it('should enforce minimum pageSize of 1', () => {
      const result = validatePagination(1, 0);
      expect(result.pageSize).toBe(1);
    });
  });

  describe('validateSort', () => {
    it('should return default values when no parameters provided', () => {
      const result = validateSort();
      expect(result).toEqual({ sortBy: 'created_at', sortOrder: 'DESC' });
    });

    it('should validate sortBy against allowed fields', () => {
      const result = validateSort('name', 'ASC', ['name', 'created_at']);
      expect(result).toEqual({ sortBy: 'name', sortOrder: 'ASC' });
    });

    it('should use default sortBy if field not allowed', () => {
      const result = validateSort('invalid_field', 'ASC', ['name', 'created_at']);
      expect(result.sortBy).toBe('created_at');
    });

    it('should normalize sortOrder to uppercase', () => {
      const result = validateSort('name', 'asc', ['name']);
      expect(result.sortOrder).toBe('ASC');
    });

    it('should default to DESC for invalid sortOrder', () => {
      const result = validateSort('name', 'invalid', ['name']);
      expect(result.sortOrder).toBe('DESC');
    });
  });

  describe('sanitizeString', () => {
    it('should remove null bytes', () => {
      expect(sanitizeString('test\0string')).toBe('teststring');
    });

    it('should remove control characters', () => {
      expect(sanitizeString('test\x00\x1Fstring')).toBe('teststring');
    });

    it('should trim whitespace', () => {
      expect(sanitizeString('  test string  ')).toBe('test string');
    });

    it('should handle empty string', () => {
      expect(sanitizeString('')).toBe('');
    });
  });

  describe('validateRequiredFields', () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let nextFunction: NextFunction;

    beforeEach(() => {
      mockRequest = {
        body: {},
        path: '/test',
        requestId: 'test-request-id',
      };
      mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };
      nextFunction = jest.fn();
    });

    it('should call next() when all required fields are present', () => {
      mockRequest.body = { name: 'Test', email: 'test@example.com' };
      const middleware = validateRequiredFields(['name', 'email']);
      
      middleware(mockRequest as Request, mockResponse as Response, nextFunction);
      
      expect(nextFunction).toHaveBeenCalled();
      expect(mockResponse.status).not.toHaveBeenCalled();
    });

    it('should return 400 when required fields are missing', () => {
      mockRequest.body = { name: 'Test' };
      const middleware = validateRequiredFields(['name', 'email']);
      
      middleware(mockRequest as Request, mockResponse as Response, nextFunction);
      
      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 400,
          title: 'Validation Error',
          invalidFields: ['email'],
        })
      );
      expect(nextFunction).not.toHaveBeenCalled();
    });

    it('should treat empty string as missing', () => {
      mockRequest.body = { name: '' };
      const middleware = validateRequiredFields(['name']);
      
      middleware(mockRequest as Request, mockResponse as Response, nextFunction);
      
      expect(mockResponse.status).toHaveBeenCalledWith(400);
    });
  });

  describe('validateBodySize', () => {
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

    it('should call next() when body size is within limit', () => {
      mockRequest.headers = { 'content-length': '50000' }; // 50KB
      const middleware = validateBodySize(100); // 100KB limit
      
      middleware(mockRequest as Request, mockResponse as Response, nextFunction);
      
      expect(nextFunction).toHaveBeenCalled();
      expect(mockResponse.status).not.toHaveBeenCalled();
    });

    it('should return 413 when body size exceeds limit', () => {
      mockRequest.headers = { 'content-length': '150000' }; // 150KB
      const middleware = validateBodySize(100); // 100KB limit
      
      middleware(mockRequest as Request, mockResponse as Response, nextFunction);
      
      expect(mockResponse.status).toHaveBeenCalledWith(413);
      expect(mockResponse.json).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 413,
          title: 'Payload Too Large',
        })
      );
      expect(nextFunction).not.toHaveBeenCalled();
    });

    it('should call next() when content-length header is missing', () => {
      const middleware = validateBodySize(100);
      
      middleware(mockRequest as Request, mockResponse as Response, nextFunction);
      
      expect(nextFunction).toHaveBeenCalled();
    });
  });
});

