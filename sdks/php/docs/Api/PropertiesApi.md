# OpenAPI\Client\PropertiesApi

Property and organizational management

All URIs are relative to https://api.stayos.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createProperty()**](PropertiesApi.md#createProperty) | **POST** /properties | Create property |
| [**deleteProperty()**](PropertiesApi.md#deleteProperty) | **DELETE** /properties/{propertyId} | Delete property |
| [**getProperty()**](PropertiesApi.md#getProperty) | **GET** /properties/{propertyId} | Get property by ID |
| [**listProperties()**](PropertiesApi.md#listProperties) | **GET** /properties | List properties |
| [**replaceInventoryUnit()**](PropertiesApi.md#replaceInventoryUnit) | **PUT** /inventory-units/{unitId} | Replace inventory unit (full update) |
| [**replaceProperty()**](PropertiesApi.md#replaceProperty) | **PUT** /properties/{propertyId} | Replace property (full update) |
| [**replaceRateStrategy()**](PropertiesApi.md#replaceRateStrategy) | **PUT** /rate-strategies/{strategyId} | Replace rate strategy (full update) |
| [**updateInventoryUnit()**](PropertiesApi.md#updateInventoryUnit) | **PATCH** /inventory-units/{unitId} | Update inventory unit (partial update) |
| [**updateProperty()**](PropertiesApi.md#updateProperty) | **PATCH** /properties/{propertyId} | Update property (partial update) |
| [**updateRateStrategy()**](PropertiesApi.md#updateRateStrategy) | **PATCH** /rate-strategies/{strategyId} | Update rate strategy (partial update) |


## `createProperty()`

```php
createProperty($property, $idempotency_key): \OpenAPI\Client\Model\Property
```

Create property

Create a new property. This is typically an administrative operation.  **Authorization:** Requires `write:properties` or `admin:all` scope  **Idempotency:** Supports idempotency via `Idempotency-Key` header

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\PropertiesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$property = {"name":"Grand Plaza Hotel","classification":"HOTEL","starRating":4.5,"location":{"street":"123 Main Street","city":"San Francisco","state":"CA","postalCode":"94102","country":"US"},"coordinates":{"latitude":37.7749,"longitude":-122.4194},"timezone":"America/Los_Angeles","policies":{"checkInTime":"15:00","checkOutTime":"11:00","cancellationPolicy":{"refundability":"FULLY_REFUNDABLE","freeCancellationHours":24}},"amenities":["WIFI","PARKING","POOL","GYM"],"contactInfo":{"email":"info@grandplaza.com","phone":"+14155551234"}}; // \OpenAPI\Client\Model\Property
$idempotency_key = 'idempotency_key_example'; // string | Unique key for idempotent operations (UUID recommended)

try {
    $result = $apiInstance->createProperty($property, $idempotency_key);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PropertiesApi->createProperty: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **property** | [**\OpenAPI\Client\Model\Property**](../Model/Property.md)|  | |
| **idempotency_key** | **string**| Unique key for idempotent operations (UUID recommended) | [optional] |

### Return type

[**\OpenAPI\Client\Model\Property**](../Model/Property.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteProperty()`

```php
deleteProperty($property_id)
```

Delete property

Soft delete a property. Property status changes to CLOSED.  **Warning:** This operation cannot be undone. All future reservations will be cancelled.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\PropertiesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$property_id = 'property_id_example'; // string | Unique property identifier

try {
    $apiInstance->deleteProperty($property_id);
} catch (Exception $e) {
    echo 'Exception when calling PropertiesApi->deleteProperty: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **property_id** | **string**| Unique property identifier | |

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

## `getProperty()`

```php
getProperty($property_id, $expand, $if_none_match): \OpenAPI\Client\Model\Property
```

Get property by ID

Retrieve detailed information about a specific property

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


$apiInstance = new OpenAPI\Client\Api\PropertiesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$property_id = 'property_id_example'; // string | Unique property identifier
$expand = property,guest,rateStrategy; // string | Comma-separated list of related resources to include
$if_none_match = 'if_none_match_example'; // string | ETag for conditional requests

try {
    $result = $apiInstance->getProperty($property_id, $expand, $if_none_match);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PropertiesApi->getProperty: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **property_id** | **string**| Unique property identifier | |
| **expand** | **string**| Comma-separated list of related resources to include | [optional] |
| **if_none_match** | **string**| ETag for conditional requests | [optional] |

### Return type

[**\OpenAPI\Client\Model\Property**](../Model/Property.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2), [BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listProperties()`

```php
listProperties($page_size, $cursor, $organization_id, $operational_status, $classification, $sort_by, $sort_order, $expand): \OpenAPI\Client\Model\ListProperties200Response
```

List properties

Retrieve a paginated list of properties. Supports filtering, sorting, and field expansion.  **Authorization:** Requires `read:properties` scope  **Rate Limit:** 100 requests/minute

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


$apiInstance = new OpenAPI\Client\Api\PropertiesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$page_size = 20; // int | Number of items per page (max 100)
$cursor = 'cursor_example'; // string | Cursor for pagination (opaque token)
$organization_id = 'organization_id_example'; // string | Filter by organization
$operational_status = 'operational_status_example'; // string | Filter by operational status
$classification = 'classification_example'; // string | Filter by property classification
$sort_by = 'sort_by_example'; // string | Field to sort by
$sort_order = 'asc'; // string | Sort order
$expand = property,guest,rateStrategy; // string | Comma-separated list of related resources to include

try {
    $result = $apiInstance->listProperties($page_size, $cursor, $organization_id, $operational_status, $classification, $sort_by, $sort_order, $expand);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PropertiesApi->listProperties: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **string**| Cursor for pagination (opaque token) | [optional] |
| **organization_id** | **string**| Filter by organization | [optional] |
| **operational_status** | **string**| Filter by operational status | [optional] |
| **classification** | **string**| Filter by property classification | [optional] |
| **sort_by** | **string**| Field to sort by | [optional] |
| **sort_order** | **string**| Sort order | [optional] [default to &#39;asc&#39;] |
| **expand** | **string**| Comma-separated list of related resources to include | [optional] |

### Return type

[**\OpenAPI\Client\Model\ListProperties200Response**](../Model/ListProperties200Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2), [BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `replaceInventoryUnit()`

```php
replaceInventoryUnit($unit_id, $body, $if_match): object
```

Replace inventory unit (full update)

Replace inventory unit with complete new details including type, status, and physical attributes

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\PropertiesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$unit_id = 'unit_id_example'; // string
$body = array('key' => new \stdClass); // object
$if_match = 'if_match_example'; // string | ETag for optimistic locking

try {
    $result = $apiInstance->replaceInventoryUnit($unit_id, $body, $if_match);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PropertiesApi->replaceInventoryUnit: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **unit_id** | **string**|  | |
| **body** | **object**|  | |
| **if_match** | **string**| ETag for optimistic locking | [optional] |

### Return type

**object**

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `replaceProperty()`

```php
replaceProperty($property_id, $property, $if_match): \OpenAPI\Client\Model\Property
```

Replace property (full update)

Replace an existing property with a complete new representation. All fields must be provided. For partial updates, use PATCH instead.  **Optimistic Locking:** Use `If-Match` header with ETag to prevent conflicts

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\PropertiesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$property_id = 'property_id_example'; // string | Unique property identifier
$property = new \OpenAPI\Client\Model\Property(); // \OpenAPI\Client\Model\Property
$if_match = 'if_match_example'; // string | ETag for optimistic locking

try {
    $result = $apiInstance->replaceProperty($property_id, $property, $if_match);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PropertiesApi->replaceProperty: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **property_id** | **string**| Unique property identifier | |
| **property** | [**\OpenAPI\Client\Model\Property**](../Model/Property.md)|  | |
| **if_match** | **string**| ETag for optimistic locking | [optional] |

### Return type

[**\OpenAPI\Client\Model\Property**](../Model/Property.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `replaceRateStrategy()`

```php
replaceRateStrategy($strategy_id, $rate_strategy, $if_match): \OpenAPI\Client\Model\RateStrategy
```

Replace rate strategy (full update)

Replace rate strategy with complete new pricing rules, restrictions, and yield management settings

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\PropertiesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$strategy_id = 'strategy_id_example'; // string
$rate_strategy = new \OpenAPI\Client\Model\RateStrategy(); // \OpenAPI\Client\Model\RateStrategy
$if_match = 'if_match_example'; // string | ETag for optimistic locking

try {
    $result = $apiInstance->replaceRateStrategy($strategy_id, $rate_strategy, $if_match);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PropertiesApi->replaceRateStrategy: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **strategy_id** | **string**|  | |
| **rate_strategy** | [**\OpenAPI\Client\Model\RateStrategy**](../Model/RateStrategy.md)|  | |
| **if_match** | **string**| ETag for optimistic locking | [optional] |

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

## `updateInventoryUnit()`

```php
updateInventoryUnit($unit_id, $body, $if_match): object
```

Update inventory unit (partial update)

Update specific fields of an inventory unit.  **Common use cases:** - Change unit status (AVAILABLE → MAINTENANCE) - Update room features - Modify floor/location - Update amenities

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\PropertiesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$unit_id = 'unit_id_example'; // string
$body = {"status":"MAINTENANCE","maintenanceNotes":"AC repair scheduled"}; // object
$if_match = 'if_match_example'; // string | ETag for optimistic locking

try {
    $result = $apiInstance->updateInventoryUnit($unit_id, $body, $if_match);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PropertiesApi->updateInventoryUnit: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **unit_id** | **string**|  | |
| **body** | **object**|  | |
| **if_match** | **string**| ETag for optimistic locking | [optional] |

### Return type

**object**

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateProperty()`

```php
updateProperty($property_id, $body, $if_match): \OpenAPI\Client\Model\Property
```

Update property (partial update)

Partially update a property. Only provided fields will be updated. This is the recommended method for most updates.  **Optimistic Locking:** Use `If-Match` header with ETag to prevent conflicts  **Example:** Update only the property name and contact email: ```json {   \"name\": \"New Property Name\",   \"contactInfo\": {     \"email\": \"newemail@property.com\"   } } ```

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\PropertiesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$property_id = 'property_id_example'; // string | Unique property identifier
$body = {"name":"Updated Property Name","contactInfo":{"email":"newemail@example.com"}}; // object
$if_match = 'if_match_example'; // string | ETag for optimistic locking

try {
    $result = $apiInstance->updateProperty($property_id, $body, $if_match);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PropertiesApi->updateProperty: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **property_id** | **string**| Unique property identifier | |
| **body** | **object**|  | |
| **if_match** | **string**| ETag for optimistic locking | [optional] |

### Return type

[**\OpenAPI\Client\Model\Property**](../Model/Property.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateRateStrategy()`

```php
updateRateStrategy($strategy_id, $body, $if_match): \OpenAPI\Client\Model\RateStrategy
```

Update rate strategy (partial update)

Update specific fields of a rate strategy.  **Common use cases:** - Adjust base rate - Update seasonal modifiers - Change minimum stay requirements - Modify cancellation policy

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\PropertiesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$strategy_id = 'strategy_id_example'; // string
$body = {"baseRate":{"amount":199.99,"currency":"USD"},"minimumStay":2}; // object
$if_match = 'if_match_example'; // string | ETag for optimistic locking

try {
    $result = $apiInstance->updateRateStrategy($strategy_id, $body, $if_match);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PropertiesApi->updateRateStrategy: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **strategy_id** | **string**|  | |
| **body** | **object**|  | |
| **if_match** | **string**| ETag for optimistic locking | [optional] |

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
