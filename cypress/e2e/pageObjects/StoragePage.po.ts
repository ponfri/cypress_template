import { BasePage } from './BasePage.po';

/**
 * Page Object for the Storage page in Cypress Kitchen Sink
 * Covers all workflows for localStorage and sessionStorage commands, buttons, code blocks, headers, and external links
 */
export default class StoragePage extends BasePage {
	// Private selectors for all relevant elements
	#elements = {
		banner: '.banner',
		mainHeader: 'h1',
		docsLink: "a[href='https://on.cypress.io/api']",
		// cy.clearLocalStorage section
		clearLocalStorageSection: '#clearlocalstorage',
		clearLocalStorageHeader: "h4:contains('cy.clearLocalStorage()')",
		clearLocalStorageLink: "a[href='https://on.cypress.io/clearlocalstorage']",
		clearLocalStorageCode: "pre code.javascript.hljs",
		clearLocalStorageButton: '.ls-btn.btn-success',
		// cy.getAllLocalStorage section
		getAllLocalStorageSection: '#getalllocalstorage',
		getAllLocalStorageHeader: "h4:contains('cy.getAllLocalStorage()')",
		getAllLocalStorageLink: "a[href='https://on.cypress.io/getalllocalstorage']",
		getAllLocalStorageCode: "pre code.javascript.hljs",
		// cy.clearAllLocalStorage section
		clearAllLocalStorageSection: '#clearalllocalstorage',
		clearAllLocalStorageHeader: "h4:contains('cy.clearAllLocalStorage()')",
		clearAllLocalStorageLink: "a[href='https://on.cypress.io/clearalllocalstorage']",
		clearAllLocalStorageCode: "pre code.javascript.hljs",
		// cy.getAllSessionStorage section
		getAllSessionStorageSection: '#getallsessionstorage',
		getAllSessionStorageHeader: "h4:contains('cy.getAllSessionStorage()')",
		getAllSessionStorageLink: "a[href='https://on.cypress.io/getallsessionstorage']",
		getAllSessionStorageCode: "pre code.javascript.hljs",
		// cy.clearAllSessionStorage section
		clearAllSessionStorageSection: '#clearallsessionstorage',
		clearAllSessionStorageHeader: "h4:contains('cy.clearAllSessionStorage()')",
		clearAllSessionStorageLink: "a[href='https://on.cypress.io/clearallsessionstorage']",
		clearAllSessionStorageCode: "pre code.javascript.hljs",
		// Populate button
		populateButton: '.ls-btn.btn-success',
	};

	getBanner() { return cy.get(this.#elements.banner); }
	getMainHeader() { return cy.get(this.#elements.mainHeader); }
	getDocsLink() { return cy.get(this.#elements.docsLink); }

	// Section getters
	getClearLocalStorageSection() { return cy.get(this.#elements.clearLocalStorageSection); }
	getClearLocalStorageHeader() { return cy.get(this.#elements.clearLocalStorageHeader); }
	getClearLocalStorageLink() { return cy.get(this.#elements.clearLocalStorageLink); }
	getClearLocalStorageCode() { return cy.get(this.#elements.clearLocalStorageCode); }
	getClearLocalStorageButton() { return cy.get(this.#elements.clearLocalStorageButton); }

	getGetAllLocalStorageSection() { return cy.get(this.#elements.getAllLocalStorageSection); }
	getGetAllLocalStorageHeader() { return cy.get(this.#elements.getAllLocalStorageHeader); }
	getGetAllLocalStorageLink() { return cy.get(this.#elements.getAllLocalStorageLink); }
	getGetAllLocalStorageCode() { return cy.get(this.#elements.getAllLocalStorageCode); }

	getClearAllLocalStorageSection() { return cy.get(this.#elements.clearAllLocalStorageSection); }
	getClearAllLocalStorageHeader() { return cy.get(this.#elements.clearAllLocalStorageHeader); }
	getClearAllLocalStorageLink() { return cy.get(this.#elements.clearAllLocalStorageLink); }
	getClearAllLocalStorageCode() { return cy.get(this.#elements.clearAllLocalStorageCode); }

	getGetAllSessionStorageSection() { return cy.get(this.#elements.getAllSessionStorageSection); }
	getGetAllSessionStorageHeader() { return cy.get(this.#elements.getAllSessionStorageHeader); }
	getGetAllSessionStorageLink() { return cy.get(this.#elements.getAllSessionStorageLink); }
	getGetAllSessionStorageCode() { return cy.get(this.#elements.getAllSessionStorageCode); }

	getClearAllSessionStorageSection() { return cy.get(this.#elements.clearAllSessionStorageSection); }
	getClearAllSessionStorageHeader() { return cy.get(this.#elements.clearAllSessionStorageHeader); }
	getClearAllSessionStorageLink() { return cy.get(this.#elements.clearAllSessionStorageLink); }
	getClearAllSessionStorageCode() { return cy.get(this.#elements.clearAllSessionStorageCode); }

	getPopulateButton() { return cy.get(this.#elements.populateButton); }

	// ...existing code...
	// Workflow methods
	// ...existing code...

	assertBannerVisible() { this.getBanner().should('be.visible'); }
	assertMainHeaderVisible() { this.getMainHeader().should('be.visible').and('contain', 'Storage'); }
	assertDocsLinkVisible() { this.getDocsLink().should('be.visible'); }
	clickDocsLink() { this.getDocsLink().should('be.visible').invoke('removeAttr', 'target').click(); }

	// cy.clearLocalStorage workflows
	assertClearLocalStorageHeaderVisible() { this.getClearLocalStorageHeader().should('be.visible'); }
	assertClearLocalStorageLinkVisible() { this.getClearLocalStorageLink().should('be.visible'); }
	clickClearLocalStorageLink() { this.getClearLocalStorageLink().should('be.visible').invoke('removeAttr', 'target').click(); }
	assertClearLocalStorageCodeVisible() { this.getClearLocalStorageCode().should('be.visible'); }
	clickClearLocalStorageButton() { this.getClearLocalStorageButton().should('be.visible').click(); }

	// cy.getAllLocalStorage workflows
	assertGetAllLocalStorageHeaderVisible() { this.getGetAllLocalStorageHeader().should('be.visible'); }
	assertGetAllLocalStorageLinkVisible() { this.getGetAllLocalStorageLink().should('be.visible'); }
	clickGetAllLocalStorageLink() { this.getGetAllLocalStorageLink().should('be.visible').invoke('removeAttr', 'target').click(); }
	assertGetAllLocalStorageCodeVisible() { this.getGetAllLocalStorageCode().should('be.visible'); }

	// cy.clearAllLocalStorage workflows
	assertClearAllLocalStorageHeaderVisible() { this.getClearAllLocalStorageHeader().should('be.visible'); }
	assertClearAllLocalStorageLinkVisible() { this.getClearAllLocalStorageLink().should('be.visible'); }
	clickClearAllLocalStorageLink() { this.getClearAllLocalStorageLink().should('be.visible').invoke('removeAttr', 'target').click(); }
	assertClearAllLocalStorageCodeVisible() { this.getClearAllLocalStorageCode().should('be.visible'); }

	// ...existing code...
	assertGetAllSessionStorageHeaderVisible() { this.getGetAllSessionStorageHeader().should('be.visible'); }
	assertGetAllSessionStorageLinkVisible() { this.getGetAllSessionStorageLink().should('be.visible'); }
	clickGetAllSessionStorageLink() { this.getGetAllSessionStorageLink().should('be.visible').invoke('removeAttr', 'target').click(); }
	assertGetAllSessionStorageCodeVisible() { this.getGetAllSessionStorageCode().should('be.visible'); }

	// cy.clearAllSessionStorage workflows
	assertClearAllSessionStorageHeaderVisible() { this.getClearAllSessionStorageHeader().should('be.visible'); }
	assertClearAllSessionStorageLinkVisible() { this.getClearAllSessionStorageLink().should('be.visible'); }
	clickClearAllSessionStorageLink() { this.getClearAllSessionStorageLink().should('be.visible').invoke('removeAttr', 'target').click(); }
	assertClearAllSessionStorageCodeVisible() { this.getClearAllSessionStorageCode().should('be.visible'); }

	// Populate button workflow
	clickPopulateButton() { this.getPopulateButton().should('be.visible').click(); }

	// Full workflow for all storage examples
	runAllStorageWorkflows() {
	// ...existing code...
		// Banner and header
		this.assertBannerVisible();
		this.assertMainHeaderVisible();
		// Docs link
		this.assertDocsLinkVisible();
		// cy.clearLocalStorage section
		this.assertClearLocalStorageHeaderVisible();
		this.assertClearLocalStorageLinkVisible();
		this.assertClearLocalStorageCodeVisible();
		this.clickPopulateButton();
		this.clickClearLocalStorageButton();
		// cy.getAllLocalStorage section
		this.assertGetAllLocalStorageHeaderVisible();
		this.assertGetAllLocalStorageLinkVisible();
		this.assertGetAllLocalStorageCodeVisible();
		// cy.clearAllLocalStorage section
		this.assertClearAllLocalStorageHeaderVisible();
		this.assertClearAllLocalStorageLinkVisible();
		this.assertClearAllLocalStorageCodeVisible();
		// cy.getAllSessionStorage section
		this.assertGetAllSessionStorageHeaderVisible();
		this.assertGetAllSessionStorageLinkVisible();
		this.assertGetAllSessionStorageCodeVisible();
		// cy.clearAllSessionStorage section
		this.assertClearAllSessionStorageHeaderVisible();
		this.assertClearAllSessionStorageLinkVisible();
		this.assertClearAllSessionStorageCodeVisible();
	}
}
