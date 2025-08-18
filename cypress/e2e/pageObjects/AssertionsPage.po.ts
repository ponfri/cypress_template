
import { BasePage } from './BasePage.po';

/**
 * Page Object for the Assertions page in Cypress Kitchen Sink
 * Covers all workflows for implicit and explicit assertions, including .should(), .and(), expect, assert, and callback function examples
 */
export default class AssertionsPage extends BasePage {
	// Private selectors for all relevant elements
	#elements = {
		assertionsSection: '#assertions',
		assertionTable: '.assertion-table',
		assertionTableRows: '.assertion-table tbody tr',
		assertionTableLastRow: '.assertion-table tbody tr:last',
		assertionTableSuccessRow: '.assertion-table tbody tr.success',
		assertionTableCells: '.assertion-table td',
		assertionsLink: '.assertions-link',
		assertionsLinkActive: '.assertions-link.active',
		assertionsP: '.assertions-p',
		assertionsPParagraphs: '.assertions-p p',
		docsHeader: '.docs-header',
		docsHeaderDiv: '.docs-header div',
		twoElements: '.two-elements',
		twoElementsFirst: '.two-elements .first',
		twoElementsSecond: '.two-elements .second',
		randomNumber: '#random-number',
		randomNumberExample: '.random-number-example',
		shouldHeader: "h4#should a[href='https://on.cypress.io/should']",
		andHeader: "h4#and a[href='https://on.cypress.io/and']",
		expectHeader: "h4#expect",
		assertHeader: "h4#assert",
		shouldCallbackHeader: "h3 a[href='https://on.cypress.io/should#Function']",
	};

	// Getters for elements
	getAssertionsSection() { return cy.get(this.#elements.assertionsSection); }
	getAssertionTable() { return cy.get(this.#elements.assertionTable); }
	getAssertionTableRows() { return cy.get(this.#elements.assertionTableRows); }
	getAssertionTableLastRow() { return cy.get(this.#elements.assertionTableLastRow); }
	getAssertionTableSuccessRow() { return cy.get(this.#elements.assertionTableSuccessRow); }
	getAssertionTableCells() { return cy.get(this.#elements.assertionTableCells); }
	getAssertionsLink() { return cy.get(this.#elements.assertionsLink); }
	getAssertionsLinkActive() { return cy.get(this.#elements.assertionsLinkActive); }
	getAssertionsP() { return cy.get(this.#elements.assertionsP); }
	getAssertionsPParagraphs() { return cy.get(this.#elements.assertionsPParagraphs); }
	getDocsHeader() { return cy.get(this.#elements.docsHeader); }
	getDocsHeaderDiv() { return cy.get(this.#elements.docsHeaderDiv); }
	getTwoElements() { return cy.get(this.#elements.twoElements); }
	getTwoElementsFirst() { return cy.get(this.#elements.twoElementsFirst); }
	getTwoElementsSecond() { return cy.get(this.#elements.twoElementsSecond); }
	getRandomNumber() { return cy.get(this.#elements.randomNumber); }
	getRandomNumberExample() { return cy.get(this.#elements.randomNumberExample); }
	getShouldHeader() { return cy.get(this.#elements.shouldHeader); }
	getAndHeader() { return cy.get(this.#elements.andHeader); }
	getExpectHeader() { return cy.get(this.#elements.expectHeader); }
	getAssertHeader() { return cy.get(this.#elements.assertHeader); }
	getShouldCallbackHeader() { return cy.get(this.#elements.shouldCallbackHeader); }

	// Workflow methods for assertions
	assertTableLastRowHasClassSuccess() {
		this.getAssertionTableLastRow().should('have.class', 'success');
	}
	assertTableCellText(cellSelector: string, text: string) {
		cy.get(cellSelector).should('have.text', text);
	}
	assertTableCellContains(cellSelector: string, text: string) {
		cy.get(cellSelector).should('contain', text);
	}
	assertTableCellHtml(cellSelector: string, html: string) {
		cy.get(cellSelector).should('have.html', html);
	}
	assertTableCellMatches(cellSelector: string, selector: string) {
		cy.get(cellSelector).should('match', selector);
	}
	assertTableCellTextMatches(cellSelector: string, regex: RegExp) {
		cy.get(cellSelector).invoke('text').should('match', regex);
	}
	assertTableContainsTextWithRegex(text: RegExp) {
		this.getAssertionTableLastRow().contains('td', text).should('be.visible');
	}
	assertAssertionsLinkActive() {
		this.getAssertionsLinkActive().should('have.class', 'active');
		this.getAssertionsLinkActive().should('have.attr', 'href');
		this.getAssertionsLinkActive().should('include.text', 'Cypress Docs');
	}
	assertAssertionsPParagraphsLength(length: number) {
		this.getAssertionsPParagraphs().should('have.length', length);
	}
	assertAssertionsPParagraphsText(expected: string[]) {
		this.getAssertionsPParagraphs().then(($p) => {
			const texts = $p.map((i, el) => Cypress.$(el).text()).get();
			expect(texts).to.deep.eq(expected);
		});
	}
	assertDocsHeaderDivHasClassHeading() {
		this.getDocsHeaderDiv().should(($div) => {
			expect($div).to.have.length(1);
			const className = $div[0].className;
			expect(className).to.match(/heading-/);
		});
	}
	assertDocsHeaderDivText(text: string) {
		this.getDocsHeaderDiv().then(($div) => {
			expect($div).to.have.text(text);
		});
	}
	assertTwoElementsTextMatch() {
		let text = '';
		const normalizeText = (s: string) => s.replace(/\s/g, '').toLowerCase();
		this.getTwoElementsFirst().then(($first) => {
			text = normalizeText($first.text());
			this.getTwoElementsSecond().should(($div) => {
				const secondText = normalizeText($div.text());
				expect(secondText).to.equal(text);
			});
		});
	}
	assertRandomNumberInRange(min: number, max: number) {
		this.getRandomNumber().should(($div) => {
			const n = parseFloat($div.text());
			expect(n).to.be.gte(min).and.be.lte(max);
		});
	}


	// Assertions for headers
	assertShouldHeaderVisible() { this.getShouldHeader().should('be.visible'); }
	assertAndHeaderVisible() { this.getAndHeader().should('be.visible'); }
	assertExpectHeaderVisible() { this.getExpectHeader().should('be.visible'); }
	assertAssertHeaderVisible() { this.getAssertHeader().should('be.visible'); }
	assertShouldCallbackHeaderVisible() { this.getShouldCallbackHeader().should('be.visible'); }
}
