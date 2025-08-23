
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

			clickAssertionsSection() {
				this.assertionsSection.click();
			}

			clickAssertionTable() {
				this.assertionTable.click();
			}

			clickAssertionTableRow(index: number) {
				this.assertionTableRows.eq(index).click();
			}

			clickAssertionTableLastRow() {
				this.assertionTableLastRow.click();
			}

			clickAssertionTableSuccessRow() {
				this.assertionTableSuccessRow.click();
			}

			clickAssertionTableCell(index: number) {
				this.assertionTableCells.eq(index).click();
			}

			clickAssertionsLink() {
				this.assertionsLink.click();
			}

			clickAssertionsLinkActive() {
				this.assertionsLinkActive.click();
			}

			clickAssertionsP() {
				this.assertionsP.click();
			}

			clickAssertionsPParagraph(index: number) {
				this.assertionsPParagraphs.eq(index).click();
			}

			clickDocsHeader() {
				this.docsHeader.click();
			}

			clickDocsHeaderDiv() {
				this.docsHeaderDiv.click();
			}

			clickTwoElements() {
				this.twoElements.click();
			}

			clickTwoElementsFirst() {
				this.twoElementsFirst.click();
			}

			clickTwoElementsSecond() {
				this.twoElementsSecond.click();
			}

			clickRandomNumber() {
				this.randomNumber.click();
			}

			clickRandomNumberExample() {
				this.randomNumberExample.click();
			}

			clickShouldHeader() {
				this.shouldHeader.click();
			}

			clickAndHeader() {
				this.andHeader.click();
			}

			clickExpectHeader() {
				this.expectHeader.click();
			}

			clickAssertHeader() {
				this.assertHeader.click();
			}

			clickShouldCallbackHeader() {
				this.shouldCallbackHeader.click();
			}

				// Workflow methods

				/** Click a table row, then assert its cell contains expected text */
				assertTableRowContent(rowIndex: number, expectedCellText: string) {
					this.clickAssertionTableRow(rowIndex);
					this.assertionTableCells.eq(rowIndex).should('contain.text', expectedCellText);
				}

				/** Click the last table row and assert it has success class */
				assertLastRowIsSuccess() {
					this.clickAssertionTableLastRow();
					this.assertionTableLastRow.should('have.class', 'success');
				}

				/** Click assertions link and assert it becomes active */
				assertLinkBecomesActive() {
					this.clickAssertionsLink();
					this.assertionsLinkActive.should('exist');
				}

				/** Click docs header and assert its div contains expected text */
				assertDocsHeaderContent(expectedText: string) {
					this.clickDocsHeader();
					this.docsHeaderDiv.should('contain.text', expectedText);
				}

				/** Click random number and assert the example displays the number */
				assertRandomNumberDisplayed() {
					this.clickRandomNumber();
					this.randomNumber.invoke('text').then(num => {
						this.randomNumberExample.should('contain.text', num);
					});
				}

				/** Click all headers and assert their content exists */
				assertAllHeadersContent(expectedTexts: string[]) {
					this.clickShouldHeader();
					this.shouldHeader.should('contain.text', expectedTexts[0]);
					this.clickAndHeader();
					this.andHeader.should('contain.text', expectedTexts[1]);
					this.clickExpectHeader();
					this.expectHeader.should('contain.text', expectedTexts[2]);
					this.clickAssertHeader();
					this.assertHeader.should('contain.text', expectedTexts[3]);
					this.clickShouldCallbackHeader();
					this.shouldCallbackHeader.should('contain.text', expectedTexts[4]);
				}
}
