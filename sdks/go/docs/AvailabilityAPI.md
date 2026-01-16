# \AvailabilityAPI

All URIs are relative to *https://api.stayos.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateInventoryBlock**](AvailabilityAPI.md#CreateInventoryBlock) | **Post** /availability/block | Block inventory
[**DeleteInventoryBlock**](AvailabilityAPI.md#DeleteInventoryBlock) | **Delete** /availability/block/{blockId} | Remove inventory block
[**GetAvailabilityCalendar**](AvailabilityAPI.md#GetAvailabilityCalendar) | **Get** /availability/calendar | Get availability calendar
[**SearchAvailability**](AvailabilityAPI.md#SearchAvailability) | **Post** /availability/search | Search availability
[**UpdateAvailabilityCalendar**](AvailabilityAPI.md#UpdateAvailabilityCalendar) | **Put** /availability/calendar | Update availability calendar (bulk)



## CreateInventoryBlock

> CreateInventoryBlock201Response CreateInventoryBlock(ctx).CreateInventoryBlockRequest(createInventoryBlockRequest).Execute()

Block inventory



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
	createInventoryBlockRequest := *openapiclient.NewCreateInventoryBlockRequest("PropertyId_example", time.Now(), time.Now(), int32(123), "Reason_example") // CreateInventoryBlockRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AvailabilityAPI.CreateInventoryBlock(context.Background()).CreateInventoryBlockRequest(createInventoryBlockRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityAPI.CreateInventoryBlock``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateInventoryBlock`: CreateInventoryBlock201Response
	fmt.Fprintf(os.Stdout, "Response from `AvailabilityAPI.CreateInventoryBlock`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateInventoryBlockRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createInventoryBlockRequest** | [**CreateInventoryBlockRequest**](CreateInventoryBlockRequest.md) |  | 

### Return type

[**CreateInventoryBlock201Response**](CreateInventoryBlock201Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteInventoryBlock

> DeleteInventoryBlock(ctx, blockId).Execute()

Remove inventory block



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
	blockId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.AvailabilityAPI.DeleteInventoryBlock(context.Background(), blockId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityAPI.DeleteInventoryBlock``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteInventoryBlockRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

 (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAvailabilityCalendar

> AvailabilityCalendar GetAvailabilityCalendar(ctx).PropertyId(propertyId).StartDate(startDate).EndDate(endDate).UnitTypeId(unitTypeId).Execute()

Get availability calendar



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
	startDate := time.Now() // string | 
	endDate := time.Now() // string | 
	unitTypeId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AvailabilityAPI.GetAvailabilityCalendar(context.Background()).PropertyId(propertyId).StartDate(startDate).EndDate(endDate).UnitTypeId(unitTypeId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityAPI.GetAvailabilityCalendar``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAvailabilityCalendar`: AvailabilityCalendar
	fmt.Fprintf(os.Stdout, "Response from `AvailabilityAPI.GetAvailabilityCalendar`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAvailabilityCalendarRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **propertyId** | **string** |  | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **unitTypeId** | **string** |  | 

### Return type

[**AvailabilityCalendar**](AvailabilityCalendar.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SearchAvailability

> SearchAvailability200Response SearchAvailability(ctx).SearchAvailabilityRequest(searchAvailabilityRequest).Execute()

Search availability



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
	searchAvailabilityRequest := *openapiclient.NewSearchAvailabilityRequest(time.Now(), time.Now(), *openapiclient.NewSearchAvailabilityRequestOccupancy(int32(2))) // SearchAvailabilityRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AvailabilityAPI.SearchAvailability(context.Background()).SearchAvailabilityRequest(searchAvailabilityRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityAPI.SearchAvailability``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SearchAvailability`: SearchAvailability200Response
	fmt.Fprintf(os.Stdout, "Response from `AvailabilityAPI.SearchAvailability`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSearchAvailabilityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchAvailabilityRequest** | [**SearchAvailabilityRequest**](SearchAvailabilityRequest.md) |  | 

### Return type

[**SearchAvailability200Response**](SearchAvailability200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateAvailabilityCalendar

> UpdateAvailabilityCalendar200Response UpdateAvailabilityCalendar(ctx).UpdateAvailabilityCalendarRequest(updateAvailabilityCalendarRequest).Execute()

Update availability calendar (bulk)



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
	updateAvailabilityCalendarRequest := *openapiclient.NewUpdateAvailabilityCalendarRequest() // UpdateAvailabilityCalendarRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AvailabilityAPI.UpdateAvailabilityCalendar(context.Background()).UpdateAvailabilityCalendarRequest(updateAvailabilityCalendarRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityAPI.UpdateAvailabilityCalendar``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateAvailabilityCalendar`: UpdateAvailabilityCalendar200Response
	fmt.Fprintf(os.Stdout, "Response from `AvailabilityAPI.UpdateAvailabilityCalendar`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateAvailabilityCalendarRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateAvailabilityCalendarRequest** | [**UpdateAvailabilityCalendarRequest**](UpdateAvailabilityCalendarRequest.md) |  | 

### Return type

[**UpdateAvailabilityCalendar200Response**](UpdateAvailabilityCalendar200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

