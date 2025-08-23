import { BasePage } from './BasePage.po';

export default class WindowPage extends BasePage {
  // Private selectors for all relevant elements
  #elements = {
    windowSection: '#window',
    cyWindowHeader: "h4:has(a[href='https://on.cypress.io/window'])",
    cyWindowCode: "pre code.javascript.hljs",
    cyDocumentHeader: "h4:has(a[href='https://on.cypress.io/document'])",
    cyDocumentCode: "pre code.javascript.hljs:has(code:contains('cy.document()'))",
    cyTitleHeader: "h4:has(a[href='https://on.cypress.io/title'])",
    cyTitleCode: "pre code.javascript.hljs:has(code:contains('cy.title()'))",
  };

  // Getters for all locators
  get windowSection() { return cy.get(this.#elements.windowSection); }
  get cyWindowHeader() { return cy.get(this.#elements.cyWindowHeader); }
  get cyWindowCode() { return cy.get(this.#elements.cyWindowCode); }
  get cyDocumentHeader() { return cy.get(this.#elements.cyDocumentHeader); }
  get cyDocumentCode() { return cy.get(this.#elements.cyDocumentCode); }
  get cyTitleHeader() { return cy.get(this.#elements.cyTitleHeader); }
  get cyTitleCode() { return cy.get(this.#elements.cyTitleCode); }

  // Interaction methods
  clickWindowSection() { this.windowSection.click(); }
  clickCyWindowHeader() { this.cyWindowHeader.click(); }
  clickCyWindowCode() { this.cyWindowCode.click(); }
  clickCyDocumentHeader() { this.cyDocumentHeader.click(); }
  clickCyDocumentCode() { this.cyDocumentCode.click(); }
  clickCyTitleHeader() { this.cyTitleHeader.click(); }
  clickCyTitleCode() { this.cyTitleCode.click(); }

  // Workflow methods
  demonstrateAllWindowCommands() {
    this.clickCyWindowHeader();
    this.clickCyWindowCode();
    this.clickCyDocumentHeader();
    this.clickCyDocumentCode();
    this.clickCyTitleHeader();
    this.clickCyTitleCode();
  }

  validateAllHeadersAndCodesVisible() {
    this.cyWindowHeader.should('be.visible');
    this.cyWindowCode.should('be.visible');
    this.cyDocumentHeader.should('be.visible');
    this.cyDocumentCode.should('be.visible');
    this.cyTitleHeader.should('be.visible');
    this.cyTitleCode.should('be.visible');
  }

  exploreAllWindowSections() {
    this.demonstrateAllWindowCommands();
    this.validateAllHeadersAndCodesVisible();
  }
}
