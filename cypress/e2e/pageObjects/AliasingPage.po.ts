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

  // Getters for elements
  getAliasingSection() { return cy.get(this.#elements.aliasingSection); }
  getAliasingHeader() { return cy.get(this.#elements.aliasingHeader); }
  getAliasingCode() { return cy.get(this.#elements.aliasingCode); }
  getAsTable() { return cy.get(this.#elements.asTable); }
  getAsTableRows() { return cy.get(this.#elements.asTableRows); }
  getAsTableCells() { return cy.get(this.#elements.asTableCells); }
  getAsTableFirstBtn() { return cy.get(this.#elements.asTableFirstBtn); }
  getNetworkBtn() { return cy.get(this.#elements.networkBtn); }
  getNetworkComment() { return cy.get(this.#elements.networkComment); }
  getGetCommentBtn() { return cy.get(this.#elements.getCommentBtn); }
  getAsTableHeaders() { return cy.get(this.#elements.asTableHeaders); }
  getAsTableChangeBtns() { return cy.get(this.#elements.asTableChangeBtns); }

  // Workflow methods for aliasing
  aliasFirstBtn() {
    this.getAsTableFirstBtn().as('firstBtn');
  }
  clickAliasedFirstBtn() {
    cy.get('@firstBtn').click();
  }
  assertAliasedFirstBtnChanged() {
    cy.get('@firstBtn').should('have.class', 'btn-success').and('contain', 'Changed');
  }
  aliasGetCommentRoute() {
    cy.intercept('GET', '**/comments/*').as('getComment');
  }
  clickNetworkBtn() {
    this.getNetworkBtn().click();
  }
  waitForGetComment() {
    cy.wait('@getComment').its('response.statusCode').should('eq', 200);
  }
  // Table workflows
  assertAsTableHeaders(expected: string[]) {
    this.getAsTableHeaders().then(($ths) => {
      const texts = $ths.map((i, el) => Cypress.$(el).text().trim()).get();
      expect(texts).to.deep.eq(expected);
    });
  }
  assertAsTableRowsLength(length: number) {
    this.getAsTableRows().should('have.length', length);
  }
  assertAsTableCellText(row: number, cell: number, text: string) {
    this.getAsTableRows().eq(row).find('td').eq(cell).should('contain', text);
  }
  clickAsTableChangeBtn(row: number, cell: number) {
    this.getAsTableRows().eq(row).find('td').eq(cell).find('button').click();
  }
  assertAsTableChangeBtnText(row: number, cell: number, text: string) {
    this.getAsTableRows().eq(row).find('td').eq(cell).find('button').should('contain', text);
  }
  // Assertions for headers and code blocks
  assertAliasingHeaderVisible() { this.getAliasingHeader().should('be.visible'); }
  assertAliasingCodeVisible() { this.getAliasingCode().should('be.visible'); }
}
