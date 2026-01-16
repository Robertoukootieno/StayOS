# OpenapiClient::MenuItem

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **item_id** | **String** |  | [readonly] |
| **name** | **String** |  |  |
| **description** | **String** |  | [optional] |
| **category** | **String** |  |  |
| **price** | [**Model0**](Model0.md) |  |  |
| **available** | **Boolean** |  | [default to true] |
| **dietary** | **Array&lt;String&gt;** |  | [optional] |
| **allergens** | **Array&lt;String&gt;** |  | [optional] |
| **preparation_time** | **Integer** | Preparation time in minutes | [optional] |
| **image_url** | **String** |  | [optional] |
| **metadata** | [**Model0**](Model0.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::MenuItem.new(
  item_id: null,
  name: Caesar Salad,
  description: null,
  category: APPETIZER,
  price: null,
  available: null,
  dietary: null,
  allergens: null,
  preparation_time: null,
  image_url: null,
  metadata: null
)
```

