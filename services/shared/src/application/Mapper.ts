/**
 * Base Mapper interface for converting between domain and persistence/DTO layers
 * Mappers help maintain separation of concerns
 */
export interface Mapper<DomainEntity, PersistenceEntity, DTO> {
  toDomain(raw: PersistenceEntity): DomainEntity;
  toPersistence(entity: DomainEntity): PersistenceEntity;
  toDTO(entity: DomainEntity): DTO;
}

