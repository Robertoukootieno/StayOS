# SearchAuditLogsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_type** | **str** |  | [optional] 
**entity_id** | **UUID** |  | [optional] 
**actions** | **List[str]** |  | [optional] 
**user_ids** | **List[UUID]** |  | [optional] 
**start_date** | **datetime** |  | [optional] 
**end_date** | **datetime** |  | [optional] 

## Example

```python
from stayos_api_client.models.search_audit_logs_request import SearchAuditLogsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SearchAuditLogsRequest from a JSON string
search_audit_logs_request_instance = SearchAuditLogsRequest.from_json(json)
# print the JSON string representation of the object
print(SearchAuditLogsRequest.to_json())

# convert the object into a dict
search_audit_logs_request_dict = search_audit_logs_request_instance.to_dict()
# create an instance of SearchAuditLogsRequest from a dict
search_audit_logs_request_from_dict = SearchAuditLogsRequest.from_dict(search_audit_logs_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


