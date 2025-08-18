---
title: Page objects file.
author: Phillip Onfri
date: 2025-08-17
description: Co-pilot instructions for our kitchen sink example web site.
---


# Page Objects Documentation
## Page Object File Structure and Conventions
**Important:**
- Do NOT use `.contains(text)` or hardcoded text in locators. Page objects should only use robust selectors (id, class, tag, or data-cy).
- Assertions about text content must be performed in your test code, not in the page object.
- Example (bad):
	```typescript
	paragraph_utilities: () => cy.get("p").contains("Some text") // ❌ Avoid this!
	```
- Example (good):
	```typescript
	paragraph_utilities: () => cy.get("p.utilities, #utilities p, .utilities-paragraph") // ✅ Use robust selector
	// In your test:
	testPage.paragraph_utilities().should('contain.text', 'Expected text');
	```

When creating a new page object file, follow this pattern for consistency and maintainability:

- **Class Naming:** Use PascalCase for the class name, ending with `Page` (e.g., `TestPage`).
- **Inheritance:** Extend from `BasePage` to inherit navigation and shared workflow methods.
- **Private Locators:** Define a private `#elements` object containing all selectors as arrow functions. Use `cy.get()` with id, class, or tag. Avoid `cy.contains()` unless necessary.
- **Public Getters:** For each locator, add a public getter method to expose the element for assertions or custom commands.
- **Interaction Methods:** For each locator, add an interaction method (e.g., `clickBanner()`, `typeInputUsername(text)`) that performs a Cypress action on the element.
- **Workflow Methods:** For each interaction method, add a workflow method (e.g., `workflowClickBanner()`) that calls the interaction method and returns `this` for chaining. Each workflow method should perform only one action.
- **No Navigation Locators:** Navigation and workflow methods should be handled in `BasePage`.

### Example Pattern
```typescript
import { BasePage } from "./BasePage.po";

export default class ExamplePage extends BasePage {
	#elements = {
		button_login: () => cy.get("#login"),
		input_username: () => cy.get("#username"),
		// ...more locators
	};

	get ButtonLogin() { return this.#elements.button_login(); }
	get InputUsername() { return this.#elements.input_username(); }
	// ...more getters

	clickButtonLogin() { return this.#elements.button_login().click(); }
	typeInputUsername(text: string) { return this.#elements.input_username().type(text); }
	// ...more interaction methods

	workflowClickButtonLogin() { this.clickButtonLogin(); return this; }
	workflowTypeInputUsername(text: string) { this.typeInputUsername(text); return this; }
	// ...more workflow methods
}
```

### Key Points
- Each locator gets a getter, interaction method, and workflow method.
- Workflow methods are single-action and chainable.
- Use only robust selectors (id/class/tag/data-cy).
- Navigation is handled in the base page object.

Document new page objects in this file, following the above conventions.

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
