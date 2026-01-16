# OpenapiClient::Property

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **property_id** | **String** | Unique property identifier | [optional][readonly] |
| **organization_id** | **String** | Parent organization identifier | [optional] |
| **name** | **String** | Property name |  |
| **classification** | **String** | Property classification |  |
| **star_rating** | **Float** | Star rating (0-5) | [optional] |
| **location** | [**Model0**](Model0.md) |  |  |
| **coordinates** | [**Model0**](Model0.md) |  | [optional] |
| **timezone** | **String** | IANA timezone identifier (immutable) |  |
| **operational_status** | **String** | Current operational status | [optional][default to &#39;ACTIVE&#39;] |
| **policies** | [**Model0**](Model0.md) |  | [optional] |
| **amenities** | **Array&lt;String&gt;** | Property-level amenities | [optional] |
| **certifications** | [**Array&lt;Model0&gt;**](Model0.md) |  | [optional] |
| **contact_info** | [**Model0**](Model0.md) |  | [optional] |
| **metadata** | [**Model0**](Model0.md) |  | [optional] |
| **links** | [**PropertyAllOfLinks**](PropertyAllOfLinks.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::Property.new(
  property_id: 550e8400-e29b-41d4-a716-446655440000,
  organization_id: 660e8400-e29b-41d4-a716-446655440000,
  name: Grand Plaza Hotel,
  classification: HOTEL,
  star_rating: 4.5,
  location: null,
  coordinates: null,
  timezone: America/New_York,
  operational_status: null,
  policies: null,
  amenities: [WIFI, PARKING, POOL, GYM, RESTAURANT, SPA],
  certifications: null,
  contact_info: null,
  metadata: null,
  links: null
)
```

