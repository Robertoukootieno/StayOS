

# TrainingModule


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**moduleId** | **UUID** |  |  [readonly] |
|**title** | **String** |  |  |
|**description** | **String** |  |  [optional] |
|**category** | [**CategoryEnum**](#CategoryEnum) |  |  |
|**duration** | **Integer** | Duration in minutes |  |
|**content** | [**TrainingModuleAllOfContent**](TrainingModuleAllOfContent.md) |  |  [optional] |
|**assessmentRequired** | **Boolean** |  |  [optional] |
|**passingScore** | **Integer** | Minimum score to pass (percentage) |  [optional] |
|**metadata** | [**Model0**](Model0.md) |  |  [optional] |



## Enum: CategoryEnum

| Name | Value |
|---- | -----|
| SAFETY | &quot;SAFETY&quot; |
| CUSTOMER_SERVICE | &quot;CUSTOMER_SERVICE&quot; |
| TECHNICAL | &quot;TECHNICAL&quot; |
| COMPLIANCE | &quot;COMPLIANCE&quot; |
| MANAGEMENT | &quot;MANAGEMENT&quot; |



