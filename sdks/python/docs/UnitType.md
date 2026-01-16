# UnitType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unit_type_id** | **UUID** |  | [optional] [readonly] 
**property_id** | **UUID** |  | [optional] 
**name** | **str** | Unit type name | 
**description** | **str** |  | [optional] 
**capacity** | [**Model0**](Model0.md) |  | 
**bed_configuration** | [**List[UnitTypeAllOfBedConfiguration]**](UnitTypeAllOfBedConfiguration.md) |  | [optional] 
**size** | [**UnitTypeAllOfSize**](UnitTypeAllOfSize.md) |  | [optional] 
**amenities** | **List[str]** |  | [optional] 
**photos** | [**List[UnitTypeAllOfPhotos]**](UnitTypeAllOfPhotos.md) |  | [optional] 
**metadata** | [**Model0**](Model0.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.unit_type import UnitType

# TODO update the JSON string below
json = "{}"
# create an instance of UnitType from a JSON string
unit_type_instance = UnitType.from_json(json)
# print the JSON string representation of the object
print(UnitType.to_json())

# convert the object into a dict
unit_type_dict = unit_type_instance.to_dict()
# create an instance of UnitType from a dict
unit_type_from_dict = UnitType.from_dict(unit_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


