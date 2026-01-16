# KeyCard


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_id** | **UUID** |  | [readonly] 
**card_number** | **str** | Physical card number | 
**status** | **str** |  | 
**issued_at** | **datetime** |  | [optional] [readonly] 
**expires_at** | **datetime** | Card expiration | [optional] 
**access_level** | **str** |  | [optional] [default to 'ROOM_ONLY']

## Example

```python
from stayos_api_client.models.key_card import KeyCard

# TODO update the JSON string below
json = "{}"
# create an instance of KeyCard from a JSON string
key_card_instance = KeyCard.from_json(json)
# print the JSON string representation of the object
print(KeyCard.to_json())

# convert the object into a dict
key_card_dict = key_card_instance.to_dict()
# create an instance of KeyCard from a dict
key_card_from_dict = KeyCard.from_dict(key_card_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


