#!/bin/bash

# StayOS Authentication Testing Script
# Tests all authentication and authorization scenarios

set -e

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
API_URL="${API_URL:-http://localhost:8080}"
VERBOSE="${VERBOSE:-false}"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🔐 StayOS Authentication Testing"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "API URL: $API_URL"
echo ""

# Test counter
TESTS_PASSED=0
TESTS_FAILED=0

# Test function
test_case() {
    local name="$1"
    local expected_status="$2"
    shift 2
    local response=$(curl -s -w "\n%{http_code}" "$@")
    local body=$(echo "$response" | head -n -1)
    local status=$(echo "$response" | tail -n 1)
    
    if [ "$status" = "$expected_status" ]; then
        echo -e "${GREEN}✅ PASS${NC}: $name (HTTP $status)"
        ((TESTS_PASSED++))
        if [ "$VERBOSE" = "true" ]; then
            echo "   Response: $body" | head -c 100
            echo ""
        fi
    else
        echo -e "${RED}❌ FAIL${NC}: $name (Expected $expected_status, got $status)"
        ((TESTS_FAILED++))
        echo "   Response: $body"
    fi
}

# Test 1: Health check (no auth required)
echo "📋 Test 1: Health Check (No Auth Required)"
test_case "Health check endpoint" "200" \
    "$API_URL/health"
echo ""

# Test 2: Get test users list
echo "📋 Test 2: Get Test Users List"
test_case "Test users endpoint" "200" \
    "$API_URL/v1/auth/test-users"
echo ""

# Test 3: Access protected endpoint without auth (should fail)
echo "📋 Test 3: Access Protected Endpoint Without Auth"
test_case "Properties without auth" "401" \
    "$API_URL/v1/properties"
echo ""

# Test 4: Access with invalid token (should fail)
echo "📋 Test 4: Access With Invalid Token"
test_case "Properties with invalid token" "401" \
    -H "Authorization: Bearer invalid_token_12345" \
    "$API_URL/v1/properties"
echo ""

# Test 5: Get token with admin credentials
echo "📋 Test 5: Get Admin Token"
ADMIN_TOKEN_RESPONSE=$(curl -s -X POST "$API_URL/v1/auth/token" \
    -H "Content-Type: application/json" \
    -d '{
        "grant_type": "password",
        "username": "admin@stayos.com",
        "password": "admin123"
    }')

ADMIN_TOKEN=$(echo "$ADMIN_TOKEN_RESPONSE" | grep -o '"access_token":"[^"]*' | cut -d'"' -f4)

if [ -n "$ADMIN_TOKEN" ]; then
    echo -e "${GREEN}✅ PASS${NC}: Got admin token"
    ((TESTS_PASSED++))
    if [ "$VERBOSE" = "true" ]; then
        echo "   Token: ${ADMIN_TOKEN:0:50}..."
    fi
else
    echo -e "${RED}❌ FAIL${NC}: Failed to get admin token"
    ((TESTS_FAILED++))
    echo "   Response: $ADMIN_TOKEN_RESPONSE"
fi
echo ""

# Test 6: Access protected endpoint with valid admin token
echo "📋 Test 6: Access Protected Endpoint With Valid Admin Token"
if [ -n "$ADMIN_TOKEN" ]; then
    test_case "Properties with admin token" "200" \
        -H "Authorization: Bearer $ADMIN_TOKEN" \
        "$API_URL/v1/properties"
else
    echo -e "${YELLOW}⚠️  SKIP${NC}: No admin token available"
fi
echo ""

# Test 7: Get user info with admin token
echo "📋 Test 7: Get User Info (/auth/me)"
if [ -n "$ADMIN_TOKEN" ]; then
    test_case "User info endpoint" "200" \
        -H "Authorization: Bearer $ADMIN_TOKEN" \
        "$API_URL/v1/auth/me"
else
    echo -e "${YELLOW}⚠️  SKIP${NC}: No admin token available"
fi
echo ""

# Test 8: Get token with readonly credentials
echo "📋 Test 8: Get Readonly Token"
READONLY_TOKEN_RESPONSE=$(curl -s -X POST "$API_URL/v1/auth/token" \
    -H "Content-Type: application/json" \
    -d '{
        "grant_type": "password",
        "username": "readonly@stayos.com",
        "password": "readonly123"
    }')

READONLY_TOKEN=$(echo "$READONLY_TOKEN_RESPONSE" | grep -o '"access_token":"[^"]*' | cut -d'"' -f4)

if [ -n "$READONLY_TOKEN" ]; then
    echo -e "${GREEN}✅ PASS${NC}: Got readonly token"
    ((TESTS_PASSED++))
else
    echo -e "${RED}❌ FAIL${NC}: Failed to get readonly token"
    ((TESTS_FAILED++))
fi
echo ""

# Test 9: Readonly user can read properties
echo "📋 Test 9: Readonly User Can Read Properties"
if [ -n "$READONLY_TOKEN" ]; then
    test_case "Readonly access to properties" "200" \
        -H "Authorization: Bearer $READONLY_TOKEN" \
        "$API_URL/v1/properties"
else
    echo -e "${YELLOW}⚠️  SKIP${NC}: No readonly token available"
fi
echo ""

# Test 10: Get manager token
echo "📋 Test 10: Get Manager Token"
MANAGER_TOKEN_RESPONSE=$(curl -s -X POST "$API_URL/v1/auth/token" \
    -H "Content-Type: application/json" \
    -d '{
        "grant_type": "password",
        "username": "manager@stayos.com",
        "password": "manager123"
    }')

MANAGER_TOKEN=$(echo "$MANAGER_TOKEN_RESPONSE" | grep -o '"access_token":"[^"]*' | cut -d'"' -f4)

if [ -n "$MANAGER_TOKEN" ]; then
    echo -e "${GREEN}✅ PASS${NC}: Got manager token"
    ((TESTS_PASSED++))
else
    echo -e "${RED}❌ FAIL${NC}: Failed to get manager token"
    ((TESTS_FAILED++))
fi
echo ""

# Test 11: Manager can access properties
echo "📋 Test 11: Manager Can Access Properties"
if [ -n "$MANAGER_TOKEN" ]; then
    test_case "Manager access to properties" "200" \
        -H "Authorization: Bearer $MANAGER_TOKEN" \
        "$API_URL/v1/properties"
else
    echo -e "${YELLOW}⚠️  SKIP${NC}: No manager token available"
fi
echo ""

# Summary
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 Test Summary"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo -e "${GREEN}✅ Passed: $TESTS_PASSED${NC}"
echo -e "${RED}❌ Failed: $TESTS_FAILED${NC}"
echo ""

TOTAL=$((TESTS_PASSED + TESTS_FAILED))
if [ $TOTAL -gt 0 ]; then
    PERCENTAGE=$((TESTS_PASSED * 100 / TOTAL))
    echo "Success Rate: $PERCENTAGE%"
fi
echo ""

if [ $TESTS_FAILED -eq 0 ]; then
    echo -e "${GREEN}🎉 All tests passed!${NC}"
    exit 0
else
    echo -e "${RED}⚠️  Some tests failed${NC}"
    exit 1
fi

