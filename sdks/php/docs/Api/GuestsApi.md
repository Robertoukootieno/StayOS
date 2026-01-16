# OpenAPI\Client\GuestsApi

Guest profiles, preferences, and loyalty

All URIs are relative to https://api.stayos.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**addLoyaltyPoints()**](GuestsApi.md#addLoyaltyPoints) | **POST** /guests/{guestId}/loyalty/points | Add loyalty points |
| [**createGuest()**](GuestsApi.md#createGuest) | **POST** /guests | Create guest profile |
| [**deleteGuest()**](GuestsApi.md#deleteGuest) | **DELETE** /guests/{guestId} | Delete guest profile (GDPR) |
| [**getGuest()**](GuestsApi.md#getGuest) | **GET** /guests/{guestId} | Get guest profile |
| [**getGuestLoyalty()**](GuestsApi.md#getGuestLoyalty) | **GET** /guests/{guestId}/loyalty | Get guest loyalty status |
| [**getGuestStays()**](GuestsApi.md#getGuestStays) | **GET** /guests/{guestId}/stays | Get guest stay history |
| [**listGuests()**](GuestsApi.md#listGuests) | **GET** /guests | List guest profiles |
| [**mergeGuests()**](GuestsApi.md#mergeGuests) | **POST** /guests/merge | Merge duplicate guest profiles |
| [**replaceGuest()**](GuestsApi.md#replaceGuest) | **PUT** /guests/{guestId} | Replace guest profile (full update) |
| [**replaceGuestPreferences()**](GuestsApi.md#replaceGuestPreferences) | **PUT** /guests/{guestId}/preferences | Replace guest preferences (full update) |
| [**searchGuests()**](GuestsApi.md#searchGuests) | **POST** /guests/search | Search guests |
| [**updateGuest()**](GuestsApi.md#updateGuest) | **PATCH** /guests/{guestId} | Update guest profile (partial update) |
| [**updateGuestPreferences()**](GuestsApi.md#updateGuestPreferences) | **PATCH** /guests/{guestId}/preferences | Update guest preferences (partial update) |
| [**verifyGuest()**](GuestsApi.md#verifyGuest) | **POST** /guests/{guestId}/verify | Verify guest identity |


## `addLoyaltyPoints()`

```php
addLoyaltyPoints($guest_id, $add_loyalty_points_request): \OpenAPI\Client\Model\AddLoyaltyPoints200Response
```

Add loyalty points

Add loyalty points to guest account

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\GuestsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$guest_id = 'guest_id_example'; // string
$add_loyalty_points_request = new \OpenAPI\Client\Model\AddLoyaltyPointsRequest(); // \OpenAPI\Client\Model\AddLoyaltyPointsRequest

try {
    $result = $apiInstance->addLoyaltyPoints($guest_id, $add_loyalty_points_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GuestsApi->addLoyaltyPoints: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **guest_id** | **string**|  | |
| **add_loyalty_points_request** | [**\OpenAPI\Client\Model\AddLoyaltyPointsRequest**](../Model/AddLoyaltyPointsRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\AddLoyaltyPoints200Response**](../Model/AddLoyaltyPoints200Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createGuest()`

```php
createGuest($guest_profile): \OpenAPI\Client\Model\GuestProfile
```

Create guest profile

Create a new guest profile

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\GuestsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$guest_profile = new \OpenAPI\Client\Model\GuestProfile(); // \OpenAPI\Client\Model\GuestProfile

try {
    $result = $apiInstance->createGuest($guest_profile);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GuestsApi->createGuest: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **guest_profile** | [**\OpenAPI\Client\Model\GuestProfile**](../Model/GuestProfile.md)|  | |

### Return type

[**\OpenAPI\Client\Model\GuestProfile**](../Model/GuestProfile.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteGuest()`

```php
deleteGuest($guest_id)
```

Delete guest profile (GDPR)

Delete guest profile per GDPR right to be forgotten

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\GuestsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$guest_id = 'guest_id_example'; // string

try {
    $apiInstance->deleteGuest($guest_id);
} catch (Exception $e) {
    echo 'Exception when calling GuestsApi->deleteGuest: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **guest_id** | **string**|  | |

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

## `getGuest()`

```php
getGuest($guest_id): \OpenAPI\Client\Model\GuestProfile
```

Get guest profile

Retrieve complete guest profile including personal information, contact details, preferences, and loyalty status

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\GuestsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$guest_id = 'guest_id_example'; // string

try {
    $result = $apiInstance->getGuest($guest_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GuestsApi->getGuest: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **guest_id** | **string**|  | |

### Return type

[**\OpenAPI\Client\Model\GuestProfile**](../Model/GuestProfile.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getGuestLoyalty()`

```php
getGuestLoyalty($guest_id): \OpenAPI\Client\Model\GetGuestLoyalty200Response
```

Get guest loyalty status

Retrieve loyalty program status and points

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\GuestsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$guest_id = 'guest_id_example'; // string

try {
    $result = $apiInstance->getGuestLoyalty($guest_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GuestsApi->getGuestLoyalty: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **guest_id** | **string**|  | |

### Return type

[**\OpenAPI\Client\Model\GetGuestLoyalty200Response**](../Model/GetGuestLoyalty200Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getGuestStays()`

```php
getGuestStays($guest_id, $page_size, $cursor): \OpenAPI\Client\Model\GetGuestStays200Response
```

Get guest stay history

Retrieve complete stay history for a guest

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\GuestsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$guest_id = 'guest_id_example'; // string
$page_size = 20; // int | Number of items per page (max 100)
$cursor = 'cursor_example'; // string | Cursor for pagination (opaque token)

try {
    $result = $apiInstance->getGuestStays($guest_id, $page_size, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GuestsApi->getGuestStays: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **guest_id** | **string**|  | |
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

## `listGuests()`

```php
listGuests($page_size, $cursor, $search, $loyalty_tier): \OpenAPI\Client\Model\ListGuests200Response
```

List guest profiles

Retrieve list of guest profiles

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\GuestsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$page_size = 20; // int | Number of items per page (max 100)
$cursor = 'cursor_example'; // string | Cursor for pagination (opaque token)
$search = 'search_example'; // string | Search by name or email
$loyalty_tier = 'loyalty_tier_example'; // string

try {
    $result = $apiInstance->listGuests($page_size, $cursor, $search, $loyalty_tier);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GuestsApi->listGuests: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **string**| Cursor for pagination (opaque token) | [optional] |
| **search** | **string**| Search by name or email | [optional] |
| **loyalty_tier** | **string**|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\ListGuests200Response**](../Model/ListGuests200Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `mergeGuests()`

```php
mergeGuests($merge_guests_request): \OpenAPI\Client\Model\GuestProfile
```

Merge duplicate guest profiles

Merge two guest profiles into one

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\GuestsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$merge_guests_request = new \OpenAPI\Client\Model\MergeGuestsRequest(); // \OpenAPI\Client\Model\MergeGuestsRequest

try {
    $result = $apiInstance->mergeGuests($merge_guests_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GuestsApi->mergeGuests: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **merge_guests_request** | [**\OpenAPI\Client\Model\MergeGuestsRequest**](../Model/MergeGuestsRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\GuestProfile**](../Model/GuestProfile.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `replaceGuest()`

```php
replaceGuest($guest_id, $guest_profile, $if_match): \OpenAPI\Client\Model\GuestProfile
```

Replace guest profile (full update)

Replace an existing guest profile with a complete new representation. All fields must be provided. For partial updates, use PATCH instead.  **Optimistic Locking:** Use `If-Match` header with ETag

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\GuestsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$guest_id = 'guest_id_example'; // string
$guest_profile = new \OpenAPI\Client\Model\GuestProfile(); // \OpenAPI\Client\Model\GuestProfile
$if_match = 'if_match_example'; // string | ETag for optimistic locking

try {
    $result = $apiInstance->replaceGuest($guest_id, $guest_profile, $if_match);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GuestsApi->replaceGuest: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **guest_id** | **string**|  | |
| **guest_profile** | [**\OpenAPI\Client\Model\GuestProfile**](../Model/GuestProfile.md)|  | |
| **if_match** | **string**| ETag for optimistic locking | [optional] |

### Return type

[**\OpenAPI\Client\Model\GuestProfile**](../Model/GuestProfile.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `replaceGuestPreferences()`

```php
replaceGuestPreferences($guest_id, $body, $if_match): object
```

Replace guest preferences (full update)

Replace all guest preferences with new settings including room preferences, dietary restrictions, and communication preferences

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\GuestsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$guest_id = 'guest_id_example'; // string
$body = array('key' => new \stdClass); // object
$if_match = 'if_match_example'; // string | ETag for optimistic locking

try {
    $result = $apiInstance->replaceGuestPreferences($guest_id, $body, $if_match);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GuestsApi->replaceGuestPreferences: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **guest_id** | **string**|  | |
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

## `searchGuests()`

```php
searchGuests($search_guests_request): \OpenAPI\Client\Model\GuestProfile[]
```

Search guests

Advanced guest search with multiple criteria

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\GuestsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$search_guests_request = new \OpenAPI\Client\Model\SearchGuestsRequest(); // \OpenAPI\Client\Model\SearchGuestsRequest

try {
    $result = $apiInstance->searchGuests($search_guests_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GuestsApi->searchGuests: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **search_guests_request** | [**\OpenAPI\Client\Model\SearchGuestsRequest**](../Model/SearchGuestsRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\GuestProfile[]**](../Model/GuestProfile.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateGuest()`

```php
updateGuest($guest_id, $body, $if_match): \OpenAPI\Client\Model\GuestProfile
```

Update guest profile (partial update)

Partially update a guest profile. Only provided fields will be updated. This is the recommended method for most updates.  **Optimistic Locking:** Use `If-Match` header with ETag  **Common use cases:** - Update email or phone - Change address - Update preferences - Modify loyalty tier

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\GuestsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$guest_id = 'guest_id_example'; // string
$body = {"email":"newemail@example.com","phone":"+1234567890"}; // object
$if_match = 'if_match_example'; // string | ETag for optimistic locking

try {
    $result = $apiInstance->updateGuest($guest_id, $body, $if_match);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GuestsApi->updateGuest: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **guest_id** | **string**|  | |
| **body** | **object**|  | |
| **if_match** | **string**| ETag for optimistic locking | [optional] |

### Return type

[**\OpenAPI\Client\Model\GuestProfile**](../Model/GuestProfile.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateGuestPreferences()`

```php
updateGuestPreferences($guest_id, $body, $if_match): object
```

Update guest preferences (partial update)

Update specific guest preferences. Only provided preferences will be updated.  **Example:** Update room type preference only

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\GuestsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$guest_id = 'guest_id_example'; // string
$body = {"roomType":"KING","floorPreference":"HIGH"}; // object
$if_match = 'if_match_example'; // string | ETag for optimistic locking

try {
    $result = $apiInstance->updateGuestPreferences($guest_id, $body, $if_match);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GuestsApi->updateGuestPreferences: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **guest_id** | **string**|  | |
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

## `verifyGuest()`

```php
verifyGuest($guest_id, $verify_guest_request): \OpenAPI\Client\Model\VerifyGuest200Response
```

Verify guest identity

Verify guest identity for security purposes

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\GuestsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$guest_id = 'guest_id_example'; // string
$verify_guest_request = new \OpenAPI\Client\Model\VerifyGuestRequest(); // \OpenAPI\Client\Model\VerifyGuestRequest

try {
    $result = $apiInstance->verifyGuest($guest_id, $verify_guest_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GuestsApi->verifyGuest: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **guest_id** | **string**|  | |
| **verify_guest_request** | [**\OpenAPI\Client\Model\VerifyGuestRequest**](../Model/VerifyGuestRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\VerifyGuest200Response**](../Model/VerifyGuest200Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
