# UnitType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unitTypeId** | **string** |  | [optional] [readonly] [default to undefined]
**propertyId** | **string** |  | [optional] [default to undefined]
**name** | **string** | Unit type name | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**capacity** | [**Model0**](Model0.md) |  | [default to undefined]
**bedConfiguration** | [**Array&lt;UnitTypeAllOfBedConfiguration&gt;**](UnitTypeAllOfBedConfiguration.md) |  | [optional] [default to undefined]
**size** | [**UnitTypeAllOfSize**](UnitTypeAllOfSize.md) |  | [optional] [default to undefined]
**amenities** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**photos** | [**Array&lt;UnitTypeAllOfPhotos&gt;**](UnitTypeAllOfPhotos.md) |  | [optional] [default to undefined]
**metadata** | [**Model0**](Model0.md) |  | [optional] [default to undefined]

## Example

```typescript
import { UnitType } from '@stayos/api-client';

const instance: UnitType = {
    unitTypeId,
    propertyId,
    name,
    description,
    capacity,
    bedConfiguration,
    size,
    amenities,
    photos,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
