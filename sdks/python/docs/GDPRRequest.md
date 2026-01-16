# GDPRRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **UUID** |  | [readonly] 
**guest_id** | **UUID** |  | 
**type** | **str** |  | 
**status** | **str** |  | [optional] 
**requested_at** | **datetime** |  | [optional] [readonly] 
**completed_at** | **datetime** |  | [optional] 
**data_package_url** | **str** | URL to download exported data | [optional] 
**notes** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.gdpr_request import GDPRRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GDPRRequest from a JSON string
gdpr_request_instance = GDPRRequest.from_json(json)
# print the JSON string representation of the object
print(GDPRRequest.to_json())

# convert the object into a dict
gdpr_request_dict = gdpr_request_instance.to_dict()
# create an instance of GDPRRequest from a dict
gdpr_request_from_dict = GDPRRequest.from_dict(gdpr_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


