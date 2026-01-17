# StayOS API Testing Guide

**Created**: 2026-01-17  
**Purpose**: Comprehensive guide for testing StayOS API endpoints

---

## 🎯 Overview

This guide will help you test all implemented API endpoints to ensure they work correctly before setting up CI/CD.

### **Currently Implemented Endpoints**

✅ **Authentication**
- `POST /v1/auth/token` - Get access token
- `GET /v1/auth/me` - Get current user info
- `GET /v1/auth/test-users` - List test users (dev only)

✅ **Properties**
- `GET /v1/properties` - List all properties (paginated)
- `GET /v1/properties/:id` - Get single property

### **Test Users Available**

| Email | Password | Role | Scopes |
|-------|----------|------|--------|
| admin@stayos.com | admin123 | admin | All scopes |
| manager@stayos.com | manager123 | manager | Read/Write (no admin) |
| readonly@stayos.com | readonly123 | viewer | Read-only |

---

## 🚀 Quick Start Testing

### **Step 1: Verify Server is Running**

```bash
# Check if server is running
curl http://localhost:3000/health

# Expected response:
# {
#   "status": "ok",
#   "service": "StayOS API",
#   "version": "1.0.0",
#   "timestamp": "2026-01-17T..."
# }
```

### **Step 2: Get Access Token**

```bash
# Get token for admin user
curl -X POST http://localhost:3000/v1/auth/token \
  -H "Content-Type: application/json" \
  -d '{
    "grant_type": "password",
    "username": "admin@stayos.com",
    "password": "admin123"
  }'

# Save the access_token from the response
```

### **Step 3: Test Properties Endpoint**

```bash
# Replace YOUR_TOKEN with the access_token from Step 2
curl http://localhost:3000/v1/properties \
  -H "Authorization: Bearer YOUR_TOKEN"
```

---

## 📋 Detailed Test Cases

### **Test 1: Health Check**

**Purpose**: Verify server is running

```bash
curl -i http://localhost:3000/health
```

**Expected Response**:
- Status: `200 OK`
- Body contains: `"status": "ok"`

---

### **Test 2: Get Test Users List**

**Purpose**: Verify test users endpoint

```bash
curl http://localhost:3000/v1/auth/test-users
```

**Expected Response**:
- Status: `200 OK`
- Body contains array of 3 users

---

### **Test 3: Authentication - Admin User**

**Purpose**: Test password grant flow with admin user

```bash
curl -X POST http://localhost:3000/v1/auth/token \
  -H "Content-Type: application/json" \
  -d '{
    "grant_type": "password",
    "username": "admin@stayos.com",
    "password": "admin123"
  }'
```

**Expected Response**:
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 86400,
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "scope": "admin:all read:properties write:properties ..."
}
```

---

### **Test 4: Authentication - Invalid Credentials**

**Purpose**: Test error handling for invalid credentials

```bash
curl -X POST http://localhost:3000/v1/auth/token \
  -H "Content-Type: application/json" \
  -d '{
    "grant_type": "password",
    "username": "invalid@stayos.com",
    "password": "wrongpassword"
  }'
```

**Expected Response**:
- Status: `401 Unauthorized`
- Body: `{"error": "invalid_grant", ...}`

---

### **Test 5: Get Current User Info**

**Purpose**: Test authenticated endpoint

```bash
# Replace YOUR_TOKEN with actual token
curl http://localhost:3000/v1/auth/me \
  -H "Authorization: Bearer YOUR_TOKEN"
```

**Expected Response**:
```json
{
  "user": {
    "sub": "01234567-89ab-cdef-0123-456789abcdef",
    "email": "admin@stayos.com",
    "role": "admin",
    "scope": "admin:all read:properties ..."
  }
}
```

---

### **Test 6: List Properties (Paginated)**

**Purpose**: Test properties list endpoint with pagination

```bash
# Default pagination (page 1, 20 items)
curl http://localhost:3000/v1/properties \
  -H "Authorization: Bearer YOUR_TOKEN"

# Custom pagination
curl "http://localhost:3000/v1/properties?page=1&pageSize=10" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

**Expected Response**:
```json
{
  "data": [
    {
      "id": "uuid",
      "name": "Grand Plaza Hotel",
      "classification": "hotel",
      "star_rating": 5,
      "timezone": "America/New_York",
      "status": "active",
      "created_at": "...",
      "updated_at": "..."
    }
  ],
  "pagination": {
    "page": 1,
    "pageSize": 20,
    "total": 5,
    "totalPages": 1
  },
  "links": {
    "self": "/v1/properties?page=1&pageSize=20",
    "first": "/v1/properties?page=1&pageSize=20",
    "last": "/v1/properties?page=1&pageSize=20"
  }
}
```

---

### **Test 7: Get Single Property**

**Purpose**: Test get property by ID

```bash
# Replace PROPERTY_ID with actual ID from Test 6
curl http://localhost:3000/v1/properties/PROPERTY_ID \
  -H "Authorization: Bearer YOUR_TOKEN"
```

