# OpenapiClient::AvailabilitySlot

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **date** | **Date** |  |  |
| **status** | **String** |  |  |
| **restrictions** | [**AvailabilitySlotAllOfRestrictions**](AvailabilitySlotAllOfRestrictions.md) |  | [optional] |
| **allocations** | [**Array&lt;AvailabilitySlotAllOfAllocations&gt;**](AvailabilitySlotAllOfAllocations.md) | Channel-specific allocations | [optional] |
| **rate** | [**Model0**](Model0.md) | Rate for this date (if applicable) | [optional] |
| **notes** | **String** | Internal notes for this date | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::AvailabilitySlot.new(
  date: 2025-12-20,
  status: AVAILABLE,
  restrictions: null,
  allocations: null,
  rate: null,
  notes: null
)
```

