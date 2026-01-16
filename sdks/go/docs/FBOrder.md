# FBOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OrderId** | **string** |  | [readonly] 
**PropertyId** | **string** |  | 
**StayId** | Pointer to **string** |  | [optional] 
**GuestId** | Pointer to **string** |  | [optional] 
**InventoryUnitId** | Pointer to **string** | Room number for room service | [optional] 
**OrderType** | **string** |  | 
**Status** | **string** |  | 
**Items** | Pointer to [**[]FBOrderAllOfItems**](FBOrderAllOfItems.md) |  | [optional] 
**Subtotal** | Pointer to [**FBOrderAllOfSubtotal**](FBOrderAllOfSubtotal.md) |  | [optional] 
**Tax** | Pointer to [**FBOrderAllOfTax**](FBOrderAllOfTax.md) |  | [optional] 
**ServiceCharge** | Pointer to [**FBOrderAllOfServiceCharge**](FBOrderAllOfServiceCharge.md) |  | [optional] 
**Total** | Pointer to [**FBOrderAllOfTotal**](FBOrderAllOfTotal.md) |  | [optional] 
**SpecialInstructions** | Pointer to **string** |  | [optional] 
**DeliveryTime** | Pointer to **time.Time** |  | [optional] 
**ServedAt** | Pointer to **time.Time** |  | [optional] 
**Metadata** | Pointer to [**Model0**](Model0.md) |  | [optional] 

## Methods

### NewFBOrder

`func NewFBOrder(orderId string, propertyId string, orderType string, status string, ) *FBOrder`

NewFBOrder instantiates a new FBOrder object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFBOrderWithDefaults

`func NewFBOrderWithDefaults() *FBOrder`

NewFBOrderWithDefaults instantiates a new FBOrder object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOrderId

`func (o *FBOrder) GetOrderId() string`

GetOrderId returns the OrderId field if non-nil, zero value otherwise.

### GetOrderIdOk

`func (o *FBOrder) GetOrderIdOk() (*string, bool)`

GetOrderIdOk returns a tuple with the OrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderId

`func (o *FBOrder) SetOrderId(v string)`

SetOrderId sets OrderId field to given value.


### GetPropertyId

`func (o *FBOrder) GetPropertyId() string`

GetPropertyId returns the PropertyId field if non-nil, zero value otherwise.

### GetPropertyIdOk

`func (o *FBOrder) GetPropertyIdOk() (*string, bool)`

GetPropertyIdOk returns a tuple with the PropertyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyId

`func (o *FBOrder) SetPropertyId(v string)`

SetPropertyId sets PropertyId field to given value.


### GetStayId

`func (o *FBOrder) GetStayId() string`

GetStayId returns the StayId field if non-nil, zero value otherwise.

### GetStayIdOk

`func (o *FBOrder) GetStayIdOk() (*string, bool)`

GetStayIdOk returns a tuple with the StayId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayId

`func (o *FBOrder) SetStayId(v string)`

SetStayId sets StayId field to given value.

### HasStayId

`func (o *FBOrder) HasStayId() bool`

HasStayId returns a boolean if a field has been set.

### GetGuestId

`func (o *FBOrder) GetGuestId() string`

GetGuestId returns the GuestId field if non-nil, zero value otherwise.

### GetGuestIdOk

`func (o *FBOrder) GetGuestIdOk() (*string, bool)`

GetGuestIdOk returns a tuple with the GuestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestId

`func (o *FBOrder) SetGuestId(v string)`

SetGuestId sets GuestId field to given value.

### HasGuestId

`func (o *FBOrder) HasGuestId() bool`

HasGuestId returns a boolean if a field has been set.

### GetInventoryUnitId

`func (o *FBOrder) GetInventoryUnitId() string`

GetInventoryUnitId returns the InventoryUnitId field if non-nil, zero value otherwise.

### GetInventoryUnitIdOk

`func (o *FBOrder) GetInventoryUnitIdOk() (*string, bool)`

GetInventoryUnitIdOk returns a tuple with the InventoryUnitId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryUnitId

`func (o *FBOrder) SetInventoryUnitId(v string)`

SetInventoryUnitId sets InventoryUnitId field to given value.

### HasInventoryUnitId

`func (o *FBOrder) HasInventoryUnitId() bool`

HasInventoryUnitId returns a boolean if a field has been set.

### GetOrderType

`func (o *FBOrder) GetOrderType() string`

GetOrderType returns the OrderType field if non-nil, zero value otherwise.

### GetOrderTypeOk

`func (o *FBOrder) GetOrderTypeOk() (*string, bool)`

GetOrderTypeOk returns a tuple with the OrderType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderType

`func (o *FBOrder) SetOrderType(v string)`

SetOrderType sets OrderType field to given value.


### GetStatus

