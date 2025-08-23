import { BasePage } from "./BasePage.po";

export default class ActionsPage extends BasePage {
  #elements = {
    emailInput: ".action-email",
    disabledTextarea: ".action-disabled",
    passwordInput: ".action-focus",
    fullNameInput: ".action-blur",
    describeInput: ".action-clear",
    couponCodeInput: "#couponCode1",
    couponForm: ".action-form",
    submitButton: '.action-form button[type="submit"]',
    actionButton: ".action-btn",
    actionCanvas: "#action-canvas",
    actionLabels: ".action-labels > .label",
    actionOpacityButton: ".action-opacity > .btn",
    actionDiv: ".action-div",
    actionInputHidden: ".action-input-hidden",
    rightClickDiv: ".rightclick-action-div",
    rightClickInputHidden: ".rightclick-action-input-hidden",
    checkboxes: '.action-checkboxes [type="checkbox"]',
    radios: '.action-radios [type="radio"]',
    multipleCheckboxes: '.action-multiple-checkboxes [type="checkbox"]',
    checkSectionCheckboxes: '.action-check [type="checkbox"]',
    selectSingle: ".action-select",
    selectMultiple: ".action-select-multiple",
    scrollHorizontalButton: "#scroll-horizontal button",
    scrollVerticalButton: "#scroll-vertical button",
    scrollBothButton: "#scroll-both button",
    scrollableHorizontal: "#scrollable-horizontal",
    scrollableVertical: "#scrollable-vertical",
    scrollableBoth: "#scrollable-both",
    triggerInputRange: ".trigger-input-range",
    triggerInputRangeP: ".trigger-input-range + p",
  };

  // Getters
  get emailInput() {
    return cy.get(this.#elements.emailInput);
  }
  get disabledTextarea() {
    return cy.get(this.#elements.disabledTextarea);
  }
  get passwordInput() {
    return cy.get(this.#elements.passwordInput);
  }
  get fullNameInput() {
    return cy.get(this.#elements.fullNameInput);
  }
  get describeInput() {
    return cy.get(this.#elements.describeInput);
  }
  get couponCodeInput() {
    return cy.get(this.#elements.couponCodeInput);
  }
  get couponForm() {
    return cy.get(this.#elements.couponForm);
  }
  get submitButton() {
    return cy.get(this.#elements.submitButton);
  }
  get actionButton() {
    return cy.get(this.#elements.actionButton);
  }
  get actionCanvas() {
    return cy.get(this.#elements.actionCanvas);
  }
  get actionLabels() {
    return cy.get(this.#elements.actionLabels);
  }
  get actionOpacityButton() {
    return cy.get(this.#elements.actionOpacityButton);
  }
  get actionDiv() {
    return cy.get(this.#elements.actionDiv);
  }
  get actionInputHidden() {
    return cy.get(this.#elements.actionInputHidden);
  }
  get rightClickDiv() {
    return cy.get(this.#elements.rightClickDiv);
  }
  get rightClickInputHidden() {
    return cy.get(this.#elements.rightClickInputHidden);
  }
  get checkboxes() {
    return cy.get(this.#elements.checkboxes);
  }
  get radios() {
    return cy.get(this.#elements.radios);
  }
  get multipleCheckboxes() {
    return cy.get(this.#elements.multipleCheckboxes);
  }
  get checkSectionCheckboxes() {
    return cy.get(this.#elements.checkSectionCheckboxes);
  }
  get selectSingle() {
    return cy.get(this.#elements.selectSingle);
  }
  get selectMultiple() {
    return cy.get(this.#elements.selectMultiple);
  }
  get scrollHorizontalButton() {
    return cy.get(this.#elements.scrollHorizontalButton);
  }
  get scrollVerticalButton() {
    return cy.get(this.#elements.scrollVerticalButton);
  }
  get scrollBothButton() {
    return cy.get(this.#elements.scrollBothButton);
  }
  get scrollableHorizontal() {
    return cy.get(this.#elements.scrollableHorizontal);
  }
  get scrollableVertical() {
    return cy.get(this.#elements.scrollableVertical);
  }
  get scrollableBoth() {
    return cy.get(this.#elements.scrollableBoth);
  }
  get triggerInputRange() {
    return cy.get(this.#elements.triggerInputRange);
  }
  get triggerInputRangeP() {
    return cy.get(this.#elements.triggerInputRangeP);
  }

  // Interaction methods

  setEmail(value: string | number) {
    this.emailInput.clear().type(`${value}`);
  }

  setPassword(value: string | number) {
    this.passwordInput.clear().type(`${value}`);
  }

  setFullName(value: string | number) {
    this.fullNameInput.clear().type(`${value}`);
  }

  setDescribe(value: string | number) {
    this.describeInput.clear().type(`${value}`);
  }

  setCouponCode(value: string | number) {
    this.couponCodeInput.clear().type(`${value}`);
  }

  submitCouponForm() {
    this.submitButton.click();
  }

  clickActionButton() {
    this.actionButton.click();
  }

  clickActionOpacityButton() {
    this.actionOpacityButton.click();
  }

  clickActionDiv() {
    this.actionDiv.click();
  }

  clickRightClickDiv() {
    this.rightClickDiv.rightclick();
  }

  checkCheckbox(index: number = 0) {
    this.checkboxes.eq(index).check();
  }

  checkRadio(index: number = 0) {
    this.radios.eq(index).check();
  }

  checkMultipleCheckboxes(indices: number[]) {
    indices.forEach((i) => this.multipleCheckboxes.eq(i).check());
  }

  checkSectionCheckbox(index: number = 0) {
    this.checkSectionCheckboxes.eq(index).check();
  }

  selectSingleOption(value: string) {
    this.selectSingle.select(value);
  }

  selectMultipleOptions(values: string[]) {
    this.selectMultiple.select(values);
  }

  scrollHorizontal() {
    this.scrollHorizontalButton.click();
  }

  scrollVertical() {
    this.scrollVerticalButton.click();
  }

  scrollBoth() {
    this.scrollBothButton.click();
  }

  setTriggerInputRange(value: number) {
    this.triggerInputRange.invoke("val", value).trigger("input");
  }

  clearDescribeInput() {
    this.describeInput.clear();
  }

  clearFullNameInput() {
    this.fullNameInput.clear();
  }

  clearCouponCodeInput() {
    this.couponCodeInput.clear();
  }

  // Workflow methods

  fillAndSubmitCouponForm(code: string | number) {
    this.setCouponCode(code);
    this.submitCouponForm();
  }

  fillUserDetailsAndSubmit(details: {
    email?: string;
    password?: string;
    fullName?: string;
    describe?: string;
  }) {
    if (details.email) this.setEmail(details.email);
    if (details.password) this.setPassword(details.password);
    if (details.fullName) this.setFullName(details.fullName);
    if (details.describe) this.setDescribe(details.describe);
    // Add submit logic if needed, e.g., this.submitButton.click();
  }

  selectCheckboxes(indices: number[]) {
    indices.forEach((i) => this.checkboxes.eq(i).check());
  }

  selectRadios(indices: number[]) {
    indices.forEach((i) => this.radios.eq(i).check());
  }

  setRangeAndAssert(value: number, expectedText: string) {
    this.setTriggerInputRange(value);
    this.triggerInputRangeP.should("contain.text", expectedText);
  }

  scrollAndClick(type: "horizontal" | "vertical" | "both") {
    if (type === "horizontal") this.scrollHorizontal();
    else if (type === "vertical") this.scrollVertical();
    else if (type === "both") this.scrollBoth();
  }
}
