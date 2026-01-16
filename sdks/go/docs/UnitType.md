# UnitType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UnitTypeId** | Pointer to **string** |  | [optional] [readonly] 
**PropertyId** | Pointer to **string** |  | [optional] 
**Name** | **string** | Unit type name | 
**Description** | Pointer to **string** |  | [optional] 
**Capacity** | [**Model0**](Model0.md) |  | 
**BedConfiguration** | Pointer to [**[]UnitTypeAllOfBedConfiguration**](UnitTypeAllOfBedConfiguration.md) |  | [optional] 
**Size** | Pointer to [**UnitTypeAllOfSize**](UnitTypeAllOfSize.md) |  | [optional] 
**Amenities** | Pointer to **[]string** |  | [optional] 
**Photos** | Pointer to [**[]UnitTypeAllOfPhotos**](UnitTypeAllOfPhotos.md) |  | [optional] 
**Metadata** | Pointer to [**Model0**](Model0.md) |  | [optional] 

## Methods

### NewUnitType

`func NewUnitType(name string, capacity Model0, ) *UnitType`

NewUnitType instantiates a new UnitType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUnitTypeWithDefaults

`func NewUnitTypeWithDefaults() *UnitType`

NewUnitTypeWithDefaults instantiates a new UnitType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUnitTypeId

`func (o *UnitType) GetUnitTypeId() string`

GetUnitTypeId returns the UnitTypeId field if non-nil, zero value otherwise.

### GetUnitTypeIdOk

`func (o *UnitType) GetUnitTypeIdOk() (*string, bool)`

GetUnitTypeIdOk returns a tuple with the UnitTypeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnitTypeId

`func (o *UnitType) SetUnitTypeId(v string)`

SetUnitTypeId sets UnitTypeId field to given value.

### HasUnitTypeId

`func (o *UnitType) HasUnitTypeId() bool`

HasUnitTypeId returns a boolean if a field has been set.

### GetPropertyId

`func (o *UnitType) GetPropertyId() string`

GetPropertyId returns the PropertyId field if non-nil, zero value otherwise.

### GetPropertyIdOk

`func (o *UnitType) GetPropertyIdOk() (*string, bool)`

GetPropertyIdOk returns a tuple with the PropertyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyId

`func (o *UnitType) SetPropertyId(v string)`

SetPropertyId sets PropertyId field to given value.

### HasPropertyId

`func (o *UnitType) HasPropertyId() bool`

HasPropertyId returns a boolean if a field has been set.

### GetName

`func (o *UnitType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *UnitType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *UnitType) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *UnitType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *UnitType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *UnitType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *UnitType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetCapacity

`func (o *UnitType) GetCapacity() Model0`

GetCapacity returns the Capacity field if non-nil, zero value otherwise.

### GetCapacityOk

`func (o *UnitType) GetCapacityOk() (*Model0, bool)`

GetCapacityOk returns a tuple with the Capacity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCapacity

`func (o *UnitType) SetCapacity(v Model0)`

SetCapacity sets Capacity field to given value.


### GetBedConfiguration

`func (o *UnitType) GetBedConfiguration() []UnitTypeAllOfBedConfiguration`

GetBedConfiguration returns the BedConfiguration field if non-nil, zero value otherwise.

### GetBedConfigurationOk

`func (o *UnitType) GetBedConfigurationOk() (*[]UnitTypeAllOfBedConfiguration, bool)`

GetBedConfigurationOk returns a tuple with the BedConfiguration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBedConfiguration

`func (o *UnitType) SetBedConfiguration(v []UnitTypeAllOfBedConfiguration)`

SetBedConfiguration sets BedConfiguration field to given value.

### HasBedConfiguration

`func (o *UnitType) HasBedConfiguration() bool`

HasBedConfiguration returns a boolean if a field has been set.

### GetSize

`func (o *UnitType) GetSize() UnitTypeAllOfSize`

GetSize returns the Size field if non-nil, zero value otherwise.

### GetSizeOk

`func (o *UnitType) GetSizeOk() (*UnitTypeAllOfSize, bool)`

GetSizeOk returns a tuple with the Size field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSize

`func (o *UnitType) SetSize(v UnitTypeAllOfSize)`

SetSize sets Size field to given value.

### HasSize

`func (o *UnitType) HasSize() bool`

HasSize returns a boolean if a field has been set.

### GetAmenities

`func (o *UnitType) GetAmenities() []string`

GetAmenities returns the Amenities field if non-nil, zero value otherwise.

### GetAmenitiesOk

`func (o *UnitType) GetAmenitiesOk() (*[]string, bool)`

GetAmenitiesOk returns a tuple with the Amenities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmenities

`func (o *UnitType) SetAmenities(v []string)`

SetAmenities sets Amenities field to given value.

### HasAmenities

`func (o *UnitType) HasAmenities() bool`

HasAmenities returns a boolean if a field has been set.

### GetPhotos

`func (o *UnitType) GetPhotos() []UnitTypeAllOfPhotos`

GetPhotos returns the Photos field if non-nil, zero value otherwise.

### GetPhotosOk

`func (o *UnitType) GetPhotosOk() (*[]UnitTypeAllOfPhotos, bool)`

GetPhotosOk returns a tuple with the Photos field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhotos

`func (o *UnitType) SetPhotos(v []UnitTypeAllOfPhotos)`

SetPhotos sets Photos field to given value.

### HasPhotos

`func (o *UnitType) HasPhotos() bool`

HasPhotos returns a boolean if a field has been set.

### GetMetadata

`func (o *UnitType) GetMetadata() Model0`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *UnitType) GetMetadataOk() (*Model0, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *UnitType) SetMetadata(v Model0)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *UnitType) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


