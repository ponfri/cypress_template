import { BasePage } from './BasePage.po';

/**
 * Page Object for the Misc page in Cypress Kitchen Sink
 * Covers all workflows for miscellaneous commands, navbar, toggle, navigation links, and all interactive elements
 */
export default class MiscPage extends BasePage {
  // Private selectors for all relevant elements
  #elements = {
    navbar: '#navbar',
    navbarToggle: '.navbar-toggle',
    navLinks: '.nav a',
    miscSection: '#misc',
    miscHeader: "h4:has(a[href='https://on.cypress.io/misc'])",
    miscCode: "pre code.javascript.hljs",
    miscExample: '.misc-example',
    miscButton: '.misc-btn',
    miscInput: '.misc-input',
    miscCheckbox: '.misc-checkbox',
    miscSelect: '.misc-select',
    miscListItems: '.misc-list li',
    miscParagraphs: '.misc-p p',
    miscTable: '.misc-table',
    miscTableRows: '.misc-table tbody tr',
    miscTableCells: '.misc-table td',
  };

  // Getters for elements
  getNavbar() { return cy.get(this.#elements.navbar); }
  getNavbarToggle() { return cy.get(this.#elements.navbarToggle); }
  getNavLinks() { return cy.get(this.#elements.navLinks); }
  getMiscSection() { return cy.get(this.#elements.miscSection); }
  getMiscHeader() { return cy.get(this.#elements.miscHeader); }
  getMiscCode() { return cy.get(this.#elements.miscCode); }
  getMiscExample() { return cy.get(this.#elements.miscExample); }
  getMiscButton() { return cy.get(this.#elements.miscButton); }
  getMiscInput() { return cy.get(this.#elements.miscInput); }
  getMiscCheckbox() { return cy.get(this.#elements.miscCheckbox); }
  getMiscSelect() { return cy.get(this.#elements.miscSelect); }
  getMiscListItems() { return cy.get(this.#elements.miscListItems); }
  getMiscParagraphs() { return cy.get(this.#elements.miscParagraphs); }
  getMiscTable() { return cy.get(this.#elements.miscTable); }
  getMiscTableRows() { return cy.get(this.#elements.miscTableRows); }
  getMiscTableCells() { return cy.get(this.#elements.miscTableCells); }

  // Workflow methods for interactive elements
  clickMiscButton() { this.getMiscButton().click(); }
  typeMiscInput(value: string) { this.getMiscInput().clear().type(value); }
  checkMiscCheckbox() { this.getMiscCheckbox().check(); }
  uncheckMiscCheckbox() { this.getMiscCheckbox().uncheck(); }
  selectMiscOption(option: string) { this.getMiscSelect().select(option); }
  clickMiscListItemByText(text: string) { this.getMiscListItems().contains(text).click(); }
  getMiscParagraphText(index: number) { return this.getMiscParagraphs().eq(index).invoke('text'); }
  getMiscTableCellText(row: number, cell: number) { return this.getMiscTableRows().eq(row).find('td').eq(cell).invoke('text'); }

  // Navbar workflows
  assertNavbarVisible() { this.getNavbar().should('be.visible'); }
  assertNavbarNotVisible() { this.getNavbar().should('not.be.visible'); }
  clickNavbarToggle() { this.getNavbarToggle().should('be.visible').click(); }
  assertNavLinksVisible() { this.getNavLinks().should('be.visible'); }

  // Assertions for headers and code blocks
  assertMiscHeaderVisible() { this.getMiscHeader().should('be.visible'); }
  assertMiscCodeVisible() { this.getMiscCode().should('be.visible'); }
  assertMiscSelectValue(value: string) { this.getMiscSelect().should('have.value', value); }
  assertMiscListItemsLength(length: number) { this.getMiscListItems().should('have.length', length); }
  assertMiscParagraphsLength(length: number) { this.getMiscParagraphs().should('have.length', length); }
  assertMiscTableRowsLength(length: number) { this.getMiscTableRows().should('have.length', length); }
  assertMiscTableCellContains(row: number, cell: number, text: string) { this.getMiscTableRows().eq(row).find('td').eq(cell).should('contain', text); }
}