**Expected Response**:
```json
{
  "data": {
    "id": "uuid",
    "name": "Grand Plaza Hotel",
    "classification": "hotel",
    "star_rating": 5,
    "timezone": "America/New_York",
    "status": "active",
    "created_at": "...",
    "updated_at": "..."
  },
  "links": {
    "self": "/v1/properties/uuid",
    "units": "/v1/properties/uuid/units",
    "unitTypes": "/v1/properties/uuid/unit-types"
  }
}
```

---

### **Test 8: Property Not Found**

**Purpose**: Test 404 error handling

```bash
curl http://localhost:3000/v1/properties/00000000-0000-0000-0000-000000000000 \
  -H "Authorization: Bearer YOUR_TOKEN"
```

**Expected Response**:
- Status: `404 Not Found`
- Body: RFC 7807 Problem Details format

---

### **Test 9: Unauthorized Access**

**Purpose**: Test authentication requirement

```bash
# No token provided
curl http://localhost:3000/v1/properties
```

**Expected Response**:
- Status: `401 Unauthorized`
- Body: `{"error": "No token provided"}`

---

### **Test 10: Invalid Token**

**Purpose**: Test invalid token handling

```bash
curl http://localhost:3000/v1/properties \
  -H "Authorization: Bearer invalid_token_here"
```

**Expected Response**:
- Status: `401 Unauthorized`
- Body: `{"error": "Invalid token"}`

---

### **Test 11: Insufficient Permissions**

**Purpose**: Test authorization with read-only user

```bash
# 1. Get token for read-only user
curl -X POST http://localhost:3000/v1/auth/token \
  -H "Content-Type: application/json" \
  -d '{
    "grant_type": "password",
    "username": "readonly@stayos.com",
    "password": "readonly123"
  }'

# 2. Try to access properties (should work - has read:properties)
curl http://localhost:3000/v1/properties \
  -H "Authorization: Bearer READONLY_TOKEN"
```

**Expected Response**:
- Status: `200 OK`
- Should return properties list

---

### **Test 12: Rate Limiting**

**Purpose**: Test rate limiting (100 requests per 15 minutes)

```bash
# Make multiple rapid requests
for i in {1..105}; do
  curl -s http://localhost:3000/health > /dev/null
  echo "Request $i"
done
```

**Expected Behavior**:
- First 100 requests: `200 OK`
- Request 101+: `429 Too Many Requests`

---

## 🧪 Automated Testing Script

Save this as `test-api.sh`:

```bash
#!/bin/bash

echo "🧪 StayOS API Testing Suite"
echo "============================"
echo ""

BASE_URL="http://localhost:3000"
TOKEN=""

# Test 1: Health Check
echo "Test 1: Health Check"
curl -s $BASE_URL/health | jq .
echo ""

# Test 2: Get Test Users
echo "Test 2: Get Test Users"
curl -s $BASE_URL/v1/auth/test-users | jq .
echo ""

# Test 3: Get Admin Token
echo "Test 3: Get Admin Token"
RESPONSE=$(curl -s -X POST $BASE_URL/v1/auth/token \
  -H "Content-Type: application/json" \
  -d '{
    "grant_type": "password",
    "username": "admin@stayos.com",
    "password": "admin123"
  }')
echo $RESPONSE | jq .
TOKEN=$(echo $RESPONSE | jq -r .access_token)
echo "Token: ${TOKEN:0:50}..."
echo ""

# Test 4: Get Current User
echo "Test 4: Get Current User"
curl -s $BASE_URL/v1/auth/me \
  -H "Authorization: Bearer $TOKEN" | jq .
echo ""

# Test 5: List Properties
echo "Test 5: List Properties"
curl -s "$BASE_URL/v1/properties?page=1&pageSize=5" \
  -H "Authorization: Bearer $TOKEN" | jq .
echo ""

# Test 6: Get First Property
echo "Test 6: Get Single Property"
PROPERTY_ID=$(curl -s "$BASE_URL/v1/properties?page=1&pageSize=1" \
  -H "Authorization: Bearer $TOKEN" | jq -r '.data[0].id')
echo "Property ID: $PROPERTY_ID"
curl -s "$BASE_URL/v1/properties/$PROPERTY_ID" \
  -H "Authorization: Bearer $TOKEN" | jq .
echo ""

echo "✅ All tests completed!"
```

Make it executable:
```bash
chmod +x test-api.sh
./test-api.sh
```

---

## 📊 Test Results Checklist

Use this checklist to track your testing:

- [ ] Health check returns 200 OK
- [ ] Test users endpoint returns 3 users
- [ ] Admin authentication succeeds
- [ ] Manager authentication succeeds
- [ ] Read-only authentication succeeds
- [ ] Invalid credentials return 401
- [ ] Get current user info works
- [ ] List properties returns data
- [ ] Pagination works correctly
- [ ] Get single property works
- [ ] Property not found returns 404
- [ ] No token returns 401
- [ ] Invalid token returns 401
- [ ] Authorization checks work
- [ ] Rate limiting works
- [ ] CORS headers present
- [ ] Security headers present (Helmet)
- [ ] Logging works (check backend/logs/app.log)

---

**Next Page**: [Advanced Testing](API_TESTING_GUIDE_ADVANCED.md)

