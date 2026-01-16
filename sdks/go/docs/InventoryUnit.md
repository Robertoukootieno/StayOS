# InventoryUnit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InventoryUnitId** | Pointer to **string** |  | [optional] [readonly] 
**PropertyId** | **string** |  | 
**UnitNumber** | **string** | Human-readable unit identifier | 
**UnitTypeId** | **string** | Reference to unit type classification | 
**UnitType** | Pointer to [**Model0**](Model0.md) |  | [optional] 
**Floor** | Pointer to **int32** |  | [optional] 
**PhysicalStatus** | Pointer to **string** |  | [optional] [default to "OPERATIONAL"]
**OperationalStatus** | Pointer to **string** |  | [optional] [default to "AVAILABLE"]
**Accessibility** | Pointer to [**Model0**](Model0.md) |  | [optional] 
**LastMaintenanceDate** | Pointer to **string** |  | [optional] 
**NextScheduledMaintenance** | Pointer to **string** |  | [optional] 
**Metadata** | Pointer to [**Model0**](Model0.md) |  | [optional] 
**Links** | Pointer to [**InventoryUnitAllOfLinks**](InventoryUnitAllOfLinks.md) |  | [optional] 

## Methods

### NewInventoryUnit

`func NewInventoryUnit(propertyId string, unitNumber string, unitTypeId string, ) *InventoryUnit`

NewInventoryUnit instantiates a new InventoryUnit object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInventoryUnitWithDefaults

`func NewInventoryUnitWithDefaults() *InventoryUnit`

NewInventoryUnitWithDefaults instantiates a new InventoryUnit object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInventoryUnitId

`func (o *InventoryUnit) GetInventoryUnitId() string`

GetInventoryUnitId returns the InventoryUnitId field if non-nil, zero value otherwise.

### GetInventoryUnitIdOk

`func (o *InventoryUnit) GetInventoryUnitIdOk() (*string, bool)`

GetInventoryUnitIdOk returns a tuple with the InventoryUnitId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryUnitId

`func (o *InventoryUnit) SetInventoryUnitId(v string)`

SetInventoryUnitId sets InventoryUnitId field to given value.

### HasInventoryUnitId

`func (o *InventoryUnit) HasInventoryUnitId() bool`

HasInventoryUnitId returns a boolean if a field has been set.

### GetPropertyId

`func (o *InventoryUnit) GetPropertyId() string`

GetPropertyId returns the PropertyId field if non-nil, zero value otherwise.

### GetPropertyIdOk

`func (o *InventoryUnit) GetPropertyIdOk() (*string, bool)`

GetPropertyIdOk returns a tuple with the PropertyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyId

`func (o *InventoryUnit) SetPropertyId(v string)`

SetPropertyId sets PropertyId field to given value.


### GetUnitNumber

`func (o *InventoryUnit) GetUnitNumber() string`

GetUnitNumber returns the UnitNumber field if non-nil, zero value otherwise.

### GetUnitNumberOk

`func (o *InventoryUnit) GetUnitNumberOk() (*string, bool)`

GetUnitNumberOk returns a tuple with the UnitNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnitNumber

`func (o *InventoryUnit) SetUnitNumber(v string)`

SetUnitNumber sets UnitNumber field to given value.


### GetUnitTypeId

`func (o *InventoryUnit) GetUnitTypeId() string`

GetUnitTypeId returns the UnitTypeId field if non-nil, zero value otherwise.

### GetUnitTypeIdOk

`func (o *InventoryUnit) GetUnitTypeIdOk() (*string, bool)`

GetUnitTypeIdOk returns a tuple with the UnitTypeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnitTypeId

`func (o *InventoryUnit) SetUnitTypeId(v string)`

SetUnitTypeId sets UnitTypeId field to given value.


### GetUnitType

`func (o *InventoryUnit) GetUnitType() Model0`

GetUnitType returns the UnitType field if non-nil, zero value otherwise.

### GetUnitTypeOk

`func (o *InventoryUnit) GetUnitTypeOk() (*Model0, bool)`

GetUnitTypeOk returns a tuple with the UnitType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnitType

`func (o *InventoryUnit) SetUnitType(v Model0)`

SetUnitType sets UnitType field to given value.

### HasUnitType

`func (o *InventoryUnit) HasUnitType() bool`

HasUnitType returns a boolean if a field has been set.

### GetFloor

`func (o *InventoryUnit) GetFloor() int32`

GetFloor returns the Floor field if non-nil, zero value otherwise.

### GetFloorOk

