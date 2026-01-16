# OpenAPI\Client\RateStrategiesApi



All URIs are relative to https://api.stayos.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createRateStrategy()**](RateStrategiesApi.md#createRateStrategy) | **POST** /properties/{propertyId}/rate-strategies | Create rate strategy |
| [**listRateStrategies()**](RateStrategiesApi.md#listRateStrategies) | **GET** /properties/{propertyId}/rate-strategies | List rate strategies |


## `createRateStrategy()`

```php
createRateStrategy($property_id, $rate_strategy): \OpenAPI\Client\Model\RateStrategy
```

Create rate strategy

Create a new pricing strategy for the property

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\RateStrategiesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$property_id = 'property_id_example'; // string | Unique property identifier
$rate_strategy = new \OpenAPI\Client\Model\RateStrategy(); // \OpenAPI\Client\Model\RateStrategy

try {
    $result = $apiInstance->createRateStrategy($property_id, $rate_strategy);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RateStrategiesApi->createRateStrategy: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **property_id** | **string**| Unique property identifier | |
| **rate_strategy** | [**\OpenAPI\Client\Model\RateStrategy**](../Model/RateStrategy.md)|  | |

### Return type

[**\OpenAPI\Client\Model\RateStrategy**](../Model/RateStrategy.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listRateStrategies()`

```php
listRateStrategies($property_id, $page_size, $strategy_type, $is_active): \OpenAPI\Client\Model\ListRateStrategies200Response
```

List rate strategies

Retrieve all rate strategies for a property

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\RateStrategiesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$property_id = 'property_id_example'; // string | Unique property identifier
$page_size = 20; // int | Number of items per page (max 100)
$strategy_type = 'strategy_type_example'; // string | Filter by strategy type
$is_active = True; // bool | Filter by active status

try {
    $result = $apiInstance->listRateStrategies($property_id, $page_size, $strategy_type, $is_active);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RateStrategiesApi->listRateStrategies: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **property_id** | **string**| Unique property identifier | |
| **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20] |
| **strategy_type** | **string**| Filter by strategy type | [optional] |
| **is_active** | **bool**| Filter by active status | [optional] |

### Return type

[**\OpenAPI\Client\Model\ListRateStrategies200Response**](../Model/ListRateStrategies200Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
