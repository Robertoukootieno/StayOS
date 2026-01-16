# \ReservationsAPI

All URIs are relative to *https://api.stayos.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AddSpecialRequest**](ReservationsAPI.md#AddSpecialRequest) | **Post** /reservations/{reservationId}/special-requests | Add special request to reservation
[**CancelReservation**](ReservationsAPI.md#CancelReservation) | **Post** /reservations/{reservationId}/cancel | Cancel reservation
[**ConfirmReservation**](ReservationsAPI.md#ConfirmReservation) | **Post** /reservations/{reservationId}/confirm | Confirm reservation
[**CreateReservation**](ReservationsAPI.md#CreateReservation) | **Post** /reservations | Create reservation
[**GetReservation**](ReservationsAPI.md#GetReservation) | **Get** /reservations/{reservationId} | Get reservation details
[**GetReservationHistory**](ReservationsAPI.md#GetReservationHistory) | **Get** /reservations/{reservationId}/history | Get reservation modification history
[**GetReservationQuote**](ReservationsAPI.md#GetReservationQuote) | **Post** /reservations/quote | Get pricing quote
[**MarkReservationNoShow**](ReservationsAPI.md#MarkReservationNoShow) | **Post** /reservations/{reservationId}/no-show | Mark reservation as no-show
[**ReplaceReservation**](ReservationsAPI.md#ReplaceReservation) | **Put** /reservations/{reservationId} | Replace reservation (full update)
[**SearchReservations**](ReservationsAPI.md#SearchReservations) | **Get** /reservations/search | Advanced reservation search
[**UpdateReservation**](ReservationsAPI.md#UpdateReservation) | **Patch** /reservations/{reservationId} | Update reservation (partial update)



## AddSpecialRequest

> Reservation AddSpecialRequest(ctx, reservationId).AddSpecialRequestRequest(addSpecialRequestRequest).Execute()

Add special request to reservation



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
	reservationId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	addSpecialRequestRequest := *openapiclient.NewAddSpecialRequestRequest("Request_example") // AddSpecialRequestRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ReservationsAPI.AddSpecialRequest(context.Background(), reservationId).AddSpecialRequestRequest(addSpecialRequestRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ReservationsAPI.AddSpecialRequest``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `AddSpecialRequest`: Reservation
	fmt.Fprintf(os.Stdout, "Response from `ReservationsAPI.AddSpecialRequest`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiAddSpecialRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **addSpecialRequestRequest** | [**AddSpecialRequestRequest**](AddSpecialRequestRequest.md) |  | 

### Return type

[**Reservation**](Reservation.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CancelReservation

> Reservation CancelReservation(ctx, reservationId).CancelReservationRequest(cancelReservationRequest).Execute()

Cancel reservation



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
	reservationId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	cancelReservationRequest := *openapiclient.NewCancelReservationRequest() // CancelReservationRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ReservationsAPI.CancelReservation(context.Background(), reservationId).CancelReservationRequest(cancelReservationRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ReservationsAPI.CancelReservation``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CancelReservation`: Reservation
	fmt.Fprintf(os.Stdout, "Response from `ReservationsAPI.CancelReservation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiCancelReservationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **cancelReservationRequest** | [**CancelReservationRequest**](CancelReservationRequest.md) |  | 

### Return type

[**Reservation**](Reservation.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ConfirmReservation

> Reservation ConfirmReservation(ctx, reservationId).Execute()

Confirm reservation



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
	reservationId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ReservationsAPI.ConfirmReservation(context.Background(), reservationId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ReservationsAPI.ConfirmReservation``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ConfirmReservation`: Reservation
	fmt.Fprintf(os.Stdout, "Response from `ReservationsAPI.ConfirmReservation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiConfirmReservationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Reservation**](Reservation.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateReservation

> Reservation CreateReservation(ctx).Reservation(reservation).Execute()

Create reservation



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
	reservation := *openapiclient.NewReservation("ReservationId_example", "PropertyId_example", "GuestId_example", time.Now(), time.Now(), "CONFIRMED") // Reservation | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ReservationsAPI.CreateReservation(context.Background()).Reservation(reservation).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ReservationsAPI.CreateReservation``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateReservation`: Reservation
	fmt.Fprintf(os.Stdout, "Response from `ReservationsAPI.CreateReservation`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateReservationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservation** | [**Reservation**](Reservation.md) |  | 

### Return type

[**Reservation**](Reservation.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservation

> Reservation GetReservation(ctx, reservationId).Execute()

Get reservation details



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
	reservationId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ReservationsAPI.GetReservation(context.Background(), reservationId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ReservationsAPI.GetReservation``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetReservation`: Reservation
	fmt.Fprintf(os.Stdout, "Response from `ReservationsAPI.GetReservation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Reservation**](Reservation.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservationHistory

> []GetReservationHistory200ResponseInner GetReservationHistory(ctx, reservationId).Execute()

Get reservation modification history



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
	reservationId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ReservationsAPI.GetReservationHistory(context.Background(), reservationId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ReservationsAPI.GetReservationHistory``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetReservationHistory`: []GetReservationHistory200ResponseInner
	fmt.Fprintf(os.Stdout, "Response from `ReservationsAPI.GetReservationHistory`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationHistoryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**[]GetReservationHistory200ResponseInner**](GetReservationHistory200ResponseInner.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservationQuote

> GetReservationQuote200Response GetReservationQuote(ctx).GetReservationQuoteRequest(getReservationQuoteRequest).Execute()

Get pricing quote



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
	getReservationQuoteRequest := *openapiclient.NewGetReservationQuoteRequest("PropertyId_example", "UnitTypeId_example", time.Now(), time.Now(), *openapiclient.NewGetReservationQuoteRequestGuestCount()) // GetReservationQuoteRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ReservationsAPI.GetReservationQuote(context.Background()).GetReservationQuoteRequest(getReservationQuoteRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ReservationsAPI.GetReservationQuote``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetReservationQuote`: GetReservationQuote200Response
	fmt.Fprintf(os.Stdout, "Response from `ReservationsAPI.GetReservationQuote`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationQuoteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getReservationQuoteRequest** | [**GetReservationQuoteRequest**](GetReservationQuoteRequest.md) |  | 

### Return type

[**GetReservationQuote200Response**](GetReservationQuote200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## MarkReservationNoShow

> Reservation MarkReservationNoShow(ctx, reservationId).MarkReservationNoShowRequest(markReservationNoShowRequest).Execute()

Mark reservation as no-show



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
	reservationId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	markReservationNoShowRequest := *openapiclient.NewMarkReservationNoShowRequest() // MarkReservationNoShowRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ReservationsAPI.MarkReservationNoShow(context.Background(), reservationId).MarkReservationNoShowRequest(markReservationNoShowRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ReservationsAPI.MarkReservationNoShow``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `MarkReservationNoShow`: Reservation
	fmt.Fprintf(os.Stdout, "Response from `ReservationsAPI.MarkReservationNoShow`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiMarkReservationNoShowRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **markReservationNoShowRequest** | [**MarkReservationNoShowRequest**](MarkReservationNoShowRequest.md) |  | 

### Return type

[**Reservation**](Reservation.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ReplaceReservation

> Reservation ReplaceReservation(ctx, reservationId).Reservation(reservation).IfMatch(ifMatch).Execute()

Replace reservation (full update)



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
	reservationId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	reservation := *openapiclient.NewReservation("ReservationId_example", "PropertyId_example", "GuestId_example", time.Now(), time.Now(), "CONFIRMED") // Reservation | 
	ifMatch := "ifMatch_example" // string | ETag for optimistic locking (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ReservationsAPI.ReplaceReservation(context.Background(), reservationId).Reservation(reservation).IfMatch(ifMatch).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ReservationsAPI.ReplaceReservation``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ReplaceReservation`: Reservation
	fmt.Fprintf(os.Stdout, "Response from `ReservationsAPI.ReplaceReservation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiReplaceReservationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **reservation** | [**Reservation**](Reservation.md) |  | 
 **ifMatch** | **string** | ETag for optimistic locking | 

### Return type

[**Reservation**](Reservation.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SearchReservations

> SearchReservations200Response SearchReservations(ctx).PropertyId(propertyId).GuestName(guestName).ConfirmationNumber(confirmationNumber).Status(status).CheckInDate(checkInDate).CheckOutDate(checkOutDate).PageSize(pageSize).Cursor(cursor).Execute()

Advanced reservation search



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
	propertyId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string |  (optional)
	guestName := "guestName_example" // string |  (optional)
	confirmationNumber := "confirmationNumber_example" // string |  (optional)
	status := "status_example" // string |  (optional)
	checkInDate := time.Now() // string |  (optional)
	checkOutDate := time.Now() // string |  (optional)
	pageSize := int32(56) // int32 | Number of items per page (max 100) (optional) (default to 20)
	cursor := "cursor_example" // string | Cursor for pagination (opaque token) (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ReservationsAPI.SearchReservations(context.Background()).PropertyId(propertyId).GuestName(guestName).ConfirmationNumber(confirmationNumber).Status(status).CheckInDate(checkInDate).CheckOutDate(checkOutDate).PageSize(pageSize).Cursor(cursor).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ReservationsAPI.SearchReservations``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SearchReservations`: SearchReservations200Response
	fmt.Fprintf(os.Stdout, "Response from `ReservationsAPI.SearchReservations`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSearchReservationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **propertyId** | **string** |  | 
 **guestName** | **string** |  | 
 **confirmationNumber** | **string** |  | 
 **status** | **string** |  | 
 **checkInDate** | **string** |  | 
 **checkOutDate** | **string** |  | 
 **pageSize** | **int32** | Number of items per page (max 100) | [default to 20]
 **cursor** | **string** | Cursor for pagination (opaque token) | 

### Return type

[**SearchReservations200Response**](SearchReservations200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateReservation

> Reservation UpdateReservation(ctx, reservationId).Body(body).IfMatch(ifMatch).Execute()

Update reservation (partial update)



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
	reservationId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	body := map[string]interface{}{ ... } // map[string]interface{} | 
	ifMatch := "ifMatch_example" // string | ETag for optimistic locking (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ReservationsAPI.UpdateReservation(context.Background(), reservationId).Body(body).IfMatch(ifMatch).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ReservationsAPI.UpdateReservation``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateReservation`: Reservation
	fmt.Fprintf(os.Stdout, "Response from `ReservationsAPI.UpdateReservation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateReservationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **body** | **map[string]interface{}** |  | 
 **ifMatch** | **string** | ETag for optimistic locking | 

### Return type

[**Reservation**](Reservation.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

