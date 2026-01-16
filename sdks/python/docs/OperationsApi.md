# stayos_api_client.OperationsApi

All URIs are relative to *https://api.stayos.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acknowledge_service_request**](OperationsApi.md#acknowledge_service_request) | **POST** /service-requests/{requestId}/acknowledge | Acknowledge service request
[**add_incident_action**](OperationsApi.md#add_incident_action) | **POST** /incidents/{incidentId}/actions | Add incident action
[**assign_housekeeping_task**](OperationsApi.md#assign_housekeeping_task) | **POST** /housekeeping/tasks/{taskId}/assign | Assign housekeeping task
[**assign_maintenance_request**](OperationsApi.md#assign_maintenance_request) | **POST** /maintenance/requests/{requestId}/assign | Assign maintenance request
[**assign_service_request**](OperationsApi.md#assign_service_request) | **POST** /service-requests/{requestId}/assign | Assign service request
[**cancel_service_request**](OperationsApi.md#cancel_service_request) | **POST** /service-requests/{requestId}/cancel | Cancel service request
[**clock_in_shift**](OperationsApi.md#clock_in_shift) | **POST** /staff/shifts/{shiftId}/clock-in | Clock in for shift
[**clock_out_shift**](OperationsApi.md#clock_out_shift) | **POST** /staff/shifts/{shiftId}/clock-out | Clock out from shift
[**close_incident**](OperationsApi.md#close_incident) | **POST** /incidents/{incidentId}/close | Close incident
[**complete_housekeeping_task**](OperationsApi.md#complete_housekeeping_task) | **POST** /housekeeping/tasks/{taskId}/complete | Complete housekeeping task
[**complete_maintenance_request**](OperationsApi.md#complete_maintenance_request) | **POST** /maintenance/requests/{requestId}/complete | Complete maintenance request
[**complete_service_request**](OperationsApi.md#complete_service_request) | **POST** /service-requests/{requestId}/complete | Complete service request
[**complete_training**](OperationsApi.md#complete_training) | **POST** /training/enrollments/{enrollmentId}/complete | Complete training
[**create_housekeeping_task**](OperationsApi.md#create_housekeeping_task) | **POST** /housekeeping/tasks | Create housekeeping task
[**create_maintenance_request**](OperationsApi.md#create_maintenance_request) | **POST** /maintenance/requests | Create maintenance request
[**create_service_request**](OperationsApi.md#create_service_request) | **POST** /service-requests | Create service request
[**create_staff_shift**](OperationsApi.md#create_staff_shift) | **POST** /staff/shifts | Create staff shift
[**create_training_module**](OperationsApi.md#create_training_module) | **POST** /training/modules | Create training module
[**enroll_in_training**](OperationsApi.md#enroll_in_training) | **POST** /training/enrollments | Enroll in training
[**escalate_service_request**](OperationsApi.md#escalate_service_request) | **POST** /service-requests/{requestId}/escalate | Escalate service request
[**fail_housekeeping_task**](OperationsApi.md#fail_housekeeping_task) | **POST** /housekeeping/tasks/{taskId}/fail | Fail housekeeping task
[**get_cleaning_schedule**](OperationsApi.md#get_cleaning_schedule) | **GET** /housekeeping/schedule | Get cleaning schedule
[**get_incident**](OperationsApi.md#get_incident) | **GET** /incidents/{incidentId} | Get incident details
[**get_maintenance_history**](OperationsApi.md#get_maintenance_history) | **GET** /maintenance/requests/{requestId}/history | Get maintenance history
[**get_staff_performance**](OperationsApi.md#get_staff_performance) | **GET** /staff/{staffId}/performance | Get staff performance metrics
[**get_training_enrollment**](OperationsApi.md#get_training_enrollment) | **GET** /training/enrollments/{enrollmentId} | Get enrollment details
[**get_training_module**](OperationsApi.md#get_training_module) | **GET** /training/modules/{moduleId} | Get training module details
[**list_housekeeping_tasks**](OperationsApi.md#list_housekeeping_tasks) | **GET** /housekeeping/tasks | List housekeeping tasks
[**list_incidents**](OperationsApi.md#list_incidents) | **GET** /incidents | List incidents
[**list_maintenance_requests**](OperationsApi.md#list_maintenance_requests) | **GET** /maintenance/requests | List maintenance requests
[**list_service_requests**](OperationsApi.md#list_service_requests) | **GET** /service-requests | List service requests
[**list_staff_shifts**](OperationsApi.md#list_staff_shifts) | **GET** /staff/shifts | List staff shifts
[**list_training_modules**](OperationsApi.md#list_training_modules) | **GET** /training/modules | List training modules
[**replace_housekeeping_task**](OperationsApi.md#replace_housekeeping_task) | **PUT** /housekeeping/tasks/{taskId} | Replace housekeeping task (full update)
[**replace_incident**](OperationsApi.md#replace_incident) | **PUT** /incidents/{incidentId} | Replace incident (full update)
[**replace_maintenance_request**](OperationsApi.md#replace_maintenance_request) | **PUT** /maintenance/requests/{requestId} | Replace maintenance request (full update)
[**replace_service_request**](OperationsApi.md#replace_service_request) | **PUT** /service-requests/{requestId} | Replace service request (full update)
[**report_incident**](OperationsApi.md#report_incident) | **POST** /incidents | Report incident
[**start_housekeeping_task**](OperationsApi.md#start_housekeeping_task) | **POST** /housekeeping/tasks/{taskId}/start | Start housekeeping task
[**update_housekeeping_task**](OperationsApi.md#update_housekeeping_task) | **PATCH** /housekeeping/tasks/{taskId} | Update housekeeping task (partial update)
[**update_maintenance_request**](OperationsApi.md#update_maintenance_request) | **PATCH** /maintenance/requests/{requestId} | Update maintenance request (partial update)
[**update_service_request**](OperationsApi.md#update_service_request) | **PATCH** /service-requests/{requestId} | Update service request (partial update)
[**verify_housekeeping_task**](OperationsApi.md#verify_housekeeping_task) | **POST** /housekeeping/tasks/{taskId}/verify | Verify housekeeping task
[**verify_maintenance_request**](OperationsApi.md#verify_maintenance_request) | **POST** /maintenance/requests/{requestId}/verify | Verify maintenance completion


# **acknowledge_service_request**
> ServiceRequest acknowledge_service_request(request_id)

Acknowledge service request

Acknowledge receipt of a service request

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.service_request import ServiceRequest
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    request_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Acknowledge service request
        api_response = await api_instance.acknowledge_service_request(request_id)
        print("The response of OperationsApi->acknowledge_service_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->acknowledge_service_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_id** | **UUID**|  | 

### Return type

[**ServiceRequest**](ServiceRequest.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request acknowledged |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_incident_action**
> Incident add_incident_action(incident_id, add_incident_action_request)

Add incident action

Add a corrective action to an incident

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.add_incident_action_request import AddIncidentActionRequest
from stayos_api_client.models.incident import Incident
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    incident_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    add_incident_action_request = stayos_api_client.AddIncidentActionRequest() # AddIncidentActionRequest | 

    try:
        # Add incident action
        api_response = await api_instance.add_incident_action(incident_id, add_incident_action_request)
        print("The response of OperationsApi->add_incident_action:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->add_incident_action: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **incident_id** | **UUID**|  | 
 **add_incident_action_request** | [**AddIncidentActionRequest**](AddIncidentActionRequest.md)|  | 

### Return type

[**Incident**](Incident.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Action added |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assign_housekeeping_task**
> HousekeepingTask assign_housekeeping_task(task_id, assign_housekeeping_task_request)

Assign housekeeping task

Assign a housekeeping task to a staff member

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.assign_housekeeping_task_request import AssignHousekeepingTaskRequest
from stayos_api_client.models.housekeeping_task import HousekeepingTask
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    task_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    assign_housekeeping_task_request = stayos_api_client.AssignHousekeepingTaskRequest() # AssignHousekeepingTaskRequest | 

    try:
        # Assign housekeeping task
        api_response = await api_instance.assign_housekeeping_task(task_id, assign_housekeeping_task_request)
        print("The response of OperationsApi->assign_housekeeping_task:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->assign_housekeeping_task: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **UUID**|  | 
 **assign_housekeeping_task_request** | [**AssignHousekeepingTaskRequest**](AssignHousekeepingTaskRequest.md)|  | 

### Return type

[**HousekeepingTask**](HousekeepingTask.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Task assigned |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assign_maintenance_request**
> MaintenanceRequest assign_maintenance_request(request_id, assign_maintenance_request_request)

Assign maintenance request

Assign a maintenance request to a technician

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.assign_maintenance_request_request import AssignMaintenanceRequestRequest
from stayos_api_client.models.maintenance_request import MaintenanceRequest
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    request_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    assign_maintenance_request_request = stayos_api_client.AssignMaintenanceRequestRequest() # AssignMaintenanceRequestRequest | 

    try:
        # Assign maintenance request
        api_response = await api_instance.assign_maintenance_request(request_id, assign_maintenance_request_request)
        print("The response of OperationsApi->assign_maintenance_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->assign_maintenance_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_id** | **UUID**|  | 
 **assign_maintenance_request_request** | [**AssignMaintenanceRequestRequest**](AssignMaintenanceRequestRequest.md)|  | 

### Return type

[**MaintenanceRequest**](MaintenanceRequest.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request assigned |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assign_service_request**
> ServiceRequest assign_service_request(request_id, assign_service_request_request)

Assign service request

Assign a service request to a staff member

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.assign_service_request_request import AssignServiceRequestRequest
from stayos_api_client.models.service_request import ServiceRequest
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    request_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    assign_service_request_request = stayos_api_client.AssignServiceRequestRequest() # AssignServiceRequestRequest | 

    try:
        # Assign service request
        api_response = await api_instance.assign_service_request(request_id, assign_service_request_request)
        print("The response of OperationsApi->assign_service_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->assign_service_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_id** | **UUID**|  | 
 **assign_service_request_request** | [**AssignServiceRequestRequest**](AssignServiceRequestRequest.md)|  | 

### Return type

[**ServiceRequest**](ServiceRequest.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request assigned |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cancel_service_request**
> ServiceRequest cancel_service_request(request_id, cancel_service_request_request=cancel_service_request_request)

Cancel service request

Cancel a service request

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.cancel_service_request_request import CancelServiceRequestRequest
from stayos_api_client.models.service_request import ServiceRequest
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    request_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    cancel_service_request_request = stayos_api_client.CancelServiceRequestRequest() # CancelServiceRequestRequest |  (optional)

    try:
        # Cancel service request
        api_response = await api_instance.cancel_service_request(request_id, cancel_service_request_request=cancel_service_request_request)
        print("The response of OperationsApi->cancel_service_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->cancel_service_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_id** | **UUID**|  | 
 **cancel_service_request_request** | [**CancelServiceRequestRequest**](CancelServiceRequestRequest.md)|  | [optional] 

### Return type

[**ServiceRequest**](ServiceRequest.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request cancelled |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clock_in_shift**
> StaffShift clock_in_shift(shift_id)

Clock in for shift

Record staff clock-in time

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.staff_shift import StaffShift
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    shift_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Clock in for shift
        api_response = await api_instance.clock_in_shift(shift_id)
        print("The response of OperationsApi->clock_in_shift:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->clock_in_shift: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shift_id** | **UUID**|  | 

### Return type

[**StaffShift**](StaffShift.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Clocked in successfully |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clock_out_shift**
> StaffShift clock_out_shift(shift_id)

Clock out from shift

Record staff clock-out time

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.staff_shift import StaffShift
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    shift_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Clock out from shift
        api_response = await api_instance.clock_out_shift(shift_id)
        print("The response of OperationsApi->clock_out_shift:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->clock_out_shift: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shift_id** | **UUID**|  | 

### Return type

[**StaffShift**](StaffShift.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Clocked out successfully |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **close_incident**
> Incident close_incident(incident_id, close_incident_request=close_incident_request)

Close incident

Close an incident after resolution

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.close_incident_request import CloseIncidentRequest
from stayos_api_client.models.incident import Incident
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    incident_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    close_incident_request = stayos_api_client.CloseIncidentRequest() # CloseIncidentRequest |  (optional)

    try:
        # Close incident
        api_response = await api_instance.close_incident(incident_id, close_incident_request=close_incident_request)
        print("The response of OperationsApi->close_incident:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->close_incident: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **incident_id** | **UUID**|  | 
 **close_incident_request** | [**CloseIncidentRequest**](CloseIncidentRequest.md)|  | [optional] 

### Return type

[**Incident**](Incident.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Incident closed |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **complete_housekeeping_task**
> HousekeepingTask complete_housekeeping_task(task_id, complete_housekeeping_task_request=complete_housekeeping_task_request)

Complete housekeeping task

Mark a housekeeping task as completed

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.complete_housekeeping_task_request import CompleteHousekeepingTaskRequest
from stayos_api_client.models.housekeeping_task import HousekeepingTask
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    task_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    complete_housekeeping_task_request = stayos_api_client.CompleteHousekeepingTaskRequest() # CompleteHousekeepingTaskRequest |  (optional)

    try:
        # Complete housekeeping task
        api_response = await api_instance.complete_housekeeping_task(task_id, complete_housekeeping_task_request=complete_housekeeping_task_request)
        print("The response of OperationsApi->complete_housekeeping_task:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->complete_housekeeping_task: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **UUID**|  | 
 **complete_housekeeping_task_request** | [**CompleteHousekeepingTaskRequest**](CompleteHousekeepingTaskRequest.md)|  | [optional] 

### Return type

[**HousekeepingTask**](HousekeepingTask.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Task completed |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **complete_maintenance_request**
> MaintenanceRequest complete_maintenance_request(request_id, complete_maintenance_request_request=complete_maintenance_request_request)

Complete maintenance request

Mark a maintenance request as completed

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.complete_maintenance_request_request import CompleteMaintenanceRequestRequest
from stayos_api_client.models.maintenance_request import MaintenanceRequest
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    request_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    complete_maintenance_request_request = stayos_api_client.CompleteMaintenanceRequestRequest() # CompleteMaintenanceRequestRequest |  (optional)

    try:
        # Complete maintenance request
        api_response = await api_instance.complete_maintenance_request(request_id, complete_maintenance_request_request=complete_maintenance_request_request)
        print("The response of OperationsApi->complete_maintenance_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->complete_maintenance_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_id** | **UUID**|  | 
 **complete_maintenance_request_request** | [**CompleteMaintenanceRequestRequest**](CompleteMaintenanceRequestRequest.md)|  | [optional] 

### Return type

[**MaintenanceRequest**](MaintenanceRequest.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request completed |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **complete_service_request**
> ServiceRequest complete_service_request(request_id, mark_reservation_no_show_request=mark_reservation_no_show_request)

Complete service request

Mark a service request as completed

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.mark_reservation_no_show_request import MarkReservationNoShowRequest
from stayos_api_client.models.service_request import ServiceRequest
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    request_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    mark_reservation_no_show_request = stayos_api_client.MarkReservationNoShowRequest() # MarkReservationNoShowRequest |  (optional)

    try:
        # Complete service request
        api_response = await api_instance.complete_service_request(request_id, mark_reservation_no_show_request=mark_reservation_no_show_request)
        print("The response of OperationsApi->complete_service_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->complete_service_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_id** | **UUID**|  | 
 **mark_reservation_no_show_request** | [**MarkReservationNoShowRequest**](MarkReservationNoShowRequest.md)|  | [optional] 

### Return type

[**ServiceRequest**](ServiceRequest.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request completed |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **complete_training**
> TrainingEnrollment complete_training(enrollment_id, complete_training_request=complete_training_request)

Complete training

Mark a training enrollment as completed

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.complete_training_request import CompleteTrainingRequest
from stayos_api_client.models.training_enrollment import TrainingEnrollment
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    enrollment_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    complete_training_request = stayos_api_client.CompleteTrainingRequest() # CompleteTrainingRequest |  (optional)

    try:
        # Complete training
        api_response = await api_instance.complete_training(enrollment_id, complete_training_request=complete_training_request)
        print("The response of OperationsApi->complete_training:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->complete_training: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **enrollment_id** | **UUID**|  | 
 **complete_training_request** | [**CompleteTrainingRequest**](CompleteTrainingRequest.md)|  | [optional] 

### Return type

[**TrainingEnrollment**](TrainingEnrollment.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Training completed |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_housekeeping_task**
> object create_housekeeping_task(body)

Create housekeeping task

Create a new housekeeping task for room cleaning, inspection, or maintenance preparation

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    body = None # object | 

    try:
        # Create housekeeping task
        api_response = await api_instance.create_housekeeping_task(body)
        print("The response of OperationsApi->create_housekeeping_task:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->create_housekeeping_task: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | 

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
**201** | Task created |  * Location -  <br>  |
**400** | Bad request - validation error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_maintenance_request**
> object create_maintenance_request(body)

Create maintenance request

Create a new maintenance request for repairs, inspections, or preventive maintenance

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    body = None # object | 

    try:
        # Create maintenance request
        api_response = await api_instance.create_maintenance_request(body)
        print("The response of OperationsApi->create_maintenance_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->create_maintenance_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | 

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
**201** | Request created |  * Location -  <br>  |
**400** | Bad request - validation error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_service_request**
> object create_service_request(body)

Create service request

Create a new guest service request for concierge services, amenities, or special accommodations

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    body = None # object | 

    try:
        # Create service request
        api_response = await api_instance.create_service_request(body)
        print("The response of OperationsApi->create_service_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->create_service_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | 

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
**201** | Request created |  * Location -  <br>  |
**400** | Bad request - validation error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_staff_shift**
> StaffShift create_staff_shift(staff_shift)

Create staff shift

Create a new staff shift

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.staff_shift import StaffShift
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    staff_shift = stayos_api_client.StaffShift() # StaffShift | 

    try:
        # Create staff shift
        api_response = await api_instance.create_staff_shift(staff_shift)
        print("The response of OperationsApi->create_staff_shift:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->create_staff_shift: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **staff_shift** | [**StaffShift**](StaffShift.md)|  | 

### Return type

[**StaffShift**](StaffShift.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Shift created |  * Location -  <br>  |
**400** | Bad request - validation error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_training_module**
> TrainingModule create_training_module(training_module)

Create training module

Create a new training module

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.training_module import TrainingModule
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    training_module = stayos_api_client.TrainingModule() # TrainingModule | 

    try:
        # Create training module
        api_response = await api_instance.create_training_module(training_module)
        print("The response of OperationsApi->create_training_module:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->create_training_module: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **training_module** | [**TrainingModule**](TrainingModule.md)|  | 

### Return type

[**TrainingModule**](TrainingModule.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Module created |  * Location -  <br>  |
**400** | Bad request - validation error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enroll_in_training**
> TrainingEnrollment enroll_in_training(training_enrollment)

Enroll in training

Enroll a staff member in a training module

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.training_enrollment import TrainingEnrollment
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    training_enrollment = stayos_api_client.TrainingEnrollment() # TrainingEnrollment | 

    try:
        # Enroll in training
        api_response = await api_instance.enroll_in_training(training_enrollment)
        print("The response of OperationsApi->enroll_in_training:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->enroll_in_training: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **training_enrollment** | [**TrainingEnrollment**](TrainingEnrollment.md)|  | 

### Return type

[**TrainingEnrollment**](TrainingEnrollment.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Enrollment created |  * Location -  <br>  |
**400** | Bad request - validation error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **escalate_service_request**
> ServiceRequest escalate_service_request(request_id, escalate_service_request_request)

Escalate service request

Escalate a service request to management

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.escalate_service_request_request import EscalateServiceRequestRequest
from stayos_api_client.models.service_request import ServiceRequest
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    request_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    escalate_service_request_request = stayos_api_client.EscalateServiceRequestRequest() # EscalateServiceRequestRequest | 

    try:
        # Escalate service request
        api_response = await api_instance.escalate_service_request(request_id, escalate_service_request_request)
        print("The response of OperationsApi->escalate_service_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->escalate_service_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_id** | **UUID**|  | 
 **escalate_service_request_request** | [**EscalateServiceRequestRequest**](EscalateServiceRequestRequest.md)|  | 

### Return type

[**ServiceRequest**](ServiceRequest.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request escalated |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fail_housekeeping_task**
> HousekeepingTask fail_housekeeping_task(task_id, escalate_service_request_request)

Fail housekeeping task

Mark a housekeeping task as failed

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.escalate_service_request_request import EscalateServiceRequestRequest
from stayos_api_client.models.housekeeping_task import HousekeepingTask
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    task_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    escalate_service_request_request = stayos_api_client.EscalateServiceRequestRequest() # EscalateServiceRequestRequest | 

    try:
        # Fail housekeeping task
        api_response = await api_instance.fail_housekeeping_task(task_id, escalate_service_request_request)
        print("The response of OperationsApi->fail_housekeeping_task:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->fail_housekeeping_task: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **UUID**|  | 
 **escalate_service_request_request** | [**EscalateServiceRequestRequest**](EscalateServiceRequestRequest.md)|  | 

### Return type

[**HousekeepingTask**](HousekeepingTask.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Task marked as failed |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_cleaning_schedule**
> GetCleaningSchedule200Response get_cleaning_schedule(property_id, var_date=var_date)

Get cleaning schedule

Retrieve the housekeeping cleaning schedule

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.get_cleaning_schedule200_response import GetCleaningSchedule200Response
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    property_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    var_date = '2013-10-20' # date |  (optional)

    try:
        # Get cleaning schedule
        api_response = await api_instance.get_cleaning_schedule(property_id, var_date=var_date)
        print("The response of OperationsApi->get_cleaning_schedule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->get_cleaning_schedule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **property_id** | **UUID**|  | 
 **var_date** | **date**|  | [optional] 

### Return type

[**GetCleaningSchedule200Response**](GetCleaningSchedule200Response.md)

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

# **get_incident**
> Incident get_incident(incident_id)

Get incident details

Retrieve details of a specific incident

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.incident import Incident
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    incident_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get incident details
        api_response = await api_instance.get_incident(incident_id)
        print("The response of OperationsApi->get_incident:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->get_incident: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **incident_id** | **UUID**|  | 

### Return type

[**Incident**](Incident.md)

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

# **get_maintenance_history**
> GetMaintenanceHistory200Response get_maintenance_history(request_id)

Get maintenance history

Retrieve maintenance history for a specific request

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.get_maintenance_history200_response import GetMaintenanceHistory200Response
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    request_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get maintenance history
        api_response = await api_instance.get_maintenance_history(request_id)
        print("The response of OperationsApi->get_maintenance_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->get_maintenance_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_id** | **UUID**|  | 

### Return type

[**GetMaintenanceHistory200Response**](GetMaintenanceHistory200Response.md)

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

# **get_staff_performance**
> GetStaffPerformance200Response get_staff_performance(staff_id, start_date=start_date, end_date=end_date)

Get staff performance metrics

Retrieve performance metrics for a staff member

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.get_staff_performance200_response import GetStaffPerformance200Response
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    staff_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    start_date = '2013-10-20' # date |  (optional)
    end_date = '2013-10-20' # date |  (optional)

    try:
        # Get staff performance metrics
        api_response = await api_instance.get_staff_performance(staff_id, start_date=start_date, end_date=end_date)
        print("The response of OperationsApi->get_staff_performance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->get_staff_performance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **staff_id** | **UUID**|  | 
 **start_date** | **date**|  | [optional] 
 **end_date** | **date**|  | [optional] 

### Return type

[**GetStaffPerformance200Response**](GetStaffPerformance200Response.md)

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

# **get_training_enrollment**
> TrainingEnrollment get_training_enrollment(enrollment_id)

Get enrollment details

Retrieve details of a training enrollment

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.training_enrollment import TrainingEnrollment
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    enrollment_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get enrollment details
        api_response = await api_instance.get_training_enrollment(enrollment_id)
        print("The response of OperationsApi->get_training_enrollment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->get_training_enrollment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **enrollment_id** | **UUID**|  | 

### Return type

[**TrainingEnrollment**](TrainingEnrollment.md)

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

# **get_training_module**
> TrainingModule get_training_module(module_id)

Get training module details

Retrieve details of a specific training module

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.training_module import TrainingModule
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    module_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get training module details
        api_response = await api_instance.get_training_module(module_id)
        print("The response of OperationsApi->get_training_module:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->get_training_module: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **module_id** | **UUID**|  | 

### Return type

[**TrainingModule**](TrainingModule.md)

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

# **list_housekeeping_tasks**
> GetGuestStays200Response list_housekeeping_tasks(property_id=property_id, status=status, assigned_to=assigned_to, page_size=page_size, cursor=cursor)

List housekeeping tasks

List all housekeeping tasks with filtering by property, status, assignment, and date range

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
    api_instance = stayos_api_client.OperationsApi(api_client)
    property_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)
    status = 'status_example' # str |  (optional)
    assigned_to = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)
    page_size = 20 # int | Number of items per page (max 100) (optional) (default to 20)
    cursor = 'cursor_example' # str | Cursor for pagination (opaque token) (optional)

    try:
        # List housekeeping tasks
        api_response = await api_instance.list_housekeeping_tasks(property_id=property_id, status=status, assigned_to=assigned_to, page_size=page_size, cursor=cursor)
        print("The response of OperationsApi->list_housekeeping_tasks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->list_housekeeping_tasks: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **property_id** | **UUID**|  | [optional] 
 **status** | **str**|  | [optional] 
 **assigned_to** | **UUID**|  | [optional] 
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

# **list_incidents**
> ListIncidents200Response list_incidents(property_id=property_id, severity=severity, status=status, page_size=page_size, cursor=cursor)

List incidents

Retrieve all incidents with filtering

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.list_incidents200_response import ListIncidents200Response
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    property_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)
    severity = 'severity_example' # str |  (optional)
    status = 'status_example' # str |  (optional)
    page_size = 20 # int | Number of items per page (max 100) (optional) (default to 20)
    cursor = 'cursor_example' # str | Cursor for pagination (opaque token) (optional)

    try:
        # List incidents
        api_response = await api_instance.list_incidents(property_id=property_id, severity=severity, status=status, page_size=page_size, cursor=cursor)
        print("The response of OperationsApi->list_incidents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->list_incidents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **property_id** | **UUID**|  | [optional] 
 **severity** | **str**|  | [optional] 
 **status** | **str**|  | [optional] 
 **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20]
 **cursor** | **str**| Cursor for pagination (opaque token) | [optional] 

### Return type

[**ListIncidents200Response**](ListIncidents200Response.md)

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

# **list_maintenance_requests**
> GetGuestStays200Response list_maintenance_requests(property_id=property_id, status=status, priority=priority, page_size=page_size, cursor=cursor)

List maintenance requests

List all maintenance requests with filtering by property, priority, status, and category

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
    api_instance = stayos_api_client.OperationsApi(api_client)
    property_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)
    status = 'status_example' # str |  (optional)
    priority = 'priority_example' # str |  (optional)
    page_size = 20 # int | Number of items per page (max 100) (optional) (default to 20)
    cursor = 'cursor_example' # str | Cursor for pagination (opaque token) (optional)

    try:
        # List maintenance requests
        api_response = await api_instance.list_maintenance_requests(property_id=property_id, status=status, priority=priority, page_size=page_size, cursor=cursor)
        print("The response of OperationsApi->list_maintenance_requests:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->list_maintenance_requests: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **property_id** | **UUID**|  | [optional] 
 **status** | **str**|  | [optional] 
 **priority** | **str**|  | [optional] 
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

# **list_service_requests**
> GetGuestStays200Response list_service_requests(property_id=property_id, status=status, page_size=page_size, cursor=cursor)

List service requests

List all guest service requests with filtering by property, guest, status, and request type

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
    api_instance = stayos_api_client.OperationsApi(api_client)
    property_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)
    status = 'status_example' # str |  (optional)
    page_size = 20 # int | Number of items per page (max 100) (optional) (default to 20)
    cursor = 'cursor_example' # str | Cursor for pagination (opaque token) (optional)

    try:
        # List service requests
        api_response = await api_instance.list_service_requests(property_id=property_id, status=status, page_size=page_size, cursor=cursor)
        print("The response of OperationsApi->list_service_requests:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->list_service_requests: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **property_id** | **UUID**|  | [optional] 
 **status** | **str**|  | [optional] 
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

# **list_staff_shifts**
> ListStaffShifts200Response list_staff_shifts(staff_id=staff_id, var_date=var_date, page_size=page_size, cursor=cursor)

List staff shifts

Retrieve all staff shifts with filtering

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.list_staff_shifts200_response import ListStaffShifts200Response
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    staff_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID |  (optional)
    var_date = '2013-10-20' # date |  (optional)
    page_size = 20 # int | Number of items per page (max 100) (optional) (default to 20)
    cursor = 'cursor_example' # str | Cursor for pagination (opaque token) (optional)

    try:
        # List staff shifts
        api_response = await api_instance.list_staff_shifts(staff_id=staff_id, var_date=var_date, page_size=page_size, cursor=cursor)
        print("The response of OperationsApi->list_staff_shifts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->list_staff_shifts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **staff_id** | **UUID**|  | [optional] 
 **var_date** | **date**|  | [optional] 
 **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20]
 **cursor** | **str**| Cursor for pagination (opaque token) | [optional] 

### Return type

[**ListStaffShifts200Response**](ListStaffShifts200Response.md)

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

# **list_training_modules**
> ListTrainingModules200Response list_training_modules(page_size=page_size, cursor=cursor)

List training modules

Retrieve all training modules

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.list_training_modules200_response import ListTrainingModules200Response
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    page_size = 20 # int | Number of items per page (max 100) (optional) (default to 20)
    cursor = 'cursor_example' # str | Cursor for pagination (opaque token) (optional)

    try:
        # List training modules
        api_response = await api_instance.list_training_modules(page_size=page_size, cursor=cursor)
        print("The response of OperationsApi->list_training_modules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->list_training_modules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20]
 **cursor** | **str**| Cursor for pagination (opaque token) | [optional] 

### Return type

[**ListTrainingModules200Response**](ListTrainingModules200Response.md)

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

# **replace_housekeeping_task**
> object replace_housekeeping_task(task_id, body, if_match=if_match)

Replace housekeeping task (full update)

Replace housekeeping task with complete new task details including assignment, priority, and status

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    task_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    body = None # object | 
    if_match = 'if_match_example' # str | ETag for optimistic locking (optional)

    try:
        # Replace housekeeping task (full update)
        api_response = await api_instance.replace_housekeeping_task(task_id, body, if_match=if_match)
        print("The response of OperationsApi->replace_housekeeping_task:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->replace_housekeeping_task: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **UUID**|  | 
 **body** | **object**|  | 
 **if_match** | **str**| ETag for optimistic locking | [optional] 

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
**200** | Successfully replaced |  * ETag -  <br>  |
**404** | Resource not found |  -  |
**412** | Precondition failed - optimistic locking failure |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replace_incident**
> Incident replace_incident(incident_id, incident, if_match=if_match)

Replace incident (full update)

Replace incident with complete new details

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.incident import Incident
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    incident_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    incident = stayos_api_client.Incident() # Incident | 
    if_match = 'if_match_example' # str | ETag for optimistic locking (optional)

    try:
        # Replace incident (full update)
        api_response = await api_instance.replace_incident(incident_id, incident, if_match=if_match)
        print("The response of OperationsApi->replace_incident:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->replace_incident: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **incident_id** | **UUID**|  | 
 **incident** | [**Incident**](Incident.md)|  | 
 **if_match** | **str**| ETag for optimistic locking | [optional] 

### Return type

[**Incident**](Incident.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully replaced |  * ETag -  <br>  |
**404** | Resource not found |  -  |
**412** | Precondition failed - optimistic locking failure |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replace_maintenance_request**
> object replace_maintenance_request(request_id, body, if_match=if_match)

Replace maintenance request (full update)

Replace maintenance request with complete new request details including priority, assignment, and scheduling

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    request_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    body = None # object | 
    if_match = 'if_match_example' # str | ETag for optimistic locking (optional)

    try:
        # Replace maintenance request (full update)
        api_response = await api_instance.replace_maintenance_request(request_id, body, if_match=if_match)
        print("The response of OperationsApi->replace_maintenance_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->replace_maintenance_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_id** | **UUID**|  | 
 **body** | **object**|  | 
 **if_match** | **str**| ETag for optimistic locking | [optional] 

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
**200** | Successfully replaced |  * ETag -  <br>  |
**404** | Resource not found |  -  |
**412** | Precondition failed - optimistic locking failure |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replace_service_request**
> object replace_service_request(request_id, body, if_match=if_match)

Replace service request (full update)

Replace service request with complete new request details including type, priority, and fulfillment status

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    request_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    body = None # object | 
    if_match = 'if_match_example' # str | ETag for optimistic locking (optional)

    try:
        # Replace service request (full update)
        api_response = await api_instance.replace_service_request(request_id, body, if_match=if_match)
        print("The response of OperationsApi->replace_service_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->replace_service_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_id** | **UUID**|  | 
 **body** | **object**|  | 
 **if_match** | **str**| ETag for optimistic locking | [optional] 

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
**200** | Successfully replaced |  * ETag -  <br>  |
**404** | Resource not found |  -  |
**412** | Precondition failed - optimistic locking failure |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **report_incident**
> Incident report_incident(incident)

Report incident

Report a new incident

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.incident import Incident
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    incident = stayos_api_client.Incident() # Incident | 

    try:
        # Report incident
        api_response = await api_instance.report_incident(incident)
        print("The response of OperationsApi->report_incident:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->report_incident: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **incident** | [**Incident**](Incident.md)|  | 

### Return type

[**Incident**](Incident.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Incident reported |  * Location -  <br>  |
**400** | Bad request - validation error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **start_housekeeping_task**
> HousekeepingTask start_housekeeping_task(task_id)

Start housekeeping task

Mark a housekeeping task as started

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.housekeeping_task import HousekeepingTask
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    task_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Start housekeeping task
        api_response = await api_instance.start_housekeeping_task(task_id)
        print("The response of OperationsApi->start_housekeeping_task:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->start_housekeeping_task: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **UUID**|  | 

### Return type

[**HousekeepingTask**](HousekeepingTask.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Task started |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_housekeeping_task**
> object update_housekeeping_task(task_id, body, if_match=if_match)

Update housekeeping task (partial update)

Update specific fields of a housekeeping task.

**Common use cases:**
- Change task status
- Update priority
- Assign to different staff
- Add notes


### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    task_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    body = {"status":"IN_PROGRESS","assignedTo":"staff_123","priority":"HIGH"} # object | 
    if_match = 'if_match_example' # str | ETag for optimistic locking (optional)

    try:
        # Update housekeeping task (partial update)
        api_response = await api_instance.update_housekeeping_task(task_id, body, if_match=if_match)
        print("The response of OperationsApi->update_housekeeping_task:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->update_housekeeping_task: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **UUID**|  | 
 **body** | **object**|  | 
 **if_match** | **str**| ETag for optimistic locking | [optional] 

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
**200** | Successfully updated |  * ETag -  <br>  |
**404** | Resource not found |  -  |
**412** | Precondition failed - optimistic locking failure |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_maintenance_request**
> object update_maintenance_request(request_id, body, if_match=if_match)

Update maintenance request (partial update)

Update specific fields of a maintenance request.

**Common use cases:**
- Update request status
- Change priority
- Add resolution notes
- Update estimated completion


### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    request_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    body = {"status":"IN_PROGRESS","priority":"URGENT","notes":"Plumber dispatched"} # object | 
    if_match = 'if_match_example' # str | ETag for optimistic locking (optional)

    try:
        # Update maintenance request (partial update)
        api_response = await api_instance.update_maintenance_request(request_id, body, if_match=if_match)
        print("The response of OperationsApi->update_maintenance_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->update_maintenance_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_id** | **UUID**|  | 
 **body** | **object**|  | 
 **if_match** | **str**| ETag for optimistic locking | [optional] 

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
**200** | Successfully updated |  * ETag -  <br>  |
**404** | Resource not found |  -  |
**412** | Precondition failed - optimistic locking failure |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_service_request**
> object update_service_request(request_id, body, if_match=if_match)

Update service request (partial update)

Update specific fields of a service request.

**Common use cases:**
- Update request status
- Change priority (e.g., VIP guest)
- Add fulfillment notes
- Update delivery time


### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    request_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    body = {"priority":"HIGH","notes":"Guest is VIP - expedite","status":"IN_PROGRESS"} # object | 
    if_match = 'if_match_example' # str | ETag for optimistic locking (optional)

    try:
        # Update service request (partial update)
        api_response = await api_instance.update_service_request(request_id, body, if_match=if_match)
        print("The response of OperationsApi->update_service_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->update_service_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_id** | **UUID**|  | 
 **body** | **object**|  | 
 **if_match** | **str**| ETag for optimistic locking | [optional] 

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
**200** | Successfully updated |  * ETag -  <br>  |
**404** | Resource not found |  -  |
**412** | Precondition failed - optimistic locking failure |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verify_housekeeping_task**
> HousekeepingTask verify_housekeeping_task(task_id, verify_housekeeping_task_request=verify_housekeeping_task_request)

Verify housekeeping task

Verify completion of a housekeeping task

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.housekeeping_task import HousekeepingTask
from stayos_api_client.models.verify_housekeeping_task_request import VerifyHousekeepingTaskRequest
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    task_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    verify_housekeeping_task_request = stayos_api_client.VerifyHousekeepingTaskRequest() # VerifyHousekeepingTaskRequest |  (optional)

    try:
        # Verify housekeeping task
        api_response = await api_instance.verify_housekeeping_task(task_id, verify_housekeeping_task_request=verify_housekeeping_task_request)
        print("The response of OperationsApi->verify_housekeeping_task:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->verify_housekeeping_task: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_id** | **UUID**|  | 
 **verify_housekeeping_task_request** | [**VerifyHousekeepingTaskRequest**](VerifyHousekeepingTaskRequest.md)|  | [optional] 

### Return type

[**HousekeepingTask**](HousekeepingTask.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Task verified |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verify_maintenance_request**
> MaintenanceRequest verify_maintenance_request(request_id, verify_housekeeping_task_request=verify_housekeeping_task_request)

Verify maintenance completion

Verify that maintenance work has been completed satisfactorily

### Example

* OAuth Authentication (OAuth2):
* OAuth Authentication (OAuth2):

```python
import stayos_api_client
from stayos_api_client.models.maintenance_request import MaintenanceRequest
from stayos_api_client.models.verify_housekeeping_task_request import VerifyHousekeepingTaskRequest
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
    api_instance = stayos_api_client.OperationsApi(api_client)
    request_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    verify_housekeeping_task_request = stayos_api_client.VerifyHousekeepingTaskRequest() # VerifyHousekeepingTaskRequest |  (optional)

    try:
        # Verify maintenance completion
        api_response = await api_instance.verify_maintenance_request(request_id, verify_housekeeping_task_request=verify_housekeeping_task_request)
        print("The response of OperationsApi->verify_maintenance_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationsApi->verify_maintenance_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_id** | **UUID**|  | 
 **verify_housekeeping_task_request** | [**VerifyHousekeepingTaskRequest**](VerifyHousekeepingTaskRequest.md)|  | [optional] 

### Return type

[**MaintenanceRequest**](MaintenanceRequest.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request verified |  -  |
**404** | Resource not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

