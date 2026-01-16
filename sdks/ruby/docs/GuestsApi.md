# OpenapiClient::GuestsApi

All URIs are relative to *https://api.stayos.com/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**add_loyalty_points**](GuestsApi.md#add_loyalty_points) | **POST** /guests/{guestId}/loyalty/points | Add loyalty points |
| [**create_guest**](GuestsApi.md#create_guest) | **POST** /guests | Create guest profile |
| [**delete_guest**](GuestsApi.md#delete_guest) | **DELETE** /guests/{guestId} | Delete guest profile (GDPR) |
| [**get_guest**](GuestsApi.md#get_guest) | **GET** /guests/{guestId} | Get guest profile |
| [**get_guest_loyalty**](GuestsApi.md#get_guest_loyalty) | **GET** /guests/{guestId}/loyalty | Get guest loyalty status |
| [**get_guest_stays**](GuestsApi.md#get_guest_stays) | **GET** /guests/{guestId}/stays | Get guest stay history |
| [**list_guests**](GuestsApi.md#list_guests) | **GET** /guests | List guest profiles |
| [**merge_guests**](GuestsApi.md#merge_guests) | **POST** /guests/merge | Merge duplicate guest profiles |
| [**replace_guest**](GuestsApi.md#replace_guest) | **PUT** /guests/{guestId} | Replace guest profile (full update) |
| [**replace_guest_preferences**](GuestsApi.md#replace_guest_preferences) | **PUT** /guests/{guestId}/preferences | Replace guest preferences (full update) |
| [**search_guests**](GuestsApi.md#search_guests) | **POST** /guests/search | Search guests |
| [**update_guest**](GuestsApi.md#update_guest) | **PATCH** /guests/{guestId} | Update guest profile (partial update) |
| [**update_guest_preferences**](GuestsApi.md#update_guest_preferences) | **PATCH** /guests/{guestId}/preferences | Update guest preferences (partial update) |
| [**verify_guest**](GuestsApi.md#verify_guest) | **POST** /guests/{guestId}/verify | Verify guest identity |


## add_loyalty_points

> <AddLoyaltyPoints200Response> add_loyalty_points(guest_id, add_loyalty_points_request)

Add loyalty points

Add loyalty points to guest account

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

api_instance = OpenapiClient::GuestsApi.new
guest_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
add_loyalty_points_request = OpenapiClient::AddLoyaltyPointsRequest.new({points: 37, reason: 'reason_example'}) # AddLoyaltyPointsRequest | 

begin
  # Add loyalty points
  result = api_instance.add_loyalty_points(guest_id, add_loyalty_points_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling GuestsApi->add_loyalty_points: #{e}"
end
```

#### Using the add_loyalty_points_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<AddLoyaltyPoints200Response>, Integer, Hash)> add_loyalty_points_with_http_info(guest_id, add_loyalty_points_request)

```ruby
begin
  # Add loyalty points
  data, status_code, headers = api_instance.add_loyalty_points_with_http_info(guest_id, add_loyalty_points_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <AddLoyaltyPoints200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling GuestsApi->add_loyalty_points_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **guest_id** | **String** |  |  |
| **add_loyalty_points_request** | [**AddLoyaltyPointsRequest**](AddLoyaltyPointsRequest.md) |  |  |

### Return type

[**AddLoyaltyPoints200Response**](AddLoyaltyPoints200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## create_guest

> <GuestProfile> create_guest(guest_profile)

Create guest profile

Create a new guest profile

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

api_instance = OpenapiClient::GuestsApi.new
guest_profile = OpenapiClient::GuestProfile.new({guest_id: 'guest_id_example', first_name: 'John', last_name: 'Doe', email: 'john.doe@example.com'}) # GuestProfile | 

begin
  # Create guest profile
  result = api_instance.create_guest(guest_profile)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling GuestsApi->create_guest: #{e}"
end
```

#### Using the create_guest_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GuestProfile>, Integer, Hash)> create_guest_with_http_info(guest_profile)

```ruby
begin
  # Create guest profile
  data, status_code, headers = api_instance.create_guest_with_http_info(guest_profile)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GuestProfile>
rescue OpenapiClient::ApiError => e
  puts "Error when calling GuestsApi->create_guest_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **guest_profile** | [**GuestProfile**](GuestProfile.md) |  |  |

### Return type

[**GuestProfile**](GuestProfile.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## delete_guest

> delete_guest(guest_id)

Delete guest profile (GDPR)

Delete guest profile per GDPR right to be forgotten

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

api_instance = OpenapiClient::GuestsApi.new
guest_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Delete guest profile (GDPR)
  api_instance.delete_guest(guest_id)
rescue OpenapiClient::ApiError => e
  puts "Error when calling GuestsApi->delete_guest: #{e}"
end
```

#### Using the delete_guest_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> delete_guest_with_http_info(guest_id)

```ruby
begin
  # Delete guest profile (GDPR)
  data, status_code, headers = api_instance.delete_guest_with_http_info(guest_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue OpenapiClient::ApiError => e
  puts "Error when calling GuestsApi->delete_guest_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **guest_id** | **String** |  |  |

### Return type

nil (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/problem+json


## get_guest

> <GuestProfile> get_guest(guest_id)

Get guest profile

Retrieve complete guest profile including personal information, contact details, preferences, and loyalty status

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

api_instance = OpenapiClient::GuestsApi.new
guest_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Get guest profile
  result = api_instance.get_guest(guest_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling GuestsApi->get_guest: #{e}"
end
```

#### Using the get_guest_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GuestProfile>, Integer, Hash)> get_guest_with_http_info(guest_id)

```ruby
begin
  # Get guest profile
  data, status_code, headers = api_instance.get_guest_with_http_info(guest_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GuestProfile>
rescue OpenapiClient::ApiError => e
  puts "Error when calling GuestsApi->get_guest_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **guest_id** | **String** |  |  |

### Return type

[**GuestProfile**](GuestProfile.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## get_guest_loyalty

> <GetGuestLoyalty200Response> get_guest_loyalty(guest_id)

Get guest loyalty status

Retrieve loyalty program status and points

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

api_instance = OpenapiClient::GuestsApi.new
guest_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Get guest loyalty status
  result = api_instance.get_guest_loyalty(guest_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling GuestsApi->get_guest_loyalty: #{e}"
end
```

#### Using the get_guest_loyalty_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetGuestLoyalty200Response>, Integer, Hash)> get_guest_loyalty_with_http_info(guest_id)

```ruby
begin
  # Get guest loyalty status
  data, status_code, headers = api_instance.get_guest_loyalty_with_http_info(guest_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetGuestLoyalty200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling GuestsApi->get_guest_loyalty_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **guest_id** | **String** |  |  |

### Return type

[**GetGuestLoyalty200Response**](GetGuestLoyalty200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## get_guest_stays

> <GetGuestStays200Response> get_guest_stays(guest_id, opts)

Get guest stay history

Retrieve complete stay history for a guest

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

api_instance = OpenapiClient::GuestsApi.new
guest_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
opts = {
  page_size: 56, # Integer | Number of items per page (max 100)
  cursor: 'cursor_example' # String | Cursor for pagination (opaque token)
}

begin
  # Get guest stay history
  result = api_instance.get_guest_stays(guest_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling GuestsApi->get_guest_stays: #{e}"
end
```

#### Using the get_guest_stays_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetGuestStays200Response>, Integer, Hash)> get_guest_stays_with_http_info(guest_id, opts)

```ruby
begin
  # Get guest stay history
  data, status_code, headers = api_instance.get_guest_stays_with_http_info(guest_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetGuestStays200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling GuestsApi->get_guest_stays_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **guest_id** | **String** |  |  |
| **page_size** | **Integer** | Number of items per page (max 100) | [optional][default to 20] |
| **cursor** | **String** | Cursor for pagination (opaque token) | [optional] |

### Return type

[**GetGuestStays200Response**](GetGuestStays200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## list_guests

> <ListGuests200Response> list_guests(opts)

List guest profiles

Retrieve list of guest profiles

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

api_instance = OpenapiClient::GuestsApi.new
opts = {
  page_size: 56, # Integer | Number of items per page (max 100)
  cursor: 'cursor_example', # String | Cursor for pagination (opaque token)
  search: 'search_example', # String | Search by name or email
  loyalty_tier: 'NONE' # String | 
}

begin
  # List guest profiles
  result = api_instance.list_guests(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling GuestsApi->list_guests: #{e}"
end
```

#### Using the list_guests_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListGuests200Response>, Integer, Hash)> list_guests_with_http_info(opts)

```ruby
begin
  # List guest profiles
  data, status_code, headers = api_instance.list_guests_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListGuests200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling GuestsApi->list_guests_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page_size** | **Integer** | Number of items per page (max 100) | [optional][default to 20] |
| **cursor** | **String** | Cursor for pagination (opaque token) | [optional] |
| **search** | **String** | Search by name or email | [optional] |
| **loyalty_tier** | **String** |  | [optional] |

### Return type

[**ListGuests200Response**](ListGuests200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## merge_guests

> <GuestProfile> merge_guests(merge_guests_request)

Merge duplicate guest profiles

Merge two guest profiles into one

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

api_instance = OpenapiClient::GuestsApi.new
merge_guests_request = OpenapiClient::MergeGuestsRequest.new({primary_guest_id: 'primary_guest_id_example', secondary_guest_id: 'secondary_guest_id_example'}) # MergeGuestsRequest | 

begin
  # Merge duplicate guest profiles
  result = api_instance.merge_guests(merge_guests_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling GuestsApi->merge_guests: #{e}"
end
```

#### Using the merge_guests_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GuestProfile>, Integer, Hash)> merge_guests_with_http_info(merge_guests_request)

```ruby
begin
  # Merge duplicate guest profiles
  data, status_code, headers = api_instance.merge_guests_with_http_info(merge_guests_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GuestProfile>
rescue OpenapiClient::ApiError => e
  puts "Error when calling GuestsApi->merge_guests_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **merge_guests_request** | [**MergeGuestsRequest**](MergeGuestsRequest.md) |  |  |

### Return type

[**GuestProfile**](GuestProfile.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## replace_guest

> <GuestProfile> replace_guest(guest_id, guest_profile, opts)

Replace guest profile (full update)

Replace an existing guest profile with a complete new representation. All fields must be provided. For partial updates, use PATCH instead.  **Optimistic Locking:** Use `If-Match` header with ETag 

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

api_instance = OpenapiClient::GuestsApi.new
guest_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
guest_profile = OpenapiClient::GuestProfile.new({guest_id: 'guest_id_example', first_name: 'John', last_name: 'Doe', email: 'john.doe@example.com'}) # GuestProfile | 
opts = {
  if_match: 'if_match_example' # String | ETag for optimistic locking
}

begin
  # Replace guest profile (full update)
  result = api_instance.replace_guest(guest_id, guest_profile, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling GuestsApi->replace_guest: #{e}"
end
```

#### Using the replace_guest_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GuestProfile>, Integer, Hash)> replace_guest_with_http_info(guest_id, guest_profile, opts)

```ruby
begin
  # Replace guest profile (full update)
  data, status_code, headers = api_instance.replace_guest_with_http_info(guest_id, guest_profile, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GuestProfile>
rescue OpenapiClient::ApiError => e
  puts "Error when calling GuestsApi->replace_guest_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **guest_id** | **String** |  |  |
| **guest_profile** | [**GuestProfile**](GuestProfile.md) |  |  |
| **if_match** | **String** | ETag for optimistic locking | [optional] |

### Return type

[**GuestProfile**](GuestProfile.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## replace_guest_preferences

> Object replace_guest_preferences(guest_id, body, opts)

Replace guest preferences (full update)

Replace all guest preferences with new settings including room preferences, dietary restrictions, and communication preferences

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

api_instance = OpenapiClient::GuestsApi.new
guest_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
body = { ... } # Object | 
opts = {
  if_match: 'if_match_example' # String | ETag for optimistic locking
}

begin
  # Replace guest preferences (full update)
  result = api_instance.replace_guest_preferences(guest_id, body, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling GuestsApi->replace_guest_preferences: #{e}"
end
```

#### Using the replace_guest_preferences_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> replace_guest_preferences_with_http_info(guest_id, body, opts)

```ruby
begin
  # Replace guest preferences (full update)
  data, status_code, headers = api_instance.replace_guest_preferences_with_http_info(guest_id, body, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling GuestsApi->replace_guest_preferences_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **guest_id** | **String** |  |  |
| **body** | **Object** |  |  |
| **if_match** | **String** | ETag for optimistic locking | [optional] |

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## search_guests

> <Array<GuestProfile>> search_guests(search_guests_request)

Search guests

Advanced guest search with multiple criteria

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

api_instance = OpenapiClient::GuestsApi.new
search_guests_request = OpenapiClient::SearchGuestsRequest.new # SearchGuestsRequest | 

begin
  # Search guests
  result = api_instance.search_guests(search_guests_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling GuestsApi->search_guests: #{e}"
end
```

#### Using the search_guests_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<GuestProfile>>, Integer, Hash)> search_guests_with_http_info(search_guests_request)

```ruby
begin
  # Search guests
  data, status_code, headers = api_instance.search_guests_with_http_info(search_guests_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<GuestProfile>>
rescue OpenapiClient::ApiError => e
  puts "Error when calling GuestsApi->search_guests_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **search_guests_request** | [**SearchGuestsRequest**](SearchGuestsRequest.md) |  |  |

### Return type

[**Array&lt;GuestProfile&gt;**](GuestProfile.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## update_guest

> <GuestProfile> update_guest(guest_id, body, opts)

Update guest profile (partial update)

Partially update a guest profile. Only provided fields will be updated. This is the recommended method for most updates.  **Optimistic Locking:** Use `If-Match` header with ETag  **Common use cases:** - Update email or phone - Change address - Update preferences - Modify loyalty tier 

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

api_instance = OpenapiClient::GuestsApi.new
guest_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
body = { ... } # Object | 
opts = {
  if_match: 'if_match_example' # String | ETag for optimistic locking
}

begin
  # Update guest profile (partial update)
  result = api_instance.update_guest(guest_id, body, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling GuestsApi->update_guest: #{e}"
end
```

#### Using the update_guest_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GuestProfile>, Integer, Hash)> update_guest_with_http_info(guest_id, body, opts)

```ruby
begin
  # Update guest profile (partial update)
  data, status_code, headers = api_instance.update_guest_with_http_info(guest_id, body, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GuestProfile>
rescue OpenapiClient::ApiError => e
  puts "Error when calling GuestsApi->update_guest_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **guest_id** | **String** |  |  |
| **body** | **Object** |  |  |
| **if_match** | **String** | ETag for optimistic locking | [optional] |

### Return type

[**GuestProfile**](GuestProfile.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## update_guest_preferences

> Object update_guest_preferences(guest_id, body, opts)

Update guest preferences (partial update)

Update specific guest preferences. Only provided preferences will be updated.  **Example:** Update room type preference only 

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

api_instance = OpenapiClient::GuestsApi.new
guest_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
body = { ... } # Object | 
opts = {
  if_match: 'if_match_example' # String | ETag for optimistic locking
}

begin
  # Update guest preferences (partial update)
  result = api_instance.update_guest_preferences(guest_id, body, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling GuestsApi->update_guest_preferences: #{e}"
end
```

#### Using the update_guest_preferences_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> update_guest_preferences_with_http_info(guest_id, body, opts)

```ruby
begin
  # Update guest preferences (partial update)
  data, status_code, headers = api_instance.update_guest_preferences_with_http_info(guest_id, body, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling GuestsApi->update_guest_preferences_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **guest_id** | **String** |  |  |
| **body** | **Object** |  |  |
| **if_match** | **String** | ETag for optimistic locking | [optional] |

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## verify_guest

> <VerifyGuest200Response> verify_guest(guest_id, verify_guest_request)

Verify guest identity

Verify guest identity for security purposes

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

api_instance = OpenapiClient::GuestsApi.new
guest_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
verify_guest_request = OpenapiClient::VerifyGuestRequest.new # VerifyGuestRequest | 

begin
  # Verify guest identity
  result = api_instance.verify_guest(guest_id, verify_guest_request)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling GuestsApi->verify_guest: #{e}"
end
```

#### Using the verify_guest_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<VerifyGuest200Response>, Integer, Hash)> verify_guest_with_http_info(guest_id, verify_guest_request)

```ruby
begin
  # Verify guest identity
  data, status_code, headers = api_instance.verify_guest_with_http_info(guest_id, verify_guest_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <VerifyGuest200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling GuestsApi->verify_guest_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **guest_id** | **String** |  |  |
| **verify_guest_request** | [**VerifyGuestRequest**](VerifyGuestRequest.md) |  |  |

### Return type

[**VerifyGuest200Response**](VerifyGuest200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

