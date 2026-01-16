# Payment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentId** | **string** |  | [readonly] [default to undefined]
**folioId** | **string** |  | [optional] [default to undefined]
**amount** | [**Model0**](Model0.md) |  | [default to undefined]
**method** | **string** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**transactionId** | **string** | External payment processor transaction ID | [optional] [default to undefined]
**cardDetails** | [**PaymentAllOfCardDetails**](PaymentAllOfCardDetails.md) |  | [optional] [default to undefined]
**processedAt** | **string** |  | [optional] [readonly] [default to undefined]
**refunds** | [**Array&lt;PaymentAllOfRefunds&gt;**](PaymentAllOfRefunds.md) |  | [optional] [default to undefined]
**receiptUrl** | **string** |  | [optional] [readonly] [default to undefined]
**metadata** | [**Model0**](Model0.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Payment } from '@stayos/api-client';

const instance: Payment = {
    paymentId,
    folioId,
    amount,
    method,
    status,
    transactionId,
    cardDetails,
    processedAt,
    refunds,
    receiptUrl,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
