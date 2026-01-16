# ChannelDistributionAllOfCommission


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | [optional] 
**value** | **float** |  | [optional] 
**paid_by** | **str** |  | [optional] [default to 'PROPERTY']

## Example

```python
from stayos_api_client.models.channel_distribution_all_of_commission import ChannelDistributionAllOfCommission

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelDistributionAllOfCommission from a JSON string
channel_distribution_all_of_commission_instance = ChannelDistributionAllOfCommission.from_json(json)
# print the JSON string representation of the object
print(ChannelDistributionAllOfCommission.to_json())

# convert the object into a dict
channel_distribution_all_of_commission_dict = channel_distribution_all_of_commission_instance.to_dict()
# create an instance of ChannelDistributionAllOfCommission from a dict
channel_distribution_all_of_commission_from_dict = ChannelDistributionAllOfCommission.from_dict(channel_distribution_all_of_commission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


