import { BasePage } from './BasePage.po';

/**
 * Page Object for the Connectors page in Cypress Kitchen Sink
 * Covers all workflows for connector commands, navbar, toggle, navigation links, and all interactive elements
 */
export default class ConnectorsPage extends BasePage {
  // ...existing code...
  // Private selectors for all relevant elements
    #elements = {
      connectorsHeader: 'h1[data-cy="connectors-header"]',
      eachListItems: '.connectors-each-ul > li[data-cy="each-list-item"]',
      itsListItems: '.connectors-its-ul > li[data-cy="its-list-item"]',
      thenListItems: '.connectors-list > li[data-cy="then-list-item"]',
      invokeDiv: '.connectors-div[data-cy="invoke-div"]',
    };

  // Getters

  // Main header
  get connectorsHeader() { return cy.get(this.#elements.connectorsHeader); }

  // Section header getters
  get eachHeader() { return cy.get('h4[data-cy="each-header"]'); }
  get itsHeader() { return cy.get('h4[data-cy="its-header"]'); }
  get invokeHeader() { return cy.get('h4[data-cy="invoke-header"]'); }
  get spreadHeader() { return cy.get('h4[data-cy="spread-header"]'); }
  get thenHeader() { return cy.get('h4[data-cy="then-header"]'); }

  // List getters
  get eachListItems() { return cy.get(this.#elements.eachListItems); }
  get itsListItems() { return cy.get(this.#elements.itsListItems); }
  get thenListItems() { return cy.get(this.#elements.thenListItems); }

  // Div for invoke example
  get invokeDiv() { return cy.get(this.#elements.invokeDiv); }

  // Code block getters using index (order: each, its, invoke, spread, then)
  get eachCode() { return cy.get('pre[data-cy="each-code"]'); }
  get itsCode() { return cy.get('pre[data-cy="its-code"]'); }
  get invokeCode() { return cy.get('pre[data-cy="invoke-code"]'); }
  get spreadCode() { return cy.get('pre[data-cy="spread-code"]'); }
  get thenCode() { return cy.get('pre[data-cy="then-code"]'); }

  // Interaction methods
  clickConnectorsHeader() { this.connectorsHeader.click(); return this; }
  clickEachListItem(index: number) { this.eachListItems.eq(index).click(); return this; }
  clickItsListItem(index: number) { this.itsListItems.eq(index).click(); return this; }
  clickThenListItem(index: number) { this.thenListItems.eq(index).click(); return this; }
  clickInvokeDiv() { this.invokeDiv.click(); return this; }
  clickEachCode() { this.eachCode.click(); return this; }
  clickItsCode() { this.itsCode.click(); return this; }
  clickInvokeCode() { this.invokeCode.click(); return this; }
  clickSpreadCode() { this.spreadCode.click(); return this; }
  clickThenCode() { this.thenCode.click(); return this; }

  // Workflow methods (no assertions, chainable)
  clickAllEachListItems() {
    this.eachListItems.each((item, idx) => {
      cy.wrap(item).click();
    });
    return this;
  }

  clickAllItsListItems() {
    this.itsListItems.each((item, idx) => {
      cy.wrap(item).click();
    });
    return this;
  }

  clickAllThenListItems() {
    this.thenListItems.each((item, idx) => {
      cy.wrap(item).click();
    });
    return this;
  }

  invokeDivShow() {
    this.invokeDiv.invoke('show');
    return this;
  }

  clickAllCodeBlocks() {
    this.clickEachCode();
    this.clickItsCode();
    this.clickInvokeCode();
    this.clickSpreadCode();
    this.clickThenCode();
    return this;
  }
}
