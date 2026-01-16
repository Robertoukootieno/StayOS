# StayOS.ApiClient.Model.Property

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PropertyId** | **Guid** | Unique property identifier | [optional] [readonly] 
**OrganizationId** | **Guid** | Parent organization identifier | [optional] 
**Name** | **string** | Property name | 
**Classification** | **string** | Property classification | 
**StarRating** | **float** | Star rating (0-5) | [optional] 
**Location** | [**Model0**](Model0.md) |  | 
**Coordinates** | [**Model0**](Model0.md) |  | [optional] 
**Timezone** | **string** | IANA timezone identifier (immutable) | 
**OperationalStatus** | **string** | Current operational status | [optional] [default to OperationalStatusEnum.ACTIVE]
**Policies** | [**Model0**](Model0.md) |  | [optional] 
**Amenities** | **List&lt;string&gt;** | Property-level amenities | [optional] 
**Certifications** | [**List&lt;Model0&gt;**](Model0.md) |  | [optional] 
**ContactInfo** | [**Model0**](Model0.md) |  | [optional] 
**Metadata** | [**Model0**](Model0.md) |  | [optional] 
**Links** | [**PropertyAllOfLinks**](PropertyAllOfLinks.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

