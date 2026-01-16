# \ComplianceAPI

All URIs are relative to *https://api.stayos.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateCertification**](ComplianceAPI.md#CreateCertification) | **Post** /compliance/certifications | Upload certification
[**CreateComplianceReport**](ComplianceAPI.md#CreateComplianceReport) | **Post** /compliance/reports | Generate compliance report
[**DeleteGuestData**](ComplianceAPI.md#DeleteGuestData) | **Post** /compliance/gdpr/delete | Delete guest data (GDPR)
[**ExportGuestData**](ComplianceAPI.md#ExportGuestData) | **Post** /compliance/gdpr/export | Export guest data (GDPR)
[**GetAuditLog**](ComplianceAPI.md#GetAuditLog) | **Get** /audit/logs/{logId} | Get audit log details
[**GetAuditLogs**](ComplianceAPI.md#GetAuditLogs) | **Get** /audit/logs | Get audit logs
[**GetComplianceReport**](ComplianceAPI.md#GetComplianceReport) | **Get** /compliance/reports/{reportId} | Get compliance report
[**GetGuestRegistry**](ComplianceAPI.md#GetGuestRegistry) | **Get** /compliance/guest-registry | Get guest registry report
[**GetTaxReport**](ComplianceAPI.md#GetTaxReport) | **Get** /compliance/tax-report | Get tax report
[**ListCertifications**](ComplianceAPI.md#ListCertifications) | **Get** /compliance/certifications | List certifications
[**ListComplianceReports**](ComplianceAPI.md#ListComplianceReports) | **Get** /compliance/reports | List compliance reports
[**SearchAuditLogs**](ComplianceAPI.md#SearchAuditLogs) | **Post** /audit/search | Search audit logs



## CreateCertification

> PropertyCertification CreateCertification(ctx).PropertyCertification(propertyCertification).Execute()

Upload certification



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
	propertyCertification := *openapiclient.NewPropertyCertification("CertificationId_example", "PropertyId_example", "BUSINESS_LICENSE", time.Now(), time.Now()) // PropertyCertification | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ComplianceAPI.CreateCertification(context.Background()).PropertyCertification(propertyCertification).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ComplianceAPI.CreateCertification``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateCertification`: PropertyCertification
	fmt.Fprintf(os.Stdout, "Response from `ComplianceAPI.CreateCertification`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateCertificationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **propertyCertification** | [**PropertyCertification**](PropertyCertification.md) |  | 

### Return type

[**PropertyCertification**](PropertyCertification.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateComplianceReport

> map[string]interface{} CreateComplianceReport(ctx).CreateComplianceReportRequest(createComplianceReportRequest).Execute()

Generate compliance report



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
	createComplianceReportRequest := *openapiclient.NewCreateComplianceReportRequest("ReportType_example", time.Now(), time.Now()) // CreateComplianceReportRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ComplianceAPI.CreateComplianceReport(context.Background()).CreateComplianceReportRequest(createComplianceReportRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ComplianceAPI.CreateComplianceReport``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateComplianceReport`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `ComplianceAPI.CreateComplianceReport`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateComplianceReportRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createComplianceReportRequest** | [**CreateComplianceReportRequest**](CreateComplianceReportRequest.md) |  | 

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


## DeleteGuestData

> DeleteGuestData200Response DeleteGuestData(ctx).DeleteGuestDataRequest(deleteGuestDataRequest).Execute()

Delete guest data (GDPR)



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
	deleteGuestDataRequest := *openapiclient.NewDeleteGuestDataRequest("GuestId_example") // DeleteGuestDataRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ComplianceAPI.DeleteGuestData(context.Background()).DeleteGuestDataRequest(deleteGuestDataRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ComplianceAPI.DeleteGuestData``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteGuestData`: DeleteGuestData200Response
	fmt.Fprintf(os.Stdout, "Response from `ComplianceAPI.DeleteGuestData`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteGuestDataRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteGuestDataRequest** | [**DeleteGuestDataRequest**](DeleteGuestDataRequest.md) |  | 

### Return type

[**DeleteGuestData200Response**](DeleteGuestData200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ExportGuestData

> ExportGuestData200Response ExportGuestData(ctx).ExportGuestDataRequest(exportGuestDataRequest).Execute()

Export guest data (GDPR)



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
	exportGuestDataRequest := *openapiclient.NewExportGuestDataRequest("GuestId_example") // ExportGuestDataRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ComplianceAPI.ExportGuestData(context.Background()).ExportGuestDataRequest(exportGuestDataRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ComplianceAPI.ExportGuestData``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ExportGuestData`: ExportGuestData200Response
	fmt.Fprintf(os.Stdout, "Response from `ComplianceAPI.ExportGuestData`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiExportGuestDataRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportGuestDataRequest** | [**ExportGuestDataRequest**](ExportGuestDataRequest.md) |  | 

### Return type

[**ExportGuestData200Response**](ExportGuestData200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAuditLog

> AuditLog GetAuditLog(ctx, logId).Execute()

Get audit log details



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
	logId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ComplianceAPI.GetAuditLog(context.Background(), logId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ComplianceAPI.GetAuditLog``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAuditLog`: AuditLog
	fmt.Fprintf(os.Stdout, "Response from `ComplianceAPI.GetAuditLog`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**logId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAuditLogRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**AuditLog**](AuditLog.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAuditLogs

> GetAuditLogs200Response GetAuditLogs(ctx).EntityType(entityType).EntityId(entityId).Action(action).UserId(userId).StartDate(startDate).EndDate(endDate).PageSize(pageSize).Cursor(cursor).Execute()

Get audit logs



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
	entityType := "entityType_example" // string |  (optional)
	entityId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string |  (optional)
	action := "action_example" // string |  (optional)
	userId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string |  (optional)
	startDate := time.Now() // time.Time |  (optional)
	endDate := time.Now() // time.Time |  (optional)
	pageSize := int32(56) // int32 | Number of items per page (max 100) (optional) (default to 20)
	cursor := "cursor_example" // string | Cursor for pagination (opaque token) (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ComplianceAPI.GetAuditLogs(context.Background()).EntityType(entityType).EntityId(entityId).Action(action).UserId(userId).StartDate(startDate).EndDate(endDate).PageSize(pageSize).Cursor(cursor).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ComplianceAPI.GetAuditLogs``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAuditLogs`: GetAuditLogs200Response
	fmt.Fprintf(os.Stdout, "Response from `ComplianceAPI.GetAuditLogs`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAuditLogsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityType** | **string** |  | 
 **entityId** | **string** |  | 
 **action** | **string** |  | 
 **userId** | **string** |  | 
 **startDate** | **time.Time** |  | 
 **endDate** | **time.Time** |  | 
 **pageSize** | **int32** | Number of items per page (max 100) | [default to 20]
 **cursor** | **string** | Cursor for pagination (opaque token) | 

### Return type

[**GetAuditLogs200Response**](GetAuditLogs200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetComplianceReport

> ComplianceReport GetComplianceReport(ctx, reportId).Execute()

Get compliance report



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
	reportId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ComplianceAPI.GetComplianceReport(context.Background(), reportId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ComplianceAPI.GetComplianceReport``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetComplianceReport`: ComplianceReport
	fmt.Fprintf(os.Stdout, "Response from `ComplianceAPI.GetComplianceReport`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reportId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetComplianceReportRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ComplianceReport**](ComplianceReport.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetGuestRegistry

> GetGuestRegistry200Response GetGuestRegistry(ctx).StartDate(startDate).EndDate(endDate).PropertyId(propertyId).Execute()

Get guest registry report



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
	startDate := time.Now() // string | 
	endDate := time.Now() // string | 
	propertyId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ComplianceAPI.GetGuestRegistry(context.Background()).StartDate(startDate).EndDate(endDate).PropertyId(propertyId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ComplianceAPI.GetGuestRegistry``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetGuestRegistry`: GetGuestRegistry200Response
	fmt.Fprintf(os.Stdout, "Response from `ComplianceAPI.GetGuestRegistry`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetGuestRegistryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **propertyId** | **string** |  | 

### Return type

[**GetGuestRegistry200Response**](GetGuestRegistry200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTaxReport

> GetTaxReport200Response GetTaxReport(ctx).StartDate(startDate).EndDate(endDate).PropertyId(propertyId).TaxType(taxType).Execute()

Get tax report



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
	startDate := time.Now() // string | 
	endDate := time.Now() // string | 
	propertyId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string |  (optional)
	taxType := "taxType_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ComplianceAPI.GetTaxReport(context.Background()).StartDate(startDate).EndDate(endDate).PropertyId(propertyId).TaxType(taxType).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ComplianceAPI.GetTaxReport``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetTaxReport`: GetTaxReport200Response
	fmt.Fprintf(os.Stdout, "Response from `ComplianceAPI.GetTaxReport`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTaxReportRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **propertyId** | **string** |  | 
 **taxType** | **string** |  | 

### Return type

[**GetTaxReport200Response**](GetTaxReport200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListCertifications

> ListCertifications200Response ListCertifications(ctx).PropertyId(propertyId).PageSize(pageSize).Cursor(cursor).Execute()

List certifications



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
	pageSize := int32(56) // int32 | Number of items per page (max 100) (optional) (default to 20)
	cursor := "cursor_example" // string | Cursor for pagination (opaque token) (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ComplianceAPI.ListCertifications(context.Background()).PropertyId(propertyId).PageSize(pageSize).Cursor(cursor).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ComplianceAPI.ListCertifications``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListCertifications`: ListCertifications200Response
	fmt.Fprintf(os.Stdout, "Response from `ComplianceAPI.ListCertifications`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListCertificationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **propertyId** | **string** |  | 
 **pageSize** | **int32** | Number of items per page (max 100) | [default to 20]
 **cursor** | **string** | Cursor for pagination (opaque token) | 

### Return type

[**ListCertifications200Response**](ListCertifications200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListComplianceReports

> GetGuestStays200Response ListComplianceReports(ctx).ReportType(reportType).PageSize(pageSize).Cursor(cursor).Execute()

List compliance reports



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
	reportType := "reportType_example" // string |  (optional)
	pageSize := int32(56) // int32 | Number of items per page (max 100) (optional) (default to 20)
	cursor := "cursor_example" // string | Cursor for pagination (opaque token) (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ComplianceAPI.ListComplianceReports(context.Background()).ReportType(reportType).PageSize(pageSize).Cursor(cursor).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ComplianceAPI.ListComplianceReports``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListComplianceReports`: GetGuestStays200Response
	fmt.Fprintf(os.Stdout, "Response from `ComplianceAPI.ListComplianceReports`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListComplianceReportsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportType** | **string** |  | 
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


## SearchAuditLogs

> []AuditLog SearchAuditLogs(ctx).SearchAuditLogsRequest(searchAuditLogsRequest).Execute()

Search audit logs



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
	searchAuditLogsRequest := *openapiclient.NewSearchAuditLogsRequest() // SearchAuditLogsRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ComplianceAPI.SearchAuditLogs(context.Background()).SearchAuditLogsRequest(searchAuditLogsRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ComplianceAPI.SearchAuditLogs``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SearchAuditLogs`: []AuditLog
	fmt.Fprintf(os.Stdout, "Response from `ComplianceAPI.SearchAuditLogs`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSearchAuditLogsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchAuditLogsRequest** | [**SearchAuditLogsRequest**](SearchAuditLogsRequest.md) |  | 

### Return type

[**[]AuditLog**](AuditLog.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

