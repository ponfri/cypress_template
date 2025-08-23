import { BasePage } from './BasePage.po';

/**
 * Page Object for the Aliasing page in Cypress Kitchen Sink
 * Covers all workflows for aliasing commands, navbar, toggle, navigation links, and all interactive elements
 */
export default class AliasingPage extends BasePage {
  // Private selectors for all relevant elements
  #elements = {
    aliasingSection: '#as',
    aliasingHeader: "h4:has(a[href='https://on.cypress.io/as'])",
    aliasingCode: "pre code.javascript.hljs",
    asTable: '.as-table',
    asTableRows: '.as-table tbody tr',
    asTableCells: '.as-table td',
    asTableFirstBtn: '.as-table tbody tr:first td:first button',
    networkBtn: '.network-btn',
    networkComment: '.network-comment',
    getCommentBtn: 'button.network-btn',
    asTableHeaders: '.as-table thead th',
    asTableChangeBtns: '.as-table button',
  };

  // Getters
  get aliasingSection() { return cy.get(this.#elements.aliasingSection); }
  get aliasingHeader() { return cy.get(this.#elements.aliasingHeader); }
  get aliasingCode() { return cy.get(this.#elements.aliasingCode); }
  get asTable() { return cy.get(this.#elements.asTable); }
  get asTableRows() { return cy.get(this.#elements.asTableRows); }
  get asTableCells() { return cy.get(this.#elements.asTableCells); }
  get asTableFirstBtn() { return cy.get(this.#elements.asTableFirstBtn); }
  get networkBtn() { return cy.get(this.#elements.networkBtn); }
  get networkComment() { return cy.get(this.#elements.networkComment); }
  get getCommentBtn() { return cy.get(this.#elements.getCommentBtn); }
  get asTableHeaders() { return cy.get(this.#elements.asTableHeaders); }
  get asTableChangeBtns() { return cy.get(this.#elements.asTableChangeBtns); }

    // Interaction methods

    clickAliasingSection() {
      this.aliasingSection.click();
    }

    clickAliasingHeader() {
      this.aliasingHeader.click();
    }

    clickAliasingCode() {
      this.aliasingCode.click();
    }

    clickAsTable() {
      this.asTable.click();
    }

    clickAsTableRow(index: number) {
      this.asTableRows.eq(index).click();
    }

    clickAsTableCell(index: number) {
      this.asTableCells.eq(index).click();
    }

    clickAsTableFirstBtn() {
      this.asTableFirstBtn.click();
    }

    clickNetworkBtn() {
      this.networkBtn.click();
    }

    clickNetworkComment() {
      this.networkComment.click();
    }

    clickGetCommentBtn() {
      this.getCommentBtn.click();
    }

    clickAsTableHeader(index: number) {
      this.asTableHeaders.eq(index).click();
    }

    clickAsTableChangeBtn(index: number) {
      this.asTableChangeBtns.eq(index).click();
    }

      // Workflow methods

      /** Click a table row, then its first button, then verify a cell contains expected text */
      interactWithTableRow(rowIndex: number, expectedCellText: string) {
        this.clickAsTableRow(rowIndex);
        this.clickAsTableFirstBtn();
        this.asTableCells.eq(rowIndex).should('contain.text', expectedCellText);
      }

      /** Perform network comment workflow: click network button, wait for comment, click get comment button */
      performNetworkCommentFlow(expectedComment: string) {
        this.clickNetworkBtn();
        this.networkComment.should('contain.text', expectedComment);
        this.clickGetCommentBtn();
      }

      /** Click all change buttons in the table */
      clickAllChangeButtons() {
        this.asTableChangeBtns.each(btn => cy.wrap(btn).click());
      }

      /** Click all table headers for sorting */
      sortTableByAllHeaders() {
        this.asTableHeaders.each(header => cy.wrap(header).click());
      }

      /** Click aliasing header, then code block, and assert code contains expected text */
      verifyAliasingCodeContent(expectedText: string) {
        this.clickAliasingHeader();
        this.clickAliasingCode();
        this.aliasingCode.should('contain.text', expectedText);
      }
}
