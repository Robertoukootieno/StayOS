# OpenAPI\Client\StaysApi

Active guest stays and check-in/check-out

All URIs are relative to https://api.stayos.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**addStayCharge()**](StaysApi.md#addStayCharge) | **POST** /stays/{stayId}/charges | Add incidental charge |
| [**checkoutStay()**](StaysApi.md#checkoutStay) | **POST** /stays/{stayId}/checkout | Check-out guest |
| [**createStay()**](StaysApi.md#createStay) | **POST** /stays | Create stay (check-in) |
| [**deactivateKeyCard()**](StaysApi.md#deactivateKeyCard) | **DELETE** /stays/{stayId}/key-cards/{cardId} | Deactivate key card |
| [**extendStay()**](StaysApi.md#extendStay) | **POST** /stays/{stayId}/extend | Extend stay |
| [**getStay()**](StaysApi.md#getStay) | **GET** /stays/{stayId} | Get stay details |
| [**issueKeyCard()**](StaysApi.md#issueKeyCard) | **POST** /stays/{stayId}/key-cards | Issue key card |
| [**listStays()**](StaysApi.md#listStays) | **GET** /stays | List active stays |
| [**replaceStay()**](StaysApi.md#replaceStay) | **PUT** /stays/{stayId} | Replace stay (full update) |
| [**updateStay()**](StaysApi.md#updateStay) | **PATCH** /stays/{stayId} | Update stay (partial update) |


## `addStayCharge()`

```php
addStayCharge($stay_id, $line_item): \OpenAPI\Client\Model\LineItem
```

Add incidental charge

Add an incidental charge to the stay

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\StaysApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$stay_id = 'stay_id_example'; // string
$line_item = new \OpenAPI\Client\Model\LineItem(); // \OpenAPI\Client\Model\LineItem

try {
    $result = $apiInstance->addStayCharge($stay_id, $line_item);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling StaysApi->addStayCharge: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **stay_id** | **string**|  | |
| **line_item** | [**\OpenAPI\Client\Model\LineItem**](../Model/LineItem.md)|  | |

### Return type

[**\OpenAPI\Client\Model\LineItem**](../Model/LineItem.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `checkoutStay()`

```php
checkoutStay($stay_id, $checkout_stay_request): \OpenAPI\Client\Model\Stay
```

Check-out guest

Process guest checkout

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\StaysApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$stay_id = 'stay_id_example'; // string
$checkout_stay_request = new \OpenAPI\Client\Model\CheckoutStayRequest(); // \OpenAPI\Client\Model\CheckoutStayRequest

try {
    $result = $apiInstance->checkoutStay($stay_id, $checkout_stay_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling StaysApi->checkoutStay: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **stay_id** | **string**|  | |
| **checkout_stay_request** | [**\OpenAPI\Client\Model\CheckoutStayRequest**](../Model/CheckoutStayRequest.md)|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\Stay**](../Model/Stay.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createStay()`

```php
createStay($stay): \OpenAPI\Client\Model\Stay
```

Create stay (check-in)

Create a new stay when guest checks in

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\StaysApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$stay = new \OpenAPI\Client\Model\Stay(); // \OpenAPI\Client\Model\Stay

try {
    $result = $apiInstance->createStay($stay);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling StaysApi->createStay: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **stay** | [**\OpenAPI\Client\Model\Stay**](../Model/Stay.md)|  | |

### Return type

[**\OpenAPI\Client\Model\Stay**](../Model/Stay.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deactivateKeyCard()`

```php
deactivateKeyCard($stay_id, $card_id)
```

Deactivate key card

Deactivate a key card

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\StaysApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$stay_id = 'stay_id_example'; // string
$card_id = 'card_id_example'; // string

try {
    $apiInstance->deactivateKeyCard($stay_id, $card_id);
} catch (Exception $e) {
    echo 'Exception when calling StaysApi->deactivateKeyCard: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **stay_id** | **string**|  | |
| **card_id** | **string**|  | |

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

## `extendStay()`

```php
extendStay($stay_id, $extend_stay_request): \OpenAPI\Client\Model\Stay
```

Extend stay

Extend guest stay to a new checkout date

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\StaysApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$stay_id = 'stay_id_example'; // string
$extend_stay_request = new \OpenAPI\Client\Model\ExtendStayRequest(); // \OpenAPI\Client\Model\ExtendStayRequest

try {
    $result = $apiInstance->extendStay($stay_id, $extend_stay_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling StaysApi->extendStay: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **stay_id** | **string**|  | |
| **extend_stay_request** | [**\OpenAPI\Client\Model\ExtendStayRequest**](../Model/ExtendStayRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\Stay**](../Model/Stay.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getStay()`

```php
getStay($stay_id): \OpenAPI\Client\Model\Stay
```

Get stay details

Retrieve details of a specific stay

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\StaysApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$stay_id = 'stay_id_example'; // string

try {
    $result = $apiInstance->getStay($stay_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling StaysApi->getStay: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **stay_id** | **string**|  | |

### Return type

[**\OpenAPI\Client\Model\Stay**](../Model/Stay.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `issueKeyCard()`

```php
issueKeyCard($stay_id, $key_card): \OpenAPI\Client\Model\KeyCard
```

Issue key card

Issue a new key card for the stay

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\StaysApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$stay_id = 'stay_id_example'; // string
$key_card = new \OpenAPI\Client\Model\KeyCard(); // \OpenAPI\Client\Model\KeyCard

try {
    $result = $apiInstance->issueKeyCard($stay_id, $key_card);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling StaysApi->issueKeyCard: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **stay_id** | **string**|  | |
| **key_card** | [**\OpenAPI\Client\Model\KeyCard**](../Model/KeyCard.md)|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\KeyCard**](../Model/KeyCard.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listStays()`

```php
listStays($page_size, $cursor, $property_id, $status): \OpenAPI\Client\Model\ListStays200Response
```

List active stays

Retrieve all active guest stays

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\StaysApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$page_size = 20; // int | Number of items per page (max 100)
$cursor = 'cursor_example'; // string | Cursor for pagination (opaque token)
$property_id = 'property_id_example'; // string
$status = 'status_example'; // string

try {
    $result = $apiInstance->listStays($page_size, $cursor, $property_id, $status);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling StaysApi->listStays: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **string**| Cursor for pagination (opaque token) | [optional] |
| **property_id** | **string**|  | [optional] |
| **status** | **string**|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\ListStays200Response**](../Model/ListStays200Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `replaceStay()`

```php
replaceStay($stay_id, $stay, $if_match): \OpenAPI\Client\Model\Stay
```

Replace stay (full update)

Replace stay with complete new details

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\StaysApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$stay_id = 'stay_id_example'; // string
$stay = new \OpenAPI\Client\Model\Stay(); // \OpenAPI\Client\Model\Stay
$if_match = 'if_match_example'; // string | ETag for optimistic locking

try {
    $result = $apiInstance->replaceStay($stay_id, $stay, $if_match);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling StaysApi->replaceStay: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **stay_id** | **string**|  | |
| **stay** | [**\OpenAPI\Client\Model\Stay**](../Model/Stay.md)|  | |
| **if_match** | **string**| ETag for optimistic locking | [optional] |

### Return type

[**\OpenAPI\Client\Model\Stay**](../Model/Stay.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateStay()`

```php
updateStay($stay_id, $body, $if_match): \OpenAPI\Client\Model\Stay
```

Update stay (partial update)

Update specific fields of a stay

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\StaysApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$stay_id = 'stay_id_example'; // string
$body = array('key' => new \stdClass); // object
$if_match = 'if_match_example'; // string | ETag for optimistic locking

try {
    $result = $apiInstance->updateStay($stay_id, $body, $if_match);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling StaysApi->updateStay: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **stay_id** | **string**|  | |
| **body** | **object**|  | |
| **if_match** | **string**| ETag for optimistic locking | [optional] |

### Return type

[**\OpenAPI\Client\Model\Stay**](../Model/Stay.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
