# RevenueReport


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reportId** | **string** |  | [readonly] [default to undefined]
**propertyId** | **string** |  | [default to undefined]
**startDate** | **string** |  | [default to undefined]
**endDate** | **string** |  | [default to undefined]
**totalRevenue** | [**Model0**](Model0.md) |  | [optional] [default to undefined]
**revenueByCategory** | [**RevenueReportAllOfRevenueByCategory**](RevenueReportAllOfRevenueByCategory.md) |  | [optional] [default to undefined]
**occupancyRate** | **number** | Percentage | [optional] [default to undefined]
**averageDailyRate** | [**Model0**](Model0.md) |  | [optional] [default to undefined]
**revPAR** | [**Model0**](Model0.md) | Revenue per available room | [optional] [default to undefined]
**generatedAt** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { RevenueReport } from '@stayos/api-client';

const instance: RevenueReport = {
    reportId,
    propertyId,
    startDate,
    endDate,
    totalRevenue,
    revenueByCategory,
    occupancyRate,
    averageDailyRate,
    revPAR,
    generatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
