# GuestsApi

All URIs are relative to *https://api.stayos.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addLoyaltyPoints**](#addloyaltypoints) | **POST** /guests/{guestId}/loyalty/points | Add loyalty points|
|[**createGuest**](#createguest) | **POST** /guests | Create guest profile|
|[**deleteGuest**](#deleteguest) | **DELETE** /guests/{guestId} | Delete guest profile (GDPR)|
|[**getGuest**](#getguest) | **GET** /guests/{guestId} | Get guest profile|
|[**getGuestLoyalty**](#getguestloyalty) | **GET** /guests/{guestId}/loyalty | Get guest loyalty status|
|[**getGuestStays**](#getgueststays) | **GET** /guests/{guestId}/stays | Get guest stay history|
|[**listGuests**](#listguests) | **GET** /guests | List guest profiles|
|[**mergeGuests**](#mergeguests) | **POST** /guests/merge | Merge duplicate guest profiles|
|[**replaceGuest**](#replaceguest) | **PUT** /guests/{guestId} | Replace guest profile (full update)|
|[**replaceGuestPreferences**](#replaceguestpreferences) | **PUT** /guests/{guestId}/preferences | Replace guest preferences (full update)|
|[**searchGuests**](#searchguests) | **POST** /guests/search | Search guests|
|[**updateGuest**](#updateguest) | **PATCH** /guests/{guestId} | Update guest profile (partial update)|
|[**updateGuestPreferences**](#updateguestpreferences) | **PATCH** /guests/{guestId}/preferences | Update guest preferences (partial update)|
|[**verifyGuest**](#verifyguest) | **POST** /guests/{guestId}/verify | Verify guest identity|

# **addLoyaltyPoints**
> AddLoyaltyPoints200Response addLoyaltyPoints(addLoyaltyPointsRequest)

Add loyalty points to guest account

### Example

```typescript
import {
    GuestsApi,
    Configuration,
    AddLoyaltyPointsRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new GuestsApi(configuration);

let guestId: string; // (default to undefined)
let addLoyaltyPointsRequest: AddLoyaltyPointsRequest; //

const { status, data } = await apiInstance.addLoyaltyPoints(
    guestId,
    addLoyaltyPointsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addLoyaltyPointsRequest** | **AddLoyaltyPointsRequest**|  | |
| **guestId** | [**string**] |  | defaults to undefined|


### Return type

**AddLoyaltyPoints200Response**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Points added successfully |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createGuest**
> GuestProfile createGuest(guestProfile)

Create a new guest profile

### Example

```typescript
import {
    GuestsApi,
    Configuration,
    GuestProfile
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new GuestsApi(configuration);

let guestProfile: GuestProfile; //

const { status, data } = await apiInstance.createGuest(
    guestProfile
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **guestProfile** | **GuestProfile**|  | |


### Return type

**GuestProfile**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Guest profile created |  * Location -  <br>  * ETag -  <br>  |
|**400** | Bad request - validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteGuest**
> deleteGuest()

Delete guest profile per GDPR right to be forgotten

### Example

```typescript
import {
    GuestsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new GuestsApi(configuration);

let guestId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteGuest(
    guestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **guestId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Guest deleted |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGuest**
> GuestProfile getGuest()

Retrieve complete guest profile including personal information, contact details, preferences, and loyalty status

### Example

```typescript
import {
    GuestsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new GuestsApi(configuration);

let guestId: string; // (default to undefined)

const { status, data } = await apiInstance.getGuest(
    guestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **guestId** | [**string**] |  | defaults to undefined|


### Return type

**GuestProfile**

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

# **getGuestLoyalty**
> GetGuestLoyalty200Response getGuestLoyalty()

Retrieve loyalty program status and points

### Example

```typescript
import {
    GuestsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new GuestsApi(configuration);

let guestId: string; // (default to undefined)

const { status, data } = await apiInstance.getGuestLoyalty(
    guestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **guestId** | [**string**] |  | defaults to undefined|


### Return type

**GetGuestLoyalty200Response**

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

# **getGuestStays**
> GetGuestStays200Response getGuestStays()

Retrieve complete stay history for a guest

### Example

```typescript
import {
    GuestsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new GuestsApi(configuration);

let guestId: string; // (default to undefined)
let pageSize: number; //Number of items per page (max 100) (optional) (default to 20)
let cursor: string; //Cursor for pagination (opaque token) (optional) (default to undefined)

const { status, data } = await apiInstance.getGuestStays(
    guestId,
    pageSize,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **guestId** | [**string**] |  | defaults to undefined|
| **pageSize** | [**number**] | Number of items per page (max 100) | (optional) defaults to 20|
| **cursor** | [**string**] | Cursor for pagination (opaque token) | (optional) defaults to undefined|


### Return type

**GetGuestStays200Response**

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

# **listGuests**
> ListGuests200Response listGuests()

Retrieve list of guest profiles

### Example

```typescript
import {
    GuestsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new GuestsApi(configuration);

let pageSize: number; //Number of items per page (max 100) (optional) (default to 20)
let cursor: string; //Cursor for pagination (opaque token) (optional) (default to undefined)
let search: string; //Search by name or email (optional) (default to undefined)
let loyaltyTier: 'NONE' | 'SILVER' | 'GOLD' | 'PLATINUM'; // (optional) (default to undefined)

const { status, data } = await apiInstance.listGuests(
    pageSize,
    cursor,
    search,
    loyaltyTier
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageSize** | [**number**] | Number of items per page (max 100) | (optional) defaults to 20|
| **cursor** | [**string**] | Cursor for pagination (opaque token) | (optional) defaults to undefined|
| **search** | [**string**] | Search by name or email | (optional) defaults to undefined|
| **loyaltyTier** | [**&#39;NONE&#39; | &#39;SILVER&#39; | &#39;GOLD&#39; | &#39;PLATINUM&#39;**]**Array<&#39;NONE&#39; &#124; &#39;SILVER&#39; &#124; &#39;GOLD&#39; &#124; &#39;PLATINUM&#39;>** |  | (optional) defaults to undefined|


### Return type

**ListGuests200Response**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mergeGuests**
> GuestProfile mergeGuests(mergeGuestsRequest)

Merge two guest profiles into one

### Example

```typescript
import {
    GuestsApi,
    Configuration,
    MergeGuestsRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new GuestsApi(configuration);

let mergeGuestsRequest: MergeGuestsRequest; //

const { status, data } = await apiInstance.mergeGuests(
    mergeGuestsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mergeGuestsRequest** | **MergeGuestsRequest**|  | |


### Return type

**GuestProfile**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Profiles merged successfully |  -  |
|**400** | Bad request - validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replaceGuest**
> GuestProfile replaceGuest(guestProfile)

Replace an existing guest profile with a complete new representation. All fields must be provided. For partial updates, use PATCH instead.  **Optimistic Locking:** Use `If-Match` header with ETag 

### Example

```typescript
import {
    GuestsApi,
    Configuration,
    GuestProfile
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new GuestsApi(configuration);

let guestId: string; // (default to undefined)
let guestProfile: GuestProfile; //
let ifMatch: string; //ETag for optimistic locking (optional) (default to undefined)

const { status, data } = await apiInstance.replaceGuest(
    guestId,
    guestProfile,
    ifMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **guestProfile** | **GuestProfile**|  | |
| **guestId** | [**string**] |  | defaults to undefined|
| **ifMatch** | [**string**] | ETag for optimistic locking | (optional) defaults to undefined|


### Return type

**GuestProfile**

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

# **replaceGuestPreferences**
> object replaceGuestPreferences(body)

Replace all guest preferences with new settings including room preferences, dietary restrictions, and communication preferences

### Example

```typescript
import {
    GuestsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new GuestsApi(configuration);

let guestId: string; // (default to undefined)
let body: object; //
let ifMatch: string; //ETag for optimistic locking (optional) (default to undefined)

const { status, data } = await apiInstance.replaceGuestPreferences(
    guestId,
    body,
    ifMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **guestId** | [**string**] |  | defaults to undefined|
| **ifMatch** | [**string**] | ETag for optimistic locking | (optional) defaults to undefined|


### Return type

**object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully replaced |  * ETag -  <br>  |
|**404** | Resource not found |  -  |
|**412** | Precondition failed - optimistic locking failure |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchGuests**
> Array<GuestProfile> searchGuests(searchGuestsRequest)

Advanced guest search with multiple criteria

### Example

```typescript
import {
    GuestsApi,
    Configuration,
    SearchGuestsRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new GuestsApi(configuration);

let searchGuestsRequest: SearchGuestsRequest; //

const { status, data } = await apiInstance.searchGuests(
    searchGuestsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **searchGuestsRequest** | **SearchGuestsRequest**|  | |


### Return type

**Array<GuestProfile>**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**400** | Bad request - validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateGuest**
> GuestProfile updateGuest(body)

Partially update a guest profile. Only provided fields will be updated. This is the recommended method for most updates.  **Optimistic Locking:** Use `If-Match` header with ETag  **Common use cases:** - Update email or phone - Change address - Update preferences - Modify loyalty tier 

### Example

```typescript
import {
    GuestsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new GuestsApi(configuration);

let guestId: string; // (default to undefined)
let body: object; //
let ifMatch: string; //ETag for optimistic locking (optional) (default to undefined)

const { status, data } = await apiInstance.updateGuest(
    guestId,
    body,
    ifMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **guestId** | [**string**] |  | defaults to undefined|
| **ifMatch** | [**string**] | ETag for optimistic locking | (optional) defaults to undefined|


### Return type

**GuestProfile**

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

# **updateGuestPreferences**
> object updateGuestPreferences(body)

Update specific guest preferences. Only provided preferences will be updated.  **Example:** Update room type preference only 

### Example

```typescript
import {
    GuestsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new GuestsApi(configuration);

let guestId: string; // (default to undefined)
let body: object; //
let ifMatch: string; //ETag for optimistic locking (optional) (default to undefined)

const { status, data } = await apiInstance.updateGuestPreferences(
    guestId,
    body,
    ifMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **guestId** | [**string**] |  | defaults to undefined|
| **ifMatch** | [**string**] | ETag for optimistic locking | (optional) defaults to undefined|


### Return type

**object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully updated |  * ETag -  <br>  |
|**404** | Resource not found |  -  |
|**412** | Precondition failed - optimistic locking failure |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verifyGuest**
> VerifyGuest200Response verifyGuest(verifyGuestRequest)

Verify guest identity for security purposes

### Example

```typescript
import {
    GuestsApi,
    Configuration,
    VerifyGuestRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new GuestsApi(configuration);

let guestId: string; // (default to undefined)
let verifyGuestRequest: VerifyGuestRequest; //

const { status, data } = await apiInstance.verifyGuest(
    guestId,
    verifyGuestRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **verifyGuestRequest** | **VerifyGuestRequest**|  | |
| **guestId** | [**string**] |  | defaults to undefined|


### Return type

**VerifyGuest200Response**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Verification successful |  -  |
|**400** | Bad request - validation error |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

