# SystemMetrics

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Timestamp** | **time.Time** |  | [readonly] 
**Requests** | Pointer to [**SystemMetricsAllOfRequests**](SystemMetricsAllOfRequests.md) |  | [optional] 
**Database** | Pointer to [**SystemMetricsAllOfDatabase**](SystemMetricsAllOfDatabase.md) |  | [optional] 
**Cache** | Pointer to [**SystemMetricsAllOfCache**](SystemMetricsAllOfCache.md) |  | [optional] 

## Methods

### NewSystemMetrics

`func NewSystemMetrics(timestamp time.Time, ) *SystemMetrics`

NewSystemMetrics instantiates a new SystemMetrics object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSystemMetricsWithDefaults

`func NewSystemMetricsWithDefaults() *SystemMetrics`

NewSystemMetricsWithDefaults instantiates a new SystemMetrics object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTimestamp

`func (o *SystemMetrics) GetTimestamp() time.Time`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *SystemMetrics) GetTimestampOk() (*time.Time, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *SystemMetrics) SetTimestamp(v time.Time)`

SetTimestamp sets Timestamp field to given value.


### GetRequests

`func (o *SystemMetrics) GetRequests() SystemMetricsAllOfRequests`

GetRequests returns the Requests field if non-nil, zero value otherwise.

### GetRequestsOk

`func (o *SystemMetrics) GetRequestsOk() (*SystemMetricsAllOfRequests, bool)`

GetRequestsOk returns a tuple with the Requests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequests

`func (o *SystemMetrics) SetRequests(v SystemMetricsAllOfRequests)`

SetRequests sets Requests field to given value.

### HasRequests

`func (o *SystemMetrics) HasRequests() bool`

HasRequests returns a boolean if a field has been set.

### GetDatabase

`func (o *SystemMetrics) GetDatabase() SystemMetricsAllOfDatabase`

GetDatabase returns the Database field if non-nil, zero value otherwise.

### GetDatabaseOk

`func (o *SystemMetrics) GetDatabaseOk() (*SystemMetricsAllOfDatabase, bool)`

GetDatabaseOk returns a tuple with the Database field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatabase

`func (o *SystemMetrics) SetDatabase(v SystemMetricsAllOfDatabase)`

SetDatabase sets Database field to given value.

### HasDatabase

`func (o *SystemMetrics) HasDatabase() bool`

HasDatabase returns a boolean if a field has been set.

### GetCache

`func (o *SystemMetrics) GetCache() SystemMetricsAllOfCache`

GetCache returns the Cache field if non-nil, zero value otherwise.

### GetCacheOk

`func (o *SystemMetrics) GetCacheOk() (*SystemMetricsAllOfCache, bool)`

GetCacheOk returns a tuple with the Cache field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCache

`func (o *SystemMetrics) SetCache(v SystemMetricsAllOfCache)`

SetCache sets Cache field to given value.

### HasCache

`func (o *SystemMetrics) HasCache() bool`

HasCache returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


