import { BasePage } from "./BasePage.po";

export default class NameOfPage extends BasePage {
  // Private element selectors.
  #elements = {
    // Add your element selectors here.
    emailInput: ".email']", // Example element.
  };

  // Getters
  get nameOfMethodRelatedToElement() {
    return cy.get(this.#elements.emailInput);
  } // Example getter.

  // Interaction methods
  typeEmail(email) {
    this.nameOfMethodRelatedToElement.type(email);
    return this;
  } //Interaction method example.

  // Workflow methods.
  completeAction(email) {
    this.typeEmail(email);
    return this;
  }

}