# StayOS Backend API

Node.js/TypeScript backend implementation for the StayOS Property Management System.

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- PostgreSQL >= 15
- npm >= 9.0.0

### Installation

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Edit .env with your database credentials
nano .env
```

### Database Setup

```bash
# Create database
createdb stayos_dev

# Run migrations (from project root)
psql -d stayos_dev -f ../docs/database/schema_shared.sql
psql -d stayos_dev -f ../docs/database/schema_property_management.sql
```

### Running the Server

```bash
# Development mode (with hot reload)
npm run dev

# Production build
npm run build
npm start
```

## 📋 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm test` - Run tests
- `npm run lint` - Lint code
- `npm run format` - Format code with Prettier

## 🔌 API Endpoints

### Health Check
```
GET /health
```

### Properties
```
GET /v1/properties          - List all properties
GET /v1/properties/:id      - Get property by ID
```

## 🌍 Environment Variables

See `.env.example` for all available configuration options.

Key variables:
- `PORT` - Server port (default: 8080)
- `DATABASE_URL` - PostgreSQL connection string
- `NODE_ENV` - Environment (development/production)
- `JWT_SECRET` - Secret for JWT tokens

## 📚 Project Structure

```
backend/
├── src/
│   ├── config/          # Configuration files
│   ├── routes/          # API routes
│   ├── entities/        # TypeORM entities
│   ├── services/        # Business logic
│   ├── middleware/      # Express middleware
│   ├── app.ts           # Express app setup
│   └── index.ts         # Server entry point
├── tests/               # Test files
├── dist/                # Compiled output
└── package.json
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run with coverage
npm test -- --coverage
```

## 📖 Documentation

- [API Documentation](http://localhost:3000) - Swagger UI
- [OpenAPI Spec](../docs/api/openapi.yaml)
- [Database Schema](../docs/database/)

## 🔐 Authentication

The API uses OAuth 2.0 with JWT tokens. See the main project documentation for authentication setup.

## 🐛 Debugging

Enable debug logging:
```bash
LOG_LEVEL=debug npm run dev
```

## 📝 License

MIT

