# InventoryUnit


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inventoryUnitId** | **string** |  | [optional] [readonly] [default to undefined]
**propertyId** | **string** |  | [default to undefined]
**unitNumber** | **string** | Human-readable unit identifier | [default to undefined]
**unitTypeId** | **string** | Reference to unit type classification | [default to undefined]
**unitType** | [**Model0**](Model0.md) |  | [optional] [default to undefined]
**floor** | **number** |  | [optional] [default to undefined]
**physicalStatus** | **string** |  | [optional] [default to PhysicalStatus_OPERATIONAL]
**operationalStatus** | **string** |  | [optional] [default to OperationalStatus_AVAILABLE]
**accessibility** | [**Model0**](Model0.md) |  | [optional] [default to undefined]
**lastMaintenanceDate** | **string** |  | [optional] [default to undefined]
**nextScheduledMaintenance** | **string** |  | [optional] [default to undefined]
**metadata** | [**Model0**](Model0.md) |  | [optional] [default to undefined]
**links** | [**InventoryUnitAllOfLinks**](InventoryUnitAllOfLinks.md) |  | [optional] [default to undefined]

## Example

```typescript
import { InventoryUnit } from '@stayos/api-client';

const instance: InventoryUnit = {
    inventoryUnitId,
    propertyId,
    unitNumber,
    unitTypeId,
    unitType,
    floor,
    physicalStatus,
    operationalStatus,
    accessibility,
    lastMaintenanceDate,
    nextScheduledMaintenance,
    metadata,
    links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
