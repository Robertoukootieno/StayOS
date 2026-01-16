# ApplicabilityRulesAllOfAdvanceBookingWindow


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**minimum_days** | **int** | Minimum days before check-in | [optional] 
**maximum_days** | **int** | Maximum days before check-in | [optional] 

## Example

```python
from stayos_api_client.models.applicability_rules_all_of_advance_booking_window import ApplicabilityRulesAllOfAdvanceBookingWindow

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicabilityRulesAllOfAdvanceBookingWindow from a JSON string
applicability_rules_all_of_advance_booking_window_instance = ApplicabilityRulesAllOfAdvanceBookingWindow.from_json(json)
# print the JSON string representation of the object
print(ApplicabilityRulesAllOfAdvanceBookingWindow.to_json())

# convert the object into a dict
applicability_rules_all_of_advance_booking_window_dict = applicability_rules_all_of_advance_booking_window_instance.to_dict()
# create an instance of ApplicabilityRulesAllOfAdvanceBookingWindow from a dict
applicability_rules_all_of_advance_booking_window_from_dict = ApplicabilityRulesAllOfAdvanceBookingWindow.from_dict(applicability_rules_all_of_advance_booking_window_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


