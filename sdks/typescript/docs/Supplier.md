# Supplier


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**supplierId** | **string** |  | [readonly] [default to undefined]
**name** | **string** |  | [default to undefined]
**category** | **string** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**contactInfo** | [**Model0**](Model0.md) |  | [optional] [default to undefined]
**address** | [**Model0**](Model0.md) |  | [optional] [default to undefined]
**paymentTerms** | **string** |  | [optional] [default to undefined]
**taxId** | **string** | Tax identification number | [optional] [default to undefined]
**bankDetails** | [**SupplierAllOfBankDetails**](SupplierAllOfBankDetails.md) |  | [optional] [default to undefined]
**rating** | **number** | Supplier performance rating | [optional] [default to undefined]
**notes** | **string** |  | [optional] [default to undefined]
**metadata** | [**Model0**](Model0.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Supplier } from '@stayos/api-client';

const instance: Supplier = {
    supplierId,
    name,
    category,
    status,
    contactInfo,
    address,
    paymentTerms,
    taxId,
    bankDetails,
    rating,
    notes,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
