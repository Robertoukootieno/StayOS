# 🚀 StayOS API - Quick Start Guide

## Server Information

- **Base URL:** `http://localhost:3000`
- **API Version:** `v1`
- **API Prefix:** `/v1`
- **Status:** ✅ Running (without database)

---

## 🔐 Authentication

### 1. Get an Access Token

```bash
curl -X POST http://localhost:3000/v1/auth/token \
  -H "Content-Type: application/json" \
  -d '{
    "grant_type": "password",
    "username": "admin@stayos.com",
    "password": "admin123"
  }'
```

**Response:**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 86400,
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "scope": "admin:all read:properties write:properties ..."
}
```

### 2. Use the Token

Include the token in the `Authorization` header:

```bash
curl http://localhost:3000/v1/auth/me \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

## 👥 Test Users

| Username | Password | Role | Access Level |
|----------|----------|------|--------------|
| admin@stayos.com | admin123 | Admin | Full access to all resources |
| manager@stayos.com | manager123 | Manager | Read/write for most resources |
| readonly@stayos.com | readonly123 | Viewer | Read-only access |

---

## 📡 Available Endpoints

### Authentication Endpoints

#### POST /v1/auth/token
Generate a new access token

**Request:**
```json
{
  "grant_type": "password",
  "username": "admin@stayos.com",
  "password": "admin123"
}
```

#### GET /v1/auth/me
Get current authenticated user information

**Headers:** `Authorization: Bearer <token>`

**Response:**
```json
{
  "user": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "email": "admin@stayos.com",
    "scopes": ["admin:all", "read:properties", ...],
    "role": "admin"
  }
}
```

#### GET /v1/auth/test-users
List available test users (development only)

---

### Health Check

#### GET /health
Check API server status

**Response:**
```json
{
  "status": "ok",
  "service": "StayOS API",
  "version": "1.0.0",
  "timestamp": "2026-01-16T21:14:25.125Z"
}
```

---

## 🔑 Authorization Scopes

| Scope | Description |
|-------|-------------|
| `admin:all` | Full administrative access (bypasses all checks) |
| `read:properties` | View properties |
| `write:properties` | Create/update properties |
| `read:reservations` | View reservations |
| `write:reservations` | Create/update reservations |
| `read:guests` | View guest information |
| `write:guests` | Create/update guest information |
| `read:billing` | View billing information |
| `write:billing` | Create/update billing information |

---

## 🛠️ Common Operations

### Save Your Token
```bash
export TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

### Make Authenticated Requests
```bash
curl http://localhost:3000/v1/auth/me \
  -H "Authorization: Bearer $TOKEN"
```

### Pretty Print JSON Responses
```bash
curl http://localhost:3000/v1/auth/me \
  -H "Authorization: Bearer $TOKEN" | jq .
```

---

## ⚠️ Error Responses

All errors follow RFC 7807 Problem Details format:

```json
{
  "type": "https://stayos.com/errors/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "No authorization header provided",
  "instance": "/me"
}
```

### Common Error Codes

| Status | Title | Cause |
|--------|-------|-------|
| 401 | Unauthorized | Missing or invalid token |
| 403 | Forbidden | Insufficient permissions |
| 404 | Not Found | Resource doesn't exist |
| 500 | Internal Server Error | Server error |

---

## 🧪 Testing

### Quick Test Script
```bash
# 1. Get token
TOKEN=$(curl -s -X POST http://localhost:3000/v1/auth/token \
  -H "Content-Type: application/json" \
  -d '{"grant_type":"password","username":"admin@stayos.com","password":"admin123"}' \
  | jq -r '.access_token')

# 2. Get user info
curl http://localhost:3000/v1/auth/me \
  -H "Authorization: Bearer $TOKEN" | jq .

# 3. Check health
curl http://localhost:3000/health | jq .
```

### Run Full Test Suite
```bash
./scripts/test-auth.sh
```

---

## 📚 Additional Resources

- **Full Testing Guide:** [docs/AUTH_TESTING_GUIDE.md](AUTH_TESTING_GUIDE.md)
- **Test Results:** [docs/AUTH_TEST_RESULTS.md](AUTH_TEST_RESULTS.md)
- **Project README:** [../README.md](../README.md)

---

## 🚦 Server Status

**Current Status:** ✅ Running on http://localhost:3000

To start the server:
```bash
cd backend
npx ts-node src/index.ts
```

To stop the server:
```bash
pkill -f "ts-node"
```

---

**Happy Testing!** 🎉

