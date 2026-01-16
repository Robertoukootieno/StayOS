# OpenAPIClient-php

# Noventrix StayOS - Comprehensive Hospitality Management API

**Version:** 1.0.0  
**Status:** Production Ready  
**Last Updated:** 2025-12-18

## Overview

StayOS provides a complete RESTful API for hospitality management, covering:
- Property & Inventory Management
- Reservation & Booking Lifecycle
- Guest Profiles & Loyalty
- Operations (Housekeeping & Maintenance)
- Billing & Payments
- Compliance & Audit
- Channel Management & Distribution

## Architecture Principles

- **RESTful Design:** Resource-oriented URLs, HTTP verbs, standard status codes
- **HATEOAS:** Hypermedia links for discoverability
- **Idempotency:** Safe retries using idempotency keys
- **Versioning:** URL-based versioning (/v1/, /v2/)
- **Pagination:** Cursor-based for large datasets
- **Filtering:** Rich query parameters following JSON:API conventions
- **Rate Limiting:** Token bucket algorithm (100 req/min standard, 1000 req/min premium)

## Authentication & Security

- **OAuth 2.0 + OpenID Connect** for user authentication
- **API Keys** for server-to-server integration
- **JWT Bearer Tokens** with short expiry (15 minutes)
- **Refresh Tokens** for session management
- **Scopes** for fine-grained authorization
- **mTLS** for high-security integrations

## Error Handling

All errors follow RFC 7807 (Problem Details for HTTP APIs):
```json
{
  \"type\": \"https://api.stayos.com/errors/validation-error\",
  \"title\": \"Validation Failed\",
  \"status\": 400,
  \"detail\": \"Check-out date must be after check-in date\",
  \"instance\": \"/reservations/create\",
  \"traceId\": \"550e8400-e29b-41d4-a716-446655440000\",
  \"errors\": [
    {
      \"field\": \"checkOutDate\",
      \"code\": \"INVALID_DATE_RANGE\",
      \"message\": \"Check-out date must be after check-in date\"
    }
  ]
}
```

## Rate Limiting

- **Header:** `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`
- **Status Code:** 429 Too Many Requests
- **Retry-After:** Seconds until rate limit resets

## Webhooks

StayOS supports webhooks for real-time event notifications. See `/webhooks` endpoints.

## Support

- **Documentation:** https://docs.stayos.com
- **API Status:** https://status.stayos.com
- **Support:** api-support@noventrix.com


