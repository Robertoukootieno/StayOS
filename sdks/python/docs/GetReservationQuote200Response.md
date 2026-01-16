# GetReservationQuote200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quote_id** | **UUID** |  | [optional] 
**total_amount** | [**Money**](Money.md) |  | [optional] 
**breakdown** | **List[object]** |  | [optional] 
**cancellation_policy** | [**CancellationPolicy**](CancellationPolicy.md) |  | [optional] 
**valid_until** | **datetime** |  | [optional] 

## Example

```python
from stayos_api_client.models.get_reservation_quote200_response import GetReservationQuote200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetReservationQuote200Response from a JSON string
get_reservation_quote200_response_instance = GetReservationQuote200Response.from_json(json)
# print the JSON string representation of the object
print(GetReservationQuote200Response.to_json())

# convert the object into a dict
get_reservation_quote200_response_dict = get_reservation_quote200_response_instance.to_dict()
# create an instance of GetReservationQuote200Response from a dict
get_reservation_quote200_response_from_dict = GetReservationQuote200Response.from_dict(get_reservation_quote200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


