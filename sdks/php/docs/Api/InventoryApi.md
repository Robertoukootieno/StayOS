# OpenAPI\Client\InventoryApi

Inventory units (rooms, beds, suites) management

All URIs are relative to https://api.stayos.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createInventoryUnit()**](InventoryApi.md#createInventoryUnit) | **POST** /properties/{propertyId}/inventory-units | Create inventory unit |
| [**createUnitType()**](InventoryApi.md#createUnitType) | **POST** /properties/{propertyId}/unit-types | Create unit type |
| [**getUnitType()**](InventoryApi.md#getUnitType) | **GET** /unit-types/{unitTypeId} | Get unit type details |
| [**listInventoryUnits()**](InventoryApi.md#listInventoryUnits) | **GET** /properties/{propertyId}/inventory-units | List inventory units for property |
| [**listUnitTypes()**](InventoryApi.md#listUnitTypes) | **GET** /properties/{propertyId}/unit-types | List unit types |
| [**replaceUnitType()**](InventoryApi.md#replaceUnitType) | **PUT** /unit-types/{unitTypeId} | Replace unit type (full update) |
| [**updateUnitType()**](InventoryApi.md#updateUnitType) | **PATCH** /unit-types/{unitTypeId} | Update unit type (partial update) |


## `createInventoryUnit()`

```php
createInventoryUnit($property_id, $inventory_unit, $idempotency_key): \OpenAPI\Client\Model\InventoryUnit
```

Create inventory unit

Add a new inventory unit to the property

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\InventoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$property_id = 'property_id_example'; // string | Unique property identifier
$inventory_unit = {"propertyId":"550e8400-e29b-41d4-a716-446655440000","unitNumber":"101","unitTypeId":"880e8400-e29b-41d4-a716-446655440000","floor":1,"physicalStatus":"OPERATIONAL","operationalStatus":"AVAILABLE"}; // \OpenAPI\Client\Model\InventoryUnit
$idempotency_key = 'idempotency_key_example'; // string | Unique key for idempotent operations (UUID recommended)

try {
    $result = $apiInstance->createInventoryUnit($property_id, $inventory_unit, $idempotency_key);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling InventoryApi->createInventoryUnit: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **property_id** | **string**| Unique property identifier | |
| **inventory_unit** | [**\OpenAPI\Client\Model\InventoryUnit**](../Model/InventoryUnit.md)|  | |
| **idempotency_key** | **string**| Unique key for idempotent operations (UUID recommended) | [optional] |

### Return type

[**\OpenAPI\Client\Model\InventoryUnit**](../Model/InventoryUnit.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createUnitType()`

```php
createUnitType($property_id, $unit_type): \OpenAPI\Client\Model\UnitType
```

Create unit type

Create a new unit type for a property

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\InventoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$property_id = 'property_id_example'; // string | Unique property identifier
$unit_type = new \OpenAPI\Client\Model\UnitType(); // \OpenAPI\Client\Model\UnitType

try {
    $result = $apiInstance->createUnitType($property_id, $unit_type);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling InventoryApi->createUnitType: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **property_id** | **string**| Unique property identifier | |
| **unit_type** | [**\OpenAPI\Client\Model\UnitType**](../Model/UnitType.md)|  | |

### Return type

[**\OpenAPI\Client\Model\UnitType**](../Model/UnitType.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUnitType()`

```php
getUnitType($unit_type_id): \OpenAPI\Client\Model\UnitType
```

Get unit type details

Retrieve details of a specific unit type

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\InventoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$unit_type_id = 'unit_type_id_example'; // string

try {
    $result = $apiInstance->getUnitType($unit_type_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling InventoryApi->getUnitType: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **unit_type_id** | **string**|  | |

### Return type

[**\OpenAPI\Client\Model\UnitType**](../Model/UnitType.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listInventoryUnits()`

```php
listInventoryUnits($property_id, $page_size, $cursor, $unit_type_id, $operational_status, $floor): \OpenAPI\Client\Model\ListInventoryUnits200Response
```

List inventory units for property

Retrieve all inventory units (rooms, beds, suites) for a property

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\InventoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$property_id = 'property_id_example'; // string | Unique property identifier
$page_size = 20; // int | Number of items per page (max 100)
$cursor = 'cursor_example'; // string | Cursor for pagination (opaque token)
$unit_type_id = 'unit_type_id_example'; // string | Filter by unit type
$operational_status = 'operational_status_example'; // string | Filter by operational status
$floor = 56; // int | Filter by floor number

try {
    $result = $apiInstance->listInventoryUnits($property_id, $page_size, $cursor, $unit_type_id, $operational_status, $floor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling InventoryApi->listInventoryUnits: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **property_id** | **string**| Unique property identifier | |
| **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **string**| Cursor for pagination (opaque token) | [optional] |
| **unit_type_id** | **string**| Filter by unit type | [optional] |
| **operational_status** | **string**| Filter by operational status | [optional] |
| **floor** | **int**| Filter by floor number | [optional] |

### Return type

[**\OpenAPI\Client\Model\ListInventoryUnits200Response**](../Model/ListInventoryUnits200Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listUnitTypes()`

```php
listUnitTypes($property_id, $page_size, $cursor): \OpenAPI\Client\Model\ListUnitTypes200Response
```

List unit types

Retrieve all unit types for a property

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\InventoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$property_id = 'property_id_example'; // string | Unique property identifier
$page_size = 20; // int | Number of items per page (max 100)
$cursor = 'cursor_example'; // string | Cursor for pagination (opaque token)

try {
    $result = $apiInstance->listUnitTypes($property_id, $page_size, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling InventoryApi->listUnitTypes: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **property_id** | **string**| Unique property identifier | |
| **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **string**| Cursor for pagination (opaque token) | [optional] |

### Return type

[**\OpenAPI\Client\Model\ListUnitTypes200Response**](../Model/ListUnitTypes200Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `replaceUnitType()`

```php
replaceUnitType($unit_type_id, $unit_type, $if_match): \OpenAPI\Client\Model\UnitType
```

Replace unit type (full update)

Replace unit type with complete new details

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\InventoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$unit_type_id = 'unit_type_id_example'; // string
$unit_type = new \OpenAPI\Client\Model\UnitType(); // \OpenAPI\Client\Model\UnitType
$if_match = 'if_match_example'; // string | ETag for optimistic locking

try {
    $result = $apiInstance->replaceUnitType($unit_type_id, $unit_type, $if_match);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling InventoryApi->replaceUnitType: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **unit_type_id** | **string**|  | |
| **unit_type** | [**\OpenAPI\Client\Model\UnitType**](../Model/UnitType.md)|  | |
| **if_match** | **string**| ETag for optimistic locking | [optional] |

### Return type

[**\OpenAPI\Client\Model\UnitType**](../Model/UnitType.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateUnitType()`

```php
updateUnitType($unit_type_id, $body, $if_match): \OpenAPI\Client\Model\UnitType
```

Update unit type (partial update)

Update specific fields of a unit type

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\InventoryApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$unit_type_id = 'unit_type_id_example'; // string
$body = array('key' => new \stdClass); // object
$if_match = 'if_match_example'; // string | ETag for optimistic locking

try {
    $result = $apiInstance->updateUnitType($unit_type_id, $body, $if_match);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling InventoryApi->updateUnitType: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **unit_type_id** | **string**|  | |
| **body** | **object**|  | |
| **if_match** | **string**| ETag for optimistic locking | [optional] |

### Return type

[**\OpenAPI\Client\Model\UnitType**](../Model/UnitType.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
