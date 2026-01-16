# \OperationsAPI

All URIs are relative to *https://api.stayos.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AcknowledgeServiceRequest**](OperationsAPI.md#AcknowledgeServiceRequest) | **Post** /service-requests/{requestId}/acknowledge | Acknowledge service request
[**AddIncidentAction**](OperationsAPI.md#AddIncidentAction) | **Post** /incidents/{incidentId}/actions | Add incident action
[**AssignHousekeepingTask**](OperationsAPI.md#AssignHousekeepingTask) | **Post** /housekeeping/tasks/{taskId}/assign | Assign housekeeping task
[**AssignMaintenanceRequest**](OperationsAPI.md#AssignMaintenanceRequest) | **Post** /maintenance/requests/{requestId}/assign | Assign maintenance request
[**AssignServiceRequest**](OperationsAPI.md#AssignServiceRequest) | **Post** /service-requests/{requestId}/assign | Assign service request
[**CancelServiceRequest**](OperationsAPI.md#CancelServiceRequest) | **Post** /service-requests/{requestId}/cancel | Cancel service request
[**ClockInShift**](OperationsAPI.md#ClockInShift) | **Post** /staff/shifts/{shiftId}/clock-in | Clock in for shift
[**ClockOutShift**](OperationsAPI.md#ClockOutShift) | **Post** /staff/shifts/{shiftId}/clock-out | Clock out from shift
[**CloseIncident**](OperationsAPI.md#CloseIncident) | **Post** /incidents/{incidentId}/close | Close incident
[**CompleteHousekeepingTask**](OperationsAPI.md#CompleteHousekeepingTask) | **Post** /housekeeping/tasks/{taskId}/complete | Complete housekeeping task
[**CompleteMaintenanceRequest**](OperationsAPI.md#CompleteMaintenanceRequest) | **Post** /maintenance/requests/{requestId}/complete | Complete maintenance request
[**CompleteServiceRequest**](OperationsAPI.md#CompleteServiceRequest) | **Post** /service-requests/{requestId}/complete | Complete service request
[**CompleteTraining**](OperationsAPI.md#CompleteTraining) | **Post** /training/enrollments/{enrollmentId}/complete | Complete training
[**CreateHousekeepingTask**](OperationsAPI.md#CreateHousekeepingTask) | **Post** /housekeeping/tasks | Create housekeeping task
[**CreateMaintenanceRequest**](OperationsAPI.md#CreateMaintenanceRequest) | **Post** /maintenance/requests | Create maintenance request
[**CreateServiceRequest**](OperationsAPI.md#CreateServiceRequest) | **Post** /service-requests | Create service request
[**CreateStaffShift**](OperationsAPI.md#CreateStaffShift) | **Post** /staff/shifts | Create staff shift
[**CreateTrainingModule**](OperationsAPI.md#CreateTrainingModule) | **Post** /training/modules | Create training module
[**EnrollInTraining**](OperationsAPI.md#EnrollInTraining) | **Post** /training/enrollments | Enroll in training
[**EscalateServiceRequest**](OperationsAPI.md#EscalateServiceRequest) | **Post** /service-requests/{requestId}/escalate | Escalate service request
[**FailHousekeepingTask**](OperationsAPI.md#FailHousekeepingTask) | **Post** /housekeeping/tasks/{taskId}/fail | Fail housekeeping task
[**GetCleaningSchedule**](OperationsAPI.md#GetCleaningSchedule) | **Get** /housekeeping/schedule | Get cleaning schedule
[**GetIncident**](OperationsAPI.md#GetIncident) | **Get** /incidents/{incidentId} | Get incident details
[**GetMaintenanceHistory**](OperationsAPI.md#GetMaintenanceHistory) | **Get** /maintenance/requests/{requestId}/history | Get maintenance history
[**GetStaffPerformance**](OperationsAPI.md#GetStaffPerformance) | **Get** /staff/{staffId}/performance | Get staff performance metrics
[**GetTrainingEnrollment**](OperationsAPI.md#GetTrainingEnrollment) | **Get** /training/enrollments/{enrollmentId} | Get enrollment details
[**GetTrainingModule**](OperationsAPI.md#GetTrainingModule) | **Get** /training/modules/{moduleId} | Get training module details
[**ListHousekeepingTasks**](OperationsAPI.md#ListHousekeepingTasks) | **Get** /housekeeping/tasks | List housekeeping tasks
[**ListIncidents**](OperationsAPI.md#ListIncidents) | **Get** /incidents | List incidents
[**ListMaintenanceRequests**](OperationsAPI.md#ListMaintenanceRequests) | **Get** /maintenance/requests | List maintenance requests
[**ListServiceRequests**](OperationsAPI.md#ListServiceRequests) | **Get** /service-requests | List service requests
[**ListStaffShifts**](OperationsAPI.md#ListStaffShifts) | **Get** /staff/shifts | List staff shifts
[**ListTrainingModules**](OperationsAPI.md#ListTrainingModules) | **Get** /training/modules | List training modules
[**ReplaceHousekeepingTask**](OperationsAPI.md#ReplaceHousekeepingTask) | **Put** /housekeeping/tasks/{taskId} | Replace housekeeping task (full update)
[**ReplaceIncident**](OperationsAPI.md#ReplaceIncident) | **Put** /incidents/{incidentId} | Replace incident (full update)
[**ReplaceMaintenanceRequest**](OperationsAPI.md#ReplaceMaintenanceRequest) | **Put** /maintenance/requests/{requestId} | Replace maintenance request (full update)
[**ReplaceServiceRequest**](OperationsAPI.md#ReplaceServiceRequest) | **Put** /service-requests/{requestId} | Replace service request (full update)
[**ReportIncident**](OperationsAPI.md#ReportIncident) | **Post** /incidents | Report incident
[**StartHousekeepingTask**](OperationsAPI.md#StartHousekeepingTask) | **Post** /housekeeping/tasks/{taskId}/start | Start housekeeping task
[**UpdateHousekeepingTask**](OperationsAPI.md#UpdateHousekeepingTask) | **Patch** /housekeeping/tasks/{taskId} | Update housekeeping task (partial update)
[**UpdateMaintenanceRequest**](OperationsAPI.md#UpdateMaintenanceRequest) | **Patch** /maintenance/requests/{requestId} | Update maintenance request (partial update)
[**UpdateServiceRequest**](OperationsAPI.md#UpdateServiceRequest) | **Patch** /service-requests/{requestId} | Update service request (partial update)
[**VerifyHousekeepingTask**](OperationsAPI.md#VerifyHousekeepingTask) | **Post** /housekeeping/tasks/{taskId}/verify | Verify housekeeping task
[**VerifyMaintenanceRequest**](OperationsAPI.md#VerifyMaintenanceRequest) | **Post** /maintenance/requests/{requestId}/verify | Verify maintenance completion



## AcknowledgeServiceRequest

> ServiceRequest AcknowledgeServiceRequest(ctx, requestId).Execute()

Acknowledge service request



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	requestId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.AcknowledgeServiceRequest(context.Background(), requestId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.AcknowledgeServiceRequest``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `AcknowledgeServiceRequest`: ServiceRequest
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.AcknowledgeServiceRequest`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**requestId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiAcknowledgeServiceRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ServiceRequest**](ServiceRequest.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## AddIncidentAction

> Incident AddIncidentAction(ctx, incidentId).AddIncidentActionRequest(addIncidentActionRequest).Execute()

Add incident action



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	incidentId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	addIncidentActionRequest := *openapiclient.NewAddIncidentActionRequest("Action_example") // AddIncidentActionRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.AddIncidentAction(context.Background(), incidentId).AddIncidentActionRequest(addIncidentActionRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.AddIncidentAction``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `AddIncidentAction`: Incident
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.AddIncidentAction`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**incidentId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiAddIncidentActionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **addIncidentActionRequest** | [**AddIncidentActionRequest**](AddIncidentActionRequest.md) |  | 

### Return type

[**Incident**](Incident.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## AssignHousekeepingTask

> HousekeepingTask AssignHousekeepingTask(ctx, taskId).AssignHousekeepingTaskRequest(assignHousekeepingTaskRequest).Execute()

Assign housekeeping task



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	taskId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	assignHousekeepingTaskRequest := *openapiclient.NewAssignHousekeepingTaskRequest("AssignedTo_example") // AssignHousekeepingTaskRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.AssignHousekeepingTask(context.Background(), taskId).AssignHousekeepingTaskRequest(assignHousekeepingTaskRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.AssignHousekeepingTask``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `AssignHousekeepingTask`: HousekeepingTask
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.AssignHousekeepingTask`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**taskId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiAssignHousekeepingTaskRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **assignHousekeepingTaskRequest** | [**AssignHousekeepingTaskRequest**](AssignHousekeepingTaskRequest.md) |  | 

### Return type

[**HousekeepingTask**](HousekeepingTask.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## AssignMaintenanceRequest

> MaintenanceRequest AssignMaintenanceRequest(ctx, requestId).AssignMaintenanceRequestRequest(assignMaintenanceRequestRequest).Execute()

Assign maintenance request



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	requestId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	assignMaintenanceRequestRequest := *openapiclient.NewAssignMaintenanceRequestRequest("AssignedTo_example") // AssignMaintenanceRequestRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.AssignMaintenanceRequest(context.Background(), requestId).AssignMaintenanceRequestRequest(assignMaintenanceRequestRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.AssignMaintenanceRequest``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `AssignMaintenanceRequest`: MaintenanceRequest
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.AssignMaintenanceRequest`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**requestId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiAssignMaintenanceRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **assignMaintenanceRequestRequest** | [**AssignMaintenanceRequestRequest**](AssignMaintenanceRequestRequest.md) |  | 

### Return type

[**MaintenanceRequest**](MaintenanceRequest.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## AssignServiceRequest

> ServiceRequest AssignServiceRequest(ctx, requestId).AssignServiceRequestRequest(assignServiceRequestRequest).Execute()

Assign service request



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	requestId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	assignServiceRequestRequest := *openapiclient.NewAssignServiceRequestRequest("AssignedTo_example") // AssignServiceRequestRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.AssignServiceRequest(context.Background(), requestId).AssignServiceRequestRequest(assignServiceRequestRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.AssignServiceRequest``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `AssignServiceRequest`: ServiceRequest
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.AssignServiceRequest`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**requestId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiAssignServiceRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **assignServiceRequestRequest** | [**AssignServiceRequestRequest**](AssignServiceRequestRequest.md) |  | 

### Return type

[**ServiceRequest**](ServiceRequest.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CancelServiceRequest

> ServiceRequest CancelServiceRequest(ctx, requestId).CancelServiceRequestRequest(cancelServiceRequestRequest).Execute()

Cancel service request



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	requestId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	cancelServiceRequestRequest := *openapiclient.NewCancelServiceRequestRequest() // CancelServiceRequestRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.CancelServiceRequest(context.Background(), requestId).CancelServiceRequestRequest(cancelServiceRequestRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.CancelServiceRequest``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CancelServiceRequest`: ServiceRequest
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.CancelServiceRequest`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**requestId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiCancelServiceRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **cancelServiceRequestRequest** | [**CancelServiceRequestRequest**](CancelServiceRequestRequest.md) |  | 

### Return type

[**ServiceRequest**](ServiceRequest.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ClockInShift

> StaffShift ClockInShift(ctx, shiftId).Execute()

Clock in for shift



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	shiftId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.ClockInShift(context.Background(), shiftId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.ClockInShift``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ClockInShift`: StaffShift
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.ClockInShift`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**shiftId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClockInShiftRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**StaffShift**](StaffShift.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ClockOutShift

> StaffShift ClockOutShift(ctx, shiftId).Execute()

Clock out from shift



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	shiftId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.ClockOutShift(context.Background(), shiftId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.ClockOutShift``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ClockOutShift`: StaffShift
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.ClockOutShift`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**shiftId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClockOutShiftRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**StaffShift**](StaffShift.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CloseIncident

> Incident CloseIncident(ctx, incidentId).CloseIncidentRequest(closeIncidentRequest).Execute()

Close incident



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	incidentId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	closeIncidentRequest := *openapiclient.NewCloseIncidentRequest() // CloseIncidentRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.CloseIncident(context.Background(), incidentId).CloseIncidentRequest(closeIncidentRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.CloseIncident``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CloseIncident`: Incident
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.CloseIncident`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**incidentId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiCloseIncidentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **closeIncidentRequest** | [**CloseIncidentRequest**](CloseIncidentRequest.md) |  | 

### Return type

[**Incident**](Incident.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CompleteHousekeepingTask

> HousekeepingTask CompleteHousekeepingTask(ctx, taskId).CompleteHousekeepingTaskRequest(completeHousekeepingTaskRequest).Execute()

Complete housekeeping task



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	taskId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	completeHousekeepingTaskRequest := *openapiclient.NewCompleteHousekeepingTaskRequest() // CompleteHousekeepingTaskRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.CompleteHousekeepingTask(context.Background(), taskId).CompleteHousekeepingTaskRequest(completeHousekeepingTaskRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.CompleteHousekeepingTask``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CompleteHousekeepingTask`: HousekeepingTask
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.CompleteHousekeepingTask`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**taskId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiCompleteHousekeepingTaskRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **completeHousekeepingTaskRequest** | [**CompleteHousekeepingTaskRequest**](CompleteHousekeepingTaskRequest.md) |  | 

### Return type

[**HousekeepingTask**](HousekeepingTask.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CompleteMaintenanceRequest

> MaintenanceRequest CompleteMaintenanceRequest(ctx, requestId).CompleteMaintenanceRequestRequest(completeMaintenanceRequestRequest).Execute()

Complete maintenance request



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	requestId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	completeMaintenanceRequestRequest := *openapiclient.NewCompleteMaintenanceRequestRequest() // CompleteMaintenanceRequestRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.CompleteMaintenanceRequest(context.Background(), requestId).CompleteMaintenanceRequestRequest(completeMaintenanceRequestRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.CompleteMaintenanceRequest``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CompleteMaintenanceRequest`: MaintenanceRequest
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.CompleteMaintenanceRequest`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**requestId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiCompleteMaintenanceRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **completeMaintenanceRequestRequest** | [**CompleteMaintenanceRequestRequest**](CompleteMaintenanceRequestRequest.md) |  | 

### Return type

[**MaintenanceRequest**](MaintenanceRequest.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CompleteServiceRequest

> ServiceRequest CompleteServiceRequest(ctx, requestId).MarkReservationNoShowRequest(markReservationNoShowRequest).Execute()

Complete service request



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	requestId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	markReservationNoShowRequest := *openapiclient.NewMarkReservationNoShowRequest() // MarkReservationNoShowRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.CompleteServiceRequest(context.Background(), requestId).MarkReservationNoShowRequest(markReservationNoShowRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.CompleteServiceRequest``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CompleteServiceRequest`: ServiceRequest
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.CompleteServiceRequest`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**requestId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiCompleteServiceRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **markReservationNoShowRequest** | [**MarkReservationNoShowRequest**](MarkReservationNoShowRequest.md) |  | 

### Return type

[**ServiceRequest**](ServiceRequest.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CompleteTraining

> TrainingEnrollment CompleteTraining(ctx, enrollmentId).CompleteTrainingRequest(completeTrainingRequest).Execute()

Complete training



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	enrollmentId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	completeTrainingRequest := *openapiclient.NewCompleteTrainingRequest() // CompleteTrainingRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.CompleteTraining(context.Background(), enrollmentId).CompleteTrainingRequest(completeTrainingRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.CompleteTraining``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CompleteTraining`: TrainingEnrollment
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.CompleteTraining`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**enrollmentId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiCompleteTrainingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **completeTrainingRequest** | [**CompleteTrainingRequest**](CompleteTrainingRequest.md) |  | 

### Return type

[**TrainingEnrollment**](TrainingEnrollment.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateHousekeepingTask

> map[string]interface{} CreateHousekeepingTask(ctx).Body(body).Execute()

Create housekeeping task



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	body := map[string]interface{}{ ... } // map[string]interface{} | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.CreateHousekeepingTask(context.Background()).Body(body).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.CreateHousekeepingTask``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateHousekeepingTask`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.CreateHousekeepingTask`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateHousekeepingTaskRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **map[string]interface{}** |  | 

### Return type

**map[string]interface{}**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateMaintenanceRequest

> map[string]interface{} CreateMaintenanceRequest(ctx).Body(body).Execute()

Create maintenance request



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	body := map[string]interface{}{ ... } // map[string]interface{} | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.CreateMaintenanceRequest(context.Background()).Body(body).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.CreateMaintenanceRequest``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateMaintenanceRequest`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.CreateMaintenanceRequest`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateMaintenanceRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **map[string]interface{}** |  | 

### Return type

**map[string]interface{}**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateServiceRequest

> map[string]interface{} CreateServiceRequest(ctx).Body(body).Execute()

Create service request



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	body := map[string]interface{}{ ... } // map[string]interface{} | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.CreateServiceRequest(context.Background()).Body(body).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.CreateServiceRequest``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateServiceRequest`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.CreateServiceRequest`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateServiceRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **map[string]interface{}** |  | 

### Return type

**map[string]interface{}**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateStaffShift

> StaffShift CreateStaffShift(ctx).StaffShift(staffShift).Execute()

Create staff shift



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "time"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	staffShift := *openapiclient.NewStaffShift("ShiftId_example", "StaffId_example", "PropertyId_example", time.Now(), "09:00:00", "17:00:00") // StaffShift | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.CreateStaffShift(context.Background()).StaffShift(staffShift).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.CreateStaffShift``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateStaffShift`: StaffShift
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.CreateStaffShift`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateStaffShiftRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **staffShift** | [**StaffShift**](StaffShift.md) |  | 

### Return type

[**StaffShift**](StaffShift.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateTrainingModule

> TrainingModule CreateTrainingModule(ctx).TrainingModule(trainingModule).Execute()

Create training module



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	trainingModule := *openapiclient.NewTrainingModule("ModuleId_example", "Fire Safety Training", "SAFETY", int32(60)) // TrainingModule | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.CreateTrainingModule(context.Background()).TrainingModule(trainingModule).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.CreateTrainingModule``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateTrainingModule`: TrainingModule
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.CreateTrainingModule`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateTrainingModuleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trainingModule** | [**TrainingModule**](TrainingModule.md) |  | 

### Return type

[**TrainingModule**](TrainingModule.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## EnrollInTraining

> TrainingEnrollment EnrollInTraining(ctx).TrainingEnrollment(trainingEnrollment).Execute()

Enroll in training



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	trainingEnrollment := *openapiclient.NewTrainingEnrollment("EnrollmentId_example", "ModuleId_example", "StaffId_example", "ENROLLED") // TrainingEnrollment | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.EnrollInTraining(context.Background()).TrainingEnrollment(trainingEnrollment).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.EnrollInTraining``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `EnrollInTraining`: TrainingEnrollment
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.EnrollInTraining`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiEnrollInTrainingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trainingEnrollment** | [**TrainingEnrollment**](TrainingEnrollment.md) |  | 

### Return type

[**TrainingEnrollment**](TrainingEnrollment.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## EscalateServiceRequest

> ServiceRequest EscalateServiceRequest(ctx, requestId).EscalateServiceRequestRequest(escalateServiceRequestRequest).Execute()

Escalate service request



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	requestId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	escalateServiceRequestRequest := *openapiclient.NewEscalateServiceRequestRequest("Reason_example") // EscalateServiceRequestRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.EscalateServiceRequest(context.Background(), requestId).EscalateServiceRequestRequest(escalateServiceRequestRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.EscalateServiceRequest``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `EscalateServiceRequest`: ServiceRequest
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.EscalateServiceRequest`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**requestId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiEscalateServiceRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **escalateServiceRequestRequest** | [**EscalateServiceRequestRequest**](EscalateServiceRequestRequest.md) |  | 

### Return type

[**ServiceRequest**](ServiceRequest.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## FailHousekeepingTask

> HousekeepingTask FailHousekeepingTask(ctx, taskId).EscalateServiceRequestRequest(escalateServiceRequestRequest).Execute()

Fail housekeeping task



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	taskId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	escalateServiceRequestRequest := *openapiclient.NewEscalateServiceRequestRequest("Reason_example") // EscalateServiceRequestRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.FailHousekeepingTask(context.Background(), taskId).EscalateServiceRequestRequest(escalateServiceRequestRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.FailHousekeepingTask``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `FailHousekeepingTask`: HousekeepingTask
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.FailHousekeepingTask`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**taskId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiFailHousekeepingTaskRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **escalateServiceRequestRequest** | [**EscalateServiceRequestRequest**](EscalateServiceRequestRequest.md) |  | 

### Return type

[**HousekeepingTask**](HousekeepingTask.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCleaningSchedule

> GetCleaningSchedule200Response GetCleaningSchedule(ctx).PropertyId(propertyId).Date(date).Execute()

Get cleaning schedule



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "time"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	propertyId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	date := time.Now() // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.GetCleaningSchedule(context.Background()).PropertyId(propertyId).Date(date).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.GetCleaningSchedule``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetCleaningSchedule`: GetCleaningSchedule200Response
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.GetCleaningSchedule`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetCleaningScheduleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **propertyId** | **string** |  | 
 **date** | **string** |  | 

### Return type

[**GetCleaningSchedule200Response**](GetCleaningSchedule200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetIncident

> Incident GetIncident(ctx, incidentId).Execute()

Get incident details



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	incidentId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.GetIncident(context.Background(), incidentId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.GetIncident``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetIncident`: Incident
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.GetIncident`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**incidentId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetIncidentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Incident**](Incident.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetMaintenanceHistory

> GetMaintenanceHistory200Response GetMaintenanceHistory(ctx, requestId).Execute()

Get maintenance history



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	requestId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.GetMaintenanceHistory(context.Background(), requestId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.GetMaintenanceHistory``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetMaintenanceHistory`: GetMaintenanceHistory200Response
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.GetMaintenanceHistory`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**requestId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMaintenanceHistoryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**GetMaintenanceHistory200Response**](GetMaintenanceHistory200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetStaffPerformance

> GetStaffPerformance200Response GetStaffPerformance(ctx, staffId).StartDate(startDate).EndDate(endDate).Execute()

Get staff performance metrics



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "time"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	staffId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	startDate := time.Now() // string |  (optional)
	endDate := time.Now() // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.GetStaffPerformance(context.Background(), staffId).StartDate(startDate).EndDate(endDate).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.GetStaffPerformance``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetStaffPerformance`: GetStaffPerformance200Response
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.GetStaffPerformance`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**staffId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetStaffPerformanceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **startDate** | **string** |  | 
 **endDate** | **string** |  | 

### Return type

[**GetStaffPerformance200Response**](GetStaffPerformance200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTrainingEnrollment

> TrainingEnrollment GetTrainingEnrollment(ctx, enrollmentId).Execute()

Get enrollment details



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	enrollmentId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.GetTrainingEnrollment(context.Background(), enrollmentId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.GetTrainingEnrollment``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetTrainingEnrollment`: TrainingEnrollment
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.GetTrainingEnrollment`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**enrollmentId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTrainingEnrollmentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**TrainingEnrollment**](TrainingEnrollment.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTrainingModule

> TrainingModule GetTrainingModule(ctx, moduleId).Execute()

Get training module details



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	moduleId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.GetTrainingModule(context.Background(), moduleId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.GetTrainingModule``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetTrainingModule`: TrainingModule
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.GetTrainingModule`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**moduleId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTrainingModuleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**TrainingModule**](TrainingModule.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListHousekeepingTasks

> GetGuestStays200Response ListHousekeepingTasks(ctx).PropertyId(propertyId).Status(status).AssignedTo(assignedTo).PageSize(pageSize).Cursor(cursor).Execute()

List housekeeping tasks



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	propertyId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string |  (optional)
	status := "status_example" // string |  (optional)
	assignedTo := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string |  (optional)
	pageSize := int32(56) // int32 | Number of items per page (max 100) (optional) (default to 20)
	cursor := "cursor_example" // string | Cursor for pagination (opaque token) (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.ListHousekeepingTasks(context.Background()).PropertyId(propertyId).Status(status).AssignedTo(assignedTo).PageSize(pageSize).Cursor(cursor).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.ListHousekeepingTasks``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListHousekeepingTasks`: GetGuestStays200Response
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.ListHousekeepingTasks`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListHousekeepingTasksRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **propertyId** | **string** |  | 
 **status** | **string** |  | 
 **assignedTo** | **string** |  | 
 **pageSize** | **int32** | Number of items per page (max 100) | [default to 20]
 **cursor** | **string** | Cursor for pagination (opaque token) | 

### Return type

[**GetGuestStays200Response**](GetGuestStays200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListIncidents

> ListIncidents200Response ListIncidents(ctx).PropertyId(propertyId).Severity(severity).Status(status).PageSize(pageSize).Cursor(cursor).Execute()

List incidents



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	propertyId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string |  (optional)
	severity := "severity_example" // string |  (optional)
	status := "status_example" // string |  (optional)
	pageSize := int32(56) // int32 | Number of items per page (max 100) (optional) (default to 20)
	cursor := "cursor_example" // string | Cursor for pagination (opaque token) (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.ListIncidents(context.Background()).PropertyId(propertyId).Severity(severity).Status(status).PageSize(pageSize).Cursor(cursor).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.ListIncidents``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListIncidents`: ListIncidents200Response
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.ListIncidents`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListIncidentsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **propertyId** | **string** |  | 
 **severity** | **string** |  | 
 **status** | **string** |  | 
 **pageSize** | **int32** | Number of items per page (max 100) | [default to 20]
 **cursor** | **string** | Cursor for pagination (opaque token) | 

### Return type

[**ListIncidents200Response**](ListIncidents200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListMaintenanceRequests

> GetGuestStays200Response ListMaintenanceRequests(ctx).PropertyId(propertyId).Status(status).Priority(priority).PageSize(pageSize).Cursor(cursor).Execute()

List maintenance requests



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	propertyId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string |  (optional)
	status := "status_example" // string |  (optional)
	priority := "priority_example" // string |  (optional)
	pageSize := int32(56) // int32 | Number of items per page (max 100) (optional) (default to 20)
	cursor := "cursor_example" // string | Cursor for pagination (opaque token) (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.ListMaintenanceRequests(context.Background()).PropertyId(propertyId).Status(status).Priority(priority).PageSize(pageSize).Cursor(cursor).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.ListMaintenanceRequests``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListMaintenanceRequests`: GetGuestStays200Response
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.ListMaintenanceRequests`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListMaintenanceRequestsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **propertyId** | **string** |  | 
 **status** | **string** |  | 
 **priority** | **string** |  | 
 **pageSize** | **int32** | Number of items per page (max 100) | [default to 20]
 **cursor** | **string** | Cursor for pagination (opaque token) | 

### Return type

[**GetGuestStays200Response**](GetGuestStays200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListServiceRequests

> GetGuestStays200Response ListServiceRequests(ctx).PropertyId(propertyId).Status(status).PageSize(pageSize).Cursor(cursor).Execute()

List service requests



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	propertyId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string |  (optional)
	status := "status_example" // string |  (optional)
	pageSize := int32(56) // int32 | Number of items per page (max 100) (optional) (default to 20)
	cursor := "cursor_example" // string | Cursor for pagination (opaque token) (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.ListServiceRequests(context.Background()).PropertyId(propertyId).Status(status).PageSize(pageSize).Cursor(cursor).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.ListServiceRequests``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListServiceRequests`: GetGuestStays200Response
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.ListServiceRequests`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListServiceRequestsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **propertyId** | **string** |  | 
 **status** | **string** |  | 
 **pageSize** | **int32** | Number of items per page (max 100) | [default to 20]
 **cursor** | **string** | Cursor for pagination (opaque token) | 

### Return type

[**GetGuestStays200Response**](GetGuestStays200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListStaffShifts

> ListStaffShifts200Response ListStaffShifts(ctx).StaffId(staffId).Date(date).PageSize(pageSize).Cursor(cursor).Execute()

List staff shifts



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "time"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	staffId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string |  (optional)
	date := time.Now() // string |  (optional)
	pageSize := int32(56) // int32 | Number of items per page (max 100) (optional) (default to 20)
	cursor := "cursor_example" // string | Cursor for pagination (opaque token) (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.ListStaffShifts(context.Background()).StaffId(staffId).Date(date).PageSize(pageSize).Cursor(cursor).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.ListStaffShifts``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListStaffShifts`: ListStaffShifts200Response
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.ListStaffShifts`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListStaffShiftsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **staffId** | **string** |  | 
 **date** | **string** |  | 
 **pageSize** | **int32** | Number of items per page (max 100) | [default to 20]
 **cursor** | **string** | Cursor for pagination (opaque token) | 

### Return type

[**ListStaffShifts200Response**](ListStaffShifts200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListTrainingModules

> ListTrainingModules200Response ListTrainingModules(ctx).PageSize(pageSize).Cursor(cursor).Execute()

List training modules



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	pageSize := int32(56) // int32 | Number of items per page (max 100) (optional) (default to 20)
	cursor := "cursor_example" // string | Cursor for pagination (opaque token) (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.ListTrainingModules(context.Background()).PageSize(pageSize).Cursor(cursor).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.ListTrainingModules``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListTrainingModules`: ListTrainingModules200Response
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.ListTrainingModules`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListTrainingModulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **int32** | Number of items per page (max 100) | [default to 20]
 **cursor** | **string** | Cursor for pagination (opaque token) | 

### Return type

[**ListTrainingModules200Response**](ListTrainingModules200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ReplaceHousekeepingTask

> map[string]interface{} ReplaceHousekeepingTask(ctx, taskId).Body(body).IfMatch(ifMatch).Execute()

Replace housekeeping task (full update)



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	taskId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	body := map[string]interface{}{ ... } // map[string]interface{} | 
	ifMatch := "ifMatch_example" // string | ETag for optimistic locking (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.ReplaceHousekeepingTask(context.Background(), taskId).Body(body).IfMatch(ifMatch).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.ReplaceHousekeepingTask``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ReplaceHousekeepingTask`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.ReplaceHousekeepingTask`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**taskId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiReplaceHousekeepingTaskRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **body** | **map[string]interface{}** |  | 
 **ifMatch** | **string** | ETag for optimistic locking | 

### Return type

**map[string]interface{}**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ReplaceIncident

> Incident ReplaceIncident(ctx, incidentId).Incident(incident).IfMatch(ifMatch).Execute()

Replace incident (full update)



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	incidentId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	incident := *openapiclient.NewIncident("IncidentId_example", "PropertyId_example", "SAFETY", "MODERATE", "REPORTED") // Incident | 
	ifMatch := "ifMatch_example" // string | ETag for optimistic locking (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.ReplaceIncident(context.Background(), incidentId).Incident(incident).IfMatch(ifMatch).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.ReplaceIncident``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ReplaceIncident`: Incident
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.ReplaceIncident`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**incidentId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiReplaceIncidentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **incident** | [**Incident**](Incident.md) |  | 
 **ifMatch** | **string** | ETag for optimistic locking | 

### Return type

[**Incident**](Incident.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ReplaceMaintenanceRequest

> map[string]interface{} ReplaceMaintenanceRequest(ctx, requestId).Body(body).IfMatch(ifMatch).Execute()

Replace maintenance request (full update)



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	requestId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	body := map[string]interface{}{ ... } // map[string]interface{} | 
	ifMatch := "ifMatch_example" // string | ETag for optimistic locking (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.ReplaceMaintenanceRequest(context.Background(), requestId).Body(body).IfMatch(ifMatch).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.ReplaceMaintenanceRequest``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ReplaceMaintenanceRequest`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.ReplaceMaintenanceRequest`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**requestId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiReplaceMaintenanceRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **body** | **map[string]interface{}** |  | 
 **ifMatch** | **string** | ETag for optimistic locking | 

### Return type

**map[string]interface{}**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ReplaceServiceRequest

> map[string]interface{} ReplaceServiceRequest(ctx, requestId).Body(body).IfMatch(ifMatch).Execute()

Replace service request (full update)



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	requestId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	body := map[string]interface{}{ ... } // map[string]interface{} | 
	ifMatch := "ifMatch_example" // string | ETag for optimistic locking (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.ReplaceServiceRequest(context.Background(), requestId).Body(body).IfMatch(ifMatch).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.ReplaceServiceRequest``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ReplaceServiceRequest`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.ReplaceServiceRequest`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**requestId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiReplaceServiceRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **body** | **map[string]interface{}** |  | 
 **ifMatch** | **string** | ETag for optimistic locking | 

### Return type

**map[string]interface{}**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ReportIncident

> Incident ReportIncident(ctx).Incident(incident).Execute()

Report incident



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	incident := *openapiclient.NewIncident("IncidentId_example", "PropertyId_example", "SAFETY", "MODERATE", "REPORTED") // Incident | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.ReportIncident(context.Background()).Incident(incident).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.ReportIncident``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ReportIncident`: Incident
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.ReportIncident`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiReportIncidentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **incident** | [**Incident**](Incident.md) |  | 

### Return type

[**Incident**](Incident.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## StartHousekeepingTask

> HousekeepingTask StartHousekeepingTask(ctx, taskId).Execute()

Start housekeeping task



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	taskId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.StartHousekeepingTask(context.Background(), taskId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.StartHousekeepingTask``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `StartHousekeepingTask`: HousekeepingTask
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.StartHousekeepingTask`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**taskId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartHousekeepingTaskRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**HousekeepingTask**](HousekeepingTask.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateHousekeepingTask

> map[string]interface{} UpdateHousekeepingTask(ctx, taskId).Body(body).IfMatch(ifMatch).Execute()

Update housekeeping task (partial update)



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	taskId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	body := map[string]interface{}{ ... } // map[string]interface{} | 
	ifMatch := "ifMatch_example" // string | ETag for optimistic locking (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.UpdateHousekeepingTask(context.Background(), taskId).Body(body).IfMatch(ifMatch).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.UpdateHousekeepingTask``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateHousekeepingTask`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.UpdateHousekeepingTask`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**taskId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateHousekeepingTaskRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **body** | **map[string]interface{}** |  | 
 **ifMatch** | **string** | ETag for optimistic locking | 

### Return type

**map[string]interface{}**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateMaintenanceRequest

> map[string]interface{} UpdateMaintenanceRequest(ctx, requestId).Body(body).IfMatch(ifMatch).Execute()

Update maintenance request (partial update)



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	requestId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	body := map[string]interface{}{ ... } // map[string]interface{} | 
	ifMatch := "ifMatch_example" // string | ETag for optimistic locking (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.UpdateMaintenanceRequest(context.Background(), requestId).Body(body).IfMatch(ifMatch).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.UpdateMaintenanceRequest``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateMaintenanceRequest`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.UpdateMaintenanceRequest`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**requestId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateMaintenanceRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **body** | **map[string]interface{}** |  | 
 **ifMatch** | **string** | ETag for optimistic locking | 

### Return type

**map[string]interface{}**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateServiceRequest

> map[string]interface{} UpdateServiceRequest(ctx, requestId).Body(body).IfMatch(ifMatch).Execute()

Update service request (partial update)



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	requestId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	body := map[string]interface{}{ ... } // map[string]interface{} | 
	ifMatch := "ifMatch_example" // string | ETag for optimistic locking (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.UpdateServiceRequest(context.Background(), requestId).Body(body).IfMatch(ifMatch).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.UpdateServiceRequest``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateServiceRequest`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.UpdateServiceRequest`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**requestId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateServiceRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **body** | **map[string]interface{}** |  | 
 **ifMatch** | **string** | ETag for optimistic locking | 

### Return type

**map[string]interface{}**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## VerifyHousekeepingTask

> HousekeepingTask VerifyHousekeepingTask(ctx, taskId).VerifyHousekeepingTaskRequest(verifyHousekeepingTaskRequest).Execute()

Verify housekeeping task



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	taskId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	verifyHousekeepingTaskRequest := *openapiclient.NewVerifyHousekeepingTaskRequest() // VerifyHousekeepingTaskRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.VerifyHousekeepingTask(context.Background(), taskId).VerifyHousekeepingTaskRequest(verifyHousekeepingTaskRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.VerifyHousekeepingTask``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `VerifyHousekeepingTask`: HousekeepingTask
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.VerifyHousekeepingTask`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**taskId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiVerifyHousekeepingTaskRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **verifyHousekeepingTaskRequest** | [**VerifyHousekeepingTaskRequest**](VerifyHousekeepingTaskRequest.md) |  | 

### Return type

[**HousekeepingTask**](HousekeepingTask.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## VerifyMaintenanceRequest

> MaintenanceRequest VerifyMaintenanceRequest(ctx, requestId).VerifyHousekeepingTaskRequest(verifyHousekeepingTaskRequest).Execute()

Verify maintenance completion



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/stayos/api-client-go"
)

func main() {
	requestId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	verifyHousekeepingTaskRequest := *openapiclient.NewVerifyHousekeepingTaskRequest() // VerifyHousekeepingTaskRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OperationsAPI.VerifyMaintenanceRequest(context.Background(), requestId).VerifyHousekeepingTaskRequest(verifyHousekeepingTaskRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OperationsAPI.VerifyMaintenanceRequest``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `VerifyMaintenanceRequest`: MaintenanceRequest
	fmt.Fprintf(os.Stdout, "Response from `OperationsAPI.VerifyMaintenanceRequest`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**requestId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiVerifyMaintenanceRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **verifyHousekeepingTaskRequest** | [**VerifyHousekeepingTaskRequest**](VerifyHousekeepingTaskRequest.md) |  | 

### Return type

[**MaintenanceRequest**](MaintenanceRequest.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

