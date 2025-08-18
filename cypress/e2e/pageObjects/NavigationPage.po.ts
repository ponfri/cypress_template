
import { BasePage } from './BasePage.po';

/**
 * Page Object for the Navigation page in Cypress Kitchen Sink
 * Covers all workflows for navigation commands: cy.go, cy.reload, cy.visit
 */
export default class NavigationPage extends BasePage {
	// Private selectors for all relevant elements
	#elements = {
		navigationSection: '#navigation',
		cyGoHeader: "h4#go a[href='https://on.cypress.io/go']",
		cyGoCode: "#go ~ pre code.javascript.hljs",
		cyReloadHeader: "h4#reload a[href='https://on.cypress.io/reload']",
		cyReloadCode: "#reload ~ pre code.javascript.hljs",
		cyVisitHeader: "h4#visit a[href='https://on.cypress.io/visit']",
		cyVisitCode: "#visit ~ pre code.javascript.hljs",
	};

	// Getters for elements
	// ...existing code...
	getNavigationSection() {
		return cy.get(this.#elements.navigationSection);
	}
	getCyGoHeader() {
		return cy.get(this.#elements.cyGoHeader);
	}
	getCyGoCode() {
		return cy.get(this.#elements.cyGoCode);
	}
	getCyReloadHeader() {
		return cy.get(this.#elements.cyReloadHeader);
	}
	getCyReloadCode() {
		return cy.get(this.#elements.cyReloadCode);
	}
	getCyVisitHeader() {
		return cy.get(this.#elements.cyVisitHeader);
	}
	getCyVisitCode() {
		return cy.get(this.#elements.cyVisitCode);
	}

	// Workflow methods for navigation commands
	assertPathnameIncludes(str: string) {
		cy.location('pathname').should('include', str);
	}
	assertPathnameNotIncludes(str: string) {
		cy.location('pathname').should('not.include', str);
	}

	// ...existing code...

	// Full workflow for all navigation examples
	runAllNavigationWorkflows() {
	// cy.go() examples
	this.assertPathnameIncludes('navigation');
	cy.go('back');
	this.assertPathnameNotIncludes('navigation');
	cy.go('forward');
	this.assertPathnameIncludes('navigation');
	cy.go(-1);
	this.assertPathnameNotIncludes('navigation');
	cy.go(1);
	this.assertPathnameIncludes('navigation');
	// cy.reload() examples
	cy.reload();
	cy.reload(false); // reload without cache
	// cy.visit() example
	cy.visit('https://example.cypress.io/commands/navigation');
	}

	// Assertions for cy.go(), cy.reload(), cy.visit() headers and code blocks
	assertCyGoHeaderVisible() {
		this.getCyGoHeader().should('be.visible');
	}
	assertCyGoCodeVisible() {
		this.getCyGoCode().should('be.visible');
	}
	assertCyReloadHeaderVisible() {
		this.getCyReloadHeader().should('be.visible');
	}
	assertCyReloadCodeVisible() {
		this.getCyReloadCode().should('be.visible');
	}
	assertCyVisitHeaderVisible() {
		this.getCyVisitHeader().should('be.visible');
	}
	assertCyVisitCodeVisible() {
		this.getCyVisitCode().should('be.visible');
	}
}
