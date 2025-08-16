import { BasePage } from './BasePage';

export class WindowPage extends BasePage {
  // Private elements
  #elements = {
    header: () => cy.get('h1'), // "Window"
    subHeaderWindow: () => cy.contains('h4', 'cy.window()'),
    subHeaderDocument: () => cy.contains('h4', 'cy.document()'),
    subHeaderTitle: () => cy.contains('h4', 'cy.title()'),

    // Window/document/title commands
    window: () => cy.window(),
    document: () => cy.document(),
    title: () => cy.title(),

    // Additional links
    linkDocs: () => cy.contains('a', 'docs.cypress.io'),
    linkCypressIO: () => cy.contains('a', 'cypress.io'),
    linkGitHub: () => cy.contains('a', 'GitHub'),
    linkUtilities: () => cy.contains('a', 'Utilities'),
    linkCypressAPI: () => cy.contains('a', 'Cypress API'),
  }

  // Public getters
  get Header() { return this.#elements.header() }
  get SubHeaderWindow() { return this.#elements.subHeaderWindow() }
  get SubHeaderDocument() { return this.#elements.subHeaderDocument() }
  get SubHeaderTitle() { return this.#elements.subHeaderTitle() }
  get Window() { return this.#elements.window() }
  get Document() { return this.#elements.document() }
  get Title() { return this.#elements.title() }
  get LinkDocs() { return this.#elements.linkDocs() }
  get LinkCypressIO() { return this.#elements.linkCypressIO() }
  get LinkGitHub() { return this.#elements.linkGitHub() }
  get LinkUtilities() { return this.#elements.linkUtilities() }
  get LinkCypressAPI() { return this.#elements.linkCypressAPI() }

  // Interaction methods
  getWindowProperty(property: string) {
    return this.#elements.window().should('have.property', property);
  }
  getDocumentProperty(property: string) {
    return this.#elements.document().should('have.property', property);
  }
  assertTitleIncludes(text: string) {
    return this.#elements.title().should('include', text);
  }
  clickLinkDocs() { return this.#elements.linkDocs().click() }
  clickLinkCypressIO() { return this.#elements.linkCypressIO().click() }
  clickLinkGitHub() { return this.#elements.linkGitHub().click() }
  clickLinkUtilities() { return this.#elements.linkUtilities().click() }
  clickLinkCypressAPI() { return this.#elements.linkCypressAPI().click() }
}