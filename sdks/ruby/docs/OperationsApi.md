# OpenapiClient::OperationsApi

All URIs are relative to *https://api.stayos.com/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**acknowledge_service_request**](OperationsApi.md#acknowledge_service_request) | **POST** /service-requests/{requestId}/acknowledge | Acknowledge service request |
| [**add_incident_action**](OperationsApi.md#add_incident_action) | **POST** /incidents/{incidentId}/actions | Add incident action |
| [**assign_housekeeping_task**](OperationsApi.md#assign_housekeeping_task) | **POST** /housekeeping/tasks/{taskId}/assign | Assign housekeeping task |
| [**assign_maintenance_request**](OperationsApi.md#assign_maintenance_request) | **POST** /maintenance/requests/{requestId}/assign | Assign maintenance request |
| [**assign_service_request**](OperationsApi.md#assign_service_request) | **POST** /service-requests/{requestId}/assign | Assign service request |
| [**cancel_service_request**](OperationsApi.md#cancel_service_request) | **POST** /service-requests/{requestId}/cancel | Cancel service request |
| [**clock_in_shift**](OperationsApi.md#clock_in_shift) | **POST** /staff/shifts/{shiftId}/clock-in | Clock in for shift |
| [**clock_out_shift**](OperationsApi.md#clock_out_shift) | **POST** /staff/shifts/{shiftId}/clock-out | Clock out from shift |
| [**close_incident**](OperationsApi.md#close_incident) | **POST** /incidents/{incidentId}/close | Close incident |
| [**complete_housekeeping_task**](OperationsApi.md#complete_housekeeping_task) | **POST** /housekeeping/tasks/{taskId}/complete | Complete housekeeping task |
| [**complete_maintenance_request**](OperationsApi.md#complete_maintenance_request) | **POST** /maintenance/requests/{requestId}/complete | Complete maintenance request |
| [**complete_service_request**](OperationsApi.md#complete_service_request) | **POST** /service-requests/{requestId}/complete | Complete service request |
| [**complete_training**](OperationsApi.md#complete_training) | **POST** /training/enrollments/{enrollmentId}/complete | Complete training |
| [**create_housekeeping_task**](OperationsApi.md#create_housekeeping_task) | **POST** /housekeeping/tasks | Create housekeeping task |
| [**create_maintenance_request**](OperationsApi.md#create_maintenance_request) | **POST** /maintenance/requests | Create maintenance request |
| [**create_service_request**](OperationsApi.md#create_service_request) | **POST** /service-requests | Create service request |
| [**create_staff_shift**](OperationsApi.md#create_staff_shift) | **POST** /staff/shifts | Create staff shift |
| [**create_training_module**](OperationsApi.md#create_training_module) | **POST** /training/modules | Create training module |
| [**enroll_in_training**](OperationsApi.md#enroll_in_training) | **POST** /training/enrollments | Enroll in training |
| [**escalate_service_request**](OperationsApi.md#escalate_service_request) | **POST** /service-requests/{requestId}/escalate | Escalate service request |
| [**fail_housekeeping_task**](OperationsApi.md#fail_housekeeping_task) | **POST** /housekeeping/tasks/{taskId}/fail | Fail housekeeping task |
| [**get_cleaning_schedule**](OperationsApi.md#get_cleaning_schedule) | **GET** /housekeeping/schedule | Get cleaning schedule |
| [**get_incident**](OperationsApi.md#get_incident) | **GET** /incidents/{incidentId} | Get incident details |
| [**get_maintenance_history**](OperationsApi.md#get_maintenance_history) | **GET** /maintenance/requests/{requestId}/history | Get maintenance history |
| [**get_staff_performance**](OperationsApi.md#get_staff_performance) | **GET** /staff/{staffId}/performance | Get staff performance metrics |
| [**get_training_enrollment**](OperationsApi.md#get_training_enrollment) | **GET** /training/enrollments/{enrollmentId} | Get enrollment details |
| [**get_training_module**](OperationsApi.md#get_training_module) | **GET** /training/modules/{moduleId} | Get training module details |
| [**list_housekeeping_tasks**](OperationsApi.md#list_housekeeping_tasks) | **GET** /housekeeping/tasks | List housekeeping tasks |
| [**list_incidents**](OperationsApi.md#list_incidents) | **GET** /incidents | List incidents |
| [**list_maintenance_requests**](OperationsApi.md#list_maintenance_requests) | **GET** /maintenance/requests | List maintenance requests |
| [**list_service_requests**](OperationsApi.md#list_service_requests) | **GET** /service-requests | List service requests |
| [**list_staff_shifts**](OperationsApi.md#list_staff_shifts) | **GET** /staff/shifts | List staff shifts |
| [**list_training_modules**](OperationsApi.md#list_training_modules) | **GET** /training/modules | List training modules |
| [**replace_housekeeping_task**](OperationsApi.md#replace_housekeeping_task) | **PUT** /housekeeping/tasks/{taskId} | Replace housekeeping task (full update) |
| [**replace_incident**](OperationsApi.md#replace_incident) | **PUT** /incidents/{incidentId} | Replace incident (full update) |
| [**replace_maintenance_request**](OperationsApi.md#replace_maintenance_request) | **PUT** /maintenance/requests/{requestId} | Replace maintenance request (full update) |
| [**replace_service_request**](OperationsApi.md#replace_service_request) | **PUT** /service-requests/{requestId} | Replace service request (full update) |
| [**report_incident**](OperationsApi.md#report_incident) | **POST** /incidents | Report incident |
| [**start_housekeeping_task**](OperationsApi.md#start_housekeeping_task) | **POST** /housekeeping/tasks/{taskId}/start | Start housekeeping task |
| [**update_housekeeping_task**](OperationsApi.md#update_housekeeping_task) | **PATCH** /housekeeping/tasks/{taskId} | Update housekeeping task (partial update) |
| [**update_maintenance_request**](OperationsApi.md#update_maintenance_request) | **PATCH** /maintenance/requests/{requestId} | Update maintenance request (partial update) |
| [**update_service_request**](OperationsApi.md#update_service_request) | **PATCH** /service-requests/{requestId} | Update service request (partial update) |
| [**verify_housekeeping_task**](OperationsApi.md#verify_housekeeping_task) | **POST** /housekeeping/tasks/{taskId}/verify | Verify housekeeping task |
| [**verify_maintenance_request**](OperationsApi.md#verify_maintenance_request) | **POST** /maintenance/requests/{requestId}/verify | Verify maintenance completion |


## acknowledge_service_request

> <ServiceRequest> acknowledge_service_request(request_id)

Acknowledge service request

Acknowledge receipt of a service request

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

api_instance = OpenapiClient::OperationsApi.new
request_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Acknowledge service request
  result = api_instance.acknowledge_service_request(request_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->acknowledge_service_request: #{e}"
end
```

#### Using the acknowledge_service_request_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ServiceRequest>, Integer, Hash)> acknowledge_service_request_with_http_info(request_id)

```ruby
begin
  # Acknowledge service request
  data, status_code, headers = api_instance.acknowledge_service_request_with_http_info(request_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ServiceRequest>
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->acknowledge_service_request_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **request_id** | **String** |  |  |

### Return type

[**ServiceRequest**](ServiceRequest.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## add_incident_action

> <Incident> add_incident_action(incident_id, add_incident_action_request)

Add incident action

Add a corrective action to an incident

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

api_instance = OpenapiClient::OperationsApi.new
incident_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
add_incident_action_request = OpenapiClient::AddIncidentActionRequest.new({action: 'action_example'}) # AddIncidentActionRequest | 

begin
  # Add incident action
  result = api_instance.add_incident_action(incident_id, add_incident_action_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->add_incident_action: #{e}"
end
```

#### Using the add_incident_action_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Incident>, Integer, Hash)> add_incident_action_with_http_info(incident_id, add_incident_action_request)

```ruby
begin
  # Add incident action
  data, status_code, headers = api_instance.add_incident_action_with_http_info(incident_id, add_incident_action_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Incident>
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->add_incident_action_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **incident_id** | **String** |  |  |
| **add_incident_action_request** | [**AddIncidentActionRequest**](AddIncidentActionRequest.md) |  |  |

### Return type

[**Incident**](Incident.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## assign_housekeeping_task

> <HousekeepingTask> assign_housekeeping_task(task_id, assign_housekeeping_task_request)

Assign housekeeping task

Assign a housekeeping task to a staff member

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

api_instance = OpenapiClient::OperationsApi.new
task_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
assign_housekeeping_task_request = OpenapiClient::AssignHousekeepingTaskRequest.new({assigned_to: 'assigned_to_example'}) # AssignHousekeepingTaskRequest | 

begin
  # Assign housekeeping task
  result = api_instance.assign_housekeeping_task(task_id, assign_housekeeping_task_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->assign_housekeeping_task: #{e}"
end
```

#### Using the assign_housekeeping_task_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<HousekeepingTask>, Integer, Hash)> assign_housekeeping_task_with_http_info(task_id, assign_housekeeping_task_request)

```ruby
begin
  # Assign housekeeping task
  data, status_code, headers = api_instance.assign_housekeeping_task_with_http_info(task_id, assign_housekeeping_task_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <HousekeepingTask>
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->assign_housekeeping_task_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **task_id** | **String** |  |  |
| **assign_housekeeping_task_request** | [**AssignHousekeepingTaskRequest**](AssignHousekeepingTaskRequest.md) |  |  |

### Return type

[**HousekeepingTask**](HousekeepingTask.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## assign_maintenance_request

> <MaintenanceRequest> assign_maintenance_request(request_id, assign_maintenance_request_request)

Assign maintenance request

Assign a maintenance request to a technician

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

api_instance = OpenapiClient::OperationsApi.new
request_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
assign_maintenance_request_request = OpenapiClient::AssignMaintenanceRequestRequest.new({assigned_to: 'assigned_to_example'}) # AssignMaintenanceRequestRequest | 

begin
  # Assign maintenance request
  result = api_instance.assign_maintenance_request(request_id, assign_maintenance_request_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->assign_maintenance_request: #{e}"
end
```

#### Using the assign_maintenance_request_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<MaintenanceRequest>, Integer, Hash)> assign_maintenance_request_with_http_info(request_id, assign_maintenance_request_request)

```ruby
begin
  # Assign maintenance request
  data, status_code, headers = api_instance.assign_maintenance_request_with_http_info(request_id, assign_maintenance_request_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <MaintenanceRequest>
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->assign_maintenance_request_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **request_id** | **String** |  |  |
| **assign_maintenance_request_request** | [**AssignMaintenanceRequestRequest**](AssignMaintenanceRequestRequest.md) |  |  |

### Return type

[**MaintenanceRequest**](MaintenanceRequest.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## assign_service_request

> <ServiceRequest> assign_service_request(request_id, assign_service_request_request)

Assign service request

Assign a service request to a staff member

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

api_instance = OpenapiClient::OperationsApi.new
request_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
assign_service_request_request = OpenapiClient::AssignServiceRequestRequest.new({assigned_to: 'assigned_to_example'}) # AssignServiceRequestRequest | 

begin
  # Assign service request
  result = api_instance.assign_service_request(request_id, assign_service_request_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->assign_service_request: #{e}"
end
```

#### Using the assign_service_request_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ServiceRequest>, Integer, Hash)> assign_service_request_with_http_info(request_id, assign_service_request_request)

```ruby
begin
  # Assign service request
  data, status_code, headers = api_instance.assign_service_request_with_http_info(request_id, assign_service_request_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ServiceRequest>
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->assign_service_request_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **request_id** | **String** |  |  |
| **assign_service_request_request** | [**AssignServiceRequestRequest**](AssignServiceRequestRequest.md) |  |  |

### Return type

[**ServiceRequest**](ServiceRequest.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## cancel_service_request

> <ServiceRequest> cancel_service_request(request_id, opts)

Cancel service request

Cancel a service request

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

api_instance = OpenapiClient::OperationsApi.new
request_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
opts = {
  cancel_service_request_request: OpenapiClient::CancelServiceRequestRequest.new # CancelServiceRequestRequest | 
}

begin
  # Cancel service request
  result = api_instance.cancel_service_request(request_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->cancel_service_request: #{e}"
end
```

#### Using the cancel_service_request_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ServiceRequest>, Integer, Hash)> cancel_service_request_with_http_info(request_id, opts)

```ruby
begin
  # Cancel service request
  data, status_code, headers = api_instance.cancel_service_request_with_http_info(request_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ServiceRequest>
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->cancel_service_request_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **request_id** | **String** |  |  |
| **cancel_service_request_request** | [**CancelServiceRequestRequest**](CancelServiceRequestRequest.md) |  | [optional] |

### Return type

[**ServiceRequest**](ServiceRequest.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## clock_in_shift

> <StaffShift> clock_in_shift(shift_id)

Clock in for shift

Record staff clock-in time

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

api_instance = OpenapiClient::OperationsApi.new
shift_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Clock in for shift
  result = api_instance.clock_in_shift(shift_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->clock_in_shift: #{e}"
end
```

#### Using the clock_in_shift_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<StaffShift>, Integer, Hash)> clock_in_shift_with_http_info(shift_id)

```ruby
begin
  # Clock in for shift
  data, status_code, headers = api_instance.clock_in_shift_with_http_info(shift_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <StaffShift>
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->clock_in_shift_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **shift_id** | **String** |  |  |

### Return type

[**StaffShift**](StaffShift.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## clock_out_shift

> <StaffShift> clock_out_shift(shift_id)

Clock out from shift

Record staff clock-out time

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

api_instance = OpenapiClient::OperationsApi.new
shift_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Clock out from shift
  result = api_instance.clock_out_shift(shift_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->clock_out_shift: #{e}"
end
```

#### Using the clock_out_shift_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<StaffShift>, Integer, Hash)> clock_out_shift_with_http_info(shift_id)

```ruby
begin
  # Clock out from shift
  data, status_code, headers = api_instance.clock_out_shift_with_http_info(shift_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <StaffShift>
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->clock_out_shift_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **shift_id** | **String** |  |  |

### Return type

[**StaffShift**](StaffShift.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## close_incident

> <Incident> close_incident(incident_id, opts)

Close incident

Close an incident after resolution

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

api_instance = OpenapiClient::OperationsApi.new
incident_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
opts = {
  close_incident_request: OpenapiClient::CloseIncidentRequest.new # CloseIncidentRequest | 
}

begin
  # Close incident
  result = api_instance.close_incident(incident_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->close_incident: #{e}"
end
```

#### Using the close_incident_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Incident>, Integer, Hash)> close_incident_with_http_info(incident_id, opts)

```ruby
begin
  # Close incident
  data, status_code, headers = api_instance.close_incident_with_http_info(incident_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Incident>
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->close_incident_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **incident_id** | **String** |  |  |
| **close_incident_request** | [**CloseIncidentRequest**](CloseIncidentRequest.md) |  | [optional] |

### Return type

[**Incident**](Incident.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## complete_housekeeping_task

> <HousekeepingTask> complete_housekeeping_task(task_id, opts)

Complete housekeeping task

Mark a housekeeping task as completed

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

api_instance = OpenapiClient::OperationsApi.new
task_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
opts = {
  complete_housekeeping_task_request: OpenapiClient::CompleteHousekeepingTaskRequest.new # CompleteHousekeepingTaskRequest | 
}

begin
  # Complete housekeeping task
  result = api_instance.complete_housekeeping_task(task_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->complete_housekeeping_task: #{e}"
end
```

#### Using the complete_housekeeping_task_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<HousekeepingTask>, Integer, Hash)> complete_housekeeping_task_with_http_info(task_id, opts)

```ruby
begin
  # Complete housekeeping task
  data, status_code, headers = api_instance.complete_housekeeping_task_with_http_info(task_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <HousekeepingTask>
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->complete_housekeeping_task_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **task_id** | **String** |  |  |
| **complete_housekeeping_task_request** | [**CompleteHousekeepingTaskRequest**](CompleteHousekeepingTaskRequest.md) |  | [optional] |

### Return type

[**HousekeepingTask**](HousekeepingTask.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## complete_maintenance_request

> <MaintenanceRequest> complete_maintenance_request(request_id, opts)

Complete maintenance request

Mark a maintenance request as completed

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

api_instance = OpenapiClient::OperationsApi.new
request_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
opts = {
  complete_maintenance_request_request: OpenapiClient::CompleteMaintenanceRequestRequest.new # CompleteMaintenanceRequestRequest | 
}

begin
  # Complete maintenance request
  result = api_instance.complete_maintenance_request(request_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->complete_maintenance_request: #{e}"
end
```

#### Using the complete_maintenance_request_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<MaintenanceRequest>, Integer, Hash)> complete_maintenance_request_with_http_info(request_id, opts)

```ruby
begin
  # Complete maintenance request
  data, status_code, headers = api_instance.complete_maintenance_request_with_http_info(request_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <MaintenanceRequest>
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->complete_maintenance_request_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **request_id** | **String** |  |  |
| **complete_maintenance_request_request** | [**CompleteMaintenanceRequestRequest**](CompleteMaintenanceRequestRequest.md) |  | [optional] |

### Return type

[**MaintenanceRequest**](MaintenanceRequest.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## complete_service_request

> <ServiceRequest> complete_service_request(request_id, opts)

Complete service request

Mark a service request as completed

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

api_instance = OpenapiClient::OperationsApi.new
request_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
opts = {
  mark_reservation_no_show_request: OpenapiClient::MarkReservationNoShowRequest.new # MarkReservationNoShowRequest | 
}

begin
  # Complete service request
  result = api_instance.complete_service_request(request_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->complete_service_request: #{e}"
end
```

#### Using the complete_service_request_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ServiceRequest>, Integer, Hash)> complete_service_request_with_http_info(request_id, opts)

```ruby
begin
  # Complete service request
  data, status_code, headers = api_instance.complete_service_request_with_http_info(request_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ServiceRequest>
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->complete_service_request_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **request_id** | **String** |  |  |
| **mark_reservation_no_show_request** | [**MarkReservationNoShowRequest**](MarkReservationNoShowRequest.md) |  | [optional] |

### Return type

[**ServiceRequest**](ServiceRequest.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## complete_training

> <TrainingEnrollment> complete_training(enrollment_id, opts)

Complete training

Mark a training enrollment as completed

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

api_instance = OpenapiClient::OperationsApi.new
enrollment_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
opts = {
  complete_training_request: OpenapiClient::CompleteTrainingRequest.new # CompleteTrainingRequest | 
}

begin
  # Complete training
  result = api_instance.complete_training(enrollment_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->complete_training: #{e}"
end
```

#### Using the complete_training_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<TrainingEnrollment>, Integer, Hash)> complete_training_with_http_info(enrollment_id, opts)

```ruby
begin
  # Complete training
  data, status_code, headers = api_instance.complete_training_with_http_info(enrollment_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <TrainingEnrollment>
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->complete_training_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **enrollment_id** | **String** |  |  |
| **complete_training_request** | [**CompleteTrainingRequest**](CompleteTrainingRequest.md) |  | [optional] |

### Return type

[**TrainingEnrollment**](TrainingEnrollment.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## create_housekeeping_task

> Object create_housekeeping_task(body)

Create housekeeping task

Create a new housekeeping task for room cleaning, inspection, or maintenance preparation

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

api_instance = OpenapiClient::OperationsApi.new
body = { ... } # Object | 

begin
  # Create housekeeping task
  result = api_instance.create_housekeeping_task(body)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->create_housekeeping_task: #{e}"
end
```

#### Using the create_housekeeping_task_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> create_housekeeping_task_with_http_info(body)

```ruby
begin
  # Create housekeeping task
  data, status_code, headers = api_instance.create_housekeeping_task_with_http_info(body)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->create_housekeeping_task_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **body** | **Object** |  |  |

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## create_maintenance_request

> Object create_maintenance_request(body)

Create maintenance request

Create a new maintenance request for repairs, inspections, or preventive maintenance

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

api_instance = OpenapiClient::OperationsApi.new
body = { ... } # Object | 

begin
  # Create maintenance request
  result = api_instance.create_maintenance_request(body)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->create_maintenance_request: #{e}"
end
```

#### Using the create_maintenance_request_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> create_maintenance_request_with_http_info(body)

```ruby
begin
  # Create maintenance request
  data, status_code, headers = api_instance.create_maintenance_request_with_http_info(body)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->create_maintenance_request_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **body** | **Object** |  |  |

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## create_service_request

> Object create_service_request(body)

Create service request

Create a new guest service request for concierge services, amenities, or special accommodations

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

api_instance = OpenapiClient::OperationsApi.new
body = { ... } # Object | 

begin
  # Create service request
  result = api_instance.create_service_request(body)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->create_service_request: #{e}"
end
```

#### Using the create_service_request_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> create_service_request_with_http_info(body)

```ruby
begin
  # Create service request
  data, status_code, headers = api_instance.create_service_request_with_http_info(body)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->create_service_request_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **body** | **Object** |  |  |

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## create_staff_shift

> <StaffShift> create_staff_shift(staff_shift)

Create staff shift

Create a new staff shift

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

api_instance = OpenapiClient::OperationsApi.new
staff_shift = OpenapiClient::StaffShift.new({shift_id: 'shift_id_example', staff_id: 'staff_id_example', property_id: 'property_id_example', shift_date: Date.today, start_time: '09:00:00', end_time: '17:00:00'}) # StaffShift | 

begin
  # Create staff shift
  result = api_instance.create_staff_shift(staff_shift)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->create_staff_shift: #{e}"
end
```

#### Using the create_staff_shift_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<StaffShift>, Integer, Hash)> create_staff_shift_with_http_info(staff_shift)

```ruby
begin
  # Create staff shift
  data, status_code, headers = api_instance.create_staff_shift_with_http_info(staff_shift)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <StaffShift>
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->create_staff_shift_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **staff_shift** | [**StaffShift**](StaffShift.md) |  |  |

### Return type

[**StaffShift**](StaffShift.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## create_training_module

> <TrainingModule> create_training_module(training_module)

Create training module

Create a new training module

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

api_instance = OpenapiClient::OperationsApi.new
training_module = OpenapiClient::TrainingModule.new({module_id: 'module_id_example', title: 'Fire Safety Training', category: 'SAFETY', duration: 60}) # TrainingModule | 

begin
  # Create training module
  result = api_instance.create_training_module(training_module)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->create_training_module: #{e}"
end
```

#### Using the create_training_module_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<TrainingModule>, Integer, Hash)> create_training_module_with_http_info(training_module)

```ruby
begin
  # Create training module
  data, status_code, headers = api_instance.create_training_module_with_http_info(training_module)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <TrainingModule>
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->create_training_module_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **training_module** | [**TrainingModule**](TrainingModule.md) |  |  |

### Return type

[**TrainingModule**](TrainingModule.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## enroll_in_training

> <TrainingEnrollment> enroll_in_training(training_enrollment)

Enroll in training

Enroll a staff member in a training module

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

api_instance = OpenapiClient::OperationsApi.new
training_enrollment = OpenapiClient::TrainingEnrollment.new({enrollment_id: 'enrollment_id_example', module_id: 'module_id_example', staff_id: 'staff_id_example', status: 'ENROLLED'}) # TrainingEnrollment | 

begin
  # Enroll in training
  result = api_instance.enroll_in_training(training_enrollment)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->enroll_in_training: #{e}"
end
```

#### Using the enroll_in_training_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<TrainingEnrollment>, Integer, Hash)> enroll_in_training_with_http_info(training_enrollment)

```ruby
begin
  # Enroll in training
  data, status_code, headers = api_instance.enroll_in_training_with_http_info(training_enrollment)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <TrainingEnrollment>
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->enroll_in_training_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **training_enrollment** | [**TrainingEnrollment**](TrainingEnrollment.md) |  |  |

### Return type

[**TrainingEnrollment**](TrainingEnrollment.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## escalate_service_request

> <ServiceRequest> escalate_service_request(request_id, escalate_service_request_request)

Escalate service request

Escalate a service request to management

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

api_instance = OpenapiClient::OperationsApi.new
request_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
escalate_service_request_request = OpenapiClient::EscalateServiceRequestRequest.new({reason: 'reason_example'}) # EscalateServiceRequestRequest | 

begin
  # Escalate service request
  result = api_instance.escalate_service_request(request_id, escalate_service_request_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->escalate_service_request: #{e}"
end
```

#### Using the escalate_service_request_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ServiceRequest>, Integer, Hash)> escalate_service_request_with_http_info(request_id, escalate_service_request_request)

```ruby
begin
  # Escalate service request
  data, status_code, headers = api_instance.escalate_service_request_with_http_info(request_id, escalate_service_request_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ServiceRequest>
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->escalate_service_request_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **request_id** | **String** |  |  |
| **escalate_service_request_request** | [**EscalateServiceRequestRequest**](EscalateServiceRequestRequest.md) |  |  |

### Return type

[**ServiceRequest**](ServiceRequest.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## fail_housekeeping_task

> <HousekeepingTask> fail_housekeeping_task(task_id, escalate_service_request_request)

Fail housekeeping task

Mark a housekeeping task as failed

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

api_instance = OpenapiClient::OperationsApi.new
task_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
escalate_service_request_request = OpenapiClient::EscalateServiceRequestRequest.new({reason: 'reason_example'}) # EscalateServiceRequestRequest | 

begin
  # Fail housekeeping task
  result = api_instance.fail_housekeeping_task(task_id, escalate_service_request_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->fail_housekeeping_task: #{e}"
end
```

#### Using the fail_housekeeping_task_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<HousekeepingTask>, Integer, Hash)> fail_housekeeping_task_with_http_info(task_id, escalate_service_request_request)

```ruby
begin
  # Fail housekeeping task
  data, status_code, headers = api_instance.fail_housekeeping_task_with_http_info(task_id, escalate_service_request_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <HousekeepingTask>
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->fail_housekeeping_task_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **task_id** | **String** |  |  |
| **escalate_service_request_request** | [**EscalateServiceRequestRequest**](EscalateServiceRequestRequest.md) |  |  |

### Return type

[**HousekeepingTask**](HousekeepingTask.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## get_cleaning_schedule

> <GetCleaningSchedule200Response> get_cleaning_schedule(property_id, opts)

Get cleaning schedule

Retrieve the housekeeping cleaning schedule

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

api_instance = OpenapiClient::OperationsApi.new
property_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
opts = {
  date: Date.parse('2013-10-20') # Date | 
}

begin
  # Get cleaning schedule
  result = api_instance.get_cleaning_schedule(property_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->get_cleaning_schedule: #{e}"
end
```

#### Using the get_cleaning_schedule_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetCleaningSchedule200Response>, Integer, Hash)> get_cleaning_schedule_with_http_info(property_id, opts)

```ruby
begin
  # Get cleaning schedule
  data, status_code, headers = api_instance.get_cleaning_schedule_with_http_info(property_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetCleaningSchedule200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->get_cleaning_schedule_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **property_id** | **String** |  |  |
| **date** | **Date** |  | [optional] |

### Return type

[**GetCleaningSchedule200Response**](GetCleaningSchedule200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## get_incident

> <Incident> get_incident(incident_id)

Get incident details

Retrieve details of a specific incident

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

api_instance = OpenapiClient::OperationsApi.new
incident_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Get incident details
  result = api_instance.get_incident(incident_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->get_incident: #{e}"
end
```

#### Using the get_incident_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Incident>, Integer, Hash)> get_incident_with_http_info(incident_id)

```ruby
begin
  # Get incident details
  data, status_code, headers = api_instance.get_incident_with_http_info(incident_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Incident>
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->get_incident_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **incident_id** | **String** |  |  |

### Return type

[**Incident**](Incident.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## get_maintenance_history

> <GetMaintenanceHistory200Response> get_maintenance_history(request_id)

Get maintenance history

Retrieve maintenance history for a specific request

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

api_instance = OpenapiClient::OperationsApi.new
request_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Get maintenance history
  result = api_instance.get_maintenance_history(request_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->get_maintenance_history: #{e}"
end
```

#### Using the get_maintenance_history_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetMaintenanceHistory200Response>, Integer, Hash)> get_maintenance_history_with_http_info(request_id)

```ruby
begin
  # Get maintenance history
  data, status_code, headers = api_instance.get_maintenance_history_with_http_info(request_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetMaintenanceHistory200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->get_maintenance_history_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **request_id** | **String** |  |  |

### Return type

[**GetMaintenanceHistory200Response**](GetMaintenanceHistory200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## get_staff_performance

> <GetStaffPerformance200Response> get_staff_performance(staff_id, opts)

Get staff performance metrics

Retrieve performance metrics for a staff member

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

api_instance = OpenapiClient::OperationsApi.new
staff_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
opts = {
  start_date: Date.parse('2013-10-20'), # Date | 
  end_date: Date.parse('2013-10-20') # Date | 
}

begin
  # Get staff performance metrics
  result = api_instance.get_staff_performance(staff_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->get_staff_performance: #{e}"
end
```

#### Using the get_staff_performance_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetStaffPerformance200Response>, Integer, Hash)> get_staff_performance_with_http_info(staff_id, opts)

```ruby
begin
  # Get staff performance metrics
  data, status_code, headers = api_instance.get_staff_performance_with_http_info(staff_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetStaffPerformance200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->get_staff_performance_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **staff_id** | **String** |  |  |
| **start_date** | **Date** |  | [optional] |
| **end_date** | **Date** |  | [optional] |

### Return type

[**GetStaffPerformance200Response**](GetStaffPerformance200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## get_training_enrollment

> <TrainingEnrollment> get_training_enrollment(enrollment_id)

Get enrollment details

Retrieve details of a training enrollment

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

api_instance = OpenapiClient::OperationsApi.new
enrollment_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Get enrollment details
  result = api_instance.get_training_enrollment(enrollment_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->get_training_enrollment: #{e}"
end
```

#### Using the get_training_enrollment_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<TrainingEnrollment>, Integer, Hash)> get_training_enrollment_with_http_info(enrollment_id)

```ruby
begin
  # Get enrollment details
  data, status_code, headers = api_instance.get_training_enrollment_with_http_info(enrollment_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <TrainingEnrollment>
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->get_training_enrollment_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **enrollment_id** | **String** |  |  |

### Return type

[**TrainingEnrollment**](TrainingEnrollment.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## get_training_module

> <TrainingModule> get_training_module(module_id)

Get training module details

Retrieve details of a specific training module

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

api_instance = OpenapiClient::OperationsApi.new
module_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Get training module details
  result = api_instance.get_training_module(module_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->get_training_module: #{e}"
end
```

#### Using the get_training_module_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<TrainingModule>, Integer, Hash)> get_training_module_with_http_info(module_id)

```ruby
begin
  # Get training module details
  data, status_code, headers = api_instance.get_training_module_with_http_info(module_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <TrainingModule>
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->get_training_module_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **module_id** | **String** |  |  |

### Return type

[**TrainingModule**](TrainingModule.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## list_housekeeping_tasks

> <GetGuestStays200Response> list_housekeeping_tasks(opts)

List housekeeping tasks

List all housekeeping tasks with filtering by property, status, assignment, and date range

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

api_instance = OpenapiClient::OperationsApi.new
opts = {
  property_id: '38400000-8cf0-11bd-b23e-10b96e4ef00d', # String | 
  status: 'PENDING', # String | 
  assigned_to: '38400000-8cf0-11bd-b23e-10b96e4ef00d', # String | 
  page_size: 56, # Integer | Number of items per page (max 100)
  cursor: 'cursor_example' # String | Cursor for pagination (opaque token)
}

begin
  # List housekeeping tasks
  result = api_instance.list_housekeeping_tasks(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->list_housekeeping_tasks: #{e}"
end
```

#### Using the list_housekeeping_tasks_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetGuestStays200Response>, Integer, Hash)> list_housekeeping_tasks_with_http_info(opts)

```ruby
begin
  # List housekeeping tasks
  data, status_code, headers = api_instance.list_housekeeping_tasks_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetGuestStays200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->list_housekeeping_tasks_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **property_id** | **String** |  | [optional] |
| **status** | **String** |  | [optional] |
| **assigned_to** | **String** |  | [optional] |
| **page_size** | **Integer** | Number of items per page (max 100) | [optional][default to 20] |
| **cursor** | **String** | Cursor for pagination (opaque token) | [optional] |

### Return type

[**GetGuestStays200Response**](GetGuestStays200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## list_incidents

> <ListIncidents200Response> list_incidents(opts)

List incidents

Retrieve all incidents with filtering

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

api_instance = OpenapiClient::OperationsApi.new
opts = {
  property_id: '38400000-8cf0-11bd-b23e-10b96e4ef00d', # String | 
  severity: 'LOW', # String | 
  status: 'OPEN', # String | 
  page_size: 56, # Integer | Number of items per page (max 100)
  cursor: 'cursor_example' # String | Cursor for pagination (opaque token)
}

begin
  # List incidents
  result = api_instance.list_incidents(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->list_incidents: #{e}"
end
```

#### Using the list_incidents_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListIncidents200Response>, Integer, Hash)> list_incidents_with_http_info(opts)

```ruby
begin
  # List incidents
  data, status_code, headers = api_instance.list_incidents_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListIncidents200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->list_incidents_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **property_id** | **String** |  | [optional] |
| **severity** | **String** |  | [optional] |
| **status** | **String** |  | [optional] |
| **page_size** | **Integer** | Number of items per page (max 100) | [optional][default to 20] |
| **cursor** | **String** | Cursor for pagination (opaque token) | [optional] |

### Return type

[**ListIncidents200Response**](ListIncidents200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## list_maintenance_requests

> <GetGuestStays200Response> list_maintenance_requests(opts)

List maintenance requests

List all maintenance requests with filtering by property, priority, status, and category

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

api_instance = OpenapiClient::OperationsApi.new
opts = {
  property_id: '38400000-8cf0-11bd-b23e-10b96e4ef00d', # String | 
  status: 'status_example', # String | 
  priority: 'LOW', # String | 
  page_size: 56, # Integer | Number of items per page (max 100)
  cursor: 'cursor_example' # String | Cursor for pagination (opaque token)
}

begin
  # List maintenance requests
  result = api_instance.list_maintenance_requests(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->list_maintenance_requests: #{e}"
end
```

#### Using the list_maintenance_requests_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetGuestStays200Response>, Integer, Hash)> list_maintenance_requests_with_http_info(opts)

```ruby
begin
  # List maintenance requests
  data, status_code, headers = api_instance.list_maintenance_requests_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetGuestStays200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->list_maintenance_requests_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **property_id** | **String** |  | [optional] |
| **status** | **String** |  | [optional] |
| **priority** | **String** |  | [optional] |
| **page_size** | **Integer** | Number of items per page (max 100) | [optional][default to 20] |
| **cursor** | **String** | Cursor for pagination (opaque token) | [optional] |

### Return type

[**GetGuestStays200Response**](GetGuestStays200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## list_service_requests

> <GetGuestStays200Response> list_service_requests(opts)

List service requests

List all guest service requests with filtering by property, guest, status, and request type

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

api_instance = OpenapiClient::OperationsApi.new
opts = {
  property_id: '38400000-8cf0-11bd-b23e-10b96e4ef00d', # String | 
  status: 'status_example', # String | 
  page_size: 56, # Integer | Number of items per page (max 100)
  cursor: 'cursor_example' # String | Cursor for pagination (opaque token)
}

begin
  # List service requests
  result = api_instance.list_service_requests(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->list_service_requests: #{e}"
end
```

#### Using the list_service_requests_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetGuestStays200Response>, Integer, Hash)> list_service_requests_with_http_info(opts)

```ruby
begin
  # List service requests
  data, status_code, headers = api_instance.list_service_requests_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetGuestStays200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->list_service_requests_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **property_id** | **String** |  | [optional] |
| **status** | **String** |  | [optional] |
| **page_size** | **Integer** | Number of items per page (max 100) | [optional][default to 20] |
| **cursor** | **String** | Cursor for pagination (opaque token) | [optional] |

### Return type

[**GetGuestStays200Response**](GetGuestStays200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## list_staff_shifts

> <ListStaffShifts200Response> list_staff_shifts(opts)

List staff shifts

Retrieve all staff shifts with filtering

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

api_instance = OpenapiClient::OperationsApi.new
opts = {
  staff_id: '38400000-8cf0-11bd-b23e-10b96e4ef00d', # String | 
  date: Date.parse('2013-10-20'), # Date | 
  page_size: 56, # Integer | Number of items per page (max 100)
  cursor: 'cursor_example' # String | Cursor for pagination (opaque token)
}

begin
  # List staff shifts
  result = api_instance.list_staff_shifts(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->list_staff_shifts: #{e}"
end
```

#### Using the list_staff_shifts_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListStaffShifts200Response>, Integer, Hash)> list_staff_shifts_with_http_info(opts)

```ruby
begin
  # List staff shifts
  data, status_code, headers = api_instance.list_staff_shifts_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListStaffShifts200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->list_staff_shifts_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **staff_id** | **String** |  | [optional] |
| **date** | **Date** |  | [optional] |
| **page_size** | **Integer** | Number of items per page (max 100) | [optional][default to 20] |
| **cursor** | **String** | Cursor for pagination (opaque token) | [optional] |

### Return type

[**ListStaffShifts200Response**](ListStaffShifts200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## list_training_modules

> <ListTrainingModules200Response> list_training_modules(opts)

List training modules

Retrieve all training modules

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

api_instance = OpenapiClient::OperationsApi.new
opts = {
  page_size: 56, # Integer | Number of items per page (max 100)
  cursor: 'cursor_example' # String | Cursor for pagination (opaque token)
}

begin
  # List training modules
  result = api_instance.list_training_modules(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->list_training_modules: #{e}"
end
```

#### Using the list_training_modules_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListTrainingModules200Response>, Integer, Hash)> list_training_modules_with_http_info(opts)

```ruby
begin
  # List training modules
  data, status_code, headers = api_instance.list_training_modules_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListTrainingModules200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->list_training_modules_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page_size** | **Integer** | Number of items per page (max 100) | [optional][default to 20] |
| **cursor** | **String** | Cursor for pagination (opaque token) | [optional] |

### Return type

[**ListTrainingModules200Response**](ListTrainingModules200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## replace_housekeeping_task

> Object replace_housekeeping_task(task_id, body, opts)

Replace housekeeping task (full update)

Replace housekeeping task with complete new task details including assignment, priority, and status

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

api_instance = OpenapiClient::OperationsApi.new
task_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
body = { ... } # Object | 
opts = {
  if_match: 'if_match_example' # String | ETag for optimistic locking
}

begin
  # Replace housekeeping task (full update)
  result = api_instance.replace_housekeeping_task(task_id, body, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->replace_housekeeping_task: #{e}"
end
```

#### Using the replace_housekeeping_task_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> replace_housekeeping_task_with_http_info(task_id, body, opts)

```ruby
begin
  # Replace housekeeping task (full update)
  data, status_code, headers = api_instance.replace_housekeeping_task_with_http_info(task_id, body, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->replace_housekeeping_task_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **task_id** | **String** |  |  |
| **body** | **Object** |  |  |
| **if_match** | **String** | ETag for optimistic locking | [optional] |

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## replace_incident

> <Incident> replace_incident(incident_id, incident, opts)

Replace incident (full update)

Replace incident with complete new details

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

api_instance = OpenapiClient::OperationsApi.new
incident_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
incident = OpenapiClient::Incident.new({incident_id: 'incident_id_example', property_id: 'property_id_example', type: 'SAFETY', severity: 'MINOR', status: 'REPORTED'}) # Incident | 
opts = {
  if_match: 'if_match_example' # String | ETag for optimistic locking
}

begin
  # Replace incident (full update)
  result = api_instance.replace_incident(incident_id, incident, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->replace_incident: #{e}"
end
```

#### Using the replace_incident_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Incident>, Integer, Hash)> replace_incident_with_http_info(incident_id, incident, opts)

```ruby
begin
  # Replace incident (full update)
  data, status_code, headers = api_instance.replace_incident_with_http_info(incident_id, incident, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Incident>
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->replace_incident_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **incident_id** | **String** |  |  |
| **incident** | [**Incident**](Incident.md) |  |  |
| **if_match** | **String** | ETag for optimistic locking | [optional] |

### Return type

[**Incident**](Incident.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## replace_maintenance_request

> Object replace_maintenance_request(request_id, body, opts)

Replace maintenance request (full update)

Replace maintenance request with complete new request details including priority, assignment, and scheduling

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

api_instance = OpenapiClient::OperationsApi.new
request_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
body = { ... } # Object | 
opts = {
  if_match: 'if_match_example' # String | ETag for optimistic locking
}

begin
  # Replace maintenance request (full update)
  result = api_instance.replace_maintenance_request(request_id, body, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->replace_maintenance_request: #{e}"
end
```

#### Using the replace_maintenance_request_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> replace_maintenance_request_with_http_info(request_id, body, opts)

```ruby
begin
  # Replace maintenance request (full update)
  data, status_code, headers = api_instance.replace_maintenance_request_with_http_info(request_id, body, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->replace_maintenance_request_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **request_id** | **String** |  |  |
| **body** | **Object** |  |  |
| **if_match** | **String** | ETag for optimistic locking | [optional] |

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## replace_service_request

> Object replace_service_request(request_id, body, opts)

Replace service request (full update)

Replace service request with complete new request details including type, priority, and fulfillment status

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

api_instance = OpenapiClient::OperationsApi.new
request_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
body = { ... } # Object | 
opts = {
  if_match: 'if_match_example' # String | ETag for optimistic locking
}

begin
  # Replace service request (full update)
  result = api_instance.replace_service_request(request_id, body, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->replace_service_request: #{e}"
end
```

#### Using the replace_service_request_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> replace_service_request_with_http_info(request_id, body, opts)

```ruby
begin
  # Replace service request (full update)
  data, status_code, headers = api_instance.replace_service_request_with_http_info(request_id, body, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->replace_service_request_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **request_id** | **String** |  |  |
| **body** | **Object** |  |  |
| **if_match** | **String** | ETag for optimistic locking | [optional] |

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## report_incident

> <Incident> report_incident(incident)

Report incident

Report a new incident

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

api_instance = OpenapiClient::OperationsApi.new
incident = OpenapiClient::Incident.new({incident_id: 'incident_id_example', property_id: 'property_id_example', type: 'SAFETY', severity: 'MINOR', status: 'REPORTED'}) # Incident | 

begin
  # Report incident
  result = api_instance.report_incident(incident)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->report_incident: #{e}"
end
```

#### Using the report_incident_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Incident>, Integer, Hash)> report_incident_with_http_info(incident)

```ruby
begin
  # Report incident
  data, status_code, headers = api_instance.report_incident_with_http_info(incident)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Incident>
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->report_incident_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **incident** | [**Incident**](Incident.md) |  |  |

### Return type

[**Incident**](Incident.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## start_housekeeping_task

> <HousekeepingTask> start_housekeeping_task(task_id)

Start housekeeping task

Mark a housekeeping task as started

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

api_instance = OpenapiClient::OperationsApi.new
task_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Start housekeeping task
  result = api_instance.start_housekeeping_task(task_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->start_housekeeping_task: #{e}"
end
```

#### Using the start_housekeeping_task_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<HousekeepingTask>, Integer, Hash)> start_housekeeping_task_with_http_info(task_id)

```ruby
begin
  # Start housekeeping task
  data, status_code, headers = api_instance.start_housekeeping_task_with_http_info(task_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <HousekeepingTask>
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->start_housekeeping_task_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **task_id** | **String** |  |  |

### Return type

[**HousekeepingTask**](HousekeepingTask.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## update_housekeeping_task

> Object update_housekeeping_task(task_id, body, opts)

Update housekeeping task (partial update)

Update specific fields of a housekeeping task.  **Common use cases:** - Change task status - Update priority - Assign to different staff - Add notes 

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

api_instance = OpenapiClient::OperationsApi.new
task_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
body = { ... } # Object | 
opts = {
  if_match: 'if_match_example' # String | ETag for optimistic locking
}

begin
  # Update housekeeping task (partial update)
  result = api_instance.update_housekeeping_task(task_id, body, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->update_housekeeping_task: #{e}"
end
```

#### Using the update_housekeeping_task_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> update_housekeeping_task_with_http_info(task_id, body, opts)

```ruby
begin
  # Update housekeeping task (partial update)
  data, status_code, headers = api_instance.update_housekeeping_task_with_http_info(task_id, body, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->update_housekeeping_task_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **task_id** | **String** |  |  |
| **body** | **Object** |  |  |
| **if_match** | **String** | ETag for optimistic locking | [optional] |

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## update_maintenance_request

> Object update_maintenance_request(request_id, body, opts)

Update maintenance request (partial update)

Update specific fields of a maintenance request.  **Common use cases:** - Update request status - Change priority - Add resolution notes - Update estimated completion 

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

api_instance = OpenapiClient::OperationsApi.new
request_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
body = { ... } # Object | 
opts = {
  if_match: 'if_match_example' # String | ETag for optimistic locking
}

begin
  # Update maintenance request (partial update)
  result = api_instance.update_maintenance_request(request_id, body, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->update_maintenance_request: #{e}"
end
```

#### Using the update_maintenance_request_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> update_maintenance_request_with_http_info(request_id, body, opts)

```ruby
begin
  # Update maintenance request (partial update)
  data, status_code, headers = api_instance.update_maintenance_request_with_http_info(request_id, body, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->update_maintenance_request_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **request_id** | **String** |  |  |
| **body** | **Object** |  |  |
| **if_match** | **String** | ETag for optimistic locking | [optional] |

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## update_service_request

> Object update_service_request(request_id, body, opts)

Update service request (partial update)

Update specific fields of a service request.  **Common use cases:** - Update request status - Change priority (e.g., VIP guest) - Add fulfillment notes - Update delivery time 

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

api_instance = OpenapiClient::OperationsApi.new
request_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
body = { ... } # Object | 
opts = {
  if_match: 'if_match_example' # String | ETag for optimistic locking
}

begin
  # Update service request (partial update)
  result = api_instance.update_service_request(request_id, body, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->update_service_request: #{e}"
end
```

#### Using the update_service_request_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> update_service_request_with_http_info(request_id, body, opts)

```ruby
begin
  # Update service request (partial update)
  data, status_code, headers = api_instance.update_service_request_with_http_info(request_id, body, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->update_service_request_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **request_id** | **String** |  |  |
| **body** | **Object** |  |  |
| **if_match** | **String** | ETag for optimistic locking | [optional] |

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## verify_housekeeping_task

> <HousekeepingTask> verify_housekeeping_task(task_id, opts)

Verify housekeeping task

Verify completion of a housekeeping task

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

api_instance = OpenapiClient::OperationsApi.new
task_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
opts = {
  verify_housekeeping_task_request: OpenapiClient::VerifyHousekeepingTaskRequest.new # VerifyHousekeepingTaskRequest | 
}

begin
  # Verify housekeeping task
  result = api_instance.verify_housekeeping_task(task_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->verify_housekeeping_task: #{e}"
end
```

#### Using the verify_housekeeping_task_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<HousekeepingTask>, Integer, Hash)> verify_housekeeping_task_with_http_info(task_id, opts)

```ruby
begin
  # Verify housekeeping task
  data, status_code, headers = api_instance.verify_housekeeping_task_with_http_info(task_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <HousekeepingTask>
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->verify_housekeeping_task_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **task_id** | **String** |  |  |
| **verify_housekeeping_task_request** | [**VerifyHousekeepingTaskRequest**](VerifyHousekeepingTaskRequest.md) |  | [optional] |

### Return type

[**HousekeepingTask**](HousekeepingTask.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## verify_maintenance_request

> <MaintenanceRequest> verify_maintenance_request(request_id, opts)

Verify maintenance completion

Verify that maintenance work has been completed satisfactorily

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

api_instance = OpenapiClient::OperationsApi.new
request_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
opts = {
  verify_housekeeping_task_request: OpenapiClient::VerifyHousekeepingTaskRequest.new # VerifyHousekeepingTaskRequest | 
}

begin
  # Verify maintenance completion
  result = api_instance.verify_maintenance_request(request_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->verify_maintenance_request: #{e}"
end
```

#### Using the verify_maintenance_request_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<MaintenanceRequest>, Integer, Hash)> verify_maintenance_request_with_http_info(request_id, opts)

```ruby
begin
  # Verify maintenance completion
  data, status_code, headers = api_instance.verify_maintenance_request_with_http_info(request_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <MaintenanceRequest>
rescue OpenapiClient::ApiError => e
  puts "Error when calling OperationsApi->verify_maintenance_request_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **request_id** | **String** |  |  |
| **verify_housekeeping_task_request** | [**VerifyHousekeepingTaskRequest**](VerifyHousekeepingTaskRequest.md) |  | [optional] |

### Return type

[**MaintenanceRequest**](MaintenanceRequest.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

