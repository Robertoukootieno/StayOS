# ApplicabilityRules


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**valid_date_range** | [**ApplicabilityRulesAllOfValidDateRange**](ApplicabilityRulesAllOfValidDateRange.md) |  | [optional] 
**days_of_week** | **List[str]** |  | [optional] 
**minimum_stay_duration** | **int** | Minimum nights required | [optional] 
**maximum_stay_duration** | **int** | Maximum nights allowed | [optional] 
**advance_booking_window** | [**ApplicabilityRulesAllOfAdvanceBookingWindow**](ApplicabilityRulesAllOfAdvanceBookingWindow.md) |  | [optional] 
**blackout_dates** | **List[date]** | Dates when rate is not available | [optional] 

## Example

```python
from stayos_api_client.models.applicability_rules import ApplicabilityRules

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicabilityRules from a JSON string
applicability_rules_instance = ApplicabilityRules.from_json(json)
# print the JSON string representation of the object
print(ApplicabilityRules.to_json())

# convert the object into a dict
applicability_rules_dict = applicability_rules_instance.to_dict()
# create an instance of ApplicabilityRules from a dict
applicability_rules_from_dict = ApplicabilityRules.from_dict(applicability_rules_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


