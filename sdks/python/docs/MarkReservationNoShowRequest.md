# MarkReservationNoShowRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notes** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.mark_reservation_no_show_request import MarkReservationNoShowRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MarkReservationNoShowRequest from a JSON string
mark_reservation_no_show_request_instance = MarkReservationNoShowRequest.from_json(json)
# print the JSON string representation of the object
print(MarkReservationNoShowRequest.to_json())

# convert the object into a dict
mark_reservation_no_show_request_dict = mark_reservation_no_show_request_instance.to_dict()
# create an instance of MarkReservationNoShowRequest from a dict
mark_reservation_no_show_request_from_dict = MarkReservationNoShowRequest.from_dict(mark_reservation_no_show_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


