# \ProcurementAPI

All URIs are relative to *https://api.stayos.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ApprovePurchaseOrder**](ProcurementAPI.md#ApprovePurchaseOrder) | **Post** /procurement/purchase-orders/{poId}/approve | Approve purchase order
[**CreatePurchaseOrder**](ProcurementAPI.md#CreatePurchaseOrder) | **Post** /procurement/purchase-orders | Create purchase order
[**CreateSupplier**](ProcurementAPI.md#CreateSupplier) | **Post** /procurement/suppliers | Create supplier
[**GetSupplier**](ProcurementAPI.md#GetSupplier) | **Get** /procurement/suppliers/{supplierId} | Get supplier details
[**GetSupplierPerformance**](ProcurementAPI.md#GetSupplierPerformance) | **Get** /procurement/suppliers/{supplierId}/performance | Get supplier performance
[**InvoicePurchaseOrder**](ProcurementAPI.md#InvoicePurchaseOrder) | **Post** /procurement/purchase-orders/{poId}/invoice | Record invoice for purchase order
[**ListPurchaseOrders**](ProcurementAPI.md#ListPurchaseOrders) | **Get** /procurement/purchase-orders | List purchase orders
[**ListSuppliers**](ProcurementAPI.md#ListSuppliers) | **Get** /procurement/suppliers | List suppliers
[**ReceivePurchaseOrder**](ProcurementAPI.md#ReceivePurchaseOrder) | **Post** /procurement/purchase-orders/{poId}/receive | Receive purchase order
[**ReplacePurchaseOrder**](ProcurementAPI.md#ReplacePurchaseOrder) | **Put** /procurement/purchase-orders/{poId} | Replace purchase order (full update)
[**ReplaceSupplier**](ProcurementAPI.md#ReplaceSupplier) | **Put** /procurement/suppliers/{supplierId} | Replace supplier (full update)
[**SubmitPurchaseOrder**](ProcurementAPI.md#SubmitPurchaseOrder) | **Post** /procurement/purchase-orders/{poId}/submit | Submit purchase order
[**UpdatePurchaseOrder**](ProcurementAPI.md#UpdatePurchaseOrder) | **Patch** /procurement/purchase-orders/{poId} | Update purchase order (partial update)
[**UpdateSupplier**](ProcurementAPI.md#UpdateSupplier) | **Patch** /procurement/suppliers/{supplierId} | Update supplier (partial update)



## ApprovePurchaseOrder

> PurchaseOrder ApprovePurchaseOrder(ctx, poId).ApprovePurchaseOrderRequest(approvePurchaseOrderRequest).Execute()

Approve purchase order



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
	poId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	approvePurchaseOrderRequest := *openapiclient.NewApprovePurchaseOrderRequest() // ApprovePurchaseOrderRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ProcurementAPI.ApprovePurchaseOrder(context.Background(), poId).ApprovePurchaseOrderRequest(approvePurchaseOrderRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ProcurementAPI.ApprovePurchaseOrder``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ApprovePurchaseOrder`: PurchaseOrder
	fmt.Fprintf(os.Stdout, "Response from `ProcurementAPI.ApprovePurchaseOrder`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**poId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApprovePurchaseOrderRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **approvePurchaseOrderRequest** | [**ApprovePurchaseOrderRequest**](ApprovePurchaseOrderRequest.md) |  | 

### Return type

[**PurchaseOrder**](PurchaseOrder.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreatePurchaseOrder

> map[string]interface{} CreatePurchaseOrder(ctx).Body(body).Execute()

Create purchase order



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
	resp, r, err := apiClient.ProcurementAPI.CreatePurchaseOrder(context.Background()).Body(body).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ProcurementAPI.CreatePurchaseOrder``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreatePurchaseOrder`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `ProcurementAPI.CreatePurchaseOrder`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreatePurchaseOrderRequest struct via the builder pattern


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


## CreateSupplier

> Supplier CreateSupplier(ctx).Supplier(supplier).Execute()

Create supplier



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
	supplier := *openapiclient.NewSupplier("SupplierId_example", "ABC Food Distributors", "FOOD_BEVERAGE", "ACTIVE") // Supplier | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ProcurementAPI.CreateSupplier(context.Background()).Supplier(supplier).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ProcurementAPI.CreateSupplier``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateSupplier`: Supplier
	fmt.Fprintf(os.Stdout, "Response from `ProcurementAPI.CreateSupplier`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateSupplierRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplier** | [**Supplier**](Supplier.md) |  | 

### Return type

[**Supplier**](Supplier.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSupplier

> Supplier GetSupplier(ctx, supplierId).Execute()

Get supplier details



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
	supplierId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ProcurementAPI.GetSupplier(context.Background(), supplierId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ProcurementAPI.GetSupplier``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSupplier`: Supplier
	fmt.Fprintf(os.Stdout, "Response from `ProcurementAPI.GetSupplier`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**supplierId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSupplierRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Supplier**](Supplier.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSupplierPerformance

> SupplierPerformance GetSupplierPerformance(ctx, supplierId).StartDate(startDate).EndDate(endDate).Execute()

Get supplier performance



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
	supplierId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	startDate := time.Now() // string |  (optional)
	endDate := time.Now() // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ProcurementAPI.GetSupplierPerformance(context.Background(), supplierId).StartDate(startDate).EndDate(endDate).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ProcurementAPI.GetSupplierPerformance``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSupplierPerformance`: SupplierPerformance
	fmt.Fprintf(os.Stdout, "Response from `ProcurementAPI.GetSupplierPerformance`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**supplierId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSupplierPerformanceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **startDate** | **string** |  | 
 **endDate** | **string** |  | 

### Return type

[**SupplierPerformance**](SupplierPerformance.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## InvoicePurchaseOrder

> PurchaseOrder InvoicePurchaseOrder(ctx, poId).InvoicePurchaseOrderRequest(invoicePurchaseOrderRequest).Execute()

Record invoice for purchase order



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
	poId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	invoicePurchaseOrderRequest := *openapiclient.NewInvoicePurchaseOrderRequest("InvoiceNumber_example", *openapiclient.NewMoney("125.50", "USD")) // InvoicePurchaseOrderRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ProcurementAPI.InvoicePurchaseOrder(context.Background(), poId).InvoicePurchaseOrderRequest(invoicePurchaseOrderRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ProcurementAPI.InvoicePurchaseOrder``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `InvoicePurchaseOrder`: PurchaseOrder
	fmt.Fprintf(os.Stdout, "Response from `ProcurementAPI.InvoicePurchaseOrder`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**poId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiInvoicePurchaseOrderRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **invoicePurchaseOrderRequest** | [**InvoicePurchaseOrderRequest**](InvoicePurchaseOrderRequest.md) |  | 

### Return type

[**PurchaseOrder**](PurchaseOrder.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListPurchaseOrders

> GetGuestStays200Response ListPurchaseOrders(ctx).PropertyId(propertyId).Status(status).PageSize(pageSize).Cursor(cursor).Execute()

List purchase orders



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
	resp, r, err := apiClient.ProcurementAPI.ListPurchaseOrders(context.Background()).PropertyId(propertyId).Status(status).PageSize(pageSize).Cursor(cursor).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ProcurementAPI.ListPurchaseOrders``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListPurchaseOrders`: GetGuestStays200Response
	fmt.Fprintf(os.Stdout, "Response from `ProcurementAPI.ListPurchaseOrders`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListPurchaseOrdersRequest struct via the builder pattern


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


## ListSuppliers

> ListSuppliers200Response ListSuppliers(ctx).Status(status).Category(category).PageSize(pageSize).Cursor(cursor).Execute()

List suppliers



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
	status := "status_example" // string |  (optional)
	category := "category_example" // string |  (optional)
	pageSize := int32(56) // int32 | Number of items per page (max 100) (optional) (default to 20)
	cursor := "cursor_example" // string | Cursor for pagination (opaque token) (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ProcurementAPI.ListSuppliers(context.Background()).Status(status).Category(category).PageSize(pageSize).Cursor(cursor).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ProcurementAPI.ListSuppliers``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListSuppliers`: ListSuppliers200Response
	fmt.Fprintf(os.Stdout, "Response from `ProcurementAPI.ListSuppliers`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListSuppliersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **string** |  | 
 **category** | **string** |  | 
 **pageSize** | **int32** | Number of items per page (max 100) | [default to 20]
 **cursor** | **string** | Cursor for pagination (opaque token) | 

### Return type

[**ListSuppliers200Response**](ListSuppliers200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ReceivePurchaseOrder

> PurchaseOrder ReceivePurchaseOrder(ctx, poId).ReceivePurchaseOrderRequest(receivePurchaseOrderRequest).Execute()

Receive purchase order



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
	poId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	receivePurchaseOrderRequest := *openapiclient.NewReceivePurchaseOrderRequest() // ReceivePurchaseOrderRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ProcurementAPI.ReceivePurchaseOrder(context.Background(), poId).ReceivePurchaseOrderRequest(receivePurchaseOrderRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ProcurementAPI.ReceivePurchaseOrder``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ReceivePurchaseOrder`: PurchaseOrder
	fmt.Fprintf(os.Stdout, "Response from `ProcurementAPI.ReceivePurchaseOrder`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**poId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiReceivePurchaseOrderRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **receivePurchaseOrderRequest** | [**ReceivePurchaseOrderRequest**](ReceivePurchaseOrderRequest.md) |  | 

### Return type

[**PurchaseOrder**](PurchaseOrder.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ReplacePurchaseOrder

> map[string]interface{} ReplacePurchaseOrder(ctx, poId).Body(body).IfMatch(ifMatch).Execute()

Replace purchase order (full update)



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
	poId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	body := map[string]interface{}{ ... } // map[string]interface{} | 
	ifMatch := "ifMatch_example" // string | ETag for optimistic locking (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ProcurementAPI.ReplacePurchaseOrder(context.Background(), poId).Body(body).IfMatch(ifMatch).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ProcurementAPI.ReplacePurchaseOrder``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ReplacePurchaseOrder`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `ProcurementAPI.ReplacePurchaseOrder`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**poId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiReplacePurchaseOrderRequest struct via the builder pattern


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


## ReplaceSupplier

> map[string]interface{} ReplaceSupplier(ctx, supplierId).Body(body).IfMatch(ifMatch).Execute()

Replace supplier (full update)



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
	supplierId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	body := map[string]interface{}{ ... } // map[string]interface{} | 
	ifMatch := "ifMatch_example" // string | ETag for optimistic locking (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ProcurementAPI.ReplaceSupplier(context.Background(), supplierId).Body(body).IfMatch(ifMatch).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ProcurementAPI.ReplaceSupplier``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ReplaceSupplier`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `ProcurementAPI.ReplaceSupplier`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**supplierId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiReplaceSupplierRequest struct via the builder pattern


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


## SubmitPurchaseOrder

> PurchaseOrder SubmitPurchaseOrder(ctx, poId).Execute()

Submit purchase order



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
	poId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ProcurementAPI.SubmitPurchaseOrder(context.Background(), poId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ProcurementAPI.SubmitPurchaseOrder``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SubmitPurchaseOrder`: PurchaseOrder
	fmt.Fprintf(os.Stdout, "Response from `ProcurementAPI.SubmitPurchaseOrder`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**poId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiSubmitPurchaseOrderRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**PurchaseOrder**](PurchaseOrder.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdatePurchaseOrder

> map[string]interface{} UpdatePurchaseOrder(ctx, poId).Body(body).IfMatch(ifMatch).Execute()

Update purchase order (partial update)



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
	poId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	body := map[string]interface{}{ ... } // map[string]interface{} | 
	ifMatch := "ifMatch_example" // string | ETag for optimistic locking (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ProcurementAPI.UpdatePurchaseOrder(context.Background(), poId).Body(body).IfMatch(ifMatch).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ProcurementAPI.UpdatePurchaseOrder``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdatePurchaseOrder`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `ProcurementAPI.UpdatePurchaseOrder`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**poId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdatePurchaseOrderRequest struct via the builder pattern


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


## UpdateSupplier

> map[string]interface{} UpdateSupplier(ctx, supplierId).Body(body).IfMatch(ifMatch).Execute()

Update supplier (partial update)



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
	supplierId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	body := map[string]interface{}{ ... } // map[string]interface{} | 
	ifMatch := "ifMatch_example" // string | ETag for optimistic locking (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ProcurementAPI.UpdateSupplier(context.Background(), supplierId).Body(body).IfMatch(ifMatch).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ProcurementAPI.UpdateSupplier``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateSupplier`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `ProcurementAPI.UpdateSupplier`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**supplierId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateSupplierRequest struct via the builder pattern


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

