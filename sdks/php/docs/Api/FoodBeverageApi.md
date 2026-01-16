# OpenAPI\Client\FoodBeverageApi



All URIs are relative to https://api.stayos.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**cancelFBOrder()**](FoodBeverageApi.md#cancelFBOrder) | **POST** /fb/orders/{orderId}/cancel | Cancel F&amp;B order |
| [**confirmFBOrder()**](FoodBeverageApi.md#confirmFBOrder) | **POST** /fb/orders/{orderId}/confirm | Confirm F&amp;B order |
| [**consumeFBInventory()**](FoodBeverageApi.md#consumeFBInventory) | **POST** /fb/inventory/{itemId}/consume | Record consumption |
| [**countFBInventory()**](FoodBeverageApi.md#countFBInventory) | **POST** /fb/inventory/count | Perform stock count |
| [**createFBInventoryItem()**](FoodBeverageApi.md#createFBInventoryItem) | **POST** /fb/inventory | Create inventory item |
| [**createFBOrder()**](FoodBeverageApi.md#createFBOrder) | **POST** /fb/orders | Create F&amp;B order |
| [**createMenuItem()**](FoodBeverageApi.md#createMenuItem) | **POST** /fb/menu | Create menu item |
| [**getFBInventoryItem()**](FoodBeverageApi.md#getFBInventoryItem) | **GET** /fb/inventory/{itemId} | Get inventory item details |
| [**getMenuItem()**](FoodBeverageApi.md#getMenuItem) | **GET** /fb/menu/{itemId} | Get menu item details |
| [**listFBInventory()**](FoodBeverageApi.md#listFBInventory) | **GET** /fb/inventory | List F&amp;B inventory items |
| [**listFBOrders()**](FoodBeverageApi.md#listFBOrders) | **GET** /fb/orders | List F&amp;B orders |
| [**listMenuItems()**](FoodBeverageApi.md#listMenuItems) | **GET** /fb/menu | List menu items |
| [**markFBItemReady()**](FoodBeverageApi.md#markFBItemReady) | **POST** /fb/orders/{orderId}/items/{itemId}/ready | Mark item as ready |
| [**receiveFBInventory()**](FoodBeverageApi.md#receiveFBInventory) | **POST** /fb/inventory/{itemId}/receive | Receive stock |
| [**replaceFBOrder()**](FoodBeverageApi.md#replaceFBOrder) | **PUT** /fb/orders/{orderId} | Replace F&amp;B order (full update) |
| [**replaceMenuItem()**](FoodBeverageApi.md#replaceMenuItem) | **PUT** /fb/menu/{itemId} | Replace menu item (full update) |
| [**serveFBOrder()**](FoodBeverageApi.md#serveFBOrder) | **POST** /fb/orders/{orderId}/serve | Mark order as served |
| [**updateFBInventoryItem()**](FoodBeverageApi.md#updateFBInventoryItem) | **PUT** /fb/inventory/{itemId} | Update inventory item |
| [**updateFBOrder()**](FoodBeverageApi.md#updateFBOrder) | **PATCH** /fb/orders/{orderId} | Update F&amp;B order (partial update) |
| [**updateMenuItem()**](FoodBeverageApi.md#updateMenuItem) | **PATCH** /fb/menu/{itemId} | Update menu item (partial update) |
| [**wasteFBInventory()**](FoodBeverageApi.md#wasteFBInventory) | **POST** /fb/inventory/{itemId}/waste | Record waste |


## `cancelFBOrder()`

```php
cancelFBOrder($order_id, $cancel_service_request_request): \OpenAPI\Client\Model\FBOrder
```

Cancel F&B order

Cancel an F&B order

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\FoodBeverageApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$order_id = 'order_id_example'; // string
$cancel_service_request_request = new \OpenAPI\Client\Model\CancelServiceRequestRequest(); // \OpenAPI\Client\Model\CancelServiceRequestRequest

try {
    $result = $apiInstance->cancelFBOrder($order_id, $cancel_service_request_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FoodBeverageApi->cancelFBOrder: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **order_id** | **string**|  | |
| **cancel_service_request_request** | [**\OpenAPI\Client\Model\CancelServiceRequestRequest**](../Model/CancelServiceRequestRequest.md)|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\FBOrder**](../Model/FBOrder.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `confirmFBOrder()`

```php
confirmFBOrder($order_id, $confirm_fb_order_request): \OpenAPI\Client\Model\FBOrder
```

Confirm F&B order

Confirm receipt and acceptance of an F&B order

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\FoodBeverageApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$order_id = 'order_id_example'; // string
$confirm_fb_order_request = new \OpenAPI\Client\Model\ConfirmFBOrderRequest(); // \OpenAPI\Client\Model\ConfirmFBOrderRequest

try {
    $result = $apiInstance->confirmFBOrder($order_id, $confirm_fb_order_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FoodBeverageApi->confirmFBOrder: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **order_id** | **string**|  | |
| **confirm_fb_order_request** | [**\OpenAPI\Client\Model\ConfirmFBOrderRequest**](../Model/ConfirmFBOrderRequest.md)|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\FBOrder**](../Model/FBOrder.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `consumeFBInventory()`

```php
consumeFBInventory($item_id, $receive_fb_inventory_request): \OpenAPI\Client\Model\FBInventoryItem
```

Record consumption

Record inventory consumption

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\FoodBeverageApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$item_id = 'item_id_example'; // string
$receive_fb_inventory_request = new \OpenAPI\Client\Model\ReceiveFBInventoryRequest(); // \OpenAPI\Client\Model\ReceiveFBInventoryRequest

try {
    $result = $apiInstance->consumeFBInventory($item_id, $receive_fb_inventory_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FoodBeverageApi->consumeFBInventory: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **item_id** | **string**|  | |
| **receive_fb_inventory_request** | [**\OpenAPI\Client\Model\ReceiveFBInventoryRequest**](../Model/ReceiveFBInventoryRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\FBInventoryItem**](../Model/FBInventoryItem.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `countFBInventory()`

```php
countFBInventory($count_fb_inventory_request): \OpenAPI\Client\Model\CountFBInventory200Response
```

Perform stock count

Perform physical inventory stock count

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\FoodBeverageApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$count_fb_inventory_request = new \OpenAPI\Client\Model\CountFBInventoryRequest(); // \OpenAPI\Client\Model\CountFBInventoryRequest

try {
    $result = $apiInstance->countFBInventory($count_fb_inventory_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FoodBeverageApi->countFBInventory: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **count_fb_inventory_request** | [**\OpenAPI\Client\Model\CountFBInventoryRequest**](../Model/CountFBInventoryRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\CountFBInventory200Response**](../Model/CountFBInventory200Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createFBInventoryItem()`

```php
createFBInventoryItem($fb_inventory_item): \OpenAPI\Client\Model\FBInventoryItem
```

Create inventory item

Create a new F&B inventory item

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\FoodBeverageApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fb_inventory_item = new \OpenAPI\Client\Model\FBInventoryItem(); // \OpenAPI\Client\Model\FBInventoryItem

try {
    $result = $apiInstance->createFBInventoryItem($fb_inventory_item);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FoodBeverageApi->createFBInventoryItem: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **fb_inventory_item** | [**\OpenAPI\Client\Model\FBInventoryItem**](../Model/FBInventoryItem.md)|  | |

### Return type

[**\OpenAPI\Client\Model\FBInventoryItem**](../Model/FBInventoryItem.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createFBOrder()`

```php
createFBOrder($body): object
```

Create F&B order

Create a new F&B order for room service, restaurant, or bar service

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\FoodBeverageApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$body = array('key' => new \stdClass); // object

try {
    $result = $apiInstance->createFBOrder($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FoodBeverageApi->createFBOrder: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **object**|  | |

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

## `createMenuItem()`

```php
createMenuItem($menu_item): \OpenAPI\Client\Model\MenuItem
```

Create menu item

Create a new menu item

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\FoodBeverageApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$menu_item = new \OpenAPI\Client\Model\MenuItem(); // \OpenAPI\Client\Model\MenuItem

try {
    $result = $apiInstance->createMenuItem($menu_item);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FoodBeverageApi->createMenuItem: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **menu_item** | [**\OpenAPI\Client\Model\MenuItem**](../Model/MenuItem.md)|  | |

### Return type

[**\OpenAPI\Client\Model\MenuItem**](../Model/MenuItem.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getFBInventoryItem()`

```php
getFBInventoryItem($item_id): \OpenAPI\Client\Model\FBInventoryItem
```

Get inventory item details

Retrieve details of a specific F&B inventory item

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\FoodBeverageApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$item_id = 'item_id_example'; // string

try {
    $result = $apiInstance->getFBInventoryItem($item_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FoodBeverageApi->getFBInventoryItem: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **item_id** | **string**|  | |

### Return type

[**\OpenAPI\Client\Model\FBInventoryItem**](../Model/FBInventoryItem.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getMenuItem()`

```php
getMenuItem($item_id): \OpenAPI\Client\Model\MenuItem
```

Get menu item details

Retrieve details of a specific menu item

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\FoodBeverageApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$item_id = 'item_id_example'; // string

try {
    $result = $apiInstance->getMenuItem($item_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FoodBeverageApi->getMenuItem: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **item_id** | **string**|  | |

### Return type

[**\OpenAPI\Client\Model\MenuItem**](../Model/MenuItem.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listFBInventory()`

```php
listFBInventory($property_id, $low_stock, $page_size, $cursor): \OpenAPI\Client\Model\ListFBInventory200Response
```

List F&B inventory items

List all F&B inventory items with stock levels

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\FoodBeverageApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$property_id = 'property_id_example'; // string
$low_stock = True; // bool
$page_size = 20; // int | Number of items per page (max 100)
$cursor = 'cursor_example'; // string | Cursor for pagination (opaque token)

try {
    $result = $apiInstance->listFBInventory($property_id, $low_stock, $page_size, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FoodBeverageApi->listFBInventory: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **property_id** | **string**|  | [optional] |
| **low_stock** | **bool**|  | [optional] |
| **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **string**| Cursor for pagination (opaque token) | [optional] |

### Return type

[**\OpenAPI\Client\Model\ListFBInventory200Response**](../Model/ListFBInventory200Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listFBOrders()`

```php
listFBOrders($property_id, $status, $page_size, $cursor): \OpenAPI\Client\Model\GetGuestStays200Response
```

List F&B orders

List all food & beverage orders with filtering by property, venue, status, and date range

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\FoodBeverageApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$property_id = 'property_id_example'; // string
$status = 'status_example'; // string
$page_size = 20; // int | Number of items per page (max 100)
$cursor = 'cursor_example'; // string | Cursor for pagination (opaque token)

try {
    $result = $apiInstance->listFBOrders($property_id, $status, $page_size, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FoodBeverageApi->listFBOrders: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **property_id** | **string**|  | [optional] |
| **status** | **string**|  | [optional] |
| **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **string**| Cursor for pagination (opaque token) | [optional] |

### Return type

[**\OpenAPI\Client\Model\GetGuestStays200Response**](../Model/GetGuestStays200Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listMenuItems()`

```php
listMenuItems($property_id, $venue, $is_available, $page_size, $cursor): \OpenAPI\Client\Model\ListMenuItems200Response
```

List menu items

List all menu items with filtering by venue and availability

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\FoodBeverageApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$property_id = 'property_id_example'; // string
$venue = 'venue_example'; // string
$is_available = True; // bool
$page_size = 20; // int | Number of items per page (max 100)
$cursor = 'cursor_example'; // string | Cursor for pagination (opaque token)

try {
    $result = $apiInstance->listMenuItems($property_id, $venue, $is_available, $page_size, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FoodBeverageApi->listMenuItems: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **property_id** | **string**|  | [optional] |
| **venue** | **string**|  | [optional] |
| **is_available** | **bool**|  | [optional] |
| **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **string**| Cursor for pagination (opaque token) | [optional] |

### Return type

[**\OpenAPI\Client\Model\ListMenuItems200Response**](../Model/ListMenuItems200Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `markFBItemReady()`

```php
markFBItemReady($order_id, $item_id): \OpenAPI\Client\Model\FBOrder
```

Mark item as ready

Mark an order item as ready for delivery

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\FoodBeverageApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$order_id = 'order_id_example'; // string
$item_id = 'item_id_example'; // string

try {
    $result = $apiInstance->markFBItemReady($order_id, $item_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FoodBeverageApi->markFBItemReady: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **order_id** | **string**|  | |
| **item_id** | **string**|  | |

### Return type

[**\OpenAPI\Client\Model\FBOrder**](../Model/FBOrder.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `receiveFBInventory()`

```php
receiveFBInventory($item_id, $receive_fb_inventory_request): \OpenAPI\Client\Model\FBInventoryItem
```

Receive stock

Record receipt of inventory stock

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\FoodBeverageApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$item_id = 'item_id_example'; // string
$receive_fb_inventory_request = new \OpenAPI\Client\Model\ReceiveFBInventoryRequest(); // \OpenAPI\Client\Model\ReceiveFBInventoryRequest

try {
    $result = $apiInstance->receiveFBInventory($item_id, $receive_fb_inventory_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FoodBeverageApi->receiveFBInventory: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **item_id** | **string**|  | |
| **receive_fb_inventory_request** | [**\OpenAPI\Client\Model\ReceiveFBInventoryRequest**](../Model/ReceiveFBInventoryRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\FBInventoryItem**](../Model/FBInventoryItem.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `replaceFBOrder()`

```php
replaceFBOrder($order_id, $body, $if_match): object
```

Replace F&B order (full update)

Replace F&B order with complete new order details including items, pricing, and delivery information

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\FoodBeverageApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$order_id = 'order_id_example'; // string
$body = array('key' => new \stdClass); // object
$if_match = 'if_match_example'; // string | ETag for optimistic locking

try {
    $result = $apiInstance->replaceFBOrder($order_id, $body, $if_match);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FoodBeverageApi->replaceFBOrder: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **order_id** | **string**|  | |
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

## `replaceMenuItem()`

```php
replaceMenuItem($item_id, $body, $if_match): object
```

Replace menu item (full update)

Replace menu item with complete new details including pricing, ingredients, and availability

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\FoodBeverageApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$item_id = 'item_id_example'; // string
$body = array('key' => new \stdClass); // object
$if_match = 'if_match_example'; // string | ETag for optimistic locking

try {
    $result = $apiInstance->replaceMenuItem($item_id, $body, $if_match);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FoodBeverageApi->replaceMenuItem: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **item_id** | **string**|  | |
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

## `serveFBOrder()`

```php
serveFBOrder($order_id, $serve_fb_order_request): \OpenAPI\Client\Model\FBOrder
```

Mark order as served

Mark an order as delivered/served to guest

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\FoodBeverageApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$order_id = 'order_id_example'; // string
$serve_fb_order_request = new \OpenAPI\Client\Model\ServeFBOrderRequest(); // \OpenAPI\Client\Model\ServeFBOrderRequest

try {
    $result = $apiInstance->serveFBOrder($order_id, $serve_fb_order_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FoodBeverageApi->serveFBOrder: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **order_id** | **string**|  | |
| **serve_fb_order_request** | [**\OpenAPI\Client\Model\ServeFBOrderRequest**](../Model/ServeFBOrderRequest.md)|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\FBOrder**](../Model/FBOrder.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateFBInventoryItem()`

```php
updateFBInventoryItem($item_id, $fb_inventory_item): \OpenAPI\Client\Model\FBInventoryItem
```

Update inventory item

Update F&B inventory item details

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\FoodBeverageApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$item_id = 'item_id_example'; // string
$fb_inventory_item = new \OpenAPI\Client\Model\FBInventoryItem(); // \OpenAPI\Client\Model\FBInventoryItem

try {
    $result = $apiInstance->updateFBInventoryItem($item_id, $fb_inventory_item);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FoodBeverageApi->updateFBInventoryItem: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **item_id** | **string**|  | |
| **fb_inventory_item** | [**\OpenAPI\Client\Model\FBInventoryItem**](../Model/FBInventoryItem.md)|  | |

### Return type

[**\OpenAPI\Client\Model\FBInventoryItem**](../Model/FBInventoryItem.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateFBOrder()`

```php
updateFBOrder($order_id, $body, $if_match): object
```

Update F&B order (partial update)

Partially update F&B order to modify status, add items, or update delivery details **Common use cases:** | Update specific fields of an F&B order. **Common use cases:** - Update order status - Modify delivery time - Add special instructions - Change order items

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\FoodBeverageApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$order_id = 'order_id_example'; // string
$body = {"status":"PREPARING","estimatedDelivery":"2025-12-21T19:30:00Z","specialInstructions":"No nuts - allergy"}; // object
$if_match = 'if_match_example'; // string | ETag for optimistic locking

try {
    $result = $apiInstance->updateFBOrder($order_id, $body, $if_match);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FoodBeverageApi->updateFBOrder: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **order_id** | **string**|  | |
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

## `updateMenuItem()`

```php
updateMenuItem($item_id, $body, $if_match): object
```

Update menu item (partial update)

Partially update menu item to modify pricing, availability, or description **Common use cases:** | Update specific fields of a menu item. **Common use cases:** - Update price - Change availability - Modify description - Update dietary information

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\FoodBeverageApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$item_id = 'item_id_example'; // string
$body = {"price":{"amount":24.99,"currency":"USD"},"available":true}; // object
$if_match = 'if_match_example'; // string | ETag for optimistic locking

try {
    $result = $apiInstance->updateMenuItem($item_id, $body, $if_match);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FoodBeverageApi->updateMenuItem: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **item_id** | **string**|  | |
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

## `wasteFBInventory()`

```php
wasteFBInventory($item_id, $waste_fb_inventory_request): \OpenAPI\Client\Model\FBInventoryItem
```

Record waste

Record inventory waste

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\FoodBeverageApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$item_id = 'item_id_example'; // string
$waste_fb_inventory_request = new \OpenAPI\Client\Model\WasteFBInventoryRequest(); // \OpenAPI\Client\Model\WasteFBInventoryRequest

try {
    $result = $apiInstance->wasteFBInventory($item_id, $waste_fb_inventory_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FoodBeverageApi->wasteFBInventory: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **item_id** | **string**|  | |
| **waste_fb_inventory_request** | [**\OpenAPI\Client\Model\WasteFBInventoryRequest**](../Model/WasteFBInventoryRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\FBInventoryItem**](../Model/FBInventoryItem.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
