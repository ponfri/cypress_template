# Cypress Environment Usage Instructions

## Always Use Centralized Environment Data

- **API URLs:** Always reference API endpoints from `cypress.env.json` using `Cypress.env('apiBaseUrl')[Cypress.env('env')]`.
- **Login Accounts:** Use test account credentials from `Cypress.env('accounts')` for all authentication and role-based tests.
- **Feature Flags & Other Variables:** Access feature flags and other environment variables from `cypress.env.json` using `Cypress.env()`.

## Copilot Guidance

- When writing or generating tests, always check `cypress.env.json` for:
  - API URLs
  - Login accounts
  - Feature flags
  - Any other environment-specific data
- If required data (e.g., a new account type or API endpoint) does not exist in `cypress.env.json`, suggest adding it to the file for consistency and maintainability.

## Example Usage

```js
// Get current environment
const env = Cypress.env('env');

// Get API base URL
const apiBaseUrl = Cypress.env('apiBaseUrl')[env];

// Get admin account credentials
const admin = Cypress.env('accounts').admin;
cy.login(admin.username, admin.password);

// Use feature flag
if (Cypress.env('featureFlag')) {
  // Run feature-specific tests
}
```

## Strict Rule: Declare Environment Data at the Top of Spec Files

- Always declare environment data (such as API URLs, test accounts, feature flags, etc.) as constants at the top of your spec file.
- Never pass `Cypress.env()` values directly into custom commands or tests inline.
- If multiple tests use the same environment data, update the constant at the top—do not duplicate or hardcode in each test.

**Example:**
```js
// At the top of your spec file
const apiBaseUrl = Cypress.env('apiBaseUrl')[Cypress.env('env')];
const adminAccount = Cypress.env('accounts').admin;

// In your tests
it('should use the correct API base URL', () => {
  cy.request(apiBaseUrl + '/endpoint');
});

it('should login as admin', () => {
  cy.login(adminAccount.username, adminAccount.password);
});
```

**Rationale:**
- Centralizes environment configuration for maintainability.
- Makes it easy to update environment data for all tests in a spec file.
- Prevents errors and duplication.

**Copilot Guidance:**
- Always suggest using constants for environment data at the top of the spec file.
- If a test uses environment data inline, recommend refactoring to use a top-level constant.

## Best Practices
- Never hardcode API URLs, credentials, or environment variables in test files.
- Always update `cypress.env.json` when new data is needed for tests.
- Use fixtures for large or complex test data, but keep environment and secrets in `cypress.env.json`.
