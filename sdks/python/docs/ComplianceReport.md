# ComplianceReport


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**report_id** | **UUID** |  | [readonly] 
**type** | **str** |  | 
**property_id** | **UUID** |  | 
**start_date** | **date** |  | 
**end_date** | **date** |  | 
**status** | **str** |  | [optional] 
**file_url** | **str** |  | [optional] [readonly] 
**submitted_to** | **str** | Authority/agency submitted to | [optional] 
**submitted_at** | **datetime** |  | [optional] 
**generated_at** | **datetime** |  | [optional] [readonly] 
**metadata** | [**Model0**](Model0.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.compliance_report import ComplianceReport

# TODO update the JSON string below
json = "{}"
# create an instance of ComplianceReport from a JSON string
compliance_report_instance = ComplianceReport.from_json(json)
# print the JSON string representation of the object
print(ComplianceReport.to_json())

# convert the object into a dict
compliance_report_dict = compliance_report_instance.to_dict()
# create an instance of ComplianceReport from a dict
compliance_report_from_dict = ComplianceReport.from_dict(compliance_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


