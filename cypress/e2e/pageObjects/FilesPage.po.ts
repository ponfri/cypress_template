import { BasePage } from './BasePage.po';

/**
 * Page Object for the Files page in Cypress Kitchen Sink
 * Covers all workflows for cy.fixture(), cy.readFile(), cy.writeFile(), buttons, comment divs, code blocks, and external links
 */
export default class FilesPage extends BasePage {
	getFilesSection() {
		return cy.get(this.#elements.filesSection);
	}
	getCyFixtureHeader() {
		return cy.get(this.#elements.cyFixtureHeader);
	}
	getCyFixtureCode() {
		return cy.get(this.#elements.cyFixtureCode);
	}
	getFixtureBtn() {
		return cy.get(this.#elements.fixtureBtn);
	}
	// Private selectors for all relevant elements
	#elements = {
		filesSection: "h1:contains('Files')",
		cyFixtureHeader: "h4#fixture:has(a[href='https://on.cypress.io/fixture'])",
		cyFixtureCode: "pre code.javascript.hljs",
		fixtureBtn: '.fixture-btn',
		fixtureComment: '.fixture-comment',
		cyRequireHeader: "h4#require",
		cyRequireCode: "pre code.javascript.hljs",
		cyReadFileHeader: "h4#readFile:has(a[href='https://on.cypress.io/readfile'])",
		cyReadFileCode: "pre code.javascript.hljs",
		cyWriteFileHeader: "h4#writefile:has(a[href='https://on.cypress.io/writefile'])",
		cyWriteFileCode: "pre code.javascript.hljs",
		moreInfoLinks: [
			"a[href='https://on.cypress.io/api']"
		]
	};

	// Getters for elements
	// ...existing code...
	// ...existing code...
	// ...existing code...
	getFixtureComment() {
		return cy.get(this.#elements.fixtureComment);
	}
	getCyRequireHeader() {
		return cy.get(this.#elements.cyRequireHeader);
	}
	getCyRequireCode() {
		return cy.get(this.#elements.cyRequireCode).eq(1);
	}
	getCyReadFileHeader() {
		return cy.get(this.#elements.cyReadFileHeader);
	}
	getCyReadFileCode() {
		return cy.get(this.#elements.cyReadFileCode).eq(2);
	}
	getCyWriteFileHeader() {
		return cy.get(this.#elements.cyWriteFileHeader);
	}
	getCyWriteFileCode() {
		return cy.get(this.#elements.cyWriteFileCode).eq(3);
	}
	getMoreInfoLinks() {
		return this.#elements.moreInfoLinks.map(sel => cy.get(sel));
	}

	// Workflow methods
	// ...existing code...

	assertFilesSectionVisible() {
		this.getFilesSection().should('be.visible');
	}
	assertCyFixtureHeaderVisible() {
		this.getCyFixtureHeader().should('be.visible');
	}
	assertCyFixtureCodeVisible() {
		this.getCyFixtureCode().should('be.visible');
	}
	clickFixtureBtn() {
		this.getFixtureBtn().should('be.visible').click();
	}
	assertFixtureCommentVisible() {
		this.getFixtureComment().should('be.visible');
	}
	assertCyRequireHeaderVisible() {
		this.getCyRequireHeader().should('be.visible');
	}
	assertCyRequireCodeVisible() {
		this.getCyRequireCode().should('be.visible');
	}
	assertCyReadFileHeaderVisible() {
		this.getCyReadFileHeader().should('be.visible');
	}
	assertCyReadFileCodeVisible() {
		this.getCyReadFileCode().should('be.visible');
	}
	assertCyWriteFileHeaderVisible() {
		this.getCyWriteFileHeader().should('be.visible');
	}
	assertCyWriteFileCodeVisible() {
		this.getCyWriteFileCode().should('be.visible');
	}

	clickMoreInfoLinks() {
		this.getMoreInfoLinks().forEach(link => link.should('be.visible').click({ multiple: true }));
	}

	// Full workflow for all files examples
	runAllFilesWorkflows() {
	// ...existing code...
		this.assertFilesSectionVisible();
		this.assertCyFixtureHeaderVisible();
		this.assertCyFixtureCodeVisible();
		cy.intercept('GET', '**/comments/*', { fixture: 'example.json' }).as('getComment');
		this.clickFixtureBtn();
		cy.wait('@getComment').its('response.body')
			.should('have.property', 'name')
			.and('include', 'Using fixtures to represent data');
		this.assertFixtureCommentVisible();
		this.assertCyRequireHeaderVisible();
		this.assertCyRequireCodeVisible();
		cy.fixture('example.json').as('example');
		cy.readFile('cypress.config.js').then((json) => {
			expect(json).to.be.an('object');
		});
		this.assertCyReadFileHeaderVisible();
		this.assertCyReadFileCodeVisible();
		cy.request('https://jsonplaceholder.cypress.io/users')
			.then((response) => {
				cy.writeFile('cypress/fixtures/users.json', response.body);
			});
		cy.fixture('users').should((users) => {
			expect(users[0].name).to.exist;
		});
		cy.writeFile('cypress/fixtures/profile.json', {
			id: 8739,
			name: 'Jane',
			email: 'jane@example.com',
		});
		cy.fixture('profile').should((profile) => {
			expect(profile.name).to.eq('Jane');
		});
		this.assertCyWriteFileHeaderVisible();
		this.assertCyWriteFileCodeVisible();
		this.clickMoreInfoLinks();
	}
}
