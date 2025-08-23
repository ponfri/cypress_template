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
			clearLocalStorageSection: '#clearlocalstorage',
			clearLocalStorageHeader: "h4:contains('cy.clearLocalStorage()')",
			clearLocalStorageLink: "a[href='https://on.cypress.io/clearlocalstorage']",
			clearLocalStorageCode: "pre code.javascript.hljs",
			clearLocalStorageButton: '.ls-btn.btn-success',
			getAllLocalStorageSection: '#getalllocalstorage',
			getAllLocalStorageHeader: "h4:contains('cy.getAllLocalStorage()')",
			getAllLocalStorageLink: "a[href='https://on.cypress.io/getalllocalstorage']",
			getAllLocalStorageCode: "pre code.javascript.hljs",
			clearAllLocalStorageSection: '#clearalllocalstorage',
			clearAllLocalStorageHeader: "h4:contains('cy.clearAllLocalStorage()')",
			clearAllLocalStorageLink: "a[href='https://on.cypress.io/clearalllocalstorage']",
			clearAllLocalStorageCode: "pre code.javascript.hljs",
			getAllSessionStorageSection: '#getallsessionstorage',
			getAllSessionStorageHeader: "h4:contains('cy.getAllSessionStorage()')",
			getAllSessionStorageLink: "a[href='https://on.cypress.io/getallsessionstorage']",
			getAllSessionStorageCode: "pre code.javascript.hljs",
			clearAllSessionStorageSection: '#clearallsessionstorage',
			clearAllSessionStorageHeader: "h4:contains('cy.clearAllSessionStorage()')",
			clearAllSessionStorageLink: "a[href='https://on.cypress.io/clearallsessionstorage']",
			clearAllSessionStorageCode: "pre code.javascript.hljs",
			populateButton: '.ls-btn.btn-success',
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
			cy.window().then(win => {
				expect(Object.keys(win.localStorage)).to.have.length(0);
			});
		}

		populateStorageWorkflow() {
			this.clickPopulateButton();
			cy.window().then(win => {
				expect(Object.keys(win.localStorage).length).to.be.greaterThan(0);
			});
		}

		verifyAllStorageSectionsVisible() {
			this.clearLocalStorageSection.should('be.visible');
			this.getAllLocalStorageSection.should('be.visible');
			this.clearAllLocalStorageSection.should('be.visible');
			this.getAllSessionStorageSection.should('be.visible');
			this.clearAllSessionStorageSection.should('be.visible');
		}

		clickAllStorageLinks() {
			this.clickClearLocalStorageLink();
			this.clickGetAllLocalStorageLink();
			this.clickClearAllLocalStorageLink();
			this.clickGetAllSessionStorageLink();
			this.clickClearAllSessionStorageLink();
		}

}
