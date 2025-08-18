---
title: Custom commands file.
author: Phillip Onfri
description: Co-pilot instructions for our kitchen sink example web site.
---


# Table of Contents
- [Overview](#custom-commands-documentation)
- [How to Use](#how-to-use)
- [How to Extend](#how-to-extend)
- [File Links](#file-links)
- [Conventions & Best Practices](#conventions--best-practices)
- [Custom Commands](#custom-commands)
- [Example Workflows](#example-workflows)
- [Changelog](#changelog)
- [AI Agent Instructions](#ai-agent-instructions)

This file documents all custom Cypress commands used in this project. For each command, include its purpose, parameters, return type, and usage example.

## How to Use
- Reference this file for available custom commands and their documentation.
- Add new commands here when extending `cypress/support/commands.ts`.

### cy.callSomething
- **Purpose:** Log in as admin and verify dashboard loads.
- **Parameters:** `message: string`
cy.callSomething('Log in as admin and verify dashboard loads').then((response) => {
  // Assert that the response includes cy.visit
  expect(response).to.include('cy.visit');
});
```
- **Best Practice:** Use for admin login workflows to keep tests DRY and readable.


- **Purpose:** Make an authenticated API request and handle the response.
- **Parameters:** `endpoint: string`, `options: object`
  // Assert response status and body
  expect(response.status).to.eq(200);
  expect(response.body).to.have.property('data');
});
```
- **Best Practice:** Always check for error responses and handle them in your tests.


- **Purpose:** Scrolls the page just below the visible fold (viewport).
- **Parameters:** None
cy.scrollBelowFold();
```
- **Best Practice:** Use for visual regression or lazy-loaded content tests.


- **Purpose:** Scrolls to the end (bottom) of the page.
- **Parameters:** None
cy.scrollToEnd();
```
- **Best Practice:** Use for infinite scroll or footer visibility tests.

Add more custom commands below as you create them.
---

- **Purpose:** Waits for an element to become visible.
- **Parameters:** `selector: string`, `timeout?: number`
```

---

- **Purpose:** Waits for an element to become enabled.
- **Parameters:** `selector: string`, `timeout?: number`
```

---

- **Purpose:** Asserts that an element does not exist in the DOM.
- **Parameters:** `selector: string`
```

---

- **Purpose:** Asserts that an element’s text contains a substring.
- **Parameters:** `selector: string`, `substring: string`
```

---

- **Purpose:** Waits for a specific network request to complete.
- **Parameters:** `url: string | RegExp`, `method?: string`
```

---

- **Purpose:** Asserts that there are no errors in the browser console.
- **Parameters:** None
```

---

- **Purpose:** Saves local storage for later restoration.
- **Parameters:** None
```

---

- **Purpose:** Restores local storage from a previously saved state.
- **Parameters:** None
```

---

- **Purpose:** Waits for a file to be downloaded in the default downloads folder.
- **Parameters:** `filename: string`, `timeout?: number`
```

---

- **Purpose:** Waits for the page to be fully loaded and all images to be present in the DOM before continuing. Does not use cy.wait directly.
- **Parameters:** None
```

---

- **Purpose:** Scrolls the page to the top. Useful for resetting scroll position before or after tests.
- **Parameters:** None
```

---

- Always document new custom commands here and in `customCommands.d.ts`.
- Prefer custom commands for reusable workflows.

- When creating custom Cypress commands, always document the function signature, parameters, return type, and usage example in `customCommands.d.ts`.
- Only add a brief comment in `commands.ts` for each custom command implementation.
---
