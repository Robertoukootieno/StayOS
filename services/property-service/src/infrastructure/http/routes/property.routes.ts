import { Router } from 'express';
import { PropertyController } from '../controllers/PropertyController';
import { IPropertyRepository } from '../../../domain/repositories/IPropertyRepository';

export function createPropertyRoutes(propertyRepository: IPropertyRepository): Router {
  const router = Router();
  const controller = new PropertyController(propertyRepository);

  /**
   * POST /api/v1/properties
   * Create a new property
   */
  router.post('/', (req, res) => controller.create(req, res));

  /**
   * GET /api/v1/properties
   * List all properties with filtering and pagination
   */
  router.get('/', (req, res) => controller.list(req, res));

  /**
   * GET /api/v1/properties/:id
   * Get a single property by ID
   */
  router.get('/:id', (req, res) => controller.getById(req, res));

  /**
   * PUT /api/v1/properties/:id
   * Update a property
   */
  router.put('/:id', (req, res) => controller.update(req, res));

  /**
   * DELETE /api/v1/properties/:id
   * Delete a property (soft delete)
   */
  router.delete('/:id', (req, res) => controller.delete(req, res));

  return router;
}

