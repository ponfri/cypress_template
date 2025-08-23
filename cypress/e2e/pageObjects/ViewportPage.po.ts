import { BasePage } from './BasePage.po';

/**
 * Page Object for the Viewport page in Cypress Kitchen Sink
 * Covers all workflows for viewport commands, navbar, toggle, and navigation links
 */
export default class ViewportPage extends BasePage {
	// Private selectors for all relevant elements
		#elements = {
			viewportSection: '#viewport',
			cyViewportHeader: "h4:has(a[href='https://on.cypress.io/viewport'])",
			cyViewportCode: "pre code.javascript.hljs",
		};

		// Getters for all locators
		get viewportSection() { return cy.get(this.#elements.viewportSection); }
		get cyViewportHeader() { return cy.get(this.#elements.cyViewportHeader); }
		get cyViewportCode() { return cy.get(this.#elements.cyViewportCode); }

			// Interaction methods for all locators
			clickViewportSection() { this.viewportSection.click(); }
			clickCyViewportHeader() { this.cyViewportHeader.click(); }
			clickCyViewportCode() { this.cyViewportCode.click(); }

				// Workflow methods
				demonstrateViewportChange() {
					this.clickViewportSection();
					// Add assertions or commands to change viewport if needed
				}

				validateViewportCodeSampleVisible() {
					this.cyViewportCode.should('be.visible');
				}

				exploreViewportDocumentation() {
					this.clickCyViewportHeader();
					this.clickCyViewportCode();
				}

}
