# FBInventoryItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inventoryItemId** | **string** |  | [readonly] [default to undefined]
**name** | **string** |  | [default to undefined]
**category** | **string** |  | [optional] [default to undefined]
**unit** | **string** |  | [default to undefined]
**currentStock** | **number** |  | [default to undefined]
**minimumStock** | **number** |  | [optional] [default to undefined]
**maximumStock** | **number** |  | [optional] [default to undefined]
**reorderPoint** | **number** |  | [optional] [default to undefined]
**unitCost** | [**Model0**](Model0.md) |  | [optional] [default to undefined]
**supplier** | **string** |  | [optional] [default to undefined]
**lastRestocked** | **string** |  | [optional] [default to undefined]
**expiryDate** | **string** |  | [optional] [default to undefined]
**metadata** | [**Model0**](Model0.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FBInventoryItem } from '@stayos/api-client';

const instance: FBInventoryItem = {
    inventoryItemId,
    name,
    category,
    unit,
    currentStock,
    minimumStock,
    maximumStock,
    reorderPoint,
    unitCost,
    supplier,
    lastRestocked,
    expiryDate,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
