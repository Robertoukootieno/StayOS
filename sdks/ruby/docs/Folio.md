# OpenapiClient::Folio

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **folio_id** | **String** |  | [readonly] |
| **property_id** | **String** |  |  |
| **guest_id** | **String** |  |  |
| **stay_id** | **String** |  | [optional] |
| **reservation_id** | **String** |  | [optional] |
| **folio_number** | **String** | Human-readable folio number | [optional][readonly] |
| **status** | **String** |  |  |
| **line_items** | [**Array&lt;Model0&gt;**](Model0.md) |  | [optional] |
| **subtotal** | [**FolioAllOfSubtotal**](FolioAllOfSubtotal.md) |  | [optional] |
| **taxes** | [**FolioAllOfTaxes**](FolioAllOfTaxes.md) |  | [optional] |
| **fees** | [**FolioAllOfFees**](FolioAllOfFees.md) |  | [optional] |
| **total** | [**FolioAllOfTotal**](FolioAllOfTotal.md) |  | [optional] |
| **balance** | [**FolioAllOfBalance**](FolioAllOfBalance.md) |  | [optional] |
| **payments** | [**Array&lt;Model0&gt;**](Model0.md) |  | [optional] |
| **closed_at** | **Time** |  | [optional][readonly] |
| **metadata** | [**Model0**](Model0.md) |  | [optional] |
| **links** | [**FolioAllOfLinks**](FolioAllOfLinks.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::Folio.new(
  folio_id: null,
  property_id: null,
  guest_id: null,
  stay_id: null,
  reservation_id: null,
  folio_number: F-2025-001234,
  status: OPEN,
  line_items: null,
  subtotal: null,
  taxes: null,
  fees: null,
  total: null,
  balance: null,
  payments: null,
  closed_at: null,
  metadata: null,
  links: null
)
```

