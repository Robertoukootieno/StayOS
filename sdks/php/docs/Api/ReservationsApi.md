# OpenAPI\Client\ReservationsApi

Booking lifecycle management

All URIs are relative to https://api.stayos.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**addSpecialRequest()**](ReservationsApi.md#addSpecialRequest) | **POST** /reservations/{reservationId}/special-requests | Add special request to reservation |
| [**cancelReservation()**](ReservationsApi.md#cancelReservation) | **POST** /reservations/{reservationId}/cancel | Cancel reservation |
| [**confirmReservation()**](ReservationsApi.md#confirmReservation) | **POST** /reservations/{reservationId}/confirm | Confirm reservation |
| [**createReservation()**](ReservationsApi.md#createReservation) | **POST** /reservations | Create reservation |
| [**getReservation()**](ReservationsApi.md#getReservation) | **GET** /reservations/{reservationId} | Get reservation details |
| [**getReservationHistory()**](ReservationsApi.md#getReservationHistory) | **GET** /reservations/{reservationId}/history | Get reservation modification history |
| [**getReservationQuote()**](ReservationsApi.md#getReservationQuote) | **POST** /reservations/quote | Get pricing quote |
| [**markReservationNoShow()**](ReservationsApi.md#markReservationNoShow) | **POST** /reservations/{reservationId}/no-show | Mark reservation as no-show |
| [**replaceReservation()**](ReservationsApi.md#replaceReservation) | **PUT** /reservations/{reservationId} | Replace reservation (full update) |
| [**searchReservations()**](ReservationsApi.md#searchReservations) | **GET** /reservations/search | Advanced reservation search |
| [**updateReservation()**](ReservationsApi.md#updateReservation) | **PATCH** /reservations/{reservationId} | Update reservation (partial update) |


## `addSpecialRequest()`

```php
addSpecialRequest($reservation_id, $add_special_request_request): \OpenAPI\Client\Model\Reservation
```

Add special request to reservation

Add a special request or note to an existing reservation

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ReservationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$reservation_id = 'reservation_id_example'; // string
$add_special_request_request = new \OpenAPI\Client\Model\AddSpecialRequestRequest(); // \OpenAPI\Client\Model\AddSpecialRequestRequest

try {
    $result = $apiInstance->addSpecialRequest($reservation_id, $add_special_request_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReservationsApi->addSpecialRequest: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **reservation_id** | **string**|  | |
| **add_special_request_request** | [**\OpenAPI\Client\Model\AddSpecialRequestRequest**](../Model/AddSpecialRequestRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\Reservation**](../Model/Reservation.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `cancelReservation()`

```php
cancelReservation($reservation_id, $cancel_reservation_request): \OpenAPI\Client\Model\Reservation
```

Cancel reservation

Cancel an existing reservation

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ReservationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$reservation_id = 'reservation_id_example'; // string
$cancel_reservation_request = new \OpenAPI\Client\Model\CancelReservationRequest(); // \OpenAPI\Client\Model\CancelReservationRequest

try {
    $result = $apiInstance->cancelReservation($reservation_id, $cancel_reservation_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReservationsApi->cancelReservation: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **reservation_id** | **string**|  | |
| **cancel_reservation_request** | [**\OpenAPI\Client\Model\CancelReservationRequest**](../Model/CancelReservationRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\Reservation**](../Model/Reservation.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `confirmReservation()`

```php
confirmReservation($reservation_id): \OpenAPI\Client\Model\Reservation
```

Confirm reservation

Confirm a pending reservation

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ReservationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$reservation_id = 'reservation_id_example'; // string

try {
    $result = $apiInstance->confirmReservation($reservation_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReservationsApi->confirmReservation: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **reservation_id** | **string**|  | |

### Return type

[**\OpenAPI\Client\Model\Reservation**](../Model/Reservation.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createReservation()`

```php
createReservation($reservation): \OpenAPI\Client\Model\Reservation
```

Create reservation

Create a new reservation

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ReservationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$reservation = new \OpenAPI\Client\Model\Reservation(); // \OpenAPI\Client\Model\Reservation

try {
    $result = $apiInstance->createReservation($reservation);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReservationsApi->createReservation: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **reservation** | [**\OpenAPI\Client\Model\Reservation**](../Model/Reservation.md)|  | |

### Return type

[**\OpenAPI\Client\Model\Reservation**](../Model/Reservation.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getReservation()`

```php
getReservation($reservation_id): \OpenAPI\Client\Model\Reservation
```

Get reservation details

Retrieve complete details of a specific reservation including guest information, dates, pricing, and current status

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ReservationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$reservation_id = 'reservation_id_example'; // string

try {
    $result = $apiInstance->getReservation($reservation_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReservationsApi->getReservation: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **reservation_id** | **string**|  | |

### Return type

[**\OpenAPI\Client\Model\Reservation**](../Model/Reservation.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getReservationHistory()`

```php
getReservationHistory($reservation_id): \OpenAPI\Client\Model\GetReservationHistory200ResponseInner[]
```

Get reservation modification history

Retrieve complete history of changes to a reservation

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ReservationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$reservation_id = 'reservation_id_example'; // string

try {
    $result = $apiInstance->getReservationHistory($reservation_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReservationsApi->getReservationHistory: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **reservation_id** | **string**|  | |

### Return type

[**\OpenAPI\Client\Model\GetReservationHistory200ResponseInner[]**](../Model/GetReservationHistory200ResponseInner.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getReservationQuote()`

```php
getReservationQuote($get_reservation_quote_request): \OpenAPI\Client\Model\GetReservationQuote200Response
```

Get pricing quote

Calculate pricing for a potential reservation without creating it

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ReservationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$get_reservation_quote_request = new \OpenAPI\Client\Model\GetReservationQuoteRequest(); // \OpenAPI\Client\Model\GetReservationQuoteRequest

try {
    $result = $apiInstance->getReservationQuote($get_reservation_quote_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReservationsApi->getReservationQuote: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **get_reservation_quote_request** | [**\OpenAPI\Client\Model\GetReservationQuoteRequest**](../Model/GetReservationQuoteRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\GetReservationQuote200Response**](../Model/GetReservationQuote200Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `markReservationNoShow()`

```php
markReservationNoShow($reservation_id, $mark_reservation_no_show_request): \OpenAPI\Client\Model\Reservation
```

Mark reservation as no-show

Mark a reservation as no-show when guest doesn't arrive

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ReservationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$reservation_id = 'reservation_id_example'; // string
$mark_reservation_no_show_request = new \OpenAPI\Client\Model\MarkReservationNoShowRequest(); // \OpenAPI\Client\Model\MarkReservationNoShowRequest

try {
    $result = $apiInstance->markReservationNoShow($reservation_id, $mark_reservation_no_show_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReservationsApi->markReservationNoShow: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **reservation_id** | **string**|  | |
| **mark_reservation_no_show_request** | [**\OpenAPI\Client\Model\MarkReservationNoShowRequest**](../Model/MarkReservationNoShowRequest.md)|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\Reservation**](../Model/Reservation.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `replaceReservation()`

```php
replaceReservation($reservation_id, $reservation, $if_match): \OpenAPI\Client\Model\Reservation
```

Replace reservation (full update)

Replace an existing reservation with a complete new representation. All fields must be provided. For partial updates, use PATCH instead.  **Optimistic Locking:** Use `If-Match` header with ETag to prevent conflicts

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ReservationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$reservation_id = 'reservation_id_example'; // string
$reservation = new \OpenAPI\Client\Model\Reservation(); // \OpenAPI\Client\Model\Reservation
$if_match = 'if_match_example'; // string | ETag for optimistic locking

try {
    $result = $apiInstance->replaceReservation($reservation_id, $reservation, $if_match);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReservationsApi->replaceReservation: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **reservation_id** | **string**|  | |
| **reservation** | [**\OpenAPI\Client\Model\Reservation**](../Model/Reservation.md)|  | |
| **if_match** | **string**| ETag for optimistic locking | [optional] |

### Return type

[**\OpenAPI\Client\Model\Reservation**](../Model/Reservation.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `searchReservations()`

```php
searchReservations($property_id, $guest_name, $confirmation_number, $status, $check_in_date, $check_out_date, $page_size, $cursor): \OpenAPI\Client\Model\SearchReservations200Response
```

Advanced reservation search

Search reservations with advanced filters

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ReservationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$property_id = 'property_id_example'; // string
$guest_name = 'guest_name_example'; // string
$confirmation_number = 'confirmation_number_example'; // string
$status = 'status_example'; // string
$check_in_date = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime
$check_out_date = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime
$page_size = 20; // int | Number of items per page (max 100)
$cursor = 'cursor_example'; // string | Cursor for pagination (opaque token)

try {
    $result = $apiInstance->searchReservations($property_id, $guest_name, $confirmation_number, $status, $check_in_date, $check_out_date, $page_size, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReservationsApi->searchReservations: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **property_id** | **string**|  | [optional] |
| **guest_name** | **string**|  | [optional] |
| **confirmation_number** | **string**|  | [optional] |
| **status** | **string**|  | [optional] |
| **check_in_date** | **\DateTime**|  | [optional] |
| **check_out_date** | **\DateTime**|  | [optional] |
| **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **string**| Cursor for pagination (opaque token) | [optional] |

### Return type

[**\OpenAPI\Client\Model\SearchReservations200Response**](../Model/SearchReservations200Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateReservation()`

```php
updateReservation($reservation_id, $body, $if_match): \OpenAPI\Client\Model\Reservation
```

Update reservation (partial update)

Partially update a reservation. Only provided fields will be updated. This is the recommended method for most updates.  **Optimistic Locking:** Use `If-Match` header with ETag to prevent conflicts  **Common use cases:** - Update special requests - Change guest count - Modify arrival time - Add notes

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ReservationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$reservation_id = 'reservation_id_example'; // string
$body = {"specialRequests":"Late check-in at 10 PM","guestCount":{"adults":2,"children":1}}; // object
$if_match = 'if_match_example'; // string | ETag for optimistic locking

try {
    $result = $apiInstance->updateReservation($reservation_id, $body, $if_match);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReservationsApi->updateReservation: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **reservation_id** | **string**|  | |
| **body** | **object**|  | |
| **if_match** | **string**| ETag for optimistic locking | [optional] |

### Return type

[**\OpenAPI\Client\Model\Reservation**](../Model/Reservation.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
