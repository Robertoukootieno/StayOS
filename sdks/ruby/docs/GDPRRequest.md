# OpenapiClient::GDPRRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **request_id** | **String** |  | [readonly] |
| **guest_id** | **String** |  |  |
| **type** | **String** |  |  |
| **status** | **String** |  | [optional] |
| **requested_at** | **Time** |  | [optional][readonly] |
| **completed_at** | **Time** |  | [optional] |
| **data_package_url** | **String** | URL to download exported data | [optional] |
| **notes** | **String** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::GDPRRequest.new(
  request_id: null,
  guest_id: null,
  type: DATA_EXPORT,
  status: SUBMITTED,
  requested_at: null,
  completed_at: null,
  data_package_url: null,
  notes: null
)
```

