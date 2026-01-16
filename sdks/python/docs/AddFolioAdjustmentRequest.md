# AddFolioAdjustmentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**Money**](Money.md) |  | 
**reason** | **str** |  | 
**type** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.add_folio_adjustment_request import AddFolioAdjustmentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddFolioAdjustmentRequest from a JSON string
add_folio_adjustment_request_instance = AddFolioAdjustmentRequest.from_json(json)
# print the JSON string representation of the object
print(AddFolioAdjustmentRequest.to_json())

# convert the object into a dict
add_folio_adjustment_request_dict = add_folio_adjustment_request_instance.to_dict()
# create an instance of AddFolioAdjustmentRequest from a dict
add_folio_adjustment_request_from_dict = AddFolioAdjustmentRequest.from_dict(add_folio_adjustment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


