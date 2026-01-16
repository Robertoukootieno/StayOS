# MenuItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**itemId** | **string** |  | [readonly] [default to undefined]
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**category** | **string** |  | [default to undefined]
**price** | [**Model0**](Model0.md) |  | [default to undefined]
**available** | **boolean** |  | [default to true]
**dietary** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**allergens** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**preparationTime** | **number** | Preparation time in minutes | [optional] [default to undefined]
**imageUrl** | **string** |  | [optional] [default to undefined]
**metadata** | [**Model0**](Model0.md) |  | [optional] [default to undefined]

## Example

```typescript
import { MenuItem } from '@stayos/api-client';

const instance: MenuItem = {
    itemId,
    name,
    description,
    category,
    price,
    available,
    dietary,
    allergens,
    preparationTime,
    imageUrl,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
