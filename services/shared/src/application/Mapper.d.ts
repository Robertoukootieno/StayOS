export interface Mapper<DomainEntity, PersistenceEntity, DTO> {
    toDomain(raw: PersistenceEntity): DomainEntity;
    toPersistence(entity: DomainEntity): PersistenceEntity;
    toDTO(entity: DomainEntity): DTO;
}
//# sourceMappingURL=Mapper.d.ts.map