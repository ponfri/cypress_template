import { BasePage } from './BasePage';

export class MiscPage extends BasePage {
  // Private elements
  #elements = {
    header: () => cy.get('h1'), // "Misc"
    subHeaderEnd: () => cy.contains('h4', '.end()'),
    subHeaderExec: () => cy.contains('h4', 'cy.exec()'),
    subHeaderFocused: () => cy.contains('h4', 'cy.focused()'),
    subHeaderScreenshot: () => cy.contains('h4', 'cy.screenshot()'),
    subHeaderWrap: () => cy.contains('h4', 'cy.wrap()'),

    miscTable: () => cy.get('.misc-table'),
    miscForm: () => cy.get('.misc-form'),
    miscFormName: () => cy.get('.misc-form').find('#name'),
    miscFormDescription: () => cy.get('.misc-form').find('#description'),

    // Additional links
    linkDocs: () => cy.contains('a', 'docs.cypress.io'),
    linkCypressIO: () => cy.contains('a', 'cypress.io'),
    linkGitHub: () => cy.contains('a', 'GitHub'),
    linkUtilities: () => cy.contains('a', 'Utilities'),
    linkCypressAPI: () => cy.contains('a', 'Cypress API'),
  }

  // Public getters
  get Header() { return this.#elements.header() }
  get SubHeaderEnd() { return this.#elements.subHeaderEnd() }
  get SubHeaderExec() { return this.#elements.subHeaderExec() }
  get SubHeaderFocused() { return this.#elements.subHeaderFocused() }
  get SubHeaderScreenshot() { return this.#elements.subHeaderScreenshot() }
  get SubHeaderWrap() { return this.#elements.subHeaderWrap() }
  get MiscTable() { return this.#elements.miscTable() }
  get MiscForm() { return this.#elements.miscForm() }
  get MiscFormName() { return this.#elements.miscFormName() }
  get MiscFormDescription() { return this.#elements.miscFormDescription() }
  get LinkDocs() { return this.#elements.linkDocs() }
  get LinkCypressIO() { return this.#elements.linkCypressIO() }
  get LinkGitHub() { return this.#elements.linkGitHub() }
  get LinkUtilities() { return this.#elements.linkUtilities() }
  get LinkCypressAPI() { return this.#elements.linkCypressAPI() }

  // Interaction methods
  clickMiscFormName() { return this.#elements.miscFormName().click() }
  clickMiscFormDescription() { return this.#elements.miscFormDescription().click() }
  clickLinkDocs() { return this.#elements.linkDocs().click() }
  clickLinkCypressIO() { return this.#elements.linkCypressIO().click() }
  clickLinkGitHub() { return this.#elements.linkGitHub().click() }
  clickLinkUtilities() { return this.#elements.linkUtilities().click() }
  clickLinkCypressAPI() { return this.#elements.linkCypressAPI().click() }

  // Cypress command wrappers
  endChain() { return cy.end(); }
  execCommand(command: string) { return cy.exec(command); }
  getFocused() { return cy.focused(); }
  takeScreenshot(name?: string) { return cy.screenshot(name); }
  wrapObject<T>(obj: T) { return cy.wrap(obj); }
}