# ApplicabilityRules


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**validDateRange** | [**ApplicabilityRulesAllOfValidDateRange**](ApplicabilityRulesAllOfValidDateRange.md) |  | [optional] [default to undefined]
**daysOfWeek** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**minimumStayDuration** | **number** | Minimum nights required | [optional] [default to undefined]
**maximumStayDuration** | **number** | Maximum nights allowed | [optional] [default to undefined]
**advanceBookingWindow** | [**ApplicabilityRulesAllOfAdvanceBookingWindow**](ApplicabilityRulesAllOfAdvanceBookingWindow.md) |  | [optional] [default to undefined]
**blackoutDates** | **Array&lt;string&gt;** | Dates when rate is not available | [optional] [default to undefined]

## Example

```typescript
import { ApplicabilityRules } from '@stayos/api-client';

const instance: ApplicabilityRules = {
    validDateRange,
    daysOfWeek,
    minimumStayDuration,
    maximumStayDuration,
    advanceBookingWindow,
    blackoutDates,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
