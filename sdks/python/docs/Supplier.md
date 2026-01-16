# Supplier


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**supplier_id** | **UUID** |  | [readonly] 
**name** | **str** |  | 
**category** | **str** |  | 
**status** | **str** |  | 
**contact_info** | [**Model0**](Model0.md) |  | [optional] 
**address** | [**Model0**](Model0.md) |  | [optional] 
**payment_terms** | **str** |  | [optional] 
**tax_id** | **str** | Tax identification number | [optional] 
**bank_details** | [**SupplierAllOfBankDetails**](SupplierAllOfBankDetails.md) |  | [optional] 
**rating** | **float** | Supplier performance rating | [optional] 
**notes** | **str** |  | [optional] 
**metadata** | [**Model0**](Model0.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.supplier import Supplier

# TODO update the JSON string below
json = "{}"
# create an instance of Supplier from a JSON string
supplier_instance = Supplier.from_json(json)
# print the JSON string representation of the object
print(Supplier.to_json())

# convert the object into a dict
supplier_dict = supplier_instance.to_dict()
# create an instance of Supplier from a dict
supplier_from_dict = Supplier.from_dict(supplier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


