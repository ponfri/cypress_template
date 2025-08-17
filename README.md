# Cypress Template Project

This project is a robust Cypress automation framework for testing a streaming Angular app across multiple environments (dev, qa, prod) and device types (including TVs).

## Key Features
- **Custom Commands:** Extensive set of reusable commands for selectors, assertions, API mocking, payload retrieval, storage, style/class checks, interactability, network helpers, performance, and more.
- **Page Objects:** Modular page object files for maintainable UI interaction.
- **Centralized Environment Config:** All API URLs, test accounts, and environment variables are managed in `cypress.env.json`.
- **Best Practices Documentation:** See `/ai_instructions` for Copilot and contributor guidance.
- **Angular/TV Navigation Support:** Custom commands and strategies for non-scrollable, focus-driven navigation.
- **Performance Testing:** Built-in commands for API response time, page load, and resource load checks.

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure environment data in `cypress.env.json` (API URLs, accounts, etc.).
3. Run tests:
   ```bash
   npx cypress open
   # or
   npx cypress run
   ```

## Environment Data Usage
- **Strict Rule:** Always declare environment data (API URLs, accounts, etc.) as constants at the top of your spec files. Never use `Cypress.env()` inline in tests.
- See [`ai_instructions/env_usage.md`](ai_instructions/env_usage.md) for details and examples.

## Custom Commands
- All custom commands are documented and typed in [`cypress/support/customCommands.d.ts`](cypress/support/customCommands.d.ts).
- Usage examples are provided in JSDoc for each command.

## Page Objects
- Located in `cypress/e2e/pageObjects/`.
- Use page objects for modular, maintainable UI interaction.

## Contributing
See [`CONTRIBUTING.md`](CONTRIBUTING.md) for guidelines.

## Documentation
- Main instructions: [`cypress_instructions.md`](cypress_instructions.md)
- Custom commands: [`ai_instructions/custom_commands.md`](ai_instructions/custom_commands.md)
- Environment usage: [`ai_instructions/env_usage.md`](ai_instructions/env_usage.md)

## Project Structure
```
cypress_template/
├── cypress.env.json
├── cypress_instructions.md
├── ai_instructions/
│   ├── custom_commands.md
│   ├── env_usage.md
├── cypress/
│   ├── e2e/
│   │   ├── pageObjects/
│   │   └── tests/
│   ├── support/
│   │   ├── commands.ts
│   │   └── customCommands.d.ts
│   └── fixtures/
├── package.json
└── README.md
```