# VerifyGuest200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**verified** | **bool** |  | [optional] 
**verified_at** | **datetime** |  | [optional] 

## Example

```python
from stayos_api_client.models.verify_guest200_response import VerifyGuest200Response

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyGuest200Response from a JSON string
verify_guest200_response_instance = VerifyGuest200Response.from_json(json)
# print the JSON string representation of the object
print(VerifyGuest200Response.to_json())

# convert the object into a dict
verify_guest200_response_dict = verify_guest200_response_instance.to_dict()
# create an instance of VerifyGuest200Response from a dict
verify_guest200_response_from_dict = VerifyGuest200Response.from_dict(verify_guest200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


