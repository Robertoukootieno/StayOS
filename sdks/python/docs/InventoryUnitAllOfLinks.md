# InventoryUnitAllOfLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_self** | **str** |  | [optional] 
**var_property** | **str** |  | [optional] 
**availability** | **str** |  | [optional] 
**current_reservation** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.inventory_unit_all_of_links import InventoryUnitAllOfLinks

# TODO update the JSON string below
json = "{}"
# create an instance of InventoryUnitAllOfLinks from a JSON string
inventory_unit_all_of_links_instance = InventoryUnitAllOfLinks.from_json(json)
# print the JSON string representation of the object
print(InventoryUnitAllOfLinks.to_json())

# convert the object into a dict
inventory_unit_all_of_links_dict = inventory_unit_all_of_links_instance.to_dict()
# create an instance of InventoryUnitAllOfLinks from a dict
inventory_unit_all_of_links_from_dict = InventoryUnitAllOfLinks.from_dict(inventory_unit_all_of_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


