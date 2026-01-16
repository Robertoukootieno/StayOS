# ChannelDistribution


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **UUID** |  | 
**channel_name** | **str** |  | [optional] [readonly] 
**is_enabled** | **bool** |  | [optional] [default to True]
**markup** | [**ChannelDistributionAllOfMarkup**](ChannelDistributionAllOfMarkup.md) |  | [optional] 
**commission** | [**ChannelDistributionAllOfCommission**](ChannelDistributionAllOfCommission.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.channel_distribution import ChannelDistribution

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelDistribution from a JSON string
channel_distribution_instance = ChannelDistribution.from_json(json)
# print the JSON string representation of the object
print(ChannelDistribution.to_json())

# convert the object into a dict
channel_distribution_dict = channel_distribution_instance.to_dict()
# create an instance of ChannelDistribution from a dict
channel_distribution_from_dict = ChannelDistribution.from_dict(channel_distribution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


