# Authentication & Authorization Testing Guide

This guide will help you test the StayOS API authentication and authorization system.

## 🔐 Authentication Overview

StayOS uses **OAuth 2.0** with **JWT Bearer tokens** for authentication and authorization.

### Supported Flows

1. **Password Grant** - For testing with username/password
2. **Client Credentials** - For service-to-service authentication
3. **Bearer Token** - Direct JWT token authentication

### Security Scopes

| Scope | Description |
|-------|-------------|
| `admin:all` | Full administrative access (bypasses all checks) |
| `read:properties` | Read property information |
| `write:properties` | Create/update properties |
| `read:reservations` | Read reservations |
| `write:reservations` | Create/update reservations |
| `read:guests` | Read guest profiles |
| `write:guests` | Create/update guest profiles |
| `read:billing` | Read billing information |
| `write:billing` | Process payments and billing |

---

## 🧪 Test Users

The backend includes three test users for development:

| Email | Password | Role | Scopes |
|-------|----------|------|--------|
| `admin@stayos.com` | `admin123` | admin | `admin:all` + all scopes |
| `manager@stayos.com` | `manager123` | manager | read/write for properties, reservations, guests; read for billing |
| `readonly@stayos.com` | `readonly123` | viewer | read-only access to all resources |

---

## 🚀 Quick Start Testing

### Step 1: Start the Backend

```bash
cd backend
npm run dev
```

The server will start on http://localhost:8080

### Step 2: Get Test Users List

```bash
curl http://localhost:8080/v1/auth/test-users
```

### Step 3: Get an Access Token

```bash
curl -X POST http://localhost:8080/v1/auth/token \
  -H "Content-Type: application/json" \
  -d '{
    "grant_type": "password",
    "username": "admin@stayos.com",
    "password": "admin123"
  }'
```

Response:
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 86400,
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "scope": "admin:all read:properties write:properties ..."
}
```

### Step 4: Test Protected Endpoint

```bash
# Save the token
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."

# Test authenticated request
curl http://localhost:8080/v1/properties \
  -H "Authorization: Bearer $TOKEN"
```

---

## 📋 Detailed Testing Scenarios

### Scenario 1: Test Without Authentication (Should Fail)

```bash
curl -v http://localhost:8080/v1/properties
```

**Expected Response:** `401 Unauthorized`
```json
{
  "type": "https://stayos.com/errors/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "detail": "No authorization header provided",
  "instance": "/v1/properties"
}
```

### Scenario 2: Test With Invalid Token (Should Fail)

```bash
curl -v http://localhost:8080/v1/properties \
  -H "Authorization: Bearer invalid_token_here"
```

**Expected Response:** `401 Unauthorized`
```json
{
  "type": "https://stayos.com/errors/invalid-token",
  "title": "Invalid Token",
  "status": 401,
  "detail": "The provided token is invalid"
}
```

### Scenario 3: Test With Valid Token (Should Succeed)

```bash
# 1. Get token
TOKEN=$(curl -s -X POST http://localhost:8080/v1/auth/token \
  -H "Content-Type: application/json" \
  -d '{
    "grant_type": "password",
    "username": "admin@stayos.com",
    "password": "admin123"
  }' | jq -r '.access_token')

# 2. Use token
curl http://localhost:8080/v1/properties \
  -H "Authorization: Bearer $TOKEN"
```

**Expected Response:** `200 OK` with properties list

### Scenario 4: Test Authorization (Insufficient Permissions)

```bash
# 1. Get readonly token
TOKEN=$(curl -s -X POST http://localhost:8080/v1/auth/token \
  -H "Content-Type: application/json" \
  -d '{
    "grant_type": "password",
    "username": "readonly@stayos.com",
    "password": "readonly123"
  }' | jq -r '.access_token')

# 2. Try to create property (should fail - needs write:properties)
curl -X POST http://localhost:8080/v1/properties \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Property"
  }'
```

**Expected Response:** `403 Forbidden`
```json
{
  "type": "https://stayos.com/errors/forbidden",
  "title": "Forbidden",
  "status": 403,
  "detail": "Insufficient permissions. Required scopes: write:properties"
}
```

### Scenario 5: Test User Info Endpoint

```bash
# Get token
TOKEN=$(curl -s -X POST http://localhost:8080/v1/auth/token \
  -H "Content-Type: application/json" \
  -d '{
    "grant_type": "password",
    "username": "manager@stayos.com",
    "password": "manager123"
  }' | jq -r '.access_token')

# Get user info
curl http://localhost:8080/v1/auth/me \
  -H "Authorization: Bearer $TOKEN"
```

**Expected Response:**
```json
{
  "user": {
    "id": "12345678-9abc-def0-1234-56789abcdef0",
    "email": "manager@stayos.com",
    "scopes": ["read:properties", "write:properties", ...],
    "role": "manager"
  }
}
```

---

## 🔧 Testing with Different Tools

### Using cURL (Command Line)

See examples above.

### Using Postman

1. **Create a new request**
2. **Set URL:** `http://localhost:8080/v1/auth/token`
3. **Method:** POST
4. **Body (JSON):**
   ```json
   {
     "grant_type": "password",
     "username": "admin@stayos.com",
     "password": "admin123"
   }
   ```
5. **Send** and copy the `access_token`
6. **Create new request** for `/v1/properties`
7. **Authorization tab:** Select "Bearer Token" and paste the token
8. **Send**

### Using HTTPie

```bash
# Get token
http POST http://localhost:8080/v1/auth/token \
  grant_type=password \
  username=admin@stayos.com \
  password=admin123

# Use token
http GET http://localhost:8080/v1/properties \
  "Authorization: Bearer YOUR_TOKEN_HERE"
```

---

## 📊 Testing Checklist

- [ ] Test without authentication (401)
- [ ] Test with invalid token (401)
- [ ] Test with expired token (401)
- [ ] Test with valid admin token (200)
- [ ] Test with valid manager token (200)
- [ ] Test with valid readonly token (200)
- [ ] Test authorization - readonly trying to write (403)
- [ ] Test authorization - manager accessing admin endpoint (403)
- [ ] Test user info endpoint (/auth/me)
- [ ] Test client credentials flow
- [ ] Test token expiration
- [ ] Test refresh token (if implemented)

---

## 🐛 Troubleshooting

### "No authorization header provided"
- Make sure you're including the `Authorization` header
- Format: `Authorization: Bearer YOUR_TOKEN`

### "Invalid token"
- Check that the token is not expired
- Verify JWT_SECRET matches between token generation and validation
- Ensure token is properly formatted (no extra spaces)

### "Insufficient permissions"
- Check the user's scopes match the required endpoint scopes
- Use admin user for testing all endpoints

### "Token expired"
- Generate a new token
- Tokens expire after 24 hours by default

---

## 📚 Next Steps

After testing authentication:

1. **Set up database** - Run `./scripts/setup-database-simple.sh`
2. **Test with real data** - Properties endpoints will return actual data
3. **Implement more endpoints** - Add POST, PUT, DELETE operations
4. **Add refresh token flow** - Implement token refresh
5. **Add OAuth 2.0 server** - Replace mock with real OAuth server

---

**Ready to test?** Start the backend and try the Quick Start section above!

