# GetReservationQuoteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**property_id** | **UUID** |  | 
**unit_type_id** | **UUID** |  | 
**check_in_date** | **date** |  | 
**check_out_date** | **date** |  | 
**guest_count** | [**GetReservationQuoteRequestGuestCount**](GetReservationQuoteRequestGuestCount.md) |  | 
**rate_strategy_id** | **UUID** |  | [optional] 
**promo_code** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.get_reservation_quote_request import GetReservationQuoteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetReservationQuoteRequest from a JSON string
get_reservation_quote_request_instance = GetReservationQuoteRequest.from_json(json)
# print the JSON string representation of the object
print(GetReservationQuoteRequest.to_json())

# convert the object into a dict
get_reservation_quote_request_dict = get_reservation_quote_request_instance.to_dict()
# create an instance of GetReservationQuoteRequest from a dict
get_reservation_quote_request_from_dict = GetReservationQuoteRequest.from_dict(get_reservation_quote_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


