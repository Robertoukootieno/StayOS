# SupplierAllOfBankDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_name** | **str** |  | [optional] 
**account_number** | **str** |  | [optional] 
**routing_number** | **str** |  | [optional] 
**bank_name** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.supplier_all_of_bank_details import SupplierAllOfBankDetails

# TODO update the JSON string below
json = "{}"
# create an instance of SupplierAllOfBankDetails from a JSON string
supplier_all_of_bank_details_instance = SupplierAllOfBankDetails.from_json(json)
# print the JSON string representation of the object
print(SupplierAllOfBankDetails.to_json())

# convert the object into a dict
supplier_all_of_bank_details_dict = supplier_all_of_bank_details_instance.to_dict()
# create an instance of SupplierAllOfBankDetails from a dict
supplier_all_of_bank_details_from_dict = SupplierAllOfBankDetails.from_dict(supplier_all_of_bank_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


