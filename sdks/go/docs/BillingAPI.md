# \BillingAPI

All URIs are relative to *https://api.stayos.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AddFolioAdjustment**](BillingAPI.md#AddFolioAdjustment) | **Post** /folios/{folioId}/adjustments | Add adjustment to folio
[**AddFolioCharge**](BillingAPI.md#AddFolioCharge) | **Post** /folios/{folioId}/charges | Add charge to folio
[**AddFolioLineItem**](BillingAPI.md#AddFolioLineItem) | **Post** /folios/{folioId}/line-items | Add line item to folio
[**BatchProcessPayments**](BillingAPI.md#BatchProcessPayments) | **Post** /payments/batch | Batch payment processing
[**CapturePayment**](BillingAPI.md#CapturePayment) | **Post** /payments/{paymentId}/capture | Capture payment
[**CloseFolio**](BillingAPI.md#CloseFolio) | **Post** /folios/{folioId}/close | Close folio
[**CreateFolio**](BillingAPI.md#CreateFolio) | **Post** /folios | Create folio
[**CreatePayment**](BillingAPI.md#CreatePayment) | **Post** /payments | Process payment
[**DisputeFolio**](BillingAPI.md#DisputeFolio) | **Post** /folios/{folioId}/dispute | Dispute folio
[**GetFolio**](BillingAPI.md#GetFolio) | **Get** /folios/{folioId} | Get folio details
[**GetFolioPDF**](BillingAPI.md#GetFolioPDF) | **Get** /folios/{folioId}/pdf | Download folio PDF
[**GetPayment**](BillingAPI.md#GetPayment) | **Get** /payments/{paymentId} | Get payment details
[**GetPaymentReceipt**](BillingAPI.md#GetPaymentReceipt) | **Get** /payments/{paymentId}/receipt | Get payment receipt
[**GetRevenueReconciliation**](BillingAPI.md#GetRevenueReconciliation) | **Get** /revenue/reconciliation | Get revenue reconciliation
[**GetRevenueReports**](BillingAPI.md#GetRevenueReports) | **Get** /revenue/reports | Get revenue reports
[**ListFolios**](BillingAPI.md#ListFolios) | **Get** /folios | List folios
[**ListPayments**](BillingAPI.md#ListPayments) | **Get** /payments | List payments
[**RefundPayment**](BillingAPI.md#RefundPayment) | **Post** /payments/{paymentId}/refund | Refund payment
[**RemoveFolioLineItem**](BillingAPI.md#RemoveFolioLineItem) | **Delete** /folios/{folioId}/line-items/{itemId} | Remove line item from folio
[**ReopenFolio**](BillingAPI.md#ReopenFolio) | **Post** /folios/{folioId}/reopen | Reopen folio



## AddFolioAdjustment

> LineItem AddFolioAdjustment(ctx, folioId).AddFolioAdjustmentRequest(addFolioAdjustmentRequest).Execute()

Add adjustment to folio



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
	folioId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	addFolioAdjustmentRequest := *openapiclient.NewAddFolioAdjustmentRequest(*openapiclient.NewMoney("125.50", "USD"), "Reason_example") // AddFolioAdjustmentRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAPI.AddFolioAdjustment(context.Background(), folioId).AddFolioAdjustmentRequest(addFolioAdjustmentRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAPI.AddFolioAdjustment``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `AddFolioAdjustment`: LineItem
	fmt.Fprintf(os.Stdout, "Response from `BillingAPI.AddFolioAdjustment`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**folioId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiAddFolioAdjustmentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **addFolioAdjustmentRequest** | [**AddFolioAdjustmentRequest**](AddFolioAdjustmentRequest.md) |  | 

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


## AddFolioCharge

> map[string]interface{} AddFolioCharge(ctx, folioId).AddFolioChargeRequest(addFolioChargeRequest).Execute()

Add charge to folio



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
	folioId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	addFolioChargeRequest := *openapiclient.NewAddFolioChargeRequest(*openapiclient.NewMoney("125.50", "USD"), "Description_example") // AddFolioChargeRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAPI.AddFolioCharge(context.Background(), folioId).AddFolioChargeRequest(addFolioChargeRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAPI.AddFolioCharge``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `AddFolioCharge`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `BillingAPI.AddFolioCharge`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**folioId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiAddFolioChargeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **addFolioChargeRequest** | [**AddFolioChargeRequest**](AddFolioChargeRequest.md) |  | 

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


## AddFolioLineItem

> LineItem AddFolioLineItem(ctx, folioId).LineItem(lineItem).Execute()

Add line item to folio



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
	folioId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	lineItem := *openapiclient.NewLineItem("LineItemId_example", "Room charge - Night 1", "ROOM", *openapiclient.NewModel0("125.50", "USD")) // LineItem | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAPI.AddFolioLineItem(context.Background(), folioId).LineItem(lineItem).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAPI.AddFolioLineItem``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `AddFolioLineItem`: LineItem
	fmt.Fprintf(os.Stdout, "Response from `BillingAPI.AddFolioLineItem`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**folioId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiAddFolioLineItemRequest struct via the builder pattern


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


## BatchProcessPayments

> BatchProcessPayments200Response BatchProcessPayments(ctx).BatchProcessPaymentsRequest(batchProcessPaymentsRequest).Execute()

Batch payment processing



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
	batchProcessPaymentsRequest := *openapiclient.NewBatchProcessPaymentsRequest([]openapiclient.BatchProcessPaymentsRequestPaymentsInner{*openapiclient.NewBatchProcessPaymentsRequestPaymentsInner()}) // BatchProcessPaymentsRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAPI.BatchProcessPayments(context.Background()).BatchProcessPaymentsRequest(batchProcessPaymentsRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAPI.BatchProcessPayments``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `BatchProcessPayments`: BatchProcessPayments200Response
	fmt.Fprintf(os.Stdout, "Response from `BillingAPI.BatchProcessPayments`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiBatchProcessPaymentsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchProcessPaymentsRequest** | [**BatchProcessPaymentsRequest**](BatchProcessPaymentsRequest.md) |  | 

### Return type

[**BatchProcessPayments200Response**](BatchProcessPayments200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CapturePayment

> Payment CapturePayment(ctx, paymentId).CapturePaymentRequest(capturePaymentRequest).Execute()

Capture payment



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
	paymentId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	capturePaymentRequest := *openapiclient.NewCapturePaymentRequest() // CapturePaymentRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAPI.CapturePayment(context.Background(), paymentId).CapturePaymentRequest(capturePaymentRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAPI.CapturePayment``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CapturePayment`: Payment
	fmt.Fprintf(os.Stdout, "Response from `BillingAPI.CapturePayment`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**paymentId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiCapturePaymentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **capturePaymentRequest** | [**CapturePaymentRequest**](CapturePaymentRequest.md) |  | 

### Return type

[**Payment**](Payment.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CloseFolio

> Folio CloseFolio(ctx, folioId).Execute()

Close folio



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
	folioId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAPI.CloseFolio(context.Background(), folioId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAPI.CloseFolio``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CloseFolio`: Folio
	fmt.Fprintf(os.Stdout, "Response from `BillingAPI.CloseFolio`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**folioId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiCloseFolioRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Folio**](Folio.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateFolio

> map[string]interface{} CreateFolio(ctx).Body(body).Execute()

Create folio



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
	resp, r, err := apiClient.BillingAPI.CreateFolio(context.Background()).Body(body).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAPI.CreateFolio``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateFolio`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `BillingAPI.CreateFolio`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateFolioRequest struct via the builder pattern


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


## CreatePayment

> map[string]interface{} CreatePayment(ctx).CreatePaymentRequest(createPaymentRequest).Execute()

Process payment



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
	createPaymentRequest := *openapiclient.NewCreatePaymentRequest("FolioId_example", *openapiclient.NewMoney("125.50", "USD"), "Method_example") // CreatePaymentRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAPI.CreatePayment(context.Background()).CreatePaymentRequest(createPaymentRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAPI.CreatePayment``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreatePayment`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `BillingAPI.CreatePayment`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreatePaymentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPaymentRequest** | [**CreatePaymentRequest**](CreatePaymentRequest.md) |  | 

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


## DisputeFolio

> Folio DisputeFolio(ctx, folioId).DisputeFolioRequest(disputeFolioRequest).Execute()

Dispute folio



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
	folioId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	disputeFolioRequest := *openapiclient.NewDisputeFolioRequest("Reason_example") // DisputeFolioRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAPI.DisputeFolio(context.Background(), folioId).DisputeFolioRequest(disputeFolioRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAPI.DisputeFolio``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DisputeFolio`: Folio
	fmt.Fprintf(os.Stdout, "Response from `BillingAPI.DisputeFolio`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**folioId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDisputeFolioRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **disputeFolioRequest** | [**DisputeFolioRequest**](DisputeFolioRequest.md) |  | 

### Return type

[**Folio**](Folio.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFolio

> map[string]interface{} GetFolio(ctx, folioId).Execute()

Get folio details



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
	folioId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAPI.GetFolio(context.Background(), folioId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAPI.GetFolio``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetFolio`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `BillingAPI.GetFolio`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**folioId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFolioRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

**map[string]interface{}**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFolioPDF

> *os.File GetFolioPDF(ctx, folioId).Execute()

Download folio PDF



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
	folioId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAPI.GetFolioPDF(context.Background(), folioId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAPI.GetFolioPDF``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetFolioPDF`: *os.File
	fmt.Fprintf(os.Stdout, "Response from `BillingAPI.GetFolioPDF`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**folioId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFolioPDFRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[***os.File**](*os.File.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/pdf, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPayment

> map[string]interface{} GetPayment(ctx, paymentId).Execute()

Get payment details



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
	paymentId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAPI.GetPayment(context.Background(), paymentId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAPI.GetPayment``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPayment`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `BillingAPI.GetPayment`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**paymentId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPaymentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

**map[string]interface{}**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPaymentReceipt

> *os.File GetPaymentReceipt(ctx, paymentId).Execute()

Get payment receipt



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
	paymentId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAPI.GetPaymentReceipt(context.Background(), paymentId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAPI.GetPaymentReceipt``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPaymentReceipt`: *os.File
	fmt.Fprintf(os.Stdout, "Response from `BillingAPI.GetPaymentReceipt`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**paymentId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPaymentReceiptRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[***os.File**](*os.File.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/pdf, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRevenueReconciliation

> GetRevenueReconciliation200Response GetRevenueReconciliation(ctx).Date(date).PropertyId(propertyId).Execute()

Get revenue reconciliation



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
	date := time.Now() // string | 
	propertyId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAPI.GetRevenueReconciliation(context.Background()).Date(date).PropertyId(propertyId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAPI.GetRevenueReconciliation``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetRevenueReconciliation`: GetRevenueReconciliation200Response
	fmt.Fprintf(os.Stdout, "Response from `BillingAPI.GetRevenueReconciliation`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRevenueReconciliationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date** | **string** |  | 
 **propertyId** | **string** |  | 

### Return type

[**GetRevenueReconciliation200Response**](GetRevenueReconciliation200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRevenueReports

> RevenueReport GetRevenueReports(ctx).StartDate(startDate).EndDate(endDate).PropertyId(propertyId).GroupBy(groupBy).Execute()

Get revenue reports



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
	groupBy := "groupBy_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAPI.GetRevenueReports(context.Background()).StartDate(startDate).EndDate(endDate).PropertyId(propertyId).GroupBy(groupBy).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAPI.GetRevenueReports``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetRevenueReports`: RevenueReport
	fmt.Fprintf(os.Stdout, "Response from `BillingAPI.GetRevenueReports`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRevenueReportsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **propertyId** | **string** |  | 
 **groupBy** | **string** |  | 

### Return type

[**RevenueReport**](RevenueReport.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListFolios

> GetGuestStays200Response ListFolios(ctx).PropertyId(propertyId).GuestId(guestId).Status(status).PageSize(pageSize).Cursor(cursor).Execute()

List folios



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
	guestId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string |  (optional)
	status := "status_example" // string |  (optional)
	pageSize := int32(56) // int32 | Number of items per page (max 100) (optional) (default to 20)
	cursor := "cursor_example" // string | Cursor for pagination (opaque token) (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAPI.ListFolios(context.Background()).PropertyId(propertyId).GuestId(guestId).Status(status).PageSize(pageSize).Cursor(cursor).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAPI.ListFolios``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListFolios`: GetGuestStays200Response
	fmt.Fprintf(os.Stdout, "Response from `BillingAPI.ListFolios`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListFoliosRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **propertyId** | **string** |  | 
 **guestId** | **string** |  | 
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


## ListPayments

> ListPayments200Response ListPayments(ctx).FolioId(folioId).Status(status).PageSize(pageSize).Cursor(cursor).Execute()

List payments



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
	folioId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string |  (optional)
	status := "status_example" // string |  (optional)
	pageSize := int32(56) // int32 | Number of items per page (max 100) (optional) (default to 20)
	cursor := "cursor_example" // string | Cursor for pagination (opaque token) (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAPI.ListPayments(context.Background()).FolioId(folioId).Status(status).PageSize(pageSize).Cursor(cursor).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAPI.ListPayments``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListPayments`: ListPayments200Response
	fmt.Fprintf(os.Stdout, "Response from `BillingAPI.ListPayments`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListPaymentsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folioId** | **string** |  | 
 **status** | **string** |  | 
 **pageSize** | **int32** | Number of items per page (max 100) | [default to 20]
 **cursor** | **string** | Cursor for pagination (opaque token) | 

### Return type

[**ListPayments200Response**](ListPayments200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RefundPayment

> Payment RefundPayment(ctx, paymentId).RefundPaymentRequest(refundPaymentRequest).Execute()

Refund payment



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
	paymentId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	refundPaymentRequest := *openapiclient.NewRefundPaymentRequest(*openapiclient.NewMoney("125.50", "USD")) // RefundPaymentRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAPI.RefundPayment(context.Background(), paymentId).RefundPaymentRequest(refundPaymentRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAPI.RefundPayment``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RefundPayment`: Payment
	fmt.Fprintf(os.Stdout, "Response from `BillingAPI.RefundPayment`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**paymentId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiRefundPaymentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **refundPaymentRequest** | [**RefundPaymentRequest**](RefundPaymentRequest.md) |  | 

### Return type

[**Payment**](Payment.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RemoveFolioLineItem

> RemoveFolioLineItem(ctx, folioId, itemId).Execute()

Remove line item from folio



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
	folioId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	itemId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.BillingAPI.RemoveFolioLineItem(context.Background(), folioId, itemId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAPI.RemoveFolioLineItem``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**folioId** | **string** |  | 
**itemId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveFolioLineItemRequest struct via the builder pattern


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


## ReopenFolio

> Folio ReopenFolio(ctx, folioId).CancelServiceRequestRequest(cancelServiceRequestRequest).Execute()

Reopen folio



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
	folioId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	cancelServiceRequestRequest := *openapiclient.NewCancelServiceRequestRequest() // CancelServiceRequestRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAPI.ReopenFolio(context.Background(), folioId).CancelServiceRequestRequest(cancelServiceRequestRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAPI.ReopenFolio``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ReopenFolio`: Folio
	fmt.Fprintf(os.Stdout, "Response from `BillingAPI.ReopenFolio`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**folioId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiReopenFolioRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **cancelServiceRequestRequest** | [**CancelServiceRequestRequest**](CancelServiceRequestRequest.md) |  | 

### Return type

[**Folio**](Folio.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

