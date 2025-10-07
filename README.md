# Cypress Template Project

[![Build Status](https://img.shields.io/github/actions/workflow/status/ponfri/cypress_template/ci.yml?branch=master)](https://github.com/ponfri/cypress_template/actions)
[![Coverage Status](https://img.shields.io/badge/coverage-unknown-lightgrey)](https://github.com/ponfri/cypress_template)
[![Dependencies](https://img.shields.io/librariesio/github/ponfri/cypress_template)](https://libraries.io/github/ponfri/cypress_template)

## Table of Contents
- [Overview](#cypress-template-project)
- [Key Features](#key-features)
- [Prerequisites](#prerequisites)
- [Configuration Files](#configuration-files)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Environment Data Usage](#environment-data-usage)
- [Custom Commands](#custom-commands)
- [Page Objects](#page-objects)
- [Contributing](#contributing)
- [Documentation](#documentation)
- [How to Extend](#how-to-extend)
- [Conventions & Best Practices](#conventions--best-practices)
- [Example Workflows](#example-workflows)
- [Troubleshooting](#troubleshooting)
- [Changelog](#changelog)
- [AI Agent Instructions](#ai-agent-instructions)

## Key Features
- **Custom Commands:** Extensive set of reusable commands for selectors, assertions, API mocking, payload retrieval, storage, style/class checks, interactability, network helpers, performance, and more.
- **Page Objects:** Modular page object files for maintainable UI interaction.
- **Centralized Environment Config:** All API URLs, test accounts, and environment variables are managed in `cypress.env.json`.
- **Best Practices Documentation:** See `/ai_instructions` for Copilot and contributor guidance.
- **Angular/TV Navigation Support:** Custom commands and strategies for non-scrollable, focus-driven navigation.
- **Performance Testing:** Built-in commands for API response time, page load, and resource load checks.

## Prerequisites
- **Node.js** (v22.x or v24.x recommended)
- **npm** (comes with Node.js)
- **VS Code** (recommended for editing and running tests)

## Configuration Files
This project uses several configuration files to organize and manage different aspects of the Cypress test framework. Below is a detailed description of each config file and its location:

### 1. `cypress.config.ts`
**Location:** Root directory
**Purpose:** Main Cypress configuration file. Defines test runner options, plugins, environment variables, reporters, and integration with Allure and other plugins. All test execution settings and plugin hooks are managed here.

### 2. `reporter-config.json`
**Location:** Root directory
**Purpose:** Configuration for Cypress multi-reporter setup. Specifies options for `mochawesome` and `mocha-junit-reporter`, including output directories and formats. Referenced by `cypress.config.ts` for advanced reporting.

### 3. `cypress.env.json`
**Location:** Root directory
**Purpose:** Centralized environment data for all tests. Stores API URLs, test accounts, feature flags, endpoints, and other environment-specific variables. Accessed via `Cypress.env()` in tests and custom commands.

### 4. `tsconfig.json`
**Location:** Root directory
**Purpose:** TypeScript configuration for the overall project. Sets compiler options, module resolution, and includes/excludes for TypeScript files outside Cypress-specific code.

### 5. `cypress/tsconfig.json`
**Location:** `cypress/` folder
**Purpose:** TypeScript configuration specifically for Cypress test files. Ensures correct type definitions, module resolution, and compatibility with Cypress plugins and custom commands.

---

## Getting Started
1. **Clone the repository:**
   ```bash
   git clone https://github.com/ponfri/cypress_template.git
   cd cypress_template
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure environment data:**
   Edit `cypress.env.json` to set API URLs, test accounts, and other variables. Example:
   ```json
   {
     "env": { "name": "dev" },
     "apiBaseUrl": { "dev": "http://localhost:3000/api" },
     "accounts": { "admin": { "username": "admin_user", "password": "admin_pass" } }
   }
   ```
4. **Start the server and client:**
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
   Wait until both are fully started and accessible (check the terminal output for successful startup messages).
5. **Run tests:**
   - **Interactive mode:**
     ```bash
     npx cypress open
     ```
     Opens the Cypress UI for selecting and running tests interactively.
   - **Headless mode:**
     ```bash
     npx cypress run
     ```
     Runs all tests in the terminal (useful for CI).
6. **Generate and view reports:**
   - **Mochawesome report:**
     - Run: `npm run run:report`
     - Open: [http://localhost:8080/mochawesome.html](http://localhost:8080/mochawesome.html)
   - **Allure report:**
     - Run: `npm run allure:generate-serve`
     - Open: [http://localhost:3000](http://localhost:3000)
   - **Report Types:**
     - *Mochawesome*: HTML report for test results and screenshots.
     - *Allure*: Advanced report with test steps, attachments, and analytics.

## Project Structure
The following folders and files organize the Cypress test framework:

```
cypress_template/
├── cypress.env.json            # Centralized environment variables for all tests
├── cypress_instructions.md     # Main instructions and best practices for contributors and AI agents
├── ai_instructions/            # Detailed documentation for custom commands, page objects, fixtures, and environment usage
│   ├── custom_commands.md      # Custom command documentation
│   ├── env_usage.md            # Environment usage instructions
│   ├── fixtures.md             # Fixture usage documentation
│   ├── page_objects.md         # Page object documentation
├── cypress/                    # Main Cypress test folder
│   ├── e2e/                    # Test specs and page objects
│   │   ├── pageObjects/        # Page object classes for UI workflows
│   │   └── tests/              # All Cypress spec files
│   ├── support/                # Custom commands and type definitions
│   └── fixtures/               # Mocked data and API responses
├── package.json                # Project dependencies and scripts
├── reporter-config.json        # Multi-reporter configuration for Cypress
├── tsconfig.json               # TypeScript config for the project
├── cypress.config.ts           # Main Cypress configuration file
```

**Folder Explanations:**
- `cypress.env.json`: Stores all environment variables, API URLs, test accounts, and feature flags.
- `ai_instructions/`: Contains documentation for contributors and AI agents on custom commands, page objects, fixtures, and environment usage.
- `cypress/`: Main folder for Cypress tests, support files, and fixtures.
- `reporter-config.json`: Configures advanced reporting for Cypress.

## Environment Data Usage
**Strict Rule:** Always declare environment data (API URLs, accounts, etc.) as constants at the top of your spec files. Never use `Cypress.env()` inline in tests.

**Example:**
```typescript
// At the top of your spec file
const env = Cypress.env('env');
const apiBaseUrl = Cypress.env('apiBaseUrl')[env];
const admin = Cypress.env('accounts').admin;
```

## Custom Commands
- All custom commands are documented and typed in [`cypress/support/customCommands.d.ts`](cypress/support/customCommands.d.ts).
- Usage examples are provided in JSDoc for each command.
- See [Custom Commands Documentation](ai_instructions/custom_commands.md) for details.

## Page Objects
- Page objects are documented in [`ai_instructions/page_objects.md`](ai_instructions/page_objects.md).
- Follow the conventions for selectors, workflows, and structure described there.

## Example Spec & Page Object

For new contributors, see the following files for a simple, well-commented example:
- [`cypress/e2e/tests/example.spec.ts`](cypress/e2e/tests/example.spec.ts): Example Cypress test spec
- [`cypress/e2e/pageObjects/ExamplePage.po.ts`](cypress/e2e/pageObjects/ExamplePage.po.ts): Example page object

These files demonstrate best practices for structuring tests and page objects in this project.

## Example Workflows
### Example 1: API Request and UI Assertion
```typescript
const apiBaseUrl = Cypress.env('apiBaseUrl')[Cypress.env('env')];
cy.apiRequest(apiBaseUrl + '/data', { method: 'GET' }).then((response) => {
   expect(response.status).to.eq(200);
   cy.assertElementCount('.data-row', response.body.length);
});
```

### Example 2: Run and View Allure Report
```bash
# Run tests, generate, and serve Allure report
npm run allure:run-serve
# Open http://localhost:3000 in your browser to view the report
```

## Troubleshooting
- **Missing dependencies:** Run `npm install` again.
- **Port already in use:** Use `npm run kill:port` to free up port 8080.
- **Tests not found:** Make sure your spec files are in `cypress/e2e/tests/` and use `.spec.ts` extension.
- **Environment variables not loaded:** Double-check your `cypress.env.json` format and values.
- **More help:** See [Environment Usage Instructions](ai_instructions/env_usage.md) and [Fixtures Documentation](ai_instructions/fixtures.md).

## Changelog
- 2025-08-18: Added TOC, extension instructions, file links, conventions, workflows, changelog, and AI agent reminder.

## AI Agent Instructions
- AI agents (Copilot, MCP, etc.) must read all Markdown instruction files before making any code changes or generating new commands.
- Always follow the latest conventions and workflows described in this documentation.

## Contribution Templates

This project uses GitHub issue and pull request templates for consistent and clear contributions:
- **Bug Reports:** Use the bug report template to describe problems, steps to reproduce, and environment details.
- **Feature Requests:** Use the feature request template to suggest new ideas or improvements.
- **Pull Requests:** Use the pull request template to describe your changes, link issues, and confirm tests/documentation updates.

Templates are located in `.github/ISSUE_TEMPLATE/` and `.github/PULL_REQUEST_TEMPLATE.md`.

## Advanced Reporting

### Mochawesome Customization
- Edit `reporter-config.json` to change output directory, report title, and options:
  ```json
  {
    "reporterEnabled": "spec, mocha-junit-reporter, mochawesome",
    "mochawesomeReporterOptions": {
      "reportDir": "cypress/results/mochawesome",
      "overwrite": false,
      "html": true,
      "json": true,
      "reportTitle": "Custom Project Report",
      "charts": true
    }
  }
  ```
- See [Mochawesome docs](https://github.com/mochawesome/mochawesome) for more options.

### Allure Customization
- Allure results are generated in `allure-results` and served from `allure-report`.
- You can add custom steps, attachments, and labels in your tests using Allure commands:
  ```typescript
  cy.allureStep('Custom step description');
  cy.allureDescription('Test description for Allure report');
  ```
- For advanced configuration, see [Allure Cypress docs](https://github.com/Shelex/cypress-allure-plugin).
- To customize the report UI, refer to [Allure documentation](https://docs.qameta.io/allure/).