# GuestProfileAllOfAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**street** | **str** |  | [optional] 
**city** | **str** |  | [optional] 
**state** | **str** |  | [optional] 
**postal_code** | **str** |  | [optional] 
**country** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.guest_profile_all_of_address import GuestProfileAllOfAddress

# TODO update the JSON string below
json = "{}"
# create an instance of GuestProfileAllOfAddress from a JSON string
guest_profile_all_of_address_instance = GuestProfileAllOfAddress.from_json(json)
# print the JSON string representation of the object
print(GuestProfileAllOfAddress.to_json())

# convert the object into a dict
guest_profile_all_of_address_dict = guest_profile_all_of_address_instance.to_dict()
# create an instance of GuestProfileAllOfAddress from a dict
guest_profile_all_of_address_from_dict = GuestProfileAllOfAddress.from_dict(guest_profile_all_of_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


