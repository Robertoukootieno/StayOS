# GetWebhookDeliveries200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[WebhookDelivery]**](WebhookDelivery.md) |  | 
**pagination** | [**PaginatedResponseAllOfPagination**](PaginatedResponseAllOfPagination.md) |  | 
**links** | [**PaginatedResponseAllOfLinks**](PaginatedResponseAllOfLinks.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.get_webhook_deliveries200_response import GetWebhookDeliveries200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetWebhookDeliveries200Response from a JSON string
get_webhook_deliveries200_response_instance = GetWebhookDeliveries200Response.from_json(json)
# print the JSON string representation of the object
print(GetWebhookDeliveries200Response.to_json())

# convert the object into a dict
get_webhook_deliveries200_response_dict = get_webhook_deliveries200_response_instance.to_dict()
# create an instance of GetWebhookDeliveries200Response from a dict
get_webhook_deliveries200_response_from_dict = GetWebhookDeliveries200Response.from_dict(get_webhook_deliveries200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


