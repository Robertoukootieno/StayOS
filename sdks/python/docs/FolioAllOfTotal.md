# FolioAllOfTotal


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **str** | Decimal amount (always 2 decimal places) | 
**currency** | **str** | ISO 4217 currency code | 

## Example

```python
from stayos_api_client.models.folio_all_of_total import FolioAllOfTotal

# TODO update the JSON string below
json = "{}"
# create an instance of FolioAllOfTotal from a JSON string
folio_all_of_total_instance = FolioAllOfTotal.from_json(json)
# print the JSON string representation of the object
print(FolioAllOfTotal.to_json())

# convert the object into a dict
folio_all_of_total_dict = folio_all_of_total_instance.to_dict()
# create an instance of FolioAllOfTotal from a dict
folio_all_of_total_from_dict = FolioAllOfTotal.from_dict(folio_all_of_total_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


