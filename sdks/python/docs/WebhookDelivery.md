# WebhookDelivery


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery_id** | **UUID** |  | [readonly] 
**webhook_id** | **UUID** |  | 
**event** | **str** |  | 
**payload** | **object** | Event payload | [optional] 
**status** | **str** |  | 
**http_status** | **int** | HTTP response status code | [optional] 
**response_body** | **str** |  | [optional] 
**attempts** | **int** | Number of delivery attempts | [optional] 
**delivered_at** | **datetime** |  | [optional] [readonly] 
**next_retry_at** | **datetime** |  | [optional] 
**error_message** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.webhook_delivery import WebhookDelivery

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookDelivery from a JSON string
webhook_delivery_instance = WebhookDelivery.from_json(json)
# print the JSON string representation of the object
print(WebhookDelivery.to_json())

# convert the object into a dict
webhook_delivery_dict = webhook_delivery_instance.to_dict()
# create an instance of WebhookDelivery from a dict
webhook_delivery_from_dict = WebhookDelivery.from_dict(webhook_delivery_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


