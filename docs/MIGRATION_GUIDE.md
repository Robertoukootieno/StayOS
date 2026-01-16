# StayOS Migration Guide - Project Reorganization

**Date**: 2026-01-16  
**Version**: 4.0.0  
**Status**: Required for all team members

---

## 🎯 Overview

The StayOS project has been reorganized to follow clean architecture and DevOps best practices. This guide will help you update your local environment to work with the new structure.

**⏱️ Estimated Time**: 10-15 minutes

---

## ⚠️ IMPORTANT - Read Before Starting

### What Changed?

1. **API specifications** moved from `docs/api/` → `api/`
2. **Database files** moved from `docs/database/` → `backend/database/`
3. **Planning docs** moved from root → `docs/planning/`
4. **User guides** moved to `docs/guides/`
5. **All scripts and references** updated

### What Stayed the Same?

- ✅ Backend source code (`backend/src/`)
- ✅ Database connection and credentials
- ✅ API endpoints and functionality
- ✅ Authentication and authorization
- ✅ All features work exactly the same

---

## 📋 Pre-Migration Checklist

Before you start, make sure you have:

- [ ] Committed or stashed all local changes
- [ ] Noted any custom scripts or paths you use
- [ ] Backed up your `.env` file (if customized)
- [ ] Closed any running servers or processes

---

## 🚀 Step-by-Step Migration

### Step 1: Save Your Work

```bash
# Check for uncommitted changes
git status

# If you have changes, commit or stash them
git add .
git commit -m "WIP: Save work before migration"

# OR stash them
git stash save "Before migration"
```

### Step 2: Pull the Latest Changes

```bash
# Fetch the latest changes
git fetch origin

# Pull the reorganization changes
git pull origin main

# If you get merge conflicts, see "Troubleshooting" section below
```

### Step 3: Verify the New Structure

```bash
# Check that new directories exist
ls -la api/
ls -la backend/database/
ls -la docs/planning/
ls -la docs/guides/

# Verify old directories are gone
ls -la docs/api/          # Should not exist
ls -la docs/database/     # Should not exist
```

### Step 4: Update Dependencies

```bash
# Update root dependencies
npm install

# Update backend dependencies
cd backend
npm install
cd ..
```

### Step 5: Update Your Environment

```bash
# If you have a custom .env file, verify it's still correct
cat backend/.env

# The database paths in .env don't need to change
# Only file references in scripts have changed
```

### Step 6: Test the New Setup

```bash
# Test API documentation server
npm run api:docs
# Should open http://localhost:3000

# Test database setup script
npm run db:setup
# Should reference backend/database/schemas/

# Test backend server
cd backend
npm run dev
# Should start on http://localhost:3000
```

### Step 7: Update Your Custom Scripts (If Any)

If you have custom scripts that reference old paths, update them:

```bash
# Old paths → New paths
docs/api/openapi.yaml              → api/openapi.yaml
docs/database/schema_*.sql         → backend/database/schemas/schema_*.sql
docs/database/sample_data.sql      → backend/database/seeds/sample_data.sql
NEXT_STEPS_ROADMAP.md              → docs/planning/NEXT_STEPS_ROADMAP.md
docs/API_QUICK_START.md            → docs/guides/API_QUICK_START.md
```

---

## 🔧 Troubleshooting

### Issue 1: Merge Conflicts

**Symptom**: Git reports merge conflicts during pull

**Solution**:
```bash
# See which files have conflicts
git status

# For each conflicted file, choose the incoming version
git checkout --theirs <file>

# Or use a merge tool
git mergetool

# After resolving, commit
git add .
git commit -m "Resolved merge conflicts from reorganization"
```

### Issue 2: "Directory not found" errors

**Symptom**: Scripts fail with "No such file or directory"

**Solution**:
```bash
# Make sure you pulled the latest changes
git pull origin main

# Verify the new structure exists
ls -la api/
ls -la backend/database/

# If directories are missing, you may need to clean and re-pull
git clean -fd
git reset --hard origin/main
```

### Issue 3: npm scripts not working

**Symptom**: `npm run api:docs` or other commands fail

**Solution**:
```bash
# Update package.json from the repository
git checkout origin/main -- package.json

# Reinstall dependencies
npm install

# Test the command again
npm run api:docs
```

### Issue 4: Database scripts fail

**Symptom**: `npm run db:setup` can't find schema files

