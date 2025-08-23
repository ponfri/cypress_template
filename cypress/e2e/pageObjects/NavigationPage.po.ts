
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
		}

		reloadPage() {
			cy.reload();
			// Optionally verify reload by checking a visible element
			this.navigationSection.should('be.visible');
		}

		visitUrl(url: string) {
			cy.visit(url);
			cy.url().should('eq', url);
		}

		clickAllHeaders() {
			this.clickCyGoHeader();
			this.clickCyReloadHeader();
			this.clickCyVisitHeader();
		}

}
