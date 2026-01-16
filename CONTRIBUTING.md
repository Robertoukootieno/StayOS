# Contributing to StayOS

Thank you for your interest in contributing to StayOS! This document provides guidelines and instructions for contributing.

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- PostgreSQL >= 15
- Git
- npm >= 9.0.0

### Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/yourusername/stayos.git
   cd stayos
   ```

2. **Install Dependencies**
   ```bash
   npm install
   cd backend && npm install
   ```

3. **Set Up Database**
   ```bash
   createdb stayos_dev
   psql -d stayos_dev -f docs/database/schema_shared.sql
   psql -d stayos_dev -f docs/database/schema_property_management.sql
   ```

4. **Configure Environment**
   ```bash
   cd backend
   cp .env.example .env
   # Edit .env with your settings
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

## 📝 Development Workflow

### Branch Naming

- `feature/` - New features (e.g., `feature/add-payment-gateway`)
- `fix/` - Bug fixes (e.g., `fix/reservation-validation`)
- `docs/` - Documentation updates (e.g., `docs/update-api-guide`)
- `refactor/` - Code refactoring (e.g., `refactor/database-queries`)
- `test/` - Test additions/updates (e.g., `test/add-billing-tests`)

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(reservations): add cancellation policy validation

fix(billing): correct tax calculation for multi-currency

docs(api): update authentication examples

test(guests): add unit tests for guest profile service
```

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test -- path/to/test.spec.ts
```

### Writing Tests

- Write tests for all new features
- Maintain test coverage above 80%
- Use descriptive test names
- Follow the AAA pattern (Arrange, Act, Assert)

Example:
```typescript
describe('PropertyService', () => {
  describe('createProperty', () => {
    it('should create a new property with valid data', async () => {
      // Arrange
      const propertyData = { name: 'Test Hotel', ... };
      
      // Act
      const result = await propertyService.create(propertyData);
      
      // Assert
      expect(result).toBeDefined();
      expect(result.name).toBe('Test Hotel');
    });
  });
});
```

## 📐 Code Style

### TypeScript Guidelines

- Use TypeScript strict mode
- Define interfaces for all data structures
- Use meaningful variable and function names
- Add JSDoc comments for public APIs
- Avoid `any` type - use proper types or `unknown`

### Formatting

We use Prettier and ESLint for code formatting:

```bash
# Format code
npm run format

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

## 🔌 API Development

### Adding New Endpoints

1. **Update OpenAPI Specification**
   - Edit `docs/api/openapi.yaml`
   - Add endpoint definition with complete schema
   - Include examples and descriptions

2. **Implement Route Handler**
   - Create route in `backend/src/routes/`
   - Add validation middleware
   - Implement business logic

3. **Add Tests**
   - Write unit tests for business logic
   - Write integration tests for endpoints

4. **Update Documentation**
   - Update relevant README files
   - Add usage examples

### Database Changes

1. **Create Migration**
   ```bash
   npm run migration:create -- AddNewTable
   ```

2. **Write Migration**
   - Add `up` and `down` methods
   - Test both directions

3. **Run Migration**
   ```bash
   npm run migration:run
   ```

4. **Update Schema Documentation**
   - Update SQL files in `docs/database/`
   - Update ERD if needed

## 📚 Documentation

- Update README.md for significant changes
- Add JSDoc comments for public APIs
- Update OpenAPI spec for API changes
- Include examples in documentation
- Keep CHANGELOG.md updated

## 🔍 Code Review Process

1. **Self-Review**
   - Review your own code first
   - Run tests and linting
   - Check for console.log statements
   - Verify documentation is updated

2. **Pull Request**
   - Provide clear description
   - Reference related issues
   - Include screenshots for UI changes
   - Add test results

3. **Review Criteria**
   - Code quality and style
   - Test coverage
   - Documentation completeness
   - Performance considerations
   - Security implications

## 🐛 Reporting Bugs

Use GitHub Issues with the bug template:

- Clear, descriptive title
- Steps to reproduce
- Expected vs actual behavior
- Environment details
- Screenshots if applicable

## 💡 Feature Requests

Use GitHub Issues with the feature template:

- Clear description of the feature
- Use cases and benefits
- Proposed implementation (optional)
- Alternative solutions considered

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🤝 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Assume good intentions

## ❓ Questions?

- Open a GitHub Discussion
- Check existing documentation
- Review closed issues

Thank you for contributing to StayOS! 🎉

