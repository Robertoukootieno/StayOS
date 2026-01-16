# OpenapiClient::ReceivePurchaseOrderRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **received_items** | [**Array&lt;ReceivePurchaseOrderRequestReceivedItemsInner&gt;**](ReceivePurchaseOrderRequestReceivedItemsInner.md) |  | [optional] |
| **received_by** | **String** |  | [optional] |
| **notes** | **String** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::ReceivePurchaseOrderRequest.new(
  received_items: null,
  received_by: null,
  notes: null
)
```

