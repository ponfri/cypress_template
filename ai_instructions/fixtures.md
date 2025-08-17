---
title: Fixtures file for mock up data.
author: Phillip Onfri
date: 2025-08-17
description: Co-pilot instructions for our kitchen sink example web site.
---

# Fixtures Documentation

This file documents all fixture files in `cypress/fixtures/`. For each fixture, include its purpose, structure, and usage examples.

## How to Use
- Reference this file for available fixtures and their structure.
- Add new fixtures here as you create them for tests.

## Example

### example.json
- **Purpose:** Provides sample data for basic tests.
- **Structure:**
```json
{
  "name": "Test User",
  "email": "test@example.com"
}
```
- **Usage:**
```typescript
// Load fixture data in a test
cy.fixture('example.json').then((data) => {
  // Assert that the fixture data has a 'name' property
  expect(data).to.have.property('name');
});
```
- **Note:** Update or extend this fixture as test requirements change.

---

## Advanced Fixture Usage
- **Intercept API with fixture:**
```typescript
cy.intercept('GET', '**/comments/*', { fixture: 'example.json' }).as('getComment');
cy.wait('@getComment').its('response.body')
  .should('have.property', 'name')
  .and('include', 'Using fixtures to represent data');
```
- **Compare fixture with required data:**
```typescript
const requiredExample = require('../../fixtures/example');
cy.fixture('example.json').as('example');
cy.wrap({}).then(function () {
  expect(this.example).to.deep.equal(requiredExample);
});
```
- **Dynamic updates with fixtures:**
```typescript
cy.fixture('example.json').then((data) => {
  const updatedData = { ...data, name: 'Updated User' };
  cy.writeFile('cypress/fixtures/example.json', updatedData);
});
```

---
Add more fixture documentation below as you create them.

---

## General Guidelines
- Keep fixtures organized and up to date.
- Add comments to code examples for clarity.
- Document new fixtures here and in the `cypress/fixtures/` folder.
- Document advanced usage for intercepts and dynamic comparisons.
