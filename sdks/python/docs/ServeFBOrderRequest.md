# ServeFBOrderRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**served_at** | **datetime** |  | [optional] 
**served_by** | **UUID** |  | [optional] 

## Example

```python
from stayos_api_client.models.serve_fb_order_request import ServeFBOrderRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ServeFBOrderRequest from a JSON string
serve_fb_order_request_instance = ServeFBOrderRequest.from_json(json)
# print the JSON string representation of the object
print(ServeFBOrderRequest.to_json())

# convert the object into a dict
serve_fb_order_request_dict = serve_fb_order_request_instance.to_dict()
# create an instance of ServeFBOrderRequest from a dict
serve_fb_order_request_from_dict = ServeFBOrderRequest.from_dict(serve_fb_order_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


