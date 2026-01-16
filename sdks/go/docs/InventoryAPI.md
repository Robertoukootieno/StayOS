# \InventoryAPI

All URIs are relative to *https://api.stayos.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateInventoryUnit**](InventoryAPI.md#CreateInventoryUnit) | **Post** /properties/{propertyId}/inventory-units | Create inventory unit
[**CreateUnitType**](InventoryAPI.md#CreateUnitType) | **Post** /properties/{propertyId}/unit-types | Create unit type
[**GetUnitType**](InventoryAPI.md#GetUnitType) | **Get** /unit-types/{unitTypeId} | Get unit type details
[**ListInventoryUnits**](InventoryAPI.md#ListInventoryUnits) | **Get** /properties/{propertyId}/inventory-units | List inventory units for property
[**ListUnitTypes**](InventoryAPI.md#ListUnitTypes) | **Get** /properties/{propertyId}/unit-types | List unit types
[**ReplaceUnitType**](InventoryAPI.md#ReplaceUnitType) | **Put** /unit-types/{unitTypeId} | Replace unit type (full update)
[**UpdateUnitType**](InventoryAPI.md#UpdateUnitType) | **Patch** /unit-types/{unitTypeId} | Update unit type (partial update)



## CreateInventoryUnit

> InventoryUnit CreateInventoryUnit(ctx, propertyId).InventoryUnit(inventoryUnit).IdempotencyKey(idempotencyKey).Execute()

Create inventory unit



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
	inventoryUnit := *openapiclient.NewInventoryUnit("550e8400-e29b-41d4-a716-446655440000", "101", "880e8400-e29b-41d4-a716-446655440000") // InventoryUnit | 
	idempotencyKey := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | Unique key for idempotent operations (UUID recommended) (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InventoryAPI.CreateInventoryUnit(context.Background(), propertyId).InventoryUnit(inventoryUnit).IdempotencyKey(idempotencyKey).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InventoryAPI.CreateInventoryUnit``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateInventoryUnit`: InventoryUnit
	fmt.Fprintf(os.Stdout, "Response from `InventoryAPI.CreateInventoryUnit`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**propertyId** | **string** | Unique property identifier | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateInventoryUnitRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **inventoryUnit** | [**InventoryUnit**](InventoryUnit.md) |  | 
 **idempotencyKey** | **string** | Unique key for idempotent operations (UUID recommended) | 

### Return type

[**InventoryUnit**](InventoryUnit.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateUnitType

> UnitType CreateUnitType(ctx, propertyId).UnitType(unitType).Execute()

Create unit type



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
	unitType := *openapiclient.NewUnitType("Deluxe King Room", *openapiclient.NewModel0("125.50", "USD")) // UnitType | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InventoryAPI.CreateUnitType(context.Background(), propertyId).UnitType(unitType).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InventoryAPI.CreateUnitType``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateUnitType`: UnitType
	fmt.Fprintf(os.Stdout, "Response from `InventoryAPI.CreateUnitType`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**propertyId** | **string** | Unique property identifier | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateUnitTypeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **unitType** | [**UnitType**](UnitType.md) |  | 

### Return type

[**UnitType**](UnitType.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetUnitType

> UnitType GetUnitType(ctx, unitTypeId).Execute()

Get unit type details



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
	unitTypeId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InventoryAPI.GetUnitType(context.Background(), unitTypeId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InventoryAPI.GetUnitType``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetUnitType`: UnitType
	fmt.Fprintf(os.Stdout, "Response from `InventoryAPI.GetUnitType`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**unitTypeId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetUnitTypeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**UnitType**](UnitType.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListInventoryUnits

> ListInventoryUnits200Response ListInventoryUnits(ctx, propertyId).PageSize(pageSize).Cursor(cursor).UnitTypeId(unitTypeId).OperationalStatus(operationalStatus).Floor(floor).Execute()

List inventory units for property



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
	pageSize := int32(56) // int32 | Number of items per page (max 100) (optional) (default to 20)
	cursor := "cursor_example" // string | Cursor for pagination (opaque token) (optional)
	unitTypeId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | Filter by unit type (optional)
	operationalStatus := "operationalStatus_example" // string | Filter by operational status (optional)
	floor := int32(56) // int32 | Filter by floor number (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InventoryAPI.ListInventoryUnits(context.Background(), propertyId).PageSize(pageSize).Cursor(cursor).UnitTypeId(unitTypeId).OperationalStatus(operationalStatus).Floor(floor).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InventoryAPI.ListInventoryUnits``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListInventoryUnits`: ListInventoryUnits200Response
	fmt.Fprintf(os.Stdout, "Response from `InventoryAPI.ListInventoryUnits`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**propertyId** | **string** | Unique property identifier | 

### Other Parameters

Other parameters are passed through a pointer to a apiListInventoryUnitsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **pageSize** | **int32** | Number of items per page (max 100) | [default to 20]
 **cursor** | **string** | Cursor for pagination (opaque token) | 
 **unitTypeId** | **string** | Filter by unit type | 
 **operationalStatus** | **string** | Filter by operational status | 
 **floor** | **int32** | Filter by floor number | 

### Return type

[**ListInventoryUnits200Response**](ListInventoryUnits200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListUnitTypes

> ListUnitTypes200Response ListUnitTypes(ctx, propertyId).PageSize(pageSize).Cursor(cursor).Execute()

List unit types



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
	pageSize := int32(56) // int32 | Number of items per page (max 100) (optional) (default to 20)
	cursor := "cursor_example" // string | Cursor for pagination (opaque token) (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InventoryAPI.ListUnitTypes(context.Background(), propertyId).PageSize(pageSize).Cursor(cursor).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InventoryAPI.ListUnitTypes``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListUnitTypes`: ListUnitTypes200Response
	fmt.Fprintf(os.Stdout, "Response from `InventoryAPI.ListUnitTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**propertyId** | **string** | Unique property identifier | 

### Other Parameters

Other parameters are passed through a pointer to a apiListUnitTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **pageSize** | **int32** | Number of items per page (max 100) | [default to 20]
 **cursor** | **string** | Cursor for pagination (opaque token) | 

### Return type

[**ListUnitTypes200Response**](ListUnitTypes200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ReplaceUnitType

> UnitType ReplaceUnitType(ctx, unitTypeId).UnitType(unitType).IfMatch(ifMatch).Execute()

Replace unit type (full update)



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
	unitTypeId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	unitType := *openapiclient.NewUnitType("Deluxe King Room", *openapiclient.NewModel0("125.50", "USD")) // UnitType | 
	ifMatch := "ifMatch_example" // string | ETag for optimistic locking (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InventoryAPI.ReplaceUnitType(context.Background(), unitTypeId).UnitType(unitType).IfMatch(ifMatch).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InventoryAPI.ReplaceUnitType``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ReplaceUnitType`: UnitType
	fmt.Fprintf(os.Stdout, "Response from `InventoryAPI.ReplaceUnitType`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**unitTypeId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiReplaceUnitTypeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **unitType** | [**UnitType**](UnitType.md) |  | 
 **ifMatch** | **string** | ETag for optimistic locking | 

### Return type

[**UnitType**](UnitType.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateUnitType

> UnitType UpdateUnitType(ctx, unitTypeId).Body(body).IfMatch(ifMatch).Execute()

Update unit type (partial update)



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
	unitTypeId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	body := map[string]interface{}{ ... } // map[string]interface{} | 
	ifMatch := "ifMatch_example" // string | ETag for optimistic locking (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InventoryAPI.UpdateUnitType(context.Background(), unitTypeId).Body(body).IfMatch(ifMatch).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InventoryAPI.UpdateUnitType``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateUnitType`: UnitType
	fmt.Fprintf(os.Stdout, "Response from `InventoryAPI.UpdateUnitType`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**unitTypeId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateUnitTypeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **body** | **map[string]interface{}** |  | 
 **ifMatch** | **string** | ETag for optimistic locking | 

### Return type

[**UnitType**](UnitType.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

