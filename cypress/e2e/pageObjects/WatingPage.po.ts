import { BasePage } from './BasePage';

export class WatingPage extends BasePage {
	constructor() {
		super('/commands/waiting');
	}

	// Private element locators
	#elements = {
		waitInput1: () => cy.get('.wait-input1'),
		waitInput2: () => cy.get('.wait-input2'),
		waitInput3: () => cy.get('.wait-input3'),
		networkBtn: () => cy.get('.network-btn'),
		waitingHeader: () => cy.contains('h1, h2, h3, h4', 'Waiting'),
		cyWaitCommandLink: () => cy.contains('a', 'cy.wait()'),
		getCommentButton: () => cy.contains('button', 'Get Comment'),
		additionalLinks: {
			cypressIo: () => cy.contains('a', 'cypress.io'),
			utilities: () => cy.contains('a', 'Utilities'),
			cypressApi: () => cy.contains('a', 'Cypress API'),
			github: () => cy.contains('a', 'GitHub'),
		},
	};

	// Public getters
	get waitInput1() { return this.#elements.waitInput1(); }
	get waitInput2() { return this.#elements.waitInput2(); }
	get waitInput3() { return this.#elements.waitInput3(); }
	get networkBtn() { return this.#elements.networkBtn(); }
	get waitingHeader() { return this.#elements.waitingHeader(); }
	get cyWaitCommandLink() { return this.#elements.cyWaitCommandLink(); }
	get getCommentButton() { return this.#elements.getCommentButton(); }
	get additionalLinks() { return this.#elements.additionalLinks; }

	// Interaction methods
	typeInWaitInput1(text: string) {
		return this.#elements.waitInput1().type(text);
	}
	typeInWaitInput2(text: string) {
		return this.#elements.waitInput2().type(text);
	}
	typeInWaitInput3(text: string) {
		return this.#elements.waitInput3().type(text);
	}
	clickNetworkBtn() {
		return this.#elements.networkBtn().click();
	}
	clickGetCommentButton() {
		return this.#elements.getCommentButton().click();
	}
	clickCyWaitCommandLink() {
		return this.#elements.cyWaitCommandLink().click();
	}

	// Workflow example: Type in all wait inputs with waits
	typeInAllWaitInputsWithWait(text: string, waitMs: number = 1000) {
		this.typeInWaitInput1(text);
		cy.wait(waitMs);
		this.typeInWaitInput2(text);
		cy.wait(waitMs);
		this.typeInWaitInput3(text);
		cy.wait(waitMs);
	}

	// Alias a route and wait for response
	aliasGetCommentRouteAndWait() {
		cy.intercept('GET', '**/comments/*').as('getComment');
		this.clickNetworkBtn();
		cy.wait('@getComment').its('response.statusCode').should('be.oneOf', [200, 304]);
	}
}
