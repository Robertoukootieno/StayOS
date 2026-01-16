# Review


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**review_id** | **UUID** |  | [readonly] 
**source** | **str** |  | 
**external_id** | **str** | Review ID from external platform | [optional] 
**guest_name** | **str** |  | [optional] 
**rating** | **float** |  | 
**title** | **str** |  | [optional] 
**content** | **str** |  | [optional] 
**review_date** | **date** |  | [optional] 
**response** | [**ReviewAllOfResponse**](ReviewAllOfResponse.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.review import Review

# TODO update the JSON string below
json = "{}"
# create an instance of Review from a JSON string
review_instance = Review.from_json(json)
# print the JSON string representation of the object
print(Review.to_json())

# convert the object into a dict
review_dict = review_instance.to_dict()
# create an instance of Review from a dict
review_from_dict = Review.from_dict(review_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