For more information, please visit [https://docs.stayos.com](https://docs.stayos.com).

## Installation & Usage

### Requirements

PHP 8.1 and later.

### Composer

To install the bindings via [Composer](https://getcomposer.org/), add the following to `composer.json`:

```json
{
  "repositories": [
    {
      "type": "vcs",
      "url": "https://github.com/GIT_USER_ID/GIT_REPO_ID.git"
    }
  ],
  "require": {
    "GIT_USER_ID/GIT_REPO_ID": "*@dev"
  }
}
```

Then run `composer install`

### Manual Installation

Download the files and include `autoload.php`:

```php
<?php
require_once('/path/to/OpenAPIClient-php/vendor/autoload.php');
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

// Configure OAuth2 access token for authorization: OAuth2
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\AvailabilityApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$create_inventory_block_request = new \OpenAPI\Client\Model\CreateInventoryBlockRequest(); // \OpenAPI\Client\Model\CreateInventoryBlockRequest

try {
    $result = $apiInstance->createInventoryBlock($create_inventory_block_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AvailabilityApi->createInventoryBlock: ', $e->getMessage(), PHP_EOL;
}

```

## API Endpoints

All URIs are relative to *https://api.stayos.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AvailabilityApi* | [**createInventoryBlock**](docs/Api/AvailabilityApi.md#createinventoryblock) | **POST** /availability/block | Block inventory
*AvailabilityApi* | [**deleteInventoryBlock**](docs/Api/AvailabilityApi.md#deleteinventoryblock) | **DELETE** /availability/block/{blockId} | Remove inventory block
*AvailabilityApi* | [**getAvailabilityCalendar**](docs/Api/AvailabilityApi.md#getavailabilitycalendar) | **GET** /availability/calendar | Get availability calendar
*AvailabilityApi* | [**searchAvailability**](docs/Api/AvailabilityApi.md#searchavailability) | **POST** /availability/search | Search availability
*AvailabilityApi* | [**updateAvailabilityCalendar**](docs/Api/AvailabilityApi.md#updateavailabilitycalendar) | **PUT** /availability/calendar | Update availability calendar (bulk)
*BillingApi* | [**addFolioAdjustment**](docs/Api/BillingApi.md#addfolioadjustment) | **POST** /folios/{folioId}/adjustments | Add adjustment to folio
*BillingApi* | [**addFolioCharge**](docs/Api/BillingApi.md#addfoliocharge) | **POST** /folios/{folioId}/charges | Add charge to folio
*BillingApi* | [**addFolioLineItem**](docs/Api/BillingApi.md#addfoliolineitem) | **POST** /folios/{folioId}/line-items | Add line item to folio
*BillingApi* | [**batchProcessPayments**](docs/Api/BillingApi.md#batchprocesspayments) | **POST** /payments/batch | Batch payment processing
*BillingApi* | [**capturePayment**](docs/Api/BillingApi.md#capturepayment) | **POST** /payments/{paymentId}/capture | Capture payment
*BillingApi* | [**closeFolio**](docs/Api/BillingApi.md#closefolio) | **POST** /folios/{folioId}/close | Close folio
*BillingApi* | [**createFolio**](docs/Api/BillingApi.md#createfolio) | **POST** /folios | Create folio
*BillingApi* | [**createPayment**](docs/Api/BillingApi.md#createpayment) | **POST** /payments | Process payment
*BillingApi* | [**disputeFolio**](docs/Api/BillingApi.md#disputefolio) | **POST** /folios/{folioId}/dispute | Dispute folio
*BillingApi* | [**getFolio**](docs/Api/BillingApi.md#getfolio) | **GET** /folios/{folioId} | Get folio details
*BillingApi* | [**getFolioPDF**](docs/Api/BillingApi.md#getfoliopdf) | **GET** /folios/{folioId}/pdf | Download folio PDF
*BillingApi* | [**getPayment**](docs/Api/BillingApi.md#getpayment) | **GET** /payments/{paymentId} | Get payment details
*BillingApi* | [**getPaymentReceipt**](docs/Api/BillingApi.md#getpaymentreceipt) | **GET** /payments/{paymentId}/receipt | Get payment receipt
*BillingApi* | [**getRevenueReconciliation**](docs/Api/BillingApi.md#getrevenuereconciliation) | **GET** /revenue/reconciliation | Get revenue reconciliation
*BillingApi* | [**getRevenueReports**](docs/Api/BillingApi.md#getrevenuereports) | **GET** /revenue/reports | Get revenue reports
*BillingApi* | [**listFolios**](docs/Api/BillingApi.md#listfolios) | **GET** /folios | List folios
*BillingApi* | [**listPayments**](docs/Api/BillingApi.md#listpayments) | **GET** /payments | List payments
*BillingApi* | [**refundPayment**](docs/Api/BillingApi.md#refundpayment) | **POST** /payments/{paymentId}/refund | Refund payment
*BillingApi* | [**removeFolioLineItem**](docs/Api/BillingApi.md#removefoliolineitem) | **DELETE** /folios/{folioId}/line-items/{itemId} | Remove line item from folio
*BillingApi* | [**reopenFolio**](docs/Api/BillingApi.md#reopenfolio) | **POST** /folios/{folioId}/reopen | Reopen folio
*ChannelsApi* | [**createChannel**](docs/Api/ChannelsApi.md#createchannel) | **POST** /channels | Create channel integration
*ChannelsApi* | [**deleteChannel**](docs/Api/ChannelsApi.md#deletechannel) | **DELETE** /channels/{channelId} | Disconnect channel
*ChannelsApi* | [**getChannelMappings**](docs/Api/ChannelsApi.md#getchannelmappings) | **GET** /channels/{channelId}/mappings | Get channel mappings
*ChannelsApi* | [**getChannelPerformance**](docs/Api/ChannelsApi.md#getchannelperformance) | **GET** /channels/{channelId}/performance | Get channel performance
*ChannelsApi* | [**getChannelSyncStatus**](docs/Api/ChannelsApi.md#getchannelsyncstatus) | **GET** /channels/{channelId}/sync-status | Get sync status
*ChannelsApi* | [**listChannels**](docs/Api/ChannelsApi.md#listchannels) | **GET** /channels | List channel integrations
*ChannelsApi* | [**replaceChannel**](docs/Api/ChannelsApi.md#replacechannel) | **PUT** /channels/{channelId} | Replace channel configuration (full update)
*ChannelsApi* | [**syncChannel**](docs/Api/ChannelsApi.md#syncchannel) | **POST** /channels/{channelId}/sync | Sync channel data
*ChannelsApi* | [**testChannelConnection**](docs/Api/ChannelsApi.md#testchannelconnection) | **POST** /channels/{channelId}/test | Test channel connection
*ChannelsApi* | [**updateChannel**](docs/Api/ChannelsApi.md#updatechannel) | **PATCH** /channels/{channelId} | Update channel configuration (partial update)
*ChannelsApi* | [**updateChannelMappings**](docs/Api/ChannelsApi.md#updatechannelmappings) | **PUT** /channels/{channelId}/mappings | Update channel mappings
*ComplianceApi* | [**createCertification**](docs/Api/ComplianceApi.md#createcertification) | **POST** /compliance/certifications | Upload certification
*ComplianceApi* | [**createComplianceReport**](docs/Api/ComplianceApi.md#createcompliancereport) | **POST** /compliance/reports | Generate compliance report
*ComplianceApi* | [**deleteGuestData**](docs/Api/ComplianceApi.md#deleteguestdata) | **POST** /compliance/gdpr/delete | Delete guest data (GDPR)
*ComplianceApi* | [**exportGuestData**](docs/Api/ComplianceApi.md#exportguestdata) | **POST** /compliance/gdpr/export | Export guest data (GDPR)
*ComplianceApi* | [**getAuditLog**](docs/Api/ComplianceApi.md#getauditlog) | **GET** /audit/logs/{logId} | Get audit log details
*ComplianceApi* | [**getAuditLogs**](docs/Api/ComplianceApi.md#getauditlogs) | **GET** /audit/logs | Get audit logs
*ComplianceApi* | [**getComplianceReport**](docs/Api/ComplianceApi.md#getcompliancereport) | **GET** /compliance/reports/{reportId} | Get compliance report
*ComplianceApi* | [**getGuestRegistry**](docs/Api/ComplianceApi.md#getguestregistry) | **GET** /compliance/guest-registry | Get guest registry report
*ComplianceApi* | [**getTaxReport**](docs/Api/ComplianceApi.md#gettaxreport) | **GET** /compliance/tax-report | Get tax report
*ComplianceApi* | [**listCertifications**](docs/Api/ComplianceApi.md#listcertifications) | **GET** /compliance/certifications | List certifications
*ComplianceApi* | [**listComplianceReports**](docs/Api/ComplianceApi.md#listcompliancereports) | **GET** /compliance/reports | List compliance reports
*ComplianceApi* | [**searchAuditLogs**](docs/Api/ComplianceApi.md#searchauditlogs) | **POST** /audit/search | Search audit logs
*FeedbackApi* | [**getFeedback**](docs/Api/FeedbackApi.md#getfeedback) | **GET** /feedback/{feedbackId} | Get feedback details
*FeedbackApi* | [**getNPSMetrics**](docs/Api/FeedbackApi.md#getnpsmetrics) | **GET** /feedback/nps | Get NPS metrics
*FeedbackApi* | [**getPostStaySurvey**](docs/Api/FeedbackApi.md#getpoststaysurvey) | **GET** /feedback/surveys/{stayId} | Get post-stay survey
*FeedbackApi* | [**initiateServiceRecovery**](docs/Api/FeedbackApi.md#initiateservicerecovery) | **POST** /feedback/{feedbackId}/service-recovery | Initiate service recovery
*FeedbackApi* | [**listFeedback**](docs/Api/FeedbackApi.md#listfeedback) | **GET** /feedback | List guest feedback
*FeedbackApi* | [**listReviews**](docs/Api/FeedbackApi.md#listreviews) | **GET** /feedback/reviews | List third-party reviews
*FeedbackApi* | [**respondToFeedback**](docs/Api/FeedbackApi.md#respondtofeedback) | **POST** /feedback/{feedbackId}/respond | Respond to feedback
*FeedbackApi* | [**respondToReview**](docs/Api/FeedbackApi.md#respondtoreview) | **POST** /feedback/reviews/{reviewId}/respond | Respond to review
*FeedbackApi* | [**submitFeedback**](docs/Api/FeedbackApi.md#submitfeedback) | **POST** /feedback | Submit feedback
*FeedbackApi* | [**submitSurveyResponse**](docs/Api/FeedbackApi.md#submitsurveyresponse) | **POST** /feedback/surveys/{stayId} | Submit survey response
*FoodBeverageApi* | [**cancelFBOrder**](docs/Api/FoodBeverageApi.md#cancelfborder) | **POST** /fb/orders/{orderId}/cancel | Cancel F&amp;B order
*FoodBeverageApi* | [**confirmFBOrder**](docs/Api/FoodBeverageApi.md#confirmfborder) | **POST** /fb/orders/{orderId}/confirm | Confirm F&amp;B order
*FoodBeverageApi* | [**consumeFBInventory**](docs/Api/FoodBeverageApi.md#consumefbinventory) | **POST** /fb/inventory/{itemId}/consume | Record consumption
*FoodBeverageApi* | [**countFBInventory**](docs/Api/FoodBeverageApi.md#countfbinventory) | **POST** /fb/inventory/count | Perform stock count
*FoodBeverageApi* | [**createFBInventoryItem**](docs/Api/FoodBeverageApi.md#createfbinventoryitem) | **POST** /fb/inventory | Create inventory item
*FoodBeverageApi* | [**createFBOrder**](docs/Api/FoodBeverageApi.md#createfborder) | **POST** /fb/orders | Create F&amp;B order
*FoodBeverageApi* | [**createMenuItem**](docs/Api/FoodBeverageApi.md#createmenuitem) | **POST** /fb/menu | Create menu item
*FoodBeverageApi* | [**getFBInventoryItem**](docs/Api/FoodBeverageApi.md#getfbinventoryitem) | **GET** /fb/inventory/{itemId} | Get inventory item details
*FoodBeverageApi* | [**getMenuItem**](docs/Api/FoodBeverageApi.md#getmenuitem) | **GET** /fb/menu/{itemId} | Get menu item details
*FoodBeverageApi* | [**listFBInventory**](docs/Api/FoodBeverageApi.md#listfbinventory) | **GET** /fb/inventory | List F&amp;B inventory items
*FoodBeverageApi* | [**listFBOrders**](docs/Api/FoodBeverageApi.md#listfborders) | **GET** /fb/orders | List F&amp;B orders
*FoodBeverageApi* | [**listMenuItems**](docs/Api/FoodBeverageApi.md#listmenuitems) | **GET** /fb/menu | List menu items
*FoodBeverageApi* | [**markFBItemReady**](docs/Api/FoodBeverageApi.md#markfbitemready) | **POST** /fb/orders/{orderId}/items/{itemId}/ready | Mark item as ready
*FoodBeverageApi* | [**receiveFBInventory**](docs/Api/FoodBeverageApi.md#receivefbinventory) | **POST** /fb/inventory/{itemId}/receive | Receive stock
*FoodBeverageApi* | [**replaceFBOrder**](docs/Api/FoodBeverageApi.md#replacefborder) | **PUT** /fb/orders/{orderId} | Replace F&amp;B order (full update)
*FoodBeverageApi* | [**replaceMenuItem**](docs/Api/FoodBeverageApi.md#replacemenuitem) | **PUT** /fb/menu/{itemId} | Replace menu item (full update)
*FoodBeverageApi* | [**serveFBOrder**](docs/Api/FoodBeverageApi.md#servefborder) | **POST** /fb/orders/{orderId}/serve | Mark order as served
*FoodBeverageApi* | [**updateFBInventoryItem**](docs/Api/FoodBeverageApi.md#updatefbinventoryitem) | **PUT** /fb/inventory/{itemId} | Update inventory item
*FoodBeverageApi* | [**updateFBOrder**](docs/Api/FoodBeverageApi.md#updatefborder) | **PATCH** /fb/orders/{orderId} | Update F&amp;B order (partial update)
*FoodBeverageApi* | [**updateMenuItem**](docs/Api/FoodBeverageApi.md#updatemenuitem) | **PATCH** /fb/menu/{itemId} | Update menu item (partial update)
*FoodBeverageApi* | [**wasteFBInventory**](docs/Api/FoodBeverageApi.md#wastefbinventory) | **POST** /fb/inventory/{itemId}/waste | Record waste
*GuestsApi* | [**addLoyaltyPoints**](docs/Api/GuestsApi.md#addloyaltypoints) | **POST** /guests/{guestId}/loyalty/points | Add loyalty points
*GuestsApi* | [**createGuest**](docs/Api/GuestsApi.md#createguest) | **POST** /guests | Create guest profile
*GuestsApi* | [**deleteGuest**](docs/Api/GuestsApi.md#deleteguest) | **DELETE** /guests/{guestId} | Delete guest profile (GDPR)
*GuestsApi* | [**getGuest**](docs/Api/GuestsApi.md#getguest) | **GET** /guests/{guestId} | Get guest profile
*GuestsApi* | [**getGuestLoyalty**](docs/Api/GuestsApi.md#getguestloyalty) | **GET** /guests/{guestId}/loyalty | Get guest loyalty status
*GuestsApi* | [**getGuestStays**](docs/Api/GuestsApi.md#getgueststays) | **GET** /guests/{guestId}/stays | Get guest stay history
*GuestsApi* | [**listGuests**](docs/Api/GuestsApi.md#listguests) | **GET** /guests | List guest profiles
*GuestsApi* | [**mergeGuests**](docs/Api/GuestsApi.md#mergeguests) | **POST** /guests/merge | Merge duplicate guest profiles
*GuestsApi* | [**replaceGuest**](docs/Api/GuestsApi.md#replaceguest) | **PUT** /guests/{guestId} | Replace guest profile (full update)
*GuestsApi* | [**replaceGuestPreferences**](docs/Api/GuestsApi.md#replaceguestpreferences) | **PUT** /guests/{guestId}/preferences | Replace guest preferences (full update)
*GuestsApi* | [**searchGuests**](docs/Api/GuestsApi.md#searchguests) | **POST** /guests/search | Search guests
*GuestsApi* | [**updateGuest**](docs/Api/GuestsApi.md#updateguest) | **PATCH** /guests/{guestId} | Update guest profile (partial update)
*GuestsApi* | [**updateGuestPreferences**](docs/Api/GuestsApi.md#updateguestpreferences) | **PATCH** /guests/{guestId}/preferences | Update guest preferences (partial update)
*GuestsApi* | [**verifyGuest**](docs/Api/GuestsApi.md#verifyguest) | **POST** /guests/{guestId}/verify | Verify guest identity
*InventoryApi* | [**createInventoryUnit**](docs/Api/InventoryApi.md#createinventoryunit) | **POST** /properties/{propertyId}/inventory-units | Create inventory unit
*InventoryApi* | [**createUnitType**](docs/Api/InventoryApi.md#createunittype) | **POST** /properties/{propertyId}/unit-types | Create unit type
*InventoryApi* | [**getUnitType**](docs/Api/InventoryApi.md#getunittype) | **GET** /unit-types/{unitTypeId} | Get unit type details
*InventoryApi* | [**listInventoryUnits**](docs/Api/InventoryApi.md#listinventoryunits) | **GET** /properties/{propertyId}/inventory-units | List inventory units for property
*InventoryApi* | [**listUnitTypes**](docs/Api/InventoryApi.md#listunittypes) | **GET** /properties/{propertyId}/unit-types | List unit types
*InventoryApi* | [**replaceUnitType**](docs/Api/InventoryApi.md#replaceunittype) | **PUT** /unit-types/{unitTypeId} | Replace unit type (full update)
*InventoryApi* | [**updateUnitType**](docs/Api/InventoryApi.md#updateunittype) | **PATCH** /unit-types/{unitTypeId} | Update unit type (partial update)
*OperationsApi* | [**acknowledgeServiceRequest**](docs/Api/OperationsApi.md#acknowledgeservicerequest) | **POST** /service-requests/{requestId}/acknowledge | Acknowledge service request
*OperationsApi* | [**addIncidentAction**](docs/Api/OperationsApi.md#addincidentaction) | **POST** /incidents/{incidentId}/actions | Add incident action
*OperationsApi* | [**assignHousekeepingTask**](docs/Api/OperationsApi.md#assignhousekeepingtask) | **POST** /housekeeping/tasks/{taskId}/assign | Assign housekeeping task
*OperationsApi* | [**assignMaintenanceRequest**](docs/Api/OperationsApi.md#assignmaintenancerequest) | **POST** /maintenance/requests/{requestId}/assign | Assign maintenance request
*OperationsApi* | [**assignServiceRequest**](docs/Api/OperationsApi.md#assignservicerequest) | **POST** /service-requests/{requestId}/assign | Assign service request
*OperationsApi* | [**cancelServiceRequest**](docs/Api/OperationsApi.md#cancelservicerequest) | **POST** /service-requests/{requestId}/cancel | Cancel service request
*OperationsApi* | [**clockInShift**](docs/Api/OperationsApi.md#clockinshift) | **POST** /staff/shifts/{shiftId}/clock-in | Clock in for shift
*OperationsApi* | [**clockOutShift**](docs/Api/OperationsApi.md#clockoutshift) | **POST** /staff/shifts/{shiftId}/clock-out | Clock out from shift
*OperationsApi* | [**closeIncident**](docs/Api/OperationsApi.md#closeincident) | **POST** /incidents/{incidentId}/close | Close incident
*OperationsApi* | [**completeHousekeepingTask**](docs/Api/OperationsApi.md#completehousekeepingtask) | **POST** /housekeeping/tasks/{taskId}/complete | Complete housekeeping task
*OperationsApi* | [**completeMaintenanceRequest**](docs/Api/OperationsApi.md#completemaintenancerequest) | **POST** /maintenance/requests/{requestId}/complete | Complete maintenance request
*OperationsApi* | [**completeServiceRequest**](docs/Api/OperationsApi.md#completeservicerequest) | **POST** /service-requests/{requestId}/complete | Complete service request
*OperationsApi* | [**completeTraining**](docs/Api/OperationsApi.md#completetraining) | **POST** /training/enrollments/{enrollmentId}/complete | Complete training
*OperationsApi* | [**createHousekeepingTask**](docs/Api/OperationsApi.md#createhousekeepingtask) | **POST** /housekeeping/tasks | Create housekeeping task
*OperationsApi* | [**createMaintenanceRequest**](docs/Api/OperationsApi.md#createmaintenancerequest) | **POST** /maintenance/requests | Create maintenance request
*OperationsApi* | [**createServiceRequest**](docs/Api/OperationsApi.md#createservicerequest) | **POST** /service-requests | Create service request
*OperationsApi* | [**createStaffShift**](docs/Api/OperationsApi.md#createstaffshift) | **POST** /staff/shifts | Create staff shift
*OperationsApi* | [**createTrainingModule**](docs/Api/OperationsApi.md#createtrainingmodule) | **POST** /training/modules | Create training module
*OperationsApi* | [**enrollInTraining**](docs/Api/OperationsApi.md#enrollintraining) | **POST** /training/enrollments | Enroll in training
*OperationsApi* | [**escalateServiceRequest**](docs/Api/OperationsApi.md#escalateservicerequest) | **POST** /service-requests/{requestId}/escalate | Escalate service request
*OperationsApi* | [**failHousekeepingTask**](docs/Api/OperationsApi.md#failhousekeepingtask) | **POST** /housekeeping/tasks/{taskId}/fail | Fail housekeeping task
*OperationsApi* | [**getCleaningSchedule**](docs/Api/OperationsApi.md#getcleaningschedule) | **GET** /housekeeping/schedule | Get cleaning schedule
*OperationsApi* | [**getIncident**](docs/Api/OperationsApi.md#getincident) | **GET** /incidents/{incidentId} | Get incident details
*OperationsApi* | [**getMaintenanceHistory**](docs/Api/OperationsApi.md#getmaintenancehistory) | **GET** /maintenance/requests/{requestId}/history | Get maintenance history
*OperationsApi* | [**getStaffPerformance**](docs/Api/OperationsApi.md#getstaffperformance) | **GET** /staff/{staffId}/performance | Get staff performance metrics
*OperationsApi* | [**getTrainingEnrollment**](docs/Api/OperationsApi.md#gettrainingenrollment) | **GET** /training/enrollments/{enrollmentId} | Get enrollment details
*OperationsApi* | [**getTrainingModule**](docs/Api/OperationsApi.md#gettrainingmodule) | **GET** /training/modules/{moduleId} | Get training module details
*OperationsApi* | [**listHousekeepingTasks**](docs/Api/OperationsApi.md#listhousekeepingtasks) | **GET** /housekeeping/tasks | List housekeeping tasks
*OperationsApi* | [**listIncidents**](docs/Api/OperationsApi.md#listincidents) | **GET** /incidents | List incidents
*OperationsApi* | [**listMaintenanceRequests**](docs/Api/OperationsApi.md#listmaintenancerequests) | **GET** /maintenance/requests | List maintenance requests
*OperationsApi* | [**listServiceRequests**](docs/Api/OperationsApi.md#listservicerequests) | **GET** /service-requests | List service requests
*OperationsApi* | [**listStaffShifts**](docs/Api/OperationsApi.md#liststaffshifts) | **GET** /staff/shifts | List staff shifts
*OperationsApi* | [**listTrainingModules**](docs/Api/OperationsApi.md#listtrainingmodules) | **GET** /training/modules | List training modules
*OperationsApi* | [**replaceHousekeepingTask**](docs/Api/OperationsApi.md#replacehousekeepingtask) | **PUT** /housekeeping/tasks/{taskId} | Replace housekeeping task (full update)
*OperationsApi* | [**replaceIncident**](docs/Api/OperationsApi.md#replaceincident) | **PUT** /incidents/{incidentId} | Replace incident (full update)
*OperationsApi* | [**replaceMaintenanceRequest**](docs/Api/OperationsApi.md#replacemaintenancerequest) | **PUT** /maintenance/requests/{requestId} | Replace maintenance request (full update)
*OperationsApi* | [**replaceServiceRequest**](docs/Api/OperationsApi.md#replaceservicerequest) | **PUT** /service-requests/{requestId} | Replace service request (full update)
*OperationsApi* | [**reportIncident**](docs/Api/OperationsApi.md#reportincident) | **POST** /incidents | Report incident
*OperationsApi* | [**startHousekeepingTask**](docs/Api/OperationsApi.md#starthousekeepingtask) | **POST** /housekeeping/tasks/{taskId}/start | Start housekeeping task
*OperationsApi* | [**updateHousekeepingTask**](docs/Api/OperationsApi.md#updatehousekeepingtask) | **PATCH** /housekeeping/tasks/{taskId} | Update housekeeping task (partial update)
*OperationsApi* | [**updateMaintenanceRequest**](docs/Api/OperationsApi.md#updatemaintenancerequest) | **PATCH** /maintenance/requests/{requestId} | Update maintenance request (partial update)
*OperationsApi* | [**updateServiceRequest**](docs/Api/OperationsApi.md#updateservicerequest) | **PATCH** /service-requests/{requestId} | Update service request (partial update)
*OperationsApi* | [**verifyHousekeepingTask**](docs/Api/OperationsApi.md#verifyhousekeepingtask) | **POST** /housekeeping/tasks/{taskId}/verify | Verify housekeeping task
*OperationsApi* | [**verifyMaintenanceRequest**](docs/Api/OperationsApi.md#verifymaintenancerequest) | **POST** /maintenance/requests/{requestId}/verify | Verify maintenance completion
*ProcurementApi* | [**approvePurchaseOrder**](docs/Api/ProcurementApi.md#approvepurchaseorder) | **POST** /procurement/purchase-orders/{poId}/approve | Approve purchase order
*ProcurementApi* | [**createPurchaseOrder**](docs/Api/ProcurementApi.md#createpurchaseorder) | **POST** /procurement/purchase-orders | Create purchase order
*ProcurementApi* | [**createSupplier**](docs/Api/ProcurementApi.md#createsupplier) | **POST** /procurement/suppliers | Create supplier
*ProcurementApi* | [**getSupplier**](docs/Api/ProcurementApi.md#getsupplier) | **GET** /procurement/suppliers/{supplierId} | Get supplier details
*ProcurementApi* | [**getSupplierPerformance**](docs/Api/ProcurementApi.md#getsupplierperformance) | **GET** /procurement/suppliers/{supplierId}/performance | Get supplier performance
*ProcurementApi* | [**invoicePurchaseOrder**](docs/Api/ProcurementApi.md#invoicepurchaseorder) | **POST** /procurement/purchase-orders/{poId}/invoice | Record invoice for purchase order
*ProcurementApi* | [**listPurchaseOrders**](docs/Api/ProcurementApi.md#listpurchaseorders) | **GET** /procurement/purchase-orders | List purchase orders
*ProcurementApi* | [**listSuppliers**](docs/Api/ProcurementApi.md#listsuppliers) | **GET** /procurement/suppliers | List suppliers
*ProcurementApi* | [**receivePurchaseOrder**](docs/Api/ProcurementApi.md#receivepurchaseorder) | **POST** /procurement/purchase-orders/{poId}/receive | Receive purchase order
*ProcurementApi* | [**replacePurchaseOrder**](docs/Api/ProcurementApi.md#replacepurchaseorder) | **PUT** /procurement/purchase-orders/{poId} | Replace purchase order (full update)
*ProcurementApi* | [**replaceSupplier**](docs/Api/ProcurementApi.md#replacesupplier) | **PUT** /procurement/suppliers/{supplierId} | Replace supplier (full update)
*ProcurementApi* | [**submitPurchaseOrder**](docs/Api/ProcurementApi.md#submitpurchaseorder) | **POST** /procurement/purchase-orders/{poId}/submit | Submit purchase order
*ProcurementApi* | [**updatePurchaseOrder**](docs/Api/ProcurementApi.md#updatepurchaseorder) | **PATCH** /procurement/purchase-orders/{poId} | Update purchase order (partial update)
*ProcurementApi* | [**updateSupplier**](docs/Api/ProcurementApi.md#updatesupplier) | **PATCH** /procurement/suppliers/{supplierId} | Update supplier (partial update)
*PropertiesApi* | [**createProperty**](docs/Api/PropertiesApi.md#createproperty) | **POST** /properties | Create property
*PropertiesApi* | [**deleteProperty**](docs/Api/PropertiesApi.md#deleteproperty) | **DELETE** /properties/{propertyId} | Delete property
*PropertiesApi* | [**getProperty**](docs/Api/PropertiesApi.md#getproperty) | **GET** /properties/{propertyId} | Get property by ID
*PropertiesApi* | [**listProperties**](docs/Api/PropertiesApi.md#listproperties) | **GET** /properties | List properties
*PropertiesApi* | [**replaceInventoryUnit**](docs/Api/PropertiesApi.md#replaceinventoryunit) | **PUT** /inventory-units/{unitId} | Replace inventory unit (full update)
*PropertiesApi* | [**replaceProperty**](docs/Api/PropertiesApi.md#replaceproperty) | **PUT** /properties/{propertyId} | Replace property (full update)
*PropertiesApi* | [**replaceRateStrategy**](docs/Api/PropertiesApi.md#replaceratestrategy) | **PUT** /rate-strategies/{strategyId} | Replace rate strategy (full update)
*PropertiesApi* | [**updateInventoryUnit**](docs/Api/PropertiesApi.md#updateinventoryunit) | **PATCH** /inventory-units/{unitId} | Update inventory unit (partial update)
*PropertiesApi* | [**updateProperty**](docs/Api/PropertiesApi.md#updateproperty) | **PATCH** /properties/{propertyId} | Update property (partial update)
*PropertiesApi* | [**updateRateStrategy**](docs/Api/PropertiesApi.md#updateratestrategy) | **PATCH** /rate-strategies/{strategyId} | Update rate strategy (partial update)
*RateStrategiesApi* | [**createRateStrategy**](docs/Api/RateStrategiesApi.md#createratestrategy) | **POST** /properties/{propertyId}/rate-strategies | Create rate strategy
*RateStrategiesApi* | [**listRateStrategies**](docs/Api/RateStrategiesApi.md#listratestrategies) | **GET** /properties/{propertyId}/rate-strategies | List rate strategies
*ReservationsApi* | [**addSpecialRequest**](docs/Api/ReservationsApi.md#addspecialrequest) | **POST** /reservations/{reservationId}/special-requests | Add special request to reservation
*ReservationsApi* | [**cancelReservation**](docs/Api/ReservationsApi.md#cancelreservation) | **POST** /reservations/{reservationId}/cancel | Cancel reservation
*ReservationsApi* | [**confirmReservation**](docs/Api/ReservationsApi.md#confirmreservation) | **POST** /reservations/{reservationId}/confirm | Confirm reservation
*ReservationsApi* | [**createReservation**](docs/Api/ReservationsApi.md#createreservation) | **POST** /reservations | Create reservation
*ReservationsApi* | [**getReservation**](docs/Api/ReservationsApi.md#getreservation) | **GET** /reservations/{reservationId} | Get reservation details
*ReservationsApi* | [**getReservationHistory**](docs/Api/ReservationsApi.md#getreservationhistory) | **GET** /reservations/{reservationId}/history | Get reservation modification history
*ReservationsApi* | [**getReservationQuote**](docs/Api/ReservationsApi.md#getreservationquote) | **POST** /reservations/quote | Get pricing quote
*ReservationsApi* | [**markReservationNoShow**](docs/Api/ReservationsApi.md#markreservationnoshow) | **POST** /reservations/{reservationId}/no-show | Mark reservation as no-show
*ReservationsApi* | [**replaceReservation**](docs/Api/ReservationsApi.md#replacereservation) | **PUT** /reservations/{reservationId} | Replace reservation (full update)
*ReservationsApi* | [**searchReservations**](docs/Api/ReservationsApi.md#searchreservations) | **GET** /reservations/search | Advanced reservation search
*ReservationsApi* | [**updateReservation**](docs/Api/ReservationsApi.md#updatereservation) | **PATCH** /reservations/{reservationId} | Update reservation (partial update)
*StaysApi* | [**addStayCharge**](docs/Api/StaysApi.md#addstaycharge) | **POST** /stays/{stayId}/charges | Add incidental charge
*StaysApi* | [**checkoutStay**](docs/Api/StaysApi.md#checkoutstay) | **POST** /stays/{stayId}/checkout | Check-out guest
*StaysApi* | [**createStay**](docs/Api/StaysApi.md#createstay) | **POST** /stays | Create stay (check-in)
*StaysApi* | [**deactivateKeyCard**](docs/Api/StaysApi.md#deactivatekeycard) | **DELETE** /stays/{stayId}/key-cards/{cardId} | Deactivate key card
*StaysApi* | [**extendStay**](docs/Api/StaysApi.md#extendstay) | **POST** /stays/{stayId}/extend | Extend stay
*StaysApi* | [**getStay**](docs/Api/StaysApi.md#getstay) | **GET** /stays/{stayId} | Get stay details
*StaysApi* | [**issueKeyCard**](docs/Api/StaysApi.md#issuekeycard) | **POST** /stays/{stayId}/key-cards | Issue key card
*StaysApi* | [**listStays**](docs/Api/StaysApi.md#liststays) | **GET** /stays | List active stays
*StaysApi* | [**replaceStay**](docs/Api/StaysApi.md#replacestay) | **PUT** /stays/{stayId} | Replace stay (full update)
*StaysApi* | [**updateStay**](docs/Api/StaysApi.md#updatestay) | **PATCH** /stays/{stayId} | Update stay (partial update)
*SystemApi* | [**getSystemHealth**](docs/Api/SystemApi.md#getsystemhealth) | **GET** /system/health | Health check
*SystemApi* | [**getSystemMetrics**](docs/Api/SystemApi.md#getsystemmetrics) | **GET** /system/metrics | Get system metrics
*SystemApi* | [**getSystemStatus**](docs/Api/SystemApi.md#getsystemstatus) | **GET** /system/status | Get system status
*WebhooksApi* | [**createWebhook**](docs/Api/WebhooksApi.md#createwebhook) | **POST** /webhooks | Create webhook
*WebhooksApi* | [**deleteWebhook**](docs/Api/WebhooksApi.md#deletewebhook) | **DELETE** /webhooks/{webhookId} | Delete webhook
*WebhooksApi* | [**getWebhook**](docs/Api/WebhooksApi.md#getwebhook) | **GET** /webhooks/{webhookId} | Get webhook details
*WebhooksApi* | [**getWebhookDeliveries**](docs/Api/WebhooksApi.md#getwebhookdeliveries) | **GET** /webhooks/{webhookId}/deliveries | Get webhook deliveries
*WebhooksApi* | [**listWebhooks**](docs/Api/WebhooksApi.md#listwebhooks) | **GET** /webhooks | List webhooks
*WebhooksApi* | [**replaceWebhook**](docs/Api/WebhooksApi.md#replacewebhook) | **PUT** /webhooks/{webhookId} | Replace webhook configuration (full update)
*WebhooksApi* | [**testWebhook**](docs/Api/WebhooksApi.md#testwebhook) | **POST** /webhooks/{webhookId}/test | Test webhook
*WebhooksApi* | [**updateWebhook**](docs/Api/WebhooksApi.md#updatewebhook) | **PATCH** /webhooks/{webhookId} | Update webhook configuration (partial update)

## Models

- [AccessibilityFeatures](docs/Model/AccessibilityFeatures.md)
- [AddFolioAdjustmentRequest](docs/Model/AddFolioAdjustmentRequest.md)
- [AddFolioChargeRequest](docs/Model/AddFolioChargeRequest.md)
- [AddIncidentActionRequest](docs/Model/AddIncidentActionRequest.md)
- [AddLoyaltyPoints200Response](docs/Model/AddLoyaltyPoints200Response.md)
- [AddLoyaltyPointsRequest](docs/Model/AddLoyaltyPointsRequest.md)
- [AddSpecialRequestRequest](docs/Model/AddSpecialRequestRequest.md)
- [Address](docs/Model/Address.md)
- [ApplicabilityRules](docs/Model/ApplicabilityRules.md)
- [ApplicabilityRulesAllOfAdvanceBookingWindow](docs/Model/ApplicabilityRulesAllOfAdvanceBookingWindow.md)
- [ApplicabilityRulesAllOfValidDateRange](docs/Model/ApplicabilityRulesAllOfValidDateRange.md)
- [ApprovePurchaseOrderRequest](docs/Model/ApprovePurchaseOrderRequest.md)
- [AssignHousekeepingTaskRequest](docs/Model/AssignHousekeepingTaskRequest.md)
- [AssignMaintenanceRequestRequest](docs/Model/AssignMaintenanceRequestRequest.md)
- [AssignServiceRequestRequest](docs/Model/AssignServiceRequestRequest.md)
- [AuditLog](docs/Model/AuditLog.md)
- [AuditMetadata](docs/Model/AuditMetadata.md)
- [AvailabilityCalendar](docs/Model/AvailabilityCalendar.md)
- [AvailabilityCalendarAllOfDateRange](docs/Model/AvailabilityCalendarAllOfDateRange.md)
- [AvailabilitySlot](docs/Model/AvailabilitySlot.md)
- [AvailabilitySlotAllOfAllocations](docs/Model/AvailabilitySlotAllOfAllocations.md)
- [AvailabilitySlotAllOfRestrictions](docs/Model/AvailabilitySlotAllOfRestrictions.md)
- [BatchProcessPayments200Response](docs/Model/BatchProcessPayments200Response.md)
- [BatchProcessPaymentsRequest](docs/Model/BatchProcessPaymentsRequest.md)
- [BatchProcessPaymentsRequestPaymentsInner](docs/Model/BatchProcessPaymentsRequestPaymentsInner.md)
- [CancelReservationRequest](docs/Model/CancelReservationRequest.md)
- [CancelServiceRequestRequest](docs/Model/CancelServiceRequestRequest.md)
- [CancellationPolicy](docs/Model/CancellationPolicy.md)
- [CancellationPolicyAllOfPenaltySchedule](docs/Model/CancellationPolicyAllOfPenaltySchedule.md)
- [CapturePaymentRequest](docs/Model/CapturePaymentRequest.md)
- [Certification](docs/Model/Certification.md)
- [Channel](docs/Model/Channel.md)
- [ChannelAllOfConfiguration](docs/Model/ChannelAllOfConfiguration.md)
- [ChannelAllOfCredentials](docs/Model/ChannelAllOfCredentials.md)
- [ChannelAllOfLinks](docs/Model/ChannelAllOfLinks.md)
- [ChannelDistribution](docs/Model/ChannelDistribution.md)
- [ChannelDistributionAllOfCommission](docs/Model/ChannelDistributionAllOfCommission.md)
- [ChannelDistributionAllOfMarkup](docs/Model/ChannelDistributionAllOfMarkup.md)
- [ChannelMapping](docs/Model/ChannelMapping.md)
- [ChannelMappingAllOfRateStrategyMappings](docs/Model/ChannelMappingAllOfRateStrategyMappings.md)
- [ChannelMappingAllOfUnitTypeMappings](docs/Model/ChannelMappingAllOfUnitTypeMappings.md)
- [ChannelPerformance](docs/Model/ChannelPerformance.md)
- [CheckoutStayRequest](docs/Model/CheckoutStayRequest.md)
- [CloseIncidentRequest](docs/Model/CloseIncidentRequest.md)
- [CompleteHousekeepingTaskRequest](docs/Model/CompleteHousekeepingTaskRequest.md)
- [CompleteMaintenanceRequestRequest](docs/Model/CompleteMaintenanceRequestRequest.md)
- [CompleteMaintenanceRequestRequestPartsUsedInner](docs/Model/CompleteMaintenanceRequestRequestPartsUsedInner.md)
- [CompleteTrainingRequest](docs/Model/CompleteTrainingRequest.md)
- [ComplianceReport](docs/Model/ComplianceReport.md)
- [ConfirmFBOrderRequest](docs/Model/ConfirmFBOrderRequest.md)
- [ContactInfo](docs/Model/ContactInfo.md)
- [CountFBInventory200Response](docs/Model/CountFBInventory200Response.md)
- [CountFBInventoryRequest](docs/Model/CountFBInventoryRequest.md)
- [CountFBInventoryRequestCountsInner](docs/Model/CountFBInventoryRequestCountsInner.md)
- [CreateComplianceReportRequest](docs/Model/CreateComplianceReportRequest.md)
- [CreateInventoryBlock201Response](docs/Model/CreateInventoryBlock201Response.md)
- [CreateInventoryBlockRequest](docs/Model/CreateInventoryBlockRequest.md)
- [CreatePaymentRequest](docs/Model/CreatePaymentRequest.md)
- [CreateWebhookRequest](docs/Model/CreateWebhookRequest.md)
- [DeleteGuestData200Response](docs/Model/DeleteGuestData200Response.md)
- [DeleteGuestDataRequest](docs/Model/DeleteGuestDataRequest.md)
- [DisputeFolioRequest](docs/Model/DisputeFolioRequest.md)
- [EscalateServiceRequestRequest](docs/Model/EscalateServiceRequestRequest.md)
- [ExportGuestData200Response](docs/Model/ExportGuestData200Response.md)
- [ExportGuestDataRequest](docs/Model/ExportGuestDataRequest.md)
- [ExtendStayRequest](docs/Model/ExtendStayRequest.md)
- [FBInventoryItem](docs/Model/FBInventoryItem.md)
- [FBOrder](docs/Model/FBOrder.md)
- [FBOrderAllOfItems](docs/Model/FBOrderAllOfItems.md)
- [FBOrderAllOfServiceCharge](docs/Model/FBOrderAllOfServiceCharge.md)
- [FBOrderAllOfSubtotal](docs/Model/FBOrderAllOfSubtotal.md)
- [FBOrderAllOfTax](docs/Model/FBOrderAllOfTax.md)
- [FBOrderAllOfTotal](docs/Model/FBOrderAllOfTotal.md)
- [Feedback](docs/Model/Feedback.md)
- [FeedbackAllOfResponse](docs/Model/FeedbackAllOfResponse.md)
- [FeedbackAllOfServiceRecovery](docs/Model/FeedbackAllOfServiceRecovery.md)
- [Folio](docs/Model/Folio.md)
- [FolioAllOfBalance](docs/Model/FolioAllOfBalance.md)
- [FolioAllOfFees](docs/Model/FolioAllOfFees.md)
- [FolioAllOfLinks](docs/Model/FolioAllOfLinks.md)
- [FolioAllOfSubtotal](docs/Model/FolioAllOfSubtotal.md)
- [FolioAllOfTaxes](docs/Model/FolioAllOfTaxes.md)
- [FolioAllOfTotal](docs/Model/FolioAllOfTotal.md)
- [GDPRRequest](docs/Model/GDPRRequest.md)
- [GeoCoordinates](docs/Model/GeoCoordinates.md)
- [GetAuditLogs200Response](docs/Model/GetAuditLogs200Response.md)
- [GetAuditLogs200ResponseAllOfDataInner](docs/Model/GetAuditLogs200ResponseAllOfDataInner.md)
- [GetChannelSyncStatus200Response](docs/Model/GetChannelSyncStatus200Response.md)
- [GetCleaningSchedule200Response](docs/Model/GetCleaningSchedule200Response.md)
- [GetGuestLoyalty200Response](docs/Model/GetGuestLoyalty200Response.md)
- [GetGuestRegistry200Response](docs/Model/GetGuestRegistry200Response.md)
- [GetGuestStays200Response](docs/Model/GetGuestStays200Response.md)
- [GetMaintenanceHistory200Response](docs/Model/GetMaintenanceHistory200Response.md)
- [GetMaintenanceHistory200ResponseHistoryInner](docs/Model/GetMaintenanceHistory200ResponseHistoryInner.md)
- [GetNPSMetrics200Response](docs/Model/GetNPSMetrics200Response.md)
- [GetReservationHistory200ResponseInner](docs/Model/GetReservationHistory200ResponseInner.md)
- [GetReservationQuote200Response](docs/Model/GetReservationQuote200Response.md)
- [GetReservationQuoteRequest](docs/Model/GetReservationQuoteRequest.md)
- [GetReservationQuoteRequestGuestCount](docs/Model/GetReservationQuoteRequestGuestCount.md)
- [GetRevenueReconciliation200Response](docs/Model/GetRevenueReconciliation200Response.md)
- [GetStaffPerformance200Response](docs/Model/GetStaffPerformance200Response.md)
- [GetSystemHealth200Response](docs/Model/GetSystemHealth200Response.md)
- [GetSystemMetrics200Response](docs/Model/GetSystemMetrics200Response.md)
- [GetSystemStatus200Response](docs/Model/GetSystemStatus200Response.md)
- [GetSystemStatus200ResponseComponentsValue](docs/Model/GetSystemStatus200ResponseComponentsValue.md)
- [GetTaxReport200Response](docs/Model/GetTaxReport200Response.md)
- [GetWebhookDeliveries200Response](docs/Model/GetWebhookDeliveries200Response.md)
- [GuestCapacity](docs/Model/GuestCapacity.md)
- [GuestProfile](docs/Model/GuestProfile.md)
- [GuestProfileAllOfAddress](docs/Model/GuestProfileAllOfAddress.md)
- [HealthCheck](docs/Model/HealthCheck.md)
- [HealthCheckAllOfServices](docs/Model/HealthCheckAllOfServices.md)
- [HousekeepingTask](docs/Model/HousekeepingTask.md)
- [Incident](docs/Model/Incident.md)
- [IncidentAllOfCorrectiveActions](docs/Model/IncidentAllOfCorrectiveActions.md)
- [IncidentAllOfPersonsInvolved](docs/Model/IncidentAllOfPersonsInvolved.md)
- [IncidentAllOfWitnesses](docs/Model/IncidentAllOfWitnesses.md)
- [InitiateServiceRecoveryRequest](docs/Model/InitiateServiceRecoveryRequest.md)
- [InventoryUnit](docs/Model/InventoryUnit.md)
- [InventoryUnitAllOfLinks](docs/Model/InventoryUnitAllOfLinks.md)
- [InvoicePurchaseOrderRequest](docs/Model/InvoicePurchaseOrderRequest.md)
- [KeyCard](docs/Model/KeyCard.md)
- [LineItem](docs/Model/LineItem.md)
- [ListCertifications200Response](docs/Model/ListCertifications200Response.md)
- [ListFBInventory200Response](docs/Model/ListFBInventory200Response.md)
- [ListFeedback200Response](docs/Model/ListFeedback200Response.md)
- [ListGuests200Response](docs/Model/ListGuests200Response.md)
- [ListIncidents200Response](docs/Model/ListIncidents200Response.md)
- [ListInventoryUnits200Response](docs/Model/ListInventoryUnits200Response.md)
- [ListMenuItems200Response](docs/Model/ListMenuItems200Response.md)
- [ListPayments200Response](docs/Model/ListPayments200Response.md)
- [ListProperties200Response](docs/Model/ListProperties200Response.md)
- [ListRateStrategies200Response](docs/Model/ListRateStrategies200Response.md)
- [ListReviews200Response](docs/Model/ListReviews200Response.md)
- [ListStaffShifts200Response](docs/Model/ListStaffShifts200Response.md)
- [ListStays200Response](docs/Model/ListStays200Response.md)
- [ListSuppliers200Response](docs/Model/ListSuppliers200Response.md)
- [ListTrainingModules200Response](docs/Model/ListTrainingModules200Response.md)
- [ListUnitTypes200Response](docs/Model/ListUnitTypes200Response.md)
- [MaintenanceRequest](docs/Model/MaintenanceRequest.md)
- [MaintenanceRequestAllOfWorkLog](docs/Model/MaintenanceRequestAllOfWorkLog.md)
- [MarkReservationNoShowRequest](docs/Model/MarkReservationNoShowRequest.md)
- [MenuItem](docs/Model/MenuItem.md)
- [MergeGuestsRequest](docs/Model/MergeGuestsRequest.md)
- [Model0](docs/Model/Model0.md)
- [Money](docs/Model/Money.md)
- [PaginatedResponse](docs/Model/PaginatedResponse.md)
- [PaginatedResponseAllOfLinks](docs/Model/PaginatedResponseAllOfLinks.md)
- [PaginatedResponseAllOfPagination](docs/Model/PaginatedResponseAllOfPagination.md)
- [Payment](docs/Model/Payment.md)
- [PaymentAllOfCardDetails](docs/Model/PaymentAllOfCardDetails.md)
- [PaymentAllOfRefunds](docs/Model/PaymentAllOfRefunds.md)
- [PricingModel](docs/Model/PricingModel.md)
- [PricingModelAllOfBaseRates](docs/Model/PricingModelAllOfBaseRates.md)
- [PricingModelAllOfFees](docs/Model/PricingModelAllOfFees.md)
- [PricingModelAllOfLengthOfStayDiscounts](docs/Model/PricingModelAllOfLengthOfStayDiscounts.md)
- [PricingModelAllOfOccupancyPricing](docs/Model/PricingModelAllOfOccupancyPricing.md)
- [PricingModelAllOfSeasonalAdjustments](docs/Model/PricingModelAllOfSeasonalAdjustments.md)
- [PricingModelAllOfTaxes](docs/Model/PricingModelAllOfTaxes.md)
- [ProblemDetails](docs/Model/ProblemDetails.md)
- [ProblemDetailsAllOfErrors](docs/Model/ProblemDetailsAllOfErrors.md)
- [Property](docs/Model/Property.md)
- [PropertyAllOfLinks](docs/Model/PropertyAllOfLinks.md)
- [PropertyCertification](docs/Model/PropertyCertification.md)
- [PropertyPolicies](docs/Model/PropertyPolicies.md)
- [PropertyPoliciesAllOfChildPolicy](docs/Model/PropertyPoliciesAllOfChildPolicy.md)
- [PropertyPoliciesAllOfPetPolicy](docs/Model/PropertyPoliciesAllOfPetPolicy.md)
- [PurchaseOrder](docs/Model/PurchaseOrder.md)
- [PurchaseOrderAllOfItems](docs/Model/PurchaseOrderAllOfItems.md)
- [PurchaseOrderAllOfSubtotal](docs/Model/PurchaseOrderAllOfSubtotal.md)
- [PurchaseOrderAllOfTax](docs/Model/PurchaseOrderAllOfTax.md)
- [PurchaseOrderAllOfTotal](docs/Model/PurchaseOrderAllOfTotal.md)
- [RateStrategy](docs/Model/RateStrategy.md)
- [RateStrategyAllOfLinks](docs/Model/RateStrategyAllOfLinks.md)
- [ReceiveFBInventoryRequest](docs/Model/ReceiveFBInventoryRequest.md)
- [ReceivePurchaseOrderRequest](docs/Model/ReceivePurchaseOrderRequest.md)
- [ReceivePurchaseOrderRequestReceivedItemsInner](docs/Model/ReceivePurchaseOrderRequestReceivedItemsInner.md)
- [RefundPaymentRequest](docs/Model/RefundPaymentRequest.md)
- [Reservation](docs/Model/Reservation.md)
- [ReservationAllOfGuestCount](docs/Model/ReservationAllOfGuestCount.md)
- [RespondToFeedbackRequest](docs/Model/RespondToFeedbackRequest.md)
- [RevenueReport](docs/Model/RevenueReport.md)
- [RevenueReportAllOfRevenueByCategory](docs/Model/RevenueReportAllOfRevenueByCategory.md)
- [Review](docs/Model/Review.md)
- [ReviewAllOfResponse](docs/Model/ReviewAllOfResponse.md)
- [SearchAuditLogsRequest](docs/Model/SearchAuditLogsRequest.md)
- [SearchAvailability200Response](docs/Model/SearchAvailability200Response.md)
- [SearchAvailability200ResponseMetadata](docs/Model/SearchAvailability200ResponseMetadata.md)
- [SearchAvailability200ResponseResultsInner](docs/Model/SearchAvailability200ResponseResultsInner.md)
- [SearchAvailability200ResponseResultsInnerPriceBreakdownInner](docs/Model/SearchAvailability200ResponseResultsInnerPriceBreakdownInner.md)
- [SearchAvailability200ResponseResultsInnerPriceBreakdownInnerTaxesInner](docs/Model/SearchAvailability200ResponseResultsInnerPriceBreakdownInnerTaxesInner.md)
- [SearchAvailabilityRequest](docs/Model/SearchAvailabilityRequest.md)
- [SearchAvailabilityRequestFilters](docs/Model/SearchAvailabilityRequestFilters.md)
- [SearchAvailabilityRequestOccupancy](docs/Model/SearchAvailabilityRequestOccupancy.md)
- [SearchGuestsRequest](docs/Model/SearchGuestsRequest.md)
- [SearchReservations200Response](docs/Model/SearchReservations200Response.md)
- [ServeFBOrderRequest](docs/Model/ServeFBOrderRequest.md)
- [ServiceRequest](docs/Model/ServiceRequest.md)
- [ServiceRequestAllOfGuestFeedback](docs/Model/ServiceRequestAllOfGuestFeedback.md)
- [StaffShift](docs/Model/StaffShift.md)
- [StaffShiftAllOfBreaks](docs/Model/StaffShiftAllOfBreaks.md)
- [Stay](docs/Model/Stay.md)
- [StayAllOfLinks](docs/Model/StayAllOfLinks.md)
- [Supplier](docs/Model/Supplier.md)
- [SupplierAllOfBankDetails](docs/Model/SupplierAllOfBankDetails.md)
- [SupplierPerformance](docs/Model/SupplierPerformance.md)
- [Survey](docs/Model/Survey.md)
- [SurveyAllOfRatings](docs/Model/SurveyAllOfRatings.md)
- [SyncChannel202Response](docs/Model/SyncChannel202Response.md)
- [SyncChannelRequest](docs/Model/SyncChannelRequest.md)
- [SystemMetrics](docs/Model/SystemMetrics.md)
- [SystemMetricsAllOfCache](docs/Model/SystemMetricsAllOfCache.md)
- [SystemMetricsAllOfDatabase](docs/Model/SystemMetricsAllOfDatabase.md)
- [SystemMetricsAllOfRequests](docs/Model/SystemMetricsAllOfRequests.md)
- [TestChannelConnection200Response](docs/Model/TestChannelConnection200Response.md)
- [TestWebhook200Response](docs/Model/TestWebhook200Response.md)
- [TrainingEnrollment](docs/Model/TrainingEnrollment.md)
- [TrainingModule](docs/Model/TrainingModule.md)
- [TrainingModuleAllOfContent](docs/Model/TrainingModuleAllOfContent.md)
- [UnitType](docs/Model/UnitType.md)
- [UnitTypeAllOfBedConfiguration](docs/Model/UnitTypeAllOfBedConfiguration.md)
- [UnitTypeAllOfPhotos](docs/Model/UnitTypeAllOfPhotos.md)
- [UnitTypeAllOfSize](docs/Model/UnitTypeAllOfSize.md)
- [UpdateAvailabilityCalendar200Response](docs/Model/UpdateAvailabilityCalendar200Response.md)
- [UpdateAvailabilityCalendarRequest](docs/Model/UpdateAvailabilityCalendarRequest.md)
- [UpdateAvailabilityCalendarRequestUpdatesInner](docs/Model/UpdateAvailabilityCalendarRequestUpdatesInner.md)
- [VerifyGuest200Response](docs/Model/VerifyGuest200Response.md)
- [VerifyGuestRequest](docs/Model/VerifyGuestRequest.md)
- [VerifyHousekeepingTaskRequest](docs/Model/VerifyHousekeepingTaskRequest.md)
- [WasteFBInventoryRequest](docs/Model/WasteFBInventoryRequest.md)
- [Webhook](docs/Model/Webhook.md)
- [WebhookAllOfRetryPolicy](docs/Model/WebhookAllOfRetryPolicy.md)
- [WebhookDelivery](docs/Model/WebhookDelivery.md)

## Authorization

Authentication schemes defined for the API:
### OAuth2

- **Type**: `OAuth`
- **Flow**: `application`
- **Authorization URL**: ``
- **Scopes**: 
    - **integration:read**: Read access for integrations
    - **integration:write**: Write access for integrations

### OAuth2

- **Type**: `OAuth`
- **Flow**: `accessCode`
- **Authorization URL**: `https://auth.stayos.com/oauth/authorize`
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

### BearerAuth

- **Type**: Bearer authentication (JWT)

### ApiKeyAuth

- **Type**: API key
- **API key parameter name**: X-API-Key
- **Location**: HTTP header


## Tests

To run the tests, use:

```bash
composer install
vendor/bin/phpunit
```

## Author

api-support@noventrix.com

## About this package

This PHP package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `1.0.0`
    - Generator version: `7.18.0`
- Build package: `org.openapitools.codegen.languages.PhpClientCodegen`
