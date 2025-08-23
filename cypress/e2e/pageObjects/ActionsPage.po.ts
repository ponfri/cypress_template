import { BasePage } from "./BasePage.po";

export default class ActionsPage extends BasePage {
  #elements = {
    emailInput: ".action-email[data-cy='email-input']",
    disabledTextarea: ".action-disabled[data-cy='disabled-textarea']",
    passwordInput: ".action-focus[data-cy='password-input']",
    fullNameInput: ".action-blur[data-cy='full-name-input']",
    describeInput: ".action-clear[data-cy='describe-input']",
    couponCodeInput: "#couponCode1[data-cy='coupon-code-input']",
    couponForm: ".action-form[data-cy='coupon-form']",
    submitButton: '.action-form button[type="submit"][data-cy="submit-button"]',
    actionButton: ".action-btn[data-cy='action-button']",
    actionCanvas: "#action-canvas[data-cy='action-canvas']",
    actionLabels: ".action-labels > .label[data-cy='action-label']",
    actionOpacityButton: ".action-opacity > .btn[data-cy='action-opacity-button']",
    actionDiv: ".action-div[data-cy='action-div']",
    actionInputHidden: ".action-input-hidden[data-cy='action-input-hidden']",
    rightClickDiv: ".rightclick-action-div[data-cy='rightclick-div']",
    rightClickInputHidden: ".rightclick-action-input-hidden[data-cy='rightclick-input-hidden']",
    checkboxes: '.action-checkboxes [type="checkbox"][data-cy="checkbox"]',
    radios: '.action-radios [type="radio"][data-cy="radio"]',
    multipleCheckboxes: '.action-multiple-checkboxes [type="checkbox"][data-cy="multiple-checkbox"]',
    checkSectionCheckboxes: '.action-check [type="checkbox"][data-cy="section-checkbox"]',
    selectSingle: ".action-select[data-cy='select-single']",
    selectMultiple: ".action-select-multiple[data-cy='select-multiple']",
    scrollHorizontalButton: "#scroll-horizontal button[data-cy='scroll-horizontal-button']",
    scrollVerticalButton: "#scroll-vertical button[data-cy='scroll-vertical-button']",
    scrollBothButton: "#scroll-both button[data-cy='scroll-both-button']",
    scrollableHorizontal: "#scrollable-horizontal[data-cy='scrollable-horizontal']",
    scrollableVertical: "#scrollable-vertical[data-cy='scrollable-vertical']",
    scrollableBoth: "#scrollable-both[data-cy='scrollable-both']",
    triggerInputRange: ".trigger-input-range[data-cy='trigger-input-range']",
    triggerInputRangeP: ".trigger-input-range + p[data-cy='trigger-input-range-p']",
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
  setEmail(value: string | number) { this.emailInput.clear().type(`${value}`); return this; }
  setPassword(value: string | number) { this.passwordInput.clear().type(`${value}`); return this; }
  setFullName(value: string | number) { this.fullNameInput.clear().type(`${value}`); return this; }
  setDescribe(value: string | number) { this.describeInput.clear().type(`${value}`); return this; }
  setCouponCode(value: string | number) { this.couponCodeInput.clear().type(`${value}`); return this; }

  submitCouponForm() { this.submitButton.click(); return this; }
  clickActionButton() { this.actionButton.click(); return this; }
  clickActionOpacityButton() { this.actionOpacityButton.click(); return this; }
  clickActionDiv() { this.actionDiv.click(); return this; }
  clickRightClickDiv() { this.rightClickDiv.rightclick(); return this; }
  checkCheckbox(index: number = 0) { this.checkboxes.eq(index).check(); return this; }
  checkRadio(index: number = 0) { this.radios.eq(index).check(); return this; }
  checkMultipleCheckboxes(indices: number[]) { indices.forEach((i) => this.multipleCheckboxes.eq(i).check()); return this; }
  checkSectionCheckbox(index: number = 0) { this.checkSectionCheckboxes.eq(index).check(); return this; }
  selectSingleOption(value: string) { this.selectSingle.select(value); return this; }
  selectMultipleOptions(values: string[]) { this.selectMultiple.select(values); return this; }
  scrollHorizontal() { this.scrollHorizontalButton.click(); return this; }
  scrollVertical() { this.scrollVerticalButton.click(); return this; }
  scrollBoth() { this.scrollBothButton.click(); return this; }
  setTriggerInputRange(value: number) { this.triggerInputRange.invoke("val", value).trigger("input"); return this; }
  clearDescribeInput() { this.describeInput.clear(); return this; }
  clearFullNameInput() { this.fullNameInput.clear(); return this; }
  clearCouponCodeInput() { this.couponCodeInput.clear(); return this; }

  // Workflow methods
  fillAndSubmitCouponForm(code: string | number) {
    this.setCouponCode(code);
    this.submitCouponForm();
    return this;
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
    return this;
  }

  selectCheckboxes(indices: number[]) {
    indices.forEach((i) => this.checkboxes.eq(i).check());
    return this;
  }

  selectRadios(indices: number[]) {
    indices.forEach((i) => this.radios.eq(i).check());
    return this;
  }

  // Assertion should be done in test, not here

  setRange(value: number) {
    this.setTriggerInputRange(value);
    return this;
  }

  scrollAndClick(type: "horizontal" | "vertical" | "both") {
    if (type === "horizontal") this.scrollHorizontal();
    else if (type === "vertical") this.scrollVertical();
    else if (type === "both") this.scrollBoth();
    return this;
  }
}
