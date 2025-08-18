import { BasePage } from './BasePage.po';

class QueryingPage extends BasePage {
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

  constructor() {
    super('/commands/querying');
  }

  // Getters for elements
  get pageHeader() { return cy.get(this.#elements.pageHeader); }
  get pageDesc() { return cy.get(this.#elements.pageDesc); }
  get queryingSection() { return cy.get(this.#elements.queryingSection); }
  get getLink() { return cy.get(this.#elements.getLink); }
  get containsLink() { return cy.get(this.#elements.containsLink); }
  get withinLink() { return cy.get(this.#elements.withinLink); }
  get rootLink() { return cy.get(this.#elements.rootLink); }

  // Click methods for all links
  clickGetLink() { return this.getLink.click(); }
  clickContainsLink() { return this.containsLink.click(); }
  clickWithinLink() { return this.withinLink.click(); }
  clickRootLink() { return this.rootLink.click(); }

  // Input box workflow methods
  typeInputName(value: string) {
    cy.get(this.#elements.inputName).type(value);
  }
  clearInputName() {
    cy.get(this.#elements.inputName).clear();
  }
  getInputNameValue() {
    return cy.get(this.#elements.inputName).invoke('val');
  }

  typeInputEmail(value: string) {
    cy.get(this.#elements.inputEmail).type(value);
  }
  clearInputEmail() {
    cy.get(this.#elements.inputEmail).clear();
  }
  getInputEmailValue() {
    return cy.get(this.#elements.inputEmail).invoke('val');
  }

  typeInputPassword(value: string) {
    cy.get(this.#elements.inputPassword).type(value);
  }
  clearInputPassword() {
    cy.get(this.#elements.inputPassword).clear();
  }
  getInputPasswordValue() {
    return cy.get(this.#elements.inputPassword).invoke('val');
  }

  // Button workflow methods
  clickSaveFormButton() {
    cy.get(this.#elements.saveFormButton).click();
  }
  clickSubmitButton() {
    cy.get(this.#elements.submitButton).click();
  }

  // Data attribute workflow methods
  getDataTestExampleAttr(attr: string) {
    return cy.get(this.#elements.dataTestExample).invoke('attr', attr);
  }
  getDataTestExampleCss(property: string) {
    return cy.get(this.#elements.dataTestExample).invoke('css', property);
  }

  // List item workflow methods
  getQueryListItems() {
    return cy.get(this.#elements.queryListItems);
  }
  clickQueryListItemByText(text: string) {
    cy.get(this.#elements.queryListItems).contains(text).click();
  }
  getQueryUlItems() {
    return cy.get(this.#elements.queryUlItems);
  }
  clickQueryUlItemByText(text: string) {
    cy.get(this.#elements.queryUlItems).contains(text).click();
  }

  // Best practices well
  getBestPracticesWell() {
    return cy.get(this.#elements.bestPracticesWell);
  }

  // Generic workflow methods
  getText(selector: string) {
    return cy.get(this.#elements[selector]).invoke('text');
  }
  getCss(selector: string, cssProp: string) {
    return cy.get(this.#elements[selector]).invoke('css', cssProp);
  }
  isVisible(selector: string) {
    return cy.get(this.#elements[selector]).should('be.visible');
  }
  isEnabled(selector: string) {
    return cy.get(this.#elements[selector]).should('not.be.disabled');
  }
  typeInput(selector: string, value: string) {
    return cy.get(this.#elements[selector]).type(value);
  }
  clearInput(selector: string) {
    return cy.get(this.#elements[selector]).clear();
  }
  check(selector: string) {
    return cy.get(this.#elements[selector]).check();
  }
  uncheck(selector: string) {
    return cy.get(this.#elements[selector]).uncheck();
  }
  selectOption(selector: string, value: string) {
    return cy.get(this.#elements[selector]).select(value);
  }
}

export default QueryingPage;