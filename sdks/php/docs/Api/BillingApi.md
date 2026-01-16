# OpenAPI\Client\BillingApi

Billing, folios, and charge management

All URIs are relative to https://api.stayos.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**addFolioAdjustment()**](BillingApi.md#addFolioAdjustment) | **POST** /folios/{folioId}/adjustments | Add adjustment to folio |
| [**addFolioCharge()**](BillingApi.md#addFolioCharge) | **POST** /folios/{folioId}/charges | Add charge to folio |
| [**addFolioLineItem()**](BillingApi.md#addFolioLineItem) | **POST** /folios/{folioId}/line-items | Add line item to folio |
| [**batchProcessPayments()**](BillingApi.md#batchProcessPayments) | **POST** /payments/batch | Batch payment processing |
| [**capturePayment()**](BillingApi.md#capturePayment) | **POST** /payments/{paymentId}/capture | Capture payment |
| [**closeFolio()**](BillingApi.md#closeFolio) | **POST** /folios/{folioId}/close | Close folio |
| [**createFolio()**](BillingApi.md#createFolio) | **POST** /folios | Create folio |
| [**createPayment()**](BillingApi.md#createPayment) | **POST** /payments | Process payment |
| [**disputeFolio()**](BillingApi.md#disputeFolio) | **POST** /folios/{folioId}/dispute | Dispute folio |
| [**getFolio()**](BillingApi.md#getFolio) | **GET** /folios/{folioId} | Get folio details |
| [**getFolioPDF()**](BillingApi.md#getFolioPDF) | **GET** /folios/{folioId}/pdf | Download folio PDF |
| [**getPayment()**](BillingApi.md#getPayment) | **GET** /payments/{paymentId} | Get payment details |
| [**getPaymentReceipt()**](BillingApi.md#getPaymentReceipt) | **GET** /payments/{paymentId}/receipt | Get payment receipt |
| [**getRevenueReconciliation()**](BillingApi.md#getRevenueReconciliation) | **GET** /revenue/reconciliation | Get revenue reconciliation |
| [**getRevenueReports()**](BillingApi.md#getRevenueReports) | **GET** /revenue/reports | Get revenue reports |
| [**listFolios()**](BillingApi.md#listFolios) | **GET** /folios | List folios |
| [**listPayments()**](BillingApi.md#listPayments) | **GET** /payments | List payments |
| [**refundPayment()**](BillingApi.md#refundPayment) | **POST** /payments/{paymentId}/refund | Refund payment |
| [**removeFolioLineItem()**](BillingApi.md#removeFolioLineItem) | **DELETE** /folios/{folioId}/line-items/{itemId} | Remove line item from folio |
| [**reopenFolio()**](BillingApi.md#reopenFolio) | **POST** /folios/{folioId}/reopen | Reopen folio |


## `addFolioAdjustment()`

```php
addFolioAdjustment($folio_id, $add_folio_adjustment_request): \OpenAPI\Client\Model\LineItem
```

Add adjustment to folio

Add an adjustment (discount, comp, etc.) to a folio

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\BillingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$folio_id = 'folio_id_example'; // string
$add_folio_adjustment_request = new \OpenAPI\Client\Model\AddFolioAdjustmentRequest(); // \OpenAPI\Client\Model\AddFolioAdjustmentRequest

try {
    $result = $apiInstance->addFolioAdjustment($folio_id, $add_folio_adjustment_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BillingApi->addFolioAdjustment: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **folio_id** | **string**|  | |
| **add_folio_adjustment_request** | [**\OpenAPI\Client\Model\AddFolioAdjustmentRequest**](../Model/AddFolioAdjustmentRequest.md)|  | |

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

## `addFolioCharge()`

```php
addFolioCharge($folio_id, $add_folio_charge_request): object
```

Add charge to folio

Add a new charge to a guest folio for services, amenities, or incidentals

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\BillingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$folio_id = 'folio_id_example'; // string
$add_folio_charge_request = new \OpenAPI\Client\Model\AddFolioChargeRequest(); // \OpenAPI\Client\Model\AddFolioChargeRequest

try {
    $result = $apiInstance->addFolioCharge($folio_id, $add_folio_charge_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BillingApi->addFolioCharge: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **folio_id** | **string**|  | |
| **add_folio_charge_request** | [**\OpenAPI\Client\Model\AddFolioChargeRequest**](../Model/AddFolioChargeRequest.md)|  | |

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

## `addFolioLineItem()`

```php
addFolioLineItem($folio_id, $line_item): \OpenAPI\Client\Model\LineItem
```

Add line item to folio

Add a line item to a folio

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\BillingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$folio_id = 'folio_id_example'; // string
$line_item = new \OpenAPI\Client\Model\LineItem(); // \OpenAPI\Client\Model\LineItem

try {
    $result = $apiInstance->addFolioLineItem($folio_id, $line_item);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BillingApi->addFolioLineItem: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **folio_id** | **string**|  | |
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

## `batchProcessPayments()`

```php
batchProcessPayments($batch_process_payments_request): \OpenAPI\Client\Model\BatchProcessPayments200Response
```

Batch payment processing

Process multiple payments in a single batch

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\BillingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$batch_process_payments_request = new \OpenAPI\Client\Model\BatchProcessPaymentsRequest(); // \OpenAPI\Client\Model\BatchProcessPaymentsRequest

try {
    $result = $apiInstance->batchProcessPayments($batch_process_payments_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BillingApi->batchProcessPayments: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **batch_process_payments_request** | [**\OpenAPI\Client\Model\BatchProcessPaymentsRequest**](../Model/BatchProcessPaymentsRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\BatchProcessPayments200Response**](../Model/BatchProcessPayments200Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `capturePayment()`

```php
capturePayment($payment_id, $capture_payment_request): \OpenAPI\Client\Model\Payment
```

Capture payment

Capture a pre-authorized payment

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\BillingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$payment_id = 'payment_id_example'; // string
$capture_payment_request = new \OpenAPI\Client\Model\CapturePaymentRequest(); // \OpenAPI\Client\Model\CapturePaymentRequest

try {
    $result = $apiInstance->capturePayment($payment_id, $capture_payment_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BillingApi->capturePayment: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **payment_id** | **string**|  | |
| **capture_payment_request** | [**\OpenAPI\Client\Model\CapturePaymentRequest**](../Model/CapturePaymentRequest.md)|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\Payment**](../Model/Payment.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `closeFolio()`

```php
closeFolio($folio_id): \OpenAPI\Client\Model\Folio
```

Close folio

Close a folio after final settlement

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\BillingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$folio_id = 'folio_id_example'; // string

try {
    $result = $apiInstance->closeFolio($folio_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BillingApi->closeFolio: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **folio_id** | **string**|  | |

### Return type

[**\OpenAPI\Client\Model\Folio**](../Model/Folio.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createFolio()`

```php
createFolio($body): object
```

Create folio

Create a new guest folio for billing and charge management during a stay

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\BillingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$body = array('key' => new \stdClass); // object

try {
    $result = $apiInstance->createFolio($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BillingApi->createFolio: ', $e->getMessage(), PHP_EOL;
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

## `createPayment()`

```php
createPayment($create_payment_request): object
```

Process payment

Process a new payment for a folio using credit card, cash, or other payment methods

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\BillingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$create_payment_request = new \OpenAPI\Client\Model\CreatePaymentRequest(); // \OpenAPI\Client\Model\CreatePaymentRequest

try {
    $result = $apiInstance->createPayment($create_payment_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BillingApi->createPayment: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_payment_request** | [**\OpenAPI\Client\Model\CreatePaymentRequest**](../Model/CreatePaymentRequest.md)|  | |

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

## `disputeFolio()`

```php
disputeFolio($folio_id, $dispute_folio_request): \OpenAPI\Client\Model\Folio
```

Dispute folio

Create a dispute for a folio

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\BillingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$folio_id = 'folio_id_example'; // string
$dispute_folio_request = new \OpenAPI\Client\Model\DisputeFolioRequest(); // \OpenAPI\Client\Model\DisputeFolioRequest

try {
    $result = $apiInstance->disputeFolio($folio_id, $dispute_folio_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BillingApi->disputeFolio: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **folio_id** | **string**|  | |
| **dispute_folio_request** | [**\OpenAPI\Client\Model\DisputeFolioRequest**](../Model/DisputeFolioRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\Folio**](../Model/Folio.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getFolio()`

```php
getFolio($folio_id): object
```

Get folio details

Retrieve complete folio details including all charges, payments, adjustments, and current balance

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\BillingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$folio_id = 'folio_id_example'; // string

try {
    $result = $apiInstance->getFolio($folio_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BillingApi->getFolio: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **folio_id** | **string**|  | |

### Return type

**object**

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getFolioPDF()`

```php
getFolioPDF($folio_id): \SplFileObject
```

Download folio PDF

Download folio as PDF document

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\BillingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$folio_id = 'folio_id_example'; // string

try {
    $result = $apiInstance->getFolioPDF($folio_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BillingApi->getFolioPDF: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **folio_id** | **string**|  | |

### Return type

**\SplFileObject**

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/pdf`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getPayment()`

```php
getPayment($payment_id): object
```

Get payment details

Retrieve complete payment details including amount, method, status, and transaction information

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\BillingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$payment_id = 'payment_id_example'; // string

try {
    $result = $apiInstance->getPayment($payment_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BillingApi->getPayment: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **payment_id** | **string**|  | |

### Return type

**object**

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getPaymentReceipt()`

```php
getPaymentReceipt($payment_id): \SplFileObject
```

Get payment receipt

Retrieve payment receipt

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\BillingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$payment_id = 'payment_id_example'; // string

try {
    $result = $apiInstance->getPaymentReceipt($payment_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BillingApi->getPaymentReceipt: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **payment_id** | **string**|  | |

### Return type

**\SplFileObject**

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/pdf`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getRevenueReconciliation()`

```php
getRevenueReconciliation($date, $property_id): \OpenAPI\Client\Model\GetRevenueReconciliation200Response
```

Get revenue reconciliation

Retrieve revenue reconciliation data

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\BillingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$date = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime
$property_id = 'property_id_example'; // string

try {
    $result = $apiInstance->getRevenueReconciliation($date, $property_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BillingApi->getRevenueReconciliation: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **date** | **\DateTime**|  | |
| **property_id** | **string**|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\GetRevenueReconciliation200Response**](../Model/GetRevenueReconciliation200Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getRevenueReports()`

```php
getRevenueReports($start_date, $end_date, $property_id, $group_by): \OpenAPI\Client\Model\RevenueReport
```

Get revenue reports

Retrieve revenue reports with various breakdowns

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\BillingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$start_date = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime
$end_date = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime
$property_id = 'property_id_example'; // string
$group_by = 'group_by_example'; // string

try {
    $result = $apiInstance->getRevenueReports($start_date, $end_date, $property_id, $group_by);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BillingApi->getRevenueReports: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **start_date** | **\DateTime**|  | |
| **end_date** | **\DateTime**|  | |
| **property_id** | **string**|  | [optional] |
| **group_by** | **string**|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\RevenueReport**](../Model/RevenueReport.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listFolios()`

```php
listFolios($property_id, $guest_id, $status, $page_size, $cursor): \OpenAPI\Client\Model\GetGuestStays200Response
```

List folios

List all guest folios with filtering by property, guest, status, and date range

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\BillingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$property_id = 'property_id_example'; // string
$guest_id = 'guest_id_example'; // string
$status = 'status_example'; // string
$page_size = 20; // int | Number of items per page (max 100)
$cursor = 'cursor_example'; // string | Cursor for pagination (opaque token)

try {
    $result = $apiInstance->listFolios($property_id, $guest_id, $status, $page_size, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BillingApi->listFolios: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **property_id** | **string**|  | [optional] |
| **guest_id** | **string**|  | [optional] |
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

## `listPayments()`

```php
listPayments($folio_id, $status, $page_size, $cursor): \OpenAPI\Client\Model\ListPayments200Response
```

List payments

List all payments with filtering options

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\BillingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$folio_id = 'folio_id_example'; // string
$status = 'status_example'; // string
$page_size = 20; // int | Number of items per page (max 100)
$cursor = 'cursor_example'; // string | Cursor for pagination (opaque token)

try {
    $result = $apiInstance->listPayments($folio_id, $status, $page_size, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BillingApi->listPayments: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **folio_id** | **string**|  | [optional] |
| **status** | **string**|  | [optional] |
| **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **string**| Cursor for pagination (opaque token) | [optional] |

### Return type

[**\OpenAPI\Client\Model\ListPayments200Response**](../Model/ListPayments200Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `refundPayment()`

```php
refundPayment($payment_id, $refund_payment_request): \OpenAPI\Client\Model\Payment
```

Refund payment

Process a refund for a payment

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\BillingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$payment_id = 'payment_id_example'; // string
$refund_payment_request = new \OpenAPI\Client\Model\RefundPaymentRequest(); // \OpenAPI\Client\Model\RefundPaymentRequest

try {
    $result = $apiInstance->refundPayment($payment_id, $refund_payment_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BillingApi->refundPayment: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **payment_id** | **string**|  | |
| **refund_payment_request** | [**\OpenAPI\Client\Model\RefundPaymentRequest**](../Model/RefundPaymentRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\Payment**](../Model/Payment.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `removeFolioLineItem()`

```php
removeFolioLineItem($folio_id, $item_id)
```

Remove line item from folio

Remove a line item from a folio

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\BillingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$folio_id = 'folio_id_example'; // string
$item_id = 'item_id_example'; // string

try {
    $apiInstance->removeFolioLineItem($folio_id, $item_id);
} catch (Exception $e) {
    echo 'Exception when calling BillingApi->removeFolioLineItem: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **folio_id** | **string**|  | |
| **item_id** | **string**|  | |

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

## `reopenFolio()`

```php
reopenFolio($folio_id, $cancel_service_request_request): \OpenAPI\Client\Model\Folio
```

Reopen folio

Reopen a closed folio for additional charges

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\BillingApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$folio_id = 'folio_id_example'; // string
$cancel_service_request_request = new \OpenAPI\Client\Model\CancelServiceRequestRequest(); // \OpenAPI\Client\Model\CancelServiceRequestRequest

try {
    $result = $apiInstance->reopenFolio($folio_id, $cancel_service_request_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BillingApi->reopenFolio: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **folio_id** | **string**|  | |
| **cancel_service_request_request** | [**\OpenAPI\Client\Model\CancelServiceRequestRequest**](../Model/CancelServiceRequestRequest.md)|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\Folio**](../Model/Folio.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
