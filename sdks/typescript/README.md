## @stayos/api-client@4.0.0

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install @stayos/api-client@4.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *https://api.stayos.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AvailabilityApi* | [**createInventoryBlock**](docs/AvailabilityApi.md#createinventoryblock) | **POST** /availability/block | Block inventory
*AvailabilityApi* | [**deleteInventoryBlock**](docs/AvailabilityApi.md#deleteinventoryblock) | **DELETE** /availability/block/{blockId} | Remove inventory block
*AvailabilityApi* | [**getAvailabilityCalendar**](docs/AvailabilityApi.md#getavailabilitycalendar) | **GET** /availability/calendar | Get availability calendar
*AvailabilityApi* | [**searchAvailability**](docs/AvailabilityApi.md#searchavailability) | **POST** /availability/search | Search availability
*AvailabilityApi* | [**updateAvailabilityCalendar**](docs/AvailabilityApi.md#updateavailabilitycalendar) | **PUT** /availability/calendar | Update availability calendar (bulk)
*BillingApi* | [**addFolioAdjustment**](docs/BillingApi.md#addfolioadjustment) | **POST** /folios/{folioId}/adjustments | Add adjustment to folio
*BillingApi* | [**addFolioCharge**](docs/BillingApi.md#addfoliocharge) | **POST** /folios/{folioId}/charges | Add charge to folio
*BillingApi* | [**addFolioLineItem**](docs/BillingApi.md#addfoliolineitem) | **POST** /folios/{folioId}/line-items | Add line item to folio
*BillingApi* | [**batchProcessPayments**](docs/BillingApi.md#batchprocesspayments) | **POST** /payments/batch | Batch payment processing
*BillingApi* | [**capturePayment**](docs/BillingApi.md#capturepayment) | **POST** /payments/{paymentId}/capture | Capture payment
*BillingApi* | [**closeFolio**](docs/BillingApi.md#closefolio) | **POST** /folios/{folioId}/close | Close folio
*BillingApi* | [**createFolio**](docs/BillingApi.md#createfolio) | **POST** /folios | Create folio
*BillingApi* | [**createPayment**](docs/BillingApi.md#createpayment) | **POST** /payments | Process payment
*BillingApi* | [**disputeFolio**](docs/BillingApi.md#disputefolio) | **POST** /folios/{folioId}/dispute | Dispute folio
*BillingApi* | [**getFolio**](docs/BillingApi.md#getfolio) | **GET** /folios/{folioId} | Get folio details
*BillingApi* | [**getFolioPDF**](docs/BillingApi.md#getfoliopdf) | **GET** /folios/{folioId}/pdf | Download folio PDF
*BillingApi* | [**getPayment**](docs/BillingApi.md#getpayment) | **GET** /payments/{paymentId} | Get payment details
*BillingApi* | [**getPaymentReceipt**](docs/BillingApi.md#getpaymentreceipt) | **GET** /payments/{paymentId}/receipt | Get payment receipt
*BillingApi* | [**getRevenueReconciliation**](docs/BillingApi.md#getrevenuereconciliation) | **GET** /revenue/reconciliation | Get revenue reconciliation
*BillingApi* | [**getRevenueReports**](docs/BillingApi.md#getrevenuereports) | **GET** /revenue/reports | Get revenue reports
*BillingApi* | [**listFolios**](docs/BillingApi.md#listfolios) | **GET** /folios | List folios
*BillingApi* | [**listPayments**](docs/BillingApi.md#listpayments) | **GET** /payments | List payments
*BillingApi* | [**refundPayment**](docs/BillingApi.md#refundpayment) | **POST** /payments/{paymentId}/refund | Refund payment
*BillingApi* | [**removeFolioLineItem**](docs/BillingApi.md#removefoliolineitem) | **DELETE** /folios/{folioId}/line-items/{itemId} | Remove line item from folio
*BillingApi* | [**reopenFolio**](docs/BillingApi.md#reopenfolio) | **POST** /folios/{folioId}/reopen | Reopen folio
*ChannelsApi* | [**createChannel**](docs/ChannelsApi.md#createchannel) | **POST** /channels | Create channel integration
*ChannelsApi* | [**deleteChannel**](docs/ChannelsApi.md#deletechannel) | **DELETE** /channels/{channelId} | Disconnect channel
*ChannelsApi* | [**getChannelMappings**](docs/ChannelsApi.md#getchannelmappings) | **GET** /channels/{channelId}/mappings | Get channel mappings
*ChannelsApi* | [**getChannelPerformance**](docs/ChannelsApi.md#getchannelperformance) | **GET** /channels/{channelId}/performance | Get channel performance
*ChannelsApi* | [**getChannelSyncStatus**](docs/ChannelsApi.md#getchannelsyncstatus) | **GET** /channels/{channelId}/sync-status | Get sync status
*ChannelsApi* | [**listChannels**](docs/ChannelsApi.md#listchannels) | **GET** /channels | List channel integrations
*ChannelsApi* | [**replaceChannel**](docs/ChannelsApi.md#replacechannel) | **PUT** /channels/{channelId} | Replace channel configuration (full update)
*ChannelsApi* | [**syncChannel**](docs/ChannelsApi.md#syncchannel) | **POST** /channels/{channelId}/sync | Sync channel data
*ChannelsApi* | [**testChannelConnection**](docs/ChannelsApi.md#testchannelconnection) | **POST** /channels/{channelId}/test | Test channel connection
*ChannelsApi* | [**updateChannel**](docs/ChannelsApi.md#updatechannel) | **PATCH** /channels/{channelId} | Update channel configuration (partial update)
*ChannelsApi* | [**updateChannelMappings**](docs/ChannelsApi.md#updatechannelmappings) | **PUT** /channels/{channelId}/mappings | Update channel mappings
*ComplianceApi* | [**createCertification**](docs/ComplianceApi.md#createcertification) | **POST** /compliance/certifications | Upload certification
*ComplianceApi* | [**createComplianceReport**](docs/ComplianceApi.md#createcompliancereport) | **POST** /compliance/reports | Generate compliance report
*ComplianceApi* | [**deleteGuestData**](docs/ComplianceApi.md#deleteguestdata) | **POST** /compliance/gdpr/delete | Delete guest data (GDPR)
*ComplianceApi* | [**exportGuestData**](docs/ComplianceApi.md#exportguestdata) | **POST** /compliance/gdpr/export | Export guest data (GDPR)
*ComplianceApi* | [**getAuditLog**](docs/ComplianceApi.md#getauditlog) | **GET** /audit/logs/{logId} | Get audit log details
*ComplianceApi* | [**getAuditLogs**](docs/ComplianceApi.md#getauditlogs) | **GET** /audit/logs | Get audit logs
*ComplianceApi* | [**getComplianceReport**](docs/ComplianceApi.md#getcompliancereport) | **GET** /compliance/reports/{reportId} | Get compliance report
*ComplianceApi* | [**getGuestRegistry**](docs/ComplianceApi.md#getguestregistry) | **GET** /compliance/guest-registry | Get guest registry report
*ComplianceApi* | [**getTaxReport**](docs/ComplianceApi.md#gettaxreport) | **GET** /compliance/tax-report | Get tax report
*ComplianceApi* | [**listCertifications**](docs/ComplianceApi.md#listcertifications) | **GET** /compliance/certifications | List certifications
*ComplianceApi* | [**listComplianceReports**](docs/ComplianceApi.md#listcompliancereports) | **GET** /compliance/reports | List compliance reports
*ComplianceApi* | [**searchAuditLogs**](docs/ComplianceApi.md#searchauditlogs) | **POST** /audit/search | Search audit logs
*FeedbackApi* | [**getFeedback**](docs/FeedbackApi.md#getfeedback) | **GET** /feedback/{feedbackId} | Get feedback details
*FeedbackApi* | [**getNPSMetrics**](docs/FeedbackApi.md#getnpsmetrics) | **GET** /feedback/nps | Get NPS metrics
*FeedbackApi* | [**getPostStaySurvey**](docs/FeedbackApi.md#getpoststaysurvey) | **GET** /feedback/surveys/{stayId} | Get post-stay survey
*FeedbackApi* | [**initiateServiceRecovery**](docs/FeedbackApi.md#initiateservicerecovery) | **POST** /feedback/{feedbackId}/service-recovery | Initiate service recovery
*FeedbackApi* | [**listFeedback**](docs/FeedbackApi.md#listfeedback) | **GET** /feedback | List guest feedback
*FeedbackApi* | [**listReviews**](docs/FeedbackApi.md#listreviews) | **GET** /feedback/reviews | List third-party reviews
*FeedbackApi* | [**respondToFeedback**](docs/FeedbackApi.md#respondtofeedback) | **POST** /feedback/{feedbackId}/respond | Respond to feedback
*FeedbackApi* | [**respondToReview**](docs/FeedbackApi.md#respondtoreview) | **POST** /feedback/reviews/{reviewId}/respond | Respond to review
*FeedbackApi* | [**submitFeedback**](docs/FeedbackApi.md#submitfeedback) | **POST** /feedback | Submit feedback
*FeedbackApi* | [**submitSurveyResponse**](docs/FeedbackApi.md#submitsurveyresponse) | **POST** /feedback/surveys/{stayId} | Submit survey response
*FoodBeverageApi* | [**cancelFBOrder**](docs/FoodBeverageApi.md#cancelfborder) | **POST** /fb/orders/{orderId}/cancel | Cancel F&amp;B order
*FoodBeverageApi* | [**confirmFBOrder**](docs/FoodBeverageApi.md#confirmfborder) | **POST** /fb/orders/{orderId}/confirm | Confirm F&amp;B order
*FoodBeverageApi* | [**consumeFBInventory**](docs/FoodBeverageApi.md#consumefbinventory) | **POST** /fb/inventory/{itemId}/consume | Record consumption
*FoodBeverageApi* | [**countFBInventory**](docs/FoodBeverageApi.md#countfbinventory) | **POST** /fb/inventory/count | Perform stock count
*FoodBeverageApi* | [**createFBInventoryItem**](docs/FoodBeverageApi.md#createfbinventoryitem) | **POST** /fb/inventory | Create inventory item
*FoodBeverageApi* | [**createFBOrder**](docs/FoodBeverageApi.md#createfborder) | **POST** /fb/orders | Create F&amp;B order
*FoodBeverageApi* | [**createMenuItem**](docs/FoodBeverageApi.md#createmenuitem) | **POST** /fb/menu | Create menu item
*FoodBeverageApi* | [**getFBInventoryItem**](docs/FoodBeverageApi.md#getfbinventoryitem) | **GET** /fb/inventory/{itemId} | Get inventory item details
*FoodBeverageApi* | [**getMenuItem**](docs/FoodBeverageApi.md#getmenuitem) | **GET** /fb/menu/{itemId} | Get menu item details
*FoodBeverageApi* | [**listFBInventory**](docs/FoodBeverageApi.md#listfbinventory) | **GET** /fb/inventory | List F&amp;B inventory items
*FoodBeverageApi* | [**listFBOrders**](docs/FoodBeverageApi.md#listfborders) | **GET** /fb/orders | List F&amp;B orders
*FoodBeverageApi* | [**listMenuItems**](docs/FoodBeverageApi.md#listmenuitems) | **GET** /fb/menu | List menu items
*FoodBeverageApi* | [**markFBItemReady**](docs/FoodBeverageApi.md#markfbitemready) | **POST** /fb/orders/{orderId}/items/{itemId}/ready | Mark item as ready
*FoodBeverageApi* | [**receiveFBInventory**](docs/FoodBeverageApi.md#receivefbinventory) | **POST** /fb/inventory/{itemId}/receive | Receive stock
*FoodBeverageApi* | [**replaceFBOrder**](docs/FoodBeverageApi.md#replacefborder) | **PUT** /fb/orders/{orderId} | Replace F&amp;B order (full update)
*FoodBeverageApi* | [**replaceMenuItem**](docs/FoodBeverageApi.md#replacemenuitem) | **PUT** /fb/menu/{itemId} | Replace menu item (full update)
*FoodBeverageApi* | [**serveFBOrder**](docs/FoodBeverageApi.md#servefborder) | **POST** /fb/orders/{orderId}/serve | Mark order as served
*FoodBeverageApi* | [**updateFBInventoryItem**](docs/FoodBeverageApi.md#updatefbinventoryitem) | **PUT** /fb/inventory/{itemId} | Update inventory item
*FoodBeverageApi* | [**updateFBOrder**](docs/FoodBeverageApi.md#updatefborder) | **PATCH** /fb/orders/{orderId} | Update F&amp;B order (partial update)
*FoodBeverageApi* | [**updateMenuItem**](docs/FoodBeverageApi.md#updatemenuitem) | **PATCH** /fb/menu/{itemId} | Update menu item (partial update)
*FoodBeverageApi* | [**wasteFBInventory**](docs/FoodBeverageApi.md#wastefbinventory) | **POST** /fb/inventory/{itemId}/waste | Record waste
*GuestsApi* | [**addLoyaltyPoints**](docs/GuestsApi.md#addloyaltypoints) | **POST** /guests/{guestId}/loyalty/points | Add loyalty points
*GuestsApi* | [**createGuest**](docs/GuestsApi.md#createguest) | **POST** /guests | Create guest profile
*GuestsApi* | [**deleteGuest**](docs/GuestsApi.md#deleteguest) | **DELETE** /guests/{guestId} | Delete guest profile (GDPR)
*GuestsApi* | [**getGuest**](docs/GuestsApi.md#getguest) | **GET** /guests/{guestId} | Get guest profile
*GuestsApi* | [**getGuestLoyalty**](docs/GuestsApi.md#getguestloyalty) | **GET** /guests/{guestId}/loyalty | Get guest loyalty status
*GuestsApi* | [**getGuestStays**](docs/GuestsApi.md#getgueststays) | **GET** /guests/{guestId}/stays | Get guest stay history
*GuestsApi* | [**listGuests**](docs/GuestsApi.md#listguests) | **GET** /guests | List guest profiles
*GuestsApi* | [**mergeGuests**](docs/GuestsApi.md#mergeguests) | **POST** /guests/merge | Merge duplicate guest profiles
*GuestsApi* | [**replaceGuest**](docs/GuestsApi.md#replaceguest) | **PUT** /guests/{guestId} | Replace guest profile (full update)
*GuestsApi* | [**replaceGuestPreferences**](docs/GuestsApi.md#replaceguestpreferences) | **PUT** /guests/{guestId}/preferences | Replace guest preferences (full update)
*GuestsApi* | [**searchGuests**](docs/GuestsApi.md#searchguests) | **POST** /guests/search | Search guests
*GuestsApi* | [**updateGuest**](docs/GuestsApi.md#updateguest) | **PATCH** /guests/{guestId} | Update guest profile (partial update)
*GuestsApi* | [**updateGuestPreferences**](docs/GuestsApi.md#updateguestpreferences) | **PATCH** /guests/{guestId}/preferences | Update guest preferences (partial update)
*GuestsApi* | [**verifyGuest**](docs/GuestsApi.md#verifyguest) | **POST** /guests/{guestId}/verify | Verify guest identity
*InventoryApi* | [**createInventoryUnit**](docs/InventoryApi.md#createinventoryunit) | **POST** /properties/{propertyId}/inventory-units | Create inventory unit
*InventoryApi* | [**createUnitType**](docs/InventoryApi.md#createunittype) | **POST** /properties/{propertyId}/unit-types | Create unit type
*InventoryApi* | [**getUnitType**](docs/InventoryApi.md#getunittype) | **GET** /unit-types/{unitTypeId} | Get unit type details
*InventoryApi* | [**listInventoryUnits**](docs/InventoryApi.md#listinventoryunits) | **GET** /properties/{propertyId}/inventory-units | List inventory units for property
*InventoryApi* | [**listUnitTypes**](docs/InventoryApi.md#listunittypes) | **GET** /properties/{propertyId}/unit-types | List unit types
*InventoryApi* | [**replaceUnitType**](docs/InventoryApi.md#replaceunittype) | **PUT** /unit-types/{unitTypeId} | Replace unit type (full update)
*InventoryApi* | [**updateUnitType**](docs/InventoryApi.md#updateunittype) | **PATCH** /unit-types/{unitTypeId} | Update unit type (partial update)
*OperationsApi* | [**acknowledgeServiceRequest**](docs/OperationsApi.md#acknowledgeservicerequest) | **POST** /service-requests/{requestId}/acknowledge | Acknowledge service request
*OperationsApi* | [**addIncidentAction**](docs/OperationsApi.md#addincidentaction) | **POST** /incidents/{incidentId}/actions | Add incident action
*OperationsApi* | [**assignHousekeepingTask**](docs/OperationsApi.md#assignhousekeepingtask) | **POST** /housekeeping/tasks/{taskId}/assign | Assign housekeeping task
*OperationsApi* | [**assignMaintenanceRequest**](docs/OperationsApi.md#assignmaintenancerequest) | **POST** /maintenance/requests/{requestId}/assign | Assign maintenance request
*OperationsApi* | [**assignServiceRequest**](docs/OperationsApi.md#assignservicerequest) | **POST** /service-requests/{requestId}/assign | Assign service request
*OperationsApi* | [**cancelServiceRequest**](docs/OperationsApi.md#cancelservicerequest) | **POST** /service-requests/{requestId}/cancel | Cancel service request
*OperationsApi* | [**clockInShift**](docs/OperationsApi.md#clockinshift) | **POST** /staff/shifts/{shiftId}/clock-in | Clock in for shift
*OperationsApi* | [**clockOutShift**](docs/OperationsApi.md#clockoutshift) | **POST** /staff/shifts/{shiftId}/clock-out | Clock out from shift
*OperationsApi* | [**closeIncident**](docs/OperationsApi.md#closeincident) | **POST** /incidents/{incidentId}/close | Close incident
*OperationsApi* | [**completeHousekeepingTask**](docs/OperationsApi.md#completehousekeepingtask) | **POST** /housekeeping/tasks/{taskId}/complete | Complete housekeeping task
*OperationsApi* | [**completeMaintenanceRequest**](docs/OperationsApi.md#completemaintenancerequest) | **POST** /maintenance/requests/{requestId}/complete | Complete maintenance request
*OperationsApi* | [**completeServiceRequest**](docs/OperationsApi.md#completeservicerequest) | **POST** /service-requests/{requestId}/complete | Complete service request
*OperationsApi* | [**completeTraining**](docs/OperationsApi.md#completetraining) | **POST** /training/enrollments/{enrollmentId}/complete | Complete training
*OperationsApi* | [**createHousekeepingTask**](docs/OperationsApi.md#createhousekeepingtask) | **POST** /housekeeping/tasks | Create housekeeping task
*OperationsApi* | [**createMaintenanceRequest**](docs/OperationsApi.md#createmaintenancerequest) | **POST** /maintenance/requests | Create maintenance request
*OperationsApi* | [**createServiceRequest**](docs/OperationsApi.md#createservicerequest) | **POST** /service-requests | Create service request
*OperationsApi* | [**createStaffShift**](docs/OperationsApi.md#createstaffshift) | **POST** /staff/shifts | Create staff shift
*OperationsApi* | [**createTrainingModule**](docs/OperationsApi.md#createtrainingmodule) | **POST** /training/modules | Create training module
*OperationsApi* | [**enrollInTraining**](docs/OperationsApi.md#enrollintraining) | **POST** /training/enrollments | Enroll in training
*OperationsApi* | [**escalateServiceRequest**](docs/OperationsApi.md#escalateservicerequest) | **POST** /service-requests/{requestId}/escalate | Escalate service request
*OperationsApi* | [**failHousekeepingTask**](docs/OperationsApi.md#failhousekeepingtask) | **POST** /housekeeping/tasks/{taskId}/fail | Fail housekeeping task
*OperationsApi* | [**getCleaningSchedule**](docs/OperationsApi.md#getcleaningschedule) | **GET** /housekeeping/schedule | Get cleaning schedule
*OperationsApi* | [**getIncident**](docs/OperationsApi.md#getincident) | **GET** /incidents/{incidentId} | Get incident details
*OperationsApi* | [**getMaintenanceHistory**](docs/OperationsApi.md#getmaintenancehistory) | **GET** /maintenance/requests/{requestId}/history | Get maintenance history
*OperationsApi* | [**getStaffPerformance**](docs/OperationsApi.md#getstaffperformance) | **GET** /staff/{staffId}/performance | Get staff performance metrics
*OperationsApi* | [**getTrainingEnrollment**](docs/OperationsApi.md#gettrainingenrollment) | **GET** /training/enrollments/{enrollmentId} | Get enrollment details
*OperationsApi* | [**getTrainingModule**](docs/OperationsApi.md#gettrainingmodule) | **GET** /training/modules/{moduleId} | Get training module details
*OperationsApi* | [**listHousekeepingTasks**](docs/OperationsApi.md#listhousekeepingtasks) | **GET** /housekeeping/tasks | List housekeeping tasks
*OperationsApi* | [**listIncidents**](docs/OperationsApi.md#listincidents) | **GET** /incidents | List incidents
*OperationsApi* | [**listMaintenanceRequests**](docs/OperationsApi.md#listmaintenancerequests) | **GET** /maintenance/requests | List maintenance requests
*OperationsApi* | [**listServiceRequests**](docs/OperationsApi.md#listservicerequests) | **GET** /service-requests | List service requests
*OperationsApi* | [**listStaffShifts**](docs/OperationsApi.md#liststaffshifts) | **GET** /staff/shifts | List staff shifts
*OperationsApi* | [**listTrainingModules**](docs/OperationsApi.md#listtrainingmodules) | **GET** /training/modules | List training modules
*OperationsApi* | [**replaceHousekeepingTask**](docs/OperationsApi.md#replacehousekeepingtask) | **PUT** /housekeeping/tasks/{taskId} | Replace housekeeping task (full update)
*OperationsApi* | [**replaceIncident**](docs/OperationsApi.md#replaceincident) | **PUT** /incidents/{incidentId} | Replace incident (full update)
*OperationsApi* | [**replaceMaintenanceRequest**](docs/OperationsApi.md#replacemaintenancerequest) | **PUT** /maintenance/requests/{requestId} | Replace maintenance request (full update)
*OperationsApi* | [**replaceServiceRequest**](docs/OperationsApi.md#replaceservicerequest) | **PUT** /service-requests/{requestId} | Replace service request (full update)
*OperationsApi* | [**reportIncident**](docs/OperationsApi.md#reportincident) | **POST** /incidents | Report incident
*OperationsApi* | [**startHousekeepingTask**](docs/OperationsApi.md#starthousekeepingtask) | **POST** /housekeeping/tasks/{taskId}/start | Start housekeeping task
*OperationsApi* | [**updateHousekeepingTask**](docs/OperationsApi.md#updatehousekeepingtask) | **PATCH** /housekeeping/tasks/{taskId} | Update housekeeping task (partial update)
*OperationsApi* | [**updateMaintenanceRequest**](docs/OperationsApi.md#updatemaintenancerequest) | **PATCH** /maintenance/requests/{requestId} | Update maintenance request (partial update)
*OperationsApi* | [**updateServiceRequest**](docs/OperationsApi.md#updateservicerequest) | **PATCH** /service-requests/{requestId} | Update service request (partial update)
*OperationsApi* | [**verifyHousekeepingTask**](docs/OperationsApi.md#verifyhousekeepingtask) | **POST** /housekeeping/tasks/{taskId}/verify | Verify housekeeping task
*OperationsApi* | [**verifyMaintenanceRequest**](docs/OperationsApi.md#verifymaintenancerequest) | **POST** /maintenance/requests/{requestId}/verify | Verify maintenance completion
*ProcurementApi* | [**approvePurchaseOrder**](docs/ProcurementApi.md#approvepurchaseorder) | **POST** /procurement/purchase-orders/{poId}/approve | Approve purchase order
*ProcurementApi* | [**createPurchaseOrder**](docs/ProcurementApi.md#createpurchaseorder) | **POST** /procurement/purchase-orders | Create purchase order
*ProcurementApi* | [**createSupplier**](docs/ProcurementApi.md#createsupplier) | **POST** /procurement/suppliers | Create supplier
*ProcurementApi* | [**getSupplier**](docs/ProcurementApi.md#getsupplier) | **GET** /procurement/suppliers/{supplierId} | Get supplier details
*ProcurementApi* | [**getSupplierPerformance**](docs/ProcurementApi.md#getsupplierperformance) | **GET** /procurement/suppliers/{supplierId}/performance | Get supplier performance
*ProcurementApi* | [**invoicePurchaseOrder**](docs/ProcurementApi.md#invoicepurchaseorder) | **POST** /procurement/purchase-orders/{poId}/invoice | Record invoice for purchase order
*ProcurementApi* | [**listPurchaseOrders**](docs/ProcurementApi.md#listpurchaseorders) | **GET** /procurement/purchase-orders | List purchase orders
*ProcurementApi* | [**listSuppliers**](docs/ProcurementApi.md#listsuppliers) | **GET** /procurement/suppliers | List suppliers
*ProcurementApi* | [**receivePurchaseOrder**](docs/ProcurementApi.md#receivepurchaseorder) | **POST** /procurement/purchase-orders/{poId}/receive | Receive purchase order
*ProcurementApi* | [**replacePurchaseOrder**](docs/ProcurementApi.md#replacepurchaseorder) | **PUT** /procurement/purchase-orders/{poId} | Replace purchase order (full update)
*ProcurementApi* | [**replaceSupplier**](docs/ProcurementApi.md#replacesupplier) | **PUT** /procurement/suppliers/{supplierId} | Replace supplier (full update)
*ProcurementApi* | [**submitPurchaseOrder**](docs/ProcurementApi.md#submitpurchaseorder) | **POST** /procurement/purchase-orders/{poId}/submit | Submit purchase order
*ProcurementApi* | [**updatePurchaseOrder**](docs/ProcurementApi.md#updatepurchaseorder) | **PATCH** /procurement/purchase-orders/{poId} | Update purchase order (partial update)
*ProcurementApi* | [**updateSupplier**](docs/ProcurementApi.md#updatesupplier) | **PATCH** /procurement/suppliers/{supplierId} | Update supplier (partial update)
*PropertiesApi* | [**createProperty**](docs/PropertiesApi.md#createproperty) | **POST** /properties | Create property
*PropertiesApi* | [**deleteProperty**](docs/PropertiesApi.md#deleteproperty) | **DELETE** /properties/{propertyId} | Delete property
*PropertiesApi* | [**getProperty**](docs/PropertiesApi.md#getproperty) | **GET** /properties/{propertyId} | Get property by ID
*PropertiesApi* | [**listProperties**](docs/PropertiesApi.md#listproperties) | **GET** /properties | List properties
*PropertiesApi* | [**replaceInventoryUnit**](docs/PropertiesApi.md#replaceinventoryunit) | **PUT** /inventory-units/{unitId} | Replace inventory unit (full update)
*PropertiesApi* | [**replaceProperty**](docs/PropertiesApi.md#replaceproperty) | **PUT** /properties/{propertyId} | Replace property (full update)
*PropertiesApi* | [**replaceRateStrategy**](docs/PropertiesApi.md#replaceratestrategy) | **PUT** /rate-strategies/{strategyId} | Replace rate strategy (full update)
*PropertiesApi* | [**updateInventoryUnit**](docs/PropertiesApi.md#updateinventoryunit) | **PATCH** /inventory-units/{unitId} | Update inventory unit (partial update)
*PropertiesApi* | [**updateProperty**](docs/PropertiesApi.md#updateproperty) | **PATCH** /properties/{propertyId} | Update property (partial update)
*PropertiesApi* | [**updateRateStrategy**](docs/PropertiesApi.md#updateratestrategy) | **PATCH** /rate-strategies/{strategyId} | Update rate strategy (partial update)
*RateStrategiesApi* | [**createRateStrategy**](docs/RateStrategiesApi.md#createratestrategy) | **POST** /properties/{propertyId}/rate-strategies | Create rate strategy
*RateStrategiesApi* | [**listRateStrategies**](docs/RateStrategiesApi.md#listratestrategies) | **GET** /properties/{propertyId}/rate-strategies | List rate strategies
*ReservationsApi* | [**addSpecialRequest**](docs/ReservationsApi.md#addspecialrequest) | **POST** /reservations/{reservationId}/special-requests | Add special request to reservation
*ReservationsApi* | [**cancelReservation**](docs/ReservationsApi.md#cancelreservation) | **POST** /reservations/{reservationId}/cancel | Cancel reservation
*ReservationsApi* | [**confirmReservation**](docs/ReservationsApi.md#confirmreservation) | **POST** /reservations/{reservationId}/confirm | Confirm reservation
*ReservationsApi* | [**createReservation**](docs/ReservationsApi.md#createreservation) | **POST** /reservations | Create reservation
*ReservationsApi* | [**getReservation**](docs/ReservationsApi.md#getreservation) | **GET** /reservations/{reservationId} | Get reservation details
*ReservationsApi* | [**getReservationHistory**](docs/ReservationsApi.md#getreservationhistory) | **GET** /reservations/{reservationId}/history | Get reservation modification history
*ReservationsApi* | [**getReservationQuote**](docs/ReservationsApi.md#getreservationquote) | **POST** /reservations/quote | Get pricing quote
*ReservationsApi* | [**markReservationNoShow**](docs/ReservationsApi.md#markreservationnoshow) | **POST** /reservations/{reservationId}/no-show | Mark reservation as no-show
*ReservationsApi* | [**replaceReservation**](docs/ReservationsApi.md#replacereservation) | **PUT** /reservations/{reservationId} | Replace reservation (full update)
*ReservationsApi* | [**searchReservations**](docs/ReservationsApi.md#searchreservations) | **GET** /reservations/search | Advanced reservation search
*ReservationsApi* | [**updateReservation**](docs/ReservationsApi.md#updatereservation) | **PATCH** /reservations/{reservationId} | Update reservation (partial update)
*StaysApi* | [**addStayCharge**](docs/StaysApi.md#addstaycharge) | **POST** /stays/{stayId}/charges | Add incidental charge
*StaysApi* | [**checkoutStay**](docs/StaysApi.md#checkoutstay) | **POST** /stays/{stayId}/checkout | Check-out guest
*StaysApi* | [**createStay**](docs/StaysApi.md#createstay) | **POST** /stays | Create stay (check-in)
*StaysApi* | [**deactivateKeyCard**](docs/StaysApi.md#deactivatekeycard) | **DELETE** /stays/{stayId}/key-cards/{cardId} | Deactivate key card
*StaysApi* | [**extendStay**](docs/StaysApi.md#extendstay) | **POST** /stays/{stayId}/extend | Extend stay
*StaysApi* | [**getStay**](docs/StaysApi.md#getstay) | **GET** /stays/{stayId} | Get stay details
*StaysApi* | [**issueKeyCard**](docs/StaysApi.md#issuekeycard) | **POST** /stays/{stayId}/key-cards | Issue key card
*StaysApi* | [**listStays**](docs/StaysApi.md#liststays) | **GET** /stays | List active stays
*StaysApi* | [**replaceStay**](docs/StaysApi.md#replacestay) | **PUT** /stays/{stayId} | Replace stay (full update)
*StaysApi* | [**updateStay**](docs/StaysApi.md#updatestay) | **PATCH** /stays/{stayId} | Update stay (partial update)
*SystemApi* | [**getSystemHealth**](docs/SystemApi.md#getsystemhealth) | **GET** /system/health | Health check
*SystemApi* | [**getSystemMetrics**](docs/SystemApi.md#getsystemmetrics) | **GET** /system/metrics | Get system metrics
*SystemApi* | [**getSystemStatus**](docs/SystemApi.md#getsystemstatus) | **GET** /system/status | Get system status
*WebhooksApi* | [**createWebhook**](docs/WebhooksApi.md#createwebhook) | **POST** /webhooks | Create webhook
*WebhooksApi* | [**deleteWebhook**](docs/WebhooksApi.md#deletewebhook) | **DELETE** /webhooks/{webhookId} | Delete webhook
*WebhooksApi* | [**getWebhook**](docs/WebhooksApi.md#getwebhook) | **GET** /webhooks/{webhookId} | Get webhook details
*WebhooksApi* | [**getWebhookDeliveries**](docs/WebhooksApi.md#getwebhookdeliveries) | **GET** /webhooks/{webhookId}/deliveries | Get webhook deliveries
*WebhooksApi* | [**listWebhooks**](docs/WebhooksApi.md#listwebhooks) | **GET** /webhooks | List webhooks
*WebhooksApi* | [**replaceWebhook**](docs/WebhooksApi.md#replacewebhook) | **PUT** /webhooks/{webhookId} | Replace webhook configuration (full update)
*WebhooksApi* | [**testWebhook**](docs/WebhooksApi.md#testwebhook) | **POST** /webhooks/{webhookId}/test | Test webhook
*WebhooksApi* | [**updateWebhook**](docs/WebhooksApi.md#updatewebhook) | **PATCH** /webhooks/{webhookId} | Update webhook configuration (partial update)


### Documentation For Models

 - [AccessibilityFeatures](docs/AccessibilityFeatures.md)
 - [AddFolioAdjustmentRequest](docs/AddFolioAdjustmentRequest.md)
 - [AddFolioChargeRequest](docs/AddFolioChargeRequest.md)
 - [AddIncidentActionRequest](docs/AddIncidentActionRequest.md)
 - [AddLoyaltyPoints200Response](docs/AddLoyaltyPoints200Response.md)
 - [AddLoyaltyPointsRequest](docs/AddLoyaltyPointsRequest.md)
 - [AddSpecialRequestRequest](docs/AddSpecialRequestRequest.md)
 - [Address](docs/Address.md)
 - [ApplicabilityRules](docs/ApplicabilityRules.md)
 - [ApplicabilityRulesAllOfAdvanceBookingWindow](docs/ApplicabilityRulesAllOfAdvanceBookingWindow.md)
 - [ApplicabilityRulesAllOfValidDateRange](docs/ApplicabilityRulesAllOfValidDateRange.md)
 - [ApprovePurchaseOrderRequest](docs/ApprovePurchaseOrderRequest.md)
 - [AssignHousekeepingTaskRequest](docs/AssignHousekeepingTaskRequest.md)
 - [AssignMaintenanceRequestRequest](docs/AssignMaintenanceRequestRequest.md)
 - [AssignServiceRequestRequest](docs/AssignServiceRequestRequest.md)
 - [AuditLog](docs/AuditLog.md)
 - [AuditMetadata](docs/AuditMetadata.md)
 - [AvailabilityCalendar](docs/AvailabilityCalendar.md)
 - [AvailabilityCalendarAllOfDateRange](docs/AvailabilityCalendarAllOfDateRange.md)
 - [AvailabilitySlot](docs/AvailabilitySlot.md)
 - [AvailabilitySlotAllOfAllocations](docs/AvailabilitySlotAllOfAllocations.md)
 - [AvailabilitySlotAllOfRestrictions](docs/AvailabilitySlotAllOfRestrictions.md)
 - [BatchProcessPayments200Response](docs/BatchProcessPayments200Response.md)
 - [BatchProcessPaymentsRequest](docs/BatchProcessPaymentsRequest.md)
 - [BatchProcessPaymentsRequestPaymentsInner](docs/BatchProcessPaymentsRequestPaymentsInner.md)
 - [CancelReservationRequest](docs/CancelReservationRequest.md)
 - [CancelServiceRequestRequest](docs/CancelServiceRequestRequest.md)
 - [CancellationPolicy](docs/CancellationPolicy.md)
 - [CancellationPolicyAllOfPenaltySchedule](docs/CancellationPolicyAllOfPenaltySchedule.md)
 - [CapturePaymentRequest](docs/CapturePaymentRequest.md)
 - [Certification](docs/Certification.md)
 - [Channel](docs/Channel.md)
 - [ChannelAllOfConfiguration](docs/ChannelAllOfConfiguration.md)
 - [ChannelAllOfCredentials](docs/ChannelAllOfCredentials.md)
 - [ChannelAllOfLinks](docs/ChannelAllOfLinks.md)
 - [ChannelDistribution](docs/ChannelDistribution.md)
 - [ChannelDistributionAllOfCommission](docs/ChannelDistributionAllOfCommission.md)
 - [ChannelDistributionAllOfMarkup](docs/ChannelDistributionAllOfMarkup.md)
 - [ChannelMapping](docs/ChannelMapping.md)
 - [ChannelMappingAllOfRateStrategyMappings](docs/ChannelMappingAllOfRateStrategyMappings.md)
 - [ChannelMappingAllOfUnitTypeMappings](docs/ChannelMappingAllOfUnitTypeMappings.md)
 - [ChannelPerformance](docs/ChannelPerformance.md)
 - [CheckoutStayRequest](docs/CheckoutStayRequest.md)
 - [CloseIncidentRequest](docs/CloseIncidentRequest.md)
 - [CompleteHousekeepingTaskRequest](docs/CompleteHousekeepingTaskRequest.md)
 - [CompleteMaintenanceRequestRequest](docs/CompleteMaintenanceRequestRequest.md)
 - [CompleteMaintenanceRequestRequestPartsUsedInner](docs/CompleteMaintenanceRequestRequestPartsUsedInner.md)
 - [CompleteTrainingRequest](docs/CompleteTrainingRequest.md)
 - [ComplianceReport](docs/ComplianceReport.md)
 - [ConfirmFBOrderRequest](docs/ConfirmFBOrderRequest.md)
 - [ContactInfo](docs/ContactInfo.md)
 - [CountFBInventory200Response](docs/CountFBInventory200Response.md)
 - [CountFBInventoryRequest](docs/CountFBInventoryRequest.md)
 - [CountFBInventoryRequestCountsInner](docs/CountFBInventoryRequestCountsInner.md)
 - [CreateComplianceReportRequest](docs/CreateComplianceReportRequest.md)
 - [CreateInventoryBlock201Response](docs/CreateInventoryBlock201Response.md)
 - [CreateInventoryBlockRequest](docs/CreateInventoryBlockRequest.md)
 - [CreatePaymentRequest](docs/CreatePaymentRequest.md)
 - [CreateWebhookRequest](docs/CreateWebhookRequest.md)
 - [DeleteGuestData200Response](docs/DeleteGuestData200Response.md)
 - [DeleteGuestDataRequest](docs/DeleteGuestDataRequest.md)
 - [DisputeFolioRequest](docs/DisputeFolioRequest.md)
 - [EscalateServiceRequestRequest](docs/EscalateServiceRequestRequest.md)
 - [ExportGuestData200Response](docs/ExportGuestData200Response.md)
 - [ExportGuestDataRequest](docs/ExportGuestDataRequest.md)
 - [ExtendStayRequest](docs/ExtendStayRequest.md)
 - [FBInventoryItem](docs/FBInventoryItem.md)
 - [FBOrder](docs/FBOrder.md)
 - [FBOrderAllOfItems](docs/FBOrderAllOfItems.md)
 - [FBOrderAllOfServiceCharge](docs/FBOrderAllOfServiceCharge.md)
 - [FBOrderAllOfSubtotal](docs/FBOrderAllOfSubtotal.md)
 - [FBOrderAllOfTax](docs/FBOrderAllOfTax.md)
 - [FBOrderAllOfTotal](docs/FBOrderAllOfTotal.md)
 - [Feedback](docs/Feedback.md)
 - [FeedbackAllOfResponse](docs/FeedbackAllOfResponse.md)
 - [FeedbackAllOfServiceRecovery](docs/FeedbackAllOfServiceRecovery.md)
 - [Folio](docs/Folio.md)
 - [FolioAllOfBalance](docs/FolioAllOfBalance.md)
 - [FolioAllOfFees](docs/FolioAllOfFees.md)
 - [FolioAllOfLinks](docs/FolioAllOfLinks.md)
 - [FolioAllOfSubtotal](docs/FolioAllOfSubtotal.md)
 - [FolioAllOfTaxes](docs/FolioAllOfTaxes.md)
 - [FolioAllOfTotal](docs/FolioAllOfTotal.md)
 - [GDPRRequest](docs/GDPRRequest.md)
 - [GeoCoordinates](docs/GeoCoordinates.md)
 - [GetAuditLogs200Response](docs/GetAuditLogs200Response.md)
 - [GetAuditLogs200ResponseAllOfDataInner](docs/GetAuditLogs200ResponseAllOfDataInner.md)
 - [GetChannelSyncStatus200Response](docs/GetChannelSyncStatus200Response.md)
 - [GetCleaningSchedule200Response](docs/GetCleaningSchedule200Response.md)
 - [GetGuestLoyalty200Response](docs/GetGuestLoyalty200Response.md)
 - [GetGuestRegistry200Response](docs/GetGuestRegistry200Response.md)
 - [GetGuestStays200Response](docs/GetGuestStays200Response.md)
 - [GetMaintenanceHistory200Response](docs/GetMaintenanceHistory200Response.md)
 - [GetMaintenanceHistory200ResponseHistoryInner](docs/GetMaintenanceHistory200ResponseHistoryInner.md)
 - [GetNPSMetrics200Response](docs/GetNPSMetrics200Response.md)
 - [GetReservationHistory200ResponseInner](docs/GetReservationHistory200ResponseInner.md)
 - [GetReservationQuote200Response](docs/GetReservationQuote200Response.md)
 - [GetReservationQuoteRequest](docs/GetReservationQuoteRequest.md)
 - [GetReservationQuoteRequestGuestCount](docs/GetReservationQuoteRequestGuestCount.md)
 - [GetRevenueReconciliation200Response](docs/GetRevenueReconciliation200Response.md)
 - [GetStaffPerformance200Response](docs/GetStaffPerformance200Response.md)
 - [GetSystemHealth200Response](docs/GetSystemHealth200Response.md)
 - [GetSystemMetrics200Response](docs/GetSystemMetrics200Response.md)
 - [GetSystemStatus200Response](docs/GetSystemStatus200Response.md)
 - [GetSystemStatus200ResponseComponentsValue](docs/GetSystemStatus200ResponseComponentsValue.md)
 - [GetTaxReport200Response](docs/GetTaxReport200Response.md)
 - [GetWebhookDeliveries200Response](docs/GetWebhookDeliveries200Response.md)
 - [GuestCapacity](docs/GuestCapacity.md)
 - [GuestProfile](docs/GuestProfile.md)
 - [GuestProfileAllOfAddress](docs/GuestProfileAllOfAddress.md)
 - [HealthCheck](docs/HealthCheck.md)
 - [HealthCheckAllOfServices](docs/HealthCheckAllOfServices.md)
 - [HousekeepingTask](docs/HousekeepingTask.md)
 - [Incident](docs/Incident.md)
 - [IncidentAllOfCorrectiveActions](docs/IncidentAllOfCorrectiveActions.md)
 - [IncidentAllOfPersonsInvolved](docs/IncidentAllOfPersonsInvolved.md)
 - [IncidentAllOfWitnesses](docs/IncidentAllOfWitnesses.md)
 - [InitiateServiceRecoveryRequest](docs/InitiateServiceRecoveryRequest.md)
 - [InventoryUnit](docs/InventoryUnit.md)
 - [InventoryUnitAllOfLinks](docs/InventoryUnitAllOfLinks.md)
 - [InvoicePurchaseOrderRequest](docs/InvoicePurchaseOrderRequest.md)
 - [KeyCard](docs/KeyCard.md)
 - [LineItem](docs/LineItem.md)
 - [ListCertifications200Response](docs/ListCertifications200Response.md)
 - [ListFBInventory200Response](docs/ListFBInventory200Response.md)
 - [ListFeedback200Response](docs/ListFeedback200Response.md)
 - [ListGuests200Response](docs/ListGuests200Response.md)
 - [ListIncidents200Response](docs/ListIncidents200Response.md)
 - [ListInventoryUnits200Response](docs/ListInventoryUnits200Response.md)
 - [ListMenuItems200Response](docs/ListMenuItems200Response.md)
 - [ListPayments200Response](docs/ListPayments200Response.md)
 - [ListProperties200Response](docs/ListProperties200Response.md)
 - [ListRateStrategies200Response](docs/ListRateStrategies200Response.md)
 - [ListReviews200Response](docs/ListReviews200Response.md)
 - [ListStaffShifts200Response](docs/ListStaffShifts200Response.md)
 - [ListStays200Response](docs/ListStays200Response.md)
 - [ListSuppliers200Response](docs/ListSuppliers200Response.md)
 - [ListTrainingModules200Response](docs/ListTrainingModules200Response.md)
 - [ListUnitTypes200Response](docs/ListUnitTypes200Response.md)
 - [MaintenanceRequest](docs/MaintenanceRequest.md)
 - [MaintenanceRequestAllOfWorkLog](docs/MaintenanceRequestAllOfWorkLog.md)
 - [MarkReservationNoShowRequest](docs/MarkReservationNoShowRequest.md)
 - [MenuItem](docs/MenuItem.md)
 - [MergeGuestsRequest](docs/MergeGuestsRequest.md)
 - [Model0](docs/Model0.md)
 - [Money](docs/Money.md)
 - [PaginatedResponse](docs/PaginatedResponse.md)
 - [PaginatedResponseAllOfLinks](docs/PaginatedResponseAllOfLinks.md)
 - [PaginatedResponseAllOfPagination](docs/PaginatedResponseAllOfPagination.md)
 - [Payment](docs/Payment.md)
 - [PaymentAllOfCardDetails](docs/PaymentAllOfCardDetails.md)
 - [PaymentAllOfRefunds](docs/PaymentAllOfRefunds.md)
 - [PricingModel](docs/PricingModel.md)
 - [PricingModelAllOfBaseRates](docs/PricingModelAllOfBaseRates.md)
 - [PricingModelAllOfFees](docs/PricingModelAllOfFees.md)
 - [PricingModelAllOfLengthOfStayDiscounts](docs/PricingModelAllOfLengthOfStayDiscounts.md)
 - [PricingModelAllOfOccupancyPricing](docs/PricingModelAllOfOccupancyPricing.md)
 - [PricingModelAllOfSeasonalAdjustments](docs/PricingModelAllOfSeasonalAdjustments.md)
 - [PricingModelAllOfTaxes](docs/PricingModelAllOfTaxes.md)
 - [ProblemDetails](docs/ProblemDetails.md)
 - [ProblemDetailsAllOfErrors](docs/ProblemDetailsAllOfErrors.md)
 - [Property](docs/Property.md)
 - [PropertyAllOfLinks](docs/PropertyAllOfLinks.md)
 - [PropertyCertification](docs/PropertyCertification.md)
 - [PropertyPolicies](docs/PropertyPolicies.md)
 - [PropertyPoliciesAllOfChildPolicy](docs/PropertyPoliciesAllOfChildPolicy.md)
 - [PropertyPoliciesAllOfPetPolicy](docs/PropertyPoliciesAllOfPetPolicy.md)
 - [PurchaseOrder](docs/PurchaseOrder.md)
 - [PurchaseOrderAllOfItems](docs/PurchaseOrderAllOfItems.md)
 - [PurchaseOrderAllOfSubtotal](docs/PurchaseOrderAllOfSubtotal.md)
 - [PurchaseOrderAllOfTax](docs/PurchaseOrderAllOfTax.md)
 - [PurchaseOrderAllOfTotal](docs/PurchaseOrderAllOfTotal.md)
 - [RateStrategy](docs/RateStrategy.md)
 - [RateStrategyAllOfLinks](docs/RateStrategyAllOfLinks.md)
 - [ReceiveFBInventoryRequest](docs/ReceiveFBInventoryRequest.md)
 - [ReceivePurchaseOrderRequest](docs/ReceivePurchaseOrderRequest.md)
 - [ReceivePurchaseOrderRequestReceivedItemsInner](docs/ReceivePurchaseOrderRequestReceivedItemsInner.md)
 - [RefundPaymentRequest](docs/RefundPaymentRequest.md)
 - [Reservation](docs/Reservation.md)
 - [ReservationAllOfGuestCount](docs/ReservationAllOfGuestCount.md)
 - [RespondToFeedbackRequest](docs/RespondToFeedbackRequest.md)
 - [RevenueReport](docs/RevenueReport.md)
 - [RevenueReportAllOfRevenueByCategory](docs/RevenueReportAllOfRevenueByCategory.md)
 - [Review](docs/Review.md)
 - [ReviewAllOfResponse](docs/ReviewAllOfResponse.md)
 - [SearchAuditLogsRequest](docs/SearchAuditLogsRequest.md)
 - [SearchAvailability200Response](docs/SearchAvailability200Response.md)
 - [SearchAvailability200ResponseMetadata](docs/SearchAvailability200ResponseMetadata.md)
 - [SearchAvailability200ResponseResultsInner](docs/SearchAvailability200ResponseResultsInner.md)
 - [SearchAvailability200ResponseResultsInnerPriceBreakdownInner](docs/SearchAvailability200ResponseResultsInnerPriceBreakdownInner.md)
 - [SearchAvailability200ResponseResultsInnerPriceBreakdownInnerTaxesInner](docs/SearchAvailability200ResponseResultsInnerPriceBreakdownInnerTaxesInner.md)
 - [SearchAvailabilityRequest](docs/SearchAvailabilityRequest.md)
 - [SearchAvailabilityRequestFilters](docs/SearchAvailabilityRequestFilters.md)
 - [SearchAvailabilityRequestOccupancy](docs/SearchAvailabilityRequestOccupancy.md)
 - [SearchGuestsRequest](docs/SearchGuestsRequest.md)
 - [SearchReservations200Response](docs/SearchReservations200Response.md)
 - [ServeFBOrderRequest](docs/ServeFBOrderRequest.md)
 - [ServiceRequest](docs/ServiceRequest.md)
 - [ServiceRequestAllOfGuestFeedback](docs/ServiceRequestAllOfGuestFeedback.md)
 - [StaffShift](docs/StaffShift.md)
 - [StaffShiftAllOfBreaks](docs/StaffShiftAllOfBreaks.md)
 - [Stay](docs/Stay.md)
 - [StayAllOfLinks](docs/StayAllOfLinks.md)
 - [Supplier](docs/Supplier.md)
 - [SupplierAllOfBankDetails](docs/SupplierAllOfBankDetails.md)
 - [SupplierPerformance](docs/SupplierPerformance.md)
 - [Survey](docs/Survey.md)
 - [SurveyAllOfRatings](docs/SurveyAllOfRatings.md)
 - [SyncChannel202Response](docs/SyncChannel202Response.md)
 - [SyncChannelRequest](docs/SyncChannelRequest.md)
 - [SystemMetrics](docs/SystemMetrics.md)
 - [SystemMetricsAllOfCache](docs/SystemMetricsAllOfCache.md)
 - [SystemMetricsAllOfDatabase](docs/SystemMetricsAllOfDatabase.md)
 - [SystemMetricsAllOfRequests](docs/SystemMetricsAllOfRequests.md)
 - [TestChannelConnection200Response](docs/TestChannelConnection200Response.md)
 - [TestWebhook200Response](docs/TestWebhook200Response.md)
 - [TrainingEnrollment](docs/TrainingEnrollment.md)
 - [TrainingModule](docs/TrainingModule.md)
 - [TrainingModuleAllOfContent](docs/TrainingModuleAllOfContent.md)
 - [UnitType](docs/UnitType.md)
 - [UnitTypeAllOfBedConfiguration](docs/UnitTypeAllOfBedConfiguration.md)
 - [UnitTypeAllOfPhotos](docs/UnitTypeAllOfPhotos.md)
 - [UnitTypeAllOfSize](docs/UnitTypeAllOfSize.md)
 - [UpdateAvailabilityCalendar200Response](docs/UpdateAvailabilityCalendar200Response.md)
 - [UpdateAvailabilityCalendarRequest](docs/UpdateAvailabilityCalendarRequest.md)
 - [UpdateAvailabilityCalendarRequestUpdatesInner](docs/UpdateAvailabilityCalendarRequestUpdatesInner.md)
 - [VerifyGuest200Response](docs/VerifyGuest200Response.md)
 - [VerifyGuestRequest](docs/VerifyGuestRequest.md)
 - [VerifyHousekeepingTaskRequest](docs/VerifyHousekeepingTaskRequest.md)
 - [WasteFBInventoryRequest](docs/WasteFBInventoryRequest.md)
 - [Webhook](docs/Webhook.md)
 - [WebhookAllOfRetryPolicy](docs/WebhookAllOfRetryPolicy.md)
 - [WebhookDelivery](docs/WebhookDelivery.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="OAuth2"></a>
### OAuth2

- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: 
 - **integration:read**: Read access for integrations
 - **integration:write**: Write access for integrations

<a id="OAuth2"></a>
### OAuth2

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://auth.stayos.com/oauth/authorize
- **Scopes**: 
 - **read:properties**: Read property information
 - **write:properties**: Create and update properties
 - **read:inventory**: Read inventory units
 - **write:inventory**: Manage inventory units
 - **read:reservations**: View reservations
 - **write:reservations**: Create and modify reservations
 - **read:guests**: View guest profiles
 - **write:guests**: Manage guest profiles
 - **read:stays**: View active stays
 - **write:stays**: Manage check-in/check-out
 - **read:operations**: View housekeeping and maintenance
 - **write:operations**: Manage operations tasks
 - **read:payments**: View payment information
 - **write:payments**: Process payments
 - **read:channels**: View channel manager integrations
 - **write:channels**: Manage channel connections
 - **read:fb**: View food & beverage orders
 - **write:fb**: Manage F&B operations
 - **read:billing**: View billing and folios
 - **write:billing**: Manage billing operations
 - **read:procurement**: View purchase orders and suppliers
 - **write:procurement**: Manage procurement
 - **read:webhooks**: View webhook configurations
 - **write:webhooks**: Manage webhooks
 - **read:compliance**: View compliance reports
 - **read:system**: View system metrics
 - **read:audit**: Access audit logs
 - **write:compliance**: Generate compliance reports
 - **admin:all**: Full administrative access

<a id="BearerAuth"></a>
### BearerAuth

- **Type**: Bearer authentication (JWT)

<a id="ApiKeyAuth"></a>
### ApiKeyAuth

- **Type**: API key
- **API key parameter name**: X-API-Key
- **Location**: HTTP header

