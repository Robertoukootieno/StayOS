# WebhookAllOfRetryPolicy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_retries** | **int** |  | [optional] [default to 3]
**retry_delay** | **int** | Delay between retries in seconds | [optional] [default to 60]

## Example

```python
from stayos_api_client.models.webhook_all_of_retry_policy import WebhookAllOfRetryPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookAllOfRetryPolicy from a JSON string
webhook_all_of_retry_policy_instance = WebhookAllOfRetryPolicy.from_json(json)
# print the JSON string representation of the object
print(WebhookAllOfRetryPolicy.to_json())

# convert the object into a dict
webhook_all_of_retry_policy_dict = webhook_all_of_retry_policy_instance.to_dict()
# create an instance of WebhookAllOfRetryPolicy from a dict
webhook_all_of_retry_policy_from_dict = WebhookAllOfRetryPolicy.from_dict(webhook_all_of_retry_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


