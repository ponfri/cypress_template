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

## Best Practices
- Never hardcode API URLs, credentials, or environment variables in test files.
- Always update `cypress.env.json` when new data is needed for tests.
- Use fixtures for large or complex test data, but keep environment and secrets in `cypress.env.json`.
