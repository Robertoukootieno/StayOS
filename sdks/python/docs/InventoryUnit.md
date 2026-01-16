# InventoryUnit


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inventory_unit_id** | **UUID** |  | [optional] [readonly] 
**property_id** | **UUID** |  | 
**unit_number** | **str** | Human-readable unit identifier | 
**unit_type_id** | **UUID** | Reference to unit type classification | 
**unit_type** | [**Model0**](Model0.md) |  | [optional] 
**floor** | **int** |  | [optional] 
**physical_status** | **str** |  | [optional] [default to 'OPERATIONAL']
**operational_status** | **str** |  | [optional] [default to 'AVAILABLE']
**accessibility** | [**Model0**](Model0.md) |  | [optional] 
**last_maintenance_date** | **date** |  | [optional] 
**next_scheduled_maintenance** | **date** |  | [optional] 
**metadata** | [**Model0**](Model0.md) |  | [optional] 
**links** | [**InventoryUnitAllOfLinks**](InventoryUnitAllOfLinks.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.inventory_unit import InventoryUnit

# TODO update the JSON string below
json = "{}"
# create an instance of InventoryUnit from a JSON string
inventory_unit_instance = InventoryUnit.from_json(json)
# print the JSON string representation of the object
print(InventoryUnit.to_json())

# convert the object into a dict
inventory_unit_dict = inventory_unit_instance.to_dict()
# create an instance of InventoryUnit from a dict
inventory_unit_from_dict = InventoryUnit.from_dict(inventory_unit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


