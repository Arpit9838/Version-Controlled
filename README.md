# Version-Controlled DevOps Project

##  Overview
This project is a  example to practice Git & GitHub version control best practices.  
The goal is to implement a proper branching workflow (main → dev → feature) and document the development process.

---

##  Tools Used
- Git – For version control.
- GitHub – For remote repository hosting.
- Markdown – For documentation.

---

##  Branching Workflow
1. main – Stable production-ready code.
2. dev – Integration branch for testing features before merging to main.
3. feature/ – Temporary branches for developing specific features.

# 📋 Project Development Tasks

## Task 1 – Initialize Git Repository
- Created `README.md`.
- Ran `git init` to initialize the repository.
- Committed the initial file.
- Connected to GitHub using `git remote add origin`.

---

## Task 2 – Branching
- Created `main` branch for production code.
- Created `dev` branch for development integration.
- Created `feature/quote-generator` branch for new features.

---

## Task 3 – Pull Requests
- Worked on `feature/quote-generator` branch.
- Opened a Pull Request to merge into `dev`.
- After testing, merged `dev` into `main`.

---

## Task 4 – Add `.gitignore`
- Added common ignores (node_modules, .env, temporary files).

---

## Task 5 – Tagging
- Tagged first stable release:
```bash
git tag -a v1.0 -m "First complete Git workflow"
git push origin v1.0


