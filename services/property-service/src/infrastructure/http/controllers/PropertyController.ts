import { Request, Response } from 'express';
import { Logger } from '@stayos/shared';
import { CreateProperty } from '../../../application/use-cases/CreateProperty';
import { GetProperty } from '../../../application/use-cases/GetProperty';
import { ListProperties } from '../../../application/use-cases/ListProperties';
import { UpdateProperty } from '../../../application/use-cases/UpdateProperty';
import { DeleteProperty } from '../../../application/use-cases/DeleteProperty';
import { IPropertyRepository } from '../../../domain/repositories/IPropertyRepository';

export class PropertyController {
  private logger: Logger;
  private createProperty: CreateProperty;
  private getProperty: GetProperty;
  private listProperties: ListProperties;
  private updateProperty: UpdateProperty;
  private deleteProperty: DeleteProperty;

  constructor(propertyRepository: IPropertyRepository) {
    this.logger = new Logger('PropertyController');
    this.createProperty = new CreateProperty(propertyRepository);
    this.getProperty = new GetProperty(propertyRepository);
    this.listProperties = new ListProperties(propertyRepository);
    this.updateProperty = new UpdateProperty(propertyRepository);
    this.deleteProperty = new DeleteProperty(propertyRepository);
  }

  public async create(req: Request, res: Response): Promise<void> {
    try {
      const result = await this.createProperty.execute(req.body);

      if (result.isFailure) {
        res.status(400).json({
          success: false,
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
      this.logger.error('Error creating property', {
        error: error instanceof Error ? error.message : 'Unknown error',
      });
      res.status(500).json({
        success: false,
        error: 'Internal Server Error',
        message: 'Failed to create property',
      });
    }
  }

  public async getById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      const result = await this.getProperty.execute({ id });

      if (result.isFailure) {
        const statusCode = result.error?.includes('not found') ? 404 : 400;
        res.status(statusCode).json({
          success: false,
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
      this.logger.error('Error getting property', {
        error: error instanceof Error ? error.message : 'Unknown error',
      });
      res.status(500).json({
        success: false,
        error: 'Internal Server Error',
        message: 'Failed to get property',
      });
    }
  }

  public async list(req: Request, res: Response): Promise<void> {
    try {
      const filters = {
        propertyType: req.query.propertyType as string,
        status: req.query.status as string,
        city: req.query.city as string,
        country: req.query.country as string,
      };

      const pagination = {
        page: parseInt(req.query.page as string) || 1,
        limit: parseInt(req.query.limit as string) || 20,
        sortBy: req.query.sortBy as string,
        sortOrder: req.query.sortOrder as 'asc' | 'desc',
      };

      const result = await this.listProperties.execute({ filters, pagination });

      if (result.isFailure) {
        res.status(400).json({
          success: false,
          error: 'Bad Request',
          message: result.error,
        });
        return;
      }

      const response = result.getValue();
      res.status(200).json({
        success: true,
        data: response.data,
        pagination: response.pagination,
      });
    } catch (error) {
      this.logger.error('Error listing properties', {
        error: error instanceof Error ? error.message : 'Unknown error',
      });
      res.status(500).json({
        success: false,
        error: 'Internal Server Error',
        message: 'Failed to list properties',
      });
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const updates = req.body;

      const result = await this.updateProperty.execute({ id, updates });

      if (result.isFailure) {
        const statusCode = result.error?.includes('not found') ? 404 : 400;
        res.status(statusCode).json({
          success: false,
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
      this.logger.error('Error updating property', {
        error: error instanceof Error ? error.message : 'Unknown error',
      });
      res.status(500).json({
        success: false,
        error: 'Internal Server Error',
        message: 'Failed to update property',
      });
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      const result = await this.deleteProperty.execute({ id });

      if (result.isFailure) {
        const statusCode = result.error?.includes('not found') ? 404 : 400;
        res.status(statusCode).json({
          success: false,
          error: statusCode === 404 ? 'Not Found' : 'Bad Request',
          message: result.error,
        });
        return;
      }

      res.status(204).send();
    } catch (error) {
      this.logger.error('Error deleting property', {
        error: error instanceof Error ? error.message : 'Unknown error',
      });
      res.status(500).json({
        success: false,
        error: 'Internal Server Error',
        message: 'Failed to delete property',
      });
    }
  }
}
