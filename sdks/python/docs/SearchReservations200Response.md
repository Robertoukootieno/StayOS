# SearchReservations200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Reservation]**](Reservation.md) |  | 
**pagination** | [**PaginatedResponseAllOfPagination**](PaginatedResponseAllOfPagination.md) |  | 
**links** | [**PaginatedResponseAllOfLinks**](PaginatedResponseAllOfLinks.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.search_reservations200_response import SearchReservations200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SearchReservations200Response from a JSON string
search_reservations200_response_instance = SearchReservations200Response.from_json(json)
# print the JSON string representation of the object
print(SearchReservations200Response.to_json())

# convert the object into a dict
search_reservations200_response_dict = search_reservations200_response_instance.to_dict()
# create an instance of SearchReservations200Response from a dict
search_reservations200_response_from_dict = SearchReservations200Response.from_dict(search_reservations200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


