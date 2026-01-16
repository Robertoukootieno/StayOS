# OperationsApi

All URIs are relative to *https://api.stayos.com/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**acknowledgeServiceRequest**](#acknowledgeservicerequest) | **POST** /service-requests/{requestId}/acknowledge | Acknowledge service request|
|[**addIncidentAction**](#addincidentaction) | **POST** /incidents/{incidentId}/actions | Add incident action|
|[**assignHousekeepingTask**](#assignhousekeepingtask) | **POST** /housekeeping/tasks/{taskId}/assign | Assign housekeeping task|
|[**assignMaintenanceRequest**](#assignmaintenancerequest) | **POST** /maintenance/requests/{requestId}/assign | Assign maintenance request|
|[**assignServiceRequest**](#assignservicerequest) | **POST** /service-requests/{requestId}/assign | Assign service request|
|[**cancelServiceRequest**](#cancelservicerequest) | **POST** /service-requests/{requestId}/cancel | Cancel service request|
|[**clockInShift**](#clockinshift) | **POST** /staff/shifts/{shiftId}/clock-in | Clock in for shift|
|[**clockOutShift**](#clockoutshift) | **POST** /staff/shifts/{shiftId}/clock-out | Clock out from shift|
|[**closeIncident**](#closeincident) | **POST** /incidents/{incidentId}/close | Close incident|
|[**completeHousekeepingTask**](#completehousekeepingtask) | **POST** /housekeeping/tasks/{taskId}/complete | Complete housekeeping task|
|[**completeMaintenanceRequest**](#completemaintenancerequest) | **POST** /maintenance/requests/{requestId}/complete | Complete maintenance request|
|[**completeServiceRequest**](#completeservicerequest) | **POST** /service-requests/{requestId}/complete | Complete service request|
|[**completeTraining**](#completetraining) | **POST** /training/enrollments/{enrollmentId}/complete | Complete training|
|[**createHousekeepingTask**](#createhousekeepingtask) | **POST** /housekeeping/tasks | Create housekeeping task|
|[**createMaintenanceRequest**](#createmaintenancerequest) | **POST** /maintenance/requests | Create maintenance request|
|[**createServiceRequest**](#createservicerequest) | **POST** /service-requests | Create service request|
|[**createStaffShift**](#createstaffshift) | **POST** /staff/shifts | Create staff shift|
|[**createTrainingModule**](#createtrainingmodule) | **POST** /training/modules | Create training module|
|[**enrollInTraining**](#enrollintraining) | **POST** /training/enrollments | Enroll in training|
|[**escalateServiceRequest**](#escalateservicerequest) | **POST** /service-requests/{requestId}/escalate | Escalate service request|
|[**failHousekeepingTask**](#failhousekeepingtask) | **POST** /housekeeping/tasks/{taskId}/fail | Fail housekeeping task|
|[**getCleaningSchedule**](#getcleaningschedule) | **GET** /housekeeping/schedule | Get cleaning schedule|
|[**getIncident**](#getincident) | **GET** /incidents/{incidentId} | Get incident details|
|[**getMaintenanceHistory**](#getmaintenancehistory) | **GET** /maintenance/requests/{requestId}/history | Get maintenance history|
|[**getStaffPerformance**](#getstaffperformance) | **GET** /staff/{staffId}/performance | Get staff performance metrics|
|[**getTrainingEnrollment**](#gettrainingenrollment) | **GET** /training/enrollments/{enrollmentId} | Get enrollment details|
|[**getTrainingModule**](#gettrainingmodule) | **GET** /training/modules/{moduleId} | Get training module details|
|[**listHousekeepingTasks**](#listhousekeepingtasks) | **GET** /housekeeping/tasks | List housekeeping tasks|
|[**listIncidents**](#listincidents) | **GET** /incidents | List incidents|
|[**listMaintenanceRequests**](#listmaintenancerequests) | **GET** /maintenance/requests | List maintenance requests|
|[**listServiceRequests**](#listservicerequests) | **GET** /service-requests | List service requests|
|[**listStaffShifts**](#liststaffshifts) | **GET** /staff/shifts | List staff shifts|
|[**listTrainingModules**](#listtrainingmodules) | **GET** /training/modules | List training modules|
|[**replaceHousekeepingTask**](#replacehousekeepingtask) | **PUT** /housekeeping/tasks/{taskId} | Replace housekeeping task (full update)|
|[**replaceIncident**](#replaceincident) | **PUT** /incidents/{incidentId} | Replace incident (full update)|
|[**replaceMaintenanceRequest**](#replacemaintenancerequest) | **PUT** /maintenance/requests/{requestId} | Replace maintenance request (full update)|
|[**replaceServiceRequest**](#replaceservicerequest) | **PUT** /service-requests/{requestId} | Replace service request (full update)|
|[**reportIncident**](#reportincident) | **POST** /incidents | Report incident|
|[**startHousekeepingTask**](#starthousekeepingtask) | **POST** /housekeeping/tasks/{taskId}/start | Start housekeeping task|
|[**updateHousekeepingTask**](#updatehousekeepingtask) | **PATCH** /housekeeping/tasks/{taskId} | Update housekeeping task (partial update)|
|[**updateMaintenanceRequest**](#updatemaintenancerequest) | **PATCH** /maintenance/requests/{requestId} | Update maintenance request (partial update)|
|[**updateServiceRequest**](#updateservicerequest) | **PATCH** /service-requests/{requestId} | Update service request (partial update)|
|[**verifyHousekeepingTask**](#verifyhousekeepingtask) | **POST** /housekeeping/tasks/{taskId}/verify | Verify housekeeping task|
|[**verifyMaintenanceRequest**](#verifymaintenancerequest) | **POST** /maintenance/requests/{requestId}/verify | Verify maintenance completion|

# **acknowledgeServiceRequest**
> ServiceRequest acknowledgeServiceRequest()

Acknowledge receipt of a service request

### Example

```typescript
import {
    OperationsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let requestId: string; // (default to undefined)

const { status, data } = await apiInstance.acknowledgeServiceRequest(
    requestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestId** | [**string**] |  | defaults to undefined|


### Return type

**ServiceRequest**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Request acknowledged |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addIncidentAction**
> Incident addIncidentAction(addIncidentActionRequest)

Add a corrective action to an incident

### Example

```typescript
import {
    OperationsApi,
    Configuration,
    AddIncidentActionRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let incidentId: string; // (default to undefined)
let addIncidentActionRequest: AddIncidentActionRequest; //

const { status, data } = await apiInstance.addIncidentAction(
    incidentId,
    addIncidentActionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addIncidentActionRequest** | **AddIncidentActionRequest**|  | |
| **incidentId** | [**string**] |  | defaults to undefined|


### Return type

**Incident**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Action added |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assignHousekeepingTask**
> HousekeepingTask assignHousekeepingTask(assignHousekeepingTaskRequest)

Assign a housekeeping task to a staff member

### Example

```typescript
import {
    OperationsApi,
    Configuration,
    AssignHousekeepingTaskRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let taskId: string; // (default to undefined)
let assignHousekeepingTaskRequest: AssignHousekeepingTaskRequest; //

const { status, data } = await apiInstance.assignHousekeepingTask(
    taskId,
    assignHousekeepingTaskRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assignHousekeepingTaskRequest** | **AssignHousekeepingTaskRequest**|  | |
| **taskId** | [**string**] |  | defaults to undefined|


### Return type

**HousekeepingTask**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Task assigned |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assignMaintenanceRequest**
> MaintenanceRequest assignMaintenanceRequest(assignMaintenanceRequestRequest)

Assign a maintenance request to a technician

### Example

```typescript
import {
    OperationsApi,
    Configuration,
    AssignMaintenanceRequestRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let requestId: string; // (default to undefined)
let assignMaintenanceRequestRequest: AssignMaintenanceRequestRequest; //

const { status, data } = await apiInstance.assignMaintenanceRequest(
    requestId,
    assignMaintenanceRequestRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assignMaintenanceRequestRequest** | **AssignMaintenanceRequestRequest**|  | |
| **requestId** | [**string**] |  | defaults to undefined|


### Return type

**MaintenanceRequest**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Request assigned |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assignServiceRequest**
> ServiceRequest assignServiceRequest(assignServiceRequestRequest)

Assign a service request to a staff member

### Example

```typescript
import {
    OperationsApi,
    Configuration,
    AssignServiceRequestRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let requestId: string; // (default to undefined)
let assignServiceRequestRequest: AssignServiceRequestRequest; //

const { status, data } = await apiInstance.assignServiceRequest(
    requestId,
    assignServiceRequestRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assignServiceRequestRequest** | **AssignServiceRequestRequest**|  | |
| **requestId** | [**string**] |  | defaults to undefined|


### Return type

**ServiceRequest**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Request assigned |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cancelServiceRequest**
> ServiceRequest cancelServiceRequest()

Cancel a service request

### Example

```typescript
import {
    OperationsApi,
    Configuration,
    CancelServiceRequestRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let requestId: string; // (default to undefined)
let cancelServiceRequestRequest: CancelServiceRequestRequest; // (optional)

const { status, data } = await apiInstance.cancelServiceRequest(
    requestId,
    cancelServiceRequestRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cancelServiceRequestRequest** | **CancelServiceRequestRequest**|  | |
| **requestId** | [**string**] |  | defaults to undefined|


### Return type

**ServiceRequest**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Request cancelled |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clockInShift**
> StaffShift clockInShift()

Record staff clock-in time

### Example

```typescript
import {
    OperationsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let shiftId: string; // (default to undefined)

const { status, data } = await apiInstance.clockInShift(
    shiftId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shiftId** | [**string**] |  | defaults to undefined|


### Return type

**StaffShift**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Clocked in successfully |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clockOutShift**
> StaffShift clockOutShift()

Record staff clock-out time

### Example

```typescript
import {
    OperationsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let shiftId: string; // (default to undefined)

const { status, data } = await apiInstance.clockOutShift(
    shiftId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shiftId** | [**string**] |  | defaults to undefined|


### Return type

**StaffShift**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Clocked out successfully |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **closeIncident**
> Incident closeIncident()

Close an incident after resolution

### Example

```typescript
import {
    OperationsApi,
    Configuration,
    CloseIncidentRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let incidentId: string; // (default to undefined)
let closeIncidentRequest: CloseIncidentRequest; // (optional)

const { status, data } = await apiInstance.closeIncident(
    incidentId,
    closeIncidentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **closeIncidentRequest** | **CloseIncidentRequest**|  | |
| **incidentId** | [**string**] |  | defaults to undefined|


### Return type

**Incident**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Incident closed |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **completeHousekeepingTask**
> HousekeepingTask completeHousekeepingTask()

Mark a housekeeping task as completed

### Example

```typescript
import {
    OperationsApi,
    Configuration,
    CompleteHousekeepingTaskRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let taskId: string; // (default to undefined)
let completeHousekeepingTaskRequest: CompleteHousekeepingTaskRequest; // (optional)

const { status, data } = await apiInstance.completeHousekeepingTask(
    taskId,
    completeHousekeepingTaskRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **completeHousekeepingTaskRequest** | **CompleteHousekeepingTaskRequest**|  | |
| **taskId** | [**string**] |  | defaults to undefined|


### Return type

**HousekeepingTask**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Task completed |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **completeMaintenanceRequest**
> MaintenanceRequest completeMaintenanceRequest()

Mark a maintenance request as completed

### Example

```typescript
import {
    OperationsApi,
    Configuration,
    CompleteMaintenanceRequestRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let requestId: string; // (default to undefined)
let completeMaintenanceRequestRequest: CompleteMaintenanceRequestRequest; // (optional)

const { status, data } = await apiInstance.completeMaintenanceRequest(
    requestId,
    completeMaintenanceRequestRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **completeMaintenanceRequestRequest** | **CompleteMaintenanceRequestRequest**|  | |
| **requestId** | [**string**] |  | defaults to undefined|


### Return type

**MaintenanceRequest**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Request completed |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **completeServiceRequest**
> ServiceRequest completeServiceRequest()

Mark a service request as completed

### Example

```typescript
import {
    OperationsApi,
    Configuration,
    MarkReservationNoShowRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let requestId: string; // (default to undefined)
let markReservationNoShowRequest: MarkReservationNoShowRequest; // (optional)

const { status, data } = await apiInstance.completeServiceRequest(
    requestId,
    markReservationNoShowRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **markReservationNoShowRequest** | **MarkReservationNoShowRequest**|  | |
| **requestId** | [**string**] |  | defaults to undefined|


### Return type

**ServiceRequest**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Request completed |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **completeTraining**
> TrainingEnrollment completeTraining()

Mark a training enrollment as completed

### Example

```typescript
import {
    OperationsApi,
    Configuration,
    CompleteTrainingRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let enrollmentId: string; // (default to undefined)
let completeTrainingRequest: CompleteTrainingRequest; // (optional)

const { status, data } = await apiInstance.completeTraining(
    enrollmentId,
    completeTrainingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **completeTrainingRequest** | **CompleteTrainingRequest**|  | |
| **enrollmentId** | [**string**] |  | defaults to undefined|


### Return type

**TrainingEnrollment**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Training completed |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createHousekeepingTask**
> object createHousekeepingTask(body)

Create a new housekeeping task for room cleaning, inspection, or maintenance preparation

### Example

```typescript
import {
    OperationsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let body: object; //

const { status, data } = await apiInstance.createHousekeepingTask(
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
|**201** | Task created |  * Location -  <br>  |
|**400** | Bad request - validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createMaintenanceRequest**
> object createMaintenanceRequest(body)

Create a new maintenance request for repairs, inspections, or preventive maintenance

### Example

```typescript
import {
    OperationsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let body: object; //

const { status, data } = await apiInstance.createMaintenanceRequest(
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
|**201** | Request created |  * Location -  <br>  |
|**400** | Bad request - validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createServiceRequest**
> object createServiceRequest(body)

Create a new guest service request for concierge services, amenities, or special accommodations

### Example

```typescript
import {
    OperationsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let body: object; //

const { status, data } = await apiInstance.createServiceRequest(
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
|**201** | Request created |  * Location -  <br>  |
|**400** | Bad request - validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createStaffShift**
> StaffShift createStaffShift(staffShift)

Create a new staff shift

### Example

```typescript
import {
    OperationsApi,
    Configuration,
    StaffShift
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let staffShift: StaffShift; //

const { status, data } = await apiInstance.createStaffShift(
    staffShift
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **staffShift** | **StaffShift**|  | |


### Return type

**StaffShift**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Shift created |  * Location -  <br>  |
|**400** | Bad request - validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createTrainingModule**
> TrainingModule createTrainingModule(trainingModule)

Create a new training module

### Example

```typescript
import {
    OperationsApi,
    Configuration,
    TrainingModule
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let trainingModule: TrainingModule; //

const { status, data } = await apiInstance.createTrainingModule(
    trainingModule
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **trainingModule** | **TrainingModule**|  | |


### Return type

**TrainingModule**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Module created |  * Location -  <br>  |
|**400** | Bad request - validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enrollInTraining**
> TrainingEnrollment enrollInTraining(trainingEnrollment)

Enroll a staff member in a training module

### Example

```typescript
import {
    OperationsApi,
    Configuration,
    TrainingEnrollment
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let trainingEnrollment: TrainingEnrollment; //

const { status, data } = await apiInstance.enrollInTraining(
    trainingEnrollment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **trainingEnrollment** | **TrainingEnrollment**|  | |


### Return type

**TrainingEnrollment**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Enrollment created |  * Location -  <br>  |
|**400** | Bad request - validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **escalateServiceRequest**
> ServiceRequest escalateServiceRequest(escalateServiceRequestRequest)

Escalate a service request to management

### Example

```typescript
import {
    OperationsApi,
    Configuration,
    EscalateServiceRequestRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let requestId: string; // (default to undefined)
let escalateServiceRequestRequest: EscalateServiceRequestRequest; //

const { status, data } = await apiInstance.escalateServiceRequest(
    requestId,
    escalateServiceRequestRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **escalateServiceRequestRequest** | **EscalateServiceRequestRequest**|  | |
| **requestId** | [**string**] |  | defaults to undefined|


### Return type

**ServiceRequest**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Request escalated |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **failHousekeepingTask**
> HousekeepingTask failHousekeepingTask(escalateServiceRequestRequest)

Mark a housekeeping task as failed

### Example

```typescript
import {
    OperationsApi,
    Configuration,
    EscalateServiceRequestRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let taskId: string; // (default to undefined)
let escalateServiceRequestRequest: EscalateServiceRequestRequest; //

const { status, data } = await apiInstance.failHousekeepingTask(
    taskId,
    escalateServiceRequestRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **escalateServiceRequestRequest** | **EscalateServiceRequestRequest**|  | |
| **taskId** | [**string**] |  | defaults to undefined|


### Return type

**HousekeepingTask**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Task marked as failed |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCleaningSchedule**
> GetCleaningSchedule200Response getCleaningSchedule()

Retrieve the housekeeping cleaning schedule

### Example

```typescript
import {
    OperationsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let propertyId: string; // (default to undefined)
let date: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getCleaningSchedule(
    propertyId,
    date
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **propertyId** | [**string**] |  | defaults to undefined|
| **date** | [**string**] |  | (optional) defaults to undefined|


### Return type

**GetCleaningSchedule200Response**

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

# **getIncident**
> Incident getIncident()

Retrieve details of a specific incident

### Example

```typescript
import {
    OperationsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let incidentId: string; // (default to undefined)

const { status, data } = await apiInstance.getIncident(
    incidentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **incidentId** | [**string**] |  | defaults to undefined|


### Return type

**Incident**

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

# **getMaintenanceHistory**
> GetMaintenanceHistory200Response getMaintenanceHistory()

Retrieve maintenance history for a specific request

### Example

```typescript
import {
    OperationsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let requestId: string; // (default to undefined)

const { status, data } = await apiInstance.getMaintenanceHistory(
    requestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestId** | [**string**] |  | defaults to undefined|


### Return type

**GetMaintenanceHistory200Response**

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

# **getStaffPerformance**
> GetStaffPerformance200Response getStaffPerformance()

Retrieve performance metrics for a staff member

### Example

```typescript
import {
    OperationsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let staffId: string; // (default to undefined)
let startDate: string; // (optional) (default to undefined)
let endDate: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getStaffPerformance(
    staffId,
    startDate,
    endDate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **staffId** | [**string**] |  | defaults to undefined|
| **startDate** | [**string**] |  | (optional) defaults to undefined|
| **endDate** | [**string**] |  | (optional) defaults to undefined|


### Return type

**GetStaffPerformance200Response**

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

# **getTrainingEnrollment**
> TrainingEnrollment getTrainingEnrollment()

Retrieve details of a training enrollment

### Example

```typescript
import {
    OperationsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let enrollmentId: string; // (default to undefined)

const { status, data } = await apiInstance.getTrainingEnrollment(
    enrollmentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **enrollmentId** | [**string**] |  | defaults to undefined|


### Return type

**TrainingEnrollment**

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

# **getTrainingModule**
> TrainingModule getTrainingModule()

Retrieve details of a specific training module

### Example

```typescript
import {
    OperationsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let moduleId: string; // (default to undefined)

const { status, data } = await apiInstance.getTrainingModule(
    moduleId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **moduleId** | [**string**] |  | defaults to undefined|


### Return type

**TrainingModule**

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

# **listHousekeepingTasks**
> GetGuestStays200Response listHousekeepingTasks()

List all housekeeping tasks with filtering by property, status, assignment, and date range

### Example

```typescript
import {
    OperationsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let propertyId: string; // (optional) (default to undefined)
let status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED'; // (optional) (default to undefined)
let assignedTo: string; // (optional) (default to undefined)
let pageSize: number; //Number of items per page (max 100) (optional) (default to 20)
let cursor: string; //Cursor for pagination (opaque token) (optional) (default to undefined)

const { status, data } = await apiInstance.listHousekeepingTasks(
    propertyId,
    status,
    assignedTo,
    pageSize,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **propertyId** | [**string**] |  | (optional) defaults to undefined|
| **status** | [**&#39;PENDING&#39; | &#39;IN_PROGRESS&#39; | &#39;COMPLETED&#39; | &#39;CANCELLED&#39;**]**Array<&#39;PENDING&#39; &#124; &#39;IN_PROGRESS&#39; &#124; &#39;COMPLETED&#39; &#124; &#39;CANCELLED&#39;>** |  | (optional) defaults to undefined|
| **assignedTo** | [**string**] |  | (optional) defaults to undefined|
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

# **listIncidents**
> ListIncidents200Response listIncidents()

Retrieve all incidents with filtering

### Example

```typescript
import {
    OperationsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let propertyId: string; // (optional) (default to undefined)
let severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'; // (optional) (default to undefined)
let status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED'; // (optional) (default to undefined)
let pageSize: number; //Number of items per page (max 100) (optional) (default to 20)
let cursor: string; //Cursor for pagination (opaque token) (optional) (default to undefined)

const { status, data } = await apiInstance.listIncidents(
    propertyId,
    severity,
    status,
    pageSize,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **propertyId** | [**string**] |  | (optional) defaults to undefined|
| **severity** | [**&#39;LOW&#39; | &#39;MEDIUM&#39; | &#39;HIGH&#39; | &#39;CRITICAL&#39;**]**Array<&#39;LOW&#39; &#124; &#39;MEDIUM&#39; &#124; &#39;HIGH&#39; &#124; &#39;CRITICAL&#39;>** |  | (optional) defaults to undefined|
| **status** | [**&#39;OPEN&#39; | &#39;IN_PROGRESS&#39; | &#39;RESOLVED&#39; | &#39;CLOSED&#39;**]**Array<&#39;OPEN&#39; &#124; &#39;IN_PROGRESS&#39; &#124; &#39;RESOLVED&#39; &#124; &#39;CLOSED&#39;>** |  | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of items per page (max 100) | (optional) defaults to 20|
| **cursor** | [**string**] | Cursor for pagination (opaque token) | (optional) defaults to undefined|


### Return type

**ListIncidents200Response**

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

# **listMaintenanceRequests**
> GetGuestStays200Response listMaintenanceRequests()

List all maintenance requests with filtering by property, priority, status, and category

### Example

```typescript
import {
    OperationsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let propertyId: string; // (optional) (default to undefined)
let status: string; // (optional) (default to undefined)
let priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT'; // (optional) (default to undefined)
let pageSize: number; //Number of items per page (max 100) (optional) (default to 20)
let cursor: string; //Cursor for pagination (opaque token) (optional) (default to undefined)

const { status, data } = await apiInstance.listMaintenanceRequests(
    propertyId,
    status,
    priority,
    pageSize,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **propertyId** | [**string**] |  | (optional) defaults to undefined|
| **status** | [**string**] |  | (optional) defaults to undefined|
| **priority** | [**&#39;LOW&#39; | &#39;MEDIUM&#39; | &#39;HIGH&#39; | &#39;URGENT&#39;**]**Array<&#39;LOW&#39; &#124; &#39;MEDIUM&#39; &#124; &#39;HIGH&#39; &#124; &#39;URGENT&#39;>** |  | (optional) defaults to undefined|
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

# **listServiceRequests**
> GetGuestStays200Response listServiceRequests()

List all guest service requests with filtering by property, guest, status, and request type

### Example

```typescript
import {
    OperationsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let propertyId: string; // (optional) (default to undefined)
let status: string; // (optional) (default to undefined)
let pageSize: number; //Number of items per page (max 100) (optional) (default to 20)
let cursor: string; //Cursor for pagination (opaque token) (optional) (default to undefined)

const { status, data } = await apiInstance.listServiceRequests(
    propertyId,
    status,
    pageSize,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **propertyId** | [**string**] |  | (optional) defaults to undefined|
| **status** | [**string**] |  | (optional) defaults to undefined|
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

# **listStaffShifts**
> ListStaffShifts200Response listStaffShifts()

Retrieve all staff shifts with filtering

### Example

```typescript
import {
    OperationsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let staffId: string; // (optional) (default to undefined)
let date: string; // (optional) (default to undefined)
let pageSize: number; //Number of items per page (max 100) (optional) (default to 20)
let cursor: string; //Cursor for pagination (opaque token) (optional) (default to undefined)

const { status, data } = await apiInstance.listStaffShifts(
    staffId,
    date,
    pageSize,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **staffId** | [**string**] |  | (optional) defaults to undefined|
| **date** | [**string**] |  | (optional) defaults to undefined|
| **pageSize** | [**number**] | Number of items per page (max 100) | (optional) defaults to 20|
| **cursor** | [**string**] | Cursor for pagination (opaque token) | (optional) defaults to undefined|


### Return type

**ListStaffShifts200Response**

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

# **listTrainingModules**
> ListTrainingModules200Response listTrainingModules()

Retrieve all training modules

### Example

```typescript
import {
    OperationsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let pageSize: number; //Number of items per page (max 100) (optional) (default to 20)
let cursor: string; //Cursor for pagination (opaque token) (optional) (default to undefined)

const { status, data } = await apiInstance.listTrainingModules(
    pageSize,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageSize** | [**number**] | Number of items per page (max 100) | (optional) defaults to 20|
| **cursor** | [**string**] | Cursor for pagination (opaque token) | (optional) defaults to undefined|


### Return type

**ListTrainingModules200Response**

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

# **replaceHousekeepingTask**
> object replaceHousekeepingTask(body)

Replace housekeeping task with complete new task details including assignment, priority, and status

### Example

```typescript
import {
    OperationsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let taskId: string; // (default to undefined)
let body: object; //
let ifMatch: string; //ETag for optimistic locking (optional) (default to undefined)

const { status, data } = await apiInstance.replaceHousekeepingTask(
    taskId,
    body,
    ifMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **taskId** | [**string**] |  | defaults to undefined|
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

# **replaceIncident**
> Incident replaceIncident(incident)

Replace incident with complete new details

### Example

```typescript
import {
    OperationsApi,
    Configuration,
    Incident
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let incidentId: string; // (default to undefined)
let incident: Incident; //
let ifMatch: string; //ETag for optimistic locking (optional) (default to undefined)

const { status, data } = await apiInstance.replaceIncident(
    incidentId,
    incident,
    ifMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **incident** | **Incident**|  | |
| **incidentId** | [**string**] |  | defaults to undefined|
| **ifMatch** | [**string**] | ETag for optimistic locking | (optional) defaults to undefined|


### Return type

**Incident**

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

# **replaceMaintenanceRequest**
> object replaceMaintenanceRequest(body)

Replace maintenance request with complete new request details including priority, assignment, and scheduling

### Example

```typescript
import {
    OperationsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let requestId: string; // (default to undefined)
let body: object; //
let ifMatch: string; //ETag for optimistic locking (optional) (default to undefined)

const { status, data } = await apiInstance.replaceMaintenanceRequest(
    requestId,
    body,
    ifMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **requestId** | [**string**] |  | defaults to undefined|
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

# **replaceServiceRequest**
> object replaceServiceRequest(body)

Replace service request with complete new request details including type, priority, and fulfillment status

### Example

```typescript
import {
    OperationsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let requestId: string; // (default to undefined)
let body: object; //
let ifMatch: string; //ETag for optimistic locking (optional) (default to undefined)

const { status, data } = await apiInstance.replaceServiceRequest(
    requestId,
    body,
    ifMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **requestId** | [**string**] |  | defaults to undefined|
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

# **reportIncident**
> Incident reportIncident(incident)

Report a new incident

### Example

```typescript
import {
    OperationsApi,
    Configuration,
    Incident
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let incident: Incident; //

const { status, data } = await apiInstance.reportIncident(
    incident
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **incident** | **Incident**|  | |


### Return type

**Incident**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Incident reported |  * Location -  <br>  |
|**400** | Bad request - validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **startHousekeepingTask**
> HousekeepingTask startHousekeepingTask()

Mark a housekeeping task as started

### Example

```typescript
import {
    OperationsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let taskId: string; // (default to undefined)

const { status, data } = await apiInstance.startHousekeepingTask(
    taskId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **taskId** | [**string**] |  | defaults to undefined|


### Return type

**HousekeepingTask**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Task started |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateHousekeepingTask**
> object updateHousekeepingTask(body)

Update specific fields of a housekeeping task.  **Common use cases:** - Change task status - Update priority - Assign to different staff - Add notes 

### Example

```typescript
import {
    OperationsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let taskId: string; // (default to undefined)
let body: object; //
let ifMatch: string; //ETag for optimistic locking (optional) (default to undefined)

const { status, data } = await apiInstance.updateHousekeepingTask(
    taskId,
    body,
    ifMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **taskId** | [**string**] |  | defaults to undefined|
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

# **updateMaintenanceRequest**
> object updateMaintenanceRequest(body)

Update specific fields of a maintenance request.  **Common use cases:** - Update request status - Change priority - Add resolution notes - Update estimated completion 

### Example

```typescript
import {
    OperationsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let requestId: string; // (default to undefined)
let body: object; //
let ifMatch: string; //ETag for optimistic locking (optional) (default to undefined)

const { status, data } = await apiInstance.updateMaintenanceRequest(
    requestId,
    body,
    ifMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **requestId** | [**string**] |  | defaults to undefined|
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

# **updateServiceRequest**
> object updateServiceRequest(body)

Update specific fields of a service request.  **Common use cases:** - Update request status - Change priority (e.g., VIP guest) - Add fulfillment notes - Update delivery time 

### Example

```typescript
import {
    OperationsApi,
    Configuration
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let requestId: string; // (default to undefined)
let body: object; //
let ifMatch: string; //ETag for optimistic locking (optional) (default to undefined)

const { status, data } = await apiInstance.updateServiceRequest(
    requestId,
    body,
    ifMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **requestId** | [**string**] |  | defaults to undefined|
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

# **verifyHousekeepingTask**
> HousekeepingTask verifyHousekeepingTask()

Verify completion of a housekeeping task

### Example

```typescript
import {
    OperationsApi,
    Configuration,
    VerifyHousekeepingTaskRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let taskId: string; // (default to undefined)
let verifyHousekeepingTaskRequest: VerifyHousekeepingTaskRequest; // (optional)

const { status, data } = await apiInstance.verifyHousekeepingTask(
    taskId,
    verifyHousekeepingTaskRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **verifyHousekeepingTaskRequest** | **VerifyHousekeepingTaskRequest**|  | |
| **taskId** | [**string**] |  | defaults to undefined|


### Return type

**HousekeepingTask**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Task verified |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verifyMaintenanceRequest**
> MaintenanceRequest verifyMaintenanceRequest()

Verify that maintenance work has been completed satisfactorily

### Example

```typescript
import {
    OperationsApi,
    Configuration,
    VerifyHousekeepingTaskRequest
} from '@stayos/api-client';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let requestId: string; // (default to undefined)
let verifyHousekeepingTaskRequest: VerifyHousekeepingTaskRequest; // (optional)

const { status, data } = await apiInstance.verifyMaintenanceRequest(
    requestId,
    verifyHousekeepingTaskRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **verifyHousekeepingTaskRequest** | **VerifyHousekeepingTaskRequest**|  | |
| **requestId** | [**string**] |  | defaults to undefined|


### Return type

**MaintenanceRequest**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Request verified |  -  |
|**404** | Resource not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

