---
title: Custom commands file.
author: Phillip Onfri
date: 2025-08-17
description: Co-pilot instructions for our kitchen sink example web site.
---


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
// Call the custom command and check the response
cy.callSomething('Log in as admin and verify dashboard loads').then((response) => {
  // Assert that the response includes cy.visit
  expect(response).to.include('cy.visit');
});
```
- **Best Practice:** Use for admin login workflows to keep tests DRY and readable.

---

### cy.apiRequest
- **Purpose:** Make an authenticated API request and handle the response.
- **Parameters:** `endpoint: string`, `options: object`
- **Returns:** Cypress chainable (response)
- **Usage:**
```typescript
cy.apiRequest('/api/data', { method: 'GET' }).then((response) => {
  // Assert response status and body
  expect(response.status).to.eq(200);
  expect(response.body).to.have.property('data');
});
```
- **Best Practice:** Always check for error responses and handle them in your tests.

---

### cy.scrollBelowFold
- **Purpose:** Scrolls the page just below the visible fold (viewport).
- **Parameters:** None
- **Returns:** Cypress chainable (void)
- **Usage:**
```typescript
// Scroll just below the fold
cy.scrollBelowFold();
```
- **Best Practice:** Use for visual regression or lazy-loaded content tests.

---

### cy.scrollToEnd
- **Purpose:** Scrolls to the end (bottom) of the page.
- **Parameters:** None
- **Returns:** Cypress chainable (void)
- **Usage:**
```typescript
// Scroll to the end of the page
cy.scrollToEnd();
```
- **Best Practice:** Use for infinite scroll or footer visibility tests.

---
Add more custom commands below as you create them.

---

### cy.waitForPageReady
- **Purpose:** Waits for the page to be fully loaded and all images to be present in the DOM before continuing. Does not use cy.wait directly.
- **Parameters:** None
- **Returns:** Cypress chainable (void)
- **Usage:**
```typescript
cy.waitForPageReady();
```

---

### cy.scrollToTop
- **Purpose:** Scrolls the page to the top. Useful for resetting scroll position before or after tests.
- **Parameters:** None
- **Returns:** Cypress chainable (void)
- **Usage:**
```typescript
cy.scrollToTop();
```

---

## General Guidelines
- Always document new custom commands here and in `customCommands.d.ts`.
- Prefer custom commands for reusable workflows.
- Add comments to code examples for clarity.
- Keep command names descriptive and consistent.
- Document API response handling and error checks for all API-related commands.
