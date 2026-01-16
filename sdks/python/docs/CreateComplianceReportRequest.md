# CreateComplianceReportRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**report_type** | **str** |  | 
**start_date** | **date** |  | 
**end_date** | **date** |  | 

## Example

```python
from stayos_api_client.models.create_compliance_report_request import CreateComplianceReportRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateComplianceReportRequest from a JSON string
create_compliance_report_request_instance = CreateComplianceReportRequest.from_json(json)
# print the JSON string representation of the object
print(CreateComplianceReportRequest.to_json())

# convert the object into a dict
create_compliance_report_request_dict = create_compliance_report_request_instance.to_dict()
# create an instance of CreateComplianceReportRequest from a dict
create_compliance_report_request_from_dict = CreateComplianceReportRequest.from_dict(create_compliance_report_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


