# ModelProperty


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**property_id** | **UUID** | Unique property identifier | [optional] [readonly] 
**organization_id** | **UUID** | Parent organization identifier | [optional] 
**name** | **str** | Property name | 
**classification** | **str** | Property classification | 
**star_rating** | **float** | Star rating (0-5) | [optional] 
**location** | [**Model0**](Model0.md) |  | 
**coordinates** | [**Model0**](Model0.md) |  | [optional] 
**timezone** | **str** | IANA timezone identifier (immutable) | 
**operational_status** | **str** | Current operational status | [optional] [default to 'ACTIVE']
**policies** | [**Model0**](Model0.md) |  | [optional] 
**amenities** | **List[str]** | Property-level amenities | [optional] 
**certifications** | [**List[Model0]**](Model0.md) |  | [optional] 
**contact_info** | [**Model0**](Model0.md) |  | [optional] 
**metadata** | [**Model0**](Model0.md) |  | [optional] 
**links** | [**PropertyAllOfLinks**](PropertyAllOfLinks.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.model_property import ModelProperty

# TODO update the JSON string below
json = "{}"
# create an instance of ModelProperty from a JSON string
model_property_instance = ModelProperty.from_json(json)
# print the JSON string representation of the object
print(ModelProperty.to_json())

# convert the object into a dict
model_property_dict = model_property_instance.to_dict()
# create an instance of ModelProperty from a dict
model_property_from_dict = ModelProperty.from_dict(model_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


