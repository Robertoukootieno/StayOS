# ExtendStayRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_check_out_date** | **date** |  | 

## Example

```python
from stayos_api_client.models.extend_stay_request import ExtendStayRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExtendStayRequest from a JSON string
extend_stay_request_instance = ExtendStayRequest.from_json(json)
# print the JSON string representation of the object
print(ExtendStayRequest.to_json())

# convert the object into a dict
extend_stay_request_dict = extend_stay_request_instance.to_dict()
# create an instance of ExtendStayRequest from a dict
extend_stay_request_from_dict = ExtendStayRequest.from_dict(extend_stay_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


