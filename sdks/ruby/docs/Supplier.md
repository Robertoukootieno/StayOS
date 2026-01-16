# OpenapiClient::Supplier

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **supplier_id** | **String** |  | [readonly] |
| **name** | **String** |  |  |
| **category** | **String** |  |  |
| **status** | **String** |  |  |
| **contact_info** | [**Model0**](Model0.md) |  | [optional] |
| **address** | [**Model0**](Model0.md) |  | [optional] |
| **payment_terms** | **String** |  | [optional] |
| **tax_id** | **String** | Tax identification number | [optional] |
| **bank_details** | [**SupplierAllOfBankDetails**](SupplierAllOfBankDetails.md) |  | [optional] |
| **rating** | **Float** | Supplier performance rating | [optional] |
| **notes** | **String** |  | [optional] |
| **metadata** | [**Model0**](Model0.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::Supplier.new(
  supplier_id: null,
  name: ABC Food Distributors,
  category: FOOD_BEVERAGE,
  status: ACTIVE,
  contact_info: null,
  address: null,
  payment_terms: Net 30,
  tax_id: null,
  bank_details: null,
  rating: null,
  notes: null,
  metadata: null
)
```

