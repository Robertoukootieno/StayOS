# OpenAPI\Client\OperationsApi

Housekeeping, maintenance, and service request operations

All URIs are relative to https://api.stayos.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**acknowledgeServiceRequest()**](OperationsApi.md#acknowledgeServiceRequest) | **POST** /service-requests/{requestId}/acknowledge | Acknowledge service request |
| [**addIncidentAction()**](OperationsApi.md#addIncidentAction) | **POST** /incidents/{incidentId}/actions | Add incident action |
| [**assignHousekeepingTask()**](OperationsApi.md#assignHousekeepingTask) | **POST** /housekeeping/tasks/{taskId}/assign | Assign housekeeping task |
| [**assignMaintenanceRequest()**](OperationsApi.md#assignMaintenanceRequest) | **POST** /maintenance/requests/{requestId}/assign | Assign maintenance request |
| [**assignServiceRequest()**](OperationsApi.md#assignServiceRequest) | **POST** /service-requests/{requestId}/assign | Assign service request |
| [**cancelServiceRequest()**](OperationsApi.md#cancelServiceRequest) | **POST** /service-requests/{requestId}/cancel | Cancel service request |
| [**clockInShift()**](OperationsApi.md#clockInShift) | **POST** /staff/shifts/{shiftId}/clock-in | Clock in for shift |
| [**clockOutShift()**](OperationsApi.md#clockOutShift) | **POST** /staff/shifts/{shiftId}/clock-out | Clock out from shift |
| [**closeIncident()**](OperationsApi.md#closeIncident) | **POST** /incidents/{incidentId}/close | Close incident |
| [**completeHousekeepingTask()**](OperationsApi.md#completeHousekeepingTask) | **POST** /housekeeping/tasks/{taskId}/complete | Complete housekeeping task |
| [**completeMaintenanceRequest()**](OperationsApi.md#completeMaintenanceRequest) | **POST** /maintenance/requests/{requestId}/complete | Complete maintenance request |
| [**completeServiceRequest()**](OperationsApi.md#completeServiceRequest) | **POST** /service-requests/{requestId}/complete | Complete service request |
| [**completeTraining()**](OperationsApi.md#completeTraining) | **POST** /training/enrollments/{enrollmentId}/complete | Complete training |
| [**createHousekeepingTask()**](OperationsApi.md#createHousekeepingTask) | **POST** /housekeeping/tasks | Create housekeeping task |
| [**createMaintenanceRequest()**](OperationsApi.md#createMaintenanceRequest) | **POST** /maintenance/requests | Create maintenance request |
| [**createServiceRequest()**](OperationsApi.md#createServiceRequest) | **POST** /service-requests | Create service request |
| [**createStaffShift()**](OperationsApi.md#createStaffShift) | **POST** /staff/shifts | Create staff shift |
| [**createTrainingModule()**](OperationsApi.md#createTrainingModule) | **POST** /training/modules | Create training module |
| [**enrollInTraining()**](OperationsApi.md#enrollInTraining) | **POST** /training/enrollments | Enroll in training |
| [**escalateServiceRequest()**](OperationsApi.md#escalateServiceRequest) | **POST** /service-requests/{requestId}/escalate | Escalate service request |
| [**failHousekeepingTask()**](OperationsApi.md#failHousekeepingTask) | **POST** /housekeeping/tasks/{taskId}/fail | Fail housekeeping task |
| [**getCleaningSchedule()**](OperationsApi.md#getCleaningSchedule) | **GET** /housekeeping/schedule | Get cleaning schedule |
| [**getIncident()**](OperationsApi.md#getIncident) | **GET** /incidents/{incidentId} | Get incident details |
| [**getMaintenanceHistory()**](OperationsApi.md#getMaintenanceHistory) | **GET** /maintenance/requests/{requestId}/history | Get maintenance history |
| [**getStaffPerformance()**](OperationsApi.md#getStaffPerformance) | **GET** /staff/{staffId}/performance | Get staff performance metrics |
| [**getTrainingEnrollment()**](OperationsApi.md#getTrainingEnrollment) | **GET** /training/enrollments/{enrollmentId} | Get enrollment details |
| [**getTrainingModule()**](OperationsApi.md#getTrainingModule) | **GET** /training/modules/{moduleId} | Get training module details |
| [**listHousekeepingTasks()**](OperationsApi.md#listHousekeepingTasks) | **GET** /housekeeping/tasks | List housekeeping tasks |
| [**listIncidents()**](OperationsApi.md#listIncidents) | **GET** /incidents | List incidents |
| [**listMaintenanceRequests()**](OperationsApi.md#listMaintenanceRequests) | **GET** /maintenance/requests | List maintenance requests |
| [**listServiceRequests()**](OperationsApi.md#listServiceRequests) | **GET** /service-requests | List service requests |
| [**listStaffShifts()**](OperationsApi.md#listStaffShifts) | **GET** /staff/shifts | List staff shifts |
| [**listTrainingModules()**](OperationsApi.md#listTrainingModules) | **GET** /training/modules | List training modules |
| [**replaceHousekeepingTask()**](OperationsApi.md#replaceHousekeepingTask) | **PUT** /housekeeping/tasks/{taskId} | Replace housekeeping task (full update) |
| [**replaceIncident()**](OperationsApi.md#replaceIncident) | **PUT** /incidents/{incidentId} | Replace incident (full update) |
| [**replaceMaintenanceRequest()**](OperationsApi.md#replaceMaintenanceRequest) | **PUT** /maintenance/requests/{requestId} | Replace maintenance request (full update) |
| [**replaceServiceRequest()**](OperationsApi.md#replaceServiceRequest) | **PUT** /service-requests/{requestId} | Replace service request (full update) |
| [**reportIncident()**](OperationsApi.md#reportIncident) | **POST** /incidents | Report incident |
| [**startHousekeepingTask()**](OperationsApi.md#startHousekeepingTask) | **POST** /housekeeping/tasks/{taskId}/start | Start housekeeping task |
| [**updateHousekeepingTask()**](OperationsApi.md#updateHousekeepingTask) | **PATCH** /housekeeping/tasks/{taskId} | Update housekeeping task (partial update) |
| [**updateMaintenanceRequest()**](OperationsApi.md#updateMaintenanceRequest) | **PATCH** /maintenance/requests/{requestId} | Update maintenance request (partial update) |
| [**updateServiceRequest()**](OperationsApi.md#updateServiceRequest) | **PATCH** /service-requests/{requestId} | Update service request (partial update) |
| [**verifyHousekeepingTask()**](OperationsApi.md#verifyHousekeepingTask) | **POST** /housekeeping/tasks/{taskId}/verify | Verify housekeeping task |
| [**verifyMaintenanceRequest()**](OperationsApi.md#verifyMaintenanceRequest) | **POST** /maintenance/requests/{requestId}/verify | Verify maintenance completion |


## `acknowledgeServiceRequest()`

```php
acknowledgeServiceRequest($request_id): \OpenAPI\Client\Model\ServiceRequest
```

Acknowledge service request

Acknowledge receipt of a service request

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$request_id = 'request_id_example'; // string

try {
    $result = $apiInstance->acknowledgeServiceRequest($request_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->acknowledgeServiceRequest: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **request_id** | **string**|  | |

### Return type

[**\OpenAPI\Client\Model\ServiceRequest**](../Model/ServiceRequest.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `addIncidentAction()`

```php
addIncidentAction($incident_id, $add_incident_action_request): \OpenAPI\Client\Model\Incident
```

Add incident action

Add a corrective action to an incident

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$incident_id = 'incident_id_example'; // string
$add_incident_action_request = new \OpenAPI\Client\Model\AddIncidentActionRequest(); // \OpenAPI\Client\Model\AddIncidentActionRequest

try {
    $result = $apiInstance->addIncidentAction($incident_id, $add_incident_action_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->addIncidentAction: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **incident_id** | **string**|  | |
| **add_incident_action_request** | [**\OpenAPI\Client\Model\AddIncidentActionRequest**](../Model/AddIncidentActionRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\Incident**](../Model/Incident.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `assignHousekeepingTask()`

```php
assignHousekeepingTask($task_id, $assign_housekeeping_task_request): \OpenAPI\Client\Model\HousekeepingTask
```

Assign housekeeping task

Assign a housekeeping task to a staff member

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = 'task_id_example'; // string
$assign_housekeeping_task_request = new \OpenAPI\Client\Model\AssignHousekeepingTaskRequest(); // \OpenAPI\Client\Model\AssignHousekeepingTaskRequest

try {
    $result = $apiInstance->assignHousekeepingTask($task_id, $assign_housekeeping_task_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->assignHousekeepingTask: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **task_id** | **string**|  | |
| **assign_housekeeping_task_request** | [**\OpenAPI\Client\Model\AssignHousekeepingTaskRequest**](../Model/AssignHousekeepingTaskRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\HousekeepingTask**](../Model/HousekeepingTask.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `assignMaintenanceRequest()`

```php
assignMaintenanceRequest($request_id, $assign_maintenance_request_request): \OpenAPI\Client\Model\MaintenanceRequest
```

Assign maintenance request

Assign a maintenance request to a technician

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$request_id = 'request_id_example'; // string
$assign_maintenance_request_request = new \OpenAPI\Client\Model\AssignMaintenanceRequestRequest(); // \OpenAPI\Client\Model\AssignMaintenanceRequestRequest

try {
    $result = $apiInstance->assignMaintenanceRequest($request_id, $assign_maintenance_request_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->assignMaintenanceRequest: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **request_id** | **string**|  | |
| **assign_maintenance_request_request** | [**\OpenAPI\Client\Model\AssignMaintenanceRequestRequest**](../Model/AssignMaintenanceRequestRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\MaintenanceRequest**](../Model/MaintenanceRequest.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `assignServiceRequest()`

```php
assignServiceRequest($request_id, $assign_service_request_request): \OpenAPI\Client\Model\ServiceRequest
```

Assign service request

Assign a service request to a staff member

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$request_id = 'request_id_example'; // string
$assign_service_request_request = new \OpenAPI\Client\Model\AssignServiceRequestRequest(); // \OpenAPI\Client\Model\AssignServiceRequestRequest

try {
    $result = $apiInstance->assignServiceRequest($request_id, $assign_service_request_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->assignServiceRequest: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **request_id** | **string**|  | |
| **assign_service_request_request** | [**\OpenAPI\Client\Model\AssignServiceRequestRequest**](../Model/AssignServiceRequestRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\ServiceRequest**](../Model/ServiceRequest.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `cancelServiceRequest()`

```php
cancelServiceRequest($request_id, $cancel_service_request_request): \OpenAPI\Client\Model\ServiceRequest
```

Cancel service request

Cancel a service request

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$request_id = 'request_id_example'; // string
$cancel_service_request_request = new \OpenAPI\Client\Model\CancelServiceRequestRequest(); // \OpenAPI\Client\Model\CancelServiceRequestRequest

try {
    $result = $apiInstance->cancelServiceRequest($request_id, $cancel_service_request_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->cancelServiceRequest: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **request_id** | **string**|  | |
| **cancel_service_request_request** | [**\OpenAPI\Client\Model\CancelServiceRequestRequest**](../Model/CancelServiceRequestRequest.md)|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\ServiceRequest**](../Model/ServiceRequest.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `clockInShift()`

```php
clockInShift($shift_id): \OpenAPI\Client\Model\StaffShift
```

Clock in for shift

Record staff clock-in time

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$shift_id = 'shift_id_example'; // string

try {
    $result = $apiInstance->clockInShift($shift_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->clockInShift: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **shift_id** | **string**|  | |

### Return type

[**\OpenAPI\Client\Model\StaffShift**](../Model/StaffShift.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `clockOutShift()`

```php
clockOutShift($shift_id): \OpenAPI\Client\Model\StaffShift
```

Clock out from shift

Record staff clock-out time

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$shift_id = 'shift_id_example'; // string

try {
    $result = $apiInstance->clockOutShift($shift_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->clockOutShift: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **shift_id** | **string**|  | |

### Return type

[**\OpenAPI\Client\Model\StaffShift**](../Model/StaffShift.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `closeIncident()`

```php
closeIncident($incident_id, $close_incident_request): \OpenAPI\Client\Model\Incident
```

Close incident

Close an incident after resolution

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$incident_id = 'incident_id_example'; // string
$close_incident_request = new \OpenAPI\Client\Model\CloseIncidentRequest(); // \OpenAPI\Client\Model\CloseIncidentRequest

try {
    $result = $apiInstance->closeIncident($incident_id, $close_incident_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->closeIncident: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **incident_id** | **string**|  | |
| **close_incident_request** | [**\OpenAPI\Client\Model\CloseIncidentRequest**](../Model/CloseIncidentRequest.md)|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\Incident**](../Model/Incident.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `completeHousekeepingTask()`

```php
completeHousekeepingTask($task_id, $complete_housekeeping_task_request): \OpenAPI\Client\Model\HousekeepingTask
```

Complete housekeeping task

Mark a housekeeping task as completed

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = 'task_id_example'; // string
$complete_housekeeping_task_request = new \OpenAPI\Client\Model\CompleteHousekeepingTaskRequest(); // \OpenAPI\Client\Model\CompleteHousekeepingTaskRequest

try {
    $result = $apiInstance->completeHousekeepingTask($task_id, $complete_housekeeping_task_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->completeHousekeepingTask: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **task_id** | **string**|  | |
| **complete_housekeeping_task_request** | [**\OpenAPI\Client\Model\CompleteHousekeepingTaskRequest**](../Model/CompleteHousekeepingTaskRequest.md)|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\HousekeepingTask**](../Model/HousekeepingTask.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `completeMaintenanceRequest()`

```php
completeMaintenanceRequest($request_id, $complete_maintenance_request_request): \OpenAPI\Client\Model\MaintenanceRequest
```

Complete maintenance request

Mark a maintenance request as completed

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$request_id = 'request_id_example'; // string
$complete_maintenance_request_request = new \OpenAPI\Client\Model\CompleteMaintenanceRequestRequest(); // \OpenAPI\Client\Model\CompleteMaintenanceRequestRequest

try {
    $result = $apiInstance->completeMaintenanceRequest($request_id, $complete_maintenance_request_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->completeMaintenanceRequest: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **request_id** | **string**|  | |
| **complete_maintenance_request_request** | [**\OpenAPI\Client\Model\CompleteMaintenanceRequestRequest**](../Model/CompleteMaintenanceRequestRequest.md)|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\MaintenanceRequest**](../Model/MaintenanceRequest.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `completeServiceRequest()`

```php
completeServiceRequest($request_id, $mark_reservation_no_show_request): \OpenAPI\Client\Model\ServiceRequest
```

Complete service request

Mark a service request as completed

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$request_id = 'request_id_example'; // string
$mark_reservation_no_show_request = new \OpenAPI\Client\Model\MarkReservationNoShowRequest(); // \OpenAPI\Client\Model\MarkReservationNoShowRequest

try {
    $result = $apiInstance->completeServiceRequest($request_id, $mark_reservation_no_show_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->completeServiceRequest: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **request_id** | **string**|  | |
| **mark_reservation_no_show_request** | [**\OpenAPI\Client\Model\MarkReservationNoShowRequest**](../Model/MarkReservationNoShowRequest.md)|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\ServiceRequest**](../Model/ServiceRequest.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `completeTraining()`

```php
completeTraining($enrollment_id, $complete_training_request): \OpenAPI\Client\Model\TrainingEnrollment
```

Complete training

Mark a training enrollment as completed

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$enrollment_id = 'enrollment_id_example'; // string
$complete_training_request = new \OpenAPI\Client\Model\CompleteTrainingRequest(); // \OpenAPI\Client\Model\CompleteTrainingRequest

try {
    $result = $apiInstance->completeTraining($enrollment_id, $complete_training_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->completeTraining: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **enrollment_id** | **string**|  | |
| **complete_training_request** | [**\OpenAPI\Client\Model\CompleteTrainingRequest**](../Model/CompleteTrainingRequest.md)|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\TrainingEnrollment**](../Model/TrainingEnrollment.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createHousekeepingTask()`

```php
createHousekeepingTask($body): object
```

Create housekeeping task

Create a new housekeeping task for room cleaning, inspection, or maintenance preparation

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$body = array('key' => new \stdClass); // object

try {
    $result = $apiInstance->createHousekeepingTask($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->createHousekeepingTask: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **object**|  | |

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

## `createMaintenanceRequest()`

```php
createMaintenanceRequest($body): object
```

Create maintenance request

Create a new maintenance request for repairs, inspections, or preventive maintenance

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$body = array('key' => new \stdClass); // object

try {
    $result = $apiInstance->createMaintenanceRequest($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->createMaintenanceRequest: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **object**|  | |

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

## `createServiceRequest()`

```php
createServiceRequest($body): object
```

Create service request

Create a new guest service request for concierge services, amenities, or special accommodations

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$body = array('key' => new \stdClass); // object

try {
    $result = $apiInstance->createServiceRequest($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->createServiceRequest: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **object**|  | |

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

## `createStaffShift()`

```php
createStaffShift($staff_shift): \OpenAPI\Client\Model\StaffShift
```

Create staff shift

Create a new staff shift

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$staff_shift = new \OpenAPI\Client\Model\StaffShift(); // \OpenAPI\Client\Model\StaffShift

try {
    $result = $apiInstance->createStaffShift($staff_shift);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->createStaffShift: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **staff_shift** | [**\OpenAPI\Client\Model\StaffShift**](../Model/StaffShift.md)|  | |

### Return type

[**\OpenAPI\Client\Model\StaffShift**](../Model/StaffShift.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createTrainingModule()`

```php
createTrainingModule($training_module): \OpenAPI\Client\Model\TrainingModule
```

Create training module

Create a new training module

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$training_module = new \OpenAPI\Client\Model\TrainingModule(); // \OpenAPI\Client\Model\TrainingModule

try {
    $result = $apiInstance->createTrainingModule($training_module);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->createTrainingModule: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **training_module** | [**\OpenAPI\Client\Model\TrainingModule**](../Model/TrainingModule.md)|  | |

### Return type

[**\OpenAPI\Client\Model\TrainingModule**](../Model/TrainingModule.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `enrollInTraining()`

```php
enrollInTraining($training_enrollment): \OpenAPI\Client\Model\TrainingEnrollment
```

Enroll in training

Enroll a staff member in a training module

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$training_enrollment = new \OpenAPI\Client\Model\TrainingEnrollment(); // \OpenAPI\Client\Model\TrainingEnrollment

try {
    $result = $apiInstance->enrollInTraining($training_enrollment);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->enrollInTraining: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **training_enrollment** | [**\OpenAPI\Client\Model\TrainingEnrollment**](../Model/TrainingEnrollment.md)|  | |

### Return type

[**\OpenAPI\Client\Model\TrainingEnrollment**](../Model/TrainingEnrollment.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `escalateServiceRequest()`

```php
escalateServiceRequest($request_id, $escalate_service_request_request): \OpenAPI\Client\Model\ServiceRequest
```

Escalate service request

Escalate a service request to management

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$request_id = 'request_id_example'; // string
$escalate_service_request_request = new \OpenAPI\Client\Model\EscalateServiceRequestRequest(); // \OpenAPI\Client\Model\EscalateServiceRequestRequest

try {
    $result = $apiInstance->escalateServiceRequest($request_id, $escalate_service_request_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->escalateServiceRequest: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **request_id** | **string**|  | |
| **escalate_service_request_request** | [**\OpenAPI\Client\Model\EscalateServiceRequestRequest**](../Model/EscalateServiceRequestRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\ServiceRequest**](../Model/ServiceRequest.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `failHousekeepingTask()`

```php
failHousekeepingTask($task_id, $escalate_service_request_request): \OpenAPI\Client\Model\HousekeepingTask
```

Fail housekeeping task

Mark a housekeeping task as failed

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = 'task_id_example'; // string
$escalate_service_request_request = new \OpenAPI\Client\Model\EscalateServiceRequestRequest(); // \OpenAPI\Client\Model\EscalateServiceRequestRequest

try {
    $result = $apiInstance->failHousekeepingTask($task_id, $escalate_service_request_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->failHousekeepingTask: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **task_id** | **string**|  | |
| **escalate_service_request_request** | [**\OpenAPI\Client\Model\EscalateServiceRequestRequest**](../Model/EscalateServiceRequestRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\HousekeepingTask**](../Model/HousekeepingTask.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getCleaningSchedule()`

```php
getCleaningSchedule($property_id, $date): \OpenAPI\Client\Model\GetCleaningSchedule200Response
```

Get cleaning schedule

Retrieve the housekeeping cleaning schedule

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$property_id = 'property_id_example'; // string
$date = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime

try {
    $result = $apiInstance->getCleaningSchedule($property_id, $date);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->getCleaningSchedule: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **property_id** | **string**|  | |
| **date** | **\DateTime**|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\GetCleaningSchedule200Response**](../Model/GetCleaningSchedule200Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getIncident()`

```php
getIncident($incident_id): \OpenAPI\Client\Model\Incident
```

Get incident details

Retrieve details of a specific incident

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$incident_id = 'incident_id_example'; // string

try {
    $result = $apiInstance->getIncident($incident_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->getIncident: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **incident_id** | **string**|  | |

### Return type

[**\OpenAPI\Client\Model\Incident**](../Model/Incident.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getMaintenanceHistory()`

```php
getMaintenanceHistory($request_id): \OpenAPI\Client\Model\GetMaintenanceHistory200Response
```

Get maintenance history

Retrieve maintenance history for a specific request

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$request_id = 'request_id_example'; // string

try {
    $result = $apiInstance->getMaintenanceHistory($request_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->getMaintenanceHistory: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **request_id** | **string**|  | |

### Return type

[**\OpenAPI\Client\Model\GetMaintenanceHistory200Response**](../Model/GetMaintenanceHistory200Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getStaffPerformance()`

```php
getStaffPerformance($staff_id, $start_date, $end_date): \OpenAPI\Client\Model\GetStaffPerformance200Response
```

Get staff performance metrics

Retrieve performance metrics for a staff member

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$staff_id = 'staff_id_example'; // string
$start_date = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime
$end_date = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime

try {
    $result = $apiInstance->getStaffPerformance($staff_id, $start_date, $end_date);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->getStaffPerformance: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **staff_id** | **string**|  | |
| **start_date** | **\DateTime**|  | [optional] |
| **end_date** | **\DateTime**|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\GetStaffPerformance200Response**](../Model/GetStaffPerformance200Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getTrainingEnrollment()`

```php
getTrainingEnrollment($enrollment_id): \OpenAPI\Client\Model\TrainingEnrollment
```

Get enrollment details

Retrieve details of a training enrollment

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$enrollment_id = 'enrollment_id_example'; // string

try {
    $result = $apiInstance->getTrainingEnrollment($enrollment_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->getTrainingEnrollment: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **enrollment_id** | **string**|  | |

### Return type

[**\OpenAPI\Client\Model\TrainingEnrollment**](../Model/TrainingEnrollment.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getTrainingModule()`

```php
getTrainingModule($module_id): \OpenAPI\Client\Model\TrainingModule
```

Get training module details

Retrieve details of a specific training module

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$module_id = 'module_id_example'; // string

try {
    $result = $apiInstance->getTrainingModule($module_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->getTrainingModule: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **module_id** | **string**|  | |

### Return type

[**\OpenAPI\Client\Model\TrainingModule**](../Model/TrainingModule.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listHousekeepingTasks()`

```php
listHousekeepingTasks($property_id, $status, $assigned_to, $page_size, $cursor): \OpenAPI\Client\Model\GetGuestStays200Response
```

List housekeeping tasks

List all housekeeping tasks with filtering by property, status, assignment, and date range

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$property_id = 'property_id_example'; // string
$status = 'status_example'; // string
$assigned_to = 'assigned_to_example'; // string
$page_size = 20; // int | Number of items per page (max 100)
$cursor = 'cursor_example'; // string | Cursor for pagination (opaque token)

try {
    $result = $apiInstance->listHousekeepingTasks($property_id, $status, $assigned_to, $page_size, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->listHousekeepingTasks: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **property_id** | **string**|  | [optional] |
| **status** | **string**|  | [optional] |
| **assigned_to** | **string**|  | [optional] |
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

## `listIncidents()`

```php
listIncidents($property_id, $severity, $status, $page_size, $cursor): \OpenAPI\Client\Model\ListIncidents200Response
```

List incidents

Retrieve all incidents with filtering

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$property_id = 'property_id_example'; // string
$severity = 'severity_example'; // string
$status = 'status_example'; // string
$page_size = 20; // int | Number of items per page (max 100)
$cursor = 'cursor_example'; // string | Cursor for pagination (opaque token)

try {
    $result = $apiInstance->listIncidents($property_id, $severity, $status, $page_size, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->listIncidents: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **property_id** | **string**|  | [optional] |
| **severity** | **string**|  | [optional] |
| **status** | **string**|  | [optional] |
| **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **string**| Cursor for pagination (opaque token) | [optional] |

### Return type

[**\OpenAPI\Client\Model\ListIncidents200Response**](../Model/ListIncidents200Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listMaintenanceRequests()`

```php
listMaintenanceRequests($property_id, $status, $priority, $page_size, $cursor): \OpenAPI\Client\Model\GetGuestStays200Response
```

List maintenance requests

List all maintenance requests with filtering by property, priority, status, and category

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$property_id = 'property_id_example'; // string
$status = 'status_example'; // string
$priority = 'priority_example'; // string
$page_size = 20; // int | Number of items per page (max 100)
$cursor = 'cursor_example'; // string | Cursor for pagination (opaque token)

try {
    $result = $apiInstance->listMaintenanceRequests($property_id, $status, $priority, $page_size, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->listMaintenanceRequests: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **property_id** | **string**|  | [optional] |
| **status** | **string**|  | [optional] |
| **priority** | **string**|  | [optional] |
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

## `listServiceRequests()`

```php
listServiceRequests($property_id, $status, $page_size, $cursor): \OpenAPI\Client\Model\GetGuestStays200Response
```

List service requests

List all guest service requests with filtering by property, guest, status, and request type

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$property_id = 'property_id_example'; // string
$status = 'status_example'; // string
$page_size = 20; // int | Number of items per page (max 100)
$cursor = 'cursor_example'; // string | Cursor for pagination (opaque token)

try {
    $result = $apiInstance->listServiceRequests($property_id, $status, $page_size, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->listServiceRequests: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **property_id** | **string**|  | [optional] |
| **status** | **string**|  | [optional] |
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

## `listStaffShifts()`

```php
listStaffShifts($staff_id, $date, $page_size, $cursor): \OpenAPI\Client\Model\ListStaffShifts200Response
```

List staff shifts

Retrieve all staff shifts with filtering

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$staff_id = 'staff_id_example'; // string
$date = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime
$page_size = 20; // int | Number of items per page (max 100)
$cursor = 'cursor_example'; // string | Cursor for pagination (opaque token)

try {
    $result = $apiInstance->listStaffShifts($staff_id, $date, $page_size, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->listStaffShifts: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **staff_id** | **string**|  | [optional] |
| **date** | **\DateTime**|  | [optional] |
| **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **string**| Cursor for pagination (opaque token) | [optional] |

### Return type

[**\OpenAPI\Client\Model\ListStaffShifts200Response**](../Model/ListStaffShifts200Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listTrainingModules()`

```php
listTrainingModules($page_size, $cursor): \OpenAPI\Client\Model\ListTrainingModules200Response
```

List training modules

Retrieve all training modules

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$page_size = 20; // int | Number of items per page (max 100)
$cursor = 'cursor_example'; // string | Cursor for pagination (opaque token)

try {
    $result = $apiInstance->listTrainingModules($page_size, $cursor);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->listTrainingModules: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **page_size** | **int**| Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **string**| Cursor for pagination (opaque token) | [optional] |

### Return type

[**\OpenAPI\Client\Model\ListTrainingModules200Response**](../Model/ListTrainingModules200Response.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `replaceHousekeepingTask()`

```php
replaceHousekeepingTask($task_id, $body, $if_match): object
```

Replace housekeeping task (full update)

Replace housekeeping task with complete new task details including assignment, priority, and status

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = 'task_id_example'; // string
$body = array('key' => new \stdClass); // object
$if_match = 'if_match_example'; // string | ETag for optimistic locking

try {
    $result = $apiInstance->replaceHousekeepingTask($task_id, $body, $if_match);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->replaceHousekeepingTask: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **task_id** | **string**|  | |
| **body** | **object**|  | |
| **if_match** | **string**| ETag for optimistic locking | [optional] |

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

## `replaceIncident()`

```php
replaceIncident($incident_id, $incident, $if_match): \OpenAPI\Client\Model\Incident
```

Replace incident (full update)

Replace incident with complete new details

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$incident_id = 'incident_id_example'; // string
$incident = new \OpenAPI\Client\Model\Incident(); // \OpenAPI\Client\Model\Incident
$if_match = 'if_match_example'; // string | ETag for optimistic locking

try {
    $result = $apiInstance->replaceIncident($incident_id, $incident, $if_match);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->replaceIncident: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **incident_id** | **string**|  | |
| **incident** | [**\OpenAPI\Client\Model\Incident**](../Model/Incident.md)|  | |
| **if_match** | **string**| ETag for optimistic locking | [optional] |

### Return type

[**\OpenAPI\Client\Model\Incident**](../Model/Incident.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `replaceMaintenanceRequest()`

```php
replaceMaintenanceRequest($request_id, $body, $if_match): object
```

Replace maintenance request (full update)

Replace maintenance request with complete new request details including priority, assignment, and scheduling

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$request_id = 'request_id_example'; // string
$body = array('key' => new \stdClass); // object
$if_match = 'if_match_example'; // string | ETag for optimistic locking

try {
    $result = $apiInstance->replaceMaintenanceRequest($request_id, $body, $if_match);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->replaceMaintenanceRequest: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **request_id** | **string**|  | |
| **body** | **object**|  | |
| **if_match** | **string**| ETag for optimistic locking | [optional] |

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

## `replaceServiceRequest()`

```php
replaceServiceRequest($request_id, $body, $if_match): object
```

Replace service request (full update)

Replace service request with complete new request details including type, priority, and fulfillment status

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$request_id = 'request_id_example'; // string
$body = array('key' => new \stdClass); // object
$if_match = 'if_match_example'; // string | ETag for optimistic locking

try {
    $result = $apiInstance->replaceServiceRequest($request_id, $body, $if_match);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->replaceServiceRequest: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **request_id** | **string**|  | |
| **body** | **object**|  | |
| **if_match** | **string**| ETag for optimistic locking | [optional] |

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

## `reportIncident()`

```php
reportIncident($incident): \OpenAPI\Client\Model\Incident
```

Report incident

Report a new incident

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$incident = new \OpenAPI\Client\Model\Incident(); // \OpenAPI\Client\Model\Incident

try {
    $result = $apiInstance->reportIncident($incident);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->reportIncident: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **incident** | [**\OpenAPI\Client\Model\Incident**](../Model/Incident.md)|  | |

### Return type

[**\OpenAPI\Client\Model\Incident**](../Model/Incident.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `startHousekeepingTask()`

```php
startHousekeepingTask($task_id): \OpenAPI\Client\Model\HousekeepingTask
```

Start housekeeping task

Mark a housekeeping task as started

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = 'task_id_example'; // string

try {
    $result = $apiInstance->startHousekeepingTask($task_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->startHousekeepingTask: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **task_id** | **string**|  | |

### Return type

[**\OpenAPI\Client\Model\HousekeepingTask**](../Model/HousekeepingTask.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateHousekeepingTask()`

```php
updateHousekeepingTask($task_id, $body, $if_match): object
```

Update housekeeping task (partial update)

Update specific fields of a housekeeping task.  **Common use cases:** - Change task status - Update priority - Assign to different staff - Add notes

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = 'task_id_example'; // string
$body = {"status":"IN_PROGRESS","assignedTo":"staff_123","priority":"HIGH"}; // object
$if_match = 'if_match_example'; // string | ETag for optimistic locking

try {
    $result = $apiInstance->updateHousekeepingTask($task_id, $body, $if_match);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->updateHousekeepingTask: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **task_id** | **string**|  | |
| **body** | **object**|  | |
| **if_match** | **string**| ETag for optimistic locking | [optional] |

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

## `updateMaintenanceRequest()`

```php
updateMaintenanceRequest($request_id, $body, $if_match): object
```

Update maintenance request (partial update)

Update specific fields of a maintenance request.  **Common use cases:** - Update request status - Change priority - Add resolution notes - Update estimated completion

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$request_id = 'request_id_example'; // string
$body = {"status":"IN_PROGRESS","priority":"URGENT","notes":"Plumber dispatched"}; // object
$if_match = 'if_match_example'; // string | ETag for optimistic locking

try {
    $result = $apiInstance->updateMaintenanceRequest($request_id, $body, $if_match);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->updateMaintenanceRequest: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **request_id** | **string**|  | |
| **body** | **object**|  | |
| **if_match** | **string**| ETag for optimistic locking | [optional] |

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

## `updateServiceRequest()`

```php
updateServiceRequest($request_id, $body, $if_match): object
```

Update service request (partial update)

Update specific fields of a service request.  **Common use cases:** - Update request status - Change priority (e.g., VIP guest) - Add fulfillment notes - Update delivery time

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$request_id = 'request_id_example'; // string
$body = {"priority":"HIGH","notes":"Guest is VIP - expedite","status":"IN_PROGRESS"}; // object
$if_match = 'if_match_example'; // string | ETag for optimistic locking

try {
    $result = $apiInstance->updateServiceRequest($request_id, $body, $if_match);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->updateServiceRequest: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **request_id** | **string**|  | |
| **body** | **object**|  | |
| **if_match** | **string**| ETag for optimistic locking | [optional] |

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

## `verifyHousekeepingTask()`

```php
verifyHousekeepingTask($task_id, $verify_housekeeping_task_request): \OpenAPI\Client\Model\HousekeepingTask
```

Verify housekeeping task

Verify completion of a housekeeping task

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$task_id = 'task_id_example'; // string
$verify_housekeeping_task_request = new \OpenAPI\Client\Model\VerifyHousekeepingTaskRequest(); // \OpenAPI\Client\Model\VerifyHousekeepingTaskRequest

try {
    $result = $apiInstance->verifyHousekeepingTask($task_id, $verify_housekeeping_task_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->verifyHousekeepingTask: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **task_id** | **string**|  | |
| **verify_housekeeping_task_request** | [**\OpenAPI\Client\Model\VerifyHousekeepingTaskRequest**](../Model/VerifyHousekeepingTaskRequest.md)|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\HousekeepingTask**](../Model/HousekeepingTask.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `verifyMaintenanceRequest()`

```php
verifyMaintenanceRequest($request_id, $verify_housekeeping_task_request): \OpenAPI\Client\Model\MaintenanceRequest
```

Verify maintenance completion

Verify that maintenance work has been completed satisfactorily

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\OperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$request_id = 'request_id_example'; // string
$verify_housekeeping_task_request = new \OpenAPI\Client\Model\VerifyHousekeepingTaskRequest(); // \OpenAPI\Client\Model\VerifyHousekeepingTaskRequest

try {
    $result = $apiInstance->verifyMaintenanceRequest($request_id, $verify_housekeeping_task_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OperationsApi->verifyMaintenanceRequest: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **request_id** | **string**|  | |
| **verify_housekeeping_task_request** | [**\OpenAPI\Client\Model\VerifyHousekeepingTaskRequest**](../Model/VerifyHousekeepingTaskRequest.md)|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\MaintenanceRequest**](../Model/MaintenanceRequest.md)

### Authorization

[OAuth2](../../README.md#OAuth2), [OAuth2](../../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
