import { BasePage } from './BasePage.po';

/**
 * Page Object for the Connectors page in Cypress Kitchen Sink
 * Covers all workflows for connector commands, navbar, toggle, navigation links, and all interactive elements
 */
export default class ConnectorsPage extends BasePage {
  // Private selectors for all relevant elements
  #elements = {
    connectorsSection: '#connectors',
    // Connectors command examples
    eachListItems: '.connectors-each-ul > li',
    itsListItems: '.connectors-its-ul > li',
    invokeDiv: '.connectors-div',
    thenListItems: '.connectors-list > li',
    connectorsHeader: "h1", // Main page header
    connectorsCode: "pre", // First code block on page
  eachHeader: "h4:contains('.each()')", // .each() section header
  eachCode: "pre", // First code block after .each() header
  itsHeader: "h4:contains('.its()')", // .its() section header
  itsCode: "pre", // First code block after .its() header
  invokeHeader: "h4:contains('.invoke()')", // .invoke() section header
  invokeCode: "pre", // First code block after .invoke() header
  spreadHeader: "h4:contains('.spread()')", // .spread() section header
  spreadCode: "pre", // First code block after .spread() header
  thenHeader: "h4:contains('.then()')", // .then() section header
  thenCode: "pre", // First code block after .then() header
    // Generic elements
  // ...existing code...
  };

  // Getters for elements
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
  // ...existing code...

  // Workflow methods for interactive elements
  // ...existing code...

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


  // Assertions for headers and code blocks
  assertConnectorsHeaderVisible() { this.getConnectorsHeader().should('be.visible'); }
  assertConnectorsCodeVisible() { this.getConnectorsCode().should('be.visible'); }

  // ...existing code...
}
