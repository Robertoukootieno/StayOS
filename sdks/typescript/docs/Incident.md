# Incident


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**incidentId** | **string** |  | [readonly] [default to undefined]
**propertyId** | **string** |  | [default to undefined]
**type** | **string** |  | [default to undefined]
**severity** | **string** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**title** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**location** | **string** | Location within property | [optional] [default to undefined]
**reportedBy** | **string** |  | [optional] [default to undefined]
**incidentDate** | **string** |  | [optional] [default to undefined]
**personsInvolved** | [**Array&lt;IncidentAllOfPersonsInvolved&gt;**](IncidentAllOfPersonsInvolved.md) |  | [optional] [default to undefined]
**witnesses** | [**Array&lt;IncidentAllOfWitnesses&gt;**](IncidentAllOfWitnesses.md) |  | [optional] [default to undefined]
**correctiveActions** | [**Array&lt;IncidentAllOfCorrectiveActions&gt;**](IncidentAllOfCorrectiveActions.md) |  | [optional] [default to undefined]
**metadata** | [**Model0**](Model0.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Incident } from '@stayos/api-client';

const instance: Incident = {
    incidentId,
    propertyId,
    type,
    severity,
    status,
    title,
    description,
    location,
    reportedBy,
    incidentDate,
    personsInvolved,
    witnesses,
    correctiveActions,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