`func (o *FBOrder) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *FBOrder) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *FBOrder) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetItems

`func (o *FBOrder) GetItems() []FBOrderAllOfItems`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *FBOrder) GetItemsOk() (*[]FBOrderAllOfItems, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *FBOrder) SetItems(v []FBOrderAllOfItems)`

SetItems sets Items field to given value.

### HasItems

`func (o *FBOrder) HasItems() bool`

HasItems returns a boolean if a field has been set.

### GetSubtotal

`func (o *FBOrder) GetSubtotal() FBOrderAllOfSubtotal`

GetSubtotal returns the Subtotal field if non-nil, zero value otherwise.

### GetSubtotalOk

`func (o *FBOrder) GetSubtotalOk() (*FBOrderAllOfSubtotal, bool)`

GetSubtotalOk returns a tuple with the Subtotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubtotal

`func (o *FBOrder) SetSubtotal(v FBOrderAllOfSubtotal)`

SetSubtotal sets Subtotal field to given value.

### HasSubtotal

`func (o *FBOrder) HasSubtotal() bool`

HasSubtotal returns a boolean if a field has been set.

### GetTax

`func (o *FBOrder) GetTax() FBOrderAllOfTax`

GetTax returns the Tax field if non-nil, zero value otherwise.

### GetTaxOk

`func (o *FBOrder) GetTaxOk() (*FBOrderAllOfTax, bool)`

GetTaxOk returns a tuple with the Tax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTax

`func (o *FBOrder) SetTax(v FBOrderAllOfTax)`

SetTax sets Tax field to given value.

### HasTax

`func (o *FBOrder) HasTax() bool`

HasTax returns a boolean if a field has been set.

### GetServiceCharge

`func (o *FBOrder) GetServiceCharge() FBOrderAllOfServiceCharge`

GetServiceCharge returns the ServiceCharge field if non-nil, zero value otherwise.

### GetServiceChargeOk

`func (o *FBOrder) GetServiceChargeOk() (*FBOrderAllOfServiceCharge, bool)`

GetServiceChargeOk returns a tuple with the ServiceCharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceCharge

`func (o *FBOrder) SetServiceCharge(v FBOrderAllOfServiceCharge)`

SetServiceCharge sets ServiceCharge field to given value.

### HasServiceCharge

`func (o *FBOrder) HasServiceCharge() bool`

HasServiceCharge returns a boolean if a field has been set.

### GetTotal

`func (o *FBOrder) GetTotal() FBOrderAllOfTotal`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *FBOrder) GetTotalOk() (*FBOrderAllOfTotal, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *FBOrder) SetTotal(v FBOrderAllOfTotal)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *FBOrder) HasTotal() bool`

HasTotal returns a boolean if a field has been set.

### GetSpecialInstructions

`func (o *FBOrder) GetSpecialInstructions() string`

GetSpecialInstructions returns the SpecialInstructions field if non-nil, zero value otherwise.

### GetSpecialInstructionsOk

`func (o *FBOrder) GetSpecialInstructionsOk() (*string, bool)`

GetSpecialInstructionsOk returns a tuple with the SpecialInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpecialInstructions

`func (o *FBOrder) SetSpecialInstructions(v string)`

SetSpecialInstructions sets SpecialInstructions field to given value.

### HasSpecialInstructions

`func (o *FBOrder) HasSpecialInstructions() bool`

HasSpecialInstructions returns a boolean if a field has been set.

### GetDeliveryTime

`func (o *FBOrder) GetDeliveryTime() time.Time`

GetDeliveryTime returns the DeliveryTime field if non-nil, zero value otherwise.

### GetDeliveryTimeOk

`func (o *FBOrder) GetDeliveryTimeOk() (*time.Time, bool)`

GetDeliveryTimeOk returns a tuple with the DeliveryTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveryTime

`func (o *FBOrder) SetDeliveryTime(v time.Time)`

SetDeliveryTime sets DeliveryTime field to given value.

### HasDeliveryTime

`func (o *FBOrder) HasDeliveryTime() bool`

HasDeliveryTime returns a boolean if a field has been set.

### GetServedAt

`func (o *FBOrder) GetServedAt() time.Time`

GetServedAt returns the ServedAt field if non-nil, zero value otherwise.

### GetServedAtOk

`func (o *FBOrder) GetServedAtOk() (*time.Time, bool)`

GetServedAtOk returns a tuple with the ServedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServedAt

`func (o *FBOrder) SetServedAt(v time.Time)`

SetServedAt sets ServedAt field to given value.

### HasServedAt

`func (o *FBOrder) HasServedAt() bool`

HasServedAt returns a boolean if a field has been set.

### GetMetadata

`func (o *FBOrder) GetMetadata() Model0`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *FBOrder) GetMetadataOk() (*Model0, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *FBOrder) SetMetadata(v Model0)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *FBOrder) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


