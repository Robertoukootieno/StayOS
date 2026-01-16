# UnitTypeAllOfBedConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bed_type** | **str** |  | [optional] 
**quantity** | **int** |  | [optional] 

## Example

```python
from stayos_api_client.models.unit_type_all_of_bed_configuration import UnitTypeAllOfBedConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of UnitTypeAllOfBedConfiguration from a JSON string
unit_type_all_of_bed_configuration_instance = UnitTypeAllOfBedConfiguration.from_json(json)
# print the JSON string representation of the object
print(UnitTypeAllOfBedConfiguration.to_json())

# convert the object into a dict
unit_type_all_of_bed_configuration_dict = unit_type_all_of_bed_configuration_instance.to_dict()
# create an instance of UnitTypeAllOfBedConfiguration from a dict
unit_type_all_of_bed_configuration_from_dict = UnitTypeAllOfBedConfiguration.from_dict(unit_type_all_of_bed_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


