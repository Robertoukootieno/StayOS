# SearchGuestsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**phone** | **str** |  | [optional] 
**loyalty_tier** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.search_guests_request import SearchGuestsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SearchGuestsRequest from a JSON string
search_guests_request_instance = SearchGuestsRequest.from_json(json)
# print the JSON string representation of the object
print(SearchGuestsRequest.to_json())

# convert the object into a dict
search_guests_request_dict = search_guests_request_instance.to_dict()
# create an instance of SearchGuestsRequest from a dict
search_guests_request_from_dict = SearchGuestsRequest.from_dict(search_guests_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


