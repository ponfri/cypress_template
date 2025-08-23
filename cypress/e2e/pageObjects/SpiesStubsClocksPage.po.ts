import { BasePage } from './BasePage.po';

/**
 * Page Object for the Spies, Stubs & Clocks page in Cypress Kitchen Sink
 * Covers all workflows for spies, stubs, clock, tick, matchers, buttons, code blocks, headers, and external links
 */
export default class SpiesStubsClocksPage extends BasePage {
		#elements = {
			banner: '.banner',
			mainHeader: 'h1',
			docsLink: "a[href='https://on.cypress.io/api']",
			spySection: '#spies-stubs-clocks',
			spyHeader: "h4#spy",
			spyLink: "a[href='https://on.cypress.io/spy']",
			spyCode: "pre code.javascript.hljs",
			stubHeader: "h4#stub",
			stubLink: "a[href='https://on.cypress.io/stub']",
			stubCode: "pre code.javascript.hljs",
			clockHeader: "h4#clock",
			clockLink: "a[href='https://on.cypress.io/clock']",
			clockCode: "pre code.javascript.hljs",
			clockDiv: '#clock-div',
			tickHeader: "h4#tick",
			tickLink: "a[href='https://on.cypress.io/tick']",
			tickCode: "pre code.javascript.hljs",
			tickDiv: '#tick-div',
			stubArgumentsHeader: "h4#stub-arguments",
			stubArgumentsLink: "a[href='https://sinonjs.org/releases/latest/matchers/']",
			stubArgumentsCode: "pre code.javascript.hljs",
			matchersHeader: "h4#matchers",
			matchersLink: "a[href='https://sinonjs.org/releases/latest/matchers/']",
			matchersCode: "pre code.javascript.hljs",
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
		}

		verifyClockAndTickDivsVisible() {
			this.clockDiv.should('be.visible');
			this.tickDiv.should('be.visible');
		}

		verifySpyAndStubHeadersVisible() {
			this.spyHeader.should('be.visible');
			this.stubHeader.should('be.visible');
		}

		verifyMatchersSectionVisible() {
			this.matchersHeader.should('be.visible');
			this.matchersLink.should('be.visible');
			this.matchersCode.should('be.visible');
		}

}
