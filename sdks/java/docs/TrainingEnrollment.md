

# TrainingEnrollment


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**enrollmentId** | **UUID** |  |  [readonly] |
|**moduleId** | **UUID** |  |  |
|**staffId** | **UUID** |  |  |
|**status** | [**StatusEnum**](#StatusEnum) |  |  |
|**enrolledAt** | **OffsetDateTime** |  |  [optional] [readonly] |
|**startedAt** | **OffsetDateTime** |  |  [optional] |
|**completedAt** | **OffsetDateTime** |  |  [optional] |
|**expiresAt** | **OffsetDateTime** |  |  [optional] |
|**assessmentScore** | **Integer** |  |  [optional] |
|**attempts** | **Integer** | Number of assessment attempts |  [optional] |
|**certificateUrl** | **URI** |  |  [optional] [readonly] |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| ENROLLED | &quot;ENROLLED&quot; |
| IN_PROGRESS | &quot;IN_PROGRESS&quot; |
| COMPLETED | &quot;COMPLETED&quot; |
| FAILED | &quot;FAILED&quot; |
| EXPIRED | &quot;EXPIRED&quot; |



