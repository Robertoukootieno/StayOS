# OpenapiClient::Incident

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **incident_id** | **String** |  | [readonly] |
| **property_id** | **String** |  |  |
| **type** | **String** |  |  |
| **severity** | **String** |  |  |
| **status** | **String** |  |  |
| **title** | **String** |  | [optional] |
| **description** | **String** |  | [optional] |
| **location** | **String** | Location within property | [optional] |
| **reported_by** | **String** |  | [optional] |
| **incident_date** | **Time** |  | [optional] |
| **persons_involved** | [**Array&lt;IncidentAllOfPersonsInvolved&gt;**](IncidentAllOfPersonsInvolved.md) |  | [optional] |
| **witnesses** | [**Array&lt;IncidentAllOfWitnesses&gt;**](IncidentAllOfWitnesses.md) |  | [optional] |
| **corrective_actions** | [**Array&lt;IncidentAllOfCorrectiveActions&gt;**](IncidentAllOfCorrectiveActions.md) |  | [optional] |
| **metadata** | [**Model0**](Model0.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::Incident.new(
  incident_id: null,
  property_id: null,
  type: SAFETY,
  severity: MODERATE,
  status: REPORTED,
  title: null,
  description: null,
  location: null,
  reported_by: null,
  incident_date: null,
  persons_involved: null,
  witnesses: null,
  corrective_actions: null,
  metadata: null
)
```

