# GetAuditLogs200ResponseAllOfDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp** | **datetime** |  | [optional] 
**user_id** | **UUID** |  | [optional] 
**action** | **str** |  | [optional] 
**entity_type** | **str** |  | [optional] 
**entity_id** | **str** |  | [optional] 
**changes** | **object** |  | [optional] 

## Example

```python
from stayos_api_client.models.get_audit_logs200_response_all_of_data_inner import GetAuditLogs200ResponseAllOfDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetAuditLogs200ResponseAllOfDataInner from a JSON string
get_audit_logs200_response_all_of_data_inner_instance = GetAuditLogs200ResponseAllOfDataInner.from_json(json)
# print the JSON string representation of the object
print(GetAuditLogs200ResponseAllOfDataInner.to_json())

# convert the object into a dict
get_audit_logs200_response_all_of_data_inner_dict = get_audit_logs200_response_all_of_data_inner_instance.to_dict()
# create an instance of GetAuditLogs200ResponseAllOfDataInner from a dict
get_audit_logs200_response_all_of_data_inner_from_dict = GetAuditLogs200ResponseAllOfDataInner.from_dict(get_audit_logs200_response_all_of_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


