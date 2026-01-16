# GetRevenueReconciliation200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **date** |  | [optional] 
**total_revenue** | [**Money**](Money.md) |  | [optional] 
**total_payments** | [**Money**](Money.md) |  | [optional] 
**variance** | [**Money**](Money.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.get_revenue_reconciliation200_response import GetRevenueReconciliation200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetRevenueReconciliation200Response from a JSON string
get_revenue_reconciliation200_response_instance = GetRevenueReconciliation200Response.from_json(json)
# print the JSON string representation of the object
print(GetRevenueReconciliation200Response.to_json())

# convert the object into a dict
get_revenue_reconciliation200_response_dict = get_revenue_reconciliation200_response_instance.to_dict()
# create an instance of GetRevenueReconciliation200Response from a dict
get_revenue_reconciliation200_response_from_dict = GetRevenueReconciliation200Response.from_dict(get_revenue_reconciliation200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


