import { BasePage } from './BasePage.po';

export default class WindowPage extends BasePage {
  // No private selectors needed; all commands are global

  // Workflow methods for window commands
  getWindow() {
    return cy.window();
  }

  getDocument() {
    return cy.document();
  }

  getTitle() {
    return cy.title();
  }

  // Example assertion workflows
  assertWindowHasProperty(property: string) {
    return this.getWindow().should('have.property', property);
  }

  assertDocumentCharset(charset: string = 'UTF-8') {
    return this.getDocument().should('have.property', 'charset').and('eq', charset);
  }

  assertTitleIncludes(text: string) {
    return this.getTitle().should('include', text);
  }
}
