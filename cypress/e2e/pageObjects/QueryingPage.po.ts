import { BasePage } from './BasePage.po';

export class QueryingPage extends BasePage {
  #elements = {
    pageHeader: 'h1',
    pageDesc: '.banner p',
    queryingSection: '.home-list a[href="/commands/querying"]',
    getLink: 'a[href="/commands/querying"]',
    containsLink: 'a[href="/commands/querying"]',
    withinLink: 'a[href="/commands/querying"]',
    rootLink: 'a[href="/commands/querying"]',
    inputName: '#inputName',
    inputEmail: '#inputEmail',
    inputPassword: '#inputPassword',
    saveFormButton: '.query-button .btn',
    submitButton: '[data-cy="submit"]',
    dataTestExample: '[data-test-id="test-example"]',
    queryList: '.query-list',
    queryListItems: '.query-list li',
    queryUl: '.query-ul',
    queryUlItems: '.query-ul li',
    bestPracticesWell: '[data-cy="best-practices-selecting-elements"]',
  };

  // Getters for all locators
  get pageHeader() { return cy.get(this.#elements.pageHeader); }
  get pageDesc() { return cy.get(this.#elements.pageDesc); }
  get queryingSection() { return cy.get(this.#elements.queryingSection); }
  get getLink() { return cy.get(this.#elements.getLink); }
  get containsLink() { return cy.get(this.#elements.containsLink); }
  get withinLink() { return cy.get(this.#elements.withinLink); }
  get rootLink() { return cy.get(this.#elements.rootLink); }
  get inputName() { return cy.get(this.#elements.inputName); }
  get inputEmail() { return cy.get(this.#elements.inputEmail); }
  get inputPassword() { return cy.get(this.#elements.inputPassword); }
  get saveFormButton() { return cy.get(this.#elements.saveFormButton); }
  get submitButton() { return cy.get(this.#elements.submitButton); }
  get dataTestExample() { return cy.get(this.#elements.dataTestExample); }
  get queryList() { return cy.get(this.#elements.queryList); }
  get queryListItems() { return cy.get(this.#elements.queryListItems); }
  get queryUl() { return cy.get(this.#elements.queryUl); }
  get queryUlItems() { return cy.get(this.#elements.queryUlItems); }
  get bestPracticesWell() { return cy.get(this.#elements.bestPracticesWell); }

    // Interaction methods
    clickGetLink() { this.getLink.click(); }
    clickContainsLink() { this.containsLink.click(); }
    clickWithinLink() { this.withinLink.click(); }
    clickRootLink() { this.rootLink.click(); }
    typeInputName(text: string) { this.inputName.type(text); }
    typeInputEmail(text: string) { this.inputEmail.type(text); }
    typeInputPassword(text: string) { this.inputPassword.type(text); }
    clickSaveFormButton() { this.saveFormButton.click(); }
    clickSubmitButton() { this.submitButton.click(); }

      // Workflow methods
      fillFormAndSubmit(name: string, email: string, password: string) {
        this.typeInputName(name);
        this.typeInputEmail(email);
        this.typeInputPassword(password);
        this.clickSaveFormButton();
        this.clickSubmitButton();
      }

      verifyQueryListItemsCount(expected: number) {
        this.queryListItems.should('have.length', expected);
      }

      verifyBestPracticesVisible() {
        this.bestPracticesWell.should('be.visible');
      }

      clickAllQueryLinks() {
        this.clickGetLink();
        this.clickContainsLink();
        this.clickWithinLink();
        this.clickRootLink();
      }

}