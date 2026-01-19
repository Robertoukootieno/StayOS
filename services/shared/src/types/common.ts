/**
 * Common types used across all microservices
 */

export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface RequestContext {
  tenantId: string;
  userId?: string;
  requestId: string;
  locale?: string;
  timezone?: string;
  currency?: string;
}

export interface ServiceResponse<T> {
  success: boolean;
  data?: T;
  error?: ErrorResponse;
  metadata?: Record<string, any>;
}

export interface ErrorResponse {
  code: string;
  message: string;
  details?: any;
}

