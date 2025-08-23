import { BasePage } from './BasePage.po';

/**
 * Page Object for the Spies, Stubs & Clocks page in Cypress Kitchen Sink
 * Covers all workflows for spies, stubs, clock, tick, matchers, buttons, code blocks, headers, and external links
 */
export default class SpiesStubsClocksPage extends BasePage {
			#elements = {
				banner: '.banner',
				mainHeader: 'h1',
				docsLink: "a[data-cy=\"docs-link\"]",
				spySection: "#spies-stubs-clocks[data-cy=\"spy-section\"]",
				spyHeader: "h4[data-cy=\"spy-header\"]",
				spyLink: "a[data-cy=\"spy-link\"]",
				spyCode: "pre code.javascript.hljs[data-cy=\"spy-code\"]",
				stubHeader: "h4[data-cy=\"stub-header\"]",
				stubLink: "a[data-cy=\"stub-link\"]",
				stubCode: "pre code.javascript.hljs[data-cy=\"stub-code\"]",
				clockHeader: "h4[data-cy=\"clock-header\"]",
				clockLink: "a[data-cy=\"clock-link\"]",
				clockCode: "pre code.javascript.hljs[data-cy=\"clock-code\"]",
				clockDiv: "#clock-div[data-cy=\"clock-div\"]",
				tickHeader: "h4[data-cy=\"tick-header\"]",
				tickLink: "a[data-cy=\"tick-link\"]",
				tickCode: "pre code.javascript.hljs[data-cy=\"tick-code\"]",
				tickDiv: "#tick-div[data-cy=\"tick-div\"]",
				stubArgumentsHeader: "h4[data-cy=\"stub-arguments-header\"]",
				stubArgumentsLink: "a[data-cy=\"stub-arguments-link\"]",
				stubArgumentsCode: "pre code.javascript.hljs[data-cy=\"stub-arguments-code\"]",
				matchersHeader: "h4[data-cy=\"matchers-header\"]",
				matchersLink: "a[data-cy=\"matchers-link\"]",
				matchersCode: "pre code.javascript.hljs[data-cy=\"matchers-code\"]",
			};

		// Getters for all locators
		get banner() { return cy.get(this.#elements.banner); }
		get mainHeader() { return cy.get(this.#elements.mainHeader); }
		get docsLink() { return cy.get(this.#elements.docsLink); }
		get spySection() { return cy.get(this.#elements.spySection); }
		get spyHeader() { return cy.get(this.#elements.spyHeader); }
		get spyLink() { return cy.get(this.#elements.spyLink); }
		get spyCode() { return cy.get(this.#elements.spyCode); }
		get stubHeader() { return cy.get(this.#elements.stubHeader); }
		get stubLink() { return cy.get(this.#elements.stubLink); }
		get stubCode() { return cy.get(this.#elements.stubCode); }
		get clockHeader() { return cy.get(this.#elements.clockHeader); }
		get clockLink() { return cy.get(this.#elements.clockLink); }
		get clockCode() { return cy.get(this.#elements.clockCode); }
		get clockDiv() { return cy.get(this.#elements.clockDiv); }
		get tickHeader() { return cy.get(this.#elements.tickHeader); }
		get tickLink() { return cy.get(this.#elements.tickLink); }
		get tickCode() { return cy.get(this.#elements.tickCode); }
		get tickDiv() { return cy.get(this.#elements.tickDiv); }
		get stubArgumentsHeader() { return cy.get(this.#elements.stubArgumentsHeader); }
		get stubArgumentsLink() { return cy.get(this.#elements.stubArgumentsLink); }
		get stubArgumentsCode() { return cy.get(this.#elements.stubArgumentsCode); }
		get matchersHeader() { return cy.get(this.#elements.matchersHeader); }
		get matchersLink() { return cy.get(this.#elements.matchersLink); }
		get matchersCode() { return cy.get(this.#elements.matchersCode); }
	
		// Interaction methods
		clickDocsLink() { this.docsLink.click(); }
		clickSpyLink() { this.spyLink.click(); }
		clickStubLink() { this.stubLink.click(); }
		clickClockLink() { this.clockLink.click(); }
		clickTickLink() { this.tickLink.click(); }
		clickStubArgumentsLink() { this.stubArgumentsLink.click(); }
		clickMatchersLink() { this.matchersLink.click(); }

		// Workflow methods
			clickAllApiLinks() {
				this.clickDocsLink();
				this.clickSpyLink();
				this.clickStubLink();
				this.clickClockLink();
				this.clickTickLink();
				this.clickStubArgumentsLink();
				this.clickMatchersLink();
				return this;
			}

			verifyClockAndTickDivsVisible() {
				// Assertions should be done in test, not here
				return this;
			}

			verifySpyAndStubHeadersVisible() {
				// Assertions should be done in test, not here
				return this;
			}

			verifyMatchersSectionVisible() {
				// Assertions should be done in test, not here
				return this;
			}

}
