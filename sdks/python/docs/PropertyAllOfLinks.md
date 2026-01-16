# PropertyAllOfLinks

HATEOAS links

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_self** | **str** |  | [optional] 
**inventory_units** | **str** |  | [optional] 
**rate_strategies** | **str** |  | [optional] 
**reservations** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.property_all_of_links import PropertyAllOfLinks

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyAllOfLinks from a JSON string
property_all_of_links_instance = PropertyAllOfLinks.from_json(json)
# print the JSON string representation of the object
print(PropertyAllOfLinks.to_json())

# convert the object into a dict
property_all_of_links_dict = property_all_of_links_instance.to_dict()
# create an instance of PropertyAllOfLinks from a dict
property_all_of_links_from_dict = PropertyAllOfLinks.from_dict(property_all_of_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


