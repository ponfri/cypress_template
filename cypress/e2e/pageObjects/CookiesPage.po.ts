import { BasePage } from './BasePage.po';

/**
 * Page Object for the Cookies page in Cypress Kitchen Sink
 * Covers all workflows for cookies commands, buttons, code blocks, headers, and external links
 */
export default class CookiesPage extends BasePage {
	// Private selectors for all relevant elements
	#elements = {
		banner: '.banner',
		mainHeader: 'h1',
		docsLink: "a[href='https://on.cypress.io/api']",
		// cy.getCookie section
		getCookieSection: '#getCookie',
		getCookieHeader: "h4#getCookie",
		getCookieLink: "a[href='https://on.cypress.io/getcookie']",
		getCookieCode: "pre code.javascript.hljs",
		getCookieButton: '#getCookie .set-a-cookie',
		// cy.getCookies section
		getCookiesSection: '#getCookies',
		getCookiesHeader: "h4#getCookies",
		getCookiesLink: "a[href='https://on.cypress.io/getcookies']",
		getCookiesCode: "pre code.javascript.hljs",
		getCookiesButton: '#getCookies .set-a-cookie',
		// cy.getAllCookies section
		getAllCookiesSection: '#getAllCookies',
		getAllCookiesHeader: "h4#getAllCookies",
		getAllCookiesLink: "a[href='https://on.cypress.io/getallcookies']",
		getAllCookiesCode: "pre code.javascript.hljs",
		// cy.setCookie section
		setCookieSection: '#setCookie',
		setCookieHeader: "h4#setCookie",
		setCookieLink: "a[href='https://on.cypress.io/setcookie']",
		setCookieCode: "pre code.javascript.hljs",
		// cy.clearCookie section
		clearCookieSection: '#clearCookie',
		clearCookieHeader: "h4#clearCookie",
		clearCookieLink: "a[href='https://on.cypress.io/clearcookie']",
		clearCookieCode: "pre code.javascript.hljs",
		clearCookieButton: '#clearCookie .set-a-cookie',
		// cy.clearCookies section
		clearCookiesSection: '#clearCookies',
		clearCookiesHeader: "h4#clearCookies",
		clearCookiesLink: "a[href='https://on.cypress.io/clearcookies']",
		clearCookiesCode: "pre code.javascript.hljs",
		clearCookiesButton: '#clearCookies .set-a-cookie',
		// cy.clearAllCookies section
		clearAllCookiesSection: '#clearAllCookies',
		clearAllCookiesHeader: "h4#clearAllCookies",
		clearAllCookiesLink: "a[href='https://on.cypress.io/clearallcookies']",
		clearAllCookiesCode: "pre code.javascript.hljs",
	};

	// Getters for elements
	// ...existing code...
	getBanner() { return cy.get(this.#elements.banner); }
	getMainHeader() { return cy.get(this.#elements.mainHeader); }
	getDocsLink() { return cy.get(this.#elements.docsLink); }

	// Section getters
	getGetCookieSection() { return cy.get(this.#elements.getCookieSection); }
	getGetCookieHeader() { return cy.get(this.#elements.getCookieHeader); }
	getGetCookieLink() { return cy.get(this.#elements.getCookieLink); }
	getGetCookieCode() { return cy.get(this.#elements.getCookieCode); }
	getGetCookieButton() { return cy.get(this.#elements.getCookieButton); }

	getGetCookiesSection() { return cy.get(this.#elements.getCookiesSection); }
	getGetCookiesHeader() { return cy.get(this.#elements.getCookiesHeader); }
	getGetCookiesLink() { return cy.get(this.#elements.getCookiesLink); }
	getGetCookiesCode() { return cy.get(this.#elements.getCookiesCode); }
	getGetCookiesButton() { return cy.get(this.#elements.getCookiesButton); }

	getGetAllCookiesSection() { return cy.get(this.#elements.getAllCookiesSection); }
	getGetAllCookiesHeader() { return cy.get(this.#elements.getAllCookiesHeader); }
	getGetAllCookiesLink() { return cy.get(this.#elements.getAllCookiesLink); }
	getGetAllCookiesCode() { return cy.get(this.#elements.getAllCookiesCode); }

	getSetCookieSection() { return cy.get(this.#elements.setCookieSection); }
	getSetCookieHeader() { return cy.get(this.#elements.setCookieHeader); }
	getSetCookieLink() { return cy.get(this.#elements.setCookieLink); }
	getSetCookieCode() { return cy.get(this.#elements.setCookieCode); }

	getClearCookieSection() { return cy.get(this.#elements.clearCookieSection); }
	getClearCookieHeader() { return cy.get(this.#elements.clearCookieHeader); }
	getClearCookieLink() { return cy.get(this.#elements.clearCookieLink); }
	getClearCookieCode() { return cy.get(this.#elements.clearCookieCode); }
	getClearCookieButton() { return cy.get(this.#elements.clearCookieButton); }

	getClearCookiesSection() { return cy.get(this.#elements.clearCookiesSection); }
	getClearCookiesHeader() { return cy.get(this.#elements.clearCookiesHeader); }
	getClearCookiesLink() { return cy.get(this.#elements.clearCookiesLink); }
	getClearCookiesCode() { return cy.get(this.#elements.clearCookiesCode); }
	getClearCookiesButton() { return cy.get(this.#elements.clearCookiesButton); }

	getClearAllCookiesSection() { return cy.get(this.#elements.clearAllCookiesSection); }
	getClearAllCookiesHeader() { return cy.get(this.#elements.clearAllCookiesHeader); }
	getClearAllCookiesLink() { return cy.get(this.#elements.clearAllCookiesLink); }
	getClearAllCookiesCode() { return cy.get(this.#elements.clearAllCookiesCode); }

	// Workflow methods
	// ...existing code...

	assertBannerVisible() { this.getBanner().should('be.visible'); }
	assertMainHeaderVisible() { this.getMainHeader().should('be.visible').and('contain', 'Cookies'); }
	assertDocsLinkVisible() { this.getDocsLink().should('be.visible'); }
	clickDocsLink() { this.getDocsLink().should('be.visible').first().invoke('removeAttr', 'target').click(); }

	// cy.getCookie workflows
	assertGetCookieHeaderVisible() { this.getGetCookieHeader().should('be.visible'); }
	assertGetCookieLinkVisible() { this.getGetCookieLink().should('be.visible'); }
	clickGetCookieLink() { this.getGetCookieLink().should('be.visible').first().invoke('removeAttr', 'target').click(); }
	assertGetCookieCodeVisible() { this.getGetCookieCode().should('be.visible'); }
	clickGetCookieButton() { this.getGetCookieButton().should('be.visible').click(); }

	// cy.getCookies workflows
	assertGetCookiesHeaderVisible() { this.getGetCookiesHeader().should('be.visible'); }
	assertGetCookiesLinkVisible() { this.getGetCookiesLink().should('be.visible'); }
	clickGetCookiesLink() { this.getGetCookiesLink().should('be.visible').first().invoke('removeAttr', 'target').click(); }
	assertGetCookiesCodeVisible() { this.getGetCookiesCode().should('be.visible'); }
	clickGetCookiesButton() { this.getGetCookiesButton().should('be.visible').click(); }

	// cy.getAllCookies workflows
	assertGetAllCookiesHeaderVisible() { this.getGetAllCookiesHeader().should('be.visible'); }
	assertGetAllCookiesLinkVisible() { this.getGetAllCookiesLink().should('be.visible'); }
	clickGetAllCookiesLink() { this.getGetAllCookiesLink().should('be.visible').first().invoke('removeAttr', 'target').click(); }
	assertGetAllCookiesCodeVisible() { this.getGetAllCookiesCode().should('be.visible'); }

	// cy.setCookie workflows
	assertSetCookieHeaderVisible() { this.getSetCookieHeader().should('be.visible'); }
	assertSetCookieLinkVisible() { this.getSetCookieLink().should('be.visible'); }
	clickSetCookieLink() { this.getSetCookieLink().should('be.visible').first().invoke('removeAttr', 'target').click(); }
	assertSetCookieCodeVisible() { this.getSetCookieCode().should('be.visible'); }

	// cy.clearCookie workflows
	assertClearCookieHeaderVisible() { this.getClearCookieHeader().should('be.visible'); }
	assertClearCookieLinkVisible() { this.getClearCookieLink().should('be.visible'); }
	clickClearCookieLink() { this.getClearCookieLink().should('be.visible').first().invoke('removeAttr', 'target').click(); }
	assertClearCookieCodeVisible() { this.getClearCookieCode().should('be.visible'); }
	clickClearCookieButton() { this.getClearCookieButton().should('be.visible').click(); }

	// cy.clearCookies workflows
	assertClearCookiesHeaderVisible() { this.getClearCookiesHeader().should('be.visible'); }
	assertClearCookiesLinkVisible() { this.getClearCookiesLink().should('be.visible'); }
	clickClearCookiesLink() { this.getClearCookiesLink().should('be.visible').first().invoke('removeAttr', 'target').click(); }
	assertClearCookiesCodeVisible() { this.getClearCookiesCode().should('be.visible'); }
	clickClearCookiesButton() { this.getClearCookiesButton().should('be.visible').click(); }

	// cy.clearAllCookies workflows
	assertClearAllCookiesHeaderVisible() { this.getClearAllCookiesHeader().should('be.visible'); }
	assertClearAllCookiesLinkVisible() { this.getClearAllCookiesLink().should('be.visible'); }
	clickClearAllCookiesLink() { this.getClearAllCookiesLink().should('be.visible').first().invoke('removeAttr', 'target').click(); }
	assertClearAllCookiesCodeVisible() { this.getClearAllCookiesCode().should('be.visible'); }

	// Full workflow for all cookies examples
	runAllCookiesWorkflows() {
	// ...existing code...
		// Banner and header
		this.assertBannerVisible();
		this.assertMainHeaderVisible();
		// Docs link
		this.assertDocsLinkVisible();
		// cy.getCookie section
		this.assertGetCookieHeaderVisible();
		this.assertGetCookieLinkVisible();
		this.assertGetCookieCodeVisible();
		this.clickGetCookieButton();
		// cy.getCookies section
		this.assertGetCookiesHeaderVisible();
		this.assertGetCookiesLinkVisible();
		this.assertGetCookiesCodeVisible();
		this.clickGetCookiesButton();
		// cy.getAllCookies section
		this.assertGetAllCookiesHeaderVisible();
		this.assertGetAllCookiesLinkVisible();
		this.assertGetAllCookiesCodeVisible();
		// cy.setCookie section
		this.assertSetCookieHeaderVisible();
		this.assertSetCookieLinkVisible();
		this.assertSetCookieCodeVisible();
		// cy.clearCookie section
		this.assertClearCookieHeaderVisible();
		this.assertClearCookieLinkVisible();
		this.assertClearCookieCodeVisible();
		this.clickClearCookieButton();
		// cy.clearCookies section
		this.assertClearCookiesHeaderVisible();
		this.assertClearCookiesLinkVisible();
		this.assertClearCookiesCodeVisible();
		this.clickClearCookiesButton();
		// cy.clearAllCookies section
		this.assertClearAllCookiesHeaderVisible();
		this.assertClearAllCookiesLinkVisible();
		this.assertClearAllCookiesCodeVisible();
	}
}
