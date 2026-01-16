# MenuItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ItemId** | **string** |  | [readonly] 
**Name** | **string** |  | 
**Description** | Pointer to **string** |  | [optional] 
**Category** | **string** |  | 
**Price** | [**Model0**](Model0.md) |  | 
**Available** | **bool** |  | [default to true]
**Dietary** | Pointer to **[]string** |  | [optional] 
**Allergens** | Pointer to **[]string** |  | [optional] 
**PreparationTime** | Pointer to **int32** | Preparation time in minutes | [optional] 
**ImageUrl** | Pointer to **string** |  | [optional] 
**Metadata** | Pointer to [**Model0**](Model0.md) |  | [optional] 

## Methods

### NewMenuItem

`func NewMenuItem(itemId string, name string, category string, price Model0, available bool, ) *MenuItem`

NewMenuItem instantiates a new MenuItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMenuItemWithDefaults

`func NewMenuItemWithDefaults() *MenuItem`

NewMenuItemWithDefaults instantiates a new MenuItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItemId

`func (o *MenuItem) GetItemId() string`

GetItemId returns the ItemId field if non-nil, zero value otherwise.

### GetItemIdOk

`func (o *MenuItem) GetItemIdOk() (*string, bool)`

GetItemIdOk returns a tuple with the ItemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemId

`func (o *MenuItem) SetItemId(v string)`

SetItemId sets ItemId field to given value.


### GetName

`func (o *MenuItem) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MenuItem) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MenuItem) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *MenuItem) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *MenuItem) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *MenuItem) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *MenuItem) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetCategory

`func (o *MenuItem) GetCategory() string`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *MenuItem) GetCategoryOk() (*string, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *MenuItem) SetCategory(v string)`

SetCategory sets Category field to given value.


### GetPrice

`func (o *MenuItem) GetPrice() Model0`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *MenuItem) GetPriceOk() (*Model0, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *MenuItem) SetPrice(v Model0)`

SetPrice sets Price field to given value.


### GetAvailable

`func (o *MenuItem) GetAvailable() bool`

GetAvailable returns the Available field if non-nil, zero value otherwise.

### GetAvailableOk

`func (o *MenuItem) GetAvailableOk() (*bool, bool)`

GetAvailableOk returns a tuple with the Available field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailable

`func (o *MenuItem) SetAvailable(v bool)`

SetAvailable sets Available field to given value.


### GetDietary

`func (o *MenuItem) GetDietary() []string`

GetDietary returns the Dietary field if non-nil, zero value otherwise.

### GetDietaryOk

`func (o *MenuItem) GetDietaryOk() (*[]string, bool)`

GetDietaryOk returns a tuple with the Dietary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDietary

`func (o *MenuItem) SetDietary(v []string)`

SetDietary sets Dietary field to given value.

### HasDietary

`func (o *MenuItem) HasDietary() bool`

HasDietary returns a boolean if a field has been set.

### GetAllergens

`func (o *MenuItem) GetAllergens() []string`

GetAllergens returns the Allergens field if non-nil, zero value otherwise.

### GetAllergensOk

`func (o *MenuItem) GetAllergensOk() (*[]string, bool)`

GetAllergensOk returns a tuple with the Allergens field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllergens

`func (o *MenuItem) SetAllergens(v []string)`

SetAllergens sets Allergens field to given value.

### HasAllergens

`func (o *MenuItem) HasAllergens() bool`

HasAllergens returns a boolean if a field has been set.

### GetPreparationTime

`func (o *MenuItem) GetPreparationTime() int32`

GetPreparationTime returns the PreparationTime field if non-nil, zero value otherwise.

### GetPreparationTimeOk

`func (o *MenuItem) GetPreparationTimeOk() (*int32, bool)`

GetPreparationTimeOk returns a tuple with the PreparationTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreparationTime

`func (o *MenuItem) SetPreparationTime(v int32)`

SetPreparationTime sets PreparationTime field to given value.

### HasPreparationTime

`func (o *MenuItem) HasPreparationTime() bool`

HasPreparationTime returns a boolean if a field has been set.

### GetImageUrl

`func (o *MenuItem) GetImageUrl() string`

GetImageUrl returns the ImageUrl field if non-nil, zero value otherwise.

### GetImageUrlOk

`func (o *MenuItem) GetImageUrlOk() (*string, bool)`

GetImageUrlOk returns a tuple with the ImageUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImageUrl

`func (o *MenuItem) SetImageUrl(v string)`

SetImageUrl sets ImageUrl field to given value.

### HasImageUrl

`func (o *MenuItem) HasImageUrl() bool`

HasImageUrl returns a boolean if a field has been set.

### GetMetadata

`func (o *MenuItem) GetMetadata() Model0`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *MenuItem) GetMetadataOk() (*Model0, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *MenuItem) SetMetadata(v Model0)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *MenuItem) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


