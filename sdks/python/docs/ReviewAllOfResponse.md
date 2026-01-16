# ReviewAllOfResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**responded_by** | **str** |  | [optional] 
**responded_at** | **datetime** |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from stayos_api_client.models.review_all_of_response import ReviewAllOfResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReviewAllOfResponse from a JSON string
review_all_of_response_instance = ReviewAllOfResponse.from_json(json)
# print the JSON string representation of the object
print(ReviewAllOfResponse.to_json())

# convert the object into a dict
review_all_of_response_dict = review_all_of_response_instance.to_dict()
# create an instance of ReviewAllOfResponse from a dict
review_all_of_response_from_dict = ReviewAllOfResponse.from_dict(review_all_of_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


