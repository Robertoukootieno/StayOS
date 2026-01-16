# GetTaxReport200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_tax** | [**Money**](Money.md) |  | [optional] 
**breakdown** | **List[object]** |  | [optional] 

## Example

```python
from stayos_api_client.models.get_tax_report200_response import GetTaxReport200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetTaxReport200Response from a JSON string
get_tax_report200_response_instance = GetTaxReport200Response.from_json(json)
# print the JSON string representation of the object
print(GetTaxReport200Response.to_json())

# convert the object into a dict
get_tax_report200_response_dict = get_tax_report200_response_instance.to_dict()
# create an instance of GetTaxReport200Response from a dict
get_tax_report200_response_from_dict = GetTaxReport200Response.from_dict(get_tax_report200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


