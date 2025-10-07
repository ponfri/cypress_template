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

## 5. Start the Server and Client


Before running the tests, you must start both the backend server and the Angular client. Both are located in the `angular_demo/` directory:

- **Start the backend server:**
  Open a terminal and run:
  ```bash
  cd angular_demo
  node server.js
  ```
  The backend API will be available at [http://localhost:3200](http://localhost:3200).

- **Start the Angular client:**
  Open a new terminal and run:
  ```bash
  cd angular_demo
  npm install
  npm start
  ```
  The Angular app will be available at [http://localhost:5200](http://localhost:5200).

Wait until both are fully started and accessible (check their respective terminal outputs for successful startup messages).

## 6. Run Tests
- **Interactive mode:**
  ```bash
  npx cypress open
  ```
- **Headless mode (all tests):**
  ```bash
  npx cypress run
  ```
- **Tag-based filtering with cypress-grep:**
  To run only tests or suites with a specific tag (e.g. `@po_regression`), use:
  ```bash
  npx cypress run --env grep=@po_regression --env grepFilterSpecs=true
  ```
  This is required for suite-level tags to work with cypress-grep.

## 7. Generate and View Reports
- **Mochawesome report:**
  - Run: `npm run run:report`
  - Open: [http://localhost:8080/mochawesome.html](http://localhost:8080/mochawesome.html)
- **Allure report:**
  - Run: `npm run allure:generate-serve`
  - Open: [http://localhost:3000](http://localhost:3000)

## 8. Troubleshooting
- **Missing dependencies:** Run `npm install` again.
- **Port already in use:** Use `npm run kill:port` to free up port 8080.
- **Tests not found:** Make sure your spec files are in `cypress/e2e/tests/` and use `.spec.ts` extension.
- **Environment variables not loaded:** Double-check your `cypress.env.json` format and values.
- **More help:** See [Environment Usage Instructions](ai_instructions/env_usage.md) and [Fixtures Documentation](ai_instructions/fixtures.md).

## 9. Useful Documentation
- [Custom Commands Documentation](ai_instructions/custom_commands.md)
- [Page Objects Documentation](ai_instructions/page_objects.md)
- [Environment Usage Instructions](ai_instructions/env_usage.md)
- [Fixtures Documentation](ai_instructions/fixtures.md)

## Example Spec & Page Object

To get started with writing tests and page objects, review these examples:
- [`cypress/e2e/tests/example.spec.ts`](cypress/e2e/tests/example.spec.ts): Example Cypress test spec
- [`cypress/e2e/pageObjects/ExamplePage.po.ts`](cypress/e2e/pageObjects/ExamplePage.po.ts): Example page object

These files show recommended patterns and comments for new contributors.

## Contribution Templates

To help maintainers and contributors, this project uses GitHub issue and pull request templates:
- **Bug Reports:** Fill out the bug report template for any problems you encounter.
- **Feature Requests:** Use the feature request template to propose new features or improvements.
- **Pull Requests:** Use the pull request template to describe your changes and confirm you followed project conventions.

Templates are located in `.github/ISSUE_TEMPLATE/` and `.github/PULL_REQUEST_TEMPLATE.md`.

---
For further help, contact the project maintainer or open an issue on GitHub.
