import { BasePage } from './BasePage.po';

/**
 * Page Object for the Aliasing page in Cypress Kitchen Sink
 * Covers all workflows for aliasing commands, navbar, toggle, navigation links, and all interactive elements
 */
export default class AliasingPage extends BasePage {
  // Private selectors for all relevant elements
  #elements = {
    aliasingSection: '#as',
    aliasingHeader: "h4[data-cy=\"aliasing-header\"]",
    aliasingCode: "pre code.javascript.hljs[data-cy=\"aliasing-code\"]",
    asTable: ".as-table[data-cy=\"as-table\"]",
    asTableRows: ".as-table tbody tr[data-cy=\"as-table-row\"]",
    asTableCells: ".as-table td[data-cy=\"as-table-cell\"]",
    asTableFirstBtn: ".as-table tbody tr:first td:first button[data-cy=\"as-table-first-btn\"]",
    networkBtn: ".network-btn[data-cy=\"network-btn\"]",
    networkComment: ".network-comment[data-cy=\"network-comment\"]",
    getCommentBtn: "button.network-btn[data-cy=\"get-comment-btn\"]",
    asTableHeaders: ".as-table thead th[data-cy=\"as-table-header\"]",
    asTableChangeBtns: ".as-table button[data-cy=\"as-table-change-btn\"]",
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

      /** Click a table row, then its first button */
      interactWithTableRow(rowIndex: number) {
        this.clickAsTableRow(rowIndex);
        this.clickAsTableFirstBtn();
        return this;
      }

      /** Perform network comment workflow: click network button, click get comment button */
      performNetworkCommentFlow() {
        this.clickNetworkBtn();
        this.clickGetCommentBtn();
        return this;
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
