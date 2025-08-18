/// <reference types="cypress" />
import 'cypress-axe';

declare namespace Cypress {
	interface Chainable {
		injectAxe(): Chainable;
		checkA11y(context?: any, options?: any, violationCallback?: any, skipFailures?: boolean): Chainable;
	}
}
