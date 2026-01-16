# StayAllOfLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_self** | **str** |  | [optional] 
**reservation** | **str** |  | [optional] 
**guest** | **str** |  | [optional] 
**folio** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.stay_all_of_links import StayAllOfLinks

# TODO update the JSON string below
json = "{}"
# create an instance of StayAllOfLinks from a JSON string
stay_all_of_links_instance = StayAllOfLinks.from_json(json)
# print the JSON string representation of the object
print(StayAllOfLinks.to_json())

# convert the object into a dict
stay_all_of_links_dict = stay_all_of_links_instance.to_dict()
# create an instance of StayAllOfLinks from a dict
stay_all_of_links_from_dict = StayAllOfLinks.from_dict(stay_all_of_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


