# SearchAvailability200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**searchId** | **string** | Unique search identifier for tracking | [optional] [default to undefined]
**searchCriteria** | **object** | Echo of search criteria | [optional] [default to undefined]
**results** | [**Array&lt;SearchAvailability200ResponseResultsInner&gt;**](SearchAvailability200ResponseResultsInner.md) |  | [optional] [default to undefined]
**metadata** | [**SearchAvailability200ResponseMetadata**](SearchAvailability200ResponseMetadata.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SearchAvailability200Response } from '@stayos/api-client';

const instance: SearchAvailability200Response = {
    searchId,
    searchCriteria,
    results,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
