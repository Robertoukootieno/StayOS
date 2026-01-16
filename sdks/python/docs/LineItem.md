# LineItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**line_item_id** | **UUID** |  | [readonly] 
**description** | **str** |  | 
**category** | **str** |  | 
**amount** | [**Model0**](Model0.md) |  | 
**quantity** | **int** |  | [optional] [default to 1]
**unit_price** | [**Model0**](Model0.md) |  | [optional] 
**var_date** | **date** |  | [optional] 
**is_voided** | **bool** |  | [optional] [readonly] [default to False]
**voided_at** | **datetime** |  | [optional] [readonly] 
**voided_by** | **UUID** |  | [optional] [readonly] 
**void_reason** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.line_item import LineItem

# TODO update the JSON string below
json = "{}"
# create an instance of LineItem from a JSON string
line_item_instance = LineItem.from_json(json)
# print the JSON string representation of the object
print(LineItem.to_json())

# convert the object into a dict
line_item_dict = line_item_instance.to_dict()
# create an instance of LineItem from a dict
line_item_from_dict = LineItem.from_dict(line_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


