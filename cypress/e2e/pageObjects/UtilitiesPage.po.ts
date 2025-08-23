import { BasePage } from './BasePage.po';

/**
 * Page Object for the Utilities page in Cypress Kitchen Sink
 * Covers all workflows for Cypress._, Cypress.$, Cypress.Blob, Cypress.minimatch, Cypress.Promise, navbar, navigation, code blocks, headers, and external links
 */
export default class UtilitiesPage extends BasePage {
			#elements = {
				banner: '.banner[data-cy="banner"]',
				mainHeader: 'h1[data-cy="main-header"]',
				docsLink: "a[data-cy='docs-link']",
				lodashHeader: "h4#_[data-cy='lodash-header']",
				lodashLink: "a[data-cy='lodash-link']",
				lodashMethodLink: "a[data-cy='lodash-method-link']", // Cypress._.method()
				lodashCode: "pre code.javascript.hljs[data-cy='lodash-code']",
				jqueryHeader: "h4#$[data-cy='jquery-header']",
				jqueryLink: "a[data-cy='jquery-link']",
				jqueryCode: "pre code.javascript.hljs[data-cy='jquery-code']",
				jqueryList: 'ul.utility-jquery[data-cy="jquery-list"]',
				jqueryListItems: 'ul.utility-jquery li[data-cy="jquery-list-item"]',
				blobHeader: "h4#Blob[data-cy='blob-header']",
				blobLink: "a[data-cy='blob-link']",
				blobCode: "pre code.javascript.hljs[data-cy='blob-code']",
				blobDiv: '.utility-blob[data-cy="blob-div"]',
				blobImg: '.utility-blob img[data-cy="blob-img"]',
				minimatchHeader: "h4#minimatch[data-cy='minimatch-header']",
				minimatchLink: "a[data-cy='minimatch-link']",
				minimatchCode: "pre code.javascript.hljs[data-cy='minimatch-code']",
				promiseHeader: "h4#Promise[data-cy='promise-header']",
				promiseLink: "a[data-cy='promise-link']",
				promiseCode: "pre code.javascript.hljs[data-cy='promise-code']",
			};

		// Getters for all locators
		get banner() { return cy.get(this.#elements.banner); }
		get mainHeader() { return cy.get(this.#elements.mainHeader); }
		get docsLink() { return cy.get(this.#elements.docsLink); }
		get lodashHeader() { return cy.get(this.#elements.lodashHeader); }
		get lodashLink() { return cy.get(this.#elements.lodashLink); }
		get lodashMethodLink() { return cy.get(this.#elements.lodashMethodLink); }
		get lodashCode() { return cy.get(this.#elements.lodashCode); }
		get jqueryHeader() { return cy.get(this.#elements.jqueryHeader); }
		get jqueryLink() { return cy.get(this.#elements.jqueryLink); }
		get jqueryCode() { return cy.get(this.#elements.jqueryCode); }
		get jqueryList() { return cy.get(this.#elements.jqueryList); }
		get jqueryListItems() { return cy.get(this.#elements.jqueryListItems); }
		get blobHeader() { return cy.get(this.#elements.blobHeader); }
		get blobLink() { return cy.get(this.#elements.blobLink); }
		get blobCode() { return cy.get(this.#elements.blobCode); }
		get blobDiv() { return cy.get(this.#elements.blobDiv); }
		get blobImg() { return cy.get(this.#elements.blobImg); }
		get minimatchHeader() { return cy.get(this.#elements.minimatchHeader); }
		get minimatchLink() { return cy.get(this.#elements.minimatchLink); }
		get minimatchCode() { return cy.get(this.#elements.minimatchCode); }
		get promiseHeader() { return cy.get(this.#elements.promiseHeader); }
		get promiseLink() { return cy.get(this.#elements.promiseLink); }
		get promiseCode() { return cy.get(this.#elements.promiseCode); }

			// Interaction methods for all locators
			clickBanner() { this.banner.click(); return this; }
			clickMainHeader() { this.mainHeader.click(); return this; }
			clickDocsLink() { this.docsLink.click(); return this; }
			clickLodashHeader() { this.lodashHeader.click(); return this; }
			clickLodashLink() { this.lodashLink.click(); return this; }
			clickLodashMethodLink() { this.lodashMethodLink.click(); return this; }
			clickLodashCode() { this.lodashCode.click(); return this; }
			clickJqueryHeader() { this.jqueryHeader.click(); return this; }
			clickJqueryLink() { this.jqueryLink.click(); return this; }
			clickJqueryCode() { this.jqueryCode.click(); return this; }
			clickJqueryList() { this.jqueryList.click(); return this; }
			clickJqueryListItems(index = 0) { this.jqueryListItems.eq(index).click(); return this; }
			clickBlobHeader() { this.blobHeader.click(); return this; }
			clickBlobLink() { this.blobLink.click(); return this; }
			clickBlobCode() { this.blobCode.click(); return this; }
			clickBlobDiv() { this.blobDiv.click(); return this; }
			clickBlobImg() { this.blobImg.click(); return this; }
			clickMinimatchHeader() { this.minimatchHeader.click(); return this; }
			clickMinimatchLink() { this.minimatchLink.click(); return this; }
			clickMinimatchCode() { this.minimatchCode.click(); return this; }
			clickPromiseHeader() { this.promiseHeader.click(); return this; }
			clickPromiseLink() { this.promiseLink.click(); return this; }
			clickPromiseCode() { this.promiseCode.click(); return this; }

					// Workflow methods
					visitAllUtilityDocs() {
						this.clickLodashLink();
						this.clickJqueryLink();
						this.clickBlobLink();
						this.clickMinimatchLink();
						this.clickPromiseLink();
						return this;
					}

					interactWithAllCodeSamples() {
						this.clickLodashCode();
						this.clickJqueryCode();
						this.clickBlobCode();
						this.clickMinimatchCode();
						this.clickPromiseCode();
						return this;
					}

					// Assertion should be done in test, not here

}
