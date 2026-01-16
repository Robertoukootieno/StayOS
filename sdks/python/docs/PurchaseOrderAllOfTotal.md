# PurchaseOrderAllOfTotal


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **str** | Decimal amount (always 2 decimal places) | 
**currency** | **str** | ISO 4217 currency code | 

## Example

```python
from stayos_api_client.models.purchase_order_all_of_total import PurchaseOrderAllOfTotal

# TODO update the JSON string below
json = "{}"
# create an instance of PurchaseOrderAllOfTotal from a JSON string
purchase_order_all_of_total_instance = PurchaseOrderAllOfTotal.from_json(json)
# print the JSON string representation of the object
print(PurchaseOrderAllOfTotal.to_json())

# convert the object into a dict
purchase_order_all_of_total_dict = purchase_order_all_of_total_instance.to_dict()
# create an instance of PurchaseOrderAllOfTotal from a dict
purchase_order_all_of_total_from_dict = PurchaseOrderAllOfTotal.from_dict(purchase_order_all_of_total_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


