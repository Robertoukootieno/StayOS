# DisputeFolioRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** |  | 
**amount** | [**Money**](Money.md) |  | [optional] 
**line_item_ids** | **List[UUID]** |  | [optional] 

## Example

```python
from stayos_api_client.models.dispute_folio_request import DisputeFolioRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DisputeFolioRequest from a JSON string
dispute_folio_request_instance = DisputeFolioRequest.from_json(json)
# print the JSON string representation of the object
print(DisputeFolioRequest.to_json())

# convert the object into a dict
dispute_folio_request_dict = dispute_folio_request_instance.to_dict()
# create an instance of DisputeFolioRequest from a dict
dispute_folio_request_from_dict = DisputeFolioRequest.from_dict(dispute_folio_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


