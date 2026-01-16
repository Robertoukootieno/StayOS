# \PropertiesAPI

All URIs are relative to *https://api.stayos.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateProperty**](PropertiesAPI.md#CreateProperty) | **Post** /properties | Create property
[**DeleteProperty**](PropertiesAPI.md#DeleteProperty) | **Delete** /properties/{propertyId} | Delete property
[**GetProperty**](PropertiesAPI.md#GetProperty) | **Get** /properties/{propertyId} | Get property by ID
[**ListProperties**](PropertiesAPI.md#ListProperties) | **Get** /properties | List properties
[**ReplaceInventoryUnit**](PropertiesAPI.md#ReplaceInventoryUnit) | **Put** /inventory-units/{unitId} | Replace inventory unit (full update)
[**ReplaceProperty**](PropertiesAPI.md#ReplaceProperty) | **Put** /properties/{propertyId} | Replace property (full update)
[**ReplaceRateStrategy**](PropertiesAPI.md#ReplaceRateStrategy) | **Put** /rate-strategies/{strategyId} | Replace rate strategy (full update)
[**UpdateInventoryUnit**](PropertiesAPI.md#UpdateInventoryUnit) | **Patch** /inventory-units/{unitId} | Update inventory unit (partial update)
[**UpdateProperty**](PropertiesAPI.md#UpdateProperty) | **Patch** /properties/{propertyId} | Update property (partial update)
[**UpdateRateStrategy**](PropertiesAPI.md#UpdateRateStrategy) | **Patch** /rate-strategies/{strategyId} | Update rate strategy (partial update)



## CreateProperty

> Property CreateProperty(ctx).Property(property).IdempotencyKey(idempotencyKey).Execute()

Create property



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
	property := *openapiclient.NewProperty("Grand Plaza Hotel", "HOTEL", *openapiclient.NewModel0("125.50", "USD"), "America/New_York") // Property | 
	idempotencyKey := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | Unique key for idempotent operations (UUID recommended) (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PropertiesAPI.CreateProperty(context.Background()).Property(property).IdempotencyKey(idempotencyKey).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PropertiesAPI.CreateProperty``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateProperty`: Property
	fmt.Fprintf(os.Stdout, "Response from `PropertiesAPI.CreateProperty`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreatePropertyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **property** | [**Property**](Property.md) |  | 
 **idempotencyKey** | **string** | Unique key for idempotent operations (UUID recommended) | 

### Return type

[**Property**](Property.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteProperty

> DeleteProperty(ctx, propertyId).Execute()

Delete property



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
	propertyId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | Unique property identifier

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.PropertiesAPI.DeleteProperty(context.Background(), propertyId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PropertiesAPI.DeleteProperty``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**propertyId** | **string** | Unique property identifier | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeletePropertyRequest struct via the builder pattern


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


## GetProperty

> Property GetProperty(ctx, propertyId).Expand(expand).IfNoneMatch(ifNoneMatch).Execute()

Get property by ID



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
	propertyId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | Unique property identifier
	expand := "property,guest,rateStrategy" // string | Comma-separated list of related resources to include (optional)
	ifNoneMatch := "ifNoneMatch_example" // string | ETag for conditional requests (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PropertiesAPI.GetProperty(context.Background(), propertyId).Expand(expand).IfNoneMatch(ifNoneMatch).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PropertiesAPI.GetProperty``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetProperty`: Property
	fmt.Fprintf(os.Stdout, "Response from `PropertiesAPI.GetProperty`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**propertyId** | **string** | Unique property identifier | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPropertyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **expand** | **string** | Comma-separated list of related resources to include | 
 **ifNoneMatch** | **string** | ETag for conditional requests | 

### Return type

[**Property**](Property.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListProperties

> ListProperties200Response ListProperties(ctx).PageSize(pageSize).Cursor(cursor).OrganizationId(organizationId).OperationalStatus(operationalStatus).Classification(classification).SortBy(sortBy).SortOrder(sortOrder).Expand(expand).Execute()

List properties



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
	organizationId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | Filter by organization (optional)
	operationalStatus := "operationalStatus_example" // string | Filter by operational status (optional)
	classification := "classification_example" // string | Filter by property classification (optional)
	sortBy := "sortBy_example" // string | Field to sort by (optional)
	sortOrder := "sortOrder_example" // string | Sort order (optional) (default to "asc")
	expand := "property,guest,rateStrategy" // string | Comma-separated list of related resources to include (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PropertiesAPI.ListProperties(context.Background()).PageSize(pageSize).Cursor(cursor).OrganizationId(organizationId).OperationalStatus(operationalStatus).Classification(classification).SortBy(sortBy).SortOrder(sortOrder).Expand(expand).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PropertiesAPI.ListProperties``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListProperties`: ListProperties200Response
	fmt.Fprintf(os.Stdout, "Response from `PropertiesAPI.ListProperties`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListPropertiesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **int32** | Number of items per page (max 100) | [default to 20]
 **cursor** | **string** | Cursor for pagination (opaque token) | 
 **organizationId** | **string** | Filter by organization | 
 **operationalStatus** | **string** | Filter by operational status | 
 **classification** | **string** | Filter by property classification | 
 **sortBy** | **string** | Field to sort by | 
 **sortOrder** | **string** | Sort order | [default to &quot;asc&quot;]
 **expand** | **string** | Comma-separated list of related resources to include | 

### Return type

[**ListProperties200Response**](ListProperties200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ReplaceInventoryUnit

> map[string]interface{} ReplaceInventoryUnit(ctx, unitId).Body(body).IfMatch(ifMatch).Execute()

Replace inventory unit (full update)



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
	unitId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	body := map[string]interface{}{ ... } // map[string]interface{} | 
	ifMatch := "ifMatch_example" // string | ETag for optimistic locking (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PropertiesAPI.ReplaceInventoryUnit(context.Background(), unitId).Body(body).IfMatch(ifMatch).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PropertiesAPI.ReplaceInventoryUnit``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ReplaceInventoryUnit`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `PropertiesAPI.ReplaceInventoryUnit`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**unitId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiReplaceInventoryUnitRequest struct via the builder pattern


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


## ReplaceProperty

> Property ReplaceProperty(ctx, propertyId).Property(property).IfMatch(ifMatch).Execute()

Replace property (full update)



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
	propertyId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | Unique property identifier
	property := *openapiclient.NewProperty("Grand Plaza Hotel", "HOTEL", *openapiclient.NewModel0("125.50", "USD"), "America/New_York") // Property | 
	ifMatch := "ifMatch_example" // string | ETag for optimistic locking (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PropertiesAPI.ReplaceProperty(context.Background(), propertyId).Property(property).IfMatch(ifMatch).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PropertiesAPI.ReplaceProperty``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ReplaceProperty`: Property
	fmt.Fprintf(os.Stdout, "Response from `PropertiesAPI.ReplaceProperty`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**propertyId** | **string** | Unique property identifier | 

### Other Parameters

Other parameters are passed through a pointer to a apiReplacePropertyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **property** | [**Property**](Property.md) |  | 
 **ifMatch** | **string** | ETag for optimistic locking | 

### Return type

[**Property**](Property.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ReplaceRateStrategy

> RateStrategy ReplaceRateStrategy(ctx, strategyId).RateStrategy(rateStrategy).IfMatch(ifMatch).Execute()

Replace rate strategy (full update)



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
	strategyId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	rateStrategy := *openapiclient.NewRateStrategy("550e8400-e29b-41d4-a716-446655440000", "Standard Flexible Rate", "STANDARD", *openapiclient.NewModel0("125.50", "USD")) // RateStrategy | 
	ifMatch := "ifMatch_example" // string | ETag for optimistic locking (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PropertiesAPI.ReplaceRateStrategy(context.Background(), strategyId).RateStrategy(rateStrategy).IfMatch(ifMatch).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PropertiesAPI.ReplaceRateStrategy``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ReplaceRateStrategy`: RateStrategy
	fmt.Fprintf(os.Stdout, "Response from `PropertiesAPI.ReplaceRateStrategy`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**strategyId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiReplaceRateStrategyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **rateStrategy** | [**RateStrategy**](RateStrategy.md) |  | 
 **ifMatch** | **string** | ETag for optimistic locking | 

### Return type

[**RateStrategy**](RateStrategy.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateInventoryUnit

> map[string]interface{} UpdateInventoryUnit(ctx, unitId).Body(body).IfMatch(ifMatch).Execute()

Update inventory unit (partial update)



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
	unitId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	body := map[string]interface{}{ ... } // map[string]interface{} | 
	ifMatch := "ifMatch_example" // string | ETag for optimistic locking (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PropertiesAPI.UpdateInventoryUnit(context.Background(), unitId).Body(body).IfMatch(ifMatch).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PropertiesAPI.UpdateInventoryUnit``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateInventoryUnit`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `PropertiesAPI.UpdateInventoryUnit`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**unitId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateInventoryUnitRequest struct via the builder pattern


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


## UpdateProperty

> Property UpdateProperty(ctx, propertyId).Body(body).IfMatch(ifMatch).Execute()

Update property (partial update)



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
	propertyId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | Unique property identifier
	body := map[string]interface{}{ ... } // map[string]interface{} | 
	ifMatch := "ifMatch_example" // string | ETag for optimistic locking (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PropertiesAPI.UpdateProperty(context.Background(), propertyId).Body(body).IfMatch(ifMatch).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PropertiesAPI.UpdateProperty``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateProperty`: Property
	fmt.Fprintf(os.Stdout, "Response from `PropertiesAPI.UpdateProperty`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**propertyId** | **string** | Unique property identifier | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdatePropertyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **body** | **map[string]interface{}** |  | 
 **ifMatch** | **string** | ETag for optimistic locking | 

### Return type

[**Property**](Property.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateRateStrategy

> RateStrategy UpdateRateStrategy(ctx, strategyId).Body(body).IfMatch(ifMatch).Execute()

Update rate strategy (partial update)



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
	strategyId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	body := map[string]interface{}{ ... } // map[string]interface{} | 
	ifMatch := "ifMatch_example" // string | ETag for optimistic locking (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PropertiesAPI.UpdateRateStrategy(context.Background(), strategyId).Body(body).IfMatch(ifMatch).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PropertiesAPI.UpdateRateStrategy``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateRateStrategy`: RateStrategy
	fmt.Fprintf(os.Stdout, "Response from `PropertiesAPI.UpdateRateStrategy`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**strategyId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateRateStrategyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **body** | **map[string]interface{}** |  | 
 **ifMatch** | **string** | ETag for optimistic locking | 

### Return type

[**RateStrategy**](RateStrategy.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

