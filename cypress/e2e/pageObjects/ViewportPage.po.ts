import { BasePage } from './BasePage.po';

/**
 * Page Object for the Viewport page in Cypress Kitchen Sink
 * Covers all workflows for viewport commands, navbar, toggle, and navigation links
 */
export default class ViewportPage extends BasePage {
	// Private selectors for all relevant elements
			#elements = {
				viewportSection: '#viewport[data-cy="viewport-section"]',
				cyViewportHeader: 'h4[data-cy="cy-viewport-header"]',
				cyViewportCode: 'pre code.javascript.hljs[data-cy="cy-viewport-code"]',
			};

		// Getters for all locators
		get viewportSection() { return cy.get(this.#elements.viewportSection); }
		get cyViewportHeader() { return cy.get(this.#elements.cyViewportHeader); }
		get cyViewportCode() { return cy.get(this.#elements.cyViewportCode); }

			// Interaction methods for all locators
			clickViewportSection() { this.viewportSection.click(); return this; }
			clickCyViewportHeader() { this.cyViewportHeader.click(); return this; }
			clickCyViewportCode() { this.cyViewportCode.click(); return this; }

					// Workflow methods
					demonstrateViewportChange() {
						this.clickViewportSection();
						// Add viewport change commands in test, not here
						return this;
					}

					// Assertion should be done in test, not here

					exploreViewportDocumentation() {
						this.clickCyViewportHeader();
						this.clickCyViewportCode();
						return this;
					}

}
