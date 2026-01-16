# MenuItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_id** | **UUID** |  | [readonly] 
**name** | **str** |  | 
**description** | **str** |  | [optional] 
**category** | **str** |  | 
**price** | [**Model0**](Model0.md) |  | 
**available** | **bool** |  | [default to True]
**dietary** | **List[str]** |  | [optional] 
**allergens** | **List[str]** |  | [optional] 
**preparation_time** | **int** | Preparation time in minutes | [optional] 
**image_url** | **str** |  | [optional] 
**metadata** | [**Model0**](Model0.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.menu_item import MenuItem

# TODO update the JSON string below
json = "{}"
# create an instance of MenuItem from a JSON string
menu_item_instance = MenuItem.from_json(json)
# print the JSON string representation of the object
print(MenuItem.to_json())

# convert the object into a dict
menu_item_dict = menu_item_instance.to_dict()
# create an instance of MenuItem from a dict
menu_item_from_dict = MenuItem.from_dict(menu_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


