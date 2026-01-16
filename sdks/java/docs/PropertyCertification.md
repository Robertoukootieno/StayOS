

# PropertyCertification


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**certificationId** | **UUID** |  |  [readonly] |
|**propertyId** | **UUID** |  |  |
|**type** | [**TypeEnum**](#TypeEnum) |  |  |
|**name** | **String** |  |  [optional] |
|**certificateNumber** | **String** |  |  [optional] |
|**issuingAuthority** | **String** |  |  [optional] |
|**issuedDate** | **LocalDate** |  |  |
|**expiryDate** | **LocalDate** |  |  |
|**status** | [**StatusEnum**](#StatusEnum) |  |  [optional] |
|**documentUrl** | **URI** |  |  [optional] |
|**notes** | **String** |  |  [optional] |
|**metadata** | [**Model0**](Model0.md) |  |  [optional] |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| BUSINESS_LICENSE | &quot;BUSINESS_LICENSE&quot; |
| HEALTH_PERMIT | &quot;HEALTH_PERMIT&quot; |
| FIRE_SAFETY | &quot;FIRE_SAFETY&quot; |
| LIQUOR_LICENSE | &quot;LIQUOR_LICENSE&quot; |
| TOURISM_CERTIFICATION | &quot;TOURISM_CERTIFICATION&quot; |
| ENVIRONMENTAL | &quot;ENVIRONMENTAL&quot; |
| ACCESSIBILITY | &quot;ACCESSIBILITY&quot; |
| OTHER | &quot;OTHER&quot; |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| ACTIVE | &quot;ACTIVE&quot; |
| EXPIRED | &quot;EXPIRED&quot; |
| SUSPENDED | &quot;SUSPENDED&quot; |
| REVOKED | &quot;REVOKED&quot; |



