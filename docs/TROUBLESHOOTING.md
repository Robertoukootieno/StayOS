# StayOS Troubleshooting Guide

**Last Updated**: 2026-01-16

This guide covers common issues and their solutions after the project reorganization.

---

## 🔍 Quick Diagnosis

### Identify Your Issue

1. **File/Directory Not Found** → See [Path Issues](#path-issues)
2. **Git Conflicts** → See [Git Issues](#git-issues)
3. **npm Scripts Failing** → See [Script Issues](#script-issues)
4. **Database Problems** → See [Database Issues](#database-issues)
5. **Server Won't Start** → See [Server Issues](#server-issues)
6. **API Documentation Issues** → See [API Doc Issues](#api-documentation-issues)

---

## 📁 Path Issues

### Error: "Cannot find module 'docs/api/openapi.yaml'"

**Cause**: Script or code references old path

**Solution**:
```bash
# Update the reference to new path
# Old: docs/api/openapi.yaml
# New: api/openapi.yaml

# If it's in package.json, pull the latest
git checkout origin/main -- package.json
npm install
```

### Error: "ENOENT: no such file or directory, open 'docs/database/schema_*.sql'"

**Cause**: Database script references old path

**Solution**:
```bash
# Update scripts to use new path
git checkout origin/main -- scripts/setup-database.sh
git checkout origin/main -- scripts/setup-database-simple.sh

# Verify the files exist in new location
ls -la backend/database/schemas/
```

### Error: "docs/api/ directory still exists"

**Cause**: Old directories not cleaned up

**Solution**:
```bash
# These should be empty or contain only placeholder files
# Safe to remove
rm -rf docs/api/
rm -rf docs/database/

# Remove old planning docs from root
rm -f NEXT_STEPS_ROADMAP.md PROJECT_OVERVIEW.md
rm -f QUICK_START_IMPLEMENTATION.md TECHNOLOGY_STACK_DECISION.md
```

---

## 🔀 Git Issues

### Error: "Merge conflict in package.json"

**Cause**: Local changes conflict with reorganization

**Solution**:
```bash
# Option 1: Accept incoming changes (recommended)
git checkout --theirs package.json
git add package.json

# Option 2: Manual merge
# Edit package.json and resolve conflicts
# Look for <<<<<<< HEAD markers
git add package.json

# Complete the merge
git commit -m "Resolved package.json conflicts"
```

### Error: "Your local changes would be overwritten by merge"

**Cause**: Uncommitted changes in files that were reorganized

**Solution**:
```bash
# Save your changes
git stash save "Before reorganization pull"

# Pull the changes
git pull origin main

# Review what was stashed
git stash show

# If you need those changes, manually reapply them
git stash pop
# Resolve any conflicts
```

### Error: "Untracked files would be overwritten"

**Cause**: Local files conflict with incoming changes

**Solution**:
```bash
# See what files are conflicting
git status

# Move them to a backup location
mkdir ~/stayos-backup
mv <conflicting-file> ~/stayos-backup/

# Pull the changes
git pull origin main

# Review and merge your changes if needed
```

---

## 📜 Script Issues

### Error: "npm run api:docs" fails

**Cause**: Script references old path or file doesn't exist

**Solution**:
```bash
# Verify the file exists
ls -la api/serve.js

# If missing, pull it
git checkout origin/main -- api/

# Update package.json
git checkout origin/main -- package.json
npm install

# Try again
npm run api:docs
```

### Error: "npm run db:setup" not found

**Cause**: Old package.json without new scripts

**Solution**:
```bash
# Update package.json
git checkout origin/main -- package.json

# Reinstall dependencies
npm install

# Verify the script exists
npm run
# Should show db:setup and db:setup:simple
```

### Error: "bash: scripts/setup-database.sh: No such file or directory"

**Cause**: Script file missing or not executable

**Solution**:
```bash
# Verify file exists
ls -la scripts/setup-database.sh

# If missing, pull it
git checkout origin/main -- scripts/

# Make it executable
chmod +x scripts/*.sh

# Try again
npm run db:setup
```

---

## 🗄️ Database Issues

### Error: "SCHEMA_DIR: No such file or directory"

**Cause**: Database setup script uses old path

**Solution**:
```bash
# Update the script
git checkout origin/main -- scripts/setup-database.sh

# Verify it uses the new path
grep SCHEMA_DIR scripts/setup-database.sh
# Should show: SCHEMA_DIR="backend/database/schemas"

# Run the setup
npm run db:setup
```

### Error: "sample_data.sql: No such file or directory"

**Cause**: Sample data file in wrong location

**Solution**:
```bash
# Verify file exists in new location
ls -la backend/database/seeds/sample_data.sql

# If missing, pull it
git checkout origin/main -- backend/database/seeds/

# Update any custom scripts to use new path
# Old: docs/database/sample_data.sql
# New: backend/database/seeds/sample_data.sql
```

### Error: Database connection fails after migration

**Cause**: .env file may have been overwritten

**Solution**:
```bash
# Check your .env file
cat backend/.env

# Restore from backup if needed
cp backend/.env.backup backend/.env

# Or restore from git stash
git stash list
git checkout stash@{0} -- backend/.env

# Verify database credentials
# DATABASE_URL=postgresql://localhost:5432/stayos_dev
# DB_HOST=localhost
# DB_PORT=5432
# DB_NAME=stayos_dev
# DB_USER=postgres
# DB_PASSWORD=postgres
```

---

## 🚀 Server Issues

### Error: "Cannot find module './routes/properties'"

**Cause**: Import paths may be incorrect

**Solution**:
```bash
# Backend source code paths haven't changed
# This shouldn't happen, but if it does:

# Pull the latest backend code
git checkout origin/main -- backend/src/

# Reinstall dependencies
cd backend
npm install
cd ..

# Try starting the server
cd backend && npm run dev
```

### Error: "Port 3000 already in use"

**Cause**: Another process is using the port

**Solution**:
```bash
# Find the process
lsof -i :3000

# Kill it
kill -9 <PID>

# Or use a different port
cd backend
PORT=3001 npm run dev
```

### Error: "JWT_SECRET is not defined"

**Cause**: .env file missing or incomplete

**Solution**:
```bash
# Check .env file exists
ls -la backend/.env

# If missing, copy from example
cp backend/.env.example backend/.env

# Edit with your values
nano backend/.env

# Verify JWT_SECRET is set
grep JWT_SECRET backend/.env
```

---

## 📖 API Documentation Issues

### Error: "Swagger UI shows 404"

**Cause**: API spec file not found

**Solution**:
```bash
# Verify openapi.yaml exists
ls -la api/openapi.yaml

# If missing, pull it
git checkout origin/main -- api/

# Restart the docs server
npm run api:docs
```

### Error: "Failed to load API definition"

**Cause**: OpenAPI spec has errors or wrong path

**Solution**:
```bash
# Validate the spec
npm run api:validate

# If validation fails, pull the correct version
git checkout origin/main -- api/openapi.yaml

# Try again
npm run api:docs
```

### Error: "Swagger UI shows old structure"

**Cause**: Browser cache or old bundled file

**Solution**:
```bash
# Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

# Regenerate bundled file
npm run api:bundle

# Restart docs server
npm run api:docs
```

---

## 🔧 General Fixes

### Nuclear Option: Complete Reset

If nothing else works, do a complete reset:

```bash
# 1. Backup your .env file
cp backend/.env ~/stayos-env-backup

# 2. Backup any custom changes
git diff > ~/stayos-changes.patch

# 3. Clean everything
git clean -fdx
git reset --hard origin/main

# 4. Restore .env
cp ~/stayos-env-backup backend/.env

# 5. Reinstall everything
npm install
cd backend && npm install && cd ..

# 6. Test
npm run api:docs
cd backend && npm run dev
```

### Verify Installation

Run this checklist to verify everything is correct:

```bash
# Check directory structure
ls -la api/ backend/database/ docs/planning/ docs/guides/

# Check package.json scripts
npm run | grep -E "api:|db:"

# Check database schemas
ls -la backend/database/schemas/ | wc -l
# Should show 11 files

# Test API docs
npm run api:docs &
sleep 3
curl -s http://localhost:3000 | grep -q "StayOS" && echo "✅ API docs working"
pkill -f "node api/serve.js"

# Test backend
cd backend
npm run dev &
sleep 5
curl -s http://localhost:3000/health | grep -q "ok" && echo "✅ Backend working"
pkill -f "ts-node"
cd ..
```

---

## 📞 Getting Help

### Before Asking for Help

1. Check this troubleshooting guide
2. Review the [Migration Guide](MIGRATION_GUIDE.md)
3. Check [Project Structure](PROJECT_STRUCTURE.md)
4. Look at recent commits: `git log --oneline -10`

### When Asking for Help

Include this information:

```bash
# System info
node --version
npm --version
psql --version

# Git status
git status
git log --oneline -5

# Error message (full output)
# Include the complete error, not just the last line

# What you tried
# List the troubleshooting steps you already attempted
```

### Contact

- **Slack**: #stayos-dev channel
- **Email**: devops@stayos.com
- **GitHub Issues**: Create an issue with the `migration` label

---

## 📚 Related Documentation

- [Migration Guide](MIGRATION_GUIDE.md) - Step-by-step migration instructions
- [Project Structure](PROJECT_STRUCTURE.md) - New directory organization
- [Reorganization Summary](REORGANIZATION_SUMMARY.md) - What changed and why
- [Status Report](STATUS_REPORT.md) - Current project status

---

**Last Resort**: If you're completely stuck, reach out to the DevOps team. We're here to help! 🚀

