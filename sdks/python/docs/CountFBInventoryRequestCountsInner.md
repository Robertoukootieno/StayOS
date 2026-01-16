# CountFBInventoryRequestCountsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_id** | **UUID** |  | 
**quantity** | **float** |  | 

## Example

```python
from stayos_api_client.models.count_fb_inventory_request_counts_inner import CountFBInventoryRequestCountsInner

# TODO update the JSON string below
json = "{}"
# create an instance of CountFBInventoryRequestCountsInner from a JSON string
count_fb_inventory_request_counts_inner_instance = CountFBInventoryRequestCountsInner.from_json(json)
# print the JSON string representation of the object
print(CountFBInventoryRequestCountsInner.to_json())

# convert the object into a dict
count_fb_inventory_request_counts_inner_dict = count_fb_inventory_request_counts_inner_instance.to_dict()
# create an instance of CountFBInventoryRequestCountsInner from a dict
count_fb_inventory_request_counts_inner_from_dict = CountFBInventoryRequestCountsInner.from_dict(count_fb_inventory_request_counts_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


