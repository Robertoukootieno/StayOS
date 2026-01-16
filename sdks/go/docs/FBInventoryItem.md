# FBInventoryItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InventoryItemId** | **string** |  | [readonly] 
**Name** | **string** |  | 
**Category** | Pointer to **string** |  | [optional] 
**Unit** | **string** |  | 
**CurrentStock** | **float32** |  | 
**MinimumStock** | Pointer to **float32** |  | [optional] 
**MaximumStock** | Pointer to **float32** |  | [optional] 
**ReorderPoint** | Pointer to **float32** |  | [optional] 
**UnitCost** | Pointer to [**Model0**](Model0.md) |  | [optional] 
**Supplier** | Pointer to **string** |  | [optional] 
**LastRestocked** | Pointer to **time.Time** |  | [optional] 
**ExpiryDate** | Pointer to **string** |  | [optional] 
**Metadata** | Pointer to [**Model0**](Model0.md) |  | [optional] 

## Methods

### NewFBInventoryItem

`func NewFBInventoryItem(inventoryItemId string, name string, unit string, currentStock float32, ) *FBInventoryItem`

NewFBInventoryItem instantiates a new FBInventoryItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFBInventoryItemWithDefaults

`func NewFBInventoryItemWithDefaults() *FBInventoryItem`

NewFBInventoryItemWithDefaults instantiates a new FBInventoryItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInventoryItemId

`func (o *FBInventoryItem) GetInventoryItemId() string`

GetInventoryItemId returns the InventoryItemId field if non-nil, zero value otherwise.

### GetInventoryItemIdOk

`func (o *FBInventoryItem) GetInventoryItemIdOk() (*string, bool)`

GetInventoryItemIdOk returns a tuple with the InventoryItemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryItemId

`func (o *FBInventoryItem) SetInventoryItemId(v string)`

SetInventoryItemId sets InventoryItemId field to given value.


### GetName

`func (o *FBInventoryItem) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *FBInventoryItem) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *FBInventoryItem) SetName(v string)`

SetName sets Name field to given value.


### GetCategory

