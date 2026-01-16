# OpenAPI\Client\SystemApi

System health, metrics, and configuration

All URIs are relative to https://api.stayos.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getSystemHealth()**](SystemApi.md#getSystemHealth) | **GET** /system/health | Health check |
| [**getSystemMetrics()**](SystemApi.md#getSystemMetrics) | **GET** /system/metrics | Get system metrics |
| [**getSystemStatus()**](SystemApi.md#getSystemStatus) | **GET** /system/status | Get system status |


## `getSystemHealth()`

```php
getSystemHealth(): \OpenAPI\Client\Model\GetSystemHealth200Response
```

Health check

Check system health status

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\SystemApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->getSystemHealth();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SystemApi->getSystemHealth: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\OpenAPI\Client\Model\GetSystemHealth200Response**](../Model/GetSystemHealth200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getSystemMetrics()`

```php
getSystemMetrics($metric, $start_time, $end_time): \OpenAPI\Client\Model\GetSystemMetrics200Response
```

Get system metrics

Retrieve system performance metrics

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SystemApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$metric = 'metric_example'; // string
$start_time = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime
$end_time = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime

try {
    $result = $apiInstance->getSystemMetrics($metric, $start_time, $end_time);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SystemApi->getSystemMetrics: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **metric** | **string**|  | [optional] |
| **start_time** | **\DateTime**|  | [optional] |
| **end_time** | **\DateTime**|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\GetSystemMetrics200Response**](../Model/GetSystemMetrics200Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getSystemStatus()`

```php
getSystemStatus(): \OpenAPI\Client\Model\GetSystemStatus200Response
```

Get system status

Get overall system status and component health

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\SystemApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->getSystemStatus();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SystemApi->getSystemStatus: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\OpenAPI\Client\Model\GetSystemStatus200Response**](../Model/GetSystemStatus200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
