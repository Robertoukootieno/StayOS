

# Incident


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**incidentId** | **UUID** |  |  [readonly] |
|**propertyId** | **UUID** |  |  |
|**type** | [**TypeEnum**](#TypeEnum) |  |  |
|**severity** | [**SeverityEnum**](#SeverityEnum) |  |  |
|**status** | [**StatusEnum**](#StatusEnum) |  |  |
|**title** | **String** |  |  [optional] |
|**description** | **String** |  |  [optional] |
|**location** | **String** | Location within property |  [optional] |
|**reportedBy** | **UUID** |  |  [optional] |
|**incidentDate** | **OffsetDateTime** |  |  [optional] |
|**personsInvolved** | [**List&lt;IncidentAllOfPersonsInvolved&gt;**](IncidentAllOfPersonsInvolved.md) |  |  [optional] |
|**witnesses** | [**List&lt;IncidentAllOfWitnesses&gt;**](IncidentAllOfWitnesses.md) |  |  [optional] |
|**correctiveActions** | [**List&lt;IncidentAllOfCorrectiveActions&gt;**](IncidentAllOfCorrectiveActions.md) |  |  [optional] |
|**metadata** | [**Model0**](Model0.md) |  |  [optional] |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| SAFETY | &quot;SAFETY&quot; |
| SECURITY | &quot;SECURITY&quot; |
| HEALTH | &quot;HEALTH&quot; |
| PROPERTY_DAMAGE | &quot;PROPERTY_DAMAGE&quot; |
| GUEST_INJURY | &quot;GUEST_INJURY&quot; |
| STAFF_INJURY | &quot;STAFF_INJURY&quot; |
| THEFT | &quot;THEFT&quot; |
| FIRE | &quot;FIRE&quot; |
| OTHER | &quot;OTHER&quot; |



## Enum: SeverityEnum

| Name | Value |
|---- | -----|
| MINOR | &quot;MINOR&quot; |
| MODERATE | &quot;MODERATE&quot; |
| MAJOR | &quot;MAJOR&quot; |
| CRITICAL | &quot;CRITICAL&quot; |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| REPORTED | &quot;REPORTED&quot; |
| INVESTIGATING | &quot;INVESTIGATING&quot; |
| ACTION_TAKEN | &quot;ACTION_TAKEN&quot; |
| RESOLVED | &quot;RESOLVED&quot; |
| CLOSED | &quot;CLOSED&quot; |



