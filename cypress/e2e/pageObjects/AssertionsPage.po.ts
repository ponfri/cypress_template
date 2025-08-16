import { BasePage } from './BasePage';

export class AssertionsPage extends BasePage {
  // Private elements
  #elements = {
    header: () => cy.get('h1'), // "Assertions"
    subHeaderShould: () => cy.contains('h4', '.should()'),
    subHeaderAnd: () => cy.contains('h4', '.and()'),
    subHeaderExpect: () => cy.contains('h4', 'expect'),
    subHeaderAssert: () => cy.contains('h4', 'assert'),

    // Table and link examples
    assertionTable: () => cy.get('.assertion-table'),
    assertionTableLastRow: () => cy.get('.assertion-table').find('tbody tr:last'),
    assertionTableLastRowTd: () => cy.get('.assertion-table').find('tbody tr:last').find('td').first(),
    assertionsLink: () => cy.get('.assertions-link'),
    assertionsP: () => cy.get('.assertions-p').find('p'),
    docsHeaderDiv: () => cy.get('.docs-header').find('div'),
    twoElementsFirst: () => cy.get('.two-elements').find('.first'),
    twoElementsSecond: () => cy.get('.two-elements').find('.second'),
    randomNumber: () => cy.get('#random-number'),

    // Additional links
    linkDocs: () => cy.contains('a', 'docs.cypress.io'),
    linkCypressIO: () => cy.contains('a', 'cypress.io'),
    linkGitHub: () => cy.contains('a', 'GitHub'),
    linkUtilities: () => cy.contains('a', 'Utilities'),
    linkCypressAPI: () => cy.contains('a', 'Cypress API'),
  }

  // Public getters
  get Header() { return this.#elements.header() }
  get SubHeaderShould() { return this.#elements.subHeaderShould() }
  get SubHeaderAnd() { return this.#elements.subHeaderAnd() }
  get SubHeaderExpect() { return this.#elements.subHeaderExpect() }
  get SubHeaderAssert() { return this.#elements.subHeaderAssert() }
  get AssertionTable() { return this.#elements.assertionTable() }
  get AssertionTableLastRow() { return this.#elements.assertionTableLastRow() }
  get AssertionTableLastRowTd() { return this.#elements.assertionTableLastRowTd() }
  get AssertionsLink() { return this.#elements.assertionsLink() }
  get AssertionsP() { return this.#elements.assertionsP() }
  get DocsHeaderDiv() { return this.#elements.docsHeaderDiv() }
  get TwoElementsFirst() { return this.#elements.twoElementsFirst() }
  get TwoElementsSecond() { return this.#elements.twoElementsSecond() }
  get RandomNumber() { return this.#elements.randomNumber() }
  get LinkDocs() { return this.#elements.linkDocs() }
  get LinkCypressIO() { return this.#elements.linkCypressIO() }
  get LinkGitHub() { return this.#elements.linkGitHub() }
  get LinkUtilities() { return this.#elements.linkUtilities() }
  get LinkCypressAPI() { return this.#elements.linkCypressAPI() }

  // Interaction methods
  clickAssertionsLink() { return this.#elements.assertionsLink().click() }
  clickLinkDocs() { return this.#elements.linkDocs().click() }
  clickLinkCypressIO() { return this.#elements.linkCypressIO().click() }
  clickLinkGitHub() { return this.#elements.linkGitHub().click() }
  clickLinkUtilities() { return this.#elements.linkUtilities().click() }
  clickLinkCypressAPI() { return this.#elements.linkCypressAPI().click() }

  // Example assertion methods
  assertTableLastRowHasClassSuccess() {
    return this.#elements.assertionTableLastRow().should('have.class', 'success');
  }
  assertTableLastRowTdHasText(text: string) {
    return this.#elements.assertionTableLastRowTd().should('have.text', text);
  }
  assertAssertionsLinkActive() {
    return this.#elements.assertionsLink().should('have.class', 'active');
  }
  assertRandomNumberInRange(min: number, max: number) {
    return this.#elements.randomNumber().should(($div) => {
      const n = parseFloat($div.text());
      expect(n).to.be.gte(min).and.be.lte(max);
    });
  }
}