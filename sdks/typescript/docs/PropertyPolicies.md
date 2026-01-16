# PropertyPolicies


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checkInTime** | **string** | Default check-in time (HH:mm) | [optional] [default to undefined]
**checkOutTime** | **string** | Default check-out time (HH:mm) | [optional] [default to undefined]
**lateCheckoutFee** | [**Model0**](Model0.md) |  | [optional] [default to undefined]
**cancellationPolicy** | [**Model0**](Model0.md) |  | [optional] [default to undefined]
**childPolicy** | [**PropertyPoliciesAllOfChildPolicy**](PropertyPoliciesAllOfChildPolicy.md) |  | [optional] [default to undefined]
**petPolicy** | [**PropertyPoliciesAllOfPetPolicy**](PropertyPoliciesAllOfPetPolicy.md) |  | [optional] [default to undefined]
**smokingPolicy** | **string** |  | [optional] [default to SmokingPolicy_NON_SMOKING]

## Example

```typescript
import { PropertyPolicies } from '@stayos/api-client';

const instance: PropertyPolicies = {
    checkInTime,
    checkOutTime,
    lateCheckoutFee,
    cancellationPolicy,
    childPolicy,
    petPolicy,
    smokingPolicy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
