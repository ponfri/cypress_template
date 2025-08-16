# Cypress Project Instructions for GitHub Copilot

## Page Object Usage Policy
- **Page object instantiation location**: Always instantiate page objects (e.g., `const utilitiesPage = new UtilitiesPage();`) at the top of the test file, directly under the import statements. Do not instantiate page objects inside test blocks or functions.

- **Always use page objects**: When writing or generating Cypress tests for this project, always use the page object classes in `cypress/e2e/pageObjects/*.po.ts` for all element interactions, navigation, and assertions.
- **Do not use raw selectors**: Avoid using raw selectors (e.g., `cy.get`, `cy.contains`, etc.) directly in test files. Instead, use the public getters and interaction methods provided by the page object classes.
- **Import convention**: Import page objects at the top of each test file. Use the correct `.po.ts` filename and instantiate with any required constructor arguments.
- **Navigation**: Use navigation and workflow methods from the page objects for moving between pages or performing common actions.
- **Element interaction**: Use interaction methods (e.g., `clickButton()`, `typeInField()`) from the page objects. If a new interaction is needed, add it to the relevant page object class first.
- **Assertions**: Use assertion methods from page objects if available. If not, add them to the page object before using in tests.
- **Extending page objects**: If a test requires a new element or workflow, update the corresponding page object class to include a getter or method for it before using in the test.

## Example Test Structure

```typescript
import { LandingPage } from '../pageObjects/LandingPage.po';

const landingPage = new LandingPage('/');

describe('Landing Page Tests', () => {
  beforeEach(() => {
    landingPage.visit();
  });

  it('should display the Kitchen Sink header', () => {
    landingPage.kitchenSinkHeader.should('be.visible');
  });

  it('should navigate to the Utilities page using the menu', () => {
    landingPage.clickNavUtilities();
    // Use UtilitiesPage object for further actions
  });
});
```


## Custom Commands Usage Policy

- **Always use custom commands**: When writing or generating Cypress tests for this project, use custom commands defined in `cypress/support/commands.ts` whenever they provide relevant functionality.
- **Reference documentation**: For every custom command, refer to its documentation in `cypress/support/customCommands.d.ts` to understand its purpose, parameters, and return type.
- **Do not duplicate logic**: If a custom command exists for a workflow or action, use it instead of re-implementing the logic in the test or page object.
- **Type safety**: Use the documented types and signatures from `customCommands.d.ts` for all custom command usages in tests and page objects.
- **Extending commands**: If a new workflow or action is needed, add a custom command in `commands.ts` and document it in `customCommands.d.ts` before using it in tests.

## Example Custom Command Usage

```typescript
// Usage in a test file
cy.callSomething('Log in as admin and verify dashboard loads').then((response) => {
  expect(response).to.include('cy.visit');
});
```



## Fixtures Usage Policy

- **Always use the fixtures folder for mocked data**: When writing or generating Cypress tests for this project, use files in `cypress/fixtures/` for any mocked data, API responses, or test data.
- **Reference fixtures in tests**: Use `cy.fixture('filename')` to load fixture data, and reference it in your tests for assertions, intercepts, or setup.
- **Keep fixtures organized**: Store JSON, text, or other fixture files in the `cypress/fixtures/` folder and name them clearly according to their purpose.
- **Update fixtures as needed**: If a test requires new or updated mocked data, add or modify the relevant fixture file before using it in the test.

## Example Fixture Usage

```typescript
// Load fixture data in a test
cy.fixture('example.json').then((data) => {
  expect(data).to.have.property('name');
});

// Use fixture in an intercept
cy.intercept('GET', '/api/data', { fixture: 'example.json' }).as('getData');
```


- **Test template**: When creating a new test, always use the following format:

```typescript
it.only('[ ] ', { tags: ['@smoke', '@template'] }, () => {
  // Add test steps here
});
```

Do not add any text between the brackets `[ ]` in the test name. Add your test steps inside the block as needed.

## General Guidelines

- Keep page objects and custom commands up to date with the site structure and workflows.
- Prefer workflow methods for multi-step actions.
- Document any new page object or custom command methods in their class or .d.ts file.
- If a test cannot be written using page objects or custom commands, update them first.

---

**Copilot: Always follow these instructions when generating Cypress tests for this project.**
