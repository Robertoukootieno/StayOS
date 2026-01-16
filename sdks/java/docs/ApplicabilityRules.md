

# ApplicabilityRules


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**validDateRange** | [**ApplicabilityRulesAllOfValidDateRange**](ApplicabilityRulesAllOfValidDateRange.md) |  |  [optional] |
|**daysOfWeek** | [**List&lt;DaysOfWeekEnum&gt;**](#List&lt;DaysOfWeekEnum&gt;) |  |  [optional] |
|**minimumStayDuration** | **Integer** | Minimum nights required |  [optional] |
|**maximumStayDuration** | **Integer** | Maximum nights allowed |  [optional] |
|**advanceBookingWindow** | [**ApplicabilityRulesAllOfAdvanceBookingWindow**](ApplicabilityRulesAllOfAdvanceBookingWindow.md) |  |  [optional] |
|**blackoutDates** | **List&lt;LocalDate&gt;** | Dates when rate is not available |  [optional] |



## Enum: List&lt;DaysOfWeekEnum&gt;

| Name | Value |
|---- | -----|
| MONDAY | &quot;MONDAY&quot; |
| TUESDAY | &quot;TUESDAY&quot; |
| WEDNESDAY | &quot;WEDNESDAY&quot; |
| THURSDAY | &quot;THURSDAY&quot; |
| FRIDAY | &quot;FRIDAY&quot; |
| SATURDAY | &quot;SATURDAY&quot; |
| SUNDAY | &quot;SUNDAY&quot; |



