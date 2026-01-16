# VerifyGuestRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**verification_type** | **str** |  | [optional] 
**verification_data** | **object** |  | [optional] 

## Example

```python
from stayos_api_client.models.verify_guest_request import VerifyGuestRequest

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyGuestRequest from a JSON string
verify_guest_request_instance = VerifyGuestRequest.from_json(json)
# print the JSON string representation of the object
print(VerifyGuestRequest.to_json())

# convert the object into a dict
verify_guest_request_dict = verify_guest_request_instance.to_dict()
# create an instance of VerifyGuestRequest from a dict
verify_guest_request_from_dict = VerifyGuestRequest.from_dict(verify_guest_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


