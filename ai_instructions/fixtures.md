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
cy.fixture('example.json').then((data) => {
  expect(data).to.have.property('name');
});
```

---
Add more fixture documentation below as you create them.
