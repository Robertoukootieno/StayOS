# SearchAvailabilityRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**propertyId** | **string** | Filter by specific property (optional) | [optional] [default to undefined]
**checkInDate** | **string** |  | [default to undefined]
**checkOutDate** | **string** |  | [default to undefined]
**occupancy** | [**SearchAvailabilityRequestOccupancy**](SearchAvailabilityRequestOccupancy.md) |  | [default to undefined]
**unitTypeId** | **string** | Filter by unit type | [optional] [default to undefined]
**rateStrategyId** | **string** | Filter by rate strategy | [optional] [default to undefined]
**filters** | [**SearchAvailabilityRequestFilters**](SearchAvailabilityRequestFilters.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SearchAvailabilityRequest } from '@stayos/api-client';

const instance: SearchAvailabilityRequest = {
    propertyId,
    checkInDate,
    checkOutDate,
    occupancy,
    unitTypeId,
    rateStrategyId,
    filters,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
