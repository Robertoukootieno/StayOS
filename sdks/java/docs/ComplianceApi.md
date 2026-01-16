# ComplianceApi

All URIs are relative to *https://api.stayos.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createCertification**](ComplianceApi.md#createCertification) | **POST** /compliance/certifications | Upload certification |
| [**createComplianceReport**](ComplianceApi.md#createComplianceReport) | **POST** /compliance/reports | Generate compliance report |
| [**deleteGuestData**](ComplianceApi.md#deleteGuestData) | **POST** /compliance/gdpr/delete | Delete guest data (GDPR) |
| [**exportGuestData**](ComplianceApi.md#exportGuestData) | **POST** /compliance/gdpr/export | Export guest data (GDPR) |
| [**getAuditLog**](ComplianceApi.md#getAuditLog) | **GET** /audit/logs/{logId} | Get audit log details |
| [**getAuditLogs**](ComplianceApi.md#getAuditLogs) | **GET** /audit/logs | Get audit logs |
| [**getComplianceReport**](ComplianceApi.md#getComplianceReport) | **GET** /compliance/reports/{reportId} | Get compliance report |
| [**getGuestRegistry**](ComplianceApi.md#getGuestRegistry) | **GET** /compliance/guest-registry | Get guest registry report |
| [**getTaxReport**](ComplianceApi.md#getTaxReport) | **GET** /compliance/tax-report | Get tax report |
| [**listCertifications**](ComplianceApi.md#listCertifications) | **GET** /compliance/certifications | List certifications |
| [**listComplianceReports**](ComplianceApi.md#listComplianceReports) | **GET** /compliance/reports | List compliance reports |
| [**searchAuditLogs**](ComplianceApi.md#searchAuditLogs) | **POST** /audit/search | Search audit logs |


<a id="createCertification"></a>
# **createCertification**
> PropertyCertification createCertification(propertyCertification)

Upload certification

Upload a new property certification

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.ComplianceApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.stayos.com/v1");
    
    // Configure OAuth2 access token for authorization: OAuth2
    OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
    OAuth2.setAccessToken("YOUR ACCESS TOKEN");

    // Configure OAuth2 access token for authorization: OAuth2
    OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
    OAuth2.setAccessToken("YOUR ACCESS TOKEN");

    ComplianceApi apiInstance = new ComplianceApi(defaultClient);
    PropertyCertification propertyCertification = new PropertyCertification(); // PropertyCertification | 
    try {
      PropertyCertification result = apiInstance.createCertification(propertyCertification);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ComplianceApi#createCertification");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **propertyCertification** | [**PropertyCertification**](PropertyCertification.md)|  | |

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

<a id="createComplianceReport"></a>
# **createComplianceReport**
> Object createComplianceReport(createComplianceReportRequest)

Generate compliance report

Generate a new compliance report for regulatory requirements, audits, or certifications

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.ComplianceApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.stayos.com/v1");
    
    // Configure OAuth2 access token for authorization: OAuth2
    OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
    OAuth2.setAccessToken("YOUR ACCESS TOKEN");

    // Configure OAuth2 access token for authorization: OAuth2
    OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
    OAuth2.setAccessToken("YOUR ACCESS TOKEN");

    ComplianceApi apiInstance = new ComplianceApi(defaultClient);
    CreateComplianceReportRequest createComplianceReportRequest = new CreateComplianceReportRequest(); // CreateComplianceReportRequest | 
    try {
      Object result = apiInstance.createComplianceReport(createComplianceReportRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ComplianceApi#createComplianceReport");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createComplianceReportRequest** | [**CreateComplianceReportRequest**](CreateComplianceReportRequest.md)|  | |

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

<a id="deleteGuestData"></a>
# **deleteGuestData**
> DeleteGuestData200Response deleteGuestData(deleteGuestDataRequest)

Delete guest data (GDPR)

Delete all data for a guest per GDPR right to be forgotten

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.ComplianceApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.stayos.com/v1");
    
    // Configure OAuth2 access token for authorization: OAuth2
    OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
    OAuth2.setAccessToken("YOUR ACCESS TOKEN");

    // Configure OAuth2 access token for authorization: OAuth2
    OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
    OAuth2.setAccessToken("YOUR ACCESS TOKEN");

    ComplianceApi apiInstance = new ComplianceApi(defaultClient);
    DeleteGuestDataRequest deleteGuestDataRequest = new DeleteGuestDataRequest(); // DeleteGuestDataRequest | 
    try {
      DeleteGuestData200Response result = apiInstance.deleteGuestData(deleteGuestDataRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ComplianceApi#deleteGuestData");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **deleteGuestDataRequest** | [**DeleteGuestDataRequest**](DeleteGuestDataRequest.md)|  | |

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

<a id="exportGuestData"></a>
# **exportGuestData**
> ExportGuestData200Response exportGuestData(exportGuestDataRequest)

Export guest data (GDPR)

Export all data for a guest per GDPR requirements

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.ComplianceApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.stayos.com/v1");
    
    // Configure OAuth2 access token for authorization: OAuth2
    OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
    OAuth2.setAccessToken("YOUR ACCESS TOKEN");

    // Configure OAuth2 access token for authorization: OAuth2
    OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
    OAuth2.setAccessToken("YOUR ACCESS TOKEN");

    ComplianceApi apiInstance = new ComplianceApi(defaultClient);
    ExportGuestDataRequest exportGuestDataRequest = new ExportGuestDataRequest(); // ExportGuestDataRequest | 
    try {
      ExportGuestData200Response result = apiInstance.exportGuestData(exportGuestDataRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ComplianceApi#exportGuestData");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **exportGuestDataRequest** | [**ExportGuestDataRequest**](ExportGuestDataRequest.md)|  | |

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

<a id="getAuditLog"></a>
# **getAuditLog**
> AuditLog getAuditLog(logId)

Get audit log details

Retrieve details of a specific audit log entry

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.ComplianceApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.stayos.com/v1");
    
    // Configure OAuth2 access token for authorization: OAuth2
    OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
    OAuth2.setAccessToken("YOUR ACCESS TOKEN");

    // Configure OAuth2 access token for authorization: OAuth2
    OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
    OAuth2.setAccessToken("YOUR ACCESS TOKEN");

    ComplianceApi apiInstance = new ComplianceApi(defaultClient);
    UUID logId = UUID.randomUUID(); // UUID | 
    try {
      AuditLog result = apiInstance.getAuditLog(logId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ComplianceApi#getAuditLog");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **logId** | **UUID**|  | |

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

<a id="getAuditLogs"></a>
# **getAuditLogs**
> GetAuditLogs200Response getAuditLogs(entityType, entityId, action, userId, startDate, endDate, pageSize, cursor)

Get audit logs

Retrieve audit trail of system activities

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.ComplianceApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.stayos.com/v1");
    
    // Configure OAuth2 access token for authorization: OAuth2
    OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
    OAuth2.setAccessToken("YOUR ACCESS TOKEN");

    // Configure OAuth2 access token for authorization: OAuth2
    OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
    OAuth2.setAccessToken("YOUR ACCESS TOKEN");

    ComplianceApi apiInstance = new ComplianceApi(defaultClient);
    String entityType = "entityType_example"; // String | 
    UUID entityId = UUID.randomUUID(); // UUID | 
    String action = "action_example"; // String | 
    UUID userId = UUID.randomUUID(); // UUID | 
    OffsetDateTime startDate = OffsetDateTime.now(); // OffsetDateTime | 
    OffsetDateTime endDate = OffsetDateTime.now(); // OffsetDateTime | 
    Integer pageSize = 20; // Integer | Number of items per page (max 100)
    String cursor = "cursor_example"; // String | Cursor for pagination (opaque token)
    try {
      GetAuditLogs200Response result = apiInstance.getAuditLogs(entityType, entityId, action, userId, startDate, endDate, pageSize, cursor);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ComplianceApi#getAuditLogs");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **entityType** | **String**|  | [optional] |
| **entityId** | **UUID**|  | [optional] |
| **action** | **String**|  | [optional] |
| **userId** | **UUID**|  | [optional] |
| **startDate** | **OffsetDateTime**|  | [optional] |
| **endDate** | **OffsetDateTime**|  | [optional] |
| **pageSize** | **Integer**| Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **String**| Cursor for pagination (opaque token) | [optional] |

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

<a id="getComplianceReport"></a>
# **getComplianceReport**
> ComplianceReport getComplianceReport(reportId)

Get compliance report

Retrieve a specific compliance report by ID

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.ComplianceApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.stayos.com/v1");
    
    // Configure OAuth2 access token for authorization: OAuth2
    OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
    OAuth2.setAccessToken("YOUR ACCESS TOKEN");

    // Configure OAuth2 access token for authorization: OAuth2
    OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
    OAuth2.setAccessToken("YOUR ACCESS TOKEN");

    ComplianceApi apiInstance = new ComplianceApi(defaultClient);
    UUID reportId = UUID.randomUUID(); // UUID | 
    try {
      ComplianceReport result = apiInstance.getComplianceReport(reportId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ComplianceApi#getComplianceReport");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **reportId** | **UUID**|  | |

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

<a id="getGuestRegistry"></a>
# **getGuestRegistry**
> GetGuestRegistry200Response getGuestRegistry(startDate, endDate, propertyId)

Get guest registry report

Get guest registry report for compliance purposes

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.ComplianceApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.stayos.com/v1");
    
    // Configure OAuth2 access token for authorization: OAuth2
    OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
    OAuth2.setAccessToken("YOUR ACCESS TOKEN");

    // Configure OAuth2 access token for authorization: OAuth2
    OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
    OAuth2.setAccessToken("YOUR ACCESS TOKEN");

    ComplianceApi apiInstance = new ComplianceApi(defaultClient);
    LocalDate startDate = LocalDate.now(); // LocalDate | 
    LocalDate endDate = LocalDate.now(); // LocalDate | 
    UUID propertyId = UUID.randomUUID(); // UUID | 
    try {
      GetGuestRegistry200Response result = apiInstance.getGuestRegistry(startDate, endDate, propertyId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ComplianceApi#getGuestRegistry");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **startDate** | **LocalDate**|  | |
| **endDate** | **LocalDate**|  | |
| **propertyId** | **UUID**|  | [optional] |

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

<a id="getTaxReport"></a>
# **getTaxReport**
> GetTaxReport200Response getTaxReport(startDate, endDate, propertyId, taxType)

Get tax report

Get tax report for compliance and filing

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.ComplianceApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.stayos.com/v1");
    
    // Configure OAuth2 access token for authorization: OAuth2
    OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
    OAuth2.setAccessToken("YOUR ACCESS TOKEN");

    // Configure OAuth2 access token for authorization: OAuth2
    OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
    OAuth2.setAccessToken("YOUR ACCESS TOKEN");

    ComplianceApi apiInstance = new ComplianceApi(defaultClient);
    LocalDate startDate = LocalDate.now(); // LocalDate | 
    LocalDate endDate = LocalDate.now(); // LocalDate | 
    UUID propertyId = UUID.randomUUID(); // UUID | 
    String taxType = "OCCUPANCY"; // String | 
    try {
      GetTaxReport200Response result = apiInstance.getTaxReport(startDate, endDate, propertyId, taxType);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ComplianceApi#getTaxReport");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **startDate** | **LocalDate**|  | |
| **endDate** | **LocalDate**|  | |
| **propertyId** | **UUID**|  | [optional] |
| **taxType** | **String**|  | [optional] [enum: OCCUPANCY, SALES, VAT] |

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

<a id="listCertifications"></a>
# **listCertifications**
> ListCertifications200Response listCertifications(propertyId, pageSize, cursor)

List certifications

List all property certifications

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.ComplianceApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.stayos.com/v1");
    
    // Configure OAuth2 access token for authorization: OAuth2
    OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
    OAuth2.setAccessToken("YOUR ACCESS TOKEN");

    // Configure OAuth2 access token for authorization: OAuth2
    OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
    OAuth2.setAccessToken("YOUR ACCESS TOKEN");

    ComplianceApi apiInstance = new ComplianceApi(defaultClient);
    UUID propertyId = UUID.randomUUID(); // UUID | 
    Integer pageSize = 20; // Integer | Number of items per page (max 100)
    String cursor = "cursor_example"; // String | Cursor for pagination (opaque token)
    try {
      ListCertifications200Response result = apiInstance.listCertifications(propertyId, pageSize, cursor);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ComplianceApi#listCertifications");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **propertyId** | **UUID**|  | [optional] |
| **pageSize** | **Integer**| Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **String**| Cursor for pagination (opaque token) | [optional] |

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

<a id="listComplianceReports"></a>
# **listComplianceReports**
> GetGuestStays200Response listComplianceReports(reportType, pageSize, cursor)

List compliance reports

List all compliance reports with filtering by type, date range, and regulatory requirement

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.ComplianceApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.stayos.com/v1");
    
    // Configure OAuth2 access token for authorization: OAuth2
    OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
    OAuth2.setAccessToken("YOUR ACCESS TOKEN");

    // Configure OAuth2 access token for authorization: OAuth2
    OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
    OAuth2.setAccessToken("YOUR ACCESS TOKEN");

    ComplianceApi apiInstance = new ComplianceApi(defaultClient);
    String reportType = "reportType_example"; // String | 
    Integer pageSize = 20; // Integer | Number of items per page (max 100)
    String cursor = "cursor_example"; // String | Cursor for pagination (opaque token)
    try {
      GetGuestStays200Response result = apiInstance.listComplianceReports(reportType, pageSize, cursor);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ComplianceApi#listComplianceReports");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **reportType** | **String**|  | [optional] |
| **pageSize** | **Integer**| Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **String**| Cursor for pagination (opaque token) | [optional] |

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

<a id="searchAuditLogs"></a>
# **searchAuditLogs**
> List&lt;AuditLog&gt; searchAuditLogs(searchAuditLogsRequest)

Search audit logs

Advanced search of audit logs with complex criteria

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.ComplianceApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.stayos.com/v1");
    
    // Configure OAuth2 access token for authorization: OAuth2
    OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
    OAuth2.setAccessToken("YOUR ACCESS TOKEN");

    // Configure OAuth2 access token for authorization: OAuth2
    OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
    OAuth2.setAccessToken("YOUR ACCESS TOKEN");

    ComplianceApi apiInstance = new ComplianceApi(defaultClient);
    SearchAuditLogsRequest searchAuditLogsRequest = new SearchAuditLogsRequest(); // SearchAuditLogsRequest | 
    try {
      List<AuditLog> result = apiInstance.searchAuditLogs(searchAuditLogsRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ComplianceApi#searchAuditLogs");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **searchAuditLogsRequest** | [**SearchAuditLogsRequest**](SearchAuditLogsRequest.md)|  | |

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

