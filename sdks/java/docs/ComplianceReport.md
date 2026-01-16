

# ComplianceReport


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**reportId** | **UUID** |  |  [readonly] |
|**type** | [**TypeEnum**](#TypeEnum) |  |  |
|**propertyId** | **UUID** |  |  |
|**startDate** | **LocalDate** |  |  |
|**endDate** | **LocalDate** |  |  |
|**status** | [**StatusEnum**](#StatusEnum) |  |  [optional] |
|**fileUrl** | **URI** |  |  [optional] [readonly] |
|**submittedTo** | **String** | Authority/agency submitted to |  [optional] |
|**submittedAt** | **OffsetDateTime** |  |  [optional] |
|**generatedAt** | **OffsetDateTime** |  |  [optional] [readonly] |
|**metadata** | [**Model0**](Model0.md) |  |  [optional] |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| GUEST_REGISTRY | &quot;GUEST_REGISTRY&quot; |
| TAX_REPORT | &quot;TAX_REPORT&quot; |
| OCCUPANCY_REPORT | &quot;OCCUPANCY_REPORT&quot; |
| REVENUE_REPORT | &quot;REVENUE_REPORT&quot; |
| GDPR_EXPORT | &quot;GDPR_EXPORT&quot; |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| GENERATING | &quot;GENERATING&quot; |
| COMPLETED | &quot;COMPLETED&quot; |
| FAILED | &quot;FAILED&quot; |
| SUBMITTED | &quot;SUBMITTED&quot; |



