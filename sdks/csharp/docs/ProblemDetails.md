# StayOS.ApiClient.Model.ProblemDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | URI reference identifying the problem type | 
**Title** | **string** | Short, human-readable summary | 
**Status** | **int** | HTTP status code | 
**Detail** | **string** | Human-readable explanation | [optional] 
**Instance** | **string** | URI reference identifying the specific occurrence | [optional] 
**TraceId** | **Guid** | Unique identifier for tracing | [optional] 
**Errors** | [**List&lt;ProblemDetailsAllOfErrors&gt;**](ProblemDetailsAllOfErrors.md) | Detailed validation errors | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

