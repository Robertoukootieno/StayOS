# \StaysAPI

All URIs are relative to *https://api.stayos.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AddStayCharge**](StaysAPI.md#AddStayCharge) | **Post** /stays/{stayId}/charges | Add incidental charge
[**CheckoutStay**](StaysAPI.md#CheckoutStay) | **Post** /stays/{stayId}/checkout | Check-out guest
[**CreateStay**](StaysAPI.md#CreateStay) | **Post** /stays | Create stay (check-in)
[**DeactivateKeyCard**](StaysAPI.md#DeactivateKeyCard) | **Delete** /stays/{stayId}/key-cards/{cardId} | Deactivate key card
[**ExtendStay**](StaysAPI.md#ExtendStay) | **Post** /stays/{stayId}/extend | Extend stay
[**GetStay**](StaysAPI.md#GetStay) | **Get** /stays/{stayId} | Get stay details
[**IssueKeyCard**](StaysAPI.md#IssueKeyCard) | **Post** /stays/{stayId}/key-cards | Issue key card
[**ListStays**](StaysAPI.md#ListStays) | **Get** /stays | List active stays
[**ReplaceStay**](StaysAPI.md#ReplaceStay) | **Put** /stays/{stayId} | Replace stay (full update)
[**UpdateStay**](StaysAPI.md#UpdateStay) | **Patch** /stays/{stayId} | Update stay (partial update)



## AddStayCharge

> LineItem AddStayCharge(ctx, stayId).LineItem(lineItem).Execute()

Add incidental charge



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
	stayId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	lineItem := *openapiclient.NewLineItem("LineItemId_example", "Room charge - Night 1", "ROOM", *openapiclient.NewModel0("125.50", "USD")) // LineItem | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.StaysAPI.AddStayCharge(context.Background(), stayId).LineItem(lineItem).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `StaysAPI.AddStayCharge``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `AddStayCharge`: LineItem
	fmt.Fprintf(os.Stdout, "Response from `StaysAPI.AddStayCharge`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**stayId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiAddStayChargeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **lineItem** | [**LineItem**](LineItem.md) |  | 

### Return type

[**LineItem**](LineItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CheckoutStay

> Stay CheckoutStay(ctx, stayId).CheckoutStayRequest(checkoutStayRequest).Execute()

Check-out guest



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
	stayId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	checkoutStayRequest := *openapiclient.NewCheckoutStayRequest() // CheckoutStayRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.StaysAPI.CheckoutStay(context.Background(), stayId).CheckoutStayRequest(checkoutStayRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `StaysAPI.CheckoutStay``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CheckoutStay`: Stay
	fmt.Fprintf(os.Stdout, "Response from `StaysAPI.CheckoutStay`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**stayId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiCheckoutStayRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **checkoutStayRequest** | [**CheckoutStayRequest**](CheckoutStayRequest.md) |  | 

### Return type

[**Stay**](Stay.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateStay

> Stay CreateStay(ctx).Stay(stay).Execute()

Create stay (check-in)



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
	stay := *openapiclient.NewStay("aa0e8400-e29b-41d4-a716-446655440000", "550e8400-e29b-41d4-a716-446655440000", "660e8400-e29b-41d4-a716-446655440000", "770e8400-e29b-41d4-a716-446655440000", "880e8400-e29b-41d4-a716-446655440000", time.Now(), time.Now(), "IN_HOUSE") // Stay | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.StaysAPI.CreateStay(context.Background()).Stay(stay).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `StaysAPI.CreateStay``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateStay`: Stay
	fmt.Fprintf(os.Stdout, "Response from `StaysAPI.CreateStay`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateStayRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stay** | [**Stay**](Stay.md) |  | 

### Return type

[**Stay**](Stay.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeactivateKeyCard

> DeactivateKeyCard(ctx, stayId, cardId).Execute()

Deactivate key card



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
	stayId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	cardId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.StaysAPI.DeactivateKeyCard(context.Background(), stayId, cardId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `StaysAPI.DeactivateKeyCard``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**stayId** | **string** |  | 
**cardId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeactivateKeyCardRequest struct via the builder pattern


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


## ExtendStay

> Stay ExtendStay(ctx, stayId).ExtendStayRequest(extendStayRequest).Execute()

Extend stay



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
	stayId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	extendStayRequest := *openapiclient.NewExtendStayRequest(time.Now()) // ExtendStayRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.StaysAPI.ExtendStay(context.Background(), stayId).ExtendStayRequest(extendStayRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `StaysAPI.ExtendStay``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ExtendStay`: Stay
	fmt.Fprintf(os.Stdout, "Response from `StaysAPI.ExtendStay`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**stayId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiExtendStayRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **extendStayRequest** | [**ExtendStayRequest**](ExtendStayRequest.md) |  | 

### Return type

[**Stay**](Stay.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetStay

> Stay GetStay(ctx, stayId).Execute()

Get stay details



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
	stayId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.StaysAPI.GetStay(context.Background(), stayId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `StaysAPI.GetStay``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetStay`: Stay
	fmt.Fprintf(os.Stdout, "Response from `StaysAPI.GetStay`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**stayId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetStayRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Stay**](Stay.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## IssueKeyCard

> KeyCard IssueKeyCard(ctx, stayId).KeyCard(keyCard).Execute()

Issue key card



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
	stayId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	keyCard := *openapiclient.NewKeyCard("CardId_example", "KC-12345678", "ACTIVE") // KeyCard |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.StaysAPI.IssueKeyCard(context.Background(), stayId).KeyCard(keyCard).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `StaysAPI.IssueKeyCard``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `IssueKeyCard`: KeyCard
	fmt.Fprintf(os.Stdout, "Response from `StaysAPI.IssueKeyCard`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**stayId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiIssueKeyCardRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **keyCard** | [**KeyCard**](KeyCard.md) |  | 

### Return type

[**KeyCard**](KeyCard.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListStays

> ListStays200Response ListStays(ctx).PageSize(pageSize).Cursor(cursor).PropertyId(propertyId).Status(status).Execute()

List active stays



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
	propertyId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string |  (optional)
	status := "status_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.StaysAPI.ListStays(context.Background()).PageSize(pageSize).Cursor(cursor).PropertyId(propertyId).Status(status).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `StaysAPI.ListStays``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListStays`: ListStays200Response
	fmt.Fprintf(os.Stdout, "Response from `StaysAPI.ListStays`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListStaysRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **int32** | Number of items per page (max 100) | [default to 20]
 **cursor** | **string** | Cursor for pagination (opaque token) | 
 **propertyId** | **string** |  | 
 **status** | **string** |  | 

### Return type

[**ListStays200Response**](ListStays200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ReplaceStay

> Stay ReplaceStay(ctx, stayId).Stay(stay).IfMatch(ifMatch).Execute()

Replace stay (full update)



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
	stayId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	stay := *openapiclient.NewStay("aa0e8400-e29b-41d4-a716-446655440000", "550e8400-e29b-41d4-a716-446655440000", "660e8400-e29b-41d4-a716-446655440000", "770e8400-e29b-41d4-a716-446655440000", "880e8400-e29b-41d4-a716-446655440000", time.Now(), time.Now(), "IN_HOUSE") // Stay | 
	ifMatch := "ifMatch_example" // string | ETag for optimistic locking (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.StaysAPI.ReplaceStay(context.Background(), stayId).Stay(stay).IfMatch(ifMatch).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `StaysAPI.ReplaceStay``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ReplaceStay`: Stay
	fmt.Fprintf(os.Stdout, "Response from `StaysAPI.ReplaceStay`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**stayId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiReplaceStayRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **stay** | [**Stay**](Stay.md) |  | 
 **ifMatch** | **string** | ETag for optimistic locking | 

### Return type

[**Stay**](Stay.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateStay

> Stay UpdateStay(ctx, stayId).Body(body).IfMatch(ifMatch).Execute()

Update stay (partial update)



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
	stayId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	body := map[string]interface{}{ ... } // map[string]interface{} | 
	ifMatch := "ifMatch_example" // string | ETag for optimistic locking (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.StaysAPI.UpdateStay(context.Background(), stayId).Body(body).IfMatch(ifMatch).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `StaysAPI.UpdateStay``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateStay`: Stay
	fmt.Fprintf(os.Stdout, "Response from `StaysAPI.UpdateStay`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**stayId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateStayRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **body** | **map[string]interface{}** |  | 
 **ifMatch** | **string** | ETag for optimistic locking | 

### Return type

[**Stay**](Stay.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

