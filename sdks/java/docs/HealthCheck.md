

# HealthCheck


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**status** | [**StatusEnum**](#StatusEnum) |  |  |
|**timestamp** | **OffsetDateTime** |  |  [optional] [readonly] |
|**version** | **String** |  |  [optional] |
|**services** | [**HealthCheckAllOfServices**](HealthCheckAllOfServices.md) |  |  [optional] |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| HEALTHY | &quot;HEALTHY&quot; |
| DEGRADED | &quot;DEGRADED&quot; |
| UNHEALTHY | &quot;UNHEALTHY&quot; |



