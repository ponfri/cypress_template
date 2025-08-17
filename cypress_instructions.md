---
title: Main instructions file.
author: Phillip Onfri
date: 2025-08-17
description: Co-pilot instructions for our kitchen sink example web site.
---

# Cypress Project Instructions for GitHub Copilot

## Mandatory TypeScript Usage
*Purpose: Ensure all Cypress code is strictly typed and maintainable.*
- **All Cypress test code, page objects, custom commands, and support files must be written in TypeScript (`.ts` or `.po.ts`).**
- **Do not use JavaScript files (`.js`) for any new or updated code.**
- **Type all function parameters, return values, and class properties.**
- **Add or update TypeScript definitions for all custom commands in `customCommands.d.ts`.**
- **Use strict typing and avoid use of `any` unless absolutely necessary.**
- **Update existing files to TypeScript if you find legacy JavaScript.**

## Quick Reference
- [Custom Commands Documentation](./ai_instructions/custom_commands.md)
- [Page Objects Documentation](./ai_instructions/page_objects.md)
- [Fixtures Documentation](./ai_instructions/fixtures.md)


---

## Table of Contents

- [Mandatory TypeScript Usage](#mandatory-typescript-usage)
- [Quick Reference](#quick-reference)
  - [Custom Commands Documentation](./ai_instructions/custom_commands.md)
  - [Page Objects Documentation](./ai_instructions/page_objects.md)
  - [Fixtures Documentation](./ai_instructions/fixtures.md)
- [Page Object Usage Policy](#page-object-usage-policy)
- [Formatting Requirements](#formatting-requirements)
- [Example Test Structure](#example-test-structure)
- [Custom Commands Usage Policy](#custom-commands-usage-policy)
- [Example Custom Command Usage](#example-custom-command-usage)
- [Fixtures Usage Policy](#fixtures-usage-policy)
- [Example Fixture Usage](#example-fixture-usage)
- [General Guidelines](#general-guidelines)
- [Test Naming and Tagging](#test-naming-and-tagging)
- [Assertions and Reliability](#assertions-and-reliability)

---

This file defines mandatory conventions for all Cypress test code in this project. All contributors and Copilot must follow these rules for consistency, maintainability, and clarity.



## Page Object Usage Policy
*Purpose: Ensure all page object usage is consistent, maintainable, and easy to refactor.*
- **Page object instantiation location (MANDATORY)**: You must instantiate all page objects (e.g., `const utilitiesPage = new UtilitiesPage();`) at the top of the test file, directly under the import statements. **Never instantiate page objects inside test blocks, functions, or within any describe/it hooks.** This rule is strictly enforced for maintainability and clarity. If you violate this rule, your code will be rejected or refactored.

**Navigation (MANDATORY)**: Always use menu navigation or page object workflow methods to move between pages (e.g., clicking navigation links/buttons). Only use direct `visit()` calls if explicitly specified in the test requirements. Do not use `cy.visit()` or pageObject.visit() for navigation unless instructed.




## Formatting Requirements
- **Import statements**: Do not add blank lines between import statements. Only add a single blank line above the first import and below the last import. This keeps the import block compact and readable.

## Example Test Structure

```typescript
import { LandingPage } from '../pageObjects/LandingPage.po';

const landingPage = new LandingPage('/'); // Instantiate page object at top

// All tests must be inside a describe block. Never place test code outside of describe.
describe('Landing Page Tests', () => {
  beforeEach(() => {
    landingPage.visit(); // Visit the landing page before each test
  });

  it('should display the Kitchen Sink header', () => {
    // Assert that the header is visible
    landingPage.kitchenSinkHeader.should('be.visible');
  });

  it('should navigate to the Utilities page using the menu', () => {
    // Use page object method to navigate
    landingPage.clickNavUtilities();
    // Use UtilitiesPage object for further actions
  });
});
```



## Custom Commands Usage Policy
*Purpose: Standardize the use and extension of custom Cypress commands for reusable workflows.*

- **Always use custom commands**: When writing or generating Cypress tests for this project, use custom commands defined in `cypress/support/commands.ts` whenever they provide relevant functionality.
- **Reference documentation**: For every custom command, refer to its documentation in `cypress/support/customCommands.d.ts` to understand its purpose, parameters, and return type.
- **Do not duplicate logic**: If a custom command exists for a workflow or action, use it instead of re-implementing the logic in the test or page object.
- **Type safety**: Use the documented types and signatures from `customCommands.d.ts` for all custom command usages in tests and page objects.
- **Extending commands**: If a new workflow or action is needed, add a custom command in `commands.ts` and document it in `customCommands.d.ts` before using it in tests.

## Example Custom Command Usage

```typescript
// Usage in a test file
// Call a custom command and check the response
cy.callSomething('Log in as admin and verify dashboard loads').then((response) => {
  // Assert that the response includes cy.visit
  expect(response).to.include('cy.visit');
});
```




## Fixtures Usage Policy
*Purpose: Organize and document the use of fixture data for reliable, maintainable tests.*
- **Always use the fixtures folder for mocked data**: When writing or generating Cypress tests for this project, use files in `cypress/fixtures/` for any mocked data, API responses, or test data.
- **Reference fixtures in tests**: Always use `cy.fixture('filename')` to load fixture data at the start of your test, and reference it in your tests for assertions, intercepts, or setup. Never instantiate or load fixtures inside test blocks or functions unless required for dynamic data.
- **Keep fixtures organized**: Store JSON, text, or other fixture files in the `cypress/fixtures/` folder and name them clearly according to their purpose. Do not place fixture files in any other location.
- **Update fixtures as needed**: If a test requires new or updated mocked data, add or modify the relevant fixture file before using it in the test.

## Example Fixture Usage

```typescript
// Load fixture data in a test
cy.fixture('example.json').then((data) => {
  // Assert that the fixture data has a 'name' property
  expect(data).to.have.property('name');
});

// Use fixture in an intercept
cy.intercept('GET', '/api/data', { fixture: 'example.json' }).as('getData'); // Mock API response with fixture
```


---
**MANDATORY: All new tests must use `it.only` during development.**

- When creating a new test, always use the following format. Use `it.only` so only the new test runs during development. Remove `.only` when running the full suite or before committing code.
- If you do not use `it.only` for new tests, your code will be rejected or refactored. This is strictly enforced to prevent accidental execution of unrelated tests and to focus on the test under development.

- **Test comments**: Always add a comment for each statement in your test to explain what is being done in each section. This improves readability and maintainability for all contributors.

- **Test spacing**: Always insert a blank line above each new test for readability and consistency.

```typescript
it.only('[ ] ', { tags: ['@smoke', '@template'] }, () => {
  // Add test steps here
});
```

Do not add any text between the brackets `[ ]` in the test name. Add your test steps inside the block as needed.

*Purpose: Enforce a clear, consistent test structure and make it easy to focus on new tests during development.*


## Test Naming and Tagging
- **File Naming:** Use `.spec.ts` for all test files. Name files according to the feature or page tested (e.g., `login.spec.ts`, `files.spec.ts`).
- **Test Naming:** Use descriptive names for `describe` and `it` blocks. Include tags for smoke, regression, etc.
- **Example:**
```typescript
it.only('[Login] should allow admin to log in', { tags: ['@smoke', '@login'] }, () => {
  // Test steps here
});
```


## Assertions and Reliability
- Prefer `.should('deep.equal', ...)` for object comparisons.
- Use `.should('have.property', ...)` for property checks.
- Always assert on network responses and UI changes.
- Use `cy.waitForPageReady()` before assertions that depend on page load.


## Reference
- See `ai_instructions/page_objects.md` for workflow method documentation and advanced usage.
- See `ai_instructions/custom_commands.md` for API command usage and error handling.
- See `ai_instructions/fixtures.md` for advanced fixture usage and intercepts.


## General Guidelines
*Purpose: Keep the codebase maintainable, up to date, and easy for all contributors to understand.*

- Keep page objects and custom commands up to date with the site structure and workflows.
- Prefer workflow methods for multi-step actions.
- Document any new page object or custom command methods in their class or .d.ts file.
- If a test cannot be written using page objects or custom commands, update them first.

---

## Code Reuse Policy for Copilot

- **Always reference existing test files and code before generating new tests or functions.**
- **Do not duplicate logic or reinvent workflows that already exist in the project.**
- **When implementing new features or tests, reuse and extend existing page objects, custom commands, and test patterns.**
- **Only write new code for functionality or scenarios that are not already covered.**
- **If unsure, search the codebase for similar tests or utilities and build upon them.**

---

**Copilot: Always follow these instructions when generating Cypress tests for this project.**
