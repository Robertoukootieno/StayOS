# CountFBInventoryRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**counts** | [**List[CountFBInventoryRequestCountsInner]**](CountFBInventoryRequestCountsInner.md) |  | 

## Example

```python
from stayos_api_client.models.count_fb_inventory_request import CountFBInventoryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CountFBInventoryRequest from a JSON string
count_fb_inventory_request_instance = CountFBInventoryRequest.from_json(json)
# print the JSON string representation of the object
print(CountFBInventoryRequest.to_json())

# convert the object into a dict
count_fb_inventory_request_dict = count_fb_inventory_request_instance.to_dict()
# create an instance of CountFBInventoryRequest from a dict
count_fb_inventory_request_from_dict = CountFBInventoryRequest.from_dict(count_fb_inventory_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


