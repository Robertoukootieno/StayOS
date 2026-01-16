#!/bin/bash

# Script to create GitHub issues for StayOS project
# Requires GitHub CLI (gh) to be installed and authenticated

set -e

echo "🚀 Creating GitHub Issues for StayOS Project"
echo "=============================================="
echo ""

# Check if gh CLI is installed
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI (gh) is not installed."
    echo "📥 Install it from: https://cli.github.com/"
    echo ""
    echo "Or install with:"
    echo "  Ubuntu/Debian: sudo apt install gh"
    echo "  macOS: brew install gh"
    echo ""
    exit 1
fi

# Check if authenticated
if ! gh auth status &> /dev/null; then
    echo "❌ Not authenticated with GitHub CLI"
    echo "🔐 Run: gh auth login"
    exit 1
fi

echo "✅ GitHub CLI is installed and authenticated"
echo ""

# Repository
REPO="Robertoukootieno/StayOS"

echo "📋 Creating milestones..."
echo ""

# Create Milestones
gh api repos/$REPO/milestones -f title="v4.1.0 - Core API Implementation" \
    -f description="Implement core API endpoints for properties, reservations, and guests" \
    -f due_on="2026-02-28T23:59:59Z" \
    -f state="open" 2>/dev/null || echo "Milestone v4.1.0 may already exist"

gh api repos/$REPO/milestones -f title="v4.2.0 - Advanced Features" \
    -f description="Add billing, channel management, and reporting features" \
    -f due_on="2026-04-30T23:59:59Z" \
    -f state="open" 2>/dev/null || echo "Milestone v4.2.0 may already exist"

gh api repos/$REPO/milestones -f title="v4.3.0 - Production Ready" \
    -f description="Security hardening, performance optimization, and deployment" \
    -f due_on="2026-06-30T23:59:59Z" \
    -f state="open" 2>/dev/null || echo "Milestone v4.3.0 may already exist"

echo "✅ Milestones created"
echo ""

echo "🏷️  Creating labels..."
echo ""

# Create Labels (if they don't exist)
gh label create "feature" --description "New feature" --color "0E8A16" --force 2>/dev/null || true
gh label create "bug" --description "Bug fix" --color "D73A4A" --force 2>/dev/null || true
gh label create "documentation" --description "Documentation updates" --color "0075CA" --force 2>/dev/null || true
gh label create "enhancement" --description "Enhancement to existing feature" --color "A2EEEF" --force 2>/dev/null || true
gh label create "api" --description "API-related work" --color "D4C5F9" --force 2>/dev/null || true
gh label create "database" --description "Database-related work" --color "C5DEF5" --force 2>/dev/null || true
gh label create "backend" --description "Backend work" --color "FBCA04" --force 2>/dev/null || true
gh label create "frontend" --description "Frontend work" --color "BFD4F2" --force 2>/dev/null || true
gh label create "high-priority" --description "High priority" --color "B60205" --force 2>/dev/null || true
gh label create "devops" --description "DevOps and infrastructure" --color "5319E7" --force 2>/dev/null || true
gh label create "ci-cd" --description "CI/CD pipeline" --color "1D76DB" --force 2>/dev/null || true
gh label create "security" --description "Security-related" --color "EE0701" --force 2>/dev/null || true
gh label create "test" --description "Testing" --color "BFDADC" --force 2>/dev/null || true
gh label create "monitoring" --description "Monitoring and logging" --color "F9D0C4" --force 2>/dev/null || true

echo "✅ Labels created"
echo ""

echo "📝 Creating issues..."
echo ""

# Issue 1: Properties API
gh issue create \
    --title "Implement Properties API Endpoints" \
    --body "Implement all CRUD operations for Properties API

## Tasks
- [ ] GET /v1/properties (list with pagination)
- [ ] GET /v1/properties/{id} (get single property)
- [ ] POST /v1/properties (create property)
- [ ] PUT /v1/properties/{id} (update property)
- [ ] DELETE /v1/properties/{id} (soft delete)
- [ ] Add input validation
- [ ] Add authorization checks
- [ ] Write unit tests
- [ ] Write integration tests
- [ ] Update API documentation

## Acceptance Criteria
- All endpoints return correct status codes
- Pagination works correctly
- Validation errors return proper error messages
- Tests have >80% coverage" \
    --label "feature,api,backend,high-priority" \
    --milestone "v4.1.0 - Core API Implementation"

