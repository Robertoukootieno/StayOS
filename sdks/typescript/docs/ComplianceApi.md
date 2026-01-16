# ComplianceApi

All URIs are relative to *https://api.stayos.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCertification**](#createcertification) | **POST** /compliance/certifications | Upload certification|
|[**createComplianceReport**](#createcompliancereport) | **POST** /compliance/reports | Generate compliance report|
|[**deleteGuestData**](#deleteguestdata) | **POST** /compliance/gdpr/delete | Delete guest data (GDPR)|
|[**exportGuestData**](#exportguestdata) | **POST** /compliance/gdpr/export | Export guest data (GDPR)|
|[**getAuditLog**](#getauditlog) | **GET** /audit/logs/{logId} | Get audit log details|
|[**getAuditLogs**](#getauditlogs) | **GET** /audit/logs | Get audit logs|
|[**getComplianceReport**](#getcompliancereport) | **GET** /compliance/reports/{reportId} | Get compliance report|
|[**getGuestRegistry**](#getguestregistry) | **GET** /compliance/guest-registry | Get guest registry report|
|[**getTaxReport**](#gettaxreport) | **GET** /compliance/tax-report | Get tax report|
|[**listCertifications**](#listcertifications) | **GET** /compliance/certifications | List certifications|
|[**listComplianceReports**](#listcompliancereports) | **GET** /compliance/reports | List compliance reports|
|[**searchAuditLogs**](#searchauditlogs) | **POST** /audit/search | Search audit logs|

# **createCertification**
> PropertyCertification createCertification(propertyCertification)

Upload a new property certification

### Example

```typescript
import {
    ComplianceApi,
    Configuration,
    PropertyCertification
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ComplianceApi(configuration);

let propertyCertification: PropertyCertification; //

const { status, data } = await apiInstance.createCertification(
    propertyCertification
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **propertyCertification** | **PropertyCertification**|  | |


### Return type

**PropertyCertification**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Certification uploaded |  * Location -  <br>  |
|**400** | Bad request - validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createComplianceReport**
> object createComplianceReport(createComplianceReportRequest)

Generate a new compliance report for regulatory requirements, audits, or certifications

### Example

```typescript
import {
    ComplianceApi,
    Configuration,
    CreateComplianceReportRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ComplianceApi(configuration);

let createComplianceReportRequest: CreateComplianceReportRequest; //

const { status, data } = await apiInstance.createComplianceReport(
    createComplianceReportRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createComplianceReportRequest** | **CreateComplianceReportRequest**|  | |


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
|**201** | Report generation started |  * Location -  <br>  |
|**400** | Bad request - validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteGuestData**
> DeleteGuestData200Response deleteGuestData(deleteGuestDataRequest)

Delete all data for a guest per GDPR right to be forgotten

### Example

```typescript
import {
    ComplianceApi,
    Configuration,
    DeleteGuestDataRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ComplianceApi(configuration);

let deleteGuestDataRequest: DeleteGuestDataRequest; //

const { status, data } = await apiInstance.deleteGuestData(
    deleteGuestDataRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteGuestDataRequest** | **DeleteGuestDataRequest**|  | |


### Return type

**DeleteGuestData200Response**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Deletion request processed |  -  |
|**400** | Bad request - validation error |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exportGuestData**
> ExportGuestData200Response exportGuestData(exportGuestDataRequest)

Export all data for a guest per GDPR requirements

### Example

```typescript
import {
    ComplianceApi,
    Configuration,
    ExportGuestDataRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ComplianceApi(configuration);

let exportGuestDataRequest: ExportGuestDataRequest; //

const { status, data } = await apiInstance.exportGuestData(
    exportGuestDataRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **exportGuestDataRequest** | **ExportGuestDataRequest**|  | |


### Return type

**ExportGuestData200Response**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Data export ready |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAuditLog**
> AuditLog getAuditLog()

Retrieve details of a specific audit log entry

### Example

```typescript
import {
    ComplianceApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ComplianceApi(configuration);

let logId: string; // (default to undefined)

const { status, data } = await apiInstance.getAuditLog(
    logId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **logId** | [**string**] |  | defaults to undefined|


### Return type

**AuditLog**

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

# **getAuditLogs**
> GetAuditLogs200Response getAuditLogs()

Retrieve audit trail of system activities

### Example

```typescript
import {
    ComplianceApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ComplianceApi(configuration);

let entityType: string; // (optional) (default to undefined)
let entityId: string; // (optional) (default to undefined)
let action: string; // (optional) (default to undefined)
let userId: string; // (optional) (default to undefined)
let startDate: string; // (optional) (default to undefined)
let endDate: string; // (optional) (default to undefined)
let pageSize: number; //Number of items per page (max 100) (optional) (default to 20)
let cursor: string; //Cursor for pagination (opaque token) (optional) (default to undefined)

const { status, data } = await apiInstance.getAuditLogs(
    entityType,
    entityId,
    action,
    userId,
    startDate,
    endDate,
    pageSize,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityType** | [**string**] |  | (optional) defaults to undefined|
| **entityId** | [**string**] |  | (optional) defaults to undefined|
| **action** | [**string**] |  | (optional) defaults to undefined|
| **userId** | [**string**] |  | (optional) defaults to undefined|
| **startDate** | [**string**] |  | (optional) defaults to undefined|
| **endDate** | [**string**] |  | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of items per page (max 100) | (optional) defaults to 20|
| **cursor** | [**string**] | Cursor for pagination (opaque token) | (optional) defaults to undefined|


### Return type

**GetAuditLogs200Response**

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

# **getComplianceReport**
> ComplianceReport getComplianceReport()

Retrieve a specific compliance report by ID

### Example

```typescript
import {
    ComplianceApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ComplianceApi(configuration);

let reportId: string; // (default to undefined)

const { status, data } = await apiInstance.getComplianceReport(
    reportId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reportId** | [**string**] |  | defaults to undefined|


### Return type

**ComplianceReport**

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

# **getGuestRegistry**
> GetGuestRegistry200Response getGuestRegistry()

Get guest registry report for compliance purposes

### Example

```typescript
import {
    ComplianceApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ComplianceApi(configuration);

let startDate: string; // (default to undefined)
let endDate: string; // (default to undefined)
let propertyId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getGuestRegistry(
    startDate,
    endDate,
    propertyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **startDate** | [**string**] |  | defaults to undefined|
| **endDate** | [**string**] |  | defaults to undefined|
| **propertyId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**GetGuestRegistry200Response**

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

# **getTaxReport**
> GetTaxReport200Response getTaxReport()

Get tax report for compliance and filing

### Example

```typescript
import {
    ComplianceApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ComplianceApi(configuration);

let startDate: string; // (default to undefined)
let endDate: string; // (default to undefined)
let propertyId: string; // (optional) (default to undefined)
let taxType: 'OCCUPANCY' | 'SALES' | 'VAT'; // (optional) (default to undefined)

const { status, data } = await apiInstance.getTaxReport(
    startDate,
    endDate,
    propertyId,
    taxType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **startDate** | [**string**] |  | defaults to undefined|
| **endDate** | [**string**] |  | defaults to undefined|
| **propertyId** | [**string**] |  | (optional) defaults to undefined|
| **taxType** | [**&#39;OCCUPANCY&#39; | &#39;SALES&#39; | &#39;VAT&#39;**]**Array<&#39;OCCUPANCY&#39; &#124; &#39;SALES&#39; &#124; &#39;VAT&#39;>** |  | (optional) defaults to undefined|


### Return type

**GetTaxReport200Response**

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

# **listCertifications**
> ListCertifications200Response listCertifications()

List all property certifications

### Example

```typescript
import {
    ComplianceApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ComplianceApi(configuration);

let propertyId: string; // (optional) (default to undefined)
let pageSize: number; //Number of items per page (max 100) (optional) (default to 20)
let cursor: string; //Cursor for pagination (opaque token) (optional) (default to undefined)

const { status, data } = await apiInstance.listCertifications(
    propertyId,
    pageSize,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **propertyId** | [**string**] |  | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of items per page (max 100) | (optional) defaults to 20|
| **cursor** | [**string**] | Cursor for pagination (opaque token) | (optional) defaults to undefined|


### Return type

**ListCertifications200Response**

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

# **listComplianceReports**
> GetGuestStays200Response listComplianceReports()

List all compliance reports with filtering by type, date range, and regulatory requirement

### Example

```typescript
import {
    ComplianceApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ComplianceApi(configuration);

let reportType: string; // (optional) (default to undefined)
let pageSize: number; //Number of items per page (max 100) (optional) (default to 20)
let cursor: string; //Cursor for pagination (opaque token) (optional) (default to undefined)

const { status, data } = await apiInstance.listComplianceReports(
    reportType,
    pageSize,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reportType** | [**string**] |  | (optional) defaults to undefined|
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

# **searchAuditLogs**
> Array<AuditLog> searchAuditLogs(searchAuditLogsRequest)

Advanced search of audit logs with complex criteria

### Example

```typescript
import {
    ComplianceApi,
    Configuration,
    SearchAuditLogsRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new ComplianceApi(configuration);

let searchAuditLogsRequest: SearchAuditLogsRequest; //

const { status, data } = await apiInstance.searchAuditLogs(
    searchAuditLogsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **searchAuditLogsRequest** | **SearchAuditLogsRequest**|  | |


### Return type

**Array<AuditLog>**

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

