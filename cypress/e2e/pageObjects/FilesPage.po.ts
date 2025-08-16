import { BasePage } from './BasePage';

export class FilesPage extends BasePage {
	constructor() {
		super('/commands/files');
	}

	// Private element locators
	#elements = {
		fixtureBtn: () => cy.get('.fixture-btn'),
		filesHeader: () => cy.contains('h1, h2, h3, h4', 'Files'),
		cyFixtureCommandLink: () => cy.contains('a', 'cy.fixture()'),
		cyReadFileCommandLink: () => cy.contains('a', 'cy.readFile()'),
		cyWriteFileCommandLink: () => cy.contains('a', 'cy.writeFile()'),
		getCommentButton: () => cy.contains('button', 'Get Comment'),
		additionalLinks: {
			cypressIo: () => cy.contains('a', 'cypress.io'),
			utilities: () => cy.contains('a', 'Utilities'),
			cypressApi: () => cy.contains('a', 'Cypress API'),
			github: () => cy.contains('a', 'GitHub'),
		},
	};

	// Public getters
	get fixtureBtn() { return this.#elements.fixtureBtn(); }
	get filesHeader() { return this.#elements.filesHeader(); }
	get cyFixtureCommandLink() { return this.#elements.cyFixtureCommandLink(); }
	get cyReadFileCommandLink() { return this.#elements.cyReadFileCommandLink(); }
	get cyWriteFileCommandLink() { return this.#elements.cyWriteFileCommandLink(); }
	get getCommentButton() { return this.#elements.getCommentButton(); }
	get additionalLinks() { return this.#elements.additionalLinks; }

	// Interaction methods
	clickFixtureBtn() {
		return this.#elements.fixtureBtn().click();
	}
	clickGetCommentButton() {
		return this.#elements.getCommentButton().click();
	}
	clickCyFixtureCommandLink() {
		return this.#elements.cyFixtureCommandLink().click();
	}
	clickCyReadFileCommandLink() {
		return this.#elements.cyReadFileCommandLink().click();
	}
	clickCyWriteFileCommandLink() {
		return this.#elements.cyWriteFileCommandLink().click();
	}

	// Workflow examples
	interceptGetCommentWithFixture() {
		cy.intercept('GET', '**/comments/*', { fixture: 'example.json' }).as('getComment');
		this.clickFixtureBtn();
		cy.wait('@getComment').its('response.body')
			.should('have.property', 'name')
			.and('include', 'Using fixtures to represent data');
	}

	loadFixtureAndCompareWithRequire() {
			const requiredExample = require('../../fixtures/example');
			cy.fixture('example.json').as('example');
			cy.wrap({}).then(function () {
				expect(this.example, 'fixture in the test context')
					.to.deep.equal(requiredExample);
				cy.wrap(this.example)
					.should('deep.equal', requiredExample);
			});
	}

	readFileAndAssertObject(filePath: string) {
		cy.readFile(filePath).then((json) => {
			expect(json).to.be.an('object');
		});
	}

	writeFileAndAssertFixture(filePath: string, data: any) {
		cy.writeFile(filePath, data);
		cy.fixture(filePath.replace('cypress/fixtures/', '').replace('.json', '')).should((fixtureData) => {
			expect(fixtureData).to.deep.equal(data);
		});
	}
}
