import request from 'supertest';
import express, { Express } from 'express';
import reservationsRouter from '../../src/routes/reservations';
import { AppDataSource } from '../../src/config/database';

// Mock logger
jest.mock('../../src/config/logger', () => ({
  default: {
    info: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
    debug: jest.fn(),
  },
}));

// Mock database
jest.mock('../../src/config/database', () => ({
  AppDataSource: {
    query: jest.fn(),
  },
}));

// Mock authentication middleware
jest.mock('../../src/middleware/auth', () => ({
  authenticate: (req: any, _res: any, next: any) => {
    req.user = { id: 'user-123', email: 'test@example.com' };
    next();
  },
  authorize: () => (_req: any, _res: any, next: any) => next(),
}));

// Mock tenant middleware
jest.mock('../../src/middleware/tenant', () => ({
  validateTenant: (req: any, _res: any, next: any) => {
    req.tenantId = req.headers['x-tenant-id'] || 'tenant-123';
    next();
  },
}));

describe('Reservations Routes - State Machine', () => {
  let app: Express;

  beforeAll(() => {
    app = express();
    app.use(express.json());
    // Mount with venueId parameter
    app.use('/v1/venues/:venueId/reservations', reservationsRouter);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('POST /:reservationId/confirm', () => {
    it('should confirm a PENDING reservation', async () => {
      const mockReservation = {
        id: 'reservation-1',
        status: 'PENDING',
        version: 1,
      };

      const mockUpdatedReservation = {
        ...mockReservation,
        status: 'CONFIRMED',
        confirmed_at: new Date(),
        version: 2,
      };

      // First query: check current status
      (AppDataSource.query as jest.Mock).mockResolvedValueOnce([mockReservation]);
      // Second query: update status
      (AppDataSource.query as jest.Mock).mockResolvedValueOnce([mockUpdatedReservation]);

      const response = await request(app)
        .post('/v1/venues/venue-1/reservations/reservation-1/confirm')
        .set('X-Tenant-Id', 'tenant-123');

      expect(response.status).toBe(200);
      expect(response.body.status).toBe('CONFIRMED');
    });

    it('should return 422 when confirming non-PENDING reservation', async () => {
      const mockReservation = {
        id: 'reservation-1',
        status: 'CONFIRMED',
        version: 1,
      };

      (AppDataSource.query as jest.Mock).mockResolvedValueOnce([mockReservation]);

      const response = await request(app)
        .post('/v1/venues/venue-1/reservations/reservation-1/confirm')
        .set('X-Tenant-Id', 'tenant-123');

      expect(response.status).toBe(422);
      expect(response.body.type).toContain('invalid-state-transition');
      expect(response.body.detail).toContain('Cannot confirm reservation with status CONFIRMED');
    });
  });

  describe('POST /:reservationId/seat', () => {
    it('should seat a CONFIRMED reservation', async () => {
      const mockReservation = {
        id: 'reservation-1',
        status: 'CONFIRMED',
        version: 1,
      };

      const mockUpdatedReservation = {
        ...mockReservation,
        status: 'SEATED',
        seated_at: new Date(),
        version: 2,
      };

      (AppDataSource.query as jest.Mock).mockResolvedValueOnce([mockReservation]);
      (AppDataSource.query as jest.Mock).mockResolvedValueOnce([mockUpdatedReservation]);

      const response = await request(app)
        .post('/v1/venues/venue-1/reservations/reservation-1/seat')
        .set('X-Tenant-Id', 'tenant-123');

      expect(response.status).toBe(200);
      expect(response.body.status).toBe('SEATED');
    });

    it('should return 422 when seating non-CONFIRMED reservation', async () => {
      const mockReservation = {
        id: 'reservation-1',
        status: 'PENDING',
        version: 1,
      };

      (AppDataSource.query as jest.Mock).mockResolvedValueOnce([mockReservation]);

      const response = await request(app)
        .post('/v1/venues/venue-1/reservations/reservation-1/seat')
        .set('X-Tenant-Id', 'tenant-123');

      expect(response.status).toBe(422);
      expect(response.body.detail).toContain('Cannot seat reservation with status PENDING');
    });
  });

  describe('POST /:reservationId/complete', () => {
    it('should complete a SEATED reservation', async () => {
      const mockReservation = {
        id: 'reservation-1',
        status: 'SEATED',
        version: 1,
      };

      const mockUpdatedReservation = {
        ...mockReservation,
        status: 'COMPLETED',
        completed_at: new Date(),
        version: 2,
      };

      (AppDataSource.query as jest.Mock).mockResolvedValueOnce([mockReservation]);
      (AppDataSource.query as jest.Mock).mockResolvedValueOnce([mockUpdatedReservation]);

      const response = await request(app)
        .post('/v1/venues/venue-1/reservations/reservation-1/complete')
        .set('X-Tenant-Id', 'tenant-123');

      expect(response.status).toBe(200);
      expect(response.body.status).toBe('COMPLETED');
    });
  });

  describe('POST /:reservationId/no-show', () => {
    it('should mark a CONFIRMED reservation as no-show', async () => {
      const mockReservation = {
        id: 'reservation-1',
        status: 'CONFIRMED',
        version: 1,
      };

      const mockUpdatedReservation = {
        ...mockReservation,
        status: 'NO_SHOW',
        no_show_at: new Date(),
        version: 2,
      };

      (AppDataSource.query as jest.Mock).mockResolvedValueOnce([mockReservation]);
      (AppDataSource.query as jest.Mock).mockResolvedValueOnce([mockUpdatedReservation]);

      const response = await request(app)
        .post('/v1/venues/venue-1/reservations/reservation-1/no-show')
        .set('X-Tenant-Id', 'tenant-123');

      expect(response.status).toBe(200);
      expect(response.body.status).toBe('NO_SHOW');
    });

    it('should return 422 when marking COMPLETED reservation as no-show', async () => {
      const mockReservation = {
        id: 'reservation-1',
        status: 'COMPLETED',
        version: 1,
      };

      (AppDataSource.query as jest.Mock).mockResolvedValueOnce([mockReservation]);

      const response = await request(app)
        .post('/v1/venues/venue-1/reservations/reservation-1/no-show')
        .set('X-Tenant-Id', 'tenant-123');

      expect(response.status).toBe(422);
      expect(response.body.detail).toContain('Only PENDING or CONFIRMED reservations can be marked as no-show');
    });
  });

  describe('POST /:reservationId/cancel', () => {
    it('should cancel a PENDING reservation', async () => {
      const mockReservation = {
        id: 'reservation-1',
        status: 'PENDING',
        version: 1,
      };

      const mockUpdatedReservation = {
        ...mockReservation,
        status: 'CANCELLED',
        cancelled_at: new Date(),
        version: 2,
      };

      (AppDataSource.query as jest.Mock).mockResolvedValueOnce([mockReservation]);
      (AppDataSource.query as jest.Mock).mockResolvedValueOnce([mockUpdatedReservation]);

      const response = await request(app)
        .post('/v1/venues/venue-1/reservations/reservation-1/cancel')
        .set('X-Tenant-Id', 'tenant-123');

      expect(response.status).toBe(200);
      expect(response.body.status).toBe('CANCELLED');
    });

    it('should cancel a CONFIRMED reservation', async () => {
      const mockReservation = {
        id: 'reservation-1',
        status: 'CONFIRMED',
        version: 1,
      };

      const mockUpdatedReservation = {
        ...mockReservation,
        status: 'CANCELLED',
        cancelled_at: new Date(),
        version: 2,
      };

      (AppDataSource.query as jest.Mock).mockResolvedValueOnce([mockReservation]);
      (AppDataSource.query as jest.Mock).mockResolvedValueOnce([mockUpdatedReservation]);

      const response = await request(app)
        .post('/v1/venues/venue-1/reservations/reservation-1/cancel')
        .set('X-Tenant-Id', 'tenant-123');

      expect(response.status).toBe(200);
      expect(response.body.status).toBe('CANCELLED');
    });

    it('should return 422 when cancelling COMPLETED reservation', async () => {
      const mockReservation = {
        id: 'reservation-1',
        status: 'COMPLETED',
        version: 1,
      };

      (AppDataSource.query as jest.Mock).mockResolvedValueOnce([mockReservation]);

      const response = await request(app)
        .post('/v1/venues/venue-1/reservations/reservation-1/cancel')
        .set('X-Tenant-Id', 'tenant-123');

      expect(response.status).toBe(422);
      expect(response.body.detail).toContain('Only PENDING, CONFIRMED, or SEATED reservations can be cancelled');
    });
  });

  describe('State Machine Validation', () => {
    it('should enforce valid state transitions', async () => {
      // Test matrix of invalid transitions
      const invalidTransitions = [
        { from: 'CONFIRMED', operation: 'confirm', expectedError: 'Only PENDING reservations can be confirmed' },
        { from: 'PENDING', operation: 'seat', expectedError: 'Only CONFIRMED reservations can be seated' },
        { from: 'PENDING', operation: 'complete', expectedError: 'Only SEATED reservations can be completed' },
        { from: 'COMPLETED', operation: 'no-show', expectedError: 'Only PENDING or CONFIRMED reservations can be marked as no-show' },
        { from: 'COMPLETED', operation: 'cancel', expectedError: 'Only PENDING, CONFIRMED, or SEATED reservations can be cancelled' },
      ];

      for (const transition of invalidTransitions) {
        jest.clearAllMocks();

        const mockReservation = {
          id: 'reservation-1',
          status: transition.from,
          version: 1,
        };

        (AppDataSource.query as jest.Mock).mockResolvedValueOnce([mockReservation]);

        const response = await request(app)
          .post(`/v1/venues/venue-1/reservations/reservation-1/${transition.operation}`)
          .set('X-Tenant-Id', 'tenant-123');

        expect(response.status).toBe(422);
        expect(response.body.detail).toContain(transition.expectedError);
      }
    });
  });
});
