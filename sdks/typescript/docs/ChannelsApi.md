# ChannelsApi

All URIs are relative to *https://api.stayos.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createChannel**](#createchannel) | **POST** /channels | Create channel integration|
|[**deleteChannel**](#deletechannel) | **DELETE** /channels/{channelId} | Disconnect channel|
|[**getChannelMappings**](#getchannelmappings) | **GET** /channels/{channelId}/mappings | Get channel mappings|
|[**getChannelPerformance**](#getchannelperformance) | **GET** /channels/{channelId}/performance | Get channel performance|
|[**getChannelSyncStatus**](#getchannelsyncstatus) | **GET** /channels/{channelId}/sync-status | Get sync status|
|[**listChannels**](#listchannels) | **GET** /channels | List channel integrations|
|[**replaceChannel**](#replacechannel) | **PUT** /channels/{channelId} | Replace channel configuration (full update)|
|[**syncChannel**](#syncchannel) | **POST** /channels/{channelId}/sync | Sync channel data|
|[**testChannelConnection**](#testchannelconnection) | **POST** /channels/{channelId}/test | Test channel connection|
|[**updateChannel**](#updatechannel) | **PATCH** /channels/{channelId} | Update channel configuration (partial update)|
|[**updateChannelMappings**](#updatechannelmappings) | **PUT** /channels/{channelId}/mappings | Update channel mappings|

# **createChannel**
> object createChannel(body)

Create a new channel manager integration for OTA distribution (Booking.com, Expedia, etc.)

### Example

```typescript
import {
    ChannelsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ChannelsApi(configuration);

let body: object; //

const { status, data } = await apiInstance.createChannel(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |


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
|**201** | Channel created |  * Location -  <br>  |
|**400** | Bad request - validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteChannel**
> deleteChannel()

Disconnect and remove a channel integration

### Example

```typescript
import {
    ChannelsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ChannelsApi(configuration);

let channelId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteChannel(
    channelId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **channelId** | [**string**] |  | defaults to undefined|


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
|**204** | Channel disconnected |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getChannelMappings**
> ChannelMapping getChannelMappings()

Get property/room type mappings for the channel

### Example

```typescript
import {
    ChannelsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ChannelsApi(configuration);

let channelId: string; // (default to undefined)

const { status, data } = await apiInstance.getChannelMappings(
    channelId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **channelId** | [**string**] |  | defaults to undefined|


### Return type

**ChannelMapping**

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

# **getChannelPerformance**
> ChannelPerformance getChannelPerformance()

Get performance metrics for the channel

### Example

```typescript
import {
    ChannelsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ChannelsApi(configuration);

let channelId: string; // (default to undefined)
let startDate: string; // (optional) (default to undefined)
let endDate: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getChannelPerformance(
    channelId,
    startDate,
    endDate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **channelId** | [**string**] |  | defaults to undefined|
| **startDate** | [**string**] |  | (optional) defaults to undefined|
| **endDate** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ChannelPerformance**

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

# **getChannelSyncStatus**
> GetChannelSyncStatus200Response getChannelSyncStatus()

Get the status of channel synchronization

### Example

```typescript
import {
    ChannelsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ChannelsApi(configuration);

let channelId: string; // (default to undefined)

const { status, data } = await apiInstance.getChannelSyncStatus(
    channelId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **channelId** | [**string**] |  | defaults to undefined|


### Return type

**GetChannelSyncStatus200Response**

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

# **listChannels**
> GetGuestStays200Response listChannels()

List all configured channel manager integrations with connection status and sync settings

### Example

```typescript
import {
    ChannelsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ChannelsApi(configuration);

let propertyId: string; // (optional) (default to undefined)
let isActive: boolean; // (optional) (default to undefined)
let pageSize: number; //Number of items per page (max 100) (optional) (default to 20)
let cursor: string; //Cursor for pagination (opaque token) (optional) (default to undefined)

const { status, data } = await apiInstance.listChannels(
    propertyId,
    isActive,
    pageSize,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **propertyId** | [**string**] |  | (optional) defaults to undefined|
| **isActive** | [**boolean**] |  | (optional) defaults to undefined|
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
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replaceChannel**
> object replaceChannel(body)

Replace channel configuration with complete new settings including credentials, mappings, and sync preferences

### Example

```typescript
import {
    ChannelsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ChannelsApi(configuration);

let channelId: string; // (default to undefined)
let body: object; //
let ifMatch: string; //ETag for optimistic locking (optional) (default to undefined)

const { status, data } = await apiInstance.replaceChannel(
    channelId,
    body,
    ifMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **channelId** | [**string**] |  | defaults to undefined|
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

# **syncChannel**
> SyncChannel202Response syncChannel()

Trigger a manual sync with the channel

### Example

```typescript
import {
    ChannelsApi,
    Configuration,
    SyncChannelRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ChannelsApi(configuration);

let channelId: string; // (default to undefined)
let syncChannelRequest: SyncChannelRequest; // (optional)

const { status, data } = await apiInstance.syncChannel(
    channelId,
    syncChannelRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **syncChannelRequest** | **SyncChannelRequest**|  | |
| **channelId** | [**string**] |  | defaults to undefined|


### Return type

**SyncChannel202Response**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Sync initiated |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **testChannelConnection**
> TestChannelConnection200Response testChannelConnection()

Test the connection to a channel integration

### Example

```typescript
import {
    ChannelsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ChannelsApi(configuration);

let channelId: string; // (default to undefined)

const { status, data } = await apiInstance.testChannelConnection(
    channelId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **channelId** | [**string**] |  | defaults to undefined|


### Return type

**TestChannelConnection200Response**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Test successful |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateChannel**
> object updateChannel(body)

Update specific channel configuration fields.  **Common use cases:** - Update API credentials - Change sync settings - Modify rate markup - Update availability settings 

### Example

```typescript
import {
    ChannelsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ChannelsApi(configuration);

let channelId: string; // (default to undefined)
let body: object; //
let ifMatch: string; //ETag for optimistic locking (optional) (default to undefined)

const { status, data } = await apiInstance.updateChannel(
    channelId,
    body,
    ifMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **channelId** | [**string**] |  | defaults to undefined|
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

# **updateChannelMappings**
> ChannelMapping updateChannelMappings(channelMapping)

Update property/room type mappings for the channel

### Example

```typescript
import {
    ChannelsApi,
    Configuration,
    ChannelMapping
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ChannelsApi(configuration);

let channelId: string; // (default to undefined)
let channelMapping: ChannelMapping; //

const { status, data } = await apiInstance.updateChannelMappings(
    channelId,
    channelMapping
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **channelMapping** | **ChannelMapping**|  | |
| **channelId** | [**string**] |  | defaults to undefined|


### Return type

**ChannelMapping**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Mappings updated |  -  |
|**400** | Bad request - validation error |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

