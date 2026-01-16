# Model0

Monetary amount with currency

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **str** | Decimal amount (always 2 decimal places) | 
**currency** | **str** | ISO 4217 currency code | 

## Example

```python
from stayos_api_client.models.model0 import Model0

# TODO update the JSON string below
json = "{}"
# create an instance of Model0 from a JSON string
model0_instance = Model0.from_json(json)
# print the JSON string representation of the object
print(Model0.to_json())

# convert the object into a dict
model0_dict = model0_instance.to_dict()
# create an instance of Model0 from a dict
model0_from_dict = Model0.from_dict(model0_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


