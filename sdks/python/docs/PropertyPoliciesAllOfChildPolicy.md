# PropertyPoliciesAllOfChildPolicy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**children_allowed** | **bool** |  | [optional] [default to True]
**free_child_age** | **int** | Maximum age for free child stay | [optional] 

## Example

```python
from stayos_api_client.models.property_policies_all_of_child_policy import PropertyPoliciesAllOfChildPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyPoliciesAllOfChildPolicy from a JSON string
property_policies_all_of_child_policy_instance = PropertyPoliciesAllOfChildPolicy.from_json(json)
# print the JSON string representation of the object
print(PropertyPoliciesAllOfChildPolicy.to_json())

# convert the object into a dict
property_policies_all_of_child_policy_dict = property_policies_all_of_child_policy_instance.to_dict()
# create an instance of PropertyPoliciesAllOfChildPolicy from a dict
property_policies_all_of_child_policy_from_dict = PropertyPoliciesAllOfChildPolicy.from_dict(property_policies_all_of_child_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


