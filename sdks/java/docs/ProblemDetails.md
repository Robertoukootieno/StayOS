

# ProblemDetails


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**type** | **URI** | URI reference identifying the problem type |  |
|**title** | **String** | Short, human-readable summary |  |
|**status** | **Integer** | HTTP status code |  |
|**detail** | **String** | Human-readable explanation |  [optional] |
|**instance** | **URI** | URI reference identifying the specific occurrence |  [optional] |
|**traceId** | **UUID** | Unique identifier for tracing |  [optional] |
|**errors** | [**List&lt;ProblemDetailsAllOfErrors&gt;**](ProblemDetailsAllOfErrors.md) | Detailed validation errors |  [optional] |



