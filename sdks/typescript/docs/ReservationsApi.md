# ReservationsApi

All URIs are relative to *https://api.stayos.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addSpecialRequest**](#addspecialrequest) | **POST** /reservations/{reservationId}/special-requests | Add special request to reservation|
|[**cancelReservation**](#cancelreservation) | **POST** /reservations/{reservationId}/cancel | Cancel reservation|
|[**confirmReservation**](#confirmreservation) | **POST** /reservations/{reservationId}/confirm | Confirm reservation|
|[**createReservation**](#createreservation) | **POST** /reservations | Create reservation|
|[**getReservation**](#getreservation) | **GET** /reservations/{reservationId} | Get reservation details|
|[**getReservationHistory**](#getreservationhistory) | **GET** /reservations/{reservationId}/history | Get reservation modification history|
|[**getReservationQuote**](#getreservationquote) | **POST** /reservations/quote | Get pricing quote|
|[**markReservationNoShow**](#markreservationnoshow) | **POST** /reservations/{reservationId}/no-show | Mark reservation as no-show|
|[**replaceReservation**](#replacereservation) | **PUT** /reservations/{reservationId} | Replace reservation (full update)|
|[**searchReservations**](#searchreservations) | **GET** /reservations/search | Advanced reservation search|
|[**updateReservation**](#updatereservation) | **PATCH** /reservations/{reservationId} | Update reservation (partial update)|

# **addSpecialRequest**
> Reservation addSpecialRequest(addSpecialRequestRequest)

Add a special request or note to an existing reservation

### Example

```typescript
import {
    ReservationsApi,
    Configuration,
    AddSpecialRequestRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ReservationsApi(configuration);

let reservationId: string; // (default to undefined)
let addSpecialRequestRequest: AddSpecialRequestRequest; //

const { status, data } = await apiInstance.addSpecialRequest(
    reservationId,
    addSpecialRequestRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addSpecialRequestRequest** | **AddSpecialRequestRequest**|  | |
| **reservationId** | [**string**] |  | defaults to undefined|


### Return type

**Reservation**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Special request added |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cancelReservation**
> Reservation cancelReservation(cancelReservationRequest)

Cancel an existing reservation

### Example

```typescript
import {
    ReservationsApi,
    Configuration,
    CancelReservationRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ReservationsApi(configuration);

let reservationId: string; // (default to undefined)
let cancelReservationRequest: CancelReservationRequest; //

const { status, data } = await apiInstance.cancelReservation(
    reservationId,
    cancelReservationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cancelReservationRequest** | **CancelReservationRequest**|  | |
| **reservationId** | [**string**] |  | defaults to undefined|


### Return type

**Reservation**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Reservation cancelled |  -  |
|**400** | Bad request - validation error |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **confirmReservation**
> Reservation confirmReservation()

Confirm a pending reservation

### Example

```typescript
import {
    ReservationsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ReservationsApi(configuration);

let reservationId: string; // (default to undefined)

const { status, data } = await apiInstance.confirmReservation(
    reservationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reservationId** | [**string**] |  | defaults to undefined|


### Return type

**Reservation**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Reservation confirmed |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createReservation**
> Reservation createReservation(reservation)

Create a new reservation

### Example

```typescript
import {
    ReservationsApi,
    Configuration,
    Reservation
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ReservationsApi(configuration);

let reservation: Reservation; //

const { status, data } = await apiInstance.createReservation(
    reservation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reservation** | **Reservation**|  | |


### Return type

**Reservation**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Reservation created |  * Location -  <br>  * ETag -  <br>  |
|**400** | Bad request - validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getReservation**
> Reservation getReservation()

Retrieve complete details of a specific reservation including guest information, dates, pricing, and current status

### Example

```typescript
import {
    ReservationsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ReservationsApi(configuration);

let reservationId: string; // (default to undefined)

const { status, data } = await apiInstance.getReservation(
    reservationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reservationId** | [**string**] |  | defaults to undefined|


### Return type

**Reservation**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  * ETag -  <br>  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getReservationHistory**
> Array<GetReservationHistory200ResponseInner> getReservationHistory()

Retrieve complete history of changes to a reservation

### Example

```typescript
import {
    ReservationsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ReservationsApi(configuration);

let reservationId: string; // (default to undefined)

const { status, data } = await apiInstance.getReservationHistory(
    reservationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reservationId** | [**string**] |  | defaults to undefined|


### Return type

**Array<GetReservationHistory200ResponseInner>**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getReservationQuote**
> GetReservationQuote200Response getReservationQuote(getReservationQuoteRequest)

Calculate pricing for a potential reservation without creating it

### Example

```typescript
import {
    ReservationsApi,
    Configuration,
    GetReservationQuoteRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ReservationsApi(configuration);

let getReservationQuoteRequest: GetReservationQuoteRequest; //

const { status, data } = await apiInstance.getReservationQuote(
    getReservationQuoteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getReservationQuoteRequest** | **GetReservationQuoteRequest**|  | |


### Return type

**GetReservationQuote200Response**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Quote generated successfully |  -  |
|**400** | Bad request - validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **markReservationNoShow**
> Reservation markReservationNoShow()

Mark a reservation as no-show when guest doesn\'t arrive

### Example

```typescript
import {
    ReservationsApi,
    Configuration,
    MarkReservationNoShowRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ReservationsApi(configuration);

let reservationId: string; // (default to undefined)
let markReservationNoShowRequest: MarkReservationNoShowRequest; // (optional)

const { status, data } = await apiInstance.markReservationNoShow(
    reservationId,
    markReservationNoShowRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **markReservationNoShowRequest** | **MarkReservationNoShowRequest**|  | |
| **reservationId** | [**string**] |  | defaults to undefined|


### Return type

**Reservation**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Marked as no-show |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replaceReservation**
> Reservation replaceReservation(reservation)

Replace an existing reservation with a complete new representation. All fields must be provided. For partial updates, use PATCH instead.  **Optimistic Locking:** Use `If-Match` header with ETag to prevent conflicts 

### Example

```typescript
import {
    ReservationsApi,
    Configuration,
    Reservation
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ReservationsApi(configuration);

let reservationId: string; // (default to undefined)
let reservation: Reservation; //
let ifMatch: string; //ETag for optimistic locking (optional) (default to undefined)

const { status, data } = await apiInstance.replaceReservation(
    reservationId,
    reservation,
    ifMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reservation** | **Reservation**|  | |
| **reservationId** | [**string**] |  | defaults to undefined|
| **ifMatch** | [**string**] | ETag for optimistic locking | (optional) defaults to undefined|


### Return type

**Reservation**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully replaced |  * ETag -  <br>  |
|**400** | Bad request - validation error |  -  |
|**404** | Resource not found |  -  |
|**412** | Precondition failed - optimistic locking failure |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchReservations**
> SearchReservations200Response searchReservations()

Search reservations with advanced filters

### Example

```typescript
import {
    ReservationsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ReservationsApi(configuration);

let propertyId: string; // (optional) (default to undefined)
let guestName: string; // (optional) (default to undefined)
let confirmationNumber: string; // (optional) (default to undefined)
let status: 'PENDING' | 'CONFIRMED' | 'CHECKED_IN' | 'CHECKED_OUT' | 'CANCELLED' | 'NO_SHOW'; // (optional) (default to undefined)
let checkInDate: string; // (optional) (default to undefined)
let checkOutDate: string; // (optional) (default to undefined)
let pageSize: number; //Number of items per page (max 100) (optional) (default to 20)
let cursor: string; //Cursor for pagination (opaque token) (optional) (default to undefined)

const { status, data } = await apiInstance.searchReservations(
    propertyId,
    guestName,
    confirmationNumber,
    status,
    checkInDate,
    checkOutDate,
    pageSize,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **propertyId** | [**string**] |  | (optional) defaults to undefined|
| **guestName** | [**string**] |  | (optional) defaults to undefined|
| **confirmationNumber** | [**string**] |  | (optional) defaults to undefined|
| **status** | [**&#39;PENDING&#39; | &#39;CONFIRMED&#39; | &#39;CHECKED_IN&#39; | &#39;CHECKED_OUT&#39; | &#39;CANCELLED&#39; | &#39;NO_SHOW&#39;**]**Array<&#39;PENDING&#39; &#124; &#39;CONFIRMED&#39; &#124; &#39;CHECKED_IN&#39; &#124; &#39;CHECKED_OUT&#39; &#124; &#39;CANCELLED&#39; &#124; &#39;NO_SHOW&#39;>** |  | (optional) defaults to undefined|
| **checkInDate** | [**string**] |  | (optional) defaults to undefined|
| **checkOutDate** | [**string**] |  | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of items per page (max 100) | (optional) defaults to 20|
| **cursor** | [**string**] | Cursor for pagination (opaque token) | (optional) defaults to undefined|


### Return type

**SearchReservations200Response**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**400** | Bad request - validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateReservation**
> Reservation updateReservation(body)

Partially update a reservation. Only provided fields will be updated. This is the recommended method for most updates.  **Optimistic Locking:** Use `If-Match` header with ETag to prevent conflicts  **Common use cases:** - Update special requests - Change guest count - Modify arrival time - Add notes 

### Example

```typescript
import {
    ReservationsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ReservationsApi(configuration);

let reservationId: string; // (default to undefined)
let body: object; //
let ifMatch: string; //ETag for optimistic locking (optional) (default to undefined)

const { status, data } = await apiInstance.updateReservation(
    reservationId,
    body,
    ifMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **reservationId** | [**string**] |  | defaults to undefined|
| **ifMatch** | [**string**] | ETag for optimistic locking | (optional) defaults to undefined|


### Return type

**Reservation**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully updated |  * ETag -  <br>  |
|**400** | Bad request - validation error |  -  |
|**404** | Resource not found |  -  |
|**412** | Precondition failed - optimistic locking failure |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

