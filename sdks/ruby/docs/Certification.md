# OpenapiClient::Certification

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **certification_type** | **String** |  | [optional] |
| **certificate_number** | **String** |  | [optional] |
| **issued_by** | **String** | Issuing authority |  |
| **issued_date** | **Date** |  | [optional] |
| **expiry_date** | **Date** |  |  |
| **document_url** | **String** | URL to certificate document | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::Certification.new(
  certification_type: BUSINESS_LICENSE,
  certificate_number: BL-2025-12345,
  issued_by: City of San Francisco,
  issued_date: null,
  expiry_date: 2026-12-31,
  document_url: null
)
```

