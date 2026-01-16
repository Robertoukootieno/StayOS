# OpenAPI\Client\ProcurementApi

Purchase orders, suppliers, and inventory procurement

All URIs are relative to https://api.stayos.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**approvePurchaseOrder()**](ProcurementApi.md#approvePurchaseOrder) | **POST** /procurement/purchase-orders/{poId}/approve | Approve purchase order |
| [**createPurchaseOrder()**](ProcurementApi.md#createPurchaseOrder) | **POST** /procurement/purchase-orders | Create purchase order |
| [**createSupplier()**](ProcurementApi.md#createSupplier) | **POST** /procurement/suppliers | Create supplier |
| [**getSupplier()**](ProcurementApi.md#getSupplier) | **GET** /procurement/suppliers/{supplierId} | Get supplier details |
| [**getSupplierPerformance()**](ProcurementApi.md#getSupplierPerformance) | **GET** /procurement/suppliers/{supplierId}/performance | Get supplier performance |
| [**invoicePurchaseOrder()**](ProcurementApi.md#invoicePurchaseOrder) | **POST** /procurement/purchase-orders/{poId}/invoice | Record invoice for purchase order |
| [**listPurchaseOrders()**](ProcurementApi.md#listPurchaseOrders) | **GET** /procurement/purchase-orders | List purchase orders |
| [**listSuppliers()**](ProcurementApi.md#listSuppliers) | **GET** /procurement/suppliers | List suppliers |
| [**receivePurchaseOrder()**](ProcurementApi.md#receivePurchaseOrder) | **POST** /procurement/purchase-orders/{poId}/receive | Receive purchase order |
| [**replacePurchaseOrder()**](ProcurementApi.md#replacePurchaseOrder) | **PUT** /procurement/purchase-orders/{poId} | Replace purchase order (full update) |
| [**replaceSupplier()**](ProcurementApi.md#replaceSupplier) | **PUT** /procurement/suppliers/{supplierId} | Replace supplier (full update) |
| [**submitPurchaseOrder()**](ProcurementApi.md#submitPurchaseOrder) | **POST** /procurement/purchase-orders/{poId}/submit | Submit purchase order |
| [**updatePurchaseOrder()**](ProcurementApi.md#updatePurchaseOrder) | **PATCH** /procurement/purchase-orders/{poId} | Update purchase order (partial update) |
| [**updateSupplier()**](ProcurementApi.md#updateSupplier) | **PATCH** /procurement/suppliers/{supplierId} | Update supplier (partial update) |


## `approvePurchaseOrder()`

```php
approvePurchaseOrder($po_id, $approve_purchase_order_request): \OpenAPI\Client\Model\PurchaseOrder
```

Approve purchase order

Approve a purchase order for processing

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ProcurementApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$po_id = 'po_id_example'; // string
$approve_purchase_order_request = new \OpenAPI\Client\Model\ApprovePurchaseOrderRequest(); // \OpenAPI\Client\Model\ApprovePurchaseOrderRequest

try {
    $result = $apiInstance->approvePurchaseOrder($po_id, $approve_purchase_order_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcurementApi->approvePurchaseOrder: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **po_id** | **string**|  | |
| **approve_purchase_order_request** | [**\OpenAPI\Client\Model\ApprovePurchaseOrderRequest**](../Model/ApprovePurchaseOrderRequest.md)|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\PurchaseOrder**](../Model/PurchaseOrder.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createPurchaseOrder()`

```php
createPurchaseOrder($body): object
```

Create purchase order

Create a new purchase order for supplies, equipment, or services

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ProcurementApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$body = array('key' => new \stdClass); // object

try {
    $result = $apiInstance->createPurchaseOrder($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcurementApi->createPurchaseOrder: ', $e->getMessage(), PHP_EOL;
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

## `createSupplier()`

```php
createSupplier($supplier): \OpenAPI\Client\Model\Supplier
```

Create supplier

Create a new supplier

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ProcurementApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$supplier = new \OpenAPI\Client\Model\Supplier(); // \OpenAPI\Client\Model\Supplier

try {
    $result = $apiInstance->createSupplier($supplier);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcurementApi->createSupplier: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **supplier** | [**\OpenAPI\Client\Model\Supplier**](../Model/Supplier.md)|  | |

### Return type

[**\OpenAPI\Client\Model\Supplier**](../Model/Supplier.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getSupplier()`

```php
getSupplier($supplier_id): \OpenAPI\Client\Model\Supplier
```

Get supplier details

Retrieve details of a specific supplier

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ProcurementApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$supplier_id = 'supplier_id_example'; // string

try {
    $result = $apiInstance->getSupplier($supplier_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcurementApi->getSupplier: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **supplier_id** | **string**|  | |

### Return type

[**\OpenAPI\Client\Model\Supplier**](../Model/Supplier.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getSupplierPerformance()`

```php
getSupplierPerformance($supplier_id, $start_date, $end_date): \OpenAPI\Client\Model\SupplierPerformance
```

Get supplier performance

Get performance metrics for a supplier

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ProcurementApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$supplier_id = 'supplier_id_example'; // string
$start_date = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime
$end_date = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime

try {
    $result = $apiInstance->getSupplierPerformance($supplier_id, $start_date, $end_date);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcurementApi->getSupplierPerformance: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **supplier_id** | **string**|  | |
| **start_date** | **\DateTime**|  | [optional] |
| **end_date** | **\DateTime**|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\SupplierPerformance**](../Model/SupplierPerformance.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `invoicePurchaseOrder()`

```php
invoicePurchaseOrder($po_id, $invoice_purchase_order_request): \OpenAPI\Client\Model\PurchaseOrder
```

Record invoice for purchase order

Record supplier invoice for purchase order

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ProcurementApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$po_id = 'po_id_example'; // string
$invoice_purchase_order_request = new \OpenAPI\Client\Model\InvoicePurchaseOrderRequest(); // \OpenAPI\Client\Model\InvoicePurchaseOrderRequest

try {
    $result = $apiInstance->invoicePurchaseOrder($po_id, $invoice_purchase_order_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcurementApi->invoicePurchaseOrder: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **po_id** | **string**|  | |
| **invoice_purchase_order_request** | [**\OpenAPI\Client\Model\InvoicePurchaseOrderRequest**](../Model/InvoicePurchaseOrderRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\PurchaseOrder**](../Model/PurchaseOrder.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listPurchaseOrders()`

```php
listPurchaseOrders($property_id, $status, $page_size, $cursor): \OpenAPI\Client\Model\GetGuestStays200Response
```

List purchase orders

List all purchase orders with filtering by supplier, status, property, and date range

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ProcurementApi(
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
    $result = $apiInstance->listPurchaseOrders($property_id, $status, $page_size, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcurementApi->listPurchaseOrders: ', $e->getMessage(), PHP_EOL;
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

## `listSuppliers()`

```php
listSuppliers($status, $category, $page_size, $cursor): \OpenAPI\Client\Model\ListSuppliers200Response
```

List suppliers

List all suppliers with filtering and search

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ProcurementApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$status = 'status_example'; // string
$category = 'category_example'; // string
$page_size = 20; // int | Number of items per page (max 100)
$cursor = 'cursor_example'; // string | Cursor for pagination (opaque token)

try {
    $result = $apiInstance->listSuppliers($status, $category, $page_size, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcurementApi->listSuppliers: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **status** | **string**|  | [optional] |
| **category** | **string**|  | [optional] |
| **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **string**| Cursor for pagination (opaque token) | [optional] |

### Return type

[**\OpenAPI\Client\Model\ListSuppliers200Response**](../Model/ListSuppliers200Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `receivePurchaseOrder()`

```php
receivePurchaseOrder($po_id, $receive_purchase_order_request): \OpenAPI\Client\Model\PurchaseOrder
```

Receive purchase order

Record receipt of goods from purchase order

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ProcurementApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$po_id = 'po_id_example'; // string
$receive_purchase_order_request = new \OpenAPI\Client\Model\ReceivePurchaseOrderRequest(); // \OpenAPI\Client\Model\ReceivePurchaseOrderRequest

try {
    $result = $apiInstance->receivePurchaseOrder($po_id, $receive_purchase_order_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcurementApi->receivePurchaseOrder: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **po_id** | **string**|  | |
| **receive_purchase_order_request** | [**\OpenAPI\Client\Model\ReceivePurchaseOrderRequest**](../Model/ReceivePurchaseOrderRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\PurchaseOrder**](../Model/PurchaseOrder.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `replacePurchaseOrder()`

```php
replacePurchaseOrder($po_id, $body, $if_match): object
```

Replace purchase order (full update)

Replace purchase order with complete new details including items, quantities, and delivery information

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ProcurementApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$po_id = 'po_id_example'; // string
$body = array('key' => new \stdClass); // object
$if_match = 'if_match_example'; // string | ETag for optimistic locking

try {
    $result = $apiInstance->replacePurchaseOrder($po_id, $body, $if_match);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcurementApi->replacePurchaseOrder: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **po_id** | **string**|  | |
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

## `replaceSupplier()`

```php
replaceSupplier($supplier_id, $body, $if_match): object
```

Replace supplier (full update)

Replace supplier information with complete new details including contact, terms, and product catalog

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ProcurementApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$supplier_id = 'supplier_id_example'; // string
$body = array('key' => new \stdClass); // object
$if_match = 'if_match_example'; // string | ETag for optimistic locking

try {
    $result = $apiInstance->replaceSupplier($supplier_id, $body, $if_match);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcurementApi->replaceSupplier: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **supplier_id** | **string**|  | |
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

## `submitPurchaseOrder()`

```php
submitPurchaseOrder($po_id): \OpenAPI\Client\Model\PurchaseOrder
```

Submit purchase order

Submit a purchase order to supplier

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ProcurementApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$po_id = 'po_id_example'; // string

try {
    $result = $apiInstance->submitPurchaseOrder($po_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcurementApi->submitPurchaseOrder: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **po_id** | **string**|  | |

### Return type

[**\OpenAPI\Client\Model\PurchaseOrder**](../Model/PurchaseOrder.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updatePurchaseOrder()`

```php
updatePurchaseOrder($po_id, $body, $if_match): object
```

Update purchase order (partial update)

Partially update purchase order to modify status, quantities, or delivery details **Common use cases:** | Update specific fields of a purchase order. **Common use cases:** - Update delivery date - Change PO status - Add notes - Modify payment terms

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ProcurementApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$po_id = 'po_id_example'; // string
$body = {"expectedDeliveryDate":"2025-12-25","status":"APPROVED","notes":"Urgent - expedite delivery"}; // object
$if_match = 'if_match_example'; // string | ETag for optimistic locking

try {
    $result = $apiInstance->updatePurchaseOrder($po_id, $body, $if_match);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcurementApi->updatePurchaseOrder: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **po_id** | **string**|  | |
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

## `updateSupplier()`

```php
updateSupplier($supplier_id, $body, $if_match): object
```

Update supplier (partial update)

Partially update supplier information to modify contact details, terms, or status **Common use cases:** | Update specific fields of a supplier. **Common use cases:** - Update contact information - Change payment terms - Modify supplier status - Update rating

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ProcurementApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$supplier_id = 'supplier_id_example'; // string
$body = {"contactEmail":"newsales@supplier.com","paymentTerms":"NET_30","rating":4.5}; // object
$if_match = 'if_match_example'; // string | ETag for optimistic locking

try {
    $result = $apiInstance->updateSupplier($supplier_id, $body, $if_match);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProcurementApi->updateSupplier: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **supplier_id** | **string**|  | |
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
