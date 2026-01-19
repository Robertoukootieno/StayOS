import { Router } from 'express';
import { VenueController } from '../controllers/VenueController';
import { IVenueRepository } from '../../../domain/repositories/IVenueRepository';

export function createVenueRoutes(venueRepository: IVenueRepository): Router {
  const router = Router();
  const controller = new VenueController(venueRepository);

  // Venue routes
  router.post('/', controller.createVenue);
  router.get('/', controller.listVenues);
  router.get('/:id', controller.getVenue);
  router.put('/:id', controller.updateVenue);
  router.delete('/:id', controller.deleteVenue);

  return router;
}

