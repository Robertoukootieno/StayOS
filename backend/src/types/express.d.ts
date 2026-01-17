import { Request } from 'express';

/**
 * Extended Express Request interface with enterprise-grade context
 * Includes multi-tenancy, observability, localization, and user context
 */
declare global {
  namespace Express {
    interface Request {
      // ============================================
      // User & Authentication Context
      // ============================================
      user?: {
        id: string;
        email: string;
        scopes: string[];
        role: string;
      };

      // ============================================
      // Multi-Tenancy Context
      // ============================================
      tenantId?: string;
      brandId?: string;
      organizationId?: string;

      // ============================================
      // Correlation & Tracing Context
      // ============================================
      requestId: string;
      correlationId?: string;
      traceId?: string;
      spanId?: string;
      clientId?: string;
      clientVersion?: string;

      // ============================================
      // Localization Context
      // ============================================
      locale: {
        language: string;
        timezone: string;
        currency: string;
      };

      // ============================================
      // Idempotency Context
      // ============================================
      idempotencyKey?: string;

      // ============================================
      // Client Context
      // ============================================
      clientContext: {
        ip: string;
        userAgent: string;
        deviceId?: string;
        sessionId?: string;
      };

      // ============================================
      // Feature Flags
      // ============================================
      featureFlags?: string[];

      // ============================================
      // API Version
      // ============================================
      apiVersion?: string;
    }
  }
}

export {};

