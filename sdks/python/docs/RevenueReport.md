# RevenueReport


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**report_id** | **UUID** |  | [readonly] 
**property_id** | **UUID** |  | 
**start_date** | **date** |  | 
**end_date** | **date** |  | 
**total_revenue** | [**Model0**](Model0.md) |  | [optional] 
**revenue_by_category** | [**RevenueReportAllOfRevenueByCategory**](RevenueReportAllOfRevenueByCategory.md) |  | [optional] 
**occupancy_rate** | **float** | Percentage | [optional] 
**average_daily_rate** | [**Model0**](Model0.md) |  | [optional] 
**rev_par** | [**Model0**](Model0.md) | Revenue per available room | [optional] 
**generated_at** | **datetime** |  | [optional] [readonly] 

## Example

```python
from stayos_api_client.models.revenue_report import RevenueReport

# TODO update the JSON string below
json = "{}"
# create an instance of RevenueReport from a JSON string
revenue_report_instance = RevenueReport.from_json(json)
# print the JSON string representation of the object
print(RevenueReport.to_json())

# convert the object into a dict
revenue_report_dict = revenue_report_instance.to_dict()
# create an instance of RevenueReport from a dict
revenue_report_from_dict = RevenueReport.from_dict(revenue_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


