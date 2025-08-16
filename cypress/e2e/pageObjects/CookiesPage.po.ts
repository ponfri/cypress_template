import { BasePage } from './BasePage';

export class CookiesPage extends BasePage {
	constructor() {
		super('/commands/cookies');
	}

	// Private element locators
	#elements = {
		setCookieBtn: () => cy.get('#getCookie .set-a-cookie'),
		setCookiesBtn: () => cy.get('#getCookies .set-a-cookie'),
		setAllCookiesBtn: () => cy.get('#getAllCookies .set-a-cookie'),
		setClearCookieBtn: () => cy.get('#clearCookie .set-a-cookie'),
		setClearCookiesBtn: () => cy.get('#clearCookies .set-a-cookie'),
		setClearAllCookiesBtn: () => cy.get('#clearAllCookies .set-a-cookie'),
		cookiesHeader: () => cy.contains('h1, h2, h3, h4', 'Cookies'),
		cyGetCookieCommandLink: () => cy.contains('a', 'cy.getCookie()'),
		cyGetCookiesCommandLink: () => cy.contains('a', 'cy.getCookies()'),
		cyGetAllCookiesCommandLink: () => cy.contains('a', 'cy.getAllCookies()'),
		cySetCookieCommandLink: () => cy.contains('a', 'cy.setCookie()'),
		cyClearCookieCommandLink: () => cy.contains('a', 'cy.clearCookie()'),
		cyClearCookiesCommandLink: () => cy.contains('a', 'cy.clearCookies()'),
		cyClearAllCookiesCommandLink: () => cy.contains('a', 'cy.clearAllCookies()'),
		additionalLinks: {
			cypressIo: () => cy.contains('a', 'cypress.io'),
			utilities: () => cy.contains('a', 'Utilities'),
			cypressApi: () => cy.contains('a', 'Cypress API'),
			github: () => cy.contains('a', 'GitHub'),
		},
	};

	// Public getters
	get setCookieBtn() { return this.#elements.setCookieBtn(); }
	get setCookiesBtn() { return this.#elements.setCookiesBtn(); }
	get setAllCookiesBtn() { return this.#elements.setAllCookiesBtn(); }
	get setClearCookieBtn() { return this.#elements.setClearCookieBtn(); }
	get setClearCookiesBtn() { return this.#elements.setClearCookiesBtn(); }
	get setClearAllCookiesBtn() { return this.#elements.setClearAllCookiesBtn(); }
	get cookiesHeader() { return this.#elements.cookiesHeader(); }
	get cyGetCookieCommandLink() { return this.#elements.cyGetCookieCommandLink(); }
	get cyGetCookiesCommandLink() { return this.#elements.cyGetCookiesCommandLink(); }
	get cyGetAllCookiesCommandLink() { return this.#elements.cyGetAllCookiesCommandLink(); }
	get cySetCookieCommandLink() { return this.#elements.cySetCookieCommandLink(); }
	get cyClearCookieCommandLink() { return this.#elements.cyClearCookieCommandLink(); }
	get cyClearCookiesCommandLink() { return this.#elements.cyClearCookiesCommandLink(); }
	get cyClearAllCookiesCommandLink() { return this.#elements.cyClearAllCookiesCommandLink(); }
	get additionalLinks() { return this.#elements.additionalLinks; }

	// Interaction methods
	clickSetCookieBtn() {
		return this.#elements.setCookieBtn().click();
	}
	clickSetCookiesBtn() {
		return this.#elements.setCookiesBtn().click();
	}
	clickSetAllCookiesBtn() {
		return this.#elements.setAllCookiesBtn().click();
	}
	clickSetClearCookieBtn() {
		return this.#elements.setClearCookieBtn().click();
	}
	clickSetClearCookiesBtn() {
		return this.#elements.setClearCookiesBtn().click();
	}
	clickSetClearAllCookiesBtn() {
		return this.#elements.setClearAllCookiesBtn().click();
	}
	clickCyGetCookieCommandLink() {
		return this.#elements.cyGetCookieCommandLink().click();
	}
	clickCyGetCookiesCommandLink() {
		return this.#elements.cyGetCookiesCommandLink().click();
	}
	clickCyGetAllCookiesCommandLink() {
		return this.#elements.cyGetAllCookiesCommandLink().click();
	}
	clickCySetCookieCommandLink() {
		return this.#elements.cySetCookieCommandLink().click();
	}
	clickCyClearCookieCommandLink() {
		return this.#elements.cyClearCookieCommandLink().click();
	}
	clickCyClearCookiesCommandLink() {
		return this.#elements.cyClearCookiesCommandLink().click();
	}
	clickCyClearAllCookiesCommandLink() {
		return this.#elements.cyClearAllCookiesCommandLink().click();
	}

	// Workflow examples
	setCookieAndAssert() {
		this.clickSetCookieBtn();
		cy.getCookie('token').should('have.property', 'value', '123ABC');
	}

	setCookiesAndAssert() {
		this.clickSetCookiesBtn();
		cy.getCookies().should('have.length', 1).should((cookies) => {
			expect(cookies[0]).to.have.property('name', 'token');
			expect(cookies[0]).to.have.property('value', '123ABC');
			expect(cookies[0]).to.have.property('httpOnly', false);
			expect(cookies[0]).to.have.property('secure', false);
			expect(cookies[0]).to.have.property('domain');
			expect(cookies[0]).to.have.property('path');
		});
	}

	setAllCookiesAndAssert() {
		this.clickSetAllCookiesBtn();
		cy.getAllCookies().should('have.length', 2).should((cookies) => {
			expect(cookies[0]).to.have.property('name', 'key');
			expect(cookies[0]).to.have.property('value', 'value');
			expect(cookies[0]).to.have.property('httpOnly', false);
			expect(cookies[0]).to.have.property('secure', false);
			expect(cookies[0]).to.have.property('domain');
			expect(cookies[0]).to.have.property('path');
			expect(cookies[1]).to.have.property('name', 'key');
			expect(cookies[1]).to.have.property('value', 'value');
			expect(cookies[1]).to.have.property('httpOnly', false);
			expect(cookies[1]).to.have.property('secure', false);
			expect(cookies[1]).to.have.property('domain', 'example.com');
			expect(cookies[1]).to.have.property('path');
		});
	}

	setClearCookieAndAssert() {
		this.clickSetClearCookieBtn();
		cy.getCookie('token').should('have.property', 'value', '123ABC');
		cy.clearCookie('token');
		cy.getCookie('token').should('be.null');
	}

	setClearCookiesAndAssert() {
		this.clickSetClearCookiesBtn();
		cy.getCookies().should('have.length', 1);
		cy.clearCookies();
		cy.getCookies().should('be.empty');
	}

	setClearAllCookiesAndAssert() {
		this.clickSetClearAllCookiesBtn();
		cy.getAllCookies().should('have.length', 1);
		cy.clearAllCookies();
		cy.getAllCookies().should('be.empty');
	}
}
