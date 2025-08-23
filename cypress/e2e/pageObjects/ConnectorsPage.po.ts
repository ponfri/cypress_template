import { BasePage } from './BasePage.po';

/**
 * Page Object for the Connectors page in Cypress Kitchen Sink
 * Covers all workflows for connector commands, navbar, toggle, navigation links, and all interactive elements
 */
export default class ConnectorsPage extends BasePage {
  // ...existing code...
  // Private selectors for all relevant elements
    #elements = {
      // Main header
      connectorsHeader: 'h1',

      // Lists
      eachListItems: '.connectors-each-ul > li',
      itsListItems: '.connectors-its-ul > li',
      thenListItems: '.connectors-list > li',

      // Div for invoke example
      invokeDiv: '.connectors-div',

      // Code blocks (use cy.get('pre').eq(n) in getters)
    };

  // Getters

  // Main header
  get connectorsHeader() { return cy.get(this.#elements.connectorsHeader); }

  // Section header getters
  get eachHeader() { return cy.contains('h4', '.each()'); }
  get itsHeader() { return cy.contains('h4', '.its()'); }
  get invokeHeader() { return cy.contains('h4', '.invoke()'); }
  get spreadHeader() { return cy.contains('h4', '.spread()'); }
  get thenHeader() { return cy.contains('h4', '.then()'); }

  // List getters
  get eachListItems() { return cy.get(this.#elements.eachListItems); }
  get itsListItems() { return cy.get(this.#elements.itsListItems); }
  get thenListItems() { return cy.get(this.#elements.thenListItems); }

  // Div for invoke example
  get invokeDiv() { return cy.get(this.#elements.invokeDiv); }

  // Code block getters using index (order: each, its, invoke, spread, then)
  get eachCode() { return cy.get('pre').eq(0); }
  get itsCode() { return cy.get('pre').eq(1); }
  get invokeCode() { return cy.get('pre').eq(2); }
  get spreadCode() { return cy.get('pre').eq(3); }
  get thenCode() { return cy.get('pre').eq(4); }

  // Interaction methods
  clickConnectorsHeader() { this.connectorsHeader.click(); }
  clickEachListItem(index: number) { this.eachListItems.eq(index).click(); }
  clickItsListItem(index: number) { this.itsListItems.eq(index).click(); }
  clickThenListItem(index: number) { this.thenListItems.eq(index).click(); }
  clickInvokeDiv() { this.invokeDiv.click(); }
  clickEachCode() { this.eachCode.click(); }
  clickItsCode() { this.itsCode.click(); }
  clickInvokeCode() { this.invokeCode.click(); }
  clickSpreadCode() { this.spreadCode.click(); }
  clickThenCode() { this.thenCode.click(); }

  // Workflow methods
  /** Assert all .each() list items match expected texts */
  assertEachListItems(expectedTexts: string[]) {
    this.eachListItems.each((item, idx) => {
      cy.wrap(item).should('contain.text', expectedTexts[idx]);
    });
  }

  /** Assert .its() list length and content */
  assertItsListLengthAndContent(expectedTexts: string[]) {
    this.itsListItems.should('have.length', expectedTexts.length);
    this.itsListItems.each((item, idx) => {
      cy.wrap(item).should('contain.text', expectedTexts[idx]);
    });
  }

  /** Invoke .invoke() on the div and assert it becomes visible */
  invokeDivAndAssertVisible() {
    this.invokeDiv.should('be.hidden');
    this.invokeDiv.invoke('show').should('be.visible');
  }

  /** Assert all code blocks contain expected text (by index) */
  assertAllCodeBlocksContainText(expectedTexts: string[]) {
    [this.eachCode, this.itsCode, this.invokeCode, this.spreadCode, this.thenCode].forEach((getter, idx) => {
      getter.should('contain.text', expectedTexts[idx]);
    });
  }

  /** Click all .then() list items and assert each contains expected text */
  clickAllThenListItemsAndAssert(expectedTexts: string[]) {
    this.thenListItems.each((item, idx) => {
      cy.wrap(item).click().should('contain.text', expectedTexts[idx]);
    });
  }
}
