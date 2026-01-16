# TestChannelConnection200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**message** | **str** |  | [optional] 
**response_time** | **int** |  | [optional] 

## Example

```python
from stayos_api_client.models.test_channel_connection200_response import TestChannelConnection200Response

# TODO update the JSON string below
json = "{}"
# create an instance of TestChannelConnection200Response from a JSON string
test_channel_connection200_response_instance = TestChannelConnection200Response.from_json(json)
# print the JSON string representation of the object
print(TestChannelConnection200Response.to_json())

# convert the object into a dict
test_channel_connection200_response_dict = test_channel_connection200_response_instance.to_dict()
# create an instance of TestChannelConnection200Response from a dict
test_channel_connection200_response_from_dict = TestChannelConnection200Response.from_dict(test_channel_connection200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


