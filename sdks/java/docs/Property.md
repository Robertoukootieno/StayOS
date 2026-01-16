

# Property


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**propertyId** | **UUID** | Unique property identifier |  [optional] [readonly] |
|**organizationId** | **UUID** | Parent organization identifier |  [optional] |
|**name** | **String** | Property name |  |
|**classification** | [**ClassificationEnum**](#ClassificationEnum) | Property classification |  |
|**starRating** | **Float** | Star rating (0-5) |  [optional] |
|**location** | [**Model0**](Model0.md) |  |  |
|**coordinates** | [**Model0**](Model0.md) |  |  [optional] |
|**timezone** | **String** | IANA timezone identifier (immutable) |  |
|**operationalStatus** | [**OperationalStatusEnum**](#OperationalStatusEnum) | Current operational status |  [optional] |
|**policies** | [**Model0**](Model0.md) |  |  [optional] |
|**amenities** | **List&lt;String&gt;** | Property-level amenities |  [optional] |
|**certifications** | [**List&lt;Model0&gt;**](Model0.md) |  |  [optional] |
|**contactInfo** | [**Model0**](Model0.md) |  |  [optional] |
|**metadata** | [**Model0**](Model0.md) |  |  [optional] |
|**links** | [**PropertyAllOfLinks**](PropertyAllOfLinks.md) |  |  [optional] |



## Enum: ClassificationEnum

| Name | Value |
|---- | -----|
| HOTEL | &quot;HOTEL&quot; |
| HOSTEL | &quot;HOSTEL&quot; |
| RESORT | &quot;RESORT&quot; |
| BOUTIQUE | &quot;BOUTIQUE&quot; |
| MOTEL | &quot;MOTEL&quot; |
| BED_AND_BREAKFAST | &quot;BED_AND_BREAKFAST&quot; |
| VACATION_RENTAL | &quot;VACATION_RENTAL&quot; |



## Enum: OperationalStatusEnum

| Name | Value |
|---- | -----|
| ACTIVE | &quot;ACTIVE&quot; |
| SUSPENDED | &quot;SUSPENDED&quot; |
| CLOSED | &quot;CLOSED&quot; |



