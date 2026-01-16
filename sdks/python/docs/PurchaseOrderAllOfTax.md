# PurchaseOrderAllOfTax


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **str** | Decimal amount (always 2 decimal places) | 
**currency** | **str** | ISO 4217 currency code | 

## Example

```python
from stayos_api_client.models.purchase_order_all_of_tax import PurchaseOrderAllOfTax

# TODO update the JSON string below
json = "{}"
# create an instance of PurchaseOrderAllOfTax from a JSON string
purchase_order_all_of_tax_instance = PurchaseOrderAllOfTax.from_json(json)
# print the JSON string representation of the object
print(PurchaseOrderAllOfTax.to_json())

# convert the object into a dict
purchase_order_all_of_tax_dict = purchase_order_all_of_tax_instance.to_dict()
# create an instance of PurchaseOrderAllOfTax from a dict
purchase_order_all_of_tax_from_dict = PurchaseOrderAllOfTax.from_dict(purchase_order_all_of_tax_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


