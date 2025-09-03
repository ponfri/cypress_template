# Onboarding Guide for Cypress Template Project

Welcome to the Cypress Template Project! This guide will help you set up your environment, run tests, and troubleshoot common issues.

## 1. Prerequisites
- Node.js (v22.x or v24.x recommended)
- npm (comes with Node.js)
- VS Code (recommended)
- Git

## 2. Clone the Repository
```bash
git clone https://github.com/ponfri/cypress_template.git
cd cypress_template
```

## 3. Install Dependencies
```bash
npm install
```

## 4. Configure Environment Data
Edit `cypress.env.json` to set API URLs, test accounts, and other variables. Example:
```json
{
  "env": { "name": "dev" },
  "apiBaseUrl": { "dev": "http://localhost:3000/api" },
  "accounts": { "admin": { "username": "admin_user", "password": "admin_pass" } }
}
```

## 5. Run Tests
- **Interactive mode:**
  ```bash
  npx cypress open
  ```
- **Headless mode:**
  ```bash
  npx cypress run
  ```

## 6. Generate and View Reports
- **Mochawesome report:**
  - Run: `npm run run:report`
  - Open: [http://localhost:8080/mochawesome.html](http://localhost:8080/mochawesome.html)
- **Allure report:**
  - Run: `npm run allure:generate-serve`
  - Open: [http://localhost:3000](http://localhost:3000)

## 7. Troubleshooting
- **Missing dependencies:** Run `npm install` again.
- **Port already in use:** Use `npm run kill:port` to free up port 8080.
- **Tests not found:** Make sure your spec files are in `cypress/e2e/tests/` and use `.spec.ts` extension.
- **Environment variables not loaded:** Double-check your `cypress.env.json` format and values.
- **More help:** See [Environment Usage Instructions](ai_instructions/env_usage.md) and [Fixtures Documentation](ai_instructions/fixtures.md).

## 8. Useful Documentation
- [Custom Commands Documentation](ai_instructions/custom_commands.md)
- [Page Objects Documentation](ai_instructions/page_objects.md)
- [Environment Usage Instructions](ai_instructions/env_usage.md)
- [Fixtures Documentation](ai_instructions/fixtures.md)

---
For further help, contact the project maintainer or open an issue on GitHub.
