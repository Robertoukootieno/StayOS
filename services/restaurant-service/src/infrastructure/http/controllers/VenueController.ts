import { Request, Response } from 'express';
import { CreateVenue } from '../../../application/use-cases/CreateVenue';
import { GetVenue } from '../../../application/use-cases/GetVenue';
import { ListVenues } from '../../../application/use-cases/ListVenues';
import { UpdateVenue } from '../../../application/use-cases/UpdateVenue';
import { DeleteVenue } from '../../../application/use-cases/DeleteVenue';
import { IVenueRepository } from '../../../domain/repositories/IVenueRepository';
import { Logger } from '@stayos/shared';

export class VenueController {
  private logger: Logger;
  private createVenueUseCase: CreateVenue;
  private getVenueUseCase: GetVenue;
  private listVenuesUseCase: ListVenues;
  private updateVenueUseCase: UpdateVenue;
  private deleteVenueUseCase: DeleteVenue;

  constructor(venueRepository: IVenueRepository) {
    this.logger = new Logger('VenueController');
    this.createVenueUseCase = new CreateVenue(venueRepository);
    this.getVenueUseCase = new GetVenue(venueRepository);
    this.listVenuesUseCase = new ListVenues(venueRepository);
    this.updateVenueUseCase = new UpdateVenue(venueRepository);
    this.deleteVenueUseCase = new DeleteVenue(venueRepository);
  }

  /**
   * POST /api/v1/venues
   * Create a new venue
   */
  createVenue = async (req: Request, res: Response): Promise<void> => {
    try {
      const tenantId = req.headers['x-tenant-id'] as string;

      if (!tenantId) {
        res.status(400).json({
          error: 'Bad Request',
          message: 'X-Tenant-Id header is required',
        });
        return;
      }

      const result = await this.createVenueUseCase.execute({
        tenantId,
        data: req.body,
      });

      if (result.isFailure) {
        res.status(400).json({
          error: 'Bad Request',
          message: result.error,
        });
        return;
      }

      res.status(201).json({
        success: true,
        data: result.getValue(),
      });
    } catch (error) {
      this.logger.error('Error creating venue', {
        error: error instanceof Error ? error.message : 'Unknown error',
      });

      res.status(500).json({
        error: 'Internal Server Error',
        message: 'Failed to create venue',
      });
    }
  };

  /**
   * GET /api/v1/venues
   * List all venues
   */
  listVenues = async (req: Request, res: Response): Promise<void> => {
    try {
      const tenantId = req.headers['x-tenant-id'] as string;

      if (!tenantId) {
        res.status(400).json({
          error: 'Bad Request',
          message: 'X-Tenant-Id header is required',
        });
        return;
      }

      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const sortBy = (req.query.sortBy as string) || 'name';
      const sortOrder = (req.query.sortOrder as 'asc' | 'desc') || 'asc';

      const filters: any = {};
      if (req.query.venueType) filters.venueType = req.query.venueType;
      if (req.query.venueClassification) filters.venueClassification = req.query.venueClassification;
      if (req.query.operationalStatus) filters.operationalStatus = req.query.operationalStatus;
      if (req.query.acceptsReservations !== undefined) filters.acceptsReservations = req.query.acceptsReservations === 'true';
      if (req.query.city) filters.city = req.query.city;
      if (req.query.cuisineType) filters.cuisineType = req.query.cuisineType;

      const result = await this.listVenuesUseCase.execute({
        tenantId,
        filters,
        pagination: { page, limit, sortBy, sortOrder },
      });

      if (result.isFailure) {
        res.status(400).json({
          error: 'Bad Request',
          message: result.error,
        });
        return;
      }

      res.status(200).json({
        success: true,
        ...result.getValue(),
      });
    } catch (error) {
      this.logger.error('Error listing venues', {
        error: error instanceof Error ? error.message : 'Unknown error',
      });

      res.status(500).json({
        error: 'Internal Server Error',
        message: 'Failed to list venues',
      });
    }
  };

  /**
   * GET /api/v1/venues/:id
   * Get a venue by ID
   */
  getVenue = async (req: Request, res: Response): Promise<void> => {
    try {
      const tenantId = req.headers['x-tenant-id'] as string;
      const venueId = req.params.id;

      if (!tenantId) {
        res.status(400).json({
          error: 'Bad Request',
          message: 'X-Tenant-Id header is required',
        });
        return;
      }

      const result = await this.getVenueUseCase.execute({
        venueId,
        tenantId,
      });

      if (result.isFailure) {
        const statusCode = result.error === 'Venue not found' ? 404 : 400;
        res.status(statusCode).json({
          error: statusCode === 404 ? 'Not Found' : 'Bad Request',
          message: result.error,
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: result.getValue(),
      });
    } catch (error) {
      this.logger.error('Error getting venue', {
        error: error instanceof Error ? error.message : 'Unknown error',
      });

      res.status(500).json({
        error: 'Internal Server Error',
        message: 'Failed to get venue',
      });
    }
  };

  /**
   * PUT /api/v1/venues/:id
   * Update a venue
   */
  updateVenue = async (req: Request, res: Response): Promise<void> => {
    try {
      const tenantId = req.headers['x-tenant-id'] as string;
      const venueId = req.params.id;

      if (!tenantId) {
        res.status(400).json({
          error: 'Bad Request',
          message: 'X-Tenant-Id header is required',
        });
        return;
      }

      const result = await this.updateVenueUseCase.execute({
        venueId,
        tenantId,
        data: req.body,
      });

      if (result.isFailure) {
        const statusCode = result.error === 'Venue not found' ? 404 : 400;
        res.status(statusCode).json({
          error: statusCode === 404 ? 'Not Found' : 'Bad Request',
          message: result.error,
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: result.getValue(),
      });
    } catch (error) {
      this.logger.error('Error updating venue', {
        error: error instanceof Error ? error.message : 'Unknown error',
      });

      res.status(500).json({
        error: 'Internal Server Error',
        message: 'Failed to update venue',
      });
    }
  };

  /**
   * DELETE /api/v1/venues/:id
   * Delete a venue
   */
  deleteVenue = async (req: Request, res: Response): Promise<void> => {
    try {
      const tenantId = req.headers['x-tenant-id'] as string;
      const venueId = req.params.id;

      if (!tenantId) {
        res.status(400).json({
          error: 'Bad Request',
          message: 'X-Tenant-Id header is required',
        });
        return;
      }

      const result = await this.deleteVenueUseCase.execute({
        venueId,
        tenantId,
      });

      if (result.isFailure) {
        const statusCode = result.error === 'Venue not found' ? 404 : 400;
        res.status(statusCode).json({
          error: statusCode === 404 ? 'Not Found' : 'Bad Request',
          message: result.error,
        });
        return;
      }

      res.status(204).send();
    } catch (error) {
      this.logger.error('Error deleting venue', {
        error: error instanceof Error ? error.message : 'Unknown error',
      });

      res.status(500).json({
        error: 'Internal Server Error',
        message: 'Failed to delete venue',
      });
    }
  };
}

