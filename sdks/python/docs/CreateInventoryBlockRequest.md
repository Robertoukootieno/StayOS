# CreateInventoryBlockRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**property_id** | **UUID** |  | 
**unit_type_id** | **UUID** |  | [optional] 
**start_date** | **date** |  | 
**end_date** | **date** |  | 
**quantity** | **int** |  | 
**reason** | **str** |  | 
**notes** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.create_inventory_block_request import CreateInventoryBlockRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateInventoryBlockRequest from a JSON string
create_inventory_block_request_instance = CreateInventoryBlockRequest.from_json(json)
# print the JSON string representation of the object
print(CreateInventoryBlockRequest.to_json())

# convert the object into a dict
create_inventory_block_request_dict = create_inventory_block_request_instance.to_dict()
# create an instance of CreateInventoryBlockRequest from a dict
create_inventory_block_request_from_dict = CreateInventoryBlockRequest.from_dict(create_inventory_block_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


