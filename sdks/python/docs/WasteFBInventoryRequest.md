# WasteFBInventoryRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quantity** | **float** |  | 
**reason** | **str** |  | 
**notes** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.waste_fb_inventory_request import WasteFBInventoryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of WasteFBInventoryRequest from a JSON string
waste_fb_inventory_request_instance = WasteFBInventoryRequest.from_json(json)
# print the JSON string representation of the object
print(WasteFBInventoryRequest.to_json())

# convert the object into a dict
waste_fb_inventory_request_dict = waste_fb_inventory_request_instance.to_dict()
# create an instance of WasteFBInventoryRequest from a dict
waste_fb_inventory_request_from_dict = WasteFBInventoryRequest.from_dict(waste_fb_inventory_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


