import { BasePage } from './BasePage';

export class QueryingPage extends BasePage {
  // Private elements
  #elements = {
    header: () => cy.get('h1'), // "Querying"
    subHeaderGet: () => cy.contains('h4', 'cy.get()'),
    subHeaderContains: () => cy.contains('h4', 'cy.contains()'),
    subHeaderWithin: () => cy.contains('h4', '.within()'),
    subHeaderRoot: () => cy.contains('h4', 'cy.root()'),
    subHeaderBestPractices: () => cy.contains('h4', 'Best Practices: Selecting elements'),

    // Buttons and examples
    queryBtnById: () => cy.get('#query-btn'),
    queryBtnByClass: () => cy.get('.query-btn'),
    queryBtnFirst: () => cy.get('#querying .well>button:first'),
    queryDivDataTest: () => cy.get('[data-test-id="test-example"]'),
    queryList: () => cy.get('.query-list'),
    queryListApples: () => cy.get('.query-list').contains('apples'),
    queryListOranges: () => cy.get('.query-list').contains('oranges'),
    queryListBananas: () => cy.get('.query-list').contains('bananas'),
    queryListMoreApples: () => cy.get('.query-list').contains('more apples'),
    queryButtonSaveForm: () => cy.get('.query-button').contains('Save Form'),

    // Form example
    queryForm: () => cy.get('.query-form'),
    queryFormEmailInput: () => cy.get('.query-form input:first'),
    queryFormPasswordInput: () => cy.get('.query-form input:last'),

    // UL example
    queryUl: () => cy.get('.query-ul'),
    queryUlOne: () => cy.get('.query-ul').contains('One'),
    queryUlTwo: () => cy.get('.query-ul').contains('Two'),
    queryUlBuckle: () => cy.get('.query-ul').contains('Buckle my shoe'),

    // Best practices example
    bestPracticeButton: () => cy.get('[data-cy=submit]'),

    // Additional links
    linkDocs: () => cy.contains('a', 'docs.cypress.io'),
    linkCypressIO: () => cy.contains('a', 'cypress.io'),
    linkGitHub: () => cy.contains('a', 'GitHub'),
    linkUtilities: () => cy.contains('a', 'Utilities'),
    linkCypressAPI: () => cy.contains('a', 'Cypress API'),
  }

  // Public getters
  get Header() { return this.#elements.header() }
  get SubHeaderGet() { return this.#elements.subHeaderGet() }
  get SubHeaderContains() { return this.#elements.subHeaderContains() }
  get SubHeaderWithin() { return this.#elements.subHeaderWithin() }
  get SubHeaderRoot() { return this.#elements.subHeaderRoot() }
  get SubHeaderBestPractices() { return this.#elements.subHeaderBestPractices() }
  get QueryBtnById() { return this.#elements.queryBtnById() }
  get QueryBtnByClass() { return this.#elements.queryBtnByClass() }
  get QueryBtnFirst() { return this.#elements.queryBtnFirst() }
  get QueryDivDataTest() { return this.#elements.queryDivDataTest() }
  get QueryList() { return this.#elements.queryList() }
  get QueryListApples() { return this.#elements.queryListApples() }
  get QueryListOranges() { return this.#elements.queryListOranges() }
  get QueryListBananas() { return this.#elements.queryListBananas() }
  get QueryListMoreApples() { return this.#elements.queryListMoreApples() }
  get QueryButtonSaveForm() { return this.#elements.queryButtonSaveForm() }
  get QueryForm() { return this.#elements.queryForm() }
  get QueryFormEmailInput() { return this.#elements.queryFormEmailInput() }
  get QueryFormPasswordInput() { return this.#elements.queryFormPasswordInput() }
  get QueryUl() { return this.#elements.queryUl() }
  get QueryUlOne() { return this.#elements.queryUlOne() }
  get QueryUlTwo() { return this.#elements.queryUlTwo() }
  get QueryUlBuckle() { return this.#elements.queryUlBuckle() }
  get BestPracticeButton() { return this.#elements.bestPracticeButton() }
  get LinkDocs() { return this.#elements.linkDocs() }
  get LinkCypressIO() { return this.#elements.linkCypressIO() }
  get LinkGitHub() { return this.#elements.linkGitHub() }
  get LinkUtilities() { return this.#elements.linkUtilities() }
  get LinkCypressAPI() { return this.#elements.linkCypressAPI() }

  // Interaction methods
  clickQueryBtnById() { return this.#elements.queryBtnById().click() }
  clickQueryBtnByClass() { return this.#elements.queryBtnByClass().click() }
  clickQueryBtnFirst() { return this.#elements.queryBtnFirst().click() }
  clickQueryButtonSaveForm() { return this.#elements.queryButtonSaveForm().click() }
  clickBestPracticeButton() { return this.#elements.bestPracticeButton().click() }
  clickLinkDocs() { return this.#elements.linkDocs().click() }
  clickLinkCypressIO() { return this.#elements.linkCypressIO().click() }
  clickLinkGitHub() { return this.#elements.linkGitHub().click() }
  clickLinkUtilities() { return this.#elements.linkUtilities().click() }
  clickLinkCypressAPI() { return this.#elements.linkCypressAPI().click() }

  // Example workflow
  fillQueryForm(email: string, password: string) {
    this.#elements.queryFormEmailInput().type(email)
    this.#elements.queryFormPasswordInput().type(password)
    this.clickQueryButtonSaveForm()
    return this
  }
}