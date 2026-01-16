# ListSuppliers200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Supplier]**](Supplier.md) |  | 
**pagination** | [**PaginatedResponseAllOfPagination**](PaginatedResponseAllOfPagination.md) |  | 
**links** | [**PaginatedResponseAllOfLinks**](PaginatedResponseAllOfLinks.md) |  | [optional] 

## Example

```python
from stayos_api_client.models.list_suppliers200_response import ListSuppliers200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListSuppliers200Response from a JSON string
list_suppliers200_response_instance = ListSuppliers200Response.from_json(json)
# print the JSON string representation of the object
print(ListSuppliers200Response.to_json())

# convert the object into a dict
list_suppliers200_response_dict = list_suppliers200_response_instance.to_dict()
# create an instance of ListSuppliers200Response from a dict
list_suppliers200_response_from_dict = ListSuppliers200Response.from_dict(list_suppliers200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


