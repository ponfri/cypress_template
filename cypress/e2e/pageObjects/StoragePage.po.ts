import { BasePage } from './BasePage.po';

/**
 * Page Object for the Storage page in Cypress Kitchen Sink
 * Covers all workflows for localStorage and sessionStorage commands, buttons, code blocks, headers, and external links
 */
export default class StoragePage extends BasePage {
	// Private selectors for all relevant elements
			#elements = {
				banner: '.banner[data-cy="banner"]',
				mainHeader: 'h1[data-cy="main-header"]',
				docsLink: "a[data-cy=\"docs-link\"]",
				clearLocalStorageSection: '#clearlocalstorage[data-cy="clear-local-storage-section"]',
				clearLocalStorageHeader: "h4[data-cy=\"clear-local-storage-header\"]",
				clearLocalStorageLink: "a[data-cy=\"clear-local-storage-link\"]",
				clearLocalStorageCode: "pre code.javascript.hljs[data-cy=\"clear-local-storage-code\"]",
				clearLocalStorageButton: '.ls-btn.btn-success[data-cy="clear-local-storage-btn"]',
				getAllLocalStorageSection: '#getalllocalstorage[data-cy="get-all-local-storage-section"]',
				getAllLocalStorageHeader: "h4[data-cy=\"get-all-local-storage-header\"]",
				getAllLocalStorageLink: "a[data-cy=\"get-all-local-storage-link\"]",
				getAllLocalStorageCode: "pre code.javascript.hljs[data-cy=\"get-all-local-storage-code\"]",
				clearAllLocalStorageSection: '#clearalllocalstorage[data-cy="clear-all-local-storage-section"]',
				clearAllLocalStorageHeader: "h4[data-cy=\"clear-all-local-storage-header\"]",
				clearAllLocalStorageLink: "a[data-cy=\"clear-all-local-storage-link\"]",
				clearAllLocalStorageCode: "pre code.javascript.hljs[data-cy=\"clear-all-local-storage-code\"]",
				getAllSessionStorageSection: '#getallsessionstorage[data-cy="get-all-session-storage-section"]',
				getAllSessionStorageHeader: "h4[data-cy=\"get-all-session-storage-header\"]",
				getAllSessionStorageLink: "a[data-cy=\"get-all-session-storage-link\"]",
				getAllSessionStorageCode: "pre code.javascript.hljs[data-cy=\"get-all-session-storage-code\"]",
				clearAllSessionStorageSection: '#clearallsessionstorage[data-cy="clear-all-session-storage-section"]',
				clearAllSessionStorageHeader: "h4[data-cy=\"clear-all-session-storage-header\"]",
				clearAllSessionStorageLink: "a[data-cy=\"clear-all-session-storage-link\"]",
				clearAllSessionStorageCode: "pre code.javascript.hljs[data-cy=\"clear-all-session-storage-code\"]",
				populateButton: '.ls-btn.btn-success[data-cy="populate-btn"]',
			};

		// Getters for all locators
		get banner() { return cy.get(this.#elements.banner); }
		get mainHeader() { return cy.get(this.#elements.mainHeader); }
		get docsLink() { return cy.get(this.#elements.docsLink); }
		get clearLocalStorageSection() { return cy.get(this.#elements.clearLocalStorageSection); }
		get clearLocalStorageHeader() { return cy.get(this.#elements.clearLocalStorageHeader); }
		get clearLocalStorageLink() { return cy.get(this.#elements.clearLocalStorageLink); }
		get clearLocalStorageCode() { return cy.get(this.#elements.clearLocalStorageCode); }
		get clearLocalStorageButton() { return cy.get(this.#elements.clearLocalStorageButton); }
		get getAllLocalStorageSection() { return cy.get(this.#elements.getAllLocalStorageSection); }
		get getAllLocalStorageHeader() { return cy.get(this.#elements.getAllLocalStorageHeader); }
		get getAllLocalStorageLink() { return cy.get(this.#elements.getAllLocalStorageLink); }
		get getAllLocalStorageCode() { return cy.get(this.#elements.getAllLocalStorageCode); }
		get clearAllLocalStorageSection() { return cy.get(this.#elements.clearAllLocalStorageSection); }
		get clearAllLocalStorageHeader() { return cy.get(this.#elements.clearAllLocalStorageHeader); }
		get clearAllLocalStorageLink() { return cy.get(this.#elements.clearAllLocalStorageLink); }
		get clearAllLocalStorageCode() { return cy.get(this.#elements.clearAllLocalStorageCode); }
		get getAllSessionStorageSection() { return cy.get(this.#elements.getAllSessionStorageSection); }
		get getAllSessionStorageHeader() { return cy.get(this.#elements.getAllSessionStorageHeader); }
		get getAllSessionStorageLink() { return cy.get(this.#elements.getAllSessionStorageLink); }
		get getAllSessionStorageCode() { return cy.get(this.#elements.getAllSessionStorageCode); }
		get clearAllSessionStorageSection() { return cy.get(this.#elements.clearAllSessionStorageSection); }
		get clearAllSessionStorageHeader() { return cy.get(this.#elements.clearAllSessionStorageHeader); }
		get clearAllSessionStorageLink() { return cy.get(this.#elements.clearAllSessionStorageLink); }
		get clearAllSessionStorageCode() { return cy.get(this.#elements.clearAllSessionStorageCode); }
		get populateButton() { return cy.get(this.#elements.populateButton); }
	
		// Interaction methods
		clickDocsLink() { this.docsLink.click(); }
		clickClearLocalStorageButton() { this.clearLocalStorageButton.click(); }
		clickPopulateButton() { this.populateButton.click(); }
		clickClearLocalStorageLink() { this.clearLocalStorageLink.click(); }
		clickGetAllLocalStorageLink() { this.getAllLocalStorageLink.click(); }
		clickClearAllLocalStorageLink() { this.clearAllLocalStorageLink.click(); }
		clickGetAllSessionStorageLink() { this.getAllSessionStorageLink.click(); }
		clickClearAllSessionStorageLink() { this.clearAllSessionStorageLink.click(); }

		// Workflow methods
			clearLocalStorageWorkflow() {
				this.clickClearLocalStorageButton();
				// Assertion should be done in test, not here
				return this;
			}

			populateStorageWorkflow() {
				this.clickPopulateButton();
				// Assertion should be done in test, not here
				return this;
			}

			verifyAllStorageSectionsVisible() {
				// Assertion should be done in test, not here
				return this;
			}

				clickAllStorageLinks() {
					this.clickClearLocalStorageLink();
					this.clickGetAllLocalStorageLink();
					this.clickClearAllLocalStorageLink();
					this.clickGetAllSessionStorageLink();
					this.clickClearAllSessionStorageLink();
					return this;
				}

}
