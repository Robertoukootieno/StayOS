# OpenAPI\Client\ComplianceApi

Regulatory reporting and certifications

All URIs are relative to https://api.stayos.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createCertification()**](ComplianceApi.md#createCertification) | **POST** /compliance/certifications | Upload certification |
| [**createComplianceReport()**](ComplianceApi.md#createComplianceReport) | **POST** /compliance/reports | Generate compliance report |
| [**deleteGuestData()**](ComplianceApi.md#deleteGuestData) | **POST** /compliance/gdpr/delete | Delete guest data (GDPR) |
| [**exportGuestData()**](ComplianceApi.md#exportGuestData) | **POST** /compliance/gdpr/export | Export guest data (GDPR) |
| [**getAuditLog()**](ComplianceApi.md#getAuditLog) | **GET** /audit/logs/{logId} | Get audit log details |
| [**getAuditLogs()**](ComplianceApi.md#getAuditLogs) | **GET** /audit/logs | Get audit logs |
| [**getComplianceReport()**](ComplianceApi.md#getComplianceReport) | **GET** /compliance/reports/{reportId} | Get compliance report |
| [**getGuestRegistry()**](ComplianceApi.md#getGuestRegistry) | **GET** /compliance/guest-registry | Get guest registry report |
| [**getTaxReport()**](ComplianceApi.md#getTaxReport) | **GET** /compliance/tax-report | Get tax report |
| [**listCertifications()**](ComplianceApi.md#listCertifications) | **GET** /compliance/certifications | List certifications |
| [**listComplianceReports()**](ComplianceApi.md#listComplianceReports) | **GET** /compliance/reports | List compliance reports |
| [**searchAuditLogs()**](ComplianceApi.md#searchAuditLogs) | **POST** /audit/search | Search audit logs |


## `createCertification()`

```php
createCertification($property_certification): \OpenAPI\Client\Model\PropertyCertification
```

Upload certification

Upload a new property certification

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ComplianceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$property_certification = new \OpenAPI\Client\Model\PropertyCertification(); // \OpenAPI\Client\Model\PropertyCertification

try {
    $result = $apiInstance->createCertification($property_certification);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ComplianceApi->createCertification: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **property_certification** | [**\OpenAPI\Client\Model\PropertyCertification**](../Model/PropertyCertification.md)|  | |

### Return type

[**\OpenAPI\Client\Model\PropertyCertification**](../Model/PropertyCertification.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createComplianceReport()`

```php
createComplianceReport($create_compliance_report_request): object
```

Generate compliance report

Generate a new compliance report for regulatory requirements, audits, or certifications

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ComplianceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$create_compliance_report_request = new \OpenAPI\Client\Model\CreateComplianceReportRequest(); // \OpenAPI\Client\Model\CreateComplianceReportRequest

try {
    $result = $apiInstance->createComplianceReport($create_compliance_report_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ComplianceApi->createComplianceReport: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_compliance_report_request** | [**\OpenAPI\Client\Model\CreateComplianceReportRequest**](../Model/CreateComplianceReportRequest.md)|  | |

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

## `deleteGuestData()`

```php
deleteGuestData($delete_guest_data_request): \OpenAPI\Client\Model\DeleteGuestData200Response
```

Delete guest data (GDPR)

Delete all data for a guest per GDPR right to be forgotten

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ComplianceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$delete_guest_data_request = new \OpenAPI\Client\Model\DeleteGuestDataRequest(); // \OpenAPI\Client\Model\DeleteGuestDataRequest

try {
    $result = $apiInstance->deleteGuestData($delete_guest_data_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ComplianceApi->deleteGuestData: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **delete_guest_data_request** | [**\OpenAPI\Client\Model\DeleteGuestDataRequest**](../Model/DeleteGuestDataRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\DeleteGuestData200Response**](../Model/DeleteGuestData200Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `exportGuestData()`

```php
exportGuestData($export_guest_data_request): \OpenAPI\Client\Model\ExportGuestData200Response
```

Export guest data (GDPR)

Export all data for a guest per GDPR requirements

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ComplianceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$export_guest_data_request = new \OpenAPI\Client\Model\ExportGuestDataRequest(); // \OpenAPI\Client\Model\ExportGuestDataRequest

try {
    $result = $apiInstance->exportGuestData($export_guest_data_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ComplianceApi->exportGuestData: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **export_guest_data_request** | [**\OpenAPI\Client\Model\ExportGuestDataRequest**](../Model/ExportGuestDataRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\ExportGuestData200Response**](../Model/ExportGuestData200Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getAuditLog()`

```php
getAuditLog($log_id): \OpenAPI\Client\Model\AuditLog
```

Get audit log details

Retrieve details of a specific audit log entry

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ComplianceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$log_id = 'log_id_example'; // string

try {
    $result = $apiInstance->getAuditLog($log_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ComplianceApi->getAuditLog: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **log_id** | **string**|  | |

### Return type

[**\OpenAPI\Client\Model\AuditLog**](../Model/AuditLog.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getAuditLogs()`

```php
getAuditLogs($entity_type, $entity_id, $action, $user_id, $start_date, $end_date, $page_size, $cursor): \OpenAPI\Client\Model\GetAuditLogs200Response
```

Get audit logs

Retrieve audit trail of system activities

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ComplianceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$entity_type = 'entity_type_example'; // string
$entity_id = 'entity_id_example'; // string
$action = 'action_example'; // string
$user_id = 'user_id_example'; // string
$start_date = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime
$end_date = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime
$page_size = 20; // int | Number of items per page (max 100)
$cursor = 'cursor_example'; // string | Cursor for pagination (opaque token)

try {
    $result = $apiInstance->getAuditLogs($entity_type, $entity_id, $action, $user_id, $start_date, $end_date, $page_size, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ComplianceApi->getAuditLogs: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **entity_type** | **string**|  | [optional] |
| **entity_id** | **string**|  | [optional] |
| **action** | **string**|  | [optional] |
| **user_id** | **string**|  | [optional] |
| **start_date** | **\DateTime**|  | [optional] |
| **end_date** | **\DateTime**|  | [optional] |
| **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **string**| Cursor for pagination (opaque token) | [optional] |

### Return type

[**\OpenAPI\Client\Model\GetAuditLogs200Response**](../Model/GetAuditLogs200Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getComplianceReport()`

```php
getComplianceReport($report_id): \OpenAPI\Client\Model\ComplianceReport
```

Get compliance report

Retrieve a specific compliance report by ID

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ComplianceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$report_id = 'report_id_example'; // string

try {
    $result = $apiInstance->getComplianceReport($report_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ComplianceApi->getComplianceReport: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **report_id** | **string**|  | |

### Return type

[**\OpenAPI\Client\Model\ComplianceReport**](../Model/ComplianceReport.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getGuestRegistry()`

```php
getGuestRegistry($start_date, $end_date, $property_id): \OpenAPI\Client\Model\GetGuestRegistry200Response
```

Get guest registry report

Get guest registry report for compliance purposes

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ComplianceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$start_date = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime
$end_date = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime
$property_id = 'property_id_example'; // string

try {
    $result = $apiInstance->getGuestRegistry($start_date, $end_date, $property_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ComplianceApi->getGuestRegistry: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **start_date** | **\DateTime**|  | |
| **end_date** | **\DateTime**|  | |
| **property_id** | **string**|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\GetGuestRegistry200Response**](../Model/GetGuestRegistry200Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getTaxReport()`

```php
getTaxReport($start_date, $end_date, $property_id, $tax_type): \OpenAPI\Client\Model\GetTaxReport200Response
```

Get tax report

Get tax report for compliance and filing

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ComplianceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$start_date = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime
$end_date = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime
$property_id = 'property_id_example'; // string
$tax_type = 'tax_type_example'; // string

try {
    $result = $apiInstance->getTaxReport($start_date, $end_date, $property_id, $tax_type);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ComplianceApi->getTaxReport: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **start_date** | **\DateTime**|  | |
| **end_date** | **\DateTime**|  | |
| **property_id** | **string**|  | [optional] |
| **tax_type** | **string**|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\GetTaxReport200Response**](../Model/GetTaxReport200Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listCertifications()`

```php
listCertifications($property_id, $page_size, $cursor): \OpenAPI\Client\Model\ListCertifications200Response
```

List certifications

List all property certifications

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ComplianceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$property_id = 'property_id_example'; // string
$page_size = 20; // int | Number of items per page (max 100)
$cursor = 'cursor_example'; // string | Cursor for pagination (opaque token)

try {
    $result = $apiInstance->listCertifications($property_id, $page_size, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ComplianceApi->listCertifications: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **property_id** | **string**|  | [optional] |
| **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **string**| Cursor for pagination (opaque token) | [optional] |

### Return type

[**\OpenAPI\Client\Model\ListCertifications200Response**](../Model/ListCertifications200Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listComplianceReports()`

```php
listComplianceReports($report_type, $page_size, $cursor): \OpenAPI\Client\Model\GetGuestStays200Response
```

List compliance reports

List all compliance reports with filtering by type, date range, and regulatory requirement

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ComplianceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$report_type = 'report_type_example'; // string
$page_size = 20; // int | Number of items per page (max 100)
$cursor = 'cursor_example'; // string | Cursor for pagination (opaque token)

try {
    $result = $apiInstance->listComplianceReports($report_type, $page_size, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ComplianceApi->listComplianceReports: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **report_type** | **string**|  | [optional] |
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

## `searchAuditLogs()`

```php
searchAuditLogs($search_audit_logs_request): \OpenAPI\Client\Model\AuditLog[]
```

Search audit logs

Advanced search of audit logs with complex criteria

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ComplianceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$search_audit_logs_request = new \OpenAPI\Client\Model\SearchAuditLogsRequest(); // \OpenAPI\Client\Model\SearchAuditLogsRequest

try {
    $result = $apiInstance->searchAuditLogs($search_audit_logs_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ComplianceApi->searchAuditLogs: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **search_audit_logs_request** | [**\OpenAPI\Client\Model\SearchAuditLogsRequest**](../Model/SearchAuditLogsRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\AuditLog[]**](../Model/AuditLog.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
