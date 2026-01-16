# OpenapiClient::ReservationsApi

All URIs are relative to *https://api.stayos.com/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**add_special_request**](ReservationsApi.md#add_special_request) | **POST** /reservations/{reservationId}/special-requests | Add special request to reservation |
| [**cancel_reservation**](ReservationsApi.md#cancel_reservation) | **POST** /reservations/{reservationId}/cancel | Cancel reservation |
| [**confirm_reservation**](ReservationsApi.md#confirm_reservation) | **POST** /reservations/{reservationId}/confirm | Confirm reservation |
| [**create_reservation**](ReservationsApi.md#create_reservation) | **POST** /reservations | Create reservation |
| [**get_reservation**](ReservationsApi.md#get_reservation) | **GET** /reservations/{reservationId} | Get reservation details |
| [**get_reservation_history**](ReservationsApi.md#get_reservation_history) | **GET** /reservations/{reservationId}/history | Get reservation modification history |
| [**get_reservation_quote**](ReservationsApi.md#get_reservation_quote) | **POST** /reservations/quote | Get pricing quote |
| [**mark_reservation_no_show**](ReservationsApi.md#mark_reservation_no_show) | **POST** /reservations/{reservationId}/no-show | Mark reservation as no-show |
| [**replace_reservation**](ReservationsApi.md#replace_reservation) | **PUT** /reservations/{reservationId} | Replace reservation (full update) |
| [**search_reservations**](ReservationsApi.md#search_reservations) | **GET** /reservations/search | Advanced reservation search |
| [**update_reservation**](ReservationsApi.md#update_reservation) | **PATCH** /reservations/{reservationId} | Update reservation (partial update) |


## add_special_request

> <Reservation> add_special_request(reservation_id, add_special_request_request)

Add special request to reservation

Add a special request or note to an existing reservation

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

api_instance = OpenapiClient::ReservationsApi.new
reservation_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
add_special_request_request = OpenapiClient::AddSpecialRequestRequest.new({request: 'request_example'}) # AddSpecialRequestRequest | 

begin
  # Add special request to reservation
  result = api_instance.add_special_request(reservation_id, add_special_request_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ReservationsApi->add_special_request: #{e}"
end
```

#### Using the add_special_request_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Reservation>, Integer, Hash)> add_special_request_with_http_info(reservation_id, add_special_request_request)

```ruby
begin
  # Add special request to reservation
  data, status_code, headers = api_instance.add_special_request_with_http_info(reservation_id, add_special_request_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Reservation>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ReservationsApi->add_special_request_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **reservation_id** | **String** |  |  |
| **add_special_request_request** | [**AddSpecialRequestRequest**](AddSpecialRequestRequest.md) |  |  |

### Return type

[**Reservation**](Reservation.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## cancel_reservation

> <Reservation> cancel_reservation(reservation_id, cancel_reservation_request)

Cancel reservation

Cancel an existing reservation

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

api_instance = OpenapiClient::ReservationsApi.new
reservation_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
cancel_reservation_request = OpenapiClient::CancelReservationRequest.new # CancelReservationRequest | 

begin
  # Cancel reservation
  result = api_instance.cancel_reservation(reservation_id, cancel_reservation_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ReservationsApi->cancel_reservation: #{e}"
end
```

#### Using the cancel_reservation_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Reservation>, Integer, Hash)> cancel_reservation_with_http_info(reservation_id, cancel_reservation_request)

```ruby
begin
  # Cancel reservation
  data, status_code, headers = api_instance.cancel_reservation_with_http_info(reservation_id, cancel_reservation_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Reservation>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ReservationsApi->cancel_reservation_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **reservation_id** | **String** |  |  |
| **cancel_reservation_request** | [**CancelReservationRequest**](CancelReservationRequest.md) |  |  |

### Return type

[**Reservation**](Reservation.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## confirm_reservation

> <Reservation> confirm_reservation(reservation_id)

Confirm reservation

Confirm a pending reservation

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

api_instance = OpenapiClient::ReservationsApi.new
reservation_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Confirm reservation
  result = api_instance.confirm_reservation(reservation_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ReservationsApi->confirm_reservation: #{e}"
end
```

#### Using the confirm_reservation_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Reservation>, Integer, Hash)> confirm_reservation_with_http_info(reservation_id)

```ruby
begin
  # Confirm reservation
  data, status_code, headers = api_instance.confirm_reservation_with_http_info(reservation_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Reservation>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ReservationsApi->confirm_reservation_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **reservation_id** | **String** |  |  |

### Return type

[**Reservation**](Reservation.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## create_reservation

> <Reservation> create_reservation(reservation)

Create reservation

Create a new reservation

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

api_instance = OpenapiClient::ReservationsApi.new
reservation = OpenapiClient::Reservation.new({reservation_id: 'reservation_id_example', property_id: 'property_id_example', guest_id: 'guest_id_example', check_in_date: Date.parse('2025-12-25'), check_out_date: Date.parse('2025-12-28'), status: 'PENDING'}) # Reservation | 

begin
  # Create reservation
  result = api_instance.create_reservation(reservation)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ReservationsApi->create_reservation: #{e}"
end
```

#### Using the create_reservation_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Reservation>, Integer, Hash)> create_reservation_with_http_info(reservation)

```ruby
begin
  # Create reservation
  data, status_code, headers = api_instance.create_reservation_with_http_info(reservation)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Reservation>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ReservationsApi->create_reservation_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **reservation** | [**Reservation**](Reservation.md) |  |  |

### Return type

[**Reservation**](Reservation.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## get_reservation

> <Reservation> get_reservation(reservation_id)

Get reservation details

Retrieve complete details of a specific reservation including guest information, dates, pricing, and current status

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

api_instance = OpenapiClient::ReservationsApi.new
reservation_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Get reservation details
  result = api_instance.get_reservation(reservation_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ReservationsApi->get_reservation: #{e}"
end
```

#### Using the get_reservation_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Reservation>, Integer, Hash)> get_reservation_with_http_info(reservation_id)

```ruby
begin
  # Get reservation details
  data, status_code, headers = api_instance.get_reservation_with_http_info(reservation_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Reservation>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ReservationsApi->get_reservation_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **reservation_id** | **String** |  |  |

### Return type

[**Reservation**](Reservation.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## get_reservation_history

> <Array<GetReservationHistory200ResponseInner>> get_reservation_history(reservation_id)

Get reservation modification history

Retrieve complete history of changes to a reservation

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

api_instance = OpenapiClient::ReservationsApi.new
reservation_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Get reservation modification history
  result = api_instance.get_reservation_history(reservation_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ReservationsApi->get_reservation_history: #{e}"
end
```

#### Using the get_reservation_history_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<GetReservationHistory200ResponseInner>>, Integer, Hash)> get_reservation_history_with_http_info(reservation_id)

```ruby
begin
  # Get reservation modification history
  data, status_code, headers = api_instance.get_reservation_history_with_http_info(reservation_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<GetReservationHistory200ResponseInner>>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ReservationsApi->get_reservation_history_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **reservation_id** | **String** |  |  |

### Return type

[**Array&lt;GetReservationHistory200ResponseInner&gt;**](GetReservationHistory200ResponseInner.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## get_reservation_quote

> <GetReservationQuote200Response> get_reservation_quote(get_reservation_quote_request)

Get pricing quote

Calculate pricing for a potential reservation without creating it

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

api_instance = OpenapiClient::ReservationsApi.new
get_reservation_quote_request = OpenapiClient::GetReservationQuoteRequest.new({property_id: 'property_id_example', unit_type_id: 'unit_type_id_example', check_in_date: Date.today, check_out_date: Date.today, guest_count: OpenapiClient::GetReservationQuoteRequestGuestCount.new}) # GetReservationQuoteRequest | 

begin
  # Get pricing quote
  result = api_instance.get_reservation_quote(get_reservation_quote_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ReservationsApi->get_reservation_quote: #{e}"
end
```

#### Using the get_reservation_quote_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetReservationQuote200Response>, Integer, Hash)> get_reservation_quote_with_http_info(get_reservation_quote_request)

```ruby
begin
  # Get pricing quote
  data, status_code, headers = api_instance.get_reservation_quote_with_http_info(get_reservation_quote_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetReservationQuote200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ReservationsApi->get_reservation_quote_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **get_reservation_quote_request** | [**GetReservationQuoteRequest**](GetReservationQuoteRequest.md) |  |  |

### Return type

[**GetReservationQuote200Response**](GetReservationQuote200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## mark_reservation_no_show

> <Reservation> mark_reservation_no_show(reservation_id, opts)

Mark reservation as no-show

Mark a reservation as no-show when guest doesn't arrive

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

api_instance = OpenapiClient::ReservationsApi.new
reservation_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
opts = {
  mark_reservation_no_show_request: OpenapiClient::MarkReservationNoShowRequest.new # MarkReservationNoShowRequest | 
}

begin
  # Mark reservation as no-show
  result = api_instance.mark_reservation_no_show(reservation_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ReservationsApi->mark_reservation_no_show: #{e}"
end
```

#### Using the mark_reservation_no_show_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Reservation>, Integer, Hash)> mark_reservation_no_show_with_http_info(reservation_id, opts)

```ruby
begin
  # Mark reservation as no-show
  data, status_code, headers = api_instance.mark_reservation_no_show_with_http_info(reservation_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Reservation>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ReservationsApi->mark_reservation_no_show_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **reservation_id** | **String** |  |  |
| **mark_reservation_no_show_request** | [**MarkReservationNoShowRequest**](MarkReservationNoShowRequest.md) |  | [optional] |

### Return type

[**Reservation**](Reservation.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## replace_reservation

> <Reservation> replace_reservation(reservation_id, reservation, opts)

Replace reservation (full update)

Replace an existing reservation with a complete new representation. All fields must be provided. For partial updates, use PATCH instead.  **Optimistic Locking:** Use `If-Match` header with ETag to prevent conflicts 

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

api_instance = OpenapiClient::ReservationsApi.new
reservation_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
reservation = OpenapiClient::Reservation.new({reservation_id: 'reservation_id_example', property_id: 'property_id_example', guest_id: 'guest_id_example', check_in_date: Date.parse('2025-12-25'), check_out_date: Date.parse('2025-12-28'), status: 'PENDING'}) # Reservation | 
opts = {
  if_match: 'if_match_example' # String | ETag for optimistic locking
}

begin
  # Replace reservation (full update)
  result = api_instance.replace_reservation(reservation_id, reservation, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ReservationsApi->replace_reservation: #{e}"
end
```

#### Using the replace_reservation_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Reservation>, Integer, Hash)> replace_reservation_with_http_info(reservation_id, reservation, opts)

```ruby
begin
  # Replace reservation (full update)
  data, status_code, headers = api_instance.replace_reservation_with_http_info(reservation_id, reservation, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Reservation>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ReservationsApi->replace_reservation_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **reservation_id** | **String** |  |  |
| **reservation** | [**Reservation**](Reservation.md) |  |  |
| **if_match** | **String** | ETag for optimistic locking | [optional] |

### Return type

[**Reservation**](Reservation.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## search_reservations

> <SearchReservations200Response> search_reservations(opts)

Advanced reservation search

Search reservations with advanced filters

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

api_instance = OpenapiClient::ReservationsApi.new
opts = {
  property_id: '38400000-8cf0-11bd-b23e-10b96e4ef00d', # String | 
  guest_name: 'guest_name_example', # String | 
  confirmation_number: 'confirmation_number_example', # String | 
  status: 'PENDING', # String | 
  check_in_date: Date.parse('2013-10-20'), # Date | 
  check_out_date: Date.parse('2013-10-20'), # Date | 
  page_size: 56, # Integer | Number of items per page (max 100)
  cursor: 'cursor_example' # String | Cursor for pagination (opaque token)
}

begin
  # Advanced reservation search
  result = api_instance.search_reservations(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ReservationsApi->search_reservations: #{e}"
end
```

#### Using the search_reservations_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<SearchReservations200Response>, Integer, Hash)> search_reservations_with_http_info(opts)

```ruby
begin
  # Advanced reservation search
  data, status_code, headers = api_instance.search_reservations_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SearchReservations200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ReservationsApi->search_reservations_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **property_id** | **String** |  | [optional] |
| **guest_name** | **String** |  | [optional] |
| **confirmation_number** | **String** |  | [optional] |
| **status** | **String** |  | [optional] |
| **check_in_date** | **Date** |  | [optional] |
| **check_out_date** | **Date** |  | [optional] |
| **page_size** | **Integer** | Number of items per page (max 100) | [optional][default to 20] |
| **cursor** | **String** | Cursor for pagination (opaque token) | [optional] |

### Return type

[**SearchReservations200Response**](SearchReservations200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## update_reservation

> <Reservation> update_reservation(reservation_id, body, opts)

Update reservation (partial update)

Partially update a reservation. Only provided fields will be updated. This is the recommended method for most updates.  **Optimistic Locking:** Use `If-Match` header with ETag to prevent conflicts  **Common use cases:** - Update special requests - Change guest count - Modify arrival time - Add notes 

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

api_instance = OpenapiClient::ReservationsApi.new
reservation_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
body = { ... } # Object | 
opts = {
  if_match: 'if_match_example' # String | ETag for optimistic locking
}

begin
  # Update reservation (partial update)
  result = api_instance.update_reservation(reservation_id, body, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ReservationsApi->update_reservation: #{e}"
end
```

#### Using the update_reservation_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Reservation>, Integer, Hash)> update_reservation_with_http_info(reservation_id, body, opts)

```ruby
begin
  # Update reservation (partial update)
  data, status_code, headers = api_instance.update_reservation_with_http_info(reservation_id, body, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Reservation>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ReservationsApi->update_reservation_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **reservation_id** | **String** |  |  |
| **body** | **Object** |  |  |
| **if_match** | **String** | ETag for optimistic locking | [optional] |

### Return type

[**Reservation**](Reservation.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

