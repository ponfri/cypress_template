import { BasePage } from './BasePage';

export class CypressAPIPage extends BasePage {
	constructor() {
		super('/cypress-api');
	}

	// Private element locators
	#elements = {
		domPHidden: () => cy.get('.dom-p p.hidden'),
		domPVisible: () => cy.get('.dom-p p.visible'),
		cypressAPIHeader: () => cy.contains('h1, h2, h3, h4', 'Cypress API'),
		cyCommandsAddCommandLink: () => cy.contains('a', 'Cypress.Commands.add()'),
		cyCookiesDebugCommandLink: () => cy.contains('a', 'Cypress.Cookies.debug()'),
		cyArchCommandLink: () => cy.contains('a', 'Cypress.arch'),
		cyConfigCommandLink: () => cy.contains('a', 'Cypress.config()'),
		cyDomIsHiddenCommandLink: () => cy.contains('a', 'Cypress.dom.isHidden()'),
		cyEnvCommandLink: () => cy.contains('a', 'Cypress.env()'),
		cyLogCommandLink: () => cy.contains('a', 'Cypress.log()'),
		cyPlatformCommandLink: () => cy.contains('a', 'Cypress.platform'),
		cyVersionCommandLink: () => cy.contains('a', 'Cypress.version'),
		additionalLinks: {
			cypressIo: () => cy.contains('a', 'cypress.io'),
			utilities: () => cy.contains('a', 'Utilities'),
			cypressApi: () => cy.contains('a', 'Cypress API'),
			github: () => cy.contains('a', 'GitHub'),
		},
	};

	// Public getters
	get domPHidden() { return this.#elements.domPHidden(); }
	get domPVisible() { return this.#elements.domPVisible(); }
	get cypressAPIHeader() { return this.#elements.cypressAPIHeader(); }
	get cyCommandsAddCommandLink() { return this.#elements.cyCommandsAddCommandLink(); }
	get cyCookiesDebugCommandLink() { return this.#elements.cyCookiesDebugCommandLink(); }
	get cyArchCommandLink() { return this.#elements.cyArchCommandLink(); }
	get cyConfigCommandLink() { return this.#elements.cyConfigCommandLink(); }
	get cyDomIsHiddenCommandLink() { return this.#elements.cyDomIsHiddenCommandLink(); }
	get cyEnvCommandLink() { return this.#elements.cyEnvCommandLink(); }
	get cyLogCommandLink() { return this.#elements.cyLogCommandLink(); }
	get cyPlatformCommandLink() { return this.#elements.cyPlatformCommandLink(); }
	get cyVersionCommandLink() { return this.#elements.cyVersionCommandLink(); }
	get additionalLinks() { return this.#elements.additionalLinks; }

	// Interaction methods
	clickDomPHidden() {
		return this.#elements.domPHidden().click();
	}
	clickDomPVisible() {
		return this.#elements.domPVisible().click();
	}
	clickCyCommandsAddCommandLink() {
		return this.#elements.cyCommandsAddCommandLink().click();
	}
	clickCyCookiesDebugCommandLink() {
		return this.#elements.cyCookiesDebugCommandLink().click();
	}
	clickCyArchCommandLink() {
		return this.#elements.cyArchCommandLink().click();
	}
	clickCyConfigCommandLink() {
		return this.#elements.cyConfigCommandLink().click();
	}
	clickCyDomIsHiddenCommandLink() {
		return this.#elements.cyDomIsHiddenCommandLink().click();
	}
	clickCyEnvCommandLink() {
		return this.#elements.cyEnvCommandLink().click();
	}
	clickCyLogCommandLink() {
		return this.#elements.cyLogCommandLink().click();
	}
	clickCyPlatformCommandLink() {
		return this.#elements.cyPlatformCommandLink().click();
	}
	clickCyVersionCommandLink() {
		return this.#elements.cyVersionCommandLink().click();
	}

	// Workflow examples
	assertDomIsHidden() {
		let hiddenP = Cypress.$('.dom-p p.hidden').get(0);
		let visibleP = Cypress.$('.dom-p p.visible').get(0);
		expect(Cypress.dom.isHidden(hiddenP)).to.be.true;
		expect(Cypress.dom.isHidden(visibleP)).to.be.false;
	}

	assertConfigProperties() {
		const myConfig = Cypress.config();
		expect(myConfig).to.have.property('animationDistanceThreshold', 5);
		expect(myConfig).to.have.property('baseUrl');
		expect(myConfig).to.have.property('defaultCommandTimeout', 4000);
		expect(myConfig).to.have.property('requestTimeout', 5000);
		expect(myConfig).to.have.property('responseTimeout', 30000);
		expect(myConfig).to.have.property('viewportHeight', 660);
		expect(myConfig).to.have.property('viewportWidth', 1000);
		expect(myConfig).to.have.property('pageLoadTimeout');
		expect(myConfig).to.have.property('waitForAnimations');
	}

	assertEnvVariables() {
		Cypress.env({ host: 'veronica.dev.local', api_server: 'http://localhost:8888/v1/' });
		expect(Cypress.env('host')).to.eq('veronica.dev.local');
		Cypress.env('api_server', 'http://localhost:8888/v2/');
		expect(Cypress.env('api_server')).to.eq('http://localhost:8888/v2/');
		expect(Cypress.env()).to.have.property('host', 'veronica.dev.local');
		expect(Cypress.env()).to.have.property('api_server', 'http://localhost:8888/v2/');
	}

	assertPlatformAndVersion() {
		expect(Cypress.platform).to.exist;
		expect(Cypress.version).to.exist;
	}
}
