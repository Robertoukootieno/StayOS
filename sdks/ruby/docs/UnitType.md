# OpenapiClient::UnitType

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **unit_type_id** | **String** |  | [optional][readonly] |
| **property_id** | **String** |  | [optional] |
| **name** | **String** | Unit type name |  |
| **description** | **String** |  | [optional] |
| **capacity** | [**Model0**](Model0.md) |  |  |
| **bed_configuration** | [**Array&lt;UnitTypeAllOfBedConfiguration&gt;**](UnitTypeAllOfBedConfiguration.md) |  | [optional] |
| **size** | [**UnitTypeAllOfSize**](UnitTypeAllOfSize.md) |  | [optional] |
| **amenities** | **Array&lt;String&gt;** |  | [optional] |
| **photos** | [**Array&lt;UnitTypeAllOfPhotos&gt;**](UnitTypeAllOfPhotos.md) |  | [optional] |
| **metadata** | [**Model0**](Model0.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::UnitType.new(
  unit_type_id: 880e8400-e29b-41d4-a716-446655440000,
  property_id: 550e8400-e29b-41d4-a716-446655440000,
  name: Deluxe King Room,
  description: Spacious room with king bed and city view,
  capacity: null,
  bed_configuration: [{bedType&#x3D;KING, quantity&#x3D;1}],
  size: null,
  amenities: [WIFI, TV, MINIBAR, SAFE, COFFEE_MAKER, BALCONY],
  photos: null,
  metadata: null
)
```

