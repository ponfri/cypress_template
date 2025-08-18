import { BasePage } from './BasePage.po';

/**
 * Page Object for the Connectors page in Cypress Kitchen Sink
 * Covers all workflows for connector commands, navbar, toggle, navigation links, and all interactive elements
 */
export default class ConnectorsPage extends BasePage {
  // Private selectors for all relevant elements
  #elements = {
    navbar: '#navbar',
    navbarToggle: '.navbar-toggle',
    navLinks: '.nav a',
    connectorsSection: '#connectors',
    connectorsHeader: "h4:has(a[href='https://on.cypress.io/connectors'])",
    connectorsCode: "pre code.javascript.hljs",
    // Connectors command examples
    eachHeader: "h4#each a[href='https://on.cypress.io/each']",
    eachCode: "pre:has(code.javascript.hljs):contains('.each()')",
    eachListItems: '.connectors-each-ul > li',
    itsHeader: "h4#its a[href='https://on.cypress.io/its']",
    itsCode: "pre:has(code.javascript.hljs):contains('.its()')",
    itsListItems: '.connectors-its-ul > li',
    invokeHeader: "h4#invoke a[href='https://on.cypress.io/invoke']",
    invokeCode: "pre:has(code.javascript.hljs):contains('.invoke()')",
    invokeDiv: '.connectors-div',
    spreadHeader: "h4#spread a[href='https://on.cypress.io/spread']",
    spreadCode: "pre:has(code.javascript.hljs):contains('.spread()')",
    thenHeader: "h4#then a[href='https://on.cypress.io/then']",
    thenCode: "pre:has(code.javascript.hljs):contains('.then()')",
    thenListItems: '.connectors-list > li',
    // Generic elements
    connectorsExample: '.connectors-example',
    connectorsButton: '.connectors-btn',
    connectorsInput: '.connectors-input',
    connectorsCheckbox: '.connectors-checkbox',
    connectorsSelect: '.connectors-select',
    connectorsParagraphs: '.connectors-p p',
    connectorsTable: '.connectors-table',
    connectorsTableRows: '.connectors-table tbody tr',
    connectorsTableCells: '.connectors-table td',
  };

  // Getters for elements
  getNavbar() { return cy.get(this.#elements.navbar); }
  getNavbarToggle() { return cy.get(this.#elements.navbarToggle); }
  getNavLinks() { return cy.get(this.#elements.navLinks); }
  getConnectorsSection() { return cy.get(this.#elements.connectorsSection); }
  getConnectorsHeader() { return cy.get(this.#elements.connectorsHeader); }
  getConnectorsCode() { return cy.get(this.#elements.connectorsCode); }
  // Connectors command example getters
  getEachHeader() { return cy.get(this.#elements.eachHeader); }
  getEachCode() { return cy.get(this.#elements.eachCode); }
  getEachListItems() { return cy.get(this.#elements.eachListItems); }
  getItsHeader() { return cy.get(this.#elements.itsHeader); }
  getItsCode() { return cy.get(this.#elements.itsCode); }
  getItsListItems() { return cy.get(this.#elements.itsListItems); }
  getInvokeHeader() { return cy.get(this.#elements.invokeHeader); }
  getInvokeCode() { return cy.get(this.#elements.invokeCode); }
  getInvokeDiv() { return cy.get(this.#elements.invokeDiv); }
  getSpreadHeader() { return cy.get(this.#elements.spreadHeader); }
  getSpreadCode() { return cy.get(this.#elements.spreadCode); }
  getThenHeader() { return cy.get(this.#elements.thenHeader); }
  getThenCode() { return cy.get(this.#elements.thenCode); }
  getThenListItems() { return cy.get(this.#elements.thenListItems); }
  // Generic element getters
  getConnectorsExample() { return cy.get(this.#elements.connectorsExample); }
  getConnectorsButton() { return cy.get(this.#elements.connectorsButton); }
  getConnectorsInput() { return cy.get(this.#elements.connectorsInput); }
  getConnectorsCheckbox() { return cy.get(this.#elements.connectorsCheckbox); }
  getConnectorsSelect() { return cy.get(this.#elements.connectorsSelect); }
  getConnectorsParagraphs() { return cy.get(this.#elements.connectorsParagraphs); }
  getConnectorsTable() { return cy.get(this.#elements.connectorsTable); }
  getConnectorsTableRows() { return cy.get(this.#elements.connectorsTableRows); }
  getConnectorsTableCells() { return cy.get(this.#elements.connectorsTableCells); }

  // Workflow methods for interactive elements
  clickConnectorsButton() { this.getConnectorsButton().click(); }
  typeConnectorsInput(value: string) { this.getConnectorsInput().clear().type(value); }
  checkConnectorsCheckbox() { this.getConnectorsCheckbox().check(); }
  uncheckConnectorsCheckbox() { this.getConnectorsCheckbox().uncheck(); }
  selectConnectorsOption(option: string) { this.getConnectorsSelect().select(option); }
  clickConnectorsListItemByText(text: string) { this.getThenListItems().contains(text).click(); }
  getConnectorsParagraphText(index: number) { return this.getConnectorsParagraphs().eq(index).invoke('text'); }
  getConnectorsTableCellText(row: number, cell: number) { return this.getConnectorsTableRows().eq(row).find('td').eq(cell).invoke('text'); }

  // Connectors command workflows
  // .each() example
  assertEachListItemsLength(length: number) { this.getEachListItems().should('have.length', length); }
  assertEachListItemsText(expected: string[]) {
    this.getEachListItems().then(($lis) => {
      const texts = $lis.map((i, el) => Cypress.$(el).text().trim()).get();
      expect(texts).to.deep.eq(expected);
    });
  }
  assertEachHeaderVisible() { this.getEachHeader().should('be.visible'); }
  assertEachCodeVisible() { this.getEachCode().should('be.visible'); }

  // .its() example
  assertItsListItemsLength(length: number) { this.getItsListItems().should('have.length', length); }
  assertItsListItemsText(expected: string[]) {
    this.getItsListItems().then(($lis) => {
      const texts = $lis.map((i, el) => Cypress.$(el).text().trim()).get();
      expect(texts).to.deep.eq(expected);
    });
  }
  assertItsHeaderVisible() { this.getItsHeader().should('be.visible'); }
  assertItsCodeVisible() { this.getItsCode().should('be.visible'); }

  // .invoke() example
  assertInvokeDivHidden() { this.getInvokeDiv().should('be.hidden'); }
  invokeShowOnDiv() { this.getInvokeDiv().invoke('show').should('be.visible'); }
  assertInvokeHeaderVisible() { this.getInvokeHeader().should('be.visible'); }
  assertInvokeCodeVisible() { this.getInvokeCode().should('be.visible'); }

  // .spread() example
  assertSpreadHeaderVisible() { this.getSpreadHeader().should('be.visible'); }
  assertSpreadCodeVisible() { this.getSpreadCode().should('be.visible'); }

  // .then() example
  assertThenListItemsLength(length: number) { this.getThenListItems().should('have.length', length); }
  assertThenListItemsText(expected: string[]) {
    this.getThenListItems().then(($lis) => {
      const texts = $lis.map((i, el) => Cypress.$(el).text().trim()).get();
      expect(texts).to.deep.eq(expected);
    });
  }
  assertThenHeaderVisible() { this.getThenHeader().should('be.visible'); }
  assertThenCodeVisible() { this.getThenCode().should('be.visible'); }

  // Navbar workflows
  assertNavbarVisible() { this.getNavbar().should('be.visible'); }
  assertNavbarNotVisible() { this.getNavbar().should('not.be.visible'); }
  clickNavbarToggle() { this.getNavbarToggle().should('be.visible').click(); }
  assertNavLinksVisible() { this.getNavLinks().should('be.visible'); }

  // Assertions for headers and code blocks
  assertConnectorsHeaderVisible() { this.getConnectorsHeader().should('be.visible'); }
  assertConnectorsCodeVisible() { this.getConnectorsCode().should('be.visible'); }

  // Connectors workflows
  assertConnectorsExampleVisible() { this.getConnectorsExample().should('be.visible'); }
  assertConnectorsButtonEnabled() { this.getConnectorsButton().should('be.enabled'); }
  assertConnectorsInputValue(value: string) { this.getConnectorsInput().should('have.value', value); }
  assertConnectorsCheckboxChecked() { this.getConnectorsCheckbox().should('be.checked'); }
  assertConnectorsCheckboxNotChecked() { this.getConnectorsCheckbox().should('not.be.checked'); }
  assertConnectorsSelectValue(value: string) { this.getConnectorsSelect().should('have.value', value); }
  assertConnectorsListItemsLength(length: number) { this.getThenListItems().should('have.length', length); }
  assertConnectorsParagraphsLength(length: number) { this.getConnectorsParagraphs().should('have.length', length); }
  assertConnectorsTableRowsLength(length: number) { this.getConnectorsTableRows().should('have.length', length); }
  assertConnectorsTableCellContains(row: number, cell: number, text: string) { this.getConnectorsTableRows().eq(row).find('td').eq(cell).should('contain', text); }
}
