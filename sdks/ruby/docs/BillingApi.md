# OpenapiClient::BillingApi

All URIs are relative to *https://api.stayos.com/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**add_folio_adjustment**](BillingApi.md#add_folio_adjustment) | **POST** /folios/{folioId}/adjustments | Add adjustment to folio |
| [**add_folio_charge**](BillingApi.md#add_folio_charge) | **POST** /folios/{folioId}/charges | Add charge to folio |
| [**add_folio_line_item**](BillingApi.md#add_folio_line_item) | **POST** /folios/{folioId}/line-items | Add line item to folio |
| [**batch_process_payments**](BillingApi.md#batch_process_payments) | **POST** /payments/batch | Batch payment processing |
| [**capture_payment**](BillingApi.md#capture_payment) | **POST** /payments/{paymentId}/capture | Capture payment |
| [**close_folio**](BillingApi.md#close_folio) | **POST** /folios/{folioId}/close | Close folio |
| [**create_folio**](BillingApi.md#create_folio) | **POST** /folios | Create folio |
| [**create_payment**](BillingApi.md#create_payment) | **POST** /payments | Process payment |
| [**dispute_folio**](BillingApi.md#dispute_folio) | **POST** /folios/{folioId}/dispute | Dispute folio |
| [**get_folio**](BillingApi.md#get_folio) | **GET** /folios/{folioId} | Get folio details |
| [**get_folio_pdf**](BillingApi.md#get_folio_pdf) | **GET** /folios/{folioId}/pdf | Download folio PDF |
| [**get_payment**](BillingApi.md#get_payment) | **GET** /payments/{paymentId} | Get payment details |
| [**get_payment_receipt**](BillingApi.md#get_payment_receipt) | **GET** /payments/{paymentId}/receipt | Get payment receipt |
| [**get_revenue_reconciliation**](BillingApi.md#get_revenue_reconciliation) | **GET** /revenue/reconciliation | Get revenue reconciliation |
| [**get_revenue_reports**](BillingApi.md#get_revenue_reports) | **GET** /revenue/reports | Get revenue reports |
| [**list_folios**](BillingApi.md#list_folios) | **GET** /folios | List folios |
| [**list_payments**](BillingApi.md#list_payments) | **GET** /payments | List payments |
| [**refund_payment**](BillingApi.md#refund_payment) | **POST** /payments/{paymentId}/refund | Refund payment |
| [**remove_folio_line_item**](BillingApi.md#remove_folio_line_item) | **DELETE** /folios/{folioId}/line-items/{itemId} | Remove line item from folio |
| [**reopen_folio**](BillingApi.md#reopen_folio) | **POST** /folios/{folioId}/reopen | Reopen folio |


## add_folio_adjustment

> <LineItem> add_folio_adjustment(folio_id, add_folio_adjustment_request)

Add adjustment to folio

Add an adjustment (discount, comp, etc.) to a folio

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::BillingApi.new
folio_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
add_folio_adjustment_request = OpenapiClient::AddFolioAdjustmentRequest.new({amount: OpenapiClient::Money.new({amount: '125.50', currency: 'USD'}), reason: 'reason_example'}) # AddFolioAdjustmentRequest | 

begin
  # Add adjustment to folio
  result = api_instance.add_folio_adjustment(folio_id, add_folio_adjustment_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->add_folio_adjustment: #{e}"
end
```

#### Using the add_folio_adjustment_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<LineItem>, Integer, Hash)> add_folio_adjustment_with_http_info(folio_id, add_folio_adjustment_request)

```ruby
begin
  # Add adjustment to folio
  data, status_code, headers = api_instance.add_folio_adjustment_with_http_info(folio_id, add_folio_adjustment_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <LineItem>
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->add_folio_adjustment_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **folio_id** | **String** |  |  |
| **add_folio_adjustment_request** | [**AddFolioAdjustmentRequest**](AddFolioAdjustmentRequest.md) |  |  |

### Return type

[**LineItem**](LineItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## add_folio_charge

> Object add_folio_charge(folio_id, add_folio_charge_request)

Add charge to folio

Add a new charge to a guest folio for services, amenities, or incidentals

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::BillingApi.new
folio_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
add_folio_charge_request = OpenapiClient::AddFolioChargeRequest.new({amount: OpenapiClient::Money.new({amount: '125.50', currency: 'USD'}), description: 'description_example'}) # AddFolioChargeRequest | 

begin
  # Add charge to folio
  result = api_instance.add_folio_charge(folio_id, add_folio_charge_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->add_folio_charge: #{e}"
end
```

#### Using the add_folio_charge_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> add_folio_charge_with_http_info(folio_id, add_folio_charge_request)

```ruby
begin
  # Add charge to folio
  data, status_code, headers = api_instance.add_folio_charge_with_http_info(folio_id, add_folio_charge_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->add_folio_charge_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **folio_id** | **String** |  |  |
| **add_folio_charge_request** | [**AddFolioChargeRequest**](AddFolioChargeRequest.md) |  |  |

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## add_folio_line_item

> <LineItem> add_folio_line_item(folio_id, line_item)

Add line item to folio

Add a line item to a folio

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::BillingApi.new
folio_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
line_item = OpenapiClient::LineItem.new({line_item_id: 'line_item_id_example', description: 'Room charge - Night 1', category: 'ROOM', amount: OpenapiClient::Model0.new({amount: '125.50', currency: 'USD'})}) # LineItem | 

begin
  # Add line item to folio
  result = api_instance.add_folio_line_item(folio_id, line_item)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->add_folio_line_item: #{e}"
end
```

#### Using the add_folio_line_item_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<LineItem>, Integer, Hash)> add_folio_line_item_with_http_info(folio_id, line_item)

```ruby
begin
  # Add line item to folio
  data, status_code, headers = api_instance.add_folio_line_item_with_http_info(folio_id, line_item)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <LineItem>
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->add_folio_line_item_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **folio_id** | **String** |  |  |
| **line_item** | [**LineItem**](LineItem.md) |  |  |

### Return type

[**LineItem**](LineItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## batch_process_payments

> <BatchProcessPayments200Response> batch_process_payments(batch_process_payments_request)

Batch payment processing

Process multiple payments in a single batch

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::BillingApi.new
batch_process_payments_request = OpenapiClient::BatchProcessPaymentsRequest.new({payments: [OpenapiClient::BatchProcessPaymentsRequestPaymentsInner.new]}) # BatchProcessPaymentsRequest | 

begin
  # Batch payment processing
  result = api_instance.batch_process_payments(batch_process_payments_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->batch_process_payments: #{e}"
end
```

#### Using the batch_process_payments_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<BatchProcessPayments200Response>, Integer, Hash)> batch_process_payments_with_http_info(batch_process_payments_request)

```ruby
begin
  # Batch payment processing
  data, status_code, headers = api_instance.batch_process_payments_with_http_info(batch_process_payments_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <BatchProcessPayments200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->batch_process_payments_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **batch_process_payments_request** | [**BatchProcessPaymentsRequest**](BatchProcessPaymentsRequest.md) |  |  |

### Return type

[**BatchProcessPayments200Response**](BatchProcessPayments200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## capture_payment

> <Payment> capture_payment(payment_id, opts)

Capture payment

Capture a pre-authorized payment

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::BillingApi.new
payment_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
opts = {
  capture_payment_request: OpenapiClient::CapturePaymentRequest.new # CapturePaymentRequest | 
}

begin
  # Capture payment
  result = api_instance.capture_payment(payment_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->capture_payment: #{e}"
end
```

#### Using the capture_payment_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Payment>, Integer, Hash)> capture_payment_with_http_info(payment_id, opts)

```ruby
begin
  # Capture payment
  data, status_code, headers = api_instance.capture_payment_with_http_info(payment_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Payment>
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->capture_payment_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **payment_id** | **String** |  |  |
| **capture_payment_request** | [**CapturePaymentRequest**](CapturePaymentRequest.md) |  | [optional] |

### Return type

[**Payment**](Payment.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## close_folio

> <Folio> close_folio(folio_id)

Close folio

Close a folio after final settlement

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::BillingApi.new
folio_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Close folio
  result = api_instance.close_folio(folio_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->close_folio: #{e}"
end
```

#### Using the close_folio_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Folio>, Integer, Hash)> close_folio_with_http_info(folio_id)

```ruby
begin
  # Close folio
  data, status_code, headers = api_instance.close_folio_with_http_info(folio_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Folio>
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->close_folio_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **folio_id** | **String** |  |  |

### Return type

[**Folio**](Folio.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## create_folio

> Object create_folio(body)

Create folio

Create a new guest folio for billing and charge management during a stay

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::BillingApi.new
body = { ... } # Object | 

begin
  # Create folio
  result = api_instance.create_folio(body)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->create_folio: #{e}"
end
```

#### Using the create_folio_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> create_folio_with_http_info(body)

```ruby
begin
  # Create folio
  data, status_code, headers = api_instance.create_folio_with_http_info(body)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->create_folio_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **body** | **Object** |  |  |

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## create_payment

> Object create_payment(create_payment_request)

Process payment

Process a new payment for a folio using credit card, cash, or other payment methods

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::BillingApi.new
create_payment_request = OpenapiClient::CreatePaymentRequest.new({folio_id: 'folio_id_example', amount: OpenapiClient::Money.new({amount: '125.50', currency: 'USD'}), method: 'CASH'}) # CreatePaymentRequest | 

begin
  # Process payment
  result = api_instance.create_payment(create_payment_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->create_payment: #{e}"
end
```

#### Using the create_payment_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> create_payment_with_http_info(create_payment_request)

```ruby
begin
  # Process payment
  data, status_code, headers = api_instance.create_payment_with_http_info(create_payment_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->create_payment_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_payment_request** | [**CreatePaymentRequest**](CreatePaymentRequest.md) |  |  |

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## dispute_folio

> <Folio> dispute_folio(folio_id, dispute_folio_request)

Dispute folio

Create a dispute for a folio

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::BillingApi.new
folio_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
dispute_folio_request = OpenapiClient::DisputeFolioRequest.new({reason: 'reason_example'}) # DisputeFolioRequest | 

begin
  # Dispute folio
  result = api_instance.dispute_folio(folio_id, dispute_folio_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->dispute_folio: #{e}"
end
```

#### Using the dispute_folio_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Folio>, Integer, Hash)> dispute_folio_with_http_info(folio_id, dispute_folio_request)

```ruby
begin
  # Dispute folio
  data, status_code, headers = api_instance.dispute_folio_with_http_info(folio_id, dispute_folio_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Folio>
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->dispute_folio_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **folio_id** | **String** |  |  |
| **dispute_folio_request** | [**DisputeFolioRequest**](DisputeFolioRequest.md) |  |  |

### Return type

[**Folio**](Folio.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## get_folio

> Object get_folio(folio_id)

Get folio details

Retrieve complete folio details including all charges, payments, adjustments, and current balance

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::BillingApi.new
folio_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Get folio details
  result = api_instance.get_folio(folio_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->get_folio: #{e}"
end
```

#### Using the get_folio_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> get_folio_with_http_info(folio_id)

```ruby
begin
  # Get folio details
  data, status_code, headers = api_instance.get_folio_with_http_info(folio_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->get_folio_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **folio_id** | **String** |  |  |

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## get_folio_pdf

> File get_folio_pdf(folio_id)

Download folio PDF

Download folio as PDF document

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::BillingApi.new
folio_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Download folio PDF
  result = api_instance.get_folio_pdf(folio_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->get_folio_pdf: #{e}"
end
```

#### Using the get_folio_pdf_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(File, Integer, Hash)> get_folio_pdf_with_http_info(folio_id)

```ruby
begin
  # Download folio PDF
  data, status_code, headers = api_instance.get_folio_pdf_with_http_info(folio_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => File
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->get_folio_pdf_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **folio_id** | **String** |  |  |

### Return type

**File**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/pdf, application/problem+json


## get_payment

> Object get_payment(payment_id)

Get payment details

Retrieve complete payment details including amount, method, status, and transaction information

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::BillingApi.new
payment_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Get payment details
  result = api_instance.get_payment(payment_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->get_payment: #{e}"
end
```

#### Using the get_payment_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> get_payment_with_http_info(payment_id)

```ruby
begin
  # Get payment details
  data, status_code, headers = api_instance.get_payment_with_http_info(payment_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->get_payment_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **payment_id** | **String** |  |  |

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## get_payment_receipt

> File get_payment_receipt(payment_id)

Get payment receipt

Retrieve payment receipt

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::BillingApi.new
payment_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Get payment receipt
  result = api_instance.get_payment_receipt(payment_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->get_payment_receipt: #{e}"
end
```

#### Using the get_payment_receipt_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(File, Integer, Hash)> get_payment_receipt_with_http_info(payment_id)

```ruby
begin
  # Get payment receipt
  data, status_code, headers = api_instance.get_payment_receipt_with_http_info(payment_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => File
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->get_payment_receipt_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **payment_id** | **String** |  |  |

### Return type

**File**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/pdf, application/problem+json


## get_revenue_reconciliation

> <GetRevenueReconciliation200Response> get_revenue_reconciliation(date, opts)

Get revenue reconciliation

Retrieve revenue reconciliation data

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::BillingApi.new
date = Date.parse('2013-10-20') # Date | 
opts = {
  property_id: '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
}

begin
  # Get revenue reconciliation
  result = api_instance.get_revenue_reconciliation(date, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->get_revenue_reconciliation: #{e}"
end
```

#### Using the get_revenue_reconciliation_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetRevenueReconciliation200Response>, Integer, Hash)> get_revenue_reconciliation_with_http_info(date, opts)

```ruby
begin
  # Get revenue reconciliation
  data, status_code, headers = api_instance.get_revenue_reconciliation_with_http_info(date, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetRevenueReconciliation200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->get_revenue_reconciliation_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **date** | **Date** |  |  |
| **property_id** | **String** |  | [optional] |

### Return type

[**GetRevenueReconciliation200Response**](GetRevenueReconciliation200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## get_revenue_reports

> <RevenueReport> get_revenue_reports(start_date, end_date, opts)

Get revenue reports

Retrieve revenue reports with various breakdowns

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::BillingApi.new
start_date = Date.parse('2013-10-20') # Date | 
end_date = Date.parse('2013-10-20') # Date | 
opts = {
  property_id: '38400000-8cf0-11bd-b23e-10b96e4ef00d', # String | 
  group_by: 'DAY' # String | 
}

begin
  # Get revenue reports
  result = api_instance.get_revenue_reports(start_date, end_date, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->get_revenue_reports: #{e}"
end
```

#### Using the get_revenue_reports_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<RevenueReport>, Integer, Hash)> get_revenue_reports_with_http_info(start_date, end_date, opts)

```ruby
begin
  # Get revenue reports
  data, status_code, headers = api_instance.get_revenue_reports_with_http_info(start_date, end_date, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <RevenueReport>
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->get_revenue_reports_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **start_date** | **Date** |  |  |
| **end_date** | **Date** |  |  |
| **property_id** | **String** |  | [optional] |
| **group_by** | **String** |  | [optional] |

### Return type

[**RevenueReport**](RevenueReport.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## list_folios

> <GetGuestStays200Response> list_folios(opts)

List folios

List all guest folios with filtering by property, guest, status, and date range

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::BillingApi.new
opts = {
  property_id: '38400000-8cf0-11bd-b23e-10b96e4ef00d', # String | 
  guest_id: '38400000-8cf0-11bd-b23e-10b96e4ef00d', # String | 
  status: 'OPEN', # String | 
  page_size: 56, # Integer | Number of items per page (max 100)
  cursor: 'cursor_example' # String | Cursor for pagination (opaque token)
}

begin
  # List folios
  result = api_instance.list_folios(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->list_folios: #{e}"
end
```

#### Using the list_folios_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetGuestStays200Response>, Integer, Hash)> list_folios_with_http_info(opts)

```ruby
begin
  # List folios
  data, status_code, headers = api_instance.list_folios_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetGuestStays200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->list_folios_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **property_id** | **String** |  | [optional] |
| **guest_id** | **String** |  | [optional] |
| **status** | **String** |  | [optional] |
| **page_size** | **Integer** | Number of items per page (max 100) | [optional][default to 20] |
| **cursor** | **String** | Cursor for pagination (opaque token) | [optional] |

### Return type

[**GetGuestStays200Response**](GetGuestStays200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## list_payments

> <ListPayments200Response> list_payments(opts)

List payments

List all payments with filtering options

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::BillingApi.new
opts = {
  folio_id: '38400000-8cf0-11bd-b23e-10b96e4ef00d', # String | 
  status: 'PENDING', # String | 
  page_size: 56, # Integer | Number of items per page (max 100)
  cursor: 'cursor_example' # String | Cursor for pagination (opaque token)
}

begin
  # List payments
  result = api_instance.list_payments(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->list_payments: #{e}"
end
```

#### Using the list_payments_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListPayments200Response>, Integer, Hash)> list_payments_with_http_info(opts)

```ruby
begin
  # List payments
  data, status_code, headers = api_instance.list_payments_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListPayments200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->list_payments_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **folio_id** | **String** |  | [optional] |
| **status** | **String** |  | [optional] |
| **page_size** | **Integer** | Number of items per page (max 100) | [optional][default to 20] |
| **cursor** | **String** | Cursor for pagination (opaque token) | [optional] |

### Return type

[**ListPayments200Response**](ListPayments200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## refund_payment

> <Payment> refund_payment(payment_id, refund_payment_request)

Refund payment

Process a refund for a payment

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::BillingApi.new
payment_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
refund_payment_request = OpenapiClient::RefundPaymentRequest.new({amount: OpenapiClient::Money.new({amount: '125.50', currency: 'USD'})}) # RefundPaymentRequest | 

begin
  # Refund payment
  result = api_instance.refund_payment(payment_id, refund_payment_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->refund_payment: #{e}"
end
```

#### Using the refund_payment_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Payment>, Integer, Hash)> refund_payment_with_http_info(payment_id, refund_payment_request)

```ruby
begin
  # Refund payment
  data, status_code, headers = api_instance.refund_payment_with_http_info(payment_id, refund_payment_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Payment>
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->refund_payment_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **payment_id** | **String** |  |  |
| **refund_payment_request** | [**RefundPaymentRequest**](RefundPaymentRequest.md) |  |  |

### Return type

[**Payment**](Payment.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## remove_folio_line_item

> remove_folio_line_item(folio_id, item_id)

Remove line item from folio

Remove a line item from a folio

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::BillingApi.new
folio_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
item_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Remove line item from folio
  api_instance.remove_folio_line_item(folio_id, item_id)
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->remove_folio_line_item: #{e}"
end
```

#### Using the remove_folio_line_item_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> remove_folio_line_item_with_http_info(folio_id, item_id)

```ruby
begin
  # Remove line item from folio
  data, status_code, headers = api_instance.remove_folio_line_item_with_http_info(folio_id, item_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->remove_folio_line_item_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **folio_id** | **String** |  |  |
| **item_id** | **String** |  |  |

### Return type

nil (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/problem+json


## reopen_folio

> <Folio> reopen_folio(folio_id, opts)

Reopen folio

Reopen a closed folio for additional charges

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'

  # Configure OAuth2 access token for authorization: OAuth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::BillingApi.new
folio_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
opts = {
  cancel_service_request_request: OpenapiClient::CancelServiceRequestRequest.new # CancelServiceRequestRequest | 
}

begin
  # Reopen folio
  result = api_instance.reopen_folio(folio_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->reopen_folio: #{e}"
end
```

#### Using the reopen_folio_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Folio>, Integer, Hash)> reopen_folio_with_http_info(folio_id, opts)

```ruby
begin
  # Reopen folio
  data, status_code, headers = api_instance.reopen_folio_with_http_info(folio_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Folio>
rescue OpenapiClient::ApiError => e
  puts "Error when calling BillingApi->reopen_folio_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **folio_id** | **String** |  |  |
| **cancel_service_request_request** | [**CancelServiceRequestRequest**](CancelServiceRequestRequest.md) |  | [optional] |

### Return type

[**Folio**](Folio.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

