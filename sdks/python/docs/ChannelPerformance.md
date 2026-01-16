# ChannelPerformance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **UUID** |  | 
**start_date** | **date** |  | 
**end_date** | **date** |  | 
**bookings** | **int** | Total bookings | [optional] 
**revenue** | [**Model0**](Model0.md) |  | [optional] 
**commission** | [**Model0**](Model0.md) |  | [optional] 
**net_revenue** | [**Model0**](Model0.md) |  | [optional] 
**average_booking_value** | [**Model0**](Model0.md) |  | [optional] 
**cancellation_rate** | **float** | Percentage | [optional] 
**conversion_rate** | **float** | Percentage | [optional] 

## Example

```python
from stayos_api_client.models.channel_performance import ChannelPerformance

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelPerformance from a JSON string
channel_performance_instance = ChannelPerformance.from_json(json)
# print the JSON string representation of the object
print(ChannelPerformance.to_json())

# convert the object into a dict
channel_performance_dict = channel_performance_instance.to_dict()
# create an instance of ChannelPerformance from a dict
channel_performance_from_dict = ChannelPerformance.from_dict(channel_performance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


