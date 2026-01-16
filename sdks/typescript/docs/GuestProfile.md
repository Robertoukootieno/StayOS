# GuestProfile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**guestId** | **string** |  | [readonly] [default to undefined]
**firstName** | **string** |  | [default to undefined]
**lastName** | **string** |  | [default to undefined]
**email** | **string** |  | [default to undefined]
**phone** | **string** |  | [optional] [default to undefined]
**dateOfBirth** | **string** |  | [optional] [default to undefined]
**nationality** | **string** |  | [optional] [default to undefined]
**address** | [**GuestProfileAllOfAddress**](GuestProfileAllOfAddress.md) |  | [optional] [default to undefined]
**loyaltyTier** | **string** |  | [optional] [default to undefined]
**preferences** | **any** | Guest preferences | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [readonly] [default to undefined]
**updatedAt** | **string** |  | [optional] [readonly] [default to undefined]
**version** | **number** | Version for optimistic locking | [optional] [readonly] [default to undefined]

## Example

```typescript
import { GuestProfile } from '@stayos/api-client';

const instance: GuestProfile = {
    guestId,
    firstName,
    lastName,
    email,
    phone,
    dateOfBirth,
    nationality,
    address,
    loyaltyTier,
    preferences,
    createdAt,
    updatedAt,
    version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
