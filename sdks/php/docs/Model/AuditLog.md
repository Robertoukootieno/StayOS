# # AuditLog

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**log_id** | **string** |  | [readonly]
**timestamp** | **\DateTime** |  | [readonly]
**user_id** | **string** | User who performed the action | [optional]
**action** | **string** |  |
**resource** | **string** | Resource type (e.g., reservation, guest, property) |
**resource_id** | **string** |  | [optional]
**changes** | **mixed** | JSON object showing what changed | [optional]
**ip_address** | **string** |  | [optional]
**user_agent** | **string** |  | [optional]
**status** | **string** |  | [optional]
**error_message** | **string** |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
