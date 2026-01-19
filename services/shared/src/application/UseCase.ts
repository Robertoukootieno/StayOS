/**
 * Base UseCase interface following Clean Architecture principles
 * Use cases represent application-specific business rules
 */
export interface UseCase<IRequest, IResponse> {
  execute(request: IRequest): Promise<IResponse> | IResponse;
}

