# GitHub Collaboration Guide

> A comprehensive guide for collaborating on GitHub projects - whether you're a repository admin, collaborator, contributor, or just getting started.

## Table of Contents
- [For Normal Users (Getting Started)](#-for-normal-users-getting-started)
- [For Contributors (External Contributors)](#-for-contributors-external-contributors)
- [For Collaborators (Team Members)](#-for-collaborators-team-members)
- [For Repository Admins](#-for-repository-admins)
- [Common Git Commands Reference](#common-git-commands-reference)

---

## 👀 For Normal Users (Getting Started)

**Who is this for?** People who want to explore, learn from, or use the code without making changes.

### What You Can Do:
- View and read the repository
- Clone the repository to your local machine
- Download files
- Report issues
- Discuss in discussions (if enabled)

### Step-by-Step Guide:

#### 1. Viewing the Repository
Simply browse the repository on GitHub - no account needed for public repositories!

#### 2. Cloning the Repository (Read-Only)
```bash
# Clone the repository to your local machine
git clone https://github.com/Sanketniza/Github-Collaboration.git

# Navigate into the repository
cd Github-Collaboration

# View the files
ls -la
```

#### 3. Staying Updated
```bash
# Pull the latest changes from the main branch
git pull origin main
```

#### 4. Creating an Issue (Reporting Bugs or Suggestions)
1. Go to the **Issues** tab
2. Click **New Issue**
3. Provide a clear title and description
4. Add labels if possible (bug, enhancement, etc.)
5. Submit the issue

**When to use:** When you find a bug, have a suggestion, or need help.

---

## 🤝 For Contributors (External Contributors)

**Who is this for?** People who want to contribute code but are NOT direct collaborators on the repository.

### Workflow Overview:
Fork → Clone → Branch → Commit → Push → Pull Request

### Complete Step-by-Step Process:

#### Step 1: Fork the Repository
```
1. Go to: https://github.com/Sanketniza/Github-Collaboration
2. Click the "Fork" button (top right)
3. This creates a copy in your account: https://github.com/YOUR-USERNAME/Github-Collaboration
```

#### Step 2: Clone Your Fork
```bash
# Clone YOUR forked repository (not the original)
git clone https://github.com/YOUR-USERNAME/Github-Collaboration.git

# Navigate into the directory
cd Github-Collaboration

# Verify the remote
git remote -v
# Should show:
# origin  https://github.com/YOUR-USERNAME/Github-Collaboration.git
```

#### Step 3: Add Upstream Remote
```bash
# Add the original repository as "upstream"
git remote add upstream https://github.com/Sanketniza/Github-Collaboration.git

# Verify remotes
git remote -v
# Should show:
# origin    https://github.com/YOUR-USERNAME/Github-Collaboration.git
# upstream  https://github.com/Sanketniza/Github-Collaboration.git
```

**Why?** This allows you to sync with the original repository.

#### Step 4: Create a New Branch
```bash
# Always create a new branch for your changes
git checkout -b feature/your-feature-name

# Example:
git checkout -b feature/add-login-page
git checkout -b fix/navbar-bug
git checkout -b docs/update-readme
```

**Branch Naming Conventions:**
- `feature/` - For new features
- `fix/` - For bug fixes
- `docs/` - For documentation
- `refactor/` - For code refactoring
- `test/` - For adding tests

#### Step 5: Make Your Changes
```bash
# Check which files changed
git status

# Add specific files
git add filename.txt

# Or add all changes
git add .

# Commit with a clear message
git commit -m "Add: login page with authentication"

# More commit examples:
git commit -m "Fix: navbar responsive issue on mobile"
git commit -m "Docs: update installation instructions"
```

**Commit Message Best Practices:**
- Start with a verb (Add, Fix, Update, Remove, Refactor)
- Keep it concise but descriptive
- Use present tense

#### Step 6: Keep Your Branch Updated
```bash
# Fetch latest changes from upstream
git fetch upstream

# Merge upstream/main into your branch
git merge upstream/main

# Or rebase (cleaner history)
git rebase upstream/main
```

**When to do this:** Before pushing your changes, ensure you have the latest code.

#### Step 7: Push to Your Fork
```bash
# Push your branch to YOUR fork
git push origin feature/your-feature-name

# If you rebased, you might need force push
git push -f origin feature/your-feature-name
```

#### Step 8: Create a Pull Request
```
1. Go to YOUR fork on GitHub
2. Click "Compare & pull request" button
3. Ensure:
   - Base repository: Sanketniza/Github-Collaboration
   - Base branch: main
   - Head repository: YOUR-USERNAME/Github-Collaboration
   - Compare branch: feature/your-feature-name
4. Fill in the PR template:
   - Clear title
   - Description of changes
   - Link related issues (#123)
5. Click "Create pull request"
```

#### Step 9: Respond to Review Comments
```bash
# Make requested changes locally
git add .
git commit -m "Address review comments"
git push origin feature/your-feature-name

# The PR will automatically update
```

#### Step 10: After PR is Merged
```bash
# Switch back to main
git checkout main

# Pull the latest changes
git pull upstream main

# Push to your fork to sync it
git push origin main

# Delete the feature branch locally
git branch -d feature/your-feature-name

# Delete the feature branch remotely
git push origin --delete feature/your-feature-name
```

### Common Contributor Scenarios:

#### Scenario A: Your Fork is Behind
```bash
# Sync your fork with upstream
git checkout main
git fetch upstream
git merge upstream/main
git push origin main
```

#### Scenario B: Merge Conflicts
```bash
# When you see merge conflicts
git status  # Shows conflicted files

# Open the files and resolve conflicts (look for <<<<<<, ======, >>>>>>)
# After resolving:
git add .
git commit -m "Resolve merge conflicts"
git push origin feature/your-feature-name
```

#### Scenario C: Update Your PR Branch
```bash
# On your feature branch
git fetch upstream
git rebase upstream/main
# Resolve any conflicts
git push -f origin feature/your-feature-name
```

---

## 👥 For Collaborators (Team Members)

**Who is this for?** People with direct write access to the repository.

### What's Different from Contributors?
- You can push directly to the repository (no fork needed)
- You can create branches in the main repository
- You may have permission to merge PRs

### Complete Workflow:

#### Step 1: Clone the Repository
```bash
# Clone the main repository
git clone https://github.com/Sanketniza/Github-Collaboration.git
cd Github-Collaboration
```

#### Step 2: Create a New Branch
```bash
# Always work on a branch, never on main directly
git checkout -b feature/your-feature-name

# Check current branch
git branch
```

#### Step 3: Make Changes
```bash
# Make your changes, then:
git status
git add .
git commit -m "Descriptive commit message"
```

#### Step 4: Keep Branch Updated
```bash
# Before pushing, get latest changes
git checkout main
git pull origin main
git checkout feature/your-feature-name
git merge main

# Or use rebase for cleaner history
git rebase main
```

#### Step 5: Push Your Branch
```bash
# Push to the main repository
git push origin feature/your-feature-name
```

#### Step 6: Create Pull Request
```
1. Go to the repository on GitHub
2. Click "Compare & pull request"
3. Select:
   - Base: main
   - Compare: feature/your-feature-name
4. Fill in details and create PR
5. Request reviews from team members
```

#### Step 7: After Merge
```bash
# Update your local main
git checkout main
git pull origin main

# Delete local branch
git branch -d feature/your-feature-name

# Delete remote branch
git push origin --delete feature/your-feature-name
```

### Working with Multiple Branches:

#### Creating Sub-branches
```bash
# Create a development branch from main
git checkout main
git checkout -b development

# Create feature branches from development
git checkout development
git checkout -b feature/new-feature

# After work is done, merge back to development
git checkout development
git merge feature/new-feature
git push origin development
```

#### Switching Between Branches
```bash
# Save current work without committing
git stash

# Switch branches
git checkout other-branch

# Come back and restore work
git checkout original-branch
git stash pop
```

### Common Collaborator Scenarios:

#### Scenario A: Working on Someone Else's Branch
```bash
# Fetch all branches
git fetch origin

# Checkout their branch
git checkout -b their-branch origin/their-branch

# Make changes
git add .
git commit -m "Collaborative changes"
git push origin their-branch
```

#### Scenario B: Hotfix on Production
```bash
# Create hotfix branch from main
git checkout main
git checkout -b hotfix/critical-bug

# Fix the bug
git add .
git commit -m "Hotfix: critical bug description"
git push origin hotfix/critical-bug

# Create PR and merge ASAP
```

---

## 🔧 For Repository Admins

**Who is this for?** Repository owners and maintainers who manage PRs, branches, and releases.

### Your Responsibilities:
- Review and merge pull requests
- Manage branches and releases
- Set up branch protection rules
- Handle conflicts and issues
- Maintain repository health

### Complete Admin Guide:

#### Part 1: Managing Pull Requests

##### Reviewing a Pull Request
```
1. Go to "Pull requests" tab
2. Select the PR to review
3. Check:
   - "Files changed" tab - review code
   - "Checks" tab - ensure CI/CD passes
   - "Commits" tab - review commit history
```

##### Adding Review Comments
```
1. In "Files changed", click on a line
2. Add comment
3. Choose:
   - "Add single comment" - for immediate feedback
   - "Start a review" - for comprehensive review
4. After reviewing all files:
   - "Comment" - just feedback
   - "Approve" - ready to merge
   - "Request changes" - needs work
```

##### Merging a Pull Request

**Option 1: Merge Commit (Preserves all commits)**
```
1. Click "Merge pull request"
2. Choose "Create a merge commit"
3. Confirm merge
```

**Use when:** You want full history of all commits.

**Option 2: Squash and Merge (Clean history)**
```
1. Click "Merge pull request" dropdown
2. Choose "Squash and merge"
3. Edit the commit message
4. Confirm merge
```

**Use when:** Multiple small commits should be one logical change.

**Option 3: Rebase and Merge (Linear history)**
```
1. Click "Merge pull request" dropdown
2. Choose "Rebase and merge"
3. Confirm merge
```

**Use when:** You want a linear history without merge commits.

##### Handling Merge Conflicts in PRs
```
Method 1: Web Interface
1. Click "Resolve conflicts" button
2. Edit the file in GitHub's editor
3. Remove conflict markers (<<<<, ======, >>>>)
4. Click "Mark as resolved"
5. Click "Commit merge"

Method 2: Command Line
```bash
# Checkout the PR branch
git fetch origin pull/PR_NUMBER/head:pr-branch
git checkout pr-branch

# Merge main into it
git merge main

# Resolve conflicts in your editor
git add .
git commit -m "Resolve merge conflicts"
git push origin pr-branch
```

#### Part 2: Branch Management

##### Creating Protected Branches
```
1. Go to Settings → Branches
2. Click "Add rule"
3. Branch name pattern: main
4. Enable:
   - ✅ Require pull request before merging
   - ✅ Require approvals (set number)
   - ✅ Require status checks to pass
   - ✅ Require branches to be up to date
   - ✅ Do not allow bypassing settings
5. Save changes
```

##### Managing Multiple Branches Strategy

**Git Flow Strategy:**
```bash
# Main branches
main          # Production-ready code
development   # Integration branch for features

# Supporting branches
feature/*     # New features
release/*     # Release preparation
hotfix/*      # Quick production fixes
```

**Creating Development Branch:**
```bash
git checkout main
git checkout -b development
git push origin development
```

**Merging Feature to Development:**
```bash
# Ensure you're on development
git checkout development
git pull origin development

# Merge the feature branch
git merge feature/new-feature

git push origin development
```

**Merging Development to Main (Release):**
```bash
# Create release branch
git checkout development
git checkout -b release/v1.0.0

# Test thoroughly, fix bugs if needed
# Then merge to main
git checkout main
git merge release/v1.0.0
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin main --tags

# Also merge back to development
git checkout development
git merge release/v1.0.0
git push origin development

# Delete release branch
git branch -d release/v1.0.0
git push origin --delete release/v1.0.0
```

##### Deleting Branches
```bash
# Delete local branch
git branch -d branch-name

# Force delete (if not merged)
git branch -D branch-name

# Delete remote branch
git push origin --delete branch-name
```

##### Cherry-picking Commits
```bash
# Pick a specific commit from another branch
git checkout main
git cherry-pick COMMIT_HASH
git push origin main
```

**Use when:** You need only specific commits, not the whole branch.

#### Part 3: Release Management

##### Creating a Release
```bash
# Create and checkout release branch
git checkout -b release/v1.0.0

# Update version numbers, changelogs
git add .
git commit -m "Prepare release v1.0.0"

# Merge to main
git checkout main
git merge release/v1.0.0

# Create tag
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin main --tags
```

##### Creating GitHub Release
```
1. Go to "Releases" → "Draft a new release"
2. Choose or create tag (v1.0.0)
3. Release title: "Version 1.0.0"
4. Describe changes
5. Attach binaries if needed
6. Click "Publish release"
```

#### Part 4: Repository Settings

##### Setting Up Branch Protection
```
Settings → Branches → Branch protection rules
- Require pull request reviews
- Require status checks
- Require conversation resolution
- Require signed commits
- Include administrators
```

##### Setting Up CODEOWNERS
Create `.github/CODEOWNERS` file:
```
# Default owners
* @Sanketniza

# Specific directories
/docs/ @doc-team
/src/frontend/ @frontend-team
/src/backend/ @backend-team
*.js @javascript-experts
```

##### Enabling Required Checks
```
Settings → Branches → Edit branch protection rule
→ Require status checks before merging
→ Select required checks (tests, linting, etc.)
```

#### Part 5: Handling Complex Scenarios

##### Reverting a Merged PR
```bash
# Find the merge commit hash
git log --oneline

# Revert the merge commit
git revert -m 1 MERGE_COMMIT_HASH
git push origin main
```

##### Force Updating Main (Use with EXTREME caution)
```bash
# Only if absolutely necessary and team is aware
git checkout main
git reset --hard GOOD_COMMIT_HASH
git push -f origin main
```

**⚠️ WARNING:** This rewrites history. Only use in emergencies.

##### Cleaning Up Old Branches
```bash
# List all remote branches
git branch -r

# Delete multiple remote branches
git push origin --delete branch1 branch2 branch3

# Prune deleted remote branches locally
git fetch --prune
```

##### Resolving "Branch is Out of Date" Issues
```bash
# Update the PR branch
git checkout feature-branch
git fetch origin
git merge origin/main
```

---

## Common Git Commands Reference

### Configuration
```bash
# Set your identity
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Check configuration
git config --list

# Set default branch name
git config --global init.defaultBranch main
```

### Repository Operations
```bash
# Initialize repository
git init

# Clone repository
git clone <url>

# Add remote
git remote add origin <url>

# View remotes
git remote -v

# Remove remote
git remote remove origin
```

### Branch Operations
```bash
# List branches
git branch                    # Local branches
git branch -r                 # Remote branches
git branch -a                 # All branches

# Create branch
git branch branch-name

# Switch branch
git checkout branch-name
git switch branch-name        # Newer syntax

# Create and switch
git checkout -b branch-name
git switch -c branch-name     # Newer syntax

# Rename branch
git branch -m old-name new-name

# Delete branch
git branch -d branch-name     # Safe delete
git branch -D branch-name     # Force delete
```

### Staging and Committing
```bash
# Check status
git status

# Add files
git add file.txt              # Specific file
git add .                     # All files
git add *.js                  # Pattern match

# Commit
git commit -m "Message"
git commit -am "Message"      # Add and commit tracked files

# Amend last commit
git commit --amend -m "New message"
```

### Viewing History
```bash
# View commits
git log
git log --oneline
git log --graph --oneline --all

# View changes
git diff                      # Unstaged changes
git diff --staged             # Staged changes
git diff branch1 branch2      # Compare branches

# Show commit details
git show COMMIT_HASH
```

### Syncing
```bash
# Fetch changes
git fetch origin

# Pull changes
git pull origin branch-name
git pull --rebase origin branch-name

# Push changes
git push origin branch-name
git push -u origin branch-name    # Set upstream
git push --force origin branch-name # Force push (dangerous)
```

### Undoing Changes
```bash
# Discard changes in working directory
git checkout -- file.txt
git restore file.txt          # Newer syntax

# Unstage files
git reset HEAD file.txt
git restore --staged file.txt # Newer syntax

# Undo commits
git reset --soft HEAD~1       # Keep changes staged
git reset --mixed HEAD~1      # Keep changes unstaged
git reset --hard HEAD~1       # Discard changes (dangerous)

# Revert a commit (creates new commit)
git revert COMMIT_HASH
```

### Stashing
```bash
# Save work temporarily
git stash
git stash save "Description"

# List stashes
git stash list

# Apply stash
git stash apply               # Keep stash
git stash pop                 # Apply and remove

# Drop stash
git stash drop stash@{0}
git stash clear               # Remove all stashes
```

### Merging and Rebasing
```bash
# Merge branch
git merge branch-name

# Abort merge
git merge --abort

# Rebase
git rebase branch-name

# Abort rebase
git rebase --abort

# Continue after resolving conflicts
git rebase --continue
```

### Tagging
```bash
# Create tag
git tag v1.0.0
git tag -a v1.0.0 -m "Version 1.0.0"

# List tags
git tag

# Push tags
git push origin v1.0.0
git push origin --tags        # All tags

# Delete tag
git tag -d v1.0.0             # Local
git push origin --delete v1.0.0 # Remote
```

---

## Quick Reference Charts

### When to Use Which Command?

| Scenario | Command |
|----------|---------|
| Start contributing | `git clone` → `git checkout -b feature/name` |
| Save changes | `git add .` → `git commit -m "message"` |
| Share changes | `git push origin branch-name` |
| Get latest code | `git pull origin main` |
| Switch tasks | `git stash` → `git checkout other-branch` |
| Fix conflicts | Edit files → `git add .` → `git commit` |
| Undo last commit (keep changes) | `git reset --soft HEAD~1` |
| Completely undo last commit | `git reset --hard HEAD~1` |
| Update PR | `git add .` → `git commit` → `git push` |

### Command Sequence for Contributors

```
1. git clone YOUR_FORK
2. git remote add upstream ORIGINAL_REPO
3. git checkout -b feature/name
4. [Make changes]
5. git add .
6. git commit -m "Description"
7. git fetch upstream
8. git merge upstream/main
9. git push origin feature/name
10. [Create PR on GitHub]
```

### Command Sequence for Collaborators

```
1. git clone REPO
2. git checkout -b feature/name
3. [Make changes]
4. git add .
5. git commit -m "Description"
6. git pull origin main
7. git push origin feature/name
8. [Create PR on GitHub]
```

---

## Best Practices

### For Everyone
- ✅ Write clear, descriptive commit messages
- ✅ Commit often, push regularly
- ✅ Always work on a branch, never directly on main
- ✅ Pull latest changes before starting work
- ✅ Test your code before pushing
- ✅ Keep commits focused (one logical change per commit)

### For Contributors
- ✅ Keep your fork synced with upstream
- ✅ Follow the project's contribution guidelines
- ✅ Reference issues in commits and PRs (#123)
- ✅ Respond promptly to review comments
- ✅ Be respectful and professional

### For Collaborators
- ✅ Request reviews before merging
- ✅ Keep branches up to date with main
- ✅ Delete branches after merging
- ✅ Use descriptive branch names
- ✅ Communicate with team about breaking changes

### For Admins
- ✅ Set up branch protection on main
- ✅ Require PR reviews before merging
- ✅ Document your branching strategy
- ✅ Use semantic versioning for releases
- ✅ Keep repository documentation updated
- ✅ Regularly clean up merged branches
- ✅ Monitor repository health and security

---

## Common Issues and Solutions

### "Permission denied" error
**Problem:** You don't have write access or SSH keys not set up.
**Solution:**
```bash
# Check your remote URL
git remote -v

# If using HTTPS and getting password prompts, set up SSH
# Or use GitHub Personal Access Token instead of password
```

### "Merge conflict" error
**Problem:** Changes conflict with main branch.
**Solution:**
```bash
git status  # See conflicted files
# Edit files to resolve conflicts
git add .
git commit -m "Resolve conflicts"
```

### "Branch is behind" warning
**Problem:** Your branch doesn't have latest changes.
**Solution:**
```bash
git fetch origin
git merge origin/main
# Or
git pull origin main
```

### "Detached HEAD state"
**Problem:** You're not on any branch.
**Solution:**
```bash
# Create a branch from current state
git checkout -b new-branch-name
```

### Push rejected (non-fast-forward)
**Problem:** Remote has changes you don't have.
**Solution:**
```bash
git pull origin branch-name
# Resolve conflicts if any
git push origin branch-name
```

---

## Additional Resources

- [Official Git Documentation](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [Pro Git Book](https://git-scm.com/book/en/v2)

---

## Contributing to This Guide

Found an error or want to add something? This guide is collaborative!
- **Contributors:** Fork and submit a PR
- **Collaborators:** Create a branch and PR
- **Admins:** Review and merge improvements

---

**Happy Collaborating! 🚀**

Made with ❤️ for the GitHub community
