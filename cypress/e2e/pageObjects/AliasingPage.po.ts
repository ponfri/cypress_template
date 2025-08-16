import { BasePage } from './BasePage';

export class AliasingPage extends BasePage {
	constructor() {
		super('/commands/aliasing');
	}

	// Private element locators
	#elements = {
		asTable: () => cy.get('.as-table'),
		asTableRows: () => cy.get('.as-table tbody>tr'),
		firstRowFirstCellButton: () => cy.get('.as-table tbody>tr').first().find('td').first().find('button'),
		networkBtn: () => cy.get('.network-btn'),
		// Additional elements from page structure
		aliasingHeader: () => cy.contains('h1, h2, h3, h4', 'Aliasing'),
		asCommandLink: () => cy.contains('a', '.as()'),
		getCommentButton: () => cy.contains('button', 'Get Comment'),
		additionalLinks: {
			cypressIo: () => cy.contains('a', 'cypress.io'),
			utilities: () => cy.contains('a', 'Utilities'),
			cypressApi: () => cy.contains('a', 'Cypress API'),
			github: () => cy.contains('a', 'GitHub'),
		},
	};

	// Public getters
	get asTable() { return this.#elements.asTable(); }
	get asTableRows() { return this.#elements.asTableRows(); }
	get firstRowFirstCellButton() { return this.#elements.firstRowFirstCellButton(); }
	get networkBtn() { return this.#elements.networkBtn(); }
	get aliasingHeader() { return this.#elements.aliasingHeader(); }
	get asCommandLink() { return this.#elements.asCommandLink(); }
	get getCommentButton() { return this.#elements.getCommentButton(); }
	get additionalLinks() { return this.#elements.additionalLinks; }

	// Interaction methods
	clickFirstRowFirstCellButton() {
		return this.#elements.firstRowFirstCellButton().click();
	}

	clickNetworkBtn() {
		return this.#elements.networkBtn().click();
	}

	clickGetCommentButton() {
		return this.#elements.getCommentButton().click();
	}

	clickAsCommandLink() {
		return this.#elements.asCommandLink().click();
	}

	// Workflow example: Click the first button in the table and check its alias
	clickFirstBtnAndCheckAlias() {
		this.clickFirstRowFirstCellButton();
		cy.get('@firstBtn').should('have.class', 'btn-success').and('contain', 'Changed');
	}

	// Alias a route and wait for response
	aliasGetCommentRouteAndWait() {
		cy.intercept('GET', '**/comments/*').as('getComment');
		this.clickNetworkBtn();
		cy.wait('@getComment').its('response.statusCode').should('eq', 200);
	}
}
