# OpenapiClient::AccessibilityFeatures

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **wheelchair_accessible** | **Boolean** |  | [optional][default to false] |
| **hearing_accessible** | **Boolean** |  | [optional][default to false] |
| **visual_accessible** | **Boolean** |  | [optional][default to false] |
| **features** | **Array&lt;String&gt;** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::AccessibilityFeatures.new(
  wheelchair_accessible: null,
  hearing_accessible: null,
  visual_accessible: null,
  features: [ROLL_IN_SHOWER, GRAB_BARS]
)
```

