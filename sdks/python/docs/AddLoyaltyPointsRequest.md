# AddLoyaltyPointsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**points** | **int** |  | 
**reason** | **str** |  | 
**reference_id** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.add_loyalty_points_request import AddLoyaltyPointsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddLoyaltyPointsRequest from a JSON string
add_loyalty_points_request_instance = AddLoyaltyPointsRequest.from_json(json)
# print the JSON string representation of the object
print(AddLoyaltyPointsRequest.to_json())

# convert the object into a dict
add_loyalty_points_request_dict = add_loyalty_points_request_instance.to_dict()
# create an instance of AddLoyaltyPointsRequest from a dict
add_loyalty_points_request_from_dict = AddLoyaltyPointsRequest.from_dict(add_loyalty_points_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