echo "✅ Issue 1 created: Properties API"

# Issue 2: Reservations API
gh issue create \
    --title "Implement Reservations API Endpoints" \
    --body "Implement reservation management endpoints

## Tasks
- [ ] GET /v1/reservations (list with filters)
- [ ] GET /v1/reservations/{id} (get single reservation)
- [ ] POST /v1/reservations (create reservation)
- [ ] PUT /v1/reservations/{id} (update reservation)
- [ ] POST /v1/reservations/{id}/cancel (cancel reservation)
- [ ] POST /v1/reservations/{id}/confirm (confirm reservation)
- [ ] Add date validation (check-in/check-out)
- [ ] Add availability checking
- [ ] Write tests
- [ ] Update documentation

## Acceptance Criteria
- Cannot create overlapping reservations
- Date validation works correctly
- Status transitions are enforced
- All edge cases are tested" \
    --label "feature,api,backend,high-priority" \
    --milestone "v4.1.0 - Core API Implementation"

echo "✅ Issue 2 created: Reservations API"

# Issue 3: Guests API
gh issue create \
    --title "Implement Guests API Endpoints" \
    --body "Implement guest management endpoints

## Tasks
- [ ] GET /v1/guests (list with search)
- [ ] GET /v1/guests/{id} (get single guest)
- [ ] POST /v1/guests (create guest)
- [ ] PUT /v1/guests/{id} (update guest)
- [ ] DELETE /v1/guests/{id} (soft delete)
- [ ] GET /v1/guests/{id}/reservations (guest history)
- [ ] Add email validation
- [ ] Add phone validation
- [ ] Write tests
- [ ] Update documentation

## Acceptance Criteria
- Email uniqueness is enforced
- Search works on name, email, phone
- Guest history shows all reservations
- Privacy compliance (GDPR)" \
    --label "feature,api,backend,high-priority" \
    --milestone "v4.1.0 - Core API Implementation"

echo "✅ Issue 3 created: Guests API"

# Issue 4: Rooms API
gh issue create \
    --title "Implement Rooms API Endpoints" \
    --body "Implement room management endpoints

## Tasks
- [ ] GET /v1/properties/{propertyId}/rooms (list rooms)
- [ ] GET /v1/rooms/{id} (get single room)
- [ ] POST /v1/properties/{propertyId}/rooms (create room)
- [ ] PUT /v1/rooms/{id} (update room)
- [ ] DELETE /v1/rooms/{id} (soft delete)
- [ ] GET /v1/rooms/{id}/availability (check availability)
- [ ] Add room type validation
- [ ] Write tests
- [ ] Update documentation

## Acceptance Criteria
- Rooms are linked to properties
- Availability calculation is accurate
- Room types are validated
- Tests cover all scenarios" \
    --label "feature,api,backend,high-priority" \
    --milestone "v4.1.0 - Core API Implementation"

echo "✅ Issue 4 created: Rooms API"

# Issue 5: CI/CD Pipeline
gh issue create \
    --title "Set Up CI/CD Pipeline" \
    --body "Set up GitHub Actions for automated testing and deployment

## Tasks
- [ ] Create workflow for running tests on PR
- [ ] Create workflow for linting code
- [ ] Create workflow for type checking
- [ ] Create workflow for building Docker image
- [ ] Create workflow for deploying to staging
- [ ] Add status badges to README
- [ ] Configure branch protection rules
- [ ] Set up code coverage reporting

## Acceptance Criteria
- All PRs must pass tests before merging
- Code coverage is tracked
- Deployments are automated
- Status badges show build status" \
    --label "devops,ci-cd,high-priority" \
    --milestone "v4.1.0 - Core API Implementation"

echo "✅ Issue 5 created: CI/CD Pipeline"

echo ""
echo "🎉 Successfully created 5 high-priority issues!"
echo ""
echo "📊 View your issues at: https://github.com/$REPO/issues"
echo "📋 View your project at: https://github.com/$REPO/projects"
echo ""
echo "💡 Next steps:"
echo "  1. Go to your GitHub project board"
echo "  2. Add these issues to your project"
echo "  3. Organize them in columns (To Do, In Progress, Done)"
echo "  4. Start working on the first issue!"
echo ""

