# FolioAllOfSubtotal


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **str** | Decimal amount (always 2 decimal places) | 
**currency** | **str** | ISO 4217 currency code | 

## Example

```python
from stayos_api_client.models.folio_all_of_subtotal import FolioAllOfSubtotal

# TODO update the JSON string below
json = "{}"
# create an instance of FolioAllOfSubtotal from a JSON string
folio_all_of_subtotal_instance = FolioAllOfSubtotal.from_json(json)
# print the JSON string representation of the object
print(FolioAllOfSubtotal.to_json())

# convert the object into a dict
folio_all_of_subtotal_dict = folio_all_of_subtotal_instance.to_dict()
# create an instance of FolioAllOfSubtotal from a dict
folio_all_of_subtotal_from_dict = FolioAllOfSubtotal.from_dict(folio_all_of_subtotal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


