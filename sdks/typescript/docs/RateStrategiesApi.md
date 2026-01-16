# RateStrategiesApi

All URIs are relative to *https://api.stayos.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createRateStrategy**](#createratestrategy) | **POST** /properties/{propertyId}/rate-strategies | Create rate strategy|
|[**listRateStrategies**](#listratestrategies) | **GET** /properties/{propertyId}/rate-strategies | List rate strategies|

# **createRateStrategy**
> RateStrategy createRateStrategy(rateStrategy)

Create a new pricing strategy for the property

### Example

```typescript
import {
    RateStrategiesApi,
    Configuration,
    RateStrategy
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new RateStrategiesApi(configuration);

let propertyId: string; //Unique property identifier (default to undefined)
let rateStrategy: RateStrategy; //

const { status, data } = await apiInstance.createRateStrategy(
    propertyId,
    rateStrategy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rateStrategy** | **RateStrategy**|  | |
| **propertyId** | [**string**] | Unique property identifier | defaults to undefined|


### Return type

**RateStrategy**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Rate strategy created successfully |  * Location -  <br>  |
|**400** | Bad request - validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listRateStrategies**
> ListRateStrategies200Response listRateStrategies()

Retrieve all rate strategies for a property

### Example

```typescript
import {
    RateStrategiesApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new RateStrategiesApi(configuration);

let propertyId: string; //Unique property identifier (default to undefined)
let pageSize: number; //Number of items per page (max 100) (optional) (default to 20)
let strategyType: 'STANDARD' | 'DYNAMIC' | 'PROMOTIONAL' | 'CORPORATE' | 'GROUP'; //Filter by strategy type (optional) (default to undefined)
let isActive: boolean; //Filter by active status (optional) (default to undefined)

const { status, data } = await apiInstance.listRateStrategies(
    propertyId,
    pageSize,
    strategyType,
    isActive
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **propertyId** | [**string**] | Unique property identifier | defaults to undefined|
| **pageSize** | [**number**] | Number of items per page (max 100) | (optional) defaults to 20|
| **strategyType** | [**&#39;STANDARD&#39; | &#39;DYNAMIC&#39; | &#39;PROMOTIONAL&#39; | &#39;CORPORATE&#39; | &#39;GROUP&#39;**]**Array<&#39;STANDARD&#39; &#124; &#39;DYNAMIC&#39; &#124; &#39;PROMOTIONAL&#39; &#124; &#39;CORPORATE&#39; &#124; &#39;GROUP&#39;>** | Filter by strategy type | (optional) defaults to undefined|
| **isActive** | [**boolean**] | Filter by active status | (optional) defaults to undefined|


### Return type

**ListRateStrategies200Response**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

