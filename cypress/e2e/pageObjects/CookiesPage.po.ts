import { BasePage } from './BasePage.po';

/**
 * Page Object for the Cookies page in Cypress Kitchen Sink
 * Covers all workflows for cookies commands, buttons, code blocks, headers, and external links
 */
export default class CookiesPage extends BasePage {
		// Locators
			#elements = {
				cookiesHeader: 'h1[data-cy="cookies-header"]',
				getCookieHeader: 'h4[data-cy="get-cookie-header"]',
				getCookiesHeader: 'h4[data-cy="get-cookies-header"]',
				getAllCookiesHeader: 'h4[data-cy="get-all-cookies-header"]',
				setCookieHeader: 'h4[data-cy="set-cookie-header"]',
				clearCookieHeader: 'h4[data-cy="clear-cookie-header"]',
				clearCookiesHeader: 'h4[data-cy="clear-cookies-header"]',
				clearAllCookiesHeader: 'h4[data-cy="clear-all-cookies-header"]',
				setCookieButton1: '#getCookie .set-a-cookie[data-cy="set-cookie-btn-1"]',
				setCookieButton2: '#getCookies .set-a-cookie[data-cy="set-cookie-btn-2"]',
				setCookieButton3: '#clearCookie .set-a-cookie[data-cy="set-cookie-btn-3"]',
				setCookieButton4: '#clearCookies .set-a-cookie[data-cy="set-cookie-btn-4"]',
				setCookieButton5: 'button.set-a-cookie[data-cy="set-cookie-btn-5"]',
				getCookieCode: 0,
				getCookiesCode: 1,
				getAllCookiesCode: 2,
				setCookieCode: 3,
				clearCookieCode: 4,
				clearCookiesCode: 5,
				clearAllCookiesCode: 6,
			};

		// Getters
		get cookiesHeader() { return cy.get(this.#elements.cookiesHeader); }
		get getCookieHeader() { return cy.get(this.#elements.getCookieHeader); }
		get getCookiesHeader() { return cy.get(this.#elements.getCookiesHeader); }
		get getAllCookiesHeader() { return cy.get(this.#elements.getAllCookiesHeader); }
		get setCookieHeader() { return cy.get(this.#elements.setCookieHeader); }
		get clearCookieHeader() { return cy.get(this.#elements.clearCookieHeader); }
		get clearCookiesHeader() { return cy.get(this.#elements.clearCookiesHeader); }
		get clearAllCookiesHeader() { return cy.get(this.#elements.clearAllCookiesHeader); }
		get setCookieButton1() { return cy.get(this.#elements.setCookieButton1); }
		get setCookieButton2() { return cy.get(this.#elements.setCookieButton2); }
		get setCookieButton3() { return cy.get(this.#elements.setCookieButton3); }
		get setCookieButton4() { return cy.get(this.#elements.setCookieButton4); }
		get setCookieButton5() { return cy.get(this.#elements.setCookieButton5); }
		get getCookieCode() { return cy.get('pre').eq(this.#elements.getCookieCode); }
		get getCookiesCode() { return cy.get('pre').eq(this.#elements.getCookiesCode); }
		get getAllCookiesCode() { return cy.get('pre').eq(this.#elements.getAllCookiesCode); }
		get setCookieCode() { return cy.get('pre').eq(this.#elements.setCookieCode); }
		get clearCookieCode() { return cy.get('pre').eq(this.#elements.clearCookieCode); }
		get clearCookiesCode() { return cy.get('pre').eq(this.#elements.clearCookiesCode); }
		get clearAllCookiesCode() { return cy.get('pre').eq(this.#elements.clearAllCookiesCode); }

		// Interaction methods
		clickSetCookieButton1() { this.setCookieButton1.click(); }
		clickSetCookieButton2() { this.setCookieButton2.click(); }
		clickSetCookieButton3() { this.setCookieButton3.click(); }
		clickSetCookieButton4() { this.setCookieButton4.click(); }
		clickSetCookieButton5() { this.setCookieButton5.click(); }

		// Workflow methods (add as needed)
			setCookieWorkflow(cookieName: string, value: string) {
				cy.setCookie(cookieName, value);
				// Assertion should be done in test, not here
				return this;
			}
			clearCookieWorkflow(cookieName: string) {
				cy.clearCookie(cookieName);
				// Assertion should be done in test, not here
				return this;
			}
			setAllCookiesWorkflow(cookies: {name: string, value: string}[]) {
				cookies.forEach(c => cy.setCookie(c.name, c.value));
				// Assertion should be done in test, not here
				return this;
			}
			clearAllCookiesWorkflow() {
				cy.clearAllCookies();
				// Assertion should be done in test, not here
				return this;
			}
}
