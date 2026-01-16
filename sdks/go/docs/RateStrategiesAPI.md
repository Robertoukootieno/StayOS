# \RateStrategiesAPI

All URIs are relative to *https://api.stayos.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateRateStrategy**](RateStrategiesAPI.md#CreateRateStrategy) | **Post** /properties/{propertyId}/rate-strategies | Create rate strategy
[**ListRateStrategies**](RateStrategiesAPI.md#ListRateStrategies) | **Get** /properties/{propertyId}/rate-strategies | List rate strategies



## CreateRateStrategy

> RateStrategy CreateRateStrategy(ctx, propertyId).RateStrategy(rateStrategy).Execute()

Create rate strategy



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
	rateStrategy := *openapiclient.NewRateStrategy("550e8400-e29b-41d4-a716-446655440000", "Standard Flexible Rate", "STANDARD", *openapiclient.NewModel0("125.50", "USD")) // RateStrategy | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.RateStrategiesAPI.CreateRateStrategy(context.Background(), propertyId).RateStrategy(rateStrategy).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RateStrategiesAPI.CreateRateStrategy``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateRateStrategy`: RateStrategy
	fmt.Fprintf(os.Stdout, "Response from `RateStrategiesAPI.CreateRateStrategy`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**propertyId** | **string** | Unique property identifier | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateRateStrategyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **rateStrategy** | [**RateStrategy**](RateStrategy.md) |  | 

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


## ListRateStrategies

> ListRateStrategies200Response ListRateStrategies(ctx, propertyId).PageSize(pageSize).StrategyType(strategyType).IsActive(isActive).Execute()

List rate strategies



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
	strategyType := "strategyType_example" // string | Filter by strategy type (optional)
	isActive := true // bool | Filter by active status (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.RateStrategiesAPI.ListRateStrategies(context.Background(), propertyId).PageSize(pageSize).StrategyType(strategyType).IsActive(isActive).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RateStrategiesAPI.ListRateStrategies``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListRateStrategies`: ListRateStrategies200Response
	fmt.Fprintf(os.Stdout, "Response from `RateStrategiesAPI.ListRateStrategies`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**propertyId** | **string** | Unique property identifier | 

### Other Parameters

Other parameters are passed through a pointer to a apiListRateStrategiesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **pageSize** | **int32** | Number of items per page (max 100) | [default to 20]
 **strategyType** | **string** | Filter by strategy type | 
 **isActive** | **bool** | Filter by active status | 

### Return type

[**ListRateStrategies200Response**](ListRateStrategies200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

