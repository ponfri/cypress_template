# Contributing to Cypress Template Project

Thank you for your interest in contributing! This project is designed for maintainable, scalable Cypress automation for a streaming Angular app.

## How to Contribute
- **Read the Documentation:** Start with [`README.md`](README.md), [`cypress_instructions.md`](cypress_instructions.md), and all files in `/ai_instructions`.
- **Follow Environment Data Rules:** Always declare environment data (API URLs, accounts, etc.) as constants at the top of your spec files. Never use `Cypress.env()` inline in tests. See [`ai_instructions/env_usage.md`](ai_instructions/env_usage.md).
- **Use Custom Commands:** Prefer custom commands over raw Cypress commands for selectors, assertions, API, performance, and navigation. See [`cypress/support/customCommands.d.ts`](cypress/support/customCommands.d.ts) for usage and examples.
- **Page Objects:** Use and extend page objects in `cypress/e2e/pageObjects/` for UI interaction.
- **Performance Testing:** Use built-in commands for API response time, page load, and resource load checks.
- **Angular/TV Navigation:** Use focus/navigation helpers for non-scrollable UI.
- **Linting & Formatting:** Follow project linting and formatting rules (see `package.json` and config files).
- **Add Documentation:** Update relevant `.md` files and JSDoc when adding new features or commands.

## Pull Request Checklist
- [ ] All new code is covered by tests.
- [ ] Custom commands are documented and typed in `customCommands.d.ts`.
- [ ] Environment data is updated in `cypress.env.json` if needed.
- [ ] No hardcoded environment data in tests.
- [ ] Page objects are used for UI logic.
- [ ] Documentation is updated.

## Getting Help
- Review the documentation in `/ai_instructions` and `/cypress/support`.
- Ask questions in project discussions or issues.

---

By following these guidelines, you help keep the project maintainable, scalable, and Copilot-friendly for all contributors.
