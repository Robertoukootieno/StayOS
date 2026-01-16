# StayOS.ApiClient.Api.ComplianceApi

All URIs are relative to *https://api.stayos.com/v1*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateCertification**](ComplianceApi.md#createcertification) | **POST** /compliance/certifications | Upload certification |
| [**CreateComplianceReport**](ComplianceApi.md#createcompliancereport) | **POST** /compliance/reports | Generate compliance report |
| [**DeleteGuestData**](ComplianceApi.md#deleteguestdata) | **POST** /compliance/gdpr/delete | Delete guest data (GDPR) |
| [**ExportGuestData**](ComplianceApi.md#exportguestdata) | **POST** /compliance/gdpr/export | Export guest data (GDPR) |
| [**GetAuditLog**](ComplianceApi.md#getauditlog) | **GET** /audit/logs/{logId} | Get audit log details |
| [**GetAuditLogs**](ComplianceApi.md#getauditlogs) | **GET** /audit/logs | Get audit logs |
| [**GetComplianceReport**](ComplianceApi.md#getcompliancereport) | **GET** /compliance/reports/{reportId} | Get compliance report |
| [**GetGuestRegistry**](ComplianceApi.md#getguestregistry) | **GET** /compliance/guest-registry | Get guest registry report |
| [**GetTaxReport**](ComplianceApi.md#gettaxreport) | **GET** /compliance/tax-report | Get tax report |
| [**ListCertifications**](ComplianceApi.md#listcertifications) | **GET** /compliance/certifications | List certifications |
| [**ListComplianceReports**](ComplianceApi.md#listcompliancereports) | **GET** /compliance/reports | List compliance reports |
| [**SearchAuditLogs**](ComplianceApi.md#searchauditlogs) | **POST** /audit/search | Search audit logs |

<a id="createcertification"></a>
# **CreateCertification**
> PropertyCertification CreateCertification (PropertyCertification propertyCertification)

Upload certification

Upload a new property certification

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using StayOS.ApiClient.Api;
using StayOS.ApiClient.Client;
using StayOS.ApiClient.Model;

namespace Example
{
    public class CreateCertificationExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.stayos.com/v1";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new ComplianceApi(httpClient, config, httpClientHandler);
            var propertyCertification = new PropertyCertification(); // PropertyCertification | 

            try
            {
                // Upload certification
                PropertyCertification result = apiInstance.CreateCertification(propertyCertification);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ComplianceApi.CreateCertification: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateCertificationWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Upload certification
    ApiResponse<PropertyCertification> response = apiInstance.CreateCertificationWithHttpInfo(propertyCertification);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ComplianceApi.CreateCertificationWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **propertyCertification** | [**PropertyCertification**](PropertyCertification.md) |  |  |

### Return type

[**PropertyCertification**](PropertyCertification.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Certification uploaded |  * Location -  <br>  |
| **400** | Bad request - validation error |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createcompliancereport"></a>
# **CreateComplianceReport**
> Object CreateComplianceReport (CreateComplianceReportRequest createComplianceReportRequest)

Generate compliance report

Generate a new compliance report for regulatory requirements, audits, or certifications

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using StayOS.ApiClient.Api;
using StayOS.ApiClient.Client;
using StayOS.ApiClient.Model;

namespace Example
{
    public class CreateComplianceReportExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.stayos.com/v1";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new ComplianceApi(httpClient, config, httpClientHandler);
            var createComplianceReportRequest = new CreateComplianceReportRequest(); // CreateComplianceReportRequest | 

            try
            {
                // Generate compliance report
                Object result = apiInstance.CreateComplianceReport(createComplianceReportRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ComplianceApi.CreateComplianceReport: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateComplianceReportWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Generate compliance report
    ApiResponse<Object> response = apiInstance.CreateComplianceReportWithHttpInfo(createComplianceReportRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ComplianceApi.CreateComplianceReportWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createComplianceReportRequest** | [**CreateComplianceReportRequest**](CreateComplianceReportRequest.md) |  |  |

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Report generation started |  * Location -  <br>  |
| **400** | Bad request - validation error |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="deleteguestdata"></a>
# **DeleteGuestData**
> DeleteGuestData200Response DeleteGuestData (DeleteGuestDataRequest deleteGuestDataRequest)

Delete guest data (GDPR)

Delete all data for a guest per GDPR right to be forgotten

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using StayOS.ApiClient.Api;
using StayOS.ApiClient.Client;
using StayOS.ApiClient.Model;

namespace Example
{
    public class DeleteGuestDataExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.stayos.com/v1";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new ComplianceApi(httpClient, config, httpClientHandler);
            var deleteGuestDataRequest = new DeleteGuestDataRequest(); // DeleteGuestDataRequest | 

            try
            {
                // Delete guest data (GDPR)
                DeleteGuestData200Response result = apiInstance.DeleteGuestData(deleteGuestDataRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ComplianceApi.DeleteGuestData: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteGuestDataWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete guest data (GDPR)
    ApiResponse<DeleteGuestData200Response> response = apiInstance.DeleteGuestDataWithHttpInfo(deleteGuestDataRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ComplianceApi.DeleteGuestDataWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **deleteGuestDataRequest** | [**DeleteGuestDataRequest**](DeleteGuestDataRequest.md) |  |  |

### Return type

[**DeleteGuestData200Response**](DeleteGuestData200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Deletion request processed |  -  |
| **400** | Bad request - validation error |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="exportguestdata"></a>
# **ExportGuestData**
> ExportGuestData200Response ExportGuestData (ExportGuestDataRequest exportGuestDataRequest)

Export guest data (GDPR)

Export all data for a guest per GDPR requirements

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using StayOS.ApiClient.Api;
using StayOS.ApiClient.Client;
using StayOS.ApiClient.Model;

namespace Example
{
    public class ExportGuestDataExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.stayos.com/v1";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new ComplianceApi(httpClient, config, httpClientHandler);
            var exportGuestDataRequest = new ExportGuestDataRequest(); // ExportGuestDataRequest | 

            try
            {
                // Export guest data (GDPR)
                ExportGuestData200Response result = apiInstance.ExportGuestData(exportGuestDataRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ComplianceApi.ExportGuestData: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ExportGuestDataWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Export guest data (GDPR)
    ApiResponse<ExportGuestData200Response> response = apiInstance.ExportGuestDataWithHttpInfo(exportGuestDataRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ComplianceApi.ExportGuestDataWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **exportGuestDataRequest** | [**ExportGuestDataRequest**](ExportGuestDataRequest.md) |  |  |

### Return type

[**ExportGuestData200Response**](ExportGuestData200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Data export ready |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getauditlog"></a>
# **GetAuditLog**
> AuditLog GetAuditLog (Guid logId)

Get audit log details

Retrieve details of a specific audit log entry

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using StayOS.ApiClient.Api;
using StayOS.ApiClient.Client;
using StayOS.ApiClient.Model;

namespace Example
{
    public class GetAuditLogExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.stayos.com/v1";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new ComplianceApi(httpClient, config, httpClientHandler);
            var logId = "logId_example";  // Guid | 

            try
            {
                // Get audit log details
                AuditLog result = apiInstance.GetAuditLog(logId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ComplianceApi.GetAuditLog: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetAuditLogWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get audit log details
    ApiResponse<AuditLog> response = apiInstance.GetAuditLogWithHttpInfo(logId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ComplianceApi.GetAuditLogWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **logId** | **Guid** |  |  |

### Return type

[**AuditLog**](AuditLog.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getauditlogs"></a>
# **GetAuditLogs**
> GetAuditLogs200Response GetAuditLogs (string entityType = null, Guid? entityId = null, string action = null, Guid? userId = null, DateTime? startDate = null, DateTime? endDate = null, int? pageSize = null, string cursor = null)

Get audit logs

Retrieve audit trail of system activities

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using StayOS.ApiClient.Api;
using StayOS.ApiClient.Client;
using StayOS.ApiClient.Model;

namespace Example
{
    public class GetAuditLogsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.stayos.com/v1";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new ComplianceApi(httpClient, config, httpClientHandler);
            var entityType = "entityType_example";  // string |  (optional) 
            var entityId = "entityId_example";  // Guid? |  (optional) 
            var action = "action_example";  // string |  (optional) 
            var userId = "userId_example";  // Guid? |  (optional) 
            var startDate = DateTime.Parse("2013-10-20T19:20:30+01:00");  // DateTime? |  (optional) 
            var endDate = DateTime.Parse("2013-10-20T19:20:30+01:00");  // DateTime? |  (optional) 
            var pageSize = 20;  // int? | Number of items per page (max 100) (optional)  (default to 20)
            var cursor = "cursor_example";  // string | Cursor for pagination (opaque token) (optional) 

            try
            {
                // Get audit logs
                GetAuditLogs200Response result = apiInstance.GetAuditLogs(entityType, entityId, action, userId, startDate, endDate, pageSize, cursor);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ComplianceApi.GetAuditLogs: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetAuditLogsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get audit logs
    ApiResponse<GetAuditLogs200Response> response = apiInstance.GetAuditLogsWithHttpInfo(entityType, entityId, action, userId, startDate, endDate, pageSize, cursor);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ComplianceApi.GetAuditLogsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **entityType** | **string** |  | [optional]  |
| **entityId** | **Guid?** |  | [optional]  |
| **action** | **string** |  | [optional]  |
| **userId** | **Guid?** |  | [optional]  |
| **startDate** | **DateTime?** |  | [optional]  |
| **endDate** | **DateTime?** |  | [optional]  |
| **pageSize** | **int?** | Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **string** | Cursor for pagination (opaque token) | [optional]  |

### Return type

[**GetAuditLogs200Response**](GetAuditLogs200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getcompliancereport"></a>
# **GetComplianceReport**
> ComplianceReport GetComplianceReport (Guid reportId)

Get compliance report

Retrieve a specific compliance report by ID

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using StayOS.ApiClient.Api;
using StayOS.ApiClient.Client;
using StayOS.ApiClient.Model;

namespace Example
{
    public class GetComplianceReportExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.stayos.com/v1";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new ComplianceApi(httpClient, config, httpClientHandler);
            var reportId = "reportId_example";  // Guid | 

            try
            {
                // Get compliance report
                ComplianceReport result = apiInstance.GetComplianceReport(reportId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ComplianceApi.GetComplianceReport: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetComplianceReportWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get compliance report
    ApiResponse<ComplianceReport> response = apiInstance.GetComplianceReportWithHttpInfo(reportId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ComplianceApi.GetComplianceReportWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **reportId** | **Guid** |  |  |

### Return type

[**ComplianceReport**](ComplianceReport.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getguestregistry"></a>
# **GetGuestRegistry**
> GetGuestRegistry200Response GetGuestRegistry (DateTime startDate, DateTime endDate, Guid? propertyId = null)

Get guest registry report

Get guest registry report for compliance purposes

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using StayOS.ApiClient.Api;
using StayOS.ApiClient.Client;
using StayOS.ApiClient.Model;

namespace Example
{
    public class GetGuestRegistryExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.stayos.com/v1";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new ComplianceApi(httpClient, config, httpClientHandler);
            var startDate = DateTime.Parse("2013-10-20");  // DateTime | 
            var endDate = DateTime.Parse("2013-10-20");  // DateTime | 
            var propertyId = "propertyId_example";  // Guid? |  (optional) 

            try
            {
                // Get guest registry report
                GetGuestRegistry200Response result = apiInstance.GetGuestRegistry(startDate, endDate, propertyId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ComplianceApi.GetGuestRegistry: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetGuestRegistryWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get guest registry report
    ApiResponse<GetGuestRegistry200Response> response = apiInstance.GetGuestRegistryWithHttpInfo(startDate, endDate, propertyId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ComplianceApi.GetGuestRegistryWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **startDate** | **DateTime** |  |  |
| **endDate** | **DateTime** |  |  |
| **propertyId** | **Guid?** |  | [optional]  |

### Return type

[**GetGuestRegistry200Response**](GetGuestRegistry200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | Bad request - validation error |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="gettaxreport"></a>
# **GetTaxReport**
> GetTaxReport200Response GetTaxReport (DateTime startDate, DateTime endDate, Guid? propertyId = null, string taxType = null)

Get tax report

Get tax report for compliance and filing

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using StayOS.ApiClient.Api;
using StayOS.ApiClient.Client;
using StayOS.ApiClient.Model;

namespace Example
{
    public class GetTaxReportExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.stayos.com/v1";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new ComplianceApi(httpClient, config, httpClientHandler);
            var startDate = DateTime.Parse("2013-10-20");  // DateTime | 
            var endDate = DateTime.Parse("2013-10-20");  // DateTime | 
            var propertyId = "propertyId_example";  // Guid? |  (optional) 
            var taxType = "OCCUPANCY";  // string |  (optional) 

            try
            {
                // Get tax report
                GetTaxReport200Response result = apiInstance.GetTaxReport(startDate, endDate, propertyId, taxType);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ComplianceApi.GetTaxReport: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetTaxReportWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get tax report
    ApiResponse<GetTaxReport200Response> response = apiInstance.GetTaxReportWithHttpInfo(startDate, endDate, propertyId, taxType);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ComplianceApi.GetTaxReportWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **startDate** | **DateTime** |  |  |
| **endDate** | **DateTime** |  |  |
| **propertyId** | **Guid?** |  | [optional]  |
| **taxType** | **string** |  | [optional]  |

### Return type

[**GetTaxReport200Response**](GetTaxReport200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | Bad request - validation error |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listcertifications"></a>
# **ListCertifications**
> ListCertifications200Response ListCertifications (Guid? propertyId = null, int? pageSize = null, string cursor = null)

List certifications

List all property certifications

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using StayOS.ApiClient.Api;
using StayOS.ApiClient.Client;
using StayOS.ApiClient.Model;

namespace Example
{
    public class ListCertificationsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.stayos.com/v1";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new ComplianceApi(httpClient, config, httpClientHandler);
            var propertyId = "propertyId_example";  // Guid? |  (optional) 
            var pageSize = 20;  // int? | Number of items per page (max 100) (optional)  (default to 20)
            var cursor = "cursor_example";  // string | Cursor for pagination (opaque token) (optional) 

            try
            {
                // List certifications
                ListCertifications200Response result = apiInstance.ListCertifications(propertyId, pageSize, cursor);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ComplianceApi.ListCertifications: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListCertificationsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List certifications
    ApiResponse<ListCertifications200Response> response = apiInstance.ListCertificationsWithHttpInfo(propertyId, pageSize, cursor);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ComplianceApi.ListCertificationsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **propertyId** | **Guid?** |  | [optional]  |
| **pageSize** | **int?** | Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **string** | Cursor for pagination (opaque token) | [optional]  |

### Return type

[**ListCertifications200Response**](ListCertifications200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listcompliancereports"></a>
# **ListComplianceReports**
> GetGuestStays200Response ListComplianceReports (string reportType = null, int? pageSize = null, string cursor = null)

List compliance reports

List all compliance reports with filtering by type, date range, and regulatory requirement

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using StayOS.ApiClient.Api;
using StayOS.ApiClient.Client;
using StayOS.ApiClient.Model;

namespace Example
{
    public class ListComplianceReportsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.stayos.com/v1";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new ComplianceApi(httpClient, config, httpClientHandler);
            var reportType = "reportType_example";  // string |  (optional) 
            var pageSize = 20;  // int? | Number of items per page (max 100) (optional)  (default to 20)
            var cursor = "cursor_example";  // string | Cursor for pagination (opaque token) (optional) 

            try
            {
                // List compliance reports
                GetGuestStays200Response result = apiInstance.ListComplianceReports(reportType, pageSize, cursor);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ComplianceApi.ListComplianceReports: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListComplianceReportsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List compliance reports
    ApiResponse<GetGuestStays200Response> response = apiInstance.ListComplianceReportsWithHttpInfo(reportType, pageSize, cursor);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ComplianceApi.ListComplianceReportsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **reportType** | **string** |  | [optional]  |
| **pageSize** | **int?** | Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **string** | Cursor for pagination (opaque token) | [optional]  |

### Return type

[**GetGuestStays200Response**](GetGuestStays200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="searchauditlogs"></a>
# **SearchAuditLogs**
> List&lt;AuditLog&gt; SearchAuditLogs (SearchAuditLogsRequest searchAuditLogsRequest)

Search audit logs

Advanced search of audit logs with complex criteria

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using StayOS.ApiClient.Api;
using StayOS.ApiClient.Client;
using StayOS.ApiClient.Model;

namespace Example
{
    public class SearchAuditLogsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.stayos.com/v1";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";
            // Configure OAuth2 access token for authorization: OAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            // create instances of HttpClient, HttpClientHandler to be reused later with different Api classes
            HttpClient httpClient = new HttpClient();
            HttpClientHandler httpClientHandler = new HttpClientHandler();
            var apiInstance = new ComplianceApi(httpClient, config, httpClientHandler);
            var searchAuditLogsRequest = new SearchAuditLogsRequest(); // SearchAuditLogsRequest | 

            try
            {
                // Search audit logs
                List<AuditLog> result = apiInstance.SearchAuditLogs(searchAuditLogsRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling ComplianceApi.SearchAuditLogs: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the SearchAuditLogsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Search audit logs
    ApiResponse<List<AuditLog>> response = apiInstance.SearchAuditLogsWithHttpInfo(searchAuditLogsRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ComplianceApi.SearchAuditLogsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **searchAuditLogsRequest** | [**SearchAuditLogsRequest**](SearchAuditLogsRequest.md) |  |  |

### Return type

[**List&lt;AuditLog&gt;**](AuditLog.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | Bad request - validation error |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

