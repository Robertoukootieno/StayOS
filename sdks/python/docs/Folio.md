# Folio


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**folio_id** | **UUID** |  | [readonly] 
**property_id** | **UUID** |  | 
**guest_id** | **UUID** |  | 
**stay_id** | **UUID** |  | [optional] 
**reservation_id** | **UUID** |  | [optional] 
**folio_number** | **str** | Human-readable folio number | [optional] [readonly] 
**status** | **str** |  | 
**line_items** | [**List[Model0]**](Model0.md) |  | [optional] 
**subtotal** | [**FolioAllOfSubtotal**](FolioAllOfSubtotal.md) |  | [optional] 
**taxes** | [**FolioAllOfTaxes**](FolioAllOfTaxes.md) |  | [optional] 
**fees** | [**FolioAllOfFees**](FolioAllOfFees.md) |  | [optional] 
**total** | [**FolioAllOfTotal**](FolioAllOfTotal.md) |  | [optional] 
**balance** | [**FolioAllOfBalance**](FolioAllOfBalance.md) |  | [optional] 
**payments** | [**List[Model0]**](Model0.md) |  | [optional] 
**closed_at** | **datetime** |  | [optional] [readonly] 
**metadata** | [**Model0**](Model0.md) |  | [optional] 
**links** | [**FolioAllOfLinks**](FolioAllOfLinks.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.folio import Folio

# TODO update the JSON string below
json = "{}"
# create an instance of Folio from a JSON string
folio_instance = Folio.from_json(json)
# print the JSON string representation of the object
print(Folio.to_json())

# convert the object into a dict
folio_dict = folio_instance.to_dict()
# create an instance of Folio from a dict
folio_from_dict = Folio.from_dict(folio_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


