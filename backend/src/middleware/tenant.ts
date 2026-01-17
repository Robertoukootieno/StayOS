import { Request, Response, NextFunction } from 'express';
import logger from '../config/logger';

/**
 * Validate UUID format
 */
const isValidUUID = (uuid: string): boolean => {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
};

/**
 * Tenant Validation Middleware
 * 
 * Validates and extracts X-Tenant-Id header (required)
 * Optionally extracts X-Brand-Id and X-Organization-Id headers
 * 
 * This middleware ensures multi-tenant data isolation by requiring
 * a valid tenant ID on all requests.
 */
export const validateTenant = (req: Request, res: Response, next: NextFunction): void => {
  try {
    // Extract tenant ID from header
    const tenantId = req.headers['x-tenant-id'] as string;

    // Tenant ID is required
    if (!tenantId) {
      res.status(400).json({
        type: 'https://api.stayos.com/errors/missing-tenant',
        title: 'Missing Tenant ID',
        status: 400,
        detail: 'X-Tenant-Id header is required for all API requests',
        instance: req.path,
        traceId: req.requestId,
      });
      return;
    }

    // Validate UUID format
    if (!isValidUUID(tenantId)) {
      res.status(400).json({
        type: 'https://api.stayos.com/errors/invalid-tenant',
        title: 'Invalid Tenant ID',
        status: 400,
        detail: 'X-Tenant-Id must be a valid UUID',
        instance: req.path,
        traceId: req.requestId,
      });
      return;
    }

    // Attach tenant ID to request
    req.tenantId = tenantId;

    // Extract optional brand ID
    const brandId = req.headers['x-brand-id'] as string;
    if (brandId) {
      if (!isValidUUID(brandId)) {
        res.status(400).json({
          type: 'https://api.stayos.com/errors/invalid-brand',
          title: 'Invalid Brand ID',
          status: 400,
          detail: 'X-Brand-Id must be a valid UUID',
          instance: req.path,
          traceId: req.requestId,
        });
        return;
      }
      req.brandId = brandId;
    }

    // Extract optional organization ID
    const organizationId = req.headers['x-organization-id'] as string;
    if (organizationId) {
      if (!isValidUUID(organizationId)) {
        res.status(400).json({
          type: 'https://api.stayos.com/errors/invalid-organization',
          title: 'Invalid Organization ID',
          status: 400,
          detail: 'X-Organization-Id must be a valid UUID',
          instance: req.path,
          traceId: req.requestId,
        });
        return;
      }
      req.organizationId = organizationId;
    }

    logger.debug('Tenant context extracted', {
      tenantId: req.tenantId,
      brandId: req.brandId,
      organizationId: req.organizationId,
      requestId: req.requestId,
    });

    next();
  } catch (error) {
    logger.error('Tenant validation error:', error);
    res.status(500).json({
      type: 'https://api.stayos.com/errors/internal-server-error',
      title: 'Internal Server Error',
      status: 500,
      detail: 'An error occurred during tenant validation',
      instance: req.path,
      traceId: req.requestId,
    });
  }
};

/**
 * Optional Tenant Validation Middleware
 * 
 * Extracts tenant context if provided, but doesn't require it.
 * Useful for public endpoints that may optionally use tenant context.
 */
export const optionalTenant = (req: Request, _res: Response, next: NextFunction): void => {
  try {
    const tenantId = req.headers['x-tenant-id'] as string;

    if (tenantId) {
      if (isValidUUID(tenantId)) {
        req.tenantId = tenantId;

        // Extract optional brand and organization IDs
        const brandId = req.headers['x-brand-id'] as string;
        if (brandId && isValidUUID(brandId)) {
          req.brandId = brandId;
        }

        const organizationId = req.headers['x-organization-id'] as string;
        if (organizationId && isValidUUID(organizationId)) {
          req.organizationId = organizationId;
        }
      } else {
        logger.warn('Invalid tenant ID format provided', { tenantId });
      }
    }

    next();
  } catch (error) {
    logger.error('Optional tenant validation error:', error);
    next(); // Continue even if there's an error
  }
};

