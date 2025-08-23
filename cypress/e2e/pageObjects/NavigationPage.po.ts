
import { BasePage } from './BasePage.po';

/**
 * Page Object for the Navigation page in Cypress Kitchen Sink
 * Covers all workflows for navigation commands: cy.go, cy.reload, cy.visit
 */
export default class NavigationPage extends BasePage {
		// Private selectors for all relevant elements
			#elements = {
				navigationSection: '#navigation[data-cy="navigation-section"]',
				cyGoHeader: 'h4#go a[data-cy="cy-go-header"]',
				cyGoCode: '#go ~ pre code.javascript.hljs[data-cy="cy-go-code"]',
				cyReloadHeader: 'h4#reload a[data-cy="cy-reload-header"]',
				cyReloadCode: '#reload ~ pre code.javascript.hljs[data-cy="cy-reload-code"]',
				cyVisitHeader: 'h4#visit a[data-cy="cy-visit-header"]',
				cyVisitCode: '#visit ~ pre code.javascript.hljs[data-cy="cy-visit-code"]',
			};

		// Getters for all locators
		get navigationSection() { return cy.get(this.#elements.navigationSection); }
		get cyGoHeader() { return cy.get(this.#elements.cyGoHeader); }
		get cyGoCode() { return cy.get(this.#elements.cyGoCode); }
		get cyReloadHeader() { return cy.get(this.#elements.cyReloadHeader); }
		get cyReloadCode() { return cy.get(this.#elements.cyReloadCode); }
		get cyVisitHeader() { return cy.get(this.#elements.cyVisitHeader); }
		get cyVisitCode() { return cy.get(this.#elements.cyVisitCode); }
	
		// Interaction methods
		clickCyGoHeader() { this.cyGoHeader.click(); }
		clickCyReloadHeader() { this.cyReloadHeader.click(); }
		clickCyVisitHeader() { this.cyVisitHeader.click(); }

		// Workflow methods
			goBackAndForward() {
				cy.go('back');
				cy.go('forward');
				return this;
			}

			reloadPage() {
				cy.reload();
				// Assertion should be done in test, not here
				return this;
			}

			visitUrl(url: string) {
				cy.visit(url);
				// Assertion should be done in test, not here
				return this;
			}

			clickAllHeaders() {
				this.clickCyGoHeader();
				this.clickCyReloadHeader();
				this.clickCyVisitHeader();
				return this;
			}

}
