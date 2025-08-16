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

### cy.scrollBelowFold
- **Purpose:** Scrolls the page just below the visible fold (viewport).
- **Parameters:** None
- **Returns:** Cypress chainable (void)
- **Usage:**
```typescript
cy.scrollBelowFold();
```

---

### cy.scrollToEnd
- **Purpose:** Scrolls to the end (bottom) of the page.
- **Parameters:** None
- **Returns:** Cypress chainable (void)
- **Usage:**
```typescript
cy.scrollToEnd();
```

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
