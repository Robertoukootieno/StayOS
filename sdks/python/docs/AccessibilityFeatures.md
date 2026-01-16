# AccessibilityFeatures


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**wheelchair_accessible** | **bool** |  | [optional] [default to False]
**hearing_accessible** | **bool** |  | [optional] [default to False]
**visual_accessible** | **bool** |  | [optional] [default to False]
**features** | **List[str]** |  | [optional] 

## Example

```python
from stayos_api_client.models.accessibility_features import AccessibilityFeatures

# TODO update the JSON string below
json = "{}"
# create an instance of AccessibilityFeatures from a JSON string
accessibility_features_instance = AccessibilityFeatures.from_json(json)
# print the JSON string representation of the object
print(AccessibilityFeatures.to_json())

# convert the object into a dict
accessibility_features_dict = accessibility_features_instance.to_dict()
# create an instance of AccessibilityFeatures from a dict
accessibility_features_from_dict = AccessibilityFeatures.from_dict(accessibility_features_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


