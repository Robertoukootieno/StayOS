# stayos_api_client.ComplianceApi

All URIs are relative to *https://api.stayos.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_certification**](ComplianceApi.md#create_certification) | **POST** /compliance/certifications | Upload certification
[**create_compliance_report**](ComplianceApi.md#create_compliance_report) | **POST** /compliance/reports | Generate compliance report
[**delete_guest_data**](ComplianceApi.md#delete_guest_data) | **POST** /compliance/gdpr/delete | Delete guest data (GDPR)
[**export_guest_data**](ComplianceApi.md#export_guest_data) | **POST** /compliance/gdpr/export | Export guest data (GDPR)
[**get_audit_log**](ComplianceApi.md#get_audit_log) | **GET** /audit/logs/{logId} | Get audit log details
[**get_audit_logs**](ComplianceApi.md#get_audit_logs) | **GET** /audit/logs | Get audit logs
[**get_compliance_report**](ComplianceApi.md#get_compliance_report) | **GET** /compliance/reports/{reportId} | Get compliance report
[**get_guest_registry**](ComplianceApi.md#get_guest_registry) | **GET** /compliance/guest-registry | Get guest registry report
[**get_tax_report**](ComplianceApi.md#get_tax_report) | **GET** /compliance/tax-report | Get tax report
[**list_certifications**](ComplianceApi.md#list_certifications) | **GET** /compliance/certifications | List certifications
[**list_compliance_reports**](ComplianceApi.md#list_compliance_reports) | **GET** /compliance/reports | List compliance reports
[**search_audit_logs**](ComplianceApi.md#search_audit_logs) | **POST** /audit/search | Search audit logs


# **create_certification**
> PropertyCertification create_certification(property_certification)

Upload certification

Upload a new property certification

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.property_certification import PropertyCertification
from stayos_api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.stayos.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = stayos_api_client.Configuration(
    host = "https://api.stayos.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
async with stayos_api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = stayos_api_client.ComplianceApi(api_client)
    property_certification = stayos_api_client.PropertyCertification() # PropertyCertification | 

    try:
        # Upload certification
        api_response = await api_instance.create_certification(property_certification)
        print("The response of ComplianceApi->create_certification:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ComplianceApi->create_certification: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **property_certification** | [**PropertyCertification**](PropertyCertification.md)|  | 

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
**201** | Certification uploaded |  * Location -  <br>  |
**400** | Bad request - validation error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_compliance_report**
> object create_compliance_report(create_compliance_report_request)

Generate compliance report

Generate a new compliance report for regulatory requirements, audits, or certifications

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.create_compliance_report_request import CreateComplianceReportRequest
from stayos_api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.stayos.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = stayos_api_client.Configuration(
    host = "https://api.stayos.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
async with stayos_api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = stayos_api_client.ComplianceApi(api_client)
    create_compliance_report_request = stayos_api_client.CreateComplianceReportRequest() # CreateComplianceReportRequest | 

    try:
        # Generate compliance report
        api_response = await api_instance.create_compliance_report(create_compliance_report_request)
        print("The response of ComplianceApi->create_compliance_report:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ComplianceApi->create_compliance_report: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_compliance_report_request** | [**CreateComplianceReportRequest**](CreateComplianceReportRequest.md)|  | 

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
**201** | Report generation started |  * Location -  <br>  |
**400** | Bad request - validation error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_guest_data**
> DeleteGuestData200Response delete_guest_data(delete_guest_data_request)

Delete guest data (GDPR)

Delete all data for a guest per GDPR right to be forgotten

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.delete_guest_data200_response import DeleteGuestData200Response
from stayos_api_client.models.delete_guest_data_request import DeleteGuestDataRequest
from stayos_api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.stayos.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = stayos_api_client.Configuration(
    host = "https://api.stayos.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
async with stayos_api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = stayos_api_client.ComplianceApi(api_client)
    delete_guest_data_request = stayos_api_client.DeleteGuestDataRequest() # DeleteGuestDataRequest | 

    try:
        # Delete guest data (GDPR)
        api_response = await api_instance.delete_guest_data(delete_guest_data_request)
        print("The response of ComplianceApi->delete_guest_data:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ComplianceApi->delete_guest_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **delete_guest_data_request** | [**DeleteGuestDataRequest**](DeleteGuestDataRequest.md)|  | 

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
**200** | Deletion request processed |  -  |
**400** | Bad request - validation error |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **export_guest_data**
> ExportGuestData200Response export_guest_data(export_guest_data_request)

Export guest data (GDPR)

Export all data for a guest per GDPR requirements

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.export_guest_data200_response import ExportGuestData200Response
from stayos_api_client.models.export_guest_data_request import ExportGuestDataRequest
from stayos_api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.stayos.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = stayos_api_client.Configuration(
    host = "https://api.stayos.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
async with stayos_api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = stayos_api_client.ComplianceApi(api_client)
    export_guest_data_request = stayos_api_client.ExportGuestDataRequest() # ExportGuestDataRequest | 

    try:
        # Export guest data (GDPR)
        api_response = await api_instance.export_guest_data(export_guest_data_request)
        print("The response of ComplianceApi->export_guest_data:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ComplianceApi->export_guest_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **export_guest_data_request** | [**ExportGuestDataRequest**](ExportGuestDataRequest.md)|  | 

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
**200** | Data export ready |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_audit_log**
> AuditLog get_audit_log(log_id)

Get audit log details

Retrieve details of a specific audit log entry

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.audit_log import AuditLog
from stayos_api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.stayos.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = stayos_api_client.Configuration(
    host = "https://api.stayos.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
async with stayos_api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = stayos_api_client.ComplianceApi(api_client)
    log_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get audit log details
        api_response = await api_instance.get_audit_log(log_id)
        print("The response of ComplianceApi->get_audit_log:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ComplianceApi->get_audit_log: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **log_id** | **UUID**|  | 

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
**200** | Successful response |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_audit_logs**
> GetAuditLogs200Response get_audit_logs(entity_type=entity_type, entity_id=entity_id, action=action, user_id=user_id, start_date=start_date, end_date=end_date, page_size=page_size, cursor=cursor)

Get audit logs

Retrieve audit trail of system activities

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.get_audit_logs200_response import GetAuditLogs200Response
from stayos_api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.stayos.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = stayos_api_client.Configuration(
    host = "https://api.stayos.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
async with stayos_api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = stayos_api_client.ComplianceApi(api_client)
    entity_type = 'entity_type_example' # str |  (optional)
    entity_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)
    action = 'action_example' # str |  (optional)
    user_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)
    start_date = '2013-10-20T19:20:30+01:00' # datetime |  (optional)
    end_date = '2013-10-20T19:20:30+01:00' # datetime |  (optional)
    page_size = 20 # int | Number of items per page (max 100) (optional) (default to 20)
    cursor = 'cursor_example' # str | Cursor for pagination (opaque token) (optional)

    try:
        # Get audit logs
        api_response = await api_instance.get_audit_logs(entity_type=entity_type, entity_id=entity_id, action=action, user_id=user_id, start_date=start_date, end_date=end_date, page_size=page_size, cursor=cursor)
        print("The response of ComplianceApi->get_audit_logs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ComplianceApi->get_audit_logs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entity_type** | **str**|  | [optional] 
 **entity_id** | **UUID**|  | [optional] 
 **action** | **str**|  | [optional] 
 **user_id** | **UUID**|  | [optional] 
 **start_date** | **datetime**|  | [optional] 
 **end_date** | **datetime**|  | [optional] 
 **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20]
 **cursor** | **str**| Cursor for pagination (opaque token) | [optional] 

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
**200** | Successful response |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_compliance_report**
> ComplianceReport get_compliance_report(report_id)

Get compliance report

Retrieve a specific compliance report by ID

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.compliance_report import ComplianceReport
from stayos_api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.stayos.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = stayos_api_client.Configuration(
    host = "https://api.stayos.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
async with stayos_api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = stayos_api_client.ComplianceApi(api_client)
    report_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get compliance report
        api_response = await api_instance.get_compliance_report(report_id)
        print("The response of ComplianceApi->get_compliance_report:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ComplianceApi->get_compliance_report: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **report_id** | **UUID**|  | 

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
**200** | Successful response |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_guest_registry**
> GetGuestRegistry200Response get_guest_registry(start_date, end_date, property_id=property_id)

Get guest registry report

Get guest registry report for compliance purposes

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.get_guest_registry200_response import GetGuestRegistry200Response
from stayos_api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.stayos.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = stayos_api_client.Configuration(
    host = "https://api.stayos.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
async with stayos_api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = stayos_api_client.ComplianceApi(api_client)
    start_date = '2013-10-20' # date | 
    end_date = '2013-10-20' # date | 
    property_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)

    try:
        # Get guest registry report
        api_response = await api_instance.get_guest_registry(start_date, end_date, property_id=property_id)
        print("The response of ComplianceApi->get_guest_registry:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ComplianceApi->get_guest_registry: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_date** | **date**|  | 
 **end_date** | **date**|  | 
 **property_id** | **UUID**|  | [optional] 

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
**200** | Successful response |  -  |
**400** | Bad request - validation error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_tax_report**
> GetTaxReport200Response get_tax_report(start_date, end_date, property_id=property_id, tax_type=tax_type)

Get tax report

Get tax report for compliance and filing

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.get_tax_report200_response import GetTaxReport200Response
from stayos_api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.stayos.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = stayos_api_client.Configuration(
    host = "https://api.stayos.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
async with stayos_api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = stayos_api_client.ComplianceApi(api_client)
    start_date = '2013-10-20' # date | 
    end_date = '2013-10-20' # date | 
    property_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)
    tax_type = 'tax_type_example' # str |  (optional)

    try:
        # Get tax report
        api_response = await api_instance.get_tax_report(start_date, end_date, property_id=property_id, tax_type=tax_type)
        print("The response of ComplianceApi->get_tax_report:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ComplianceApi->get_tax_report: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_date** | **date**|  | 
 **end_date** | **date**|  | 
 **property_id** | **UUID**|  | [optional] 
 **tax_type** | **str**|  | [optional] 

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
**200** | Successful response |  -  |
**400** | Bad request - validation error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_certifications**
> ListCertifications200Response list_certifications(property_id=property_id, page_size=page_size, cursor=cursor)

List certifications

List all property certifications

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.list_certifications200_response import ListCertifications200Response
from stayos_api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.stayos.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = stayos_api_client.Configuration(
    host = "https://api.stayos.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
async with stayos_api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = stayos_api_client.ComplianceApi(api_client)
    property_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)
    page_size = 20 # int | Number of items per page (max 100) (optional) (default to 20)
    cursor = 'cursor_example' # str | Cursor for pagination (opaque token) (optional)

    try:
        # List certifications
        api_response = await api_instance.list_certifications(property_id=property_id, page_size=page_size, cursor=cursor)
        print("The response of ComplianceApi->list_certifications:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ComplianceApi->list_certifications: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **property_id** | **UUID**|  | [optional] 
 **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20]
 **cursor** | **str**| Cursor for pagination (opaque token) | [optional] 

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
**200** | Successful response |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_compliance_reports**
> GetGuestStays200Response list_compliance_reports(report_type=report_type, page_size=page_size, cursor=cursor)

List compliance reports

List all compliance reports with filtering by type, date range, and regulatory requirement

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.get_guest_stays200_response import GetGuestStays200Response
from stayos_api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.stayos.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = stayos_api_client.Configuration(
    host = "https://api.stayos.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
async with stayos_api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = stayos_api_client.ComplianceApi(api_client)
    report_type = 'report_type_example' # str |  (optional)
    page_size = 20 # int | Number of items per page (max 100) (optional) (default to 20)
    cursor = 'cursor_example' # str | Cursor for pagination (opaque token) (optional)

    try:
        # List compliance reports
        api_response = await api_instance.list_compliance_reports(report_type=report_type, page_size=page_size, cursor=cursor)
        print("The response of ComplianceApi->list_compliance_reports:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ComplianceApi->list_compliance_reports: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **report_type** | **str**|  | [optional] 
 **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20]
 **cursor** | **str**| Cursor for pagination (opaque token) | [optional] 

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
**200** | Successful response |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_audit_logs**
> List[AuditLog] search_audit_logs(search_audit_logs_request)

Search audit logs

Advanced search of audit logs with complex criteria

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.audit_log import AuditLog
from stayos_api_client.models.search_audit_logs_request import SearchAuditLogsRequest
from stayos_api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.stayos.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = stayos_api_client.Configuration(
    host = "https://api.stayos.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
async with stayos_api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = stayos_api_client.ComplianceApi(api_client)
    search_audit_logs_request = stayos_api_client.SearchAuditLogsRequest() # SearchAuditLogsRequest | 

    try:
        # Search audit logs
        api_response = await api_instance.search_audit_logs(search_audit_logs_request)
        print("The response of ComplianceApi->search_audit_logs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ComplianceApi->search_audit_logs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search_audit_logs_request** | [**SearchAuditLogsRequest**](SearchAuditLogsRequest.md)|  | 

### Return type

[**List[AuditLog]**](AuditLog.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request - validation error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

