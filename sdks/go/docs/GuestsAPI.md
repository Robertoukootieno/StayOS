# \GuestsAPI

All URIs are relative to *https://api.stayos.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AddLoyaltyPoints**](GuestsAPI.md#AddLoyaltyPoints) | **Post** /guests/{guestId}/loyalty/points | Add loyalty points
[**CreateGuest**](GuestsAPI.md#CreateGuest) | **Post** /guests | Create guest profile
[**DeleteGuest**](GuestsAPI.md#DeleteGuest) | **Delete** /guests/{guestId} | Delete guest profile (GDPR)
[**GetGuest**](GuestsAPI.md#GetGuest) | **Get** /guests/{guestId} | Get guest profile
[**GetGuestLoyalty**](GuestsAPI.md#GetGuestLoyalty) | **Get** /guests/{guestId}/loyalty | Get guest loyalty status
[**GetGuestStays**](GuestsAPI.md#GetGuestStays) | **Get** /guests/{guestId}/stays | Get guest stay history
[**ListGuests**](GuestsAPI.md#ListGuests) | **Get** /guests | List guest profiles
[**MergeGuests**](GuestsAPI.md#MergeGuests) | **Post** /guests/merge | Merge duplicate guest profiles
[**ReplaceGuest**](GuestsAPI.md#ReplaceGuest) | **Put** /guests/{guestId} | Replace guest profile (full update)
[**ReplaceGuestPreferences**](GuestsAPI.md#ReplaceGuestPreferences) | **Put** /guests/{guestId}/preferences | Replace guest preferences (full update)
[**SearchGuests**](GuestsAPI.md#SearchGuests) | **Post** /guests/search | Search guests
[**UpdateGuest**](GuestsAPI.md#UpdateGuest) | **Patch** /guests/{guestId} | Update guest profile (partial update)
[**UpdateGuestPreferences**](GuestsAPI.md#UpdateGuestPreferences) | **Patch** /guests/{guestId}/preferences | Update guest preferences (partial update)
[**VerifyGuest**](GuestsAPI.md#VerifyGuest) | **Post** /guests/{guestId}/verify | Verify guest identity



## AddLoyaltyPoints

> AddLoyaltyPoints200Response AddLoyaltyPoints(ctx, guestId).AddLoyaltyPointsRequest(addLoyaltyPointsRequest).Execute()

Add loyalty points



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
	guestId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	addLoyaltyPointsRequest := *openapiclient.NewAddLoyaltyPointsRequest(int32(123), "Reason_example") // AddLoyaltyPointsRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.GuestsAPI.AddLoyaltyPoints(context.Background(), guestId).AddLoyaltyPointsRequest(addLoyaltyPointsRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GuestsAPI.AddLoyaltyPoints``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `AddLoyaltyPoints`: AddLoyaltyPoints200Response
	fmt.Fprintf(os.Stdout, "Response from `GuestsAPI.AddLoyaltyPoints`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**guestId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiAddLoyaltyPointsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **addLoyaltyPointsRequest** | [**AddLoyaltyPointsRequest**](AddLoyaltyPointsRequest.md) |  | 

### Return type

[**AddLoyaltyPoints200Response**](AddLoyaltyPoints200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateGuest

> GuestProfile CreateGuest(ctx).GuestProfile(guestProfile).Execute()

Create guest profile



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
	guestProfile := *openapiclient.NewGuestProfile("GuestId_example", "John", "Doe", "john.doe@example.com") // GuestProfile | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.GuestsAPI.CreateGuest(context.Background()).GuestProfile(guestProfile).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GuestsAPI.CreateGuest``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateGuest`: GuestProfile
	fmt.Fprintf(os.Stdout, "Response from `GuestsAPI.CreateGuest`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateGuestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guestProfile** | [**GuestProfile**](GuestProfile.md) |  | 

### Return type

[**GuestProfile**](GuestProfile.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteGuest

> DeleteGuest(ctx, guestId).Execute()

Delete guest profile (GDPR)



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
	guestId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.GuestsAPI.DeleteGuest(context.Background(), guestId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GuestsAPI.DeleteGuest``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**guestId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteGuestRequest struct via the builder pattern


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


## GetGuest

> GuestProfile GetGuest(ctx, guestId).Execute()

Get guest profile



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
	guestId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.GuestsAPI.GetGuest(context.Background(), guestId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GuestsAPI.GetGuest``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetGuest`: GuestProfile
	fmt.Fprintf(os.Stdout, "Response from `GuestsAPI.GetGuest`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**guestId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetGuestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**GuestProfile**](GuestProfile.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetGuestLoyalty

> GetGuestLoyalty200Response GetGuestLoyalty(ctx, guestId).Execute()

Get guest loyalty status



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
	guestId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.GuestsAPI.GetGuestLoyalty(context.Background(), guestId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GuestsAPI.GetGuestLoyalty``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetGuestLoyalty`: GetGuestLoyalty200Response
	fmt.Fprintf(os.Stdout, "Response from `GuestsAPI.GetGuestLoyalty`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**guestId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetGuestLoyaltyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**GetGuestLoyalty200Response**](GetGuestLoyalty200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetGuestStays

> GetGuestStays200Response GetGuestStays(ctx, guestId).PageSize(pageSize).Cursor(cursor).Execute()

Get guest stay history



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
	guestId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	pageSize := int32(56) // int32 | Number of items per page (max 100) (optional) (default to 20)
	cursor := "cursor_example" // string | Cursor for pagination (opaque token) (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.GuestsAPI.GetGuestStays(context.Background(), guestId).PageSize(pageSize).Cursor(cursor).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GuestsAPI.GetGuestStays``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetGuestStays`: GetGuestStays200Response
	fmt.Fprintf(os.Stdout, "Response from `GuestsAPI.GetGuestStays`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**guestId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetGuestStaysRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

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


## ListGuests

> ListGuests200Response ListGuests(ctx).PageSize(pageSize).Cursor(cursor).Search(search).LoyaltyTier(loyaltyTier).Execute()

List guest profiles



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
	search := "search_example" // string | Search by name or email (optional)
	loyaltyTier := "loyaltyTier_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.GuestsAPI.ListGuests(context.Background()).PageSize(pageSize).Cursor(cursor).Search(search).LoyaltyTier(loyaltyTier).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GuestsAPI.ListGuests``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListGuests`: ListGuests200Response
	fmt.Fprintf(os.Stdout, "Response from `GuestsAPI.ListGuests`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListGuestsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **int32** | Number of items per page (max 100) | [default to 20]
 **cursor** | **string** | Cursor for pagination (opaque token) | 
 **search** | **string** | Search by name or email | 
 **loyaltyTier** | **string** |  | 

### Return type

[**ListGuests200Response**](ListGuests200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## MergeGuests

> GuestProfile MergeGuests(ctx).MergeGuestsRequest(mergeGuestsRequest).Execute()

Merge duplicate guest profiles



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
	mergeGuestsRequest := *openapiclient.NewMergeGuestsRequest("PrimaryGuestId_example", "SecondaryGuestId_example") // MergeGuestsRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.GuestsAPI.MergeGuests(context.Background()).MergeGuestsRequest(mergeGuestsRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GuestsAPI.MergeGuests``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `MergeGuests`: GuestProfile
	fmt.Fprintf(os.Stdout, "Response from `GuestsAPI.MergeGuests`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiMergeGuestsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mergeGuestsRequest** | [**MergeGuestsRequest**](MergeGuestsRequest.md) |  | 

### Return type

[**GuestProfile**](GuestProfile.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ReplaceGuest

> GuestProfile ReplaceGuest(ctx, guestId).GuestProfile(guestProfile).IfMatch(ifMatch).Execute()

Replace guest profile (full update)



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
	guestId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	guestProfile := *openapiclient.NewGuestProfile("GuestId_example", "John", "Doe", "john.doe@example.com") // GuestProfile | 
	ifMatch := "ifMatch_example" // string | ETag for optimistic locking (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.GuestsAPI.ReplaceGuest(context.Background(), guestId).GuestProfile(guestProfile).IfMatch(ifMatch).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GuestsAPI.ReplaceGuest``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ReplaceGuest`: GuestProfile
	fmt.Fprintf(os.Stdout, "Response from `GuestsAPI.ReplaceGuest`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**guestId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiReplaceGuestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **guestProfile** | [**GuestProfile**](GuestProfile.md) |  | 
 **ifMatch** | **string** | ETag for optimistic locking | 

### Return type

[**GuestProfile**](GuestProfile.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ReplaceGuestPreferences

> map[string]interface{} ReplaceGuestPreferences(ctx, guestId).Body(body).IfMatch(ifMatch).Execute()

Replace guest preferences (full update)



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
	guestId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	body := map[string]interface{}{ ... } // map[string]interface{} | 
	ifMatch := "ifMatch_example" // string | ETag for optimistic locking (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.GuestsAPI.ReplaceGuestPreferences(context.Background(), guestId).Body(body).IfMatch(ifMatch).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GuestsAPI.ReplaceGuestPreferences``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ReplaceGuestPreferences`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `GuestsAPI.ReplaceGuestPreferences`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**guestId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiReplaceGuestPreferencesRequest struct via the builder pattern


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


## SearchGuests

> []GuestProfile SearchGuests(ctx).SearchGuestsRequest(searchGuestsRequest).Execute()

Search guests



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
	searchGuestsRequest := *openapiclient.NewSearchGuestsRequest() // SearchGuestsRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.GuestsAPI.SearchGuests(context.Background()).SearchGuestsRequest(searchGuestsRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GuestsAPI.SearchGuests``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SearchGuests`: []GuestProfile
	fmt.Fprintf(os.Stdout, "Response from `GuestsAPI.SearchGuests`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSearchGuestsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchGuestsRequest** | [**SearchGuestsRequest**](SearchGuestsRequest.md) |  | 

### Return type

[**[]GuestProfile**](GuestProfile.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateGuest

> GuestProfile UpdateGuest(ctx, guestId).Body(body).IfMatch(ifMatch).Execute()

Update guest profile (partial update)



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
	guestId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	body := map[string]interface{}{ ... } // map[string]interface{} | 
	ifMatch := "ifMatch_example" // string | ETag for optimistic locking (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.GuestsAPI.UpdateGuest(context.Background(), guestId).Body(body).IfMatch(ifMatch).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GuestsAPI.UpdateGuest``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateGuest`: GuestProfile
	fmt.Fprintf(os.Stdout, "Response from `GuestsAPI.UpdateGuest`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**guestId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateGuestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **body** | **map[string]interface{}** |  | 
 **ifMatch** | **string** | ETag for optimistic locking | 

### Return type

[**GuestProfile**](GuestProfile.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateGuestPreferences

> map[string]interface{} UpdateGuestPreferences(ctx, guestId).Body(body).IfMatch(ifMatch).Execute()

Update guest preferences (partial update)



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
	guestId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	body := map[string]interface{}{ ... } // map[string]interface{} | 
	ifMatch := "ifMatch_example" // string | ETag for optimistic locking (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.GuestsAPI.UpdateGuestPreferences(context.Background(), guestId).Body(body).IfMatch(ifMatch).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GuestsAPI.UpdateGuestPreferences``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateGuestPreferences`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `GuestsAPI.UpdateGuestPreferences`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**guestId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateGuestPreferencesRequest struct via the builder pattern


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


## VerifyGuest

> VerifyGuest200Response VerifyGuest(ctx, guestId).VerifyGuestRequest(verifyGuestRequest).Execute()

Verify guest identity



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
	guestId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	verifyGuestRequest := *openapiclient.NewVerifyGuestRequest() // VerifyGuestRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.GuestsAPI.VerifyGuest(context.Background(), guestId).VerifyGuestRequest(verifyGuestRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GuestsAPI.VerifyGuest``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `VerifyGuest`: VerifyGuest200Response
	fmt.Fprintf(os.Stdout, "Response from `GuestsAPI.VerifyGuest`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**guestId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiVerifyGuestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **verifyGuestRequest** | [**VerifyGuestRequest**](VerifyGuestRequest.md) |  | 

### Return type

[**VerifyGuest200Response**](VerifyGuest200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

