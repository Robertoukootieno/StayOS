# AuditMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Creation timestamp (ISO 8601) | [optional] 
**created_by** | **UUID** | User ID who created the resource | [optional] 
**updated_at** | **datetime** | Last update timestamp | [optional] 
**updated_by** | **UUID** | User ID who last updated the resource | [optional] 
**version** | **int** | Version number for optimistic locking | [optional] 

## Example

```python
from stayos_api_client.models.audit_metadata import AuditMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of AuditMetadata from a JSON string
audit_metadata_instance = AuditMetadata.from_json(json)
# print the JSON string representation of the object
print(AuditMetadata.to_json())

# convert the object into a dict
audit_metadata_dict = audit_metadata_instance.to_dict()
# create an instance of AuditMetadata from a dict
audit_metadata_from_dict = AuditMetadata.from_dict(audit_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


