
import { BasePage } from './BasePage.po';

/**
 * Page Object for the Assertions page in Cypress Kitchen Sink
 * Covers all workflows for implicit and explicit assertions, including .should(), .and(), expect, assert, and callback function examples
 */
export default class AssertionsPage extends BasePage {
		// Private selectors for all relevant elements
			#elements = {
				assertionsSection: '#assertions[data-cy="assertions-section"]',
				assertionTable: '.assertion-table[data-cy="assertion-table"]',
				assertionTableRows: '.assertion-table tbody tr[data-cy="assertion-table-row"]',
				assertionTableLastRow: '.assertion-table tbody tr:last[data-cy="assertion-table-last-row"]',
				assertionTableSuccessRow: '.assertion-table tbody tr.success[data-cy="assertion-table-success-row"]',
				assertionTableCells: '.assertion-table td[data-cy="assertion-table-cell"]',
				assertionsLink: '.assertions-link[data-cy="assertions-link"]',
				assertionsLinkActive: '.assertions-link.active[data-cy="assertions-link-active"]',
				assertionsP: '.assertions-p[data-cy="assertions-p"]',
				assertionsPParagraphs: '.assertions-p p[data-cy="assertions-p-paragraph"]',
				docsHeader: '.docs-header[data-cy="docs-header"]',
				docsHeaderDiv: '.docs-header div[data-cy="docs-header-div"]',
				twoElements: '.two-elements[data-cy="two-elements"]',
				twoElementsFirst: '.two-elements .first[data-cy="two-elements-first"]',
				twoElementsSecond: '.two-elements .second[data-cy="two-elements-second"]',
				randomNumber: '#random-number[data-cy="random-number"]',
				randomNumberExample: '.random-number-example[data-cy="random-number-example"]',
				shouldHeader: 'h4#should a[data-cy="should-header"]',
				andHeader: 'h4#and a[data-cy="and-header"]',
				expectHeader: 'h4#expect[data-cy="expect-header"]',
				assertHeader: 'h4#assert[data-cy="assert-header"]',
				shouldCallbackHeader: 'h3 a[data-cy="should-callback-header"]',
			};

		// Getters
		get assertionsSection() { return cy.get(this.#elements.assertionsSection); }
		get assertionTable() { return cy.get(this.#elements.assertionTable); }
		get assertionTableRows() { return cy.get(this.#elements.assertionTableRows); }
		get assertionTableLastRow() { return cy.get(this.#elements.assertionTableLastRow); }
		get assertionTableSuccessRow() { return cy.get(this.#elements.assertionTableSuccessRow); }
		get assertionTableCells() { return cy.get(this.#elements.assertionTableCells); }
		get assertionsLink() { return cy.get(this.#elements.assertionsLink); }
		get assertionsLinkActive() { return cy.get(this.#elements.assertionsLinkActive); }
		get assertionsP() { return cy.get(this.#elements.assertionsP); }
		get assertionsPParagraphs() { return cy.get(this.#elements.assertionsPParagraphs); }
		get docsHeader() { return cy.get(this.#elements.docsHeader); }
		get docsHeaderDiv() { return cy.get(this.#elements.docsHeaderDiv); }
		get twoElements() { return cy.get(this.#elements.twoElements); }
		get twoElementsFirst() { return cy.get(this.#elements.twoElementsFirst); }
		get twoElementsSecond() { return cy.get(this.#elements.twoElementsSecond); }
		get randomNumber() { return cy.get(this.#elements.randomNumber); }
		get randomNumberExample() { return cy.get(this.#elements.randomNumberExample); }
		get shouldHeader() { return cy.get(this.#elements.shouldHeader); }
		get andHeader() { return cy.get(this.#elements.andHeader); }
		get expectHeader() { return cy.get(this.#elements.expectHeader); }
		get assertHeader() { return cy.get(this.#elements.assertHeader); }
		get shouldCallbackHeader() { return cy.get(this.#elements.shouldCallbackHeader); }

			// Interaction methods
			clickAssertionsSection() { this.assertionsSection.click(); return this; }
			clickAssertionTable() { this.assertionTable.click(); return this; }
			clickAssertionTableRow(index: number) { this.assertionTableRows.eq(index).click(); return this; }
			clickAssertionTableLastRow() { this.assertionTableLastRow.click(); return this; }
			clickAssertionTableSuccessRow() { this.assertionTableSuccessRow.click(); return this; }
			clickAssertionTableCell(index: number) { this.assertionTableCells.eq(index).click(); return this; }
			clickAssertionsLink() { this.assertionsLink.click(); return this; }
			clickAssertionsLinkActive() { this.assertionsLinkActive.click(); return this; }
			clickAssertionsP() { this.assertionsP.click(); return this; }
			clickAssertionsPParagraph(index: number) { this.assertionsPParagraphs.eq(index).click(); return this; }
			clickDocsHeader() { this.docsHeader.click(); return this; }
			clickDocsHeaderDiv() { this.docsHeaderDiv.click(); return this; }
			clickTwoElements() { this.twoElements.click(); return this; }
			clickTwoElementsFirst() { this.twoElementsFirst.click(); return this; }
			clickTwoElementsSecond() { this.twoElementsSecond.click(); return this; }
			clickRandomNumber() { this.randomNumber.click(); return this; }
			clickRandomNumberExample() { this.randomNumberExample.click(); return this; }
			clickShouldHeader() { this.shouldHeader.click(); return this; }
			clickAndHeader() { this.andHeader.click(); return this; }
			clickExpectHeader() { this.expectHeader.click(); return this; }
			clickAssertHeader() { this.assertHeader.click(); return this; }
			clickShouldCallbackHeader() { this.shouldCallbackHeader.click(); return this; }

				// Workflow methods

				// Workflow methods (no assertions, chainable)
				clickTableRow(rowIndex: number) {
					this.clickAssertionTableRow(rowIndex);
					return this;
				}

				clickLastRow() {
					this.clickAssertionTableLastRow();
					return this;
				}

				clickLinkAndActivate() {
					this.clickAssertionsLink();
					return this;
				}

				clickDocsHeaderAndDiv() {
					this.clickDocsHeader();
					this.clickDocsHeaderDiv();
					return this;
				}

				clickRandomNumberAndExample() {
					this.clickRandomNumber();
					this.clickRandomNumberExample();
					return this;
				}

				clickAllHeaders() {
					this.clickShouldHeader();
					this.clickAndHeader();
					this.clickExpectHeader();
					this.clickAssertHeader();
					this.clickShouldCallbackHeader();
					return this;
				}
}