`func (o *InventoryUnit) GetFloorOk() (*int32, bool)`

GetFloorOk returns a tuple with the Floor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFloor

`func (o *InventoryUnit) SetFloor(v int32)`

SetFloor sets Floor field to given value.

### HasFloor

`func (o *InventoryUnit) HasFloor() bool`

HasFloor returns a boolean if a field has been set.

### GetPhysicalStatus

`func (o *InventoryUnit) GetPhysicalStatus() string`

GetPhysicalStatus returns the PhysicalStatus field if non-nil, zero value otherwise.

### GetPhysicalStatusOk

`func (o *InventoryUnit) GetPhysicalStatusOk() (*string, bool)`

GetPhysicalStatusOk returns a tuple with the PhysicalStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhysicalStatus

`func (o *InventoryUnit) SetPhysicalStatus(v string)`

SetPhysicalStatus sets PhysicalStatus field to given value.

### HasPhysicalStatus

`func (o *InventoryUnit) HasPhysicalStatus() bool`

HasPhysicalStatus returns a boolean if a field has been set.

### GetOperationalStatus

`func (o *InventoryUnit) GetOperationalStatus() string`

GetOperationalStatus returns the OperationalStatus field if non-nil, zero value otherwise.

### GetOperationalStatusOk

`func (o *InventoryUnit) GetOperationalStatusOk() (*string, bool)`

GetOperationalStatusOk returns a tuple with the OperationalStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperationalStatus

`func (o *InventoryUnit) SetOperationalStatus(v string)`

SetOperationalStatus sets OperationalStatus field to given value.

### HasOperationalStatus

`func (o *InventoryUnit) HasOperationalStatus() bool`

HasOperationalStatus returns a boolean if a field has been set.

### GetAccessibility

`func (o *InventoryUnit) GetAccessibility() Model0`

GetAccessibility returns the Accessibility field if non-nil, zero value otherwise.

### GetAccessibilityOk

`func (o *InventoryUnit) GetAccessibilityOk() (*Model0, bool)`

GetAccessibilityOk returns a tuple with the Accessibility field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessibility

`func (o *InventoryUnit) SetAccessibility(v Model0)`

SetAccessibility sets Accessibility field to given value.

### HasAccessibility

`func (o *InventoryUnit) HasAccessibility() bool`

HasAccessibility returns a boolean if a field has been set.

### GetLastMaintenanceDate

`func (o *InventoryUnit) GetLastMaintenanceDate() string`

GetLastMaintenanceDate returns the LastMaintenanceDate field if non-nil, zero value otherwise.

### GetLastMaintenanceDateOk

`func (o *InventoryUnit) GetLastMaintenanceDateOk() (*string, bool)`

GetLastMaintenanceDateOk returns a tuple with the LastMaintenanceDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastMaintenanceDate

`func (o *InventoryUnit) SetLastMaintenanceDate(v string)`

SetLastMaintenanceDate sets LastMaintenanceDate field to given value.

### HasLastMaintenanceDate

`func (o *InventoryUnit) HasLastMaintenanceDate() bool`

HasLastMaintenanceDate returns a boolean if a field has been set.

### GetNextScheduledMaintenance

`func (o *InventoryUnit) GetNextScheduledMaintenance() string`

GetNextScheduledMaintenance returns the NextScheduledMaintenance field if non-nil, zero value otherwise.

### GetNextScheduledMaintenanceOk

`func (o *InventoryUnit) GetNextScheduledMaintenanceOk() (*string, bool)`

GetNextScheduledMaintenanceOk returns a tuple with the NextScheduledMaintenance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextScheduledMaintenance

`func (o *InventoryUnit) SetNextScheduledMaintenance(v string)`

SetNextScheduledMaintenance sets NextScheduledMaintenance field to given value.

### HasNextScheduledMaintenance

`func (o *InventoryUnit) HasNextScheduledMaintenance() bool`

HasNextScheduledMaintenance returns a boolean if a field has been set.

### GetMetadata

`func (o *InventoryUnit) GetMetadata() Model0`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *InventoryUnit) GetMetadataOk() (*Model0, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *InventoryUnit) SetMetadata(v Model0)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *InventoryUnit) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### GetLinks

`func (o *InventoryUnit) GetLinks() InventoryUnitAllOfLinks`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *InventoryUnit) GetLinksOk() (*InventoryUnitAllOfLinks, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *InventoryUnit) SetLinks(v InventoryUnitAllOfLinks)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *InventoryUnit) HasLinks() bool`

HasLinks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