**Solution**:
```bash
# Verify the database directory structure
ls -la backend/database/schemas/

# If files are missing, pull them
git checkout origin/main -- backend/database/

# Run the setup script again
npm run db:setup
```

### Issue 5: Old directories still exist

**Symptom**: You see both `docs/api/` and `api/` directories

**Solution**:
```bash
# Remove old directories (they should be empty or contain placeholders)
rm -rf docs/api/
rm -rf docs/database/

# Remove old planning docs from root
rm -f NEXT_STEPS_ROADMAP.md
rm -f PROJECT_OVERVIEW.md
rm -f QUICK_START_IMPLEMENTATION.md
rm -f TECHNOLOGY_STACK_DECISION.md

# Verify they're gone
git status
```

### Issue 6: Custom .env file overwritten

**Symptom**: Your database credentials or custom settings are gone

**Solution**:
```bash
# Restore from your backup
cp backend/.env.backup backend/.env

# Or restore from git stash
git stash list
git stash show stash@{0}
git checkout stash@{0} -- backend/.env

# The .env file structure hasn't changed, only file paths in scripts
```

---

## 📝 Path Reference Guide

### Quick Reference Table

| Old Path | New Path | Type |
|----------|----------|------|
| `docs/api/openapi.yaml` | `api/openapi.yaml` | API Spec |
| `docs/api/schemas/` | `api/schemas/` | JSON Schemas |
| `docs/api/index.html` | `api/index.html` | Swagger UI |
| `docs/database/schema_*.sql` | `backend/database/schemas/schema_*.sql` | SQL Schemas |
| `docs/database/sample_data.sql` | `backend/database/seeds/sample_data.sql` | Sample Data |
| `NEXT_STEPS_ROADMAP.md` | `docs/planning/NEXT_STEPS_ROADMAP.md` | Planning |
| `PROJECT_OVERVIEW.md` | `docs/planning/PROJECT_OVERVIEW.md` | Planning |
| `docs/API_QUICK_START.md` | `docs/guides/API_QUICK_START.md` | Guide |
| `docs/AUTH_TESTING_GUIDE.md` | `docs/guides/AUTH_TESTING_GUIDE.md` | Guide |

### Updated npm Scripts

```bash
# API commands (updated paths)
npm run api:docs          # Runs api/serve.js (was docs/api/serve.js)
npm run api:validate      # Validates api/openapi.yaml
npm run api:bundle        # Bundles to api/openapi-bundled.yaml

# Database commands (new!)
npm run db:setup          # Runs scripts/setup-database.sh
npm run db:setup:simple   # Runs scripts/setup-database-simple.sh

# Backend commands (unchanged)
cd backend && npm run dev # Start development server
```

---

## ✅ Verification Checklist

After migration, verify everything works:

- [ ] `npm run api:docs` opens Swagger UI
- [ ] `npm run api:validate` passes without errors
- [ ] `cd backend && npm run dev` starts the server
- [ ] Database connection works
- [ ] Authentication endpoints work
- [ ] Properties API returns data
- [ ] No "file not found" errors in logs

---

## 🆘 Getting Help

If you encounter issues not covered here:

1. **Check the documentation**:
   - [Project Structure](PROJECT_STRUCTURE.md)
   - [Reorganization Summary](REORGANIZATION_SUMMARY.md)
   - [Status Report](STATUS_REPORT.md)

2. **Ask the team**:
   - Post in #stayos-dev Slack channel
   - Tag @devops for infrastructure issues

3. **Nuclear option** (last resort):
   ```bash
   # Backup your .env file first!
   cp backend/.env ~/env-backup
   
   # Clean everything
   git clean -fdx
   git reset --hard origin/main
   
   # Restore .env
   cp ~/env-backup backend/.env
   
   # Reinstall
   npm install
   cd backend && npm install && cd ..
   ```

---

## 📚 Additional Resources

- [Visual Diagrams](architecture/VISUAL_DIAGRAMS.md) - See the new structure visually
- [API README](../api/README.md) - API specification guide
- [Database README](../backend/database/README.md) - Database setup guide
- [Main README](../README.md) - Updated project overview

---

## 🎉 You're Done!

Once you've completed all steps and verified everything works, you're ready to continue development with the new structure.

**Welcome to the reorganized StayOS!** 🚀

---

**Questions?** Contact the DevOps team or check the documentation links above.

