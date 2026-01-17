#!/bin/bash

# StayOS API Testing Script
# Tests all implemented endpoints and validates responses

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
BASE_URL="${API_BASE_URL:-http://localhost:3000}"
TOKEN=""
TESTS_PASSED=0
TESTS_FAILED=0

# Helper functions
print_header() {
    echo -e "\n${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"
}

print_test() {
    echo -e "${YELLOW}▶ Test $1: $2${NC}"
}

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
    ((TESTS_PASSED++))
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
    ((TESTS_FAILED++))
}

print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

# Check if jq is installed
if ! command -v jq &> /dev/null; then
    echo -e "${RED}Error: jq is not installed${NC}"
    echo "Install it with: sudo apt install jq"
    exit 1
fi

# Check if curl is installed
if ! command -v curl &> /dev/null; then
    echo -e "${RED}Error: curl is not installed${NC}"
    echo "Install it with: sudo apt install curl"
    exit 1
fi

print_header "🧪 StayOS API Testing Suite"
echo "Base URL: $BASE_URL"
echo "Started: $(date)"
echo ""

# Test 1: Health Check
print_test "1" "Health Check"
RESPONSE=$(curl -s -w "\n%{http_code}" $BASE_URL/health)
HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
BODY=$(echo "$RESPONSE" | sed '$d')

if [ "$HTTP_CODE" = "200" ]; then
    STATUS=$(echo "$BODY" | jq -r '.status')
    if [ "$STATUS" = "ok" ]; then
        print_success "Health check passed (200 OK)"
        echo "$BODY" | jq .
    else
        print_error "Health check returned unexpected status: $STATUS"
    fi
else
    print_error "Health check failed (HTTP $HTTP_CODE)"
fi
echo ""

# Test 2: Get Test Users
print_test "2" "Get Test Users List"
RESPONSE=$(curl -s -w "\n%{http_code}" $BASE_URL/v1/auth/test-users)
HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
BODY=$(echo "$RESPONSE" | sed '$d')

if [ "$HTTP_CODE" = "200" ]; then
    USER_COUNT=$(echo "$BODY" | jq '.users | length')
    if [ "$USER_COUNT" = "3" ]; then
        print_success "Test users endpoint returned 3 users"
        echo "$BODY" | jq '.users[] | {email, role}'
    else
        print_error "Expected 3 users, got $USER_COUNT"
    fi
else
    print_error "Test users endpoint failed (HTTP $HTTP_CODE)"
fi
echo ""

# Test 3: Authentication - Admin User
print_test "3" "Authentication - Admin User"
RESPONSE=$(curl -s -w "\n%{http_code}" -X POST $BASE_URL/v1/auth/token \
  -H "Content-Type: application/json" \
  -d '{
    "grant_type": "password",
    "username": "admin@stayos.com",
    "password": "admin123"
  }')
HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
BODY=$(echo "$RESPONSE" | sed '$d')

if [ "$HTTP_CODE" = "200" ]; then
    TOKEN=$(echo "$BODY" | jq -r '.access_token')
    if [ -n "$TOKEN" ] && [ "$TOKEN" != "null" ]; then
        print_success "Admin authentication successful"
        print_info "Token: ${TOKEN:0:50}..."
        echo "$BODY" | jq '{token_type, expires_in, scope}'
    else
        print_error "No access token in response"
    fi
else
    print_error "Admin authentication failed (HTTP $HTTP_CODE)"
fi
echo ""

# Test 4: Authentication - Invalid Credentials
print_test "4" "Authentication - Invalid Credentials"
RESPONSE=$(curl -s -w "\n%{http_code}" -X POST $BASE_URL/v1/auth/token \
  -H "Content-Type: application/json" \
  -d '{
    "grant_type": "password",
    "username": "invalid@stayos.com",
    "password": "wrongpassword"
  }')
HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
BODY=$(echo "$RESPONSE" | sed '$d')

if [ "$HTTP_CODE" = "401" ]; then
    ERROR=$(echo "$BODY" | jq -r '.error')
    if [ "$ERROR" = "invalid_grant" ]; then
        print_success "Invalid credentials correctly rejected (401)"
    else
        print_error "Expected error 'invalid_grant', got '$ERROR'"
    fi
else
    print_error "Expected HTTP 401, got $HTTP_CODE"
fi
echo ""

# Test 5: Get Current User Info
print_test "5" "Get Current User Info"
if [ -z "$TOKEN" ]; then
    print_error "Skipping - no token available"
else
    RESPONSE=$(curl -s -w "\n%{http_code}" $BASE_URL/v1/auth/me \
      -H "Authorization: Bearer $TOKEN")
    HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
    BODY=$(echo "$RESPONSE" | sed '$d')

    if [ "$HTTP_CODE" = "200" ]; then
        EMAIL=$(echo "$BODY" | jq -r '.user.email')
        if [ "$EMAIL" = "admin@stayos.com" ]; then
            print_success "Current user info retrieved successfully"
            echo "$BODY" | jq '.user | {email, role, scope}'
        else
            print_error "Expected email 'admin@stayos.com', got '$EMAIL'"
        fi
    else
        print_error "Get current user failed (HTTP $HTTP_CODE)"
    fi
