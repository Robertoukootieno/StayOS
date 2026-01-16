# KeyCard


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardId** | **string** |  | [readonly] [default to undefined]
**cardNumber** | **string** | Physical card number | [default to undefined]
**status** | **string** |  | [default to undefined]
**issuedAt** | **string** |  | [optional] [readonly] [default to undefined]
**expiresAt** | **string** | Card expiration | [optional] [default to undefined]
**accessLevel** | **string** |  | [optional] [default to AccessLevel_ROOM_ONLY]

## Example

```typescript
import { KeyCard } from '@stayos/api-client';

const instance: KeyCard = {
    cardId,
    cardNumber,
    status,
    issuedAt,
    expiresAt,
    accessLevel,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
