

# PropertyPolicies


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**checkInTime** | **String** | Default check-in time (HH:mm) |  [optional] |
|**checkOutTime** | **String** | Default check-out time (HH:mm) |  [optional] |
|**lateCheckoutFee** | [**Model0**](Model0.md) |  |  [optional] |
|**cancellationPolicy** | [**Model0**](Model0.md) |  |  [optional] |
|**childPolicy** | [**PropertyPoliciesAllOfChildPolicy**](PropertyPoliciesAllOfChildPolicy.md) |  |  [optional] |
|**petPolicy** | [**PropertyPoliciesAllOfPetPolicy**](PropertyPoliciesAllOfPetPolicy.md) |  |  [optional] |
|**smokingPolicy** | [**SmokingPolicyEnum**](#SmokingPolicyEnum) |  |  [optional] |



## Enum: SmokingPolicyEnum

| Name | Value |
|---- | -----|
| NON_SMOKING | &quot;NON_SMOKING&quot; |
| SMOKING_ALLOWED | &quot;SMOKING_ALLOWED&quot; |
| DESIGNATED_AREAS | &quot;DESIGNATED_AREAS&quot; |



