/**
 * Request Validation Middleware
 * Provides comprehensive input validation for API requests
 */

import { Request, Response, NextFunction } from 'express';
import logger from '../config/logger';

/**
 * Validate UUID format (RFC 4122)
 * @param value - String to validate
 * @returns true if valid UUID
 */
export const isValidUUID = (value: string): boolean => {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(value);
};

/**
 * Validate email format (RFC 5322 simplified)
 * @param email - Email string to validate
 * @returns true if valid email
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number (E.164 format)
 * @param phone - Phone number to validate
 * @returns true if valid phone number
 */
export const isValidPhone = (phone: string): boolean => {
  // E.164 format: +[country code][number] (max 15 digits)
  const phoneRegex = /^\+[1-9]\d{1,14}$/;
  return phoneRegex.test(phone);
};

/**
 * Validate date string (ISO 8601)
 * @param date - Date string to validate
 * @returns true if valid ISO 8601 date
 */
export const isValidISODate = (date: string): boolean => {
  const isoDateRegex = /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d{3})?(Z|[+-]\d{2}:\d{2})?)?$/;
  if (!isoDateRegex.test(date)) return false;
  
  const parsedDate = new Date(date);
  return !isNaN(parsedDate.getTime());
};

/**
 * Validate pagination parameters
 * @param page - Page number
 * @param pageSize - Items per page
 * @returns Validated pagination parameters
 */
export const validatePagination = (
  page?: string | number,
  pageSize?: string | number
): { page: number; pageSize: number } => {
  const parsedPage = typeof page === 'string' ? parseInt(page, 10) : (page ?? 1);
  const parsedPageSize = typeof pageSize === 'string' ? parseInt(pageSize, 10) : (pageSize ?? 20);

  return {
    page: Math.max(1, isNaN(parsedPage) ? 1 : parsedPage),
    pageSize: Math.min(100, Math.max(1, isNaN(parsedPageSize) ? 20 : parsedPageSize)), // Max 100 items per page
  };
};

/**
 * Validate sort parameters
 * @param sortBy - Field to sort by
 * @param sortOrder - Sort order (asc/desc)
 * @param allowedFields - List of allowed sort fields
 * @returns Validated sort parameters
 */
export const validateSort = (
  sortBy?: string,
  sortOrder?: string,
  allowedFields: string[] = []
): { sortBy: string; sortOrder: 'ASC' | 'DESC' } => {
  const validSortBy = sortBy && allowedFields.includes(sortBy) ? sortBy : 'created_at';
  const validSortOrder = sortOrder?.toUpperCase() === 'ASC' ? 'ASC' : 'DESC';

  return {
    sortBy: validSortBy,
    sortOrder: validSortOrder,
  };
};

/**
 * Sanitize string input (remove dangerous characters)
 * @param input - String to sanitize
 * @returns Sanitized string
 */
export const sanitizeString = (input: string): string => {
  // Remove null bytes, control characters, and trim whitespace
  return input
    .replace(/\0/g, '')
    .replace(/[\x00-\x1F\x7F]/g, '')
    .trim();
};

/**
 * Validate required fields in request body
 * @param requiredFields - Array of required field names
 * @returns Express middleware function
 */
export const validateRequiredFields = (requiredFields: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const missingFields: string[] = [];

    for (const field of requiredFields) {
      if (req.body[field] === undefined || req.body[field] === null || req.body[field] === '') {
        missingFields.push(field);
      }
    }

    if (missingFields.length > 0) {
      res.status(400).json({
        type: 'https://api.stayos.com/errors/validation-error',
        title: 'Validation Error',
        status: 400,
        detail: `Missing required fields: ${missingFields.join(', ')}`,
        instance: req.path,
        traceId: req.requestId,
        invalidFields: missingFields,
      });
      return;
    }

    next();
  };
};

/**
 * Validate request body size
 * @param maxSizeKB - Maximum size in kilobytes
 * @returns Express middleware function
 */
export const validateBodySize = (maxSizeKB: number = 100) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const contentLength = req.headers['content-length'];
    
    if (contentLength) {
      const sizeKB = parseInt(contentLength, 10) / 1024;
      
      if (sizeKB > maxSizeKB) {
        logger.warn('Request body too large', {
          service: 'stayos-api',
          requestId: req.requestId,
          sizeKB,
          maxSizeKB,
        });

        res.status(413).json({
          type: 'https://api.stayos.com/errors/payload-too-large',
          title: 'Payload Too Large',
          status: 413,
          detail: `Request body size (${sizeKB.toFixed(2)}KB) exceeds maximum allowed size (${maxSizeKB}KB)`,
          instance: req.path,
          traceId: req.requestId,
        });
        return;
      }
    }

    next();
  };
};

