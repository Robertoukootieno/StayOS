# GetReservationQuoteRequestGuestCount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adults** | **int** |  | [optional] 
**children** | **int** |  | [optional] 

## Example

```python
from stayos_api_client.models.get_reservation_quote_request_guest_count import GetReservationQuoteRequestGuestCount

# TODO update the JSON string below
json = "{}"
# create an instance of GetReservationQuoteRequestGuestCount from a JSON string
get_reservation_quote_request_guest_count_instance = GetReservationQuoteRequestGuestCount.from_json(json)
# print the JSON string representation of the object
print(GetReservationQuoteRequestGuestCount.to_json())

# convert the object into a dict
get_reservation_quote_request_guest_count_dict = get_reservation_quote_request_guest_count_instance.to_dict()
# create an instance of GetReservationQuoteRequestGuestCount from a dict
get_reservation_quote_request_guest_count_from_dict = GetReservationQuoteRequestGuestCount.from_dict(get_reservation_quote_request_guest_count_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


