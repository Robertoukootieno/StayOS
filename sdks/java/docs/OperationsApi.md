# OperationsApi

All URIs are relative to *https://api.stayos.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**acknowledgeServiceRequest**](OperationsApi.md#acknowledgeServiceRequest) | **POST** /service-requests/{requestId}/acknowledge | Acknowledge service request |
| [**addIncidentAction**](OperationsApi.md#addIncidentAction) | **POST** /incidents/{incidentId}/actions | Add incident action |
| [**assignHousekeepingTask**](OperationsApi.md#assignHousekeepingTask) | **POST** /housekeeping/tasks/{taskId}/assign | Assign housekeeping task |
| [**assignMaintenanceRequest**](OperationsApi.md#assignMaintenanceRequest) | **POST** /maintenance/requests/{requestId}/assign | Assign maintenance request |
| [**assignServiceRequest**](OperationsApi.md#assignServiceRequest) | **POST** /service-requests/{requestId}/assign | Assign service request |
| [**cancelServiceRequest**](OperationsApi.md#cancelServiceRequest) | **POST** /service-requests/{requestId}/cancel | Cancel service request |
| [**clockInShift**](OperationsApi.md#clockInShift) | **POST** /staff/shifts/{shiftId}/clock-in | Clock in for shift |
| [**clockOutShift**](OperationsApi.md#clockOutShift) | **POST** /staff/shifts/{shiftId}/clock-out | Clock out from shift |
| [**closeIncident**](OperationsApi.md#closeIncident) | **POST** /incidents/{incidentId}/close | Close incident |
| [**completeHousekeepingTask**](OperationsApi.md#completeHousekeepingTask) | **POST** /housekeeping/tasks/{taskId}/complete | Complete housekeeping task |
| [**completeMaintenanceRequest**](OperationsApi.md#completeMaintenanceRequest) | **POST** /maintenance/requests/{requestId}/complete | Complete maintenance request |
| [**completeServiceRequest**](OperationsApi.md#completeServiceRequest) | **POST** /service-requests/{requestId}/complete | Complete service request |
| [**completeTraining**](OperationsApi.md#completeTraining) | **POST** /training/enrollments/{enrollmentId}/complete | Complete training |
| [**createHousekeepingTask**](OperationsApi.md#createHousekeepingTask) | **POST** /housekeeping/tasks | Create housekeeping task |
| [**createMaintenanceRequest**](OperationsApi.md#createMaintenanceRequest) | **POST** /maintenance/requests | Create maintenance request |
| [**createServiceRequest**](OperationsApi.md#createServiceRequest) | **POST** /service-requests | Create service request |
| [**createStaffShift**](OperationsApi.md#createStaffShift) | **POST** /staff/shifts | Create staff shift |
| [**createTrainingModule**](OperationsApi.md#createTrainingModule) | **POST** /training/modules | Create training module |
| [**enrollInTraining**](OperationsApi.md#enrollInTraining) | **POST** /training/enrollments | Enroll in training |
| [**escalateServiceRequest**](OperationsApi.md#escalateServiceRequest) | **POST** /service-requests/{requestId}/escalate | Escalate service request |
| [**failHousekeepingTask**](OperationsApi.md#failHousekeepingTask) | **POST** /housekeeping/tasks/{taskId}/fail | Fail housekeeping task |
| [**getCleaningSchedule**](OperationsApi.md#getCleaningSchedule) | **GET** /housekeeping/schedule | Get cleaning schedule |
| [**getIncident**](OperationsApi.md#getIncident) | **GET** /incidents/{incidentId} | Get incident details |
| [**getMaintenanceHistory**](OperationsApi.md#getMaintenanceHistory) | **GET** /maintenance/requests/{requestId}/history | Get maintenance history |
| [**getStaffPerformance**](OperationsApi.md#getStaffPerformance) | **GET** /staff/{staffId}/performance | Get staff performance metrics |
| [**getTrainingEnrollment**](OperationsApi.md#getTrainingEnrollment) | **GET** /training/enrollments/{enrollmentId} | Get enrollment details |
| [**getTrainingModule**](OperationsApi.md#getTrainingModule) | **GET** /training/modules/{moduleId} | Get training module details |
| [**listHousekeepingTasks**](OperationsApi.md#listHousekeepingTasks) | **GET** /housekeeping/tasks | List housekeeping tasks |
| [**listIncidents**](OperationsApi.md#listIncidents) | **GET** /incidents | List incidents |
| [**listMaintenanceRequests**](OperationsApi.md#listMaintenanceRequests) | **GET** /maintenance/requests | List maintenance requests |
| [**listServiceRequests**](OperationsApi.md#listServiceRequests) | **GET** /service-requests | List service requests |
| [**listStaffShifts**](OperationsApi.md#listStaffShifts) | **GET** /staff/shifts | List staff shifts |
| [**listTrainingModules**](OperationsApi.md#listTrainingModules) | **GET** /training/modules | List training modules |
| [**replaceHousekeepingTask**](OperationsApi.md#replaceHousekeepingTask) | **PUT** /housekeeping/tasks/{taskId} | Replace housekeeping task (full update) |
| [**replaceIncident**](OperationsApi.md#replaceIncident) | **PUT** /incidents/{incidentId} | Replace incident (full update) |
| [**replaceMaintenanceRequest**](OperationsApi.md#replaceMaintenanceRequest) | **PUT** /maintenance/requests/{requestId} | Replace maintenance request (full update) |
| [**replaceServiceRequest**](OperationsApi.md#replaceServiceRequest) | **PUT** /service-requests/{requestId} | Replace service request (full update) |
| [**reportIncident**](OperationsApi.md#reportIncident) | **POST** /incidents | Report incident |
| [**startHousekeepingTask**](OperationsApi.md#startHousekeepingTask) | **POST** /housekeeping/tasks/{taskId}/start | Start housekeeping task |
| [**updateHousekeepingTask**](OperationsApi.md#updateHousekeepingTask) | **PATCH** /housekeeping/tasks/{taskId} | Update housekeeping task (partial update) |
| [**updateMaintenanceRequest**](OperationsApi.md#updateMaintenanceRequest) | **PATCH** /maintenance/requests/{requestId} | Update maintenance request (partial update) |
| [**updateServiceRequest**](OperationsApi.md#updateServiceRequest) | **PATCH** /service-requests/{requestId} | Update service request (partial update) |
| [**verifyHousekeepingTask**](OperationsApi.md#verifyHousekeepingTask) | **POST** /housekeeping/tasks/{taskId}/verify | Verify housekeeping task |
| [**verifyMaintenanceRequest**](OperationsApi.md#verifyMaintenanceRequest) | **POST** /maintenance/requests/{requestId}/verify | Verify maintenance completion |


<a id="acknowledgeServiceRequest"></a>
# **acknowledgeServiceRequest**
> ServiceRequest acknowledgeServiceRequest(requestId)

Acknowledge service request

Acknowledge receipt of a service request

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    UUID requestId = UUID.randomUUID(); // UUID | 
    try {
      ServiceRequest result = apiInstance.acknowledgeServiceRequest(requestId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#acknowledgeServiceRequest");
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
| **requestId** | **UUID**|  | |

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
| **200** | Request acknowledged |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="addIncidentAction"></a>
# **addIncidentAction**
> Incident addIncidentAction(incidentId, addIncidentActionRequest)

Add incident action

Add a corrective action to an incident

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    UUID incidentId = UUID.randomUUID(); // UUID | 
    AddIncidentActionRequest addIncidentActionRequest = new AddIncidentActionRequest(); // AddIncidentActionRequest | 
    try {
      Incident result = apiInstance.addIncidentAction(incidentId, addIncidentActionRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#addIncidentAction");
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
| **incidentId** | **UUID**|  | |
| **addIncidentActionRequest** | [**AddIncidentActionRequest**](AddIncidentActionRequest.md)|  | |

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
| **201** | Action added |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="assignHousekeepingTask"></a>
# **assignHousekeepingTask**
> HousekeepingTask assignHousekeepingTask(taskId, assignHousekeepingTaskRequest)

Assign housekeeping task

Assign a housekeeping task to a staff member

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    UUID taskId = UUID.randomUUID(); // UUID | 
    AssignHousekeepingTaskRequest assignHousekeepingTaskRequest = new AssignHousekeepingTaskRequest(); // AssignHousekeepingTaskRequest | 
    try {
      HousekeepingTask result = apiInstance.assignHousekeepingTask(taskId, assignHousekeepingTaskRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#assignHousekeepingTask");
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
| **taskId** | **UUID**|  | |
| **assignHousekeepingTaskRequest** | [**AssignHousekeepingTaskRequest**](AssignHousekeepingTaskRequest.md)|  | |

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
| **200** | Task assigned |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="assignMaintenanceRequest"></a>
# **assignMaintenanceRequest**
> MaintenanceRequest assignMaintenanceRequest(requestId, assignMaintenanceRequestRequest)

Assign maintenance request

Assign a maintenance request to a technician

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    UUID requestId = UUID.randomUUID(); // UUID | 
    AssignMaintenanceRequestRequest assignMaintenanceRequestRequest = new AssignMaintenanceRequestRequest(); // AssignMaintenanceRequestRequest | 
    try {
      MaintenanceRequest result = apiInstance.assignMaintenanceRequest(requestId, assignMaintenanceRequestRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#assignMaintenanceRequest");
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
| **requestId** | **UUID**|  | |
| **assignMaintenanceRequestRequest** | [**AssignMaintenanceRequestRequest**](AssignMaintenanceRequestRequest.md)|  | |

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
| **200** | Request assigned |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="assignServiceRequest"></a>
# **assignServiceRequest**
> ServiceRequest assignServiceRequest(requestId, assignServiceRequestRequest)

Assign service request

Assign a service request to a staff member

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    UUID requestId = UUID.randomUUID(); // UUID | 
    AssignServiceRequestRequest assignServiceRequestRequest = new AssignServiceRequestRequest(); // AssignServiceRequestRequest | 
    try {
      ServiceRequest result = apiInstance.assignServiceRequest(requestId, assignServiceRequestRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#assignServiceRequest");
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
| **requestId** | **UUID**|  | |
| **assignServiceRequestRequest** | [**AssignServiceRequestRequest**](AssignServiceRequestRequest.md)|  | |

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
| **200** | Request assigned |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="cancelServiceRequest"></a>
# **cancelServiceRequest**
> ServiceRequest cancelServiceRequest(requestId, cancelServiceRequestRequest)

Cancel service request

Cancel a service request

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    UUID requestId = UUID.randomUUID(); // UUID | 
    CancelServiceRequestRequest cancelServiceRequestRequest = new CancelServiceRequestRequest(); // CancelServiceRequestRequest | 
    try {
      ServiceRequest result = apiInstance.cancelServiceRequest(requestId, cancelServiceRequestRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#cancelServiceRequest");
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
| **requestId** | **UUID**|  | |
| **cancelServiceRequestRequest** | [**CancelServiceRequestRequest**](CancelServiceRequestRequest.md)|  | [optional] |

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
| **200** | Request cancelled |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="clockInShift"></a>
# **clockInShift**
> StaffShift clockInShift(shiftId)

Clock in for shift

Record staff clock-in time

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    UUID shiftId = UUID.randomUUID(); // UUID | 
    try {
      StaffShift result = apiInstance.clockInShift(shiftId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#clockInShift");
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
| **shiftId** | **UUID**|  | |

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
| **200** | Clocked in successfully |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="clockOutShift"></a>
# **clockOutShift**
> StaffShift clockOutShift(shiftId)

Clock out from shift

Record staff clock-out time

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    UUID shiftId = UUID.randomUUID(); // UUID | 
    try {
      StaffShift result = apiInstance.clockOutShift(shiftId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#clockOutShift");
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
| **shiftId** | **UUID**|  | |

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
| **200** | Clocked out successfully |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="closeIncident"></a>
# **closeIncident**
> Incident closeIncident(incidentId, closeIncidentRequest)

Close incident

Close an incident after resolution

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    UUID incidentId = UUID.randomUUID(); // UUID | 
    CloseIncidentRequest closeIncidentRequest = new CloseIncidentRequest(); // CloseIncidentRequest | 
    try {
      Incident result = apiInstance.closeIncident(incidentId, closeIncidentRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#closeIncident");
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
| **incidentId** | **UUID**|  | |
| **closeIncidentRequest** | [**CloseIncidentRequest**](CloseIncidentRequest.md)|  | [optional] |

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
| **200** | Incident closed |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="completeHousekeepingTask"></a>
# **completeHousekeepingTask**
> HousekeepingTask completeHousekeepingTask(taskId, completeHousekeepingTaskRequest)

Complete housekeeping task

Mark a housekeeping task as completed

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    UUID taskId = UUID.randomUUID(); // UUID | 
    CompleteHousekeepingTaskRequest completeHousekeepingTaskRequest = new CompleteHousekeepingTaskRequest(); // CompleteHousekeepingTaskRequest | 
    try {
      HousekeepingTask result = apiInstance.completeHousekeepingTask(taskId, completeHousekeepingTaskRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#completeHousekeepingTask");
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
| **taskId** | **UUID**|  | |
| **completeHousekeepingTaskRequest** | [**CompleteHousekeepingTaskRequest**](CompleteHousekeepingTaskRequest.md)|  | [optional] |

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
| **200** | Task completed |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="completeMaintenanceRequest"></a>
# **completeMaintenanceRequest**
> MaintenanceRequest completeMaintenanceRequest(requestId, completeMaintenanceRequestRequest)

Complete maintenance request

Mark a maintenance request as completed

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    UUID requestId = UUID.randomUUID(); // UUID | 
    CompleteMaintenanceRequestRequest completeMaintenanceRequestRequest = new CompleteMaintenanceRequestRequest(); // CompleteMaintenanceRequestRequest | 
    try {
      MaintenanceRequest result = apiInstance.completeMaintenanceRequest(requestId, completeMaintenanceRequestRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#completeMaintenanceRequest");
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
| **requestId** | **UUID**|  | |
| **completeMaintenanceRequestRequest** | [**CompleteMaintenanceRequestRequest**](CompleteMaintenanceRequestRequest.md)|  | [optional] |

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
| **200** | Request completed |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="completeServiceRequest"></a>
# **completeServiceRequest**
> ServiceRequest completeServiceRequest(requestId, markReservationNoShowRequest)

Complete service request

Mark a service request as completed

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    UUID requestId = UUID.randomUUID(); // UUID | 
    MarkReservationNoShowRequest markReservationNoShowRequest = new MarkReservationNoShowRequest(); // MarkReservationNoShowRequest | 
    try {
      ServiceRequest result = apiInstance.completeServiceRequest(requestId, markReservationNoShowRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#completeServiceRequest");
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
| **requestId** | **UUID**|  | |
| **markReservationNoShowRequest** | [**MarkReservationNoShowRequest**](MarkReservationNoShowRequest.md)|  | [optional] |

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
| **200** | Request completed |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="completeTraining"></a>
# **completeTraining**
> TrainingEnrollment completeTraining(enrollmentId, completeTrainingRequest)

Complete training

Mark a training enrollment as completed

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    UUID enrollmentId = UUID.randomUUID(); // UUID | 
    CompleteTrainingRequest completeTrainingRequest = new CompleteTrainingRequest(); // CompleteTrainingRequest | 
    try {
      TrainingEnrollment result = apiInstance.completeTraining(enrollmentId, completeTrainingRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#completeTraining");
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
| **enrollmentId** | **UUID**|  | |
| **completeTrainingRequest** | [**CompleteTrainingRequest**](CompleteTrainingRequest.md)|  | [optional] |

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
| **200** | Training completed |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="createHousekeepingTask"></a>
# **createHousekeepingTask**
> Object createHousekeepingTask(body)

Create housekeeping task

Create a new housekeeping task for room cleaning, inspection, or maintenance preparation

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    Object body = null; // Object | 
    try {
      Object result = apiInstance.createHousekeepingTask(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#createHousekeepingTask");
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
| **body** | **Object**|  | |

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
| **201** | Task created |  * Location -  <br>  |
| **400** | Bad request - validation error |  -  |
| **500** | Internal server error |  -  |

<a id="createMaintenanceRequest"></a>
# **createMaintenanceRequest**
> Object createMaintenanceRequest(body)

Create maintenance request

Create a new maintenance request for repairs, inspections, or preventive maintenance

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    Object body = null; // Object | 
    try {
      Object result = apiInstance.createMaintenanceRequest(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#createMaintenanceRequest");
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
| **body** | **Object**|  | |

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
| **201** | Request created |  * Location -  <br>  |
| **400** | Bad request - validation error |  -  |
| **500** | Internal server error |  -  |

<a id="createServiceRequest"></a>
# **createServiceRequest**
> Object createServiceRequest(body)

Create service request

Create a new guest service request for concierge services, amenities, or special accommodations

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    Object body = null; // Object | 
    try {
      Object result = apiInstance.createServiceRequest(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#createServiceRequest");
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
| **body** | **Object**|  | |

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
| **201** | Request created |  * Location -  <br>  |
| **400** | Bad request - validation error |  -  |
| **500** | Internal server error |  -  |

<a id="createStaffShift"></a>
# **createStaffShift**
> StaffShift createStaffShift(staffShift)

Create staff shift

Create a new staff shift

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    StaffShift staffShift = new StaffShift(); // StaffShift | 
    try {
      StaffShift result = apiInstance.createStaffShift(staffShift);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#createStaffShift");
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
| **staffShift** | [**StaffShift**](StaffShift.md)|  | |

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
| **201** | Shift created |  * Location -  <br>  |
| **400** | Bad request - validation error |  -  |
| **500** | Internal server error |  -  |

<a id="createTrainingModule"></a>
# **createTrainingModule**
> TrainingModule createTrainingModule(trainingModule)

Create training module

Create a new training module

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    TrainingModule trainingModule = new TrainingModule(); // TrainingModule | 
    try {
      TrainingModule result = apiInstance.createTrainingModule(trainingModule);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#createTrainingModule");
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
| **trainingModule** | [**TrainingModule**](TrainingModule.md)|  | |

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
| **201** | Module created |  * Location -  <br>  |
| **400** | Bad request - validation error |  -  |
| **500** | Internal server error |  -  |

<a id="enrollInTraining"></a>
# **enrollInTraining**
> TrainingEnrollment enrollInTraining(trainingEnrollment)

Enroll in training

Enroll a staff member in a training module

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    TrainingEnrollment trainingEnrollment = new TrainingEnrollment(); // TrainingEnrollment | 
    try {
      TrainingEnrollment result = apiInstance.enrollInTraining(trainingEnrollment);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#enrollInTraining");
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
| **trainingEnrollment** | [**TrainingEnrollment**](TrainingEnrollment.md)|  | |

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
| **201** | Enrollment created |  * Location -  <br>  |
| **400** | Bad request - validation error |  -  |
| **500** | Internal server error |  -  |

<a id="escalateServiceRequest"></a>
# **escalateServiceRequest**
> ServiceRequest escalateServiceRequest(requestId, escalateServiceRequestRequest)

Escalate service request

Escalate a service request to management

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    UUID requestId = UUID.randomUUID(); // UUID | 
    EscalateServiceRequestRequest escalateServiceRequestRequest = new EscalateServiceRequestRequest(); // EscalateServiceRequestRequest | 
    try {
      ServiceRequest result = apiInstance.escalateServiceRequest(requestId, escalateServiceRequestRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#escalateServiceRequest");
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
| **requestId** | **UUID**|  | |
| **escalateServiceRequestRequest** | [**EscalateServiceRequestRequest**](EscalateServiceRequestRequest.md)|  | |

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
| **200** | Request escalated |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="failHousekeepingTask"></a>
# **failHousekeepingTask**
> HousekeepingTask failHousekeepingTask(taskId, escalateServiceRequestRequest)

Fail housekeeping task

Mark a housekeeping task as failed

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    UUID taskId = UUID.randomUUID(); // UUID | 
    EscalateServiceRequestRequest escalateServiceRequestRequest = new EscalateServiceRequestRequest(); // EscalateServiceRequestRequest | 
    try {
      HousekeepingTask result = apiInstance.failHousekeepingTask(taskId, escalateServiceRequestRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#failHousekeepingTask");
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
| **taskId** | **UUID**|  | |
| **escalateServiceRequestRequest** | [**EscalateServiceRequestRequest**](EscalateServiceRequestRequest.md)|  | |

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
| **200** | Task marked as failed |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="getCleaningSchedule"></a>
# **getCleaningSchedule**
> GetCleaningSchedule200Response getCleaningSchedule(propertyId, date)

Get cleaning schedule

Retrieve the housekeeping cleaning schedule

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    UUID propertyId = UUID.randomUUID(); // UUID | 
    LocalDate date = LocalDate.now(); // LocalDate | 
    try {
      GetCleaningSchedule200Response result = apiInstance.getCleaningSchedule(propertyId, date);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#getCleaningSchedule");
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
| **propertyId** | **UUID**|  | |
| **date** | **LocalDate**|  | [optional] |

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
| **200** | Successful response |  -  |
| **500** | Internal server error |  -  |

<a id="getIncident"></a>
# **getIncident**
> Incident getIncident(incidentId)

Get incident details

Retrieve details of a specific incident

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    UUID incidentId = UUID.randomUUID(); // UUID | 
    try {
      Incident result = apiInstance.getIncident(incidentId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#getIncident");
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
| **incidentId** | **UUID**|  | |

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
| **200** | Successful response |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="getMaintenanceHistory"></a>
# **getMaintenanceHistory**
> GetMaintenanceHistory200Response getMaintenanceHistory(requestId)

Get maintenance history

Retrieve maintenance history for a specific request

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    UUID requestId = UUID.randomUUID(); // UUID | 
    try {
      GetMaintenanceHistory200Response result = apiInstance.getMaintenanceHistory(requestId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#getMaintenanceHistory");
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
| **requestId** | **UUID**|  | |

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
| **200** | Successful response |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="getStaffPerformance"></a>
# **getStaffPerformance**
> GetStaffPerformance200Response getStaffPerformance(staffId, startDate, endDate)

Get staff performance metrics

Retrieve performance metrics for a staff member

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    UUID staffId = UUID.randomUUID(); // UUID | 
    LocalDate startDate = LocalDate.now(); // LocalDate | 
    LocalDate endDate = LocalDate.now(); // LocalDate | 
    try {
      GetStaffPerformance200Response result = apiInstance.getStaffPerformance(staffId, startDate, endDate);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#getStaffPerformance");
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
| **staffId** | **UUID**|  | |
| **startDate** | **LocalDate**|  | [optional] |
| **endDate** | **LocalDate**|  | [optional] |

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
| **200** | Successful response |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="getTrainingEnrollment"></a>
# **getTrainingEnrollment**
> TrainingEnrollment getTrainingEnrollment(enrollmentId)

Get enrollment details

Retrieve details of a training enrollment

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    UUID enrollmentId = UUID.randomUUID(); // UUID | 
    try {
      TrainingEnrollment result = apiInstance.getTrainingEnrollment(enrollmentId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#getTrainingEnrollment");
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
| **enrollmentId** | **UUID**|  | |

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
| **200** | Successful response |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="getTrainingModule"></a>
# **getTrainingModule**
> TrainingModule getTrainingModule(moduleId)

Get training module details

Retrieve details of a specific training module

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    UUID moduleId = UUID.randomUUID(); // UUID | 
    try {
      TrainingModule result = apiInstance.getTrainingModule(moduleId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#getTrainingModule");
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
| **moduleId** | **UUID**|  | |

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
| **200** | Successful response |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="listHousekeepingTasks"></a>
# **listHousekeepingTasks**
> GetGuestStays200Response listHousekeepingTasks(propertyId, status, assignedTo, pageSize, cursor)

List housekeeping tasks

List all housekeeping tasks with filtering by property, status, assignment, and date range

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    UUID propertyId = UUID.randomUUID(); // UUID | 
    String status = "PENDING"; // String | 
    UUID assignedTo = UUID.randomUUID(); // UUID | 
    Integer pageSize = 20; // Integer | Number of items per page (max 100)
    String cursor = "cursor_example"; // String | Cursor for pagination (opaque token)
    try {
      GetGuestStays200Response result = apiInstance.listHousekeepingTasks(propertyId, status, assignedTo, pageSize, cursor);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#listHousekeepingTasks");
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
| **status** | **String**|  | [optional] [enum: PENDING, IN_PROGRESS, COMPLETED, CANCELLED] |
| **assignedTo** | **UUID**|  | [optional] |
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

<a id="listIncidents"></a>
# **listIncidents**
> ListIncidents200Response listIncidents(propertyId, severity, status, pageSize, cursor)

List incidents

Retrieve all incidents with filtering

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    UUID propertyId = UUID.randomUUID(); // UUID | 
    String severity = "LOW"; // String | 
    String status = "OPEN"; // String | 
    Integer pageSize = 20; // Integer | Number of items per page (max 100)
    String cursor = "cursor_example"; // String | Cursor for pagination (opaque token)
    try {
      ListIncidents200Response result = apiInstance.listIncidents(propertyId, severity, status, pageSize, cursor);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#listIncidents");
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
| **severity** | **String**|  | [optional] [enum: LOW, MEDIUM, HIGH, CRITICAL] |
| **status** | **String**|  | [optional] [enum: OPEN, IN_PROGRESS, RESOLVED, CLOSED] |
| **pageSize** | **Integer**| Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **String**| Cursor for pagination (opaque token) | [optional] |

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
| **200** | Successful response |  -  |
| **500** | Internal server error |  -  |

<a id="listMaintenanceRequests"></a>
# **listMaintenanceRequests**
> GetGuestStays200Response listMaintenanceRequests(propertyId, status, priority, pageSize, cursor)

List maintenance requests

List all maintenance requests with filtering by property, priority, status, and category

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    UUID propertyId = UUID.randomUUID(); // UUID | 
    String status = "status_example"; // String | 
    String priority = "LOW"; // String | 
    Integer pageSize = 20; // Integer | Number of items per page (max 100)
    String cursor = "cursor_example"; // String | Cursor for pagination (opaque token)
    try {
      GetGuestStays200Response result = apiInstance.listMaintenanceRequests(propertyId, status, priority, pageSize, cursor);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#listMaintenanceRequests");
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
| **status** | **String**|  | [optional] |
| **priority** | **String**|  | [optional] [enum: LOW, MEDIUM, HIGH, URGENT] |
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

<a id="listServiceRequests"></a>
# **listServiceRequests**
> GetGuestStays200Response listServiceRequests(propertyId, status, pageSize, cursor)

List service requests

List all guest service requests with filtering by property, guest, status, and request type

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    UUID propertyId = UUID.randomUUID(); // UUID | 
    String status = "status_example"; // String | 
    Integer pageSize = 20; // Integer | Number of items per page (max 100)
    String cursor = "cursor_example"; // String | Cursor for pagination (opaque token)
    try {
      GetGuestStays200Response result = apiInstance.listServiceRequests(propertyId, status, pageSize, cursor);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#listServiceRequests");
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
| **status** | **String**|  | [optional] |
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

<a id="listStaffShifts"></a>
# **listStaffShifts**
> ListStaffShifts200Response listStaffShifts(staffId, date, pageSize, cursor)

List staff shifts

Retrieve all staff shifts with filtering

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    UUID staffId = UUID.randomUUID(); // UUID | 
    LocalDate date = LocalDate.now(); // LocalDate | 
    Integer pageSize = 20; // Integer | Number of items per page (max 100)
    String cursor = "cursor_example"; // String | Cursor for pagination (opaque token)
    try {
      ListStaffShifts200Response result = apiInstance.listStaffShifts(staffId, date, pageSize, cursor);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#listStaffShifts");
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
| **staffId** | **UUID**|  | [optional] |
| **date** | **LocalDate**|  | [optional] |
| **pageSize** | **Integer**| Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **String**| Cursor for pagination (opaque token) | [optional] |

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
| **200** | Successful response |  -  |
| **500** | Internal server error |  -  |

<a id="listTrainingModules"></a>
# **listTrainingModules**
> ListTrainingModules200Response listTrainingModules(pageSize, cursor)

List training modules

Retrieve all training modules

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    Integer pageSize = 20; // Integer | Number of items per page (max 100)
    String cursor = "cursor_example"; // String | Cursor for pagination (opaque token)
    try {
      ListTrainingModules200Response result = apiInstance.listTrainingModules(pageSize, cursor);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#listTrainingModules");
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
| **pageSize** | **Integer**| Number of items per page (max 100) | [optional] [default to 20] |
| **cursor** | **String**| Cursor for pagination (opaque token) | [optional] |

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
| **200** | Successful response |  -  |
| **500** | Internal server error |  -  |

<a id="replaceHousekeepingTask"></a>
# **replaceHousekeepingTask**
> Object replaceHousekeepingTask(taskId, body, ifMatch)

Replace housekeeping task (full update)

Replace housekeeping task with complete new task details including assignment, priority, and status

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    UUID taskId = UUID.randomUUID(); // UUID | 
    Object body = null; // Object | 
    String ifMatch = "ifMatch_example"; // String | ETag for optimistic locking
    try {
      Object result = apiInstance.replaceHousekeepingTask(taskId, body, ifMatch);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#replaceHousekeepingTask");
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
| **taskId** | **UUID**|  | |
| **body** | **Object**|  | |
| **ifMatch** | **String**| ETag for optimistic locking | [optional] |

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
| **200** | Successfully replaced |  * ETag -  <br>  |
| **404** | Resource not found |  -  |
| **412** | Precondition failed - optimistic locking failure |  -  |
| **500** | Internal server error |  -  |

<a id="replaceIncident"></a>
# **replaceIncident**
> Incident replaceIncident(incidentId, incident, ifMatch)

Replace incident (full update)

Replace incident with complete new details

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    UUID incidentId = UUID.randomUUID(); // UUID | 
    Incident incident = new Incident(); // Incident | 
    String ifMatch = "ifMatch_example"; // String | ETag for optimistic locking
    try {
      Incident result = apiInstance.replaceIncident(incidentId, incident, ifMatch);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#replaceIncident");
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
| **incidentId** | **UUID**|  | |
| **incident** | [**Incident**](Incident.md)|  | |
| **ifMatch** | **String**| ETag for optimistic locking | [optional] |

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
| **200** | Successfully replaced |  * ETag -  <br>  |
| **404** | Resource not found |  -  |
| **412** | Precondition failed - optimistic locking failure |  -  |
| **500** | Internal server error |  -  |

<a id="replaceMaintenanceRequest"></a>
# **replaceMaintenanceRequest**
> Object replaceMaintenanceRequest(requestId, body, ifMatch)

Replace maintenance request (full update)

Replace maintenance request with complete new request details including priority, assignment, and scheduling

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    UUID requestId = UUID.randomUUID(); // UUID | 
    Object body = null; // Object | 
    String ifMatch = "ifMatch_example"; // String | ETag for optimistic locking
    try {
      Object result = apiInstance.replaceMaintenanceRequest(requestId, body, ifMatch);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#replaceMaintenanceRequest");
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
| **requestId** | **UUID**|  | |
| **body** | **Object**|  | |
| **ifMatch** | **String**| ETag for optimistic locking | [optional] |

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
| **200** | Successfully replaced |  * ETag -  <br>  |
| **404** | Resource not found |  -  |
| **412** | Precondition failed - optimistic locking failure |  -  |
| **500** | Internal server error |  -  |

<a id="replaceServiceRequest"></a>
# **replaceServiceRequest**
> Object replaceServiceRequest(requestId, body, ifMatch)

Replace service request (full update)

Replace service request with complete new request details including type, priority, and fulfillment status

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    UUID requestId = UUID.randomUUID(); // UUID | 
    Object body = null; // Object | 
    String ifMatch = "ifMatch_example"; // String | ETag for optimistic locking
    try {
      Object result = apiInstance.replaceServiceRequest(requestId, body, ifMatch);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#replaceServiceRequest");
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
| **requestId** | **UUID**|  | |
| **body** | **Object**|  | |
| **ifMatch** | **String**| ETag for optimistic locking | [optional] |

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
| **200** | Successfully replaced |  * ETag -  <br>  |
| **404** | Resource not found |  -  |
| **412** | Precondition failed - optimistic locking failure |  -  |
| **500** | Internal server error |  -  |

<a id="reportIncident"></a>
# **reportIncident**
> Incident reportIncident(incident)

Report incident

Report a new incident

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    Incident incident = new Incident(); // Incident | 
    try {
      Incident result = apiInstance.reportIncident(incident);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#reportIncident");
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
| **incident** | [**Incident**](Incident.md)|  | |

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
| **201** | Incident reported |  * Location -  <br>  |
| **400** | Bad request - validation error |  -  |
| **500** | Internal server error |  -  |

<a id="startHousekeepingTask"></a>
# **startHousekeepingTask**
> HousekeepingTask startHousekeepingTask(taskId)

Start housekeeping task

Mark a housekeeping task as started

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    UUID taskId = UUID.randomUUID(); // UUID | 
    try {
      HousekeepingTask result = apiInstance.startHousekeepingTask(taskId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#startHousekeepingTask");
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
| **taskId** | **UUID**|  | |

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
| **200** | Task started |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="updateHousekeepingTask"></a>
# **updateHousekeepingTask**
> Object updateHousekeepingTask(taskId, body, ifMatch)

Update housekeeping task (partial update)

Update specific fields of a housekeeping task.  **Common use cases:** - Change task status - Update priority - Assign to different staff - Add notes 

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    UUID taskId = UUID.randomUUID(); // UUID | 
    Object body = {"status":"IN_PROGRESS","assignedTo":"staff_123","priority":"HIGH"}; // Object | 
    String ifMatch = "ifMatch_example"; // String | ETag for optimistic locking
    try {
      Object result = apiInstance.updateHousekeepingTask(taskId, body, ifMatch);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#updateHousekeepingTask");
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
| **taskId** | **UUID**|  | |
| **body** | **Object**|  | |
| **ifMatch** | **String**| ETag for optimistic locking | [optional] |

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
| **200** | Successfully updated |  * ETag -  <br>  |
| **404** | Resource not found |  -  |
| **412** | Precondition failed - optimistic locking failure |  -  |
| **500** | Internal server error |  -  |

<a id="updateMaintenanceRequest"></a>
# **updateMaintenanceRequest**
> Object updateMaintenanceRequest(requestId, body, ifMatch)

Update maintenance request (partial update)

Update specific fields of a maintenance request.  **Common use cases:** - Update request status - Change priority - Add resolution notes - Update estimated completion 

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    UUID requestId = UUID.randomUUID(); // UUID | 
    Object body = {"status":"IN_PROGRESS","priority":"URGENT","notes":"Plumber dispatched"}; // Object | 
    String ifMatch = "ifMatch_example"; // String | ETag for optimistic locking
    try {
      Object result = apiInstance.updateMaintenanceRequest(requestId, body, ifMatch);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#updateMaintenanceRequest");
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
| **requestId** | **UUID**|  | |
| **body** | **Object**|  | |
| **ifMatch** | **String**| ETag for optimistic locking | [optional] |

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
| **200** | Successfully updated |  * ETag -  <br>  |
| **404** | Resource not found |  -  |
| **412** | Precondition failed - optimistic locking failure |  -  |
| **500** | Internal server error |  -  |

<a id="updateServiceRequest"></a>
# **updateServiceRequest**
> Object updateServiceRequest(requestId, body, ifMatch)

Update service request (partial update)

Update specific fields of a service request.  **Common use cases:** - Update request status - Change priority (e.g., VIP guest) - Add fulfillment notes - Update delivery time 

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    UUID requestId = UUID.randomUUID(); // UUID | 
    Object body = {"priority":"HIGH","notes":"Guest is VIP - expedite","status":"IN_PROGRESS"}; // Object | 
    String ifMatch = "ifMatch_example"; // String | ETag for optimistic locking
    try {
      Object result = apiInstance.updateServiceRequest(requestId, body, ifMatch);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#updateServiceRequest");
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
| **requestId** | **UUID**|  | |
| **body** | **Object**|  | |
| **ifMatch** | **String**| ETag for optimistic locking | [optional] |

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
| **200** | Successfully updated |  * ETag -  <br>  |
| **404** | Resource not found |  -  |
| **412** | Precondition failed - optimistic locking failure |  -  |
| **500** | Internal server error |  -  |

<a id="verifyHousekeepingTask"></a>
# **verifyHousekeepingTask**
> HousekeepingTask verifyHousekeepingTask(taskId, verifyHousekeepingTaskRequest)

Verify housekeeping task

Verify completion of a housekeeping task

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    UUID taskId = UUID.randomUUID(); // UUID | 
    VerifyHousekeepingTaskRequest verifyHousekeepingTaskRequest = new VerifyHousekeepingTaskRequest(); // VerifyHousekeepingTaskRequest | 
    try {
      HousekeepingTask result = apiInstance.verifyHousekeepingTask(taskId, verifyHousekeepingTaskRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#verifyHousekeepingTask");
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
| **taskId** | **UUID**|  | |
| **verifyHousekeepingTaskRequest** | [**VerifyHousekeepingTaskRequest**](VerifyHousekeepingTaskRequest.md)|  | [optional] |

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
| **200** | Task verified |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

<a id="verifyMaintenanceRequest"></a>
# **verifyMaintenanceRequest**
> MaintenanceRequest verifyMaintenanceRequest(requestId, verifyHousekeepingTaskRequest)

Verify maintenance completion

Verify that maintenance work has been completed satisfactorily

### Example
```java
// Import classes:
import com.stayos.client.ApiClient;
import com.stayos.client.ApiException;
import com.stayos.client.Configuration;
import com.stayos.client.auth.*;
import com.stayos.client.models.*;
import com.stayos.api.OperationsApi;

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

    OperationsApi apiInstance = new OperationsApi(defaultClient);
    UUID requestId = UUID.randomUUID(); // UUID | 
    VerifyHousekeepingTaskRequest verifyHousekeepingTaskRequest = new VerifyHousekeepingTaskRequest(); // VerifyHousekeepingTaskRequest | 
    try {
      MaintenanceRequest result = apiInstance.verifyMaintenanceRequest(requestId, verifyHousekeepingTaskRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OperationsApi#verifyMaintenanceRequest");
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
| **requestId** | **UUID**|  | |
| **verifyHousekeepingTaskRequest** | [**VerifyHousekeepingTaskRequest**](VerifyHousekeepingTaskRequest.md)|  | [optional] |

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
| **200** | Request verified |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

