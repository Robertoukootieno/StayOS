# SearchAvailabilityRequestFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**minPrice** | [**Money**](Money.md) |  | [optional] [default to undefined]
**maxPrice** | [**Money**](Money.md) |  | [optional] [default to undefined]
**amenities** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**accessibility** | **boolean** | Require wheelchair accessible units | [optional] [default to undefined]

## Example

```typescript
import { SearchAvailabilityRequestFilters } from '@stayos/api-client';

const instance: SearchAvailabilityRequestFilters = {
    minPrice,
    maxPrice,
    amenities,
    accessibility,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
