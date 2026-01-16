# PropertyCertification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certification_id** | **UUID** |  | [readonly] 
**property_id** | **UUID** |  | 
**type** | **str** |  | 
**name** | **str** |  | [optional] 
**certificate_number** | **str** |  | [optional] 
**issuing_authority** | **str** |  | [optional] 
**issued_date** | **date** |  | 
**expiry_date** | **date** |  | 
**status** | **str** |  | [optional] 
**document_url** | **str** |  | [optional] 
**notes** | **str** |  | [optional] 
**metadata** | [**Model0**](Model0.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.property_certification import PropertyCertification

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyCertification from a JSON string
property_certification_instance = PropertyCertification.from_json(json)
# print the JSON string representation of the object
print(PropertyCertification.to_json())

# convert the object into a dict
property_certification_dict = property_certification_instance.to_dict()
# create an instance of PropertyCertification from a dict
property_certification_from_dict = PropertyCertification.from_dict(property_certification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


