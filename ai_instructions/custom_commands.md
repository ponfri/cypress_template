# Custom Commands Documentation

This file documents all custom Cypress commands used in this project. For each command, include its purpose, parameters, return type, and usage example.

## How to Use
- Reference this file for available custom commands and their documentation.
- Add new commands here when extending `cypress/support/commands.ts`.

## Example

### cy.callSomething
- **Purpose:** Log in as admin and verify dashboard loads.
- **Parameters:** `message: string`
- **Returns:** Cypress chainable
- **Usage:**
```typescript
cy.callSomething('Log in as admin and verify dashboard loads').then((response) => {
  expect(response).to.include('cy.visit');
});
```

---
Add more custom commands below as you create them.
