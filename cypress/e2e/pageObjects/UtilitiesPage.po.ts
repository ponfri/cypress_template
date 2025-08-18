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
		// Cypress._ section
		lodashHeader: "h4#_",
		lodashLink: "a[href='https://on.cypress.io/_']",
		lodashMethodLink: "a[href='https://on.cypress.io/_']", // Cypress._.method()
		lodashCode: "pre code.javascript.hljs",
		// Cypress.$ section
		jqueryHeader: "h4#$",
		jqueryLink: "a[href='https://on.cypress.io/$']",
		jqueryCode: "pre code.javascript.hljs",
		jqueryList: 'ul.utility-jquery',
		jqueryListItems: 'ul.utility-jquery li',
		// Cypress.Blob section
		blobHeader: "h4#Blob",
		blobLink: "a[href='https://on.cypress.io/blob']",
		blobCode: "pre code.javascript.hljs",
		blobDiv: '.utility-blob',
		blobImg: '.utility-blob img',
		// Cypress.minimatch section
		minimatchHeader: "h4#minimatch",
		minimatchLink: "a[href='https://on.cypress.io/minimatch']",
		minimatchCode: "pre code.javascript.hljs",
		// Cypress.Promise section
		promiseHeader: "h4#Promise",
		promiseLink: "a[href='https://on.cypress.io/promise']",
		promiseCode: "pre code.javascript.hljs",
	};

	// Getters for elements
		getBanner() { return cy.get(this.#elements.banner); }
		getMainHeader() { return cy.get(this.#elements.mainHeader); }
		getDocsLink() { return cy.get(this.#elements.docsLink); }

	getLodashHeader() { return cy.get(this.#elements.lodashHeader); }
	getLodashLink() { return cy.get(this.#elements.lodashLink); }
	getLodashMethodLink() { return cy.get(this.#elements.lodashMethodLink); }
	getLodashCode() { return cy.get(this.#elements.lodashCode).eq(0); }

	getJqueryHeader() { return cy.get(this.#elements.jqueryHeader); }
	getJqueryLink() { return cy.get(this.#elements.jqueryLink); }
	getJqueryCode() { return cy.get(this.#elements.jqueryCode).eq(1); }
	getJqueryList() { return cy.get(this.#elements.jqueryList); }
	getJqueryListItems() { return cy.get(this.#elements.jqueryListItems); }

	getBlobHeader() { return cy.get(this.#elements.blobHeader); }
	getBlobLink() { return cy.get(this.#elements.blobLink); }
	getBlobCode() { return cy.get(this.#elements.blobCode).eq(2); }
	getBlobDiv() { return cy.get(this.#elements.blobDiv); }
	getBlobImg() { return cy.get(this.#elements.blobImg); }

	getMinimatchHeader() { return cy.get(this.#elements.minimatchHeader); }
	getMinimatchLink() { return cy.get(this.#elements.minimatchLink); }
	getMinimatchCode() { return cy.get(this.#elements.minimatchCode).eq(3); }

	getPromiseHeader() { return cy.get(this.#elements.promiseHeader); }
	getPromiseLink() { return cy.get(this.#elements.promiseLink); }
	getPromiseCode() { return cy.get(this.#elements.promiseCode).eq(4); }

	// Workflow methods
		// ...menu and navigation handled by BasePage...

	assertBannerVisible() { this.getBanner().should('be.visible'); }
	assertMainHeaderVisible() { this.getMainHeader().should('be.visible').and('contain', 'Utilities'); }
	assertDocsLinkVisible() { this.getDocsLink().should('be.visible'); }
	clickDocsLink() { this.getDocsLink().should('be.visible').invoke('removeAttr', 'target').click(); }

	// Cypress._ workflows
	assertLodashHeaderVisible() { this.getLodashHeader().should('be.visible'); }
	assertLodashLinkVisible() { this.getLodashLink().should('be.visible'); }
	clickLodashLink() { this.getLodashLink().should('be.visible').invoke('removeAttr', 'target').click(); }
	assertLodashMethodLinkVisible() { this.getLodashMethodLink().should('be.visible'); }
	clickLodashMethodLink() { this.getLodashMethodLink().should('be.visible').invoke('removeAttr', 'target').click(); }
	assertLodashCodeVisible() { this.getLodashCode().should('be.visible'); }

	// Cypress.$ workflows
	assertJqueryHeaderVisible() { this.getJqueryHeader().should('be.visible'); }
	assertJqueryLinkVisible() { this.getJqueryLink().should('be.visible'); }
	clickJqueryLink() { this.getJqueryLink().should('be.visible').invoke('removeAttr', 'target').click(); }
	assertJqueryCodeVisible() { this.getJqueryCode().should('be.visible'); }
	assertJqueryListVisible() { this.getJqueryList().should('be.visible'); }
	assertJqueryListItemsCount(count: number) { this.getJqueryListItems().should('have.length', count); }
	clickJqueryListItem(index: number) { this.getJqueryListItems().eq(index).click(); }

	// Cypress.Blob workflows
	assertBlobHeaderVisible() { this.getBlobHeader().should('be.visible'); }
	assertBlobLinkVisible() { this.getBlobLink().should('be.visible'); }
	clickBlobLink() { this.getBlobLink().should('be.visible').invoke('removeAttr', 'target').click(); }
	assertBlobCodeVisible() { this.getBlobCode().should('be.visible'); }
	assertBlobDivVisible() { this.getBlobDiv().should('be.visible'); }
	assertBlobImgVisible() { this.getBlobImg().should('be.visible'); }
	clickBlobImg() { this.getBlobImg().click(); }

	// Cypress.minimatch workflows
	assertMinimatchHeaderVisible() { this.getMinimatchHeader().should('be.visible'); }
	assertMinimatchLinkVisible() { this.getMinimatchLink().should('be.visible'); }
	clickMinimatchLink() { this.getMinimatchLink().should('be.visible').invoke('removeAttr', 'target').click(); }
	assertMinimatchCodeVisible() { this.getMinimatchCode().should('be.visible'); }

	// Cypress.Promise workflows
	assertPromiseHeaderVisible() { this.getPromiseHeader().should('be.visible'); }
	assertPromiseLinkVisible() { this.getPromiseLink().should('be.visible'); }
	clickPromiseLink() { this.getPromiseLink().should('be.visible').invoke('removeAttr', 'target').click(); }
	assertPromiseCodeVisible() { this.getPromiseCode().should('be.visible'); }

	// Full workflow for all utilities examples
	runAllUtilitiesWorkflows() {
		// Banner and header
		this.assertBannerVisible();
		this.assertMainHeaderVisible();
		// Docs link
		this.assertDocsLinkVisible();
		// Cypress._ section
		this.assertLodashHeaderVisible();
		this.assertLodashLinkVisible();
		this.assertLodashMethodLinkVisible();
		this.assertLodashCodeVisible();
		// Cypress.$ section
		this.assertJqueryHeaderVisible();
		this.assertJqueryLinkVisible();
		this.assertJqueryCodeVisible();
		this.assertJqueryListVisible();
		this.assertJqueryListItemsCount(3);
		this.clickJqueryListItem(0);
		this.clickJqueryListItem(1);
		this.clickJqueryListItem(2);
		// Cypress.Blob section
		this.assertBlobHeaderVisible();
		this.assertBlobLinkVisible();
		this.assertBlobCodeVisible();
		this.assertBlobDivVisible();
		this.assertBlobImgVisible();
		this.clickBlobImg();
		// Cypress.minimatch section
		this.assertMinimatchHeaderVisible();
		this.assertMinimatchLinkVisible();
		this.assertMinimatchCodeVisible();
		// Cypress.Promise section
		this.assertPromiseHeaderVisible();
		this.assertPromiseLinkVisible();
		this.assertPromiseCodeVisible();
	}
}
