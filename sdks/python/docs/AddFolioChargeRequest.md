# AddFolioChargeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**Money**](Money.md) |  | 
**description** | **str** |  | 
**category** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.add_folio_charge_request import AddFolioChargeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddFolioChargeRequest from a JSON string
add_folio_charge_request_instance = AddFolioChargeRequest.from_json(json)
# print the JSON string representation of the object
print(AddFolioChargeRequest.to_json())

# convert the object into a dict
add_folio_charge_request_dict = add_folio_charge_request_instance.to_dict()
# create an instance of AddFolioChargeRequest from a dict
add_folio_charge_request_from_dict = AddFolioChargeRequest.from_dict(add_folio_charge_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


