---
title: Page objects file.
author: Phillip Onfri
date: 2025-08-17
description: Co-pilot instructions for our kitchen sink example web site.
---


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
const landingPage = new LandingPage('/'); // Instantiate page object
landingPage.visit(); // Visit the landing page
landingPage.clickLinkUtilities(); // Use workflow method to navigate
```
- **Note:** Prefer workflow methods for navigation and multi-step actions.

### FilesPage
- **Purpose:** Interactions for the files command page.
- **Main Elements:** Fixture button, files header, command links
- **Workflow Methods:** `clickFixtureBtn()`, `clickGetCommentButton()`, `clickCyReadFileCommandLink()`, `writeFileAndAssertFixture(filePath, data)`, `interceptGetCommentWithFixture()`, `loadFixtureAndCompareWithRequire()`, `readFileAndAssertObject(filePath)`
- **Usage:**
```typescript
const filesPage = new FilesPage();
filesPage.clickFixtureBtn(); // Clicks the fixture button
filesPage.writeFileAndAssertFixture('cypress/fixtures/test.json', { foo: 'bar' }); // Writes and asserts fixture
```
- **Best Practice:** Use workflow methods for multi-step actions and assertions.

### UtilitiesPage
- **Purpose:** Interactions for the utilities command page.
- **Main Elements:** Utilities header, command links
- **Workflow Methods:** `clickUtilityJqueryLiFirst()`, `clickUtilityBlobImg()`, `clickCyLodashCommandLink()`, `assertLodashChain(responseBody)`, `assertJqueryLiActive()`, `assertBlobImageClick(dataUrl)`, `assertMinimatchPattern(path, pattern, options)`, `assertPromiseResolves(waitFn, expected)`
- **Usage:**
```typescript
const utilitiesPage = new UtilitiesPage();
utilitiesPage.clickCyLodashCommandLink(); // Clicks Lodash command link
utilitiesPage.assertLodashChain(responseBody); // Asserts Lodash chain result
```
- **Best Practice:** Use assertion workflow methods for complex UI and data checks.

---
Add more page objects below as you create them.

---

## General Guidelines
- Keep page object methods atomic and focused.
- Prefer workflow methods for multi-step actions.
- Document new page objects and methods here and in their `.po.ts` file.
- Add comments to code examples for clarity.
- Document advanced workflow methods for assertions and intercepts.
