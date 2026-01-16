# GuestProfile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**guest_id** | **UUID** |  | [readonly] 
**first_name** | **str** |  | 
**last_name** | **str** |  | 
**email** | **str** |  | 
**phone** | **str** |  | [optional] 
**date_of_birth** | **date** |  | [optional] 
**nationality** | **str** |  | [optional] 
**address** | [**GuestProfileAllOfAddress**](GuestProfileAllOfAddress.md) |  | [optional] 
**loyalty_tier** | **str** |  | [optional] 
**preferences** | **object** | Guest preferences | [optional] 
**created_at** | **datetime** |  | [optional] [readonly] 
**updated_at** | **datetime** |  | [optional] [readonly] 
**version** | **int** | Version for optimistic locking | [optional] [readonly] 

## Example

```python
from stayos_api_client.models.guest_profile import GuestProfile

# TODO update the JSON string below
json = "{}"
# create an instance of GuestProfile from a JSON string
guest_profile_instance = GuestProfile.from_json(json)
# print the JSON string representation of the object
print(GuestProfile.to_json())

# convert the object into a dict
guest_profile_dict = guest_profile_instance.to_dict()
# create an instance of GuestProfile from a dict
guest_profile_from_dict = GuestProfile.from_dict(guest_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


