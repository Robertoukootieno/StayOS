# Property


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**propertyId** | **string** | Unique property identifier | [optional] [readonly] [default to undefined]
**organizationId** | **string** | Parent organization identifier | [optional] [default to undefined]
**name** | **string** | Property name | [default to undefined]
**classification** | **string** | Property classification | [default to undefined]
**starRating** | **number** | Star rating (0-5) | [optional] [default to undefined]
**location** | [**Model0**](Model0.md) |  | [default to undefined]
**coordinates** | [**Model0**](Model0.md) |  | [optional] [default to undefined]
**timezone** | **string** | IANA timezone identifier (immutable) | [default to undefined]
**operationalStatus** | **string** | Current operational status | [optional] [default to OperationalStatus_ACTIVE]
**policies** | [**Model0**](Model0.md) |  | [optional] [default to undefined]
**amenities** | **Array&lt;string&gt;** | Property-level amenities | [optional] [default to undefined]
**certifications** | [**Array&lt;Model0&gt;**](Model0.md) |  | [optional] [default to undefined]
**contactInfo** | [**Model0**](Model0.md) |  | [optional] [default to undefined]
**metadata** | [**Model0**](Model0.md) |  | [optional] [default to undefined]
**links** | [**PropertyAllOfLinks**](PropertyAllOfLinks.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Property } from '@stayos/api-client';

const instance: Property = {
    propertyId,
    organizationId,
    name,
    classification,
    starRating,
    location,
    coordinates,
    timezone,
    operationalStatus,
    policies,
    amenities,
    certifications,
    contactInfo,
    metadata,
    links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
