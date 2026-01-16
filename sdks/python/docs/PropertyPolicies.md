# PropertyPolicies


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_in_time** | **str** | Default check-in time (HH:mm) | [optional] 
**check_out_time** | **str** | Default check-out time (HH:mm) | [optional] 
**late_checkout_fee** | [**Model0**](Model0.md) |  | [optional] 
**cancellation_policy** | [**Model0**](Model0.md) |  | [optional] 
**child_policy** | [**PropertyPoliciesAllOfChildPolicy**](PropertyPoliciesAllOfChildPolicy.md) |  | [optional] 
**pet_policy** | [**PropertyPoliciesAllOfPetPolicy**](PropertyPoliciesAllOfPetPolicy.md) |  | [optional] 
**smoking_policy** | **str** |  | [optional] [default to 'NON_SMOKING']

## Example

```python
from stayos_api_client.models.property_policies import PropertyPolicies

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyPolicies from a JSON string
property_policies_instance = PropertyPolicies.from_json(json)
# print the JSON string representation of the object
print(PropertyPolicies.to_json())

# convert the object into a dict
property_policies_dict = property_policies_instance.to_dict()
# create an instance of PropertyPolicies from a dict
property_policies_from_dict = PropertyPolicies.from_dict(property_policies_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


