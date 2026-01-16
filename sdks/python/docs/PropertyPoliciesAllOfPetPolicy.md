# PropertyPoliciesAllOfPetPolicy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pets_allowed** | **bool** |  | [optional] [default to False]
**pet_fee** | [**Model0**](Model0.md) |  | [optional] 
**pet_types** | **List[str]** |  | [optional] 

## Example

```python
from stayos_api_client.models.property_policies_all_of_pet_policy import PropertyPoliciesAllOfPetPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyPoliciesAllOfPetPolicy from a JSON string
property_policies_all_of_pet_policy_instance = PropertyPoliciesAllOfPetPolicy.from_json(json)
# print the JSON string representation of the object
print(PropertyPoliciesAllOfPetPolicy.to_json())

# convert the object into a dict
property_policies_all_of_pet_policy_dict = property_policies_all_of_pet_policy_instance.to_dict()
# create an instance of PropertyPoliciesAllOfPetPolicy from a dict
property_policies_all_of_pet_policy_from_dict = PropertyPoliciesAllOfPetPolicy.from_dict(property_policies_all_of_pet_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


