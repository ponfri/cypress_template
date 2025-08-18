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

	// Getters for elements
	// ...existing code...
	getBanner() { return cy.get(this.#elements.banner); }
	getMainHeader() { return cy.get(this.#elements.mainHeader); }
	getDocsLink() { return cy.get(this.#elements.docsLink); }

	getSpyHeader() { return cy.get(this.#elements.spyHeader); }
	getSpyLink() { return cy.get(this.#elements.spyLink); }
	getSpyCode() { return cy.get(this.#elements.spyCode); }

	getStubHeader() { return cy.get(this.#elements.stubHeader); }
	getStubLink() { return cy.get(this.#elements.stubLink); }
	getStubCode() { return cy.get(this.#elements.stubCode); }

	getClockHeader() { return cy.get(this.#elements.clockHeader); }
	getClockLink() { return cy.get(this.#elements.clockLink); }
	getClockCode() { return cy.get(this.#elements.clockCode); }
	getClockDiv() { return cy.get(this.#elements.clockDiv); }

	getTickHeader() { return cy.get(this.#elements.tickHeader); }
	getTickLink() { return cy.get(this.#elements.tickLink); }
	getTickCode() { return cy.get(this.#elements.tickCode); }
	getTickDiv() { return cy.get(this.#elements.tickDiv); }

	getStubArgumentsHeader() { return cy.get(this.#elements.stubArgumentsHeader); }
	getStubArgumentsLink() { return cy.get(this.#elements.stubArgumentsLink); }
	getStubArgumentsCode() { return cy.get(this.#elements.stubArgumentsCode); }

	getMatchersHeader() { return cy.get(this.#elements.matchersHeader); }
	getMatchersLink() { return cy.get(this.#elements.matchersLink); }
	getMatchersCode() { return cy.get(this.#elements.matchersCode); }

	// Workflow methods
	// ...existing code...

	assertBannerVisible() { this.getBanner().should('be.visible'); }
	assertMainHeaderVisible() { this.getMainHeader().should('be.visible').and('contain', 'Spies, Stubs & Clocks'); }
	assertDocsLinkVisible() { this.getDocsLink().should('be.visible'); }
	clickDocsLink() { this.getDocsLink().should('be.visible').invoke('removeAttr', 'target').click(); }

	// cy.spy workflows
	assertSpyHeaderVisible() { this.getSpyHeader().should('be.visible'); }
	assertSpyLinkVisible() { this.getSpyLink().should('be.visible'); }
	clickSpyLink() { this.getSpyLink().should('be.visible').invoke('removeAttr', 'target').click(); }
	assertSpyCodeVisible() { this.getSpyCode().should('be.visible'); }

	// cy.stub workflows
	assertStubHeaderVisible() { this.getStubHeader().should('be.visible'); }
	assertStubLinkVisible() { this.getStubLink().should('be.visible'); }
	clickStubLink() { this.getStubLink().should('be.visible').invoke('removeAttr', 'target').click(); }
	assertStubCodeVisible() { this.getStubCode().should('be.visible'); }

	// cy.clock workflows
	assertClockHeaderVisible() { this.getClockHeader().should('be.visible'); }
	assertClockLinkVisible() { this.getClockLink().should('be.visible'); }
	clickClockLink() { this.getClockLink().should('be.visible').invoke('removeAttr', 'target').click(); }
	assertClockCodeVisible() { this.getClockCode().should('be.visible'); }
	assertClockDivVisible() { this.getClockDiv().should('be.visible'); }

	// cy.tick workflows
	assertTickHeaderVisible() { this.getTickHeader().should('be.visible'); }
	assertTickLinkVisible() { this.getTickLink().should('be.visible'); }
	clickTickLink() { this.getTickLink().should('be.visible').invoke('removeAttr', 'target').click(); }
	assertTickCodeVisible() { this.getTickCode().should('be.visible'); }
	assertTickDivVisible() { this.getTickDiv().should('be.visible'); }

	// stub arguments workflows
	assertStubArgumentsHeaderVisible() { this.getStubArgumentsHeader().should('be.visible'); }
	assertStubArgumentsLinkVisible() { this.getStubArgumentsLink().should('be.visible'); }
	clickStubArgumentsLink() { this.getStubArgumentsLink().should('be.visible').invoke('removeAttr', 'target').click(); }
	assertStubArgumentsCodeVisible() { this.getStubArgumentsCode().should('be.visible'); }

	// matchers workflows
	assertMatchersHeaderVisible() { this.getMatchersHeader().should('be.visible'); }
	assertMatchersLinkVisible() { this.getMatchersLink().should('be.visible'); }
	clickMatchersLink() { this.getMatchersLink().should('be.visible').invoke('removeAttr', 'target').click(); }
	assertMatchersCodeVisible() { this.getMatchersCode().should('be.visible'); }

	// Full workflow for all spies, stubs, clocks examples
	runAllSpiesStubsClocksWorkflows() {
	// ...existing code...
		// Banner and header
		this.assertBannerVisible();
		this.assertMainHeaderVisible();
		// Docs link
		this.assertDocsLinkVisible();
		// cy.spy section
		this.assertSpyHeaderVisible();
		this.assertSpyLinkVisible();
		this.assertSpyCodeVisible();
		// cy.stub section
		this.assertStubHeaderVisible();
		this.assertStubLinkVisible();
		this.assertStubCodeVisible();
		// cy.clock section
		this.assertClockHeaderVisible();
		this.assertClockLinkVisible();
		this.assertClockCodeVisible();
		this.assertClockDivVisible();
		// cy.tick section
		this.assertTickHeaderVisible();
		this.assertTickLinkVisible();
		this.assertTickCodeVisible();
		this.assertTickDivVisible();
		// stub arguments section
		this.assertStubArgumentsHeaderVisible();
		this.assertStubArgumentsLinkVisible();
		this.assertStubArgumentsCodeVisible();
		// matchers section
		this.assertMatchersHeaderVisible();
		this.assertMatchersLinkVisible();
		this.assertMatchersCodeVisible();
	}
}
