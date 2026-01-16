# ReceiveFBInventoryRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quantity** | **float** |  | 
**notes** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.receive_fb_inventory_request import ReceiveFBInventoryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReceiveFBInventoryRequest from a JSON string
receive_fb_inventory_request_instance = ReceiveFBInventoryRequest.from_json(json)
# print the JSON string representation of the object
print(ReceiveFBInventoryRequest.to_json())

# convert the object into a dict
receive_fb_inventory_request_dict = receive_fb_inventory_request_instance.to_dict()
# create an instance of ReceiveFBInventoryRequest from a dict
receive_fb_inventory_request_from_dict = ReceiveFBInventoryRequest.from_dict(receive_fb_inventory_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


