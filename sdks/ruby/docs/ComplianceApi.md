# OpenapiClient::ComplianceApi

All URIs are relative to *https://api.stayos.com/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_certification**](ComplianceApi.md#create_certification) | **POST** /compliance/certifications | Upload certification |
| [**create_compliance_report**](ComplianceApi.md#create_compliance_report) | **POST** /compliance/reports | Generate compliance report |
| [**delete_guest_data**](ComplianceApi.md#delete_guest_data) | **POST** /compliance/gdpr/delete | Delete guest data (GDPR) |
| [**export_guest_data**](ComplianceApi.md#export_guest_data) | **POST** /compliance/gdpr/export | Export guest data (GDPR) |
| [**get_audit_log**](ComplianceApi.md#get_audit_log) | **GET** /audit/logs/{logId} | Get audit log details |
| [**get_audit_logs**](ComplianceApi.md#get_audit_logs) | **GET** /audit/logs | Get audit logs |
| [**get_compliance_report**](ComplianceApi.md#get_compliance_report) | **GET** /compliance/reports/{reportId} | Get compliance report |
| [**get_guest_registry**](ComplianceApi.md#get_guest_registry) | **GET** /compliance/guest-registry | Get guest registry report |
| [**get_tax_report**](ComplianceApi.md#get_tax_report) | **GET** /compliance/tax-report | Get tax report |
| [**list_certifications**](ComplianceApi.md#list_certifications) | **GET** /compliance/certifications | List certifications |
| [**list_compliance_reports**](ComplianceApi.md#list_compliance_reports) | **GET** /compliance/reports | List compliance reports |
| [**search_audit_logs**](ComplianceApi.md#search_audit_logs) | **POST** /audit/search | Search audit logs |


## create_certification

> <PropertyCertification> create_certification(property_certification)

Upload certification

Upload a new property certification

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::ComplianceApi.new
property_certification = OpenapiClient::PropertyCertification.new({certification_id: 'certification_id_example', property_id: 'property_id_example', type: 'BUSINESS_LICENSE', issued_date: Date.today, expiry_date: Date.today}) # PropertyCertification | 

begin
  # Upload certification
  result = api_instance.create_certification(property_certification)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ComplianceApi->create_certification: #{e}"
end
```

#### Using the create_certification_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<PropertyCertification>, Integer, Hash)> create_certification_with_http_info(property_certification)

```ruby
begin
  # Upload certification
  data, status_code, headers = api_instance.create_certification_with_http_info(property_certification)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <PropertyCertification>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ComplianceApi->create_certification_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **property_certification** | [**PropertyCertification**](PropertyCertification.md) |  |  |

### Return type

[**PropertyCertification**](PropertyCertification.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## create_compliance_report

> Object create_compliance_report(create_compliance_report_request)

Generate compliance report

Generate a new compliance report for regulatory requirements, audits, or certifications

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::ComplianceApi.new
create_compliance_report_request = OpenapiClient::CreateComplianceReportRequest.new({report_type: 'GDPR', start_date: Date.today, end_date: Date.today}) # CreateComplianceReportRequest | 

begin
  # Generate compliance report
  result = api_instance.create_compliance_report(create_compliance_report_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ComplianceApi->create_compliance_report: #{e}"
end
```

#### Using the create_compliance_report_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> create_compliance_report_with_http_info(create_compliance_report_request)

```ruby
begin
  # Generate compliance report
  data, status_code, headers = api_instance.create_compliance_report_with_http_info(create_compliance_report_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling ComplianceApi->create_compliance_report_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_compliance_report_request** | [**CreateComplianceReportRequest**](CreateComplianceReportRequest.md) |  |  |

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## delete_guest_data

> <DeleteGuestData200Response> delete_guest_data(delete_guest_data_request)

Delete guest data (GDPR)

Delete all data for a guest per GDPR right to be forgotten

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::ComplianceApi.new
delete_guest_data_request = OpenapiClient::DeleteGuestDataRequest.new({guest_id: 'guest_id_example'}) # DeleteGuestDataRequest | 

begin
  # Delete guest data (GDPR)
  result = api_instance.delete_guest_data(delete_guest_data_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ComplianceApi->delete_guest_data: #{e}"
end
```

#### Using the delete_guest_data_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<DeleteGuestData200Response>, Integer, Hash)> delete_guest_data_with_http_info(delete_guest_data_request)

```ruby
begin
  # Delete guest data (GDPR)
  data, status_code, headers = api_instance.delete_guest_data_with_http_info(delete_guest_data_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <DeleteGuestData200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ComplianceApi->delete_guest_data_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **delete_guest_data_request** | [**DeleteGuestDataRequest**](DeleteGuestDataRequest.md) |  |  |

### Return type

[**DeleteGuestData200Response**](DeleteGuestData200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## export_guest_data

> <ExportGuestData200Response> export_guest_data(export_guest_data_request)

Export guest data (GDPR)

Export all data for a guest per GDPR requirements

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::ComplianceApi.new
export_guest_data_request = OpenapiClient::ExportGuestDataRequest.new({guest_id: 'guest_id_example'}) # ExportGuestDataRequest | 

begin
  # Export guest data (GDPR)
  result = api_instance.export_guest_data(export_guest_data_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ComplianceApi->export_guest_data: #{e}"
end
```

#### Using the export_guest_data_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ExportGuestData200Response>, Integer, Hash)> export_guest_data_with_http_info(export_guest_data_request)

```ruby
begin
  # Export guest data (GDPR)
  data, status_code, headers = api_instance.export_guest_data_with_http_info(export_guest_data_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ExportGuestData200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ComplianceApi->export_guest_data_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **export_guest_data_request** | [**ExportGuestDataRequest**](ExportGuestDataRequest.md) |  |  |

### Return type

[**ExportGuestData200Response**](ExportGuestData200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## get_audit_log

> <AuditLog> get_audit_log(log_id)

Get audit log details

Retrieve details of a specific audit log entry

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::ComplianceApi.new
log_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Get audit log details
  result = api_instance.get_audit_log(log_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ComplianceApi->get_audit_log: #{e}"
end
```

#### Using the get_audit_log_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<AuditLog>, Integer, Hash)> get_audit_log_with_http_info(log_id)

```ruby
begin
  # Get audit log details
  data, status_code, headers = api_instance.get_audit_log_with_http_info(log_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <AuditLog>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ComplianceApi->get_audit_log_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **log_id** | **String** |  |  |

### Return type

[**AuditLog**](AuditLog.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## get_audit_logs

> <GetAuditLogs200Response> get_audit_logs(opts)

Get audit logs

Retrieve audit trail of system activities

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::ComplianceApi.new
opts = {
  entity_type: 'entity_type_example', # String | 
  entity_id: '38400000-8cf0-11bd-b23e-10b96e4ef00d', # String | 
  action: 'action_example', # String | 
  user_id: '38400000-8cf0-11bd-b23e-10b96e4ef00d', # String | 
  start_date: Time.parse('2013-10-20T19:20:30+01:00'), # Time | 
  end_date: Time.parse('2013-10-20T19:20:30+01:00'), # Time | 
  page_size: 56, # Integer | Number of items per page (max 100)
  cursor: 'cursor_example' # String | Cursor for pagination (opaque token)
}

begin
  # Get audit logs
  result = api_instance.get_audit_logs(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ComplianceApi->get_audit_logs: #{e}"
end
```

#### Using the get_audit_logs_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetAuditLogs200Response>, Integer, Hash)> get_audit_logs_with_http_info(opts)

```ruby
begin
  # Get audit logs
  data, status_code, headers = api_instance.get_audit_logs_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetAuditLogs200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ComplianceApi->get_audit_logs_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **entity_type** | **String** |  | [optional] |
| **entity_id** | **String** |  | [optional] |
| **action** | **String** |  | [optional] |
| **user_id** | **String** |  | [optional] |
| **start_date** | **Time** |  | [optional] |
| **end_date** | **Time** |  | [optional] |
| **page_size** | **Integer** | Number of items per page (max 100) | [optional][default to 20] |
| **cursor** | **String** | Cursor for pagination (opaque token) | [optional] |

### Return type

[**GetAuditLogs200Response**](GetAuditLogs200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## get_compliance_report

> <ComplianceReport> get_compliance_report(report_id)

Get compliance report

Retrieve a specific compliance report by ID

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::ComplianceApi.new
report_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Get compliance report
  result = api_instance.get_compliance_report(report_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ComplianceApi->get_compliance_report: #{e}"
end
```

#### Using the get_compliance_report_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ComplianceReport>, Integer, Hash)> get_compliance_report_with_http_info(report_id)

```ruby
begin
  # Get compliance report
  data, status_code, headers = api_instance.get_compliance_report_with_http_info(report_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ComplianceReport>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ComplianceApi->get_compliance_report_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **report_id** | **String** |  |  |

### Return type

[**ComplianceReport**](ComplianceReport.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## get_guest_registry

> <GetGuestRegistry200Response> get_guest_registry(start_date, end_date, opts)

Get guest registry report

Get guest registry report for compliance purposes

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::ComplianceApi.new
start_date = Date.parse('2013-10-20') # Date | 
end_date = Date.parse('2013-10-20') # Date | 
opts = {
  property_id: '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
}

begin
  # Get guest registry report
  result = api_instance.get_guest_registry(start_date, end_date, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ComplianceApi->get_guest_registry: #{e}"
end
```

#### Using the get_guest_registry_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetGuestRegistry200Response>, Integer, Hash)> get_guest_registry_with_http_info(start_date, end_date, opts)

```ruby
begin
  # Get guest registry report
  data, status_code, headers = api_instance.get_guest_registry_with_http_info(start_date, end_date, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetGuestRegistry200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ComplianceApi->get_guest_registry_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **start_date** | **Date** |  |  |
| **end_date** | **Date** |  |  |
| **property_id** | **String** |  | [optional] |

### Return type

[**GetGuestRegistry200Response**](GetGuestRegistry200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## get_tax_report

> <GetTaxReport200Response> get_tax_report(start_date, end_date, opts)

Get tax report

Get tax report for compliance and filing

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::ComplianceApi.new
start_date = Date.parse('2013-10-20') # Date | 
end_date = Date.parse('2013-10-20') # Date | 
opts = {
  property_id: '38400000-8cf0-11bd-b23e-10b96e4ef00d', # String | 
  tax_type: 'OCCUPANCY' # String | 
}

begin
  # Get tax report
  result = api_instance.get_tax_report(start_date, end_date, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ComplianceApi->get_tax_report: #{e}"
end
```

#### Using the get_tax_report_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetTaxReport200Response>, Integer, Hash)> get_tax_report_with_http_info(start_date, end_date, opts)

```ruby
begin
  # Get tax report
  data, status_code, headers = api_instance.get_tax_report_with_http_info(start_date, end_date, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetTaxReport200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ComplianceApi->get_tax_report_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **start_date** | **Date** |  |  |
| **end_date** | **Date** |  |  |
| **property_id** | **String** |  | [optional] |
| **tax_type** | **String** |  | [optional] |

### Return type

[**GetTaxReport200Response**](GetTaxReport200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## list_certifications

> <ListCertifications200Response> list_certifications(opts)

List certifications

List all property certifications

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::ComplianceApi.new
opts = {
  property_id: '38400000-8cf0-11bd-b23e-10b96e4ef00d', # String | 
  page_size: 56, # Integer | Number of items per page (max 100)
  cursor: 'cursor_example' # String | Cursor for pagination (opaque token)
}

begin
  # List certifications
  result = api_instance.list_certifications(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ComplianceApi->list_certifications: #{e}"
end
```

#### Using the list_certifications_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListCertifications200Response>, Integer, Hash)> list_certifications_with_http_info(opts)

```ruby
begin
  # List certifications
  data, status_code, headers = api_instance.list_certifications_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListCertifications200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ComplianceApi->list_certifications_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **property_id** | **String** |  | [optional] |
| **page_size** | **Integer** | Number of items per page (max 100) | [optional][default to 20] |
| **cursor** | **String** | Cursor for pagination (opaque token) | [optional] |

### Return type

[**ListCertifications200Response**](ListCertifications200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## list_compliance_reports

> <GetGuestStays200Response> list_compliance_reports(opts)

List compliance reports

List all compliance reports with filtering by type, date range, and regulatory requirement

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::ComplianceApi.new
opts = {
  report_type: 'report_type_example', # String | 
  page_size: 56, # Integer | Number of items per page (max 100)
  cursor: 'cursor_example' # String | Cursor for pagination (opaque token)
}

begin
  # List compliance reports
  result = api_instance.list_compliance_reports(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ComplianceApi->list_compliance_reports: #{e}"
end
```

#### Using the list_compliance_reports_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetGuestStays200Response>, Integer, Hash)> list_compliance_reports_with_http_info(opts)

```ruby
begin
  # List compliance reports
  data, status_code, headers = api_instance.list_compliance_reports_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetGuestStays200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ComplianceApi->list_compliance_reports_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **report_type** | **String** |  | [optional] |
| **page_size** | **Integer** | Number of items per page (max 100) | [optional][default to 20] |
| **cursor** | **String** | Cursor for pagination (opaque token) | [optional] |

### Return type

[**GetGuestStays200Response**](GetGuestStays200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## search_audit_logs

> <Array<AuditLog>> search_audit_logs(search_audit_logs_request)

Search audit logs

Advanced search of audit logs with complex criteria

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::ComplianceApi.new
search_audit_logs_request = OpenapiClient::SearchAuditLogsRequest.new # SearchAuditLogsRequest | 

begin
  # Search audit logs
  result = api_instance.search_audit_logs(search_audit_logs_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ComplianceApi->search_audit_logs: #{e}"
end
```

#### Using the search_audit_logs_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<AuditLog>>, Integer, Hash)> search_audit_logs_with_http_info(search_audit_logs_request)

```ruby
begin
  # Search audit logs
  data, status_code, headers = api_instance.search_audit_logs_with_http_info(search_audit_logs_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<AuditLog>>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ComplianceApi->search_audit_logs_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **search_audit_logs_request** | [**SearchAuditLogsRequest**](SearchAuditLogsRequest.md) |  |  |

### Return type

[**Array&lt;AuditLog&gt;**](AuditLog.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

