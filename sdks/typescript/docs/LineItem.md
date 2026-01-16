# LineItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lineItemId** | **string** |  | [readonly] [default to undefined]
**description** | **string** |  | [default to undefined]
**category** | **string** |  | [default to undefined]
**amount** | [**Model0**](Model0.md) |  | [default to undefined]
**quantity** | **number** |  | [optional] [default to 1]
**unitPrice** | [**Model0**](Model0.md) |  | [optional] [default to undefined]
**date** | **string** |  | [optional] [default to undefined]
**isVoided** | **boolean** |  | [optional] [readonly] [default to false]
**voidedAt** | **string** |  | [optional] [readonly] [default to undefined]
**voidedBy** | **string** |  | [optional] [readonly] [default to undefined]
**voidReason** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { LineItem } from '@stayos/api-client';

const instance: LineItem = {
    lineItemId,
    description,
    category,
    amount,
    quantity,
    unitPrice,
    date,
    isVoided,
    voidedAt,
    voidedBy,
    voidReason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
