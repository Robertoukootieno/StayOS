# Webhook


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**webhook_id** | **UUID** |  | [readonly] 
**url** | **str** | Webhook endpoint URL | 
**events** | **List[str]** | Events to subscribe to | 
**status** | **str** |  | 
**secret** | **str** | Secret for signature verification | [optional] 
**headers** | **Dict[str, str]** | Custom headers to include in webhook requests | [optional] 
**retry_policy** | [**WebhookAllOfRetryPolicy**](WebhookAllOfRetryPolicy.md) |  | [optional] 
**last_delivery_at** | **datetime** |  | [optional] [readonly] 
**last_delivery_status** | **str** |  | [optional] [readonly] 
**metadata** | [**Model0**](Model0.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.webhook import Webhook

# TODO update the JSON string below
json = "{}"
# create an instance of Webhook from a JSON string
webhook_instance = Webhook.from_json(json)
# print the JSON string representation of the object
print(Webhook.to_json())

# convert the object into a dict
webhook_dict = webhook_instance.to_dict()
# create an instance of Webhook from a dict
webhook_from_dict = Webhook.from_dict(webhook_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


