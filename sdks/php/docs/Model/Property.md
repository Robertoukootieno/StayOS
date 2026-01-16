# # Property

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**property_id** | **string** | Unique property identifier | [optional] [readonly]
**organization_id** | **string** | Parent organization identifier | [optional]
**name** | **string** | Property name |
**classification** | **string** | Property classification |
**star_rating** | **float** | Star rating (0-5) | [optional]
**location** | [**\OpenAPI\Client\Model\Model0**](Model0.md) |  |
**coordinates** | [**\OpenAPI\Client\Model\Model0**](Model0.md) |  | [optional]
**timezone** | **string** | IANA timezone identifier (immutable) |
**operational_status** | **string** | Current operational status | [optional] [default to 'ACTIVE']
**policies** | [**\OpenAPI\Client\Model\Model0**](Model0.md) |  | [optional]
**amenities** | **string[]** | Property-level amenities | [optional]
**certifications** | [**\OpenAPI\Client\Model\Model0[]**](Model0.md) |  | [optional]
**contact_info** | [**\OpenAPI\Client\Model\Model0**](Model0.md) |  | [optional]
**metadata** | [**\OpenAPI\Client\Model\Model0**](Model0.md) |  | [optional]
**links** | [**\OpenAPI\Client\Model\PropertyAllOfLinks**](PropertyAllOfLinks.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
