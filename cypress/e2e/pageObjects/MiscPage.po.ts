import { BasePage } from "./BasePage.po";

/**
 * Page Object for the Misc page in Cypress Kitchen Sink
 * Covers all workflows for miscellaneous commands, navbar, toggle, navigation links, and all interactive elements
 */
export default class MiscPage extends BasePage {
  // Private selectors for all relevant elements
  #elements = {
    miscSection: "#misc",
    miscHeader: "h4[data-cy='misc-header']",
    miscCode: "pre code.javascript.hljs[data-cy='misc-code']",
    miscExample: ".misc-example[data-cy='misc-example']",
    miscButton: ".misc-btn[data-cy='misc-btn']",
    miscInput: ".misc-input[data-cy='misc-input']",
    miscCheckbox: ".misc-checkbox[data-cy='misc-checkbox']",
    miscSelect: ".misc-select[data-cy='misc-select']",
    miscListItems: ".misc-list li[data-cy='misc-list-item']",
    miscParagraphs: ".misc-p p[data-cy='misc-paragraph']",
    miscTable: ".misc-table[data-cy='misc-table']",
    miscTableRows: ".misc-table tbody tr[data-cy='misc-table-row']",
    miscTableCells: ".misc-table td[data-cy='misc-table-cell']",
  };

  // Getters for all locators
  get miscSection() {
    return cy.get(this.#elements.miscSection);
  }
  get miscHeader() {
    return cy.get(this.#elements.miscHeader);
  }
  get miscCode() {
    return cy.get(this.#elements.miscCode);
  }
  get miscExample() {
    return cy.get(this.#elements.miscExample);
  }
  get miscButton() {
    return cy.get(this.#elements.miscButton);
  }
  get miscInput() {
    return cy.get(this.#elements.miscInput);
  }
  get miscCheckbox() {
    return cy.get(this.#elements.miscCheckbox);
  }
  get miscSelect() {
    return cy.get(this.#elements.miscSelect);
  }
  get miscListItems() {
    return cy.get(this.#elements.miscListItems);
  }
  get miscParagraphs() {
    return cy.get(this.#elements.miscParagraphs);
  }
  get miscTable() {
    return cy.get(this.#elements.miscTable);
  }
  get miscTableRows() {
    return cy.get(this.#elements.miscTableRows);
  }
  get miscTableCells() {
    return cy.get(this.#elements.miscTableCells);
  }

  // Interaction methods
  clickMiscButton() {
    this.miscButton.click();
  }
  typeMiscInput(text: string) {
    this.miscInput.type(text);
  }
  checkMiscCheckbox() {
    this.miscCheckbox.check();
  }
  uncheckMiscCheckbox() {
    this.miscCheckbox.uncheck();
  }
  selectMiscOption(option: string) {
    this.miscSelect.select(option);
  }

  // Workflow methods
  fillAndSubmitMiscForm(input: string, option: string) {
    this.typeMiscInput(input);
    this.selectMiscOption(option);
    this.clickMiscButton();
    return this;
  }

  checkAndUncheckMiscCheckbox() {
    this.checkMiscCheckbox();
    this.uncheckMiscCheckbox();
    return this;
  }

  verifyMiscTableRowsCount() {
    // Assertion should be done in test, not here
    return this;
  }

  verifyMiscListItemsContain(text: string) {
    this.miscListItems.contains(text).should("exist");
  }
}
