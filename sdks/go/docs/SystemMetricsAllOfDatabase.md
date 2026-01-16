# SystemMetricsAllOfDatabase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Connections** | Pointer to **int32** |  | [optional] 
**QueryTime** | Pointer to **float32** | Average query time in milliseconds | [optional] 

## Methods

### NewSystemMetricsAllOfDatabase

`func NewSystemMetricsAllOfDatabase() *SystemMetricsAllOfDatabase`

NewSystemMetricsAllOfDatabase instantiates a new SystemMetricsAllOfDatabase object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSystemMetricsAllOfDatabaseWithDefaults

`func NewSystemMetricsAllOfDatabaseWithDefaults() *SystemMetricsAllOfDatabase`

NewSystemMetricsAllOfDatabaseWithDefaults instantiates a new SystemMetricsAllOfDatabase object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConnections

`func (o *SystemMetricsAllOfDatabase) GetConnections() int32`

GetConnections returns the Connections field if non-nil, zero value otherwise.

### GetConnectionsOk

`func (o *SystemMetricsAllOfDatabase) GetConnectionsOk() (*int32, bool)`

GetConnectionsOk returns a tuple with the Connections field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnections

`func (o *SystemMetricsAllOfDatabase) SetConnections(v int32)`

SetConnections sets Connections field to given value.

### HasConnections

`func (o *SystemMetricsAllOfDatabase) HasConnections() bool`

HasConnections returns a boolean if a field has been set.

### GetQueryTime

`func (o *SystemMetricsAllOfDatabase) GetQueryTime() float32`

GetQueryTime returns the QueryTime field if non-nil, zero value otherwise.

### GetQueryTimeOk

`func (o *SystemMetricsAllOfDatabase) GetQueryTimeOk() (*float32, bool)`

GetQueryTimeOk returns a tuple with the QueryTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryTime

`func (o *SystemMetricsAllOfDatabase) SetQueryTime(v float32)`

SetQueryTime sets QueryTime field to given value.

### HasQueryTime

`func (o *SystemMetricsAllOfDatabase) HasQueryTime() bool`

HasQueryTime returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


