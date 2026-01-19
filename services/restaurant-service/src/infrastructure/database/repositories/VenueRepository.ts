import { Pool } from 'pg';
import { Venue } from '../../../domain/entities/Venue';
import { IVenueRepository, VenueFilters } from '../../../domain/repositories/IVenueRepository';
import { VenueMapper, VenuePersistence } from '../../../application/mappers/VenueMapper';
import { PaginatedResponse, PaginationParams } from '@stayos/shared';

export class VenueRepository implements IVenueRepository {
  constructor(private db: Pool) {}

  async findById(id: string, propertyId: string): Promise<Venue | null> {
    const query = `
      SELECT * FROM venues
      WHERE venue_id = $1 AND property_id = $2 AND deleted_at IS NULL
    `;

    const result = await this.db.query<VenuePersistence>(query, [id, propertyId]);

    if (result.rows.length === 0) {
      return null;
    }

    return VenueMapper.toDomain(result.rows[0]);
  }

  async findAll(
    filters: VenueFilters,
    pagination: PaginationParams
  ): Promise<PaginatedResponse<Venue>> {
    const conditions: string[] = ['deleted_at IS NULL', 'property_id = $1'];
    const params: any[] = [filters.propertyId];
    let paramIndex = 2;

    if (filters.venueType) {
      conditions.push(`venue_type = $${paramIndex}`);
      params.push(filters.venueType);
      paramIndex++;
    }

    if (filters.venueClassification) {
      conditions.push(`venue_classification = $${paramIndex}`);
      params.push(filters.venueClassification);
      paramIndex++;
    }

    if (filters.operationalStatus) {
      conditions.push(`operational_status = $${paramIndex}`);
      params.push(filters.operationalStatus);
      paramIndex++;
    }

    if (filters.acceptsReservations !== undefined) {
      conditions.push(`accepts_reservations = $${paramIndex}`);
      params.push(filters.acceptsReservations);
      paramIndex++;
    }

    if (filters.city) {
      conditions.push(`location->>'city' = $${paramIndex}`);
      params.push(filters.city);
      paramIndex++;
    }

    if (filters.cuisineType) {
      conditions.push(`cuisine_type = $${paramIndex}`);
      params.push(filters.cuisineType);
      paramIndex++;
    }

    const whereClause = conditions.join(' AND ');

    // Count total
    const countQuery = `SELECT COUNT(*) FROM venues WHERE ${whereClause}`;
    const countResult = await this.db.query(countQuery, params);
    const total = parseInt(countResult.rows[0].count);

    // Get paginated data
    const offset = (pagination.page - 1) * pagination.limit;
    const sortBy = pagination.sortBy || 'name';
    const sortOrder = pagination.sortOrder || 'asc';

    const dataQuery = `
      SELECT * FROM venues
      WHERE ${whereClause}
      ORDER BY ${sortBy} ${sortOrder}
      LIMIT $${paramIndex} OFFSET $${paramIndex + 1}
    `;

    params.push(pagination.limit, offset);

    const dataResult = await this.db.query<VenuePersistence>(dataQuery, params);

    const venues = dataResult.rows.map((row) => VenueMapper.toDomain(row));

    return {
      data: venues,
      pagination: {
        page: pagination.page,
        limit: pagination.limit,
        total,
        totalPages: Math.ceil(total / pagination.limit),
      },
    };
  }

  async save(venue: Venue): Promise<void> {
    const persistence = VenueMapper.toPersistence(venue);

    const query = `
      INSERT INTO venues (
        venue_id, property_id, name, description, venue_type, venue_classification,
        operational_status, accepts_reservations, capacity, cuisine_type, dress_code,
        price_range, phone_number, email, website, location, operating_hours, amenities,
        created_at, updated_at
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20
      )
    `;

    await this.db.query(query, [
      persistence.venue_id,
      persistence.property_id,
      persistence.name,
      persistence.description,
      persistence.venue_type,
      persistence.venue_classification,
      persistence.operational_status,
      persistence.accepts_reservations,
      persistence.capacity,
      persistence.cuisine_type,
      persistence.dress_code,
      persistence.price_range,
      persistence.phone_number,
      persistence.email,
      persistence.website,
      JSON.stringify(persistence.location),
      JSON.stringify(persistence.operating_hours),
      persistence.amenities,
      persistence.created_at,
      persistence.updated_at,
    ]);
  }

  async update(venue: Venue): Promise<void> {
    const persistence = VenueMapper.toPersistence(venue);

    const query = `
      UPDATE venues SET
        name = $3, description = $4, venue_type = $5, venue_classification = $6,
        operational_status = $7, accepts_reservations = $8, capacity = $9, cuisine_type = $10,
        dress_code = $11, price_range = $12, phone_number = $13, email = $14, website = $15,
        location = $16, operating_hours = $17, amenities = $18, updated_at = $19
      WHERE venue_id = $1 AND property_id = $2
    `;

    await this.db.query(query, [
      persistence.venue_id,
      persistence.property_id,
      persistence.name,
      persistence.description,
      persistence.venue_type,
      persistence.venue_classification,
      persistence.operational_status,
      persistence.accepts_reservations,
      persistence.capacity,
      persistence.cuisine_type,
      persistence.dress_code,
      persistence.price_range,
      persistence.phone_number,
      persistence.email,
      persistence.website,
      JSON.stringify(persistence.location),
      JSON.stringify(persistence.operating_hours),
      persistence.amenities,
      persistence.updated_at,
    ]);
  }

  async delete(id: string, propertyId: string): Promise<void> {
    const query = `
      UPDATE venues SET deleted_at = NOW(), updated_at = NOW()
      WHERE venue_id = $1 AND property_id = $2
    `;

    await this.db.query(query, [id, propertyId]);
  }

  async exists(id: string, propertyId: string): Promise<boolean> {
    const query = `
      SELECT EXISTS(SELECT 1 FROM venues WHERE venue_id = $1 AND property_id = $2 AND deleted_at IS NULL)
    `;

    const result = await this.db.query(query, [id, propertyId]);
    return result.rows[0].exists;
  }
}

