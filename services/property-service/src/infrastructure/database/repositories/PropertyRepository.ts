import { Pool } from 'pg';
import { IPropertyRepository, PropertyFilters, PaginationParams, PaginatedResponse } from '../../../domain/repositories/IPropertyRepository';
import { Property, PropertyProps, PropertyType, PropertyStatus, Address, ContactInfo } from '../../../domain/entities/Property';

interface PropertyPersistence {
  property_id: string;
  property_code: string;
  name: string;
  property_type: string;
  address_line1: string;
  address_line2?: string;
  city: string;
  state_province: string;
  postal_code: string;
  country: string;
  timezone: string;
  phone: string;
  email: string;
  website?: string;
  legal_entity_name?: string;
  tax_id?: string;
  license_number?: string;
  default_currency: string;
  default_language: string;
  check_in_time: string;
  check_out_time: string;
  total_units: number;
  total_capacity: number;
  settings: any;
  status: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export class PropertyRepository implements IPropertyRepository {
  constructor(private db: Pool) {}

  async findById(id: string): Promise<Property | null> {
    const query = `
      SELECT * FROM properties
      WHERE property_id = $1 AND deleted_at IS NULL
    `;

    const result = await this.db.query<PropertyPersistence>(query, [id]);

    if (result.rows.length === 0) {
      return null;
    }

    return this.toDomain(result.rows[0]);
  }

  async findByCode(propertyCode: string): Promise<Property | null> {
    const query = `
      SELECT * FROM properties
      WHERE property_code = $1 AND deleted_at IS NULL
    `;

    const result = await this.db.query<PropertyPersistence>(query, [propertyCode]);

    if (result.rows.length === 0) {
      return null;
    }

    return this.toDomain(result.rows[0]);
  }

  async findAll(filters: PropertyFilters, pagination: PaginationParams): Promise<PaginatedResponse<Property>> {
    const conditions: string[] = ['deleted_at IS NULL'];
    const params: any[] = [];
    let paramCount = 0;

    // Build WHERE clause
    if (filters.propertyType) {
      paramCount++;
      conditions.push(`property_type = $${paramCount}`);
      params.push(filters.propertyType);
    }

    if (filters.status) {
      paramCount++;
      conditions.push(`status = $${paramCount}`);
      params.push(filters.status);
    }

    if (filters.city) {
      paramCount++;
      conditions.push(`city ILIKE $${paramCount}`);
      params.push(`%${filters.city}%`);
    }

    if (filters.country) {
      paramCount++;
      conditions.push(`country = $${paramCount}`);
      params.push(filters.country);
    }

    const whereClause = conditions.join(' AND ');

    // Count total
    const countQuery = `SELECT COUNT(*) as total FROM properties WHERE ${whereClause}`;
    const countResult = await this.db.query(countQuery, params);
    const total = parseInt(countResult.rows[0].total);

    // Get paginated data
    const offset = (pagination.page - 1) * pagination.limit;
    const sortColumn = this.mapSortColumn(pagination.sortBy || 'createdAt');
    const sortOrder = pagination.sortOrder === 'asc' ? 'ASC' : 'DESC';

    const dataQuery = `
      SELECT * FROM properties
      WHERE ${whereClause}
      ORDER BY ${sortColumn} ${sortOrder}
      LIMIT $${paramCount + 1} OFFSET $${paramCount + 2}
    `;

    const dataResult = await this.db.query<PropertyPersistence>(
      dataQuery,
      [...params, pagination.limit, offset]
    );

    const properties = dataResult.rows.map((row) => this.toDomain(row));

    return {
      data: properties,
      pagination: {
        page: pagination.page,
        limit: pagination.limit,
        total,
        totalPages: Math.ceil(total / pagination.limit),
      },
    };
  }

  async save(property: Property): Promise<void> {
    const props = property.toObject();
    const address = props.address;
    const contact = props.contactInfo;

    const query = `
      INSERT INTO properties (
        property_id, property_code, name, property_type,
        address_line1, address_line2, city, state_province, postal_code, country,
        timezone, phone, email, website,
        legal_entity_name, tax_id, license_number,
        default_currency, default_language,
        check_in_time, check_out_time,
        total_units, total_capacity, settings, status,
        created_at, updated_at
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
        $11, $12, $13, $14, $15, $16, $17, $18, $19,
        $20, $21, $22, $23, $24, $25, $26, $27
      )
    `;

    await this.db.query(query, [
      property.id,
      props.propertyCode,
      props.name,
      props.propertyType,
      address.line1,
      address.line2,
      address.city,
      address.stateProvince,
      address.postalCode,
      address.country,
      props.timezone,
      contact.phone,
      contact.email,
      contact.website,
      props.legalEntityName,
      props.taxId,
      props.licenseNumber,
      props.defaultCurrency,
      props.defaultLanguage,
      props.checkInTime,
      props.checkOutTime,
      props.totalUnits,
      props.totalCapacity,
      JSON.stringify(props.settings || {}),
      props.status,
      property.createdAt,
      property.updatedAt,
    ]);
  }

  async update(property: Property): Promise<void> {
    const props = property.toObject();
    const address = props.address;
    const contact = props.contactInfo;

    const query = `
      UPDATE properties SET
        name = $2,
        address_line1 = $3,
        address_line2 = $4,
        city = $5,
        state_province = $6,
        postal_code = $7,
        country = $8,
        phone = $9,
        email = $10,
        website = $11,
        check_in_time = $12,
        check_out_time = $13,
        settings = $14,
        status = $15,
        updated_at = $16
      WHERE property_id = $1
    `;

    await this.db.query(query, [
      property.id,
      props.name,
      address.line1,
      address.line2,
      address.city,
      address.stateProvince,
      address.postalCode,
      address.country,
      contact.phone,
      contact.email,
      contact.website,
      props.checkInTime,
      props.checkOutTime,
      JSON.stringify(props.settings || {}),
      props.status,
      property.updatedAt,
    ]);
  }

  async delete(id: string): Promise<void> {
    const query = `
      UPDATE properties
      SET deleted_at = NOW(), updated_at = NOW()
      WHERE property_id = $1
    `;

    await this.db.query(query, [id]);
  }

  async exists(id: string): Promise<boolean> {
    const query = `
      SELECT EXISTS(SELECT 1 FROM properties WHERE property_id = $1 AND deleted_at IS NULL)
    `;

    const result = await this.db.query(query, [id]);
    return result.rows[0].exists;
  }

  async existsByCode(propertyCode: string): Promise<boolean> {
    const query = `
      SELECT EXISTS(SELECT 1 FROM properties WHERE property_code = $1 AND deleted_at IS NULL)
    `;

    const result = await this.db.query(query, [propertyCode]);
    return result.rows[0].exists;
  }

  private toDomain(raw: PropertyPersistence): Property {
    const address: Address = {
      line1: raw.address_line1,
      line2: raw.address_line2,
      city: raw.city,
      stateProvince: raw.state_province,
      postalCode: raw.postal_code,
      country: raw.country,
    };

    const contactInfo: ContactInfo = {
      phone: raw.phone,
      email: raw.email,
      website: raw.website,
    };

    const props: PropertyProps = {
      propertyCode: raw.property_code,
      name: raw.name,
      propertyType: raw.property_type as PropertyType,
      address,
      timezone: raw.timezone,
      contactInfo,
      legalEntityName: raw.legal_entity_name,
      taxId: raw.tax_id,
      licenseNumber: raw.license_number,
      defaultCurrency: raw.default_currency,
      defaultLanguage: raw.default_language,
      checkInTime: raw.check_in_time,
      checkOutTime: raw.check_out_time,
      totalUnits: raw.total_units,
      totalCapacity: raw.total_capacity,
      settings: raw.settings,
      status: raw.status as PropertyStatus,
    };

    return Property.reconstitute(raw.property_id, props, raw.created_at, raw.updated_at);
  }

  private mapSortColumn(sortBy: string): string {
    const columnMap: Record<string, string> = {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      name: 'name',
      propertyCode: 'property_code',
      city: 'city',
      country: 'country',
    };

    return columnMap[sortBy] || 'created_at';
  }
}

