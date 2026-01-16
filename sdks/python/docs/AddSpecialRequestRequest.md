# AddSpecialRequestRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request** | **str** |  | 
**category** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.add_special_request_request import AddSpecialRequestRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddSpecialRequestRequest from a JSON string
add_special_request_request_instance = AddSpecialRequestRequest.from_json(json)
# print the JSON string representation of the object
print(AddSpecialRequestRequest.to_json())

# convert the object into a dict
add_special_request_request_dict = add_special_request_request_instance.to_dict()
# create an instance of AddSpecialRequestRequest from a dict
add_special_request_request_from_dict = AddSpecialRequestRequest.from_dict(add_special_request_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


