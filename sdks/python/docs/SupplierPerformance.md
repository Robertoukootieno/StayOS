# SupplierPerformance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**supplier_id** | **UUID** |  | 
**start_date** | **date** |  | 
**end_date** | **date** |  | 
**total_orders** | **int** |  | [optional] 
**total_spend** | [**Model0**](Model0.md) |  | [optional] 
**on_time_delivery_rate** | **float** | Percentage | [optional] 
**quality_rating** | **float** |  | [optional] 
**average_lead_time** | **int** | Average lead time in days | [optional] 

## Example

```python
from stayos_api_client.models.supplier_performance import SupplierPerformance

# TODO update the JSON string below
json = "{}"
# create an instance of SupplierPerformance from a JSON string
supplier_performance_instance = SupplierPerformance.from_json(json)
# print the JSON string representation of the object
print(SupplierPerformance.to_json())

# convert the object into a dict
supplier_performance_dict = supplier_performance_instance.to_dict()
# create an instance of SupplierPerformance from a dict
supplier_performance_from_dict = SupplierPerformance.from_dict(supplier_performance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


