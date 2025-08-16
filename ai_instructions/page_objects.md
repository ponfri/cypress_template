# Page Objects Documentation

This file documents all page objects in `cypress/e2e/pageObjects/*.po.ts`. For each page object, include its purpose, main elements, workflow methods, and usage examples.

## How to Use
- Reference this file for available page objects and their API.
- Add new page objects and methods here as you extend the test suite.

## Example

### LandingPage
- **Purpose:** Encapsulates all interactions for the landing page.
- **Main Elements:** Header, SubHeader, Navigation links
- **Workflow Methods:** `visit()`, `clickLinkUtilities()`
- **Usage:**
```typescript
const landingPage = new LandingPage('/');
landingPage.visit();
landingPage.clickLinkUtilities();
```

### UtilitiesPage
- **Purpose:** Encapsulates all interactions for the utilities page.
- **Main Elements:** Utilities header, command links
- **Workflow Methods:** `utilitiesHeader`, `clickCyLodashCommandLink()`
- **Usage:**
```typescript
const utilitiesPage = new UtilitiesPage();
utilitiesPage.utilitiesHeader.should('be.visible');
```

---
Add more page objects below as you create them.
