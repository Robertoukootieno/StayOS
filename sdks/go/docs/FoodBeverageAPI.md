# \FoodBeverageAPI

All URIs are relative to *https://api.stayos.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CancelFBOrder**](FoodBeverageAPI.md#CancelFBOrder) | **Post** /fb/orders/{orderId}/cancel | Cancel F&amp;B order
[**ConfirmFBOrder**](FoodBeverageAPI.md#ConfirmFBOrder) | **Post** /fb/orders/{orderId}/confirm | Confirm F&amp;B order
[**ConsumeFBInventory**](FoodBeverageAPI.md#ConsumeFBInventory) | **Post** /fb/inventory/{itemId}/consume | Record consumption
[**CountFBInventory**](FoodBeverageAPI.md#CountFBInventory) | **Post** /fb/inventory/count | Perform stock count
[**CreateFBInventoryItem**](FoodBeverageAPI.md#CreateFBInventoryItem) | **Post** /fb/inventory | Create inventory item
[**CreateFBOrder**](FoodBeverageAPI.md#CreateFBOrder) | **Post** /fb/orders | Create F&amp;B order
[**CreateMenuItem**](FoodBeverageAPI.md#CreateMenuItem) | **Post** /fb/menu | Create menu item
[**GetFBInventoryItem**](FoodBeverageAPI.md#GetFBInventoryItem) | **Get** /fb/inventory/{itemId} | Get inventory item details
[**GetMenuItem**](FoodBeverageAPI.md#GetMenuItem) | **Get** /fb/menu/{itemId} | Get menu item details
[**ListFBInventory**](FoodBeverageAPI.md#ListFBInventory) | **Get** /fb/inventory | List F&amp;B inventory items
[**ListFBOrders**](FoodBeverageAPI.md#ListFBOrders) | **Get** /fb/orders | List F&amp;B orders
[**ListMenuItems**](FoodBeverageAPI.md#ListMenuItems) | **Get** /fb/menu | List menu items
[**MarkFBItemReady**](FoodBeverageAPI.md#MarkFBItemReady) | **Post** /fb/orders/{orderId}/items/{itemId}/ready | Mark item as ready
[**ReceiveFBInventory**](FoodBeverageAPI.md#ReceiveFBInventory) | **Post** /fb/inventory/{itemId}/receive | Receive stock
[**ReplaceFBOrder**](FoodBeverageAPI.md#ReplaceFBOrder) | **Put** /fb/orders/{orderId} | Replace F&amp;B order (full update)
[**ReplaceMenuItem**](FoodBeverageAPI.md#ReplaceMenuItem) | **Put** /fb/menu/{itemId} | Replace menu item (full update)
[**ServeFBOrder**](FoodBeverageAPI.md#ServeFBOrder) | **Post** /fb/orders/{orderId}/serve | Mark order as served
[**UpdateFBInventoryItem**](FoodBeverageAPI.md#UpdateFBInventoryItem) | **Put** /fb/inventory/{itemId} | Update inventory item
[**UpdateFBOrder**](FoodBeverageAPI.md#UpdateFBOrder) | **Patch** /fb/orders/{orderId} | Update F&amp;B order (partial update)
[**UpdateMenuItem**](FoodBeverageAPI.md#UpdateMenuItem) | **Patch** /fb/menu/{itemId} | Update menu item (partial update)
[**WasteFBInventory**](FoodBeverageAPI.md#WasteFBInventory) | **Post** /fb/inventory/{itemId}/waste | Record waste



## CancelFBOrder

> FBOrder CancelFBOrder(ctx, orderId).CancelServiceRequestRequest(cancelServiceRequestRequest).Execute()

Cancel F&B order



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
	orderId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	cancelServiceRequestRequest := *openapiclient.NewCancelServiceRequestRequest() // CancelServiceRequestRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FoodBeverageAPI.CancelFBOrder(context.Background(), orderId).CancelServiceRequestRequest(cancelServiceRequestRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FoodBeverageAPI.CancelFBOrder``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CancelFBOrder`: FBOrder
	fmt.Fprintf(os.Stdout, "Response from `FoodBeverageAPI.CancelFBOrder`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**orderId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiCancelFBOrderRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **cancelServiceRequestRequest** | [**CancelServiceRequestRequest**](CancelServiceRequestRequest.md) |  | 

### Return type

[**FBOrder**](FBOrder.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ConfirmFBOrder

> FBOrder ConfirmFBOrder(ctx, orderId).ConfirmFBOrderRequest(confirmFBOrderRequest).Execute()

Confirm F&B order



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
	orderId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	confirmFBOrderRequest := *openapiclient.NewConfirmFBOrderRequest() // ConfirmFBOrderRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FoodBeverageAPI.ConfirmFBOrder(context.Background(), orderId).ConfirmFBOrderRequest(confirmFBOrderRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FoodBeverageAPI.ConfirmFBOrder``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ConfirmFBOrder`: FBOrder
	fmt.Fprintf(os.Stdout, "Response from `FoodBeverageAPI.ConfirmFBOrder`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**orderId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiConfirmFBOrderRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **confirmFBOrderRequest** | [**ConfirmFBOrderRequest**](ConfirmFBOrderRequest.md) |  | 

### Return type

[**FBOrder**](FBOrder.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ConsumeFBInventory

> FBInventoryItem ConsumeFBInventory(ctx, itemId).ReceiveFBInventoryRequest(receiveFBInventoryRequest).Execute()

Record consumption



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
	itemId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	receiveFBInventoryRequest := *openapiclient.NewReceiveFBInventoryRequest(float32(123)) // ReceiveFBInventoryRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FoodBeverageAPI.ConsumeFBInventory(context.Background(), itemId).ReceiveFBInventoryRequest(receiveFBInventoryRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FoodBeverageAPI.ConsumeFBInventory``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ConsumeFBInventory`: FBInventoryItem
	fmt.Fprintf(os.Stdout, "Response from `FoodBeverageAPI.ConsumeFBInventory`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**itemId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiConsumeFBInventoryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **receiveFBInventoryRequest** | [**ReceiveFBInventoryRequest**](ReceiveFBInventoryRequest.md) |  | 

### Return type

[**FBInventoryItem**](FBInventoryItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CountFBInventory

> CountFBInventory200Response CountFBInventory(ctx).CountFBInventoryRequest(countFBInventoryRequest).Execute()

Perform stock count



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
	countFBInventoryRequest := *openapiclient.NewCountFBInventoryRequest([]openapiclient.CountFBInventoryRequestCountsInner{*openapiclient.NewCountFBInventoryRequestCountsInner("ItemId_example", float32(123))}) // CountFBInventoryRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FoodBeverageAPI.CountFBInventory(context.Background()).CountFBInventoryRequest(countFBInventoryRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FoodBeverageAPI.CountFBInventory``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CountFBInventory`: CountFBInventory200Response
	fmt.Fprintf(os.Stdout, "Response from `FoodBeverageAPI.CountFBInventory`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCountFBInventoryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countFBInventoryRequest** | [**CountFBInventoryRequest**](CountFBInventoryRequest.md) |  | 

### Return type

[**CountFBInventory200Response**](CountFBInventory200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateFBInventoryItem

> FBInventoryItem CreateFBInventoryItem(ctx).FBInventoryItem(fBInventoryItem).Execute()

Create inventory item



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
	fBInventoryItem := *openapiclient.NewFBInventoryItem("InventoryItemId_example", "Tomatoes", "KG", float32(123)) // FBInventoryItem | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FoodBeverageAPI.CreateFBInventoryItem(context.Background()).FBInventoryItem(fBInventoryItem).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FoodBeverageAPI.CreateFBInventoryItem``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateFBInventoryItem`: FBInventoryItem
	fmt.Fprintf(os.Stdout, "Response from `FoodBeverageAPI.CreateFBInventoryItem`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateFBInventoryItemRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fBInventoryItem** | [**FBInventoryItem**](FBInventoryItem.md) |  | 

### Return type

[**FBInventoryItem**](FBInventoryItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateFBOrder

> map[string]interface{} CreateFBOrder(ctx).Body(body).Execute()

Create F&B order



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
	resp, r, err := apiClient.FoodBeverageAPI.CreateFBOrder(context.Background()).Body(body).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FoodBeverageAPI.CreateFBOrder``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateFBOrder`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `FoodBeverageAPI.CreateFBOrder`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateFBOrderRequest struct via the builder pattern


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


## CreateMenuItem

> MenuItem CreateMenuItem(ctx).MenuItem(menuItem).Execute()

Create menu item



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
	menuItem := *openapiclient.NewMenuItem("ItemId_example", "Caesar Salad", "APPETIZER", *openapiclient.NewModel0("125.50", "USD"), false) // MenuItem | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FoodBeverageAPI.CreateMenuItem(context.Background()).MenuItem(menuItem).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FoodBeverageAPI.CreateMenuItem``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateMenuItem`: MenuItem
	fmt.Fprintf(os.Stdout, "Response from `FoodBeverageAPI.CreateMenuItem`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateMenuItemRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **menuItem** | [**MenuItem**](MenuItem.md) |  | 

### Return type

[**MenuItem**](MenuItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFBInventoryItem

> FBInventoryItem GetFBInventoryItem(ctx, itemId).Execute()

Get inventory item details



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
	itemId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FoodBeverageAPI.GetFBInventoryItem(context.Background(), itemId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FoodBeverageAPI.GetFBInventoryItem``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetFBInventoryItem`: FBInventoryItem
	fmt.Fprintf(os.Stdout, "Response from `FoodBeverageAPI.GetFBInventoryItem`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**itemId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFBInventoryItemRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**FBInventoryItem**](FBInventoryItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetMenuItem

> MenuItem GetMenuItem(ctx, itemId).Execute()

Get menu item details



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
	itemId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FoodBeverageAPI.GetMenuItem(context.Background(), itemId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FoodBeverageAPI.GetMenuItem``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetMenuItem`: MenuItem
	fmt.Fprintf(os.Stdout, "Response from `FoodBeverageAPI.GetMenuItem`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**itemId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMenuItemRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**MenuItem**](MenuItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListFBInventory

> ListFBInventory200Response ListFBInventory(ctx).PropertyId(propertyId).LowStock(lowStock).PageSize(pageSize).Cursor(cursor).Execute()

List F&B inventory items



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
	lowStock := true // bool |  (optional)
	pageSize := int32(56) // int32 | Number of items per page (max 100) (optional) (default to 20)
	cursor := "cursor_example" // string | Cursor for pagination (opaque token) (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FoodBeverageAPI.ListFBInventory(context.Background()).PropertyId(propertyId).LowStock(lowStock).PageSize(pageSize).Cursor(cursor).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FoodBeverageAPI.ListFBInventory``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListFBInventory`: ListFBInventory200Response
	fmt.Fprintf(os.Stdout, "Response from `FoodBeverageAPI.ListFBInventory`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListFBInventoryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **propertyId** | **string** |  | 
 **lowStock** | **bool** |  | 
 **pageSize** | **int32** | Number of items per page (max 100) | [default to 20]
 **cursor** | **string** | Cursor for pagination (opaque token) | 

### Return type

[**ListFBInventory200Response**](ListFBInventory200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListFBOrders

> GetGuestStays200Response ListFBOrders(ctx).PropertyId(propertyId).Status(status).PageSize(pageSize).Cursor(cursor).Execute()

List F&B orders



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
	resp, r, err := apiClient.FoodBeverageAPI.ListFBOrders(context.Background()).PropertyId(propertyId).Status(status).PageSize(pageSize).Cursor(cursor).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FoodBeverageAPI.ListFBOrders``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListFBOrders`: GetGuestStays200Response
	fmt.Fprintf(os.Stdout, "Response from `FoodBeverageAPI.ListFBOrders`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListFBOrdersRequest struct via the builder pattern


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


## ListMenuItems

> ListMenuItems200Response ListMenuItems(ctx).PropertyId(propertyId).Venue(venue).IsAvailable(isAvailable).PageSize(pageSize).Cursor(cursor).Execute()

List menu items



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
	venue := "venue_example" // string |  (optional)
	isAvailable := true // bool |  (optional)
	pageSize := int32(56) // int32 | Number of items per page (max 100) (optional) (default to 20)
	cursor := "cursor_example" // string | Cursor for pagination (opaque token) (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FoodBeverageAPI.ListMenuItems(context.Background()).PropertyId(propertyId).Venue(venue).IsAvailable(isAvailable).PageSize(pageSize).Cursor(cursor).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FoodBeverageAPI.ListMenuItems``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListMenuItems`: ListMenuItems200Response
	fmt.Fprintf(os.Stdout, "Response from `FoodBeverageAPI.ListMenuItems`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListMenuItemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **propertyId** | **string** |  | 
 **venue** | **string** |  | 
 **isAvailable** | **bool** |  | 
 **pageSize** | **int32** | Number of items per page (max 100) | [default to 20]
 **cursor** | **string** | Cursor for pagination (opaque token) | 

### Return type

[**ListMenuItems200Response**](ListMenuItems200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## MarkFBItemReady

> FBOrder MarkFBItemReady(ctx, orderId, itemId).Execute()

Mark item as ready



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
	orderId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	itemId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FoodBeverageAPI.MarkFBItemReady(context.Background(), orderId, itemId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FoodBeverageAPI.MarkFBItemReady``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `MarkFBItemReady`: FBOrder
	fmt.Fprintf(os.Stdout, "Response from `FoodBeverageAPI.MarkFBItemReady`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**orderId** | **string** |  | 
**itemId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiMarkFBItemReadyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**FBOrder**](FBOrder.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ReceiveFBInventory

> FBInventoryItem ReceiveFBInventory(ctx, itemId).ReceiveFBInventoryRequest(receiveFBInventoryRequest).Execute()

Receive stock



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
	itemId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	receiveFBInventoryRequest := *openapiclient.NewReceiveFBInventoryRequest(float32(123)) // ReceiveFBInventoryRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FoodBeverageAPI.ReceiveFBInventory(context.Background(), itemId).ReceiveFBInventoryRequest(receiveFBInventoryRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FoodBeverageAPI.ReceiveFBInventory``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ReceiveFBInventory`: FBInventoryItem
	fmt.Fprintf(os.Stdout, "Response from `FoodBeverageAPI.ReceiveFBInventory`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**itemId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiReceiveFBInventoryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **receiveFBInventoryRequest** | [**ReceiveFBInventoryRequest**](ReceiveFBInventoryRequest.md) |  | 

### Return type

[**FBInventoryItem**](FBInventoryItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ReplaceFBOrder

> map[string]interface{} ReplaceFBOrder(ctx, orderId).Body(body).IfMatch(ifMatch).Execute()

Replace F&B order (full update)



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
	orderId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	body := map[string]interface{}{ ... } // map[string]interface{} | 
	ifMatch := "ifMatch_example" // string | ETag for optimistic locking (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FoodBeverageAPI.ReplaceFBOrder(context.Background(), orderId).Body(body).IfMatch(ifMatch).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FoodBeverageAPI.ReplaceFBOrder``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ReplaceFBOrder`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `FoodBeverageAPI.ReplaceFBOrder`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**orderId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiReplaceFBOrderRequest struct via the builder pattern


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


## ReplaceMenuItem

> map[string]interface{} ReplaceMenuItem(ctx, itemId).Body(body).IfMatch(ifMatch).Execute()

Replace menu item (full update)



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
	itemId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	body := map[string]interface{}{ ... } // map[string]interface{} | 
	ifMatch := "ifMatch_example" // string | ETag for optimistic locking (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FoodBeverageAPI.ReplaceMenuItem(context.Background(), itemId).Body(body).IfMatch(ifMatch).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FoodBeverageAPI.ReplaceMenuItem``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ReplaceMenuItem`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `FoodBeverageAPI.ReplaceMenuItem`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**itemId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiReplaceMenuItemRequest struct via the builder pattern


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


## ServeFBOrder

> FBOrder ServeFBOrder(ctx, orderId).ServeFBOrderRequest(serveFBOrderRequest).Execute()

Mark order as served



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
	orderId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	serveFBOrderRequest := *openapiclient.NewServeFBOrderRequest() // ServeFBOrderRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FoodBeverageAPI.ServeFBOrder(context.Background(), orderId).ServeFBOrderRequest(serveFBOrderRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FoodBeverageAPI.ServeFBOrder``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ServeFBOrder`: FBOrder
	fmt.Fprintf(os.Stdout, "Response from `FoodBeverageAPI.ServeFBOrder`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**orderId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiServeFBOrderRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **serveFBOrderRequest** | [**ServeFBOrderRequest**](ServeFBOrderRequest.md) |  | 

### Return type

[**FBOrder**](FBOrder.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateFBInventoryItem

> FBInventoryItem UpdateFBInventoryItem(ctx, itemId).FBInventoryItem(fBInventoryItem).Execute()

Update inventory item



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
	itemId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	fBInventoryItem := *openapiclient.NewFBInventoryItem("InventoryItemId_example", "Tomatoes", "KG", float32(123)) // FBInventoryItem | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FoodBeverageAPI.UpdateFBInventoryItem(context.Background(), itemId).FBInventoryItem(fBInventoryItem).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FoodBeverageAPI.UpdateFBInventoryItem``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateFBInventoryItem`: FBInventoryItem
	fmt.Fprintf(os.Stdout, "Response from `FoodBeverageAPI.UpdateFBInventoryItem`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**itemId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateFBInventoryItemRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fBInventoryItem** | [**FBInventoryItem**](FBInventoryItem.md) |  | 

### Return type

[**FBInventoryItem**](FBInventoryItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateFBOrder

> map[string]interface{} UpdateFBOrder(ctx, orderId).Body(body).IfMatch(ifMatch).Execute()

Update F&B order (partial update)



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
	orderId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	body := map[string]interface{}{ ... } // map[string]interface{} | 
	ifMatch := "ifMatch_example" // string | ETag for optimistic locking (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FoodBeverageAPI.UpdateFBOrder(context.Background(), orderId).Body(body).IfMatch(ifMatch).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FoodBeverageAPI.UpdateFBOrder``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateFBOrder`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `FoodBeverageAPI.UpdateFBOrder`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**orderId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateFBOrderRequest struct via the builder pattern


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


## UpdateMenuItem

> map[string]interface{} UpdateMenuItem(ctx, itemId).Body(body).IfMatch(ifMatch).Execute()

Update menu item (partial update)



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
	itemId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	body := map[string]interface{}{ ... } // map[string]interface{} | 
	ifMatch := "ifMatch_example" // string | ETag for optimistic locking (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FoodBeverageAPI.UpdateMenuItem(context.Background(), itemId).Body(body).IfMatch(ifMatch).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FoodBeverageAPI.UpdateMenuItem``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateMenuItem`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `FoodBeverageAPI.UpdateMenuItem`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**itemId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateMenuItemRequest struct via the builder pattern


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


## WasteFBInventory

> FBInventoryItem WasteFBInventory(ctx, itemId).WasteFBInventoryRequest(wasteFBInventoryRequest).Execute()

Record waste



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
	itemId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	wasteFBInventoryRequest := *openapiclient.NewWasteFBInventoryRequest(float32(123), "Reason_example") // WasteFBInventoryRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.FoodBeverageAPI.WasteFBInventory(context.Background(), itemId).WasteFBInventoryRequest(wasteFBInventoryRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FoodBeverageAPI.WasteFBInventory``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `WasteFBInventory`: FBInventoryItem
	fmt.Fprintf(os.Stdout, "Response from `FoodBeverageAPI.WasteFBInventory`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**itemId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiWasteFBInventoryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **wasteFBInventoryRequest** | [**WasteFBInventoryRequest**](WasteFBInventoryRequest.md) |  | 

### Return type

[**FBInventoryItem**](FBInventoryItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

