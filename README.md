
# Cypress Template Project

## Table of Contents
- [Overview](#cypress-template-project)
- [Key Features](#key-features)
- [Getting Started](#getting-started)
- [Environment Data Usage](#environment-data-usage)
- [Custom Commands](#custom-commands)
- [Page Objects](#page-objects)
- [Contributing](#contributing)
- [Documentation](#documentation)
- [Project Structure](#project-structure)
- [How to Extend](#how-to-extend)
- [Conventions & Best Practices](#conventions--best-practices)
- [Example Workflows](#example-workflows)
- [Changelog](#changelog)
- [AI Agent Instructions](#ai-agent-instructions)


This project is a robust Cypress automation framework for testing a streaming Angular app across multiple environments (dev, qa, prod) and device types (including TVs).

## Key Features
- **Custom Commands:** Extensive set of reusable commands for selectors, assertions, API mocking, payload retrieval, storage, style/class checks, interactability, network helpers, performance, and more.
- **Page Objects:** Modular page object files for maintainable UI interaction.
- **Centralized Environment Config:** All API URLs, test accounts, and environment variables are managed in `cypress.env.json`.
- **Best Practices Documentation:** See `/ai_instructions` for Copilot and contributor guidance.
- **Angular/TV Navigation Support:** Custom commands and strategies for non-scrollable, focus-driven navigation.
- **Performance Testing:** Built-in commands for API response time, page load, and resource load checks.

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure environment data in `cypress.env.json` (API URLs, accounts, etc.).
3. Run tests:
   ```bash
   npx cypress open
   # or
   npx cypress run
   ```

## Environment Data Usage

- **Strict Rule:** Always declare environment data (API URLs, accounts, etc.) as constants at the top of your spec files. Never use `Cypress.env()` inline in tests.

## Custom Commands
- All custom commands are documented and typed in [`cypress/support/customCommands.d.ts`](cypress/support/customCommands.d.ts).
- Usage examples are provided in JSDoc for each command.

cypress_template/
├── cypress.env.json
├── cypress_instructions.md
├── ai_instructions/
│   ├── custom_commands.md
│   ├── env_usage.md
├── cypress/
│   ├── e2e/
│   │   ├── pageObjects/
│   │   └── tests/
│   ├── support/
│   │   ├── commands.ts
│   └── fixtures/
├── package.json

## How to Extend
- When adding a new feature, command, or page object:
   1. Implement in the appropriate file (see File Links below).
   2. Add documentation and usage examples in the relevant MD file.
   3. Update type definitions if needed.
   4. Keep documentation and code in sync.

## File Links
- [`cypress/support/commands.ts`](cypress/support/commands.ts): Custom command implementations
- [`cypress/support/customCommands.d.ts`](cypress/support/customCommands.d.ts): Type definitions
- [`ai_instructions/custom_commands.md`](ai_instructions/custom_commands.md): Custom command documentation
- [`ai_instructions/env_usage.md`](ai_instructions/env_usage.md): Environment usage instructions
- [`ai_instructions/page_objects.md`](ai_instructions/page_objects.md): Page object documentation
- [`ai_instructions/fixtures.md`](ai_instructions/fixtures.md): Fixture documentation

## Conventions & Best Practices
- Use descriptive, consistent names for commands, page objects, and fixtures.
- Centralize environment data in `cypress.env.json`.
- Prefer custom commands and page objects for reusable workflows.
- Document all new features and changes in Markdown files.
- Keep all instructions up to date.

## Example Workflows
### Example: API Request and UI Assertion
```typescript
const apiBaseUrl = Cypress.env('apiBaseUrl')[Cypress.env('env')];
cy.apiRequest(apiBaseUrl + '/data', { method: 'GET' }).then((response) => {
   expect(response.status).to.eq(200);
   cy.assertElementCount('.data-row', response.body.length);
});
```

## Changelog
- 2025-08-18: Added TOC, extension instructions, file links, conventions, workflows, changelog, and AI agent reminder.

## AI Agent Instructions
- AI agents (Copilot, MCP, etc.) must read all Markdown instruction files before making any code changes or generating new commands.
- Always follow the latest conventions and workflows described in this documentation.