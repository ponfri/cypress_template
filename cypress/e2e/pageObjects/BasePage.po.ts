// cypress/e2e/pageObjects/BasePage.ts
export class BasePage {
  path: string;

  constructor(path: string) {
    this.path = path;
  }

  public visit(url?: string) {
    if (url) {
      cy.visit(url);
    } else {
      cy.visit(this.path || '/');
    }
    return this;
  }

  // Navigation menu elements (replace cy.contains with robust selectors)
  #navElements = {

  
  }

  // Getters
  

  // Interaction methods
  

  // Workflow methods

     
}