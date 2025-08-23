import { BasePage } from './BasePage.po';

/**
 * Page Object for the Utilities page in Cypress Kitchen Sink
 * Covers all workflows for Cypress._, Cypress.$, Cypress.Blob, Cypress.minimatch, Cypress.Promise, navbar, navigation, code blocks, headers, and external links
 */
export default class UtilitiesPage extends BasePage {
		#elements = {
			banner: '.banner',
			mainHeader: 'h1',
			docsLink: "a[href='https://on.cypress.io/_']",
			lodashHeader: "h4#_",
			lodashLink: "a[href='https://on.cypress.io/_']",
			lodashMethodLink: "a[href='https://on.cypress.io/_']", // Cypress._.method()
			lodashCode: "pre code.javascript.hljs",
			jqueryHeader: "h4#$",
			jqueryLink: "a[href='https://on.cypress.io/$']",
			jqueryCode: "pre code.javascript.hljs",
			jqueryList: 'ul.utility-jquery',
			jqueryListItems: 'ul.utility-jquery li',
			blobHeader: "h4#Blob",
			blobLink: "a[href='https://on.cypress.io/blob']",
			blobCode: "pre code.javascript.hljs",
			blobDiv: '.utility-blob',
			blobImg: '.utility-blob img',
			minimatchHeader: "h4#minimatch",
			minimatchLink: "a[href='https://on.cypress.io/minimatch']",
			minimatchCode: "pre code.javascript.hljs",
			promiseHeader: "h4#Promise",
			promiseLink: "a[href='https://on.cypress.io/promise']",
			promiseCode: "pre code.javascript.hljs",
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
			clickBanner() { this.banner.click(); }
			clickMainHeader() { this.mainHeader.click(); }
			clickDocsLink() { this.docsLink.click(); }
			clickLodashHeader() { this.lodashHeader.click(); }
			clickLodashLink() { this.lodashLink.click(); }
			clickLodashMethodLink() { this.lodashMethodLink.click(); }
			clickLodashCode() { this.lodashCode.click(); }
			clickJqueryHeader() { this.jqueryHeader.click(); }
			clickJqueryLink() { this.jqueryLink.click(); }
			clickJqueryCode() { this.jqueryCode.click(); }
			clickJqueryList() { this.jqueryList.click(); }
			clickJqueryListItems(index = 0) { this.jqueryListItems.eq(index).click(); }
			clickBlobHeader() { this.blobHeader.click(); }
			clickBlobLink() { this.blobLink.click(); }
			clickBlobCode() { this.blobCode.click(); }
			clickBlobDiv() { this.blobDiv.click(); }
			clickBlobImg() { this.blobImg.click(); }
			clickMinimatchHeader() { this.minimatchHeader.click(); }
			clickMinimatchLink() { this.minimatchLink.click(); }
			clickMinimatchCode() { this.minimatchCode.click(); }
			clickPromiseHeader() { this.promiseHeader.click(); }
			clickPromiseLink() { this.promiseLink.click(); }
			clickPromiseCode() { this.promiseCode.click(); }

				// Workflow methods
				visitAllUtilityDocs() {
					this.clickLodashLink();
					this.clickJqueryLink();
					this.clickBlobLink();
					this.clickMinimatchLink();
					this.clickPromiseLink();
				}

				interactWithAllCodeSamples() {
					this.clickLodashCode();
					this.clickJqueryCode();
					this.clickBlobCode();
					this.clickMinimatchCode();
					this.clickPromiseCode();
				}

				validateAllUtilitySectionsVisible() {
					this.lodashHeader.should('be.visible');
					this.jqueryHeader.should('be.visible');
					this.blobHeader.should('be.visible');
					this.minimatchHeader.should('be.visible');
					this.promiseHeader.should('be.visible');
				}

}
