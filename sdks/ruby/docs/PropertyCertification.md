# OpenapiClient::PropertyCertification

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **certification_id** | **String** |  | [readonly] |
| **property_id** | **String** |  |  |
| **type** | **String** |  |  |
| **name** | **String** |  | [optional] |
| **certificate_number** | **String** |  | [optional] |
| **issuing_authority** | **String** |  | [optional] |
| **issued_date** | **Date** |  |  |
| **expiry_date** | **Date** |  |  |
| **status** | **String** |  | [optional] |
| **document_url** | **String** |  | [optional] |
| **notes** | **String** |  | [optional] |
| **metadata** | [**Model0**](Model0.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::PropertyCertification.new(
  certification_id: null,
  property_id: null,
  type: BUSINESS_LICENSE,
  name: Business Operating License,
  certificate_number: BL-2025-12345,
  issuing_authority: City of San Francisco,
  issued_date: null,
  expiry_date: null,
  status: ACTIVE,
  document_url: null,
  notes: null,
  metadata: null
)
```