fi
echo ""

# Test 6: List Properties
print_test "6" "List Properties (Paginated)"
if [ -z "$TOKEN" ]; then
    print_error "Skipping - no token available"
else
    RESPONSE=$(curl -s -w "\n%{http_code}" "$BASE_URL/v1/properties?page=1&pageSize=5" \
      -H "Authorization: Bearer $TOKEN")
    HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
    BODY=$(echo "$RESPONSE" | sed '$d')

    if [ "$HTTP_CODE" = "200" ]; then
        PROPERTY_COUNT=$(echo "$BODY" | jq '.data | length')
        TOTAL=$(echo "$BODY" | jq -r '.pagination.total')
        print_success "Properties list retrieved ($PROPERTY_COUNT items, $TOTAL total)"
        echo "$BODY" | jq '{data: .data[] | {id, name, classification, status}, pagination}'
    else
        print_error "List properties failed (HTTP $HTTP_CODE)"
    fi
fi
echo ""

# Test 7: Get Single Property
print_test "7" "Get Single Property"
if [ -z "$TOKEN" ]; then
    print_error "Skipping - no token available"
else
    # Get first property ID
    PROPERTY_ID=$(curl -s "$BASE_URL/v1/properties?page=1&pageSize=1" \
      -H "Authorization: Bearer $TOKEN" | jq -r '.data[0].id')
    
    if [ -n "$PROPERTY_ID" ] && [ "$PROPERTY_ID" != "null" ]; then
        print_info "Testing with property ID: $PROPERTY_ID"
        
        RESPONSE=$(curl -s -w "\n%{http_code}" "$BASE_URL/v1/properties/$PROPERTY_ID" \
          -H "Authorization: Bearer $TOKEN")
        HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
        BODY=$(echo "$RESPONSE" | sed '$d')

        if [ "$HTTP_CODE" = "200" ]; then
            NAME=$(echo "$BODY" | jq -r '.data.name')
            print_success "Single property retrieved: $NAME"
            echo "$BODY" | jq '{data: .data | {id, name, classification, star_rating, status}, links}'
        else
            print_error "Get single property failed (HTTP $HTTP_CODE)"
        fi
    else
        print_error "No properties available to test"
    fi
fi
echo ""

# Test 8: Property Not Found
print_test "8" "Property Not Found (404)"
if [ -z "$TOKEN" ]; then
    print_error "Skipping - no token available"
else
    RESPONSE=$(curl -s -w "\n%{http_code}" "$BASE_URL/v1/properties/00000000-0000-0000-0000-000000000000" \
      -H "Authorization: Bearer $TOKEN")
    HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
    BODY=$(echo "$RESPONSE" | sed '$d')

    if [ "$HTTP_CODE" = "404" ]; then
        print_success "404 error correctly returned for non-existent property"
        echo "$BODY" | jq '{type, title, status, detail}'
    else
        print_error "Expected HTTP 404, got $HTTP_CODE"
    fi
fi
echo ""

# Test 9: Unauthorized Access
print_test "9" "Unauthorized Access (No Token)"
RESPONSE=$(curl -s -w "\n%{http_code}" $BASE_URL/v1/properties)
HTTP_CODE=$(echo "$RESPONSE" | tail -n1)

if [ "$HTTP_CODE" = "401" ]; then
    print_success "Unauthorized access correctly rejected (401)"
else
    print_error "Expected HTTP 401, got $HTTP_CODE"
fi
echo ""

# Test 10: Invalid Token
print_test "10" "Invalid Token"
RESPONSE=$(curl -s -w "\n%{http_code}" $BASE_URL/v1/properties \
  -H "Authorization: Bearer invalid_token_here")
HTTP_CODE=$(echo "$RESPONSE" | tail -n1)

if [ "$HTTP_CODE" = "401" ]; then
    print_success "Invalid token correctly rejected (401)"
else
    print_error "Expected HTTP 401, got $HTTP_CODE"
fi
echo ""

# Summary
print_header "📊 Test Summary"
TOTAL_TESTS=$((TESTS_PASSED + TESTS_FAILED))
echo -e "Total Tests: $TOTAL_TESTS"
echo -e "${GREEN}Passed: $TESTS_PASSED${NC}"
echo -e "${RED}Failed: $TESTS_FAILED${NC}"
echo ""

if [ $TESTS_FAILED -eq 0 ]; then
    echo -e "${GREEN}✅ All tests passed!${NC}"
    exit 0
else
    echo -e "${RED}❌ Some tests failed${NC}"
    exit 1
fi

