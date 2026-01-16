# StayOS Git Workflow Guide

**Repository**: https://github.com/Robertoukootieno/StayOS.git  
**Last Updated**: 2026-01-16

---

## 🎯 Overview

This guide explains the Git workflow for the StayOS project, including branching strategy, commit conventions, and collaboration best practices.

---

## 📋 Repository Information

### Remote Repository
- **URL**: https://github.com/Robertoukootieno/StayOS.git
- **Main Branch**: `main`
- **Protected Branches**: `main`, `develop` (to be configured)

### Local Setup
```bash
# Clone the repository
git clone https://github.com/Robertoukootieno/StayOS.git
cd StayOS

# Verify remote
git remote -v
```

---

## 🌿 Branching Strategy

### Branch Types

1. **main** - Production-ready code
   - Always stable and deployable
   - Protected branch (requires PR)
   - Tagged with version numbers

2. **develop** - Integration branch (to be created)
   - Latest development changes
   - Base for feature branches
   - Merged to main for releases

3. **feature/** - New features
   - Branch from: `develop`
   - Merge to: `develop`
   - Naming: `feature/description`
   - Example: `feature/guest-loyalty-program`

4. **bugfix/** - Bug fixes
   - Branch from: `develop`
   - Merge to: `develop`
   - Naming: `bugfix/description`
   - Example: `bugfix/reservation-date-validation`

5. **hotfix/** - Urgent production fixes
   - Branch from: `main`
   - Merge to: `main` and `develop`
   - Naming: `hotfix/description`
   - Example: `hotfix/payment-processing-error`

6. **release/** - Release preparation
   - Branch from: `develop`
   - Merge to: `main` and `develop`
   - Naming: `release/version`
   - Example: `release/v4.1.0`

---

## 📝 Commit Message Convention

We follow **Conventional Commits** specification.

### Format
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, no logic change)
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Maintenance tasks
- **ci**: CI/CD changes
- **build**: Build system changes

### Examples

```bash
# Feature
git commit -m "feat(reservations): add cancellation policy validation"

# Bug fix
git commit -m "fix(billing): correct tax calculation for multi-night stays"

# Documentation
git commit -m "docs(api): update authentication examples"

# Multiple paragraphs
git commit -m "feat(guests): implement loyalty points system

- Add loyalty points calculation
- Create redemption workflow
- Update guest profile schema

Closes #123"
```

---

## 🔄 Daily Workflow

### 1. Start New Work

```bash
# Update your local repository
git checkout develop
git pull origin develop

# Create feature branch
git checkout -b feature/your-feature-name

# Or for bugfix
git checkout -b bugfix/your-bugfix-name
```

### 2. Make Changes

```bash
# Check status
git status

# Stage changes
git add .
# Or stage specific files
git add path/to/file

# Commit with conventional message
git commit -m "feat(module): description of change"
```

### 3. Push Changes

```bash
# Push to remote
git push origin feature/your-feature-name

# If branch doesn't exist on remote yet
git push -u origin feature/your-feature-name
```

### 4. Create Pull Request

1. Go to https://github.com/Robertoukootieno/StayOS
2. Click "Pull requests" → "New pull request"
3. Select your branch
4. Fill in PR template
5. Request review
6. Address feedback
7. Merge when approved

---

## 🔀 Keeping Your Branch Updated

```bash
# While on your feature branch
git checkout feature/your-feature-name

# Fetch latest changes
git fetch origin

# Rebase on develop (preferred)
git rebase origin/develop

# Or merge (alternative)
git merge origin/develop

# Resolve conflicts if any
# Then push (may need --force-with-lease after rebase)
git push origin feature/your-feature-name --force-with-lease
```

---

## 🚀 Release Process

### 1. Create Release Branch

```bash
git checkout develop
git pull origin develop
git checkout -b release/v4.1.0
```

### 2. Prepare Release

```bash
# Update version numbers
# Update CHANGELOG.md
# Run tests
# Fix any issues

git commit -m "chore(release): prepare v4.1.0"
git push origin release/v4.1.0
```

### 3. Merge to Main

```bash
# Create PR: release/v4.1.0 → main
# After approval and merge:

git checkout main
git pull origin main
git tag -a v4.1.0 -m "Release v4.1.0"
git push origin v4.1.0
```

### 4. Merge Back to Develop

```bash
git checkout develop
git merge main
git push origin develop
```

---

## 🔧 Useful Commands

### Check Current Status
```bash
git status                    # Working directory status
git log --oneline -10        # Recent commits
git branch -vv               # Local branches with tracking
git remote -v                # Remote repositories
```

### Undo Changes
```bash
git checkout -- file.txt     # Discard changes in file
git reset HEAD file.txt      # Unstage file
git reset --soft HEAD~1      # Undo last commit (keep changes)
git reset --hard HEAD~1      # Undo last commit (discard changes)
```

### Stash Changes
```bash
git stash save "description" # Save changes temporarily
git stash list               # List stashes
git stash pop                # Apply and remove latest stash
git stash apply stash@{0}    # Apply specific stash
```

### View Differences
```bash
git diff                     # Unstaged changes
git diff --staged            # Staged changes
git diff main..develop       # Compare branches
```

---

## 👥 Collaboration Best Practices

### Before Starting Work
1. ✅ Pull latest changes from develop
2. ✅ Create a new branch
3. ✅ Check no one else is working on the same feature

### While Working
1. ✅ Commit frequently with clear messages
2. ✅ Keep commits focused and atomic
3. ✅ Push regularly to backup your work
4. ✅ Rebase on develop regularly

### Before Creating PR
1. ✅ Rebase on latest develop
2. ✅ Run tests locally
3. ✅ Update documentation
4. ✅ Review your own changes
5. ✅ Write clear PR description

### Code Review
1. ✅ Be respectful and constructive
2. ✅ Explain the "why" not just "what"
3. ✅ Address all comments
4. ✅ Test reviewer suggestions

---

## 🆘 Common Issues

### Merge Conflicts
```bash
# During rebase or merge
# 1. Open conflicted files
# 2. Resolve conflicts (look for <<<<<<< markers)
# 3. Stage resolved files
git add resolved-file.txt
# 4. Continue
git rebase --continue
# Or if merging
git commit
```

### Accidentally Committed to Wrong Branch
```bash
# If not pushed yet
git reset --soft HEAD~1      # Undo commit, keep changes
git stash                    # Save changes
git checkout correct-branch  # Switch to correct branch
git stash pop                # Apply changes
git commit -m "message"      # Commit on correct branch
```

### Need to Update Commit Message
```bash
# Last commit only (not pushed)
git commit --amend -m "new message"

# Already pushed (avoid if possible)
git commit --amend -m "new message"
git push --force-with-lease
```

---

## 📚 Additional Resources

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [Pro Git Book](https://git-scm.com/book/en/v2)

---

## 🎯 Quick Reference

```bash
# Daily workflow
git checkout develop && git pull
git checkout -b feature/my-feature
# ... make changes ...
git add . && git commit -m "feat: description"
git push -u origin feature/my-feature
# Create PR on GitHub

# Update branch
git fetch origin
git rebase origin/develop
git push --force-with-lease

# Finish work
# Merge PR on GitHub
git checkout develop && git pull
git branch -d feature/my-feature
```

---

**Questions?** Ask in #stayos-dev Slack channel or check the [Troubleshooting Guide](TROUBLESHOOTING.md).