`func (o *FBInventoryItem) GetCategory() string`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *FBInventoryItem) GetCategoryOk() (*string, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *FBInventoryItem) SetCategory(v string)`

SetCategory sets Category field to given value.

### HasCategory

`func (o *FBInventoryItem) HasCategory() bool`

HasCategory returns a boolean if a field has been set.

### GetUnit

`func (o *FBInventoryItem) GetUnit() string`

GetUnit returns the Unit field if non-nil, zero value otherwise.

### GetUnitOk

`func (o *FBInventoryItem) GetUnitOk() (*string, bool)`

GetUnitOk returns a tuple with the Unit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnit

`func (o *FBInventoryItem) SetUnit(v string)`

SetUnit sets Unit field to given value.


### GetCurrentStock

`func (o *FBInventoryItem) GetCurrentStock() float32`

GetCurrentStock returns the CurrentStock field if non-nil, zero value otherwise.

### GetCurrentStockOk

`func (o *FBInventoryItem) GetCurrentStockOk() (*float32, bool)`

GetCurrentStockOk returns a tuple with the CurrentStock field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentStock

`func (o *FBInventoryItem) SetCurrentStock(v float32)`

SetCurrentStock sets CurrentStock field to given value.


### GetMinimumStock

`func (o *FBInventoryItem) GetMinimumStock() float32`

GetMinimumStock returns the MinimumStock field if non-nil, zero value otherwise.

### GetMinimumStockOk

`func (o *FBInventoryItem) GetMinimumStockOk() (*float32, bool)`

GetMinimumStockOk returns a tuple with the MinimumStock field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinimumStock

`func (o *FBInventoryItem) SetMinimumStock(v float32)`

SetMinimumStock sets MinimumStock field to given value.

### HasMinimumStock

`func (o *FBInventoryItem) HasMinimumStock() bool`

HasMinimumStock returns a boolean if a field has been set.

### GetMaximumStock

`func (o *FBInventoryItem) GetMaximumStock() float32`

GetMaximumStock returns the MaximumStock field if non-nil, zero value otherwise.

### GetMaximumStockOk

`func (o *FBInventoryItem) GetMaximumStockOk() (*float32, bool)`

GetMaximumStockOk returns a tuple with the MaximumStock field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaximumStock

`func (o *FBInventoryItem) SetMaximumStock(v float32)`

SetMaximumStock sets MaximumStock field to given value.

### HasMaximumStock

`func (o *FBInventoryItem) HasMaximumStock() bool`

HasMaximumStock returns a boolean if a field has been set.

### GetReorderPoint

`func (o *FBInventoryItem) GetReorderPoint() float32`

GetReorderPoint returns the ReorderPoint field if non-nil, zero value otherwise.

### GetReorderPointOk

`func (o *FBInventoryItem) GetReorderPointOk() (*float32, bool)`

GetReorderPointOk returns a tuple with the ReorderPoint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReorderPoint

`func (o *FBInventoryItem) SetReorderPoint(v float32)`

SetReorderPoint sets ReorderPoint field to given value.

### HasReorderPoint

`func (o *FBInventoryItem) HasReorderPoint() bool`

HasReorderPoint returns a boolean if a field has been set.

### GetUnitCost

`func (o *FBInventoryItem) GetUnitCost() Model0`

GetUnitCost returns the UnitCost field if non-nil, zero value otherwise.

### GetUnitCostOk

`func (o *FBInventoryItem) GetUnitCostOk() (*Model0, bool)`

GetUnitCostOk returns a tuple with the UnitCost field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnitCost

`func (o *FBInventoryItem) SetUnitCost(v Model0)`

SetUnitCost sets UnitCost field to given value.

### HasUnitCost

`func (o *FBInventoryItem) HasUnitCost() bool`

HasUnitCost returns a boolean if a field has been set.

### GetSupplier

`func (o *FBInventoryItem) GetSupplier() string`

GetSupplier returns the Supplier field if non-nil, zero value otherwise.

### GetSupplierOk

`func (o *FBInventoryItem) GetSupplierOk() (*string, bool)`

GetSupplierOk returns a tuple with the Supplier field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupplier

`func (o *FBInventoryItem) SetSupplier(v string)`

SetSupplier sets Supplier field to given value.

### HasSupplier

`func (o *FBInventoryItem) HasSupplier() bool`

HasSupplier returns a boolean if a field has been set.

### GetLastRestocked

`func (o *FBInventoryItem) GetLastRestocked() time.Time`

GetLastRestocked returns the LastRestocked field if non-nil, zero value otherwise.

### GetLastRestockedOk

`func (o *FBInventoryItem) GetLastRestockedOk() (*time.Time, bool)`

GetLastRestockedOk returns a tuple with the LastRestocked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastRestocked

`func (o *FBInventoryItem) SetLastRestocked(v time.Time)`

SetLastRestocked sets LastRestocked field to given value.

### HasLastRestocked

`func (o *FBInventoryItem) HasLastRestocked() bool`

HasLastRestocked returns a boolean if a field has been set.

### GetExpiryDate

`func (o *FBInventoryItem) GetExpiryDate() string`

GetExpiryDate returns the ExpiryDate field if non-nil, zero value otherwise.

### GetExpiryDateOk

`func (o *FBInventoryItem) GetExpiryDateOk() (*string, bool)`

GetExpiryDateOk returns a tuple with the ExpiryDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiryDate

`func (o *FBInventoryItem) SetExpiryDate(v string)`

SetExpiryDate sets ExpiryDate field to given value.

### HasExpiryDate

`func (o *FBInventoryItem) HasExpiryDate() bool`

HasExpiryDate returns a boolean if a field has been set.

### GetMetadata

`func (o *FBInventoryItem) GetMetadata() Model0`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *FBInventoryItem) GetMetadataOk() (*Model0, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *FBInventoryItem) SetMetadata(v Model0)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *FBInventoryItem) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


