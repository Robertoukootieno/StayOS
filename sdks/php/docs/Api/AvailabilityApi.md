# OpenAPI\Client\AvailabilityApi

Availability calendar and inventory allocation

All URIs are relative to https://api.stayos.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createInventoryBlock()**](AvailabilityApi.md#createInventoryBlock) | **POST** /availability/block | Block inventory |
| [**deleteInventoryBlock()**](AvailabilityApi.md#deleteInventoryBlock) | **DELETE** /availability/block/{blockId} | Remove inventory block |
| [**getAvailabilityCalendar()**](AvailabilityApi.md#getAvailabilityCalendar) | **GET** /availability/calendar | Get availability calendar |
| [**searchAvailability()**](AvailabilityApi.md#searchAvailability) | **POST** /availability/search | Search availability |
| [**updateAvailabilityCalendar()**](AvailabilityApi.md#updateAvailabilityCalendar) | **PUT** /availability/calendar | Update availability calendar (bulk) |


## `createInventoryBlock()`

```php
createInventoryBlock($create_inventory_block_request): \OpenAPI\Client\Model\CreateInventoryBlock201Response
```

Block inventory

Create an inventory block (for groups, maintenance, etc.)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\AvailabilityApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$create_inventory_block_request = new \OpenAPI\Client\Model\CreateInventoryBlockRequest(); // \OpenAPI\Client\Model\CreateInventoryBlockRequest

try {
    $result = $apiInstance->createInventoryBlock($create_inventory_block_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AvailabilityApi->createInventoryBlock: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_inventory_block_request** | [**\OpenAPI\Client\Model\CreateInventoryBlockRequest**](../Model/CreateInventoryBlockRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\CreateInventoryBlock201Response**](../Model/CreateInventoryBlock201Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteInventoryBlock()`

```php
deleteInventoryBlock($block_id)
```

Remove inventory block

Remove an existing inventory block

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\AvailabilityApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$block_id = 'block_id_example'; // string

try {
    $apiInstance->deleteInventoryBlock($block_id);
} catch (Exception $e) {
    echo 'Exception when calling AvailabilityApi->deleteInventoryBlock: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **block_id** | **string**|  | |

### Return type

void (empty response body)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getAvailabilityCalendar()`

```php
getAvailabilityCalendar($property_id, $start_date, $end_date, $unit_type_id): \OpenAPI\Client\Model\AvailabilityCalendar
```

Get availability calendar

Retrieve availability calendar for specified date range

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\AvailabilityApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$property_id = 'property_id_example'; // string
$start_date = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime
$end_date = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime
$unit_type_id = 'unit_type_id_example'; // string

try {
    $result = $apiInstance->getAvailabilityCalendar($property_id, $start_date, $end_date, $unit_type_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AvailabilityApi->getAvailabilityCalendar: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **property_id** | **string**|  | |
| **start_date** | **\DateTime**|  | |
| **end_date** | **\DateTime**|  | |
| **unit_type_id** | **string**|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\AvailabilityCalendar**](../Model/AvailabilityCalendar.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `searchAvailability()`

```php
searchAvailability($search_availability_request): \OpenAPI\Client\Model\SearchAvailability200Response
```

Search availability

Search for available inventory across properties based on criteria.  This is the primary endpoint for booking engines and search interfaces.  **Performance:** Optimized for sub-200ms response time  **Caching:** Results cached for 5 minutes

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure Bearer (JWT) authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\AvailabilityApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$search_availability_request = new \OpenAPI\Client\Model\SearchAvailabilityRequest(); // \OpenAPI\Client\Model\SearchAvailabilityRequest

try {
    $result = $apiInstance->searchAvailability($search_availability_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AvailabilityApi->searchAvailability: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **search_availability_request** | [**\OpenAPI\Client\Model\SearchAvailabilityRequest**](../Model/SearchAvailabilityRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\SearchAvailability200Response**](../Model/SearchAvailability200Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2), [BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateAvailabilityCalendar()`

```php
updateAvailabilityCalendar($update_availability_calendar_request): \OpenAPI\Client\Model\UpdateAvailabilityCalendar200Response
```

Update availability calendar (bulk)

Bulk update availability for multiple dates

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\AvailabilityApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$update_availability_calendar_request = new \OpenAPI\Client\Model\UpdateAvailabilityCalendarRequest(); // \OpenAPI\Client\Model\UpdateAvailabilityCalendarRequest

try {
    $result = $apiInstance->updateAvailabilityCalendar($update_availability_calendar_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AvailabilityApi->updateAvailabilityCalendar: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **update_availability_calendar_request** | [**\OpenAPI\Client\Model\UpdateAvailabilityCalendarRequest**](../Model/UpdateAvailabilityCalendarRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\UpdateAvailabilityCalendar200Response**](../Model/UpdateAvailabilityCalendar200Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
