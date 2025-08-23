import { BasePage } from './BasePage.po';

/**
 * Page Object for the Cookies page in Cypress Kitchen Sink
 * Covers all workflows for cookies commands, buttons, code blocks, headers, and external links
 */
export default class CookiesPage extends BasePage {
		// Locators
		#elements = {
			cookiesHeader: 'h1',
			getCookieHeader: 'cy.getCookie()',
			getCookiesHeader: 'cy.getCookies()',
			getAllCookiesHeader: 'cy.getAllCookies()',
			setCookieHeader: 'cy.setCookie()',
			clearCookieHeader: 'cy.clearCookie()',
			clearCookiesHeader: 'cy.clearCookies()',
			clearAllCookiesHeader: 'cy.clearAllCookies()',
			setCookieButton1: '#getCookie .set-a-cookie',
			setCookieButton2: '#getCookies .set-a-cookie',
			setCookieButton3: '#clearCookie .set-a-cookie',
			setCookieButton4: '#clearCookies .set-a-cookie',
			setCookieButton5: 'button.set-a-cookie',
			getCookieCode: 0,
			getCookiesCode: 1,
			getAllCookiesCode: 2,
			setCookieCode: 3,
			clearCookieCode: 4,
			clearCookiesCode: 5,
			clearAllCookiesCode: 6,
		};

		// Getters
		get cookiesHeader() { return cy.contains(this.#elements.cookiesHeader); }
		get getCookieHeader() { return cy.contains('h4', this.#elements.getCookieHeader); }
		get getCookiesHeader() { return cy.contains('h4', this.#elements.getCookiesHeader); }
		get getAllCookiesHeader() { return cy.contains('h4', this.#elements.getAllCookiesHeader); }
		get setCookieHeader() { return cy.contains('h4', this.#elements.setCookieHeader); }
		get clearCookieHeader() { return cy.contains('h4', this.#elements.clearCookieHeader); }
		get clearCookiesHeader() { return cy.contains('h4', this.#elements.clearCookiesHeader); }
		get clearAllCookiesHeader() { return cy.contains('h4', this.#elements.clearAllCookiesHeader); }
		get setCookieButton1() { return cy.get(this.#elements.setCookieButton1); }
		get setCookieButton2() { return cy.get(this.#elements.setCookieButton2); }
		get setCookieButton3() { return cy.get(this.#elements.setCookieButton3); }
		get setCookieButton4() { return cy.get(this.#elements.setCookieButton4); }
		get setCookieButton5() { return cy.get(this.#elements.setCookieButton5).eq(4); }
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
		setAndVerifyCookie(cookieName: string, value: string) {
			cy.setCookie(cookieName, value);
			cy.getCookie(cookieName).should('have.property', 'value', value);
		}
		clearAndVerifyCookie(cookieName: string) {
			cy.clearCookie(cookieName);
			cy.getCookie(cookieName).should('be.null');
		}
		setAndVerifyAllCookies(cookies: {name: string, value: string}[]) {
			cookies.forEach(c => cy.setCookie(c.name, c.value));
			cy.getAllCookies().should('have.length', cookies.length);
		}
		clearAndVerifyAllCookies() {
			cy.clearAllCookies();
			cy.getAllCookies().should('be.empty');
		}
}
