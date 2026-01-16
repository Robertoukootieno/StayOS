# AuditLog


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**log_id** | **UUID** |  | [readonly] 
**timestamp** | **datetime** |  | [readonly] 
**user_id** | **UUID** | User who performed the action | [optional] 
**action** | **str** |  | 
**resource** | **str** | Resource type (e.g., reservation, guest, property) | 
**resource_id** | **UUID** |  | [optional] 
**changes** | **object** | JSON object showing what changed | [optional] 
**ip_address** | **str** |  | [optional] 
**user_agent** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**error_message** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.audit_log import AuditLog

# TODO update the JSON string below
json = "{}"
# create an instance of AuditLog from a JSON string
audit_log_instance = AuditLog.from_json(json)
# print the JSON string representation of the object
print(AuditLog.to_json())

# convert the object into a dict
audit_log_dict = audit_log_instance.to_dict()
# create an instance of AuditLog from a dict
audit_log_from_dict = AuditLog.from_dict(audit_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


