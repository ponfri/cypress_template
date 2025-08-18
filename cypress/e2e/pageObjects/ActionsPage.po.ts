import { BasePage } from './BasePage.po';

export default class ActionsPage extends BasePage {
	#elements = {
		emailInput: '.action-email',
		disabledTextarea: '.action-disabled',
		passwordInput: '.action-focus',
		fullNameInput: '.action-blur',
		describeInput: '.action-clear',
		couponCodeInput: '#couponCode1',
		couponForm: '.action-form',
		submitButton: '.action-form button[type="submit"]',
		actionButton: '.action-btn',
		actionCanvas: '#action-canvas',
		actionLabels: '.action-labels > .label',
		actionOpacityButton: '.action-opacity > .btn',
		actionDiv: '.action-div',
		actionInputHidden: '.action-input-hidden',
		rightClickDiv: '.rightclick-action-div',
		rightClickInputHidden: '.rightclick-action-input-hidden',
		checkboxes: '.action-checkboxes [type="checkbox"]',
		radios: '.action-radios [type="radio"]',
		multipleCheckboxes: '.action-multiple-checkboxes [type="checkbox"]',
		checkSectionCheckboxes: '.action-check [type="checkbox"]',
		selectSingle: '.action-select',
		selectMultiple: '.action-select-multiple',
		scrollHorizontalButton: '#scroll-horizontal button',
		scrollVerticalButton: '#scroll-vertical button',
		scrollBothButton: '#scroll-both button',
		scrollableHorizontal: '#scrollable-horizontal',
		scrollableVertical: '#scrollable-vertical',
		scrollableBoth: '#scrollable-both',
		triggerInputRange: '.trigger-input-range',
		triggerInputRangeP: '.trigger-input-range + p',
	};

	// Getters
	get emailInput() { return cy.get(this.#elements.emailInput); }
	get disabledTextarea() { return cy.get(this.#elements.disabledTextarea); }
	get passwordInput() { return cy.get(this.#elements.passwordInput); }
	get fullNameInput() { return cy.get(this.#elements.fullNameInput); }
	get describeInput() { return cy.get(this.#elements.describeInput); }
	get couponCodeInput() { return cy.get(this.#elements.couponCodeInput); }
	get couponForm() { return cy.get(this.#elements.couponForm); }
	get submitButton() { return cy.get(this.#elements.submitButton); }
	get actionButton() { return cy.get(this.#elements.actionButton); }
	get actionCanvas() { return cy.get(this.#elements.actionCanvas); }
	get actionLabels() { return cy.get(this.#elements.actionLabels); }
	get actionOpacityButton() { return cy.get(this.#elements.actionOpacityButton); }
	get actionDiv() { return cy.get(this.#elements.actionDiv); }
	get actionInputHidden() { return cy.get(this.#elements.actionInputHidden); }
	get rightClickDiv() { return cy.get(this.#elements.rightClickDiv); }
	get rightClickInputHidden() { return cy.get(this.#elements.rightClickInputHidden); }
	get checkboxes() { return cy.get(this.#elements.checkboxes); }
	get radios() { return cy.get(this.#elements.radios); }
	get multipleCheckboxes() { return cy.get(this.#elements.multipleCheckboxes); }
	get checkSectionCheckboxes() { return cy.get(this.#elements.checkSectionCheckboxes); }
	get selectSingle() { return cy.get(this.#elements.selectSingle); }
	get selectMultiple() { return cy.get(this.#elements.selectMultiple); }
	get scrollHorizontalButton() { return cy.get(this.#elements.scrollHorizontalButton); }
	get scrollVerticalButton() { return cy.get(this.#elements.scrollVerticalButton); }
	get scrollBothButton() { return cy.get(this.#elements.scrollBothButton); }
	get scrollableHorizontal() { return cy.get(this.#elements.scrollableHorizontal); }
	get scrollableVertical() { return cy.get(this.#elements.scrollableVertical); }
	get scrollableBoth() { return cy.get(this.#elements.scrollableBoth); }
	get triggerInputRange() { return cy.get(this.#elements.triggerInputRange); }
	get triggerInputRangeP() { return cy.get(this.#elements.triggerInputRangeP); }

	// Workflow methods
	typeEmail(email: string, options?: any) { this.emailInput.type(email, options); }
	typeDisabledTextarea(text: string, options?: any) { this.disabledTextarea.type(text, options); }
	typePassword(password: string) { this.passwordInput.type(password); }
	typeFullName(name: string) { this.fullNameInput.type(name); }
	typeDescribe(text: string) { this.describeInput.type(text); }
	clearDescribe() { this.describeInput.clear(); }
	submitCouponForm() { this.couponForm.submit(); }
	typeCouponCode(code: string) { this.couponCodeInput.type(code); }
	clickSubmitButton() { this.submitButton.click(); }
	clickActionButton() { this.actionButton.click(); }
	/**
	 * Clicks the canvas at a position. Accepts Cypress position string or x/y coordinates.
	 * @param position Position string (e.g. 'topLeft') or x/y tuple (e.g. [80, 75])
	 */
	clickActionCanvas(position?: string | number | [number, number]) {
		if (typeof position === 'string' || typeof position === 'number') {
			this.actionCanvas.click(position as any);
		} else if (Array.isArray(position)) {
			this.actionCanvas.click(position[0], position[1]);
		} else {
			this.actionCanvas.click();
		}
	}
	clickActionLabels() { this.actionLabels.click({ multiple: true }); }
	clickActionOpacityButton(force = true) { this.actionOpacityButton.click({ force }); }
	dblClickActionDiv() { this.actionDiv.dblclick(); }
	getActionInputHidden() { return this.actionInputHidden; }
	rightClickActionDiv() { this.rightClickDiv.rightclick(); }
	getRightClickInputHidden() { return this.rightClickInputHidden; }
	checkCheckboxes() { this.checkboxes.not('[disabled]').check(); }
	checkRadios() { this.radios.not('[disabled]').check(); }
	checkMultipleCheckboxes(values: string[]) { this.multipleCheckboxes.check(values); }
	uncheckSectionCheckboxes() { this.checkSectionCheckboxes.not('[disabled]').uncheck(); }
	checkSectionCheckboxesByValue(values: string[]) { this.checkSectionCheckboxes.check(values); }
	uncheckSectionCheckboxesByValue(values: string[]) { this.checkSectionCheckboxes.uncheck(values); }
	selectSingleOption(option: string | string[]) { this.selectSingle.select(option); }
	selectMultipleOptions(options: string[]) { this.selectMultiple.select(options); }
	scrollHorizontalButtonIntoView() { this.scrollHorizontalButton.scrollIntoView(); }
	scrollVerticalButtonIntoView() { this.scrollVerticalButton.scrollIntoView(); }
	scrollBothButtonIntoView() { this.scrollBothButton.scrollIntoView(); }
	/**
	 * Scrolls the window or element. Accepts position string, number, or x/y tuple.
	 */
	scrollWindowTo(position: string | number | [number, number]) {
		if (Array.isArray(position)) {
			cy.scrollTo(position[0], position[1]);
		} else {
			cy.scrollTo(position as any);
		}
	}
	scrollScrollableHorizontalTo(position: string | number | [number, number]) {
		if (Array.isArray(position)) {
			this.scrollableHorizontal.scrollTo(position[0], position[1]);
		} else {
			this.scrollableHorizontal.scrollTo(position as any);
		}
	}
	scrollScrollableVerticalTo(position: string | number | [number, number]) {
		if (Array.isArray(position)) {
			this.scrollableVertical.scrollTo(position[0], position[1]);
		} else {
			this.scrollableVertical.scrollTo(position as any);
		}
	}
	scrollScrollableBothTo(position: string | number | [number, number], options?: any) {
		if (Array.isArray(position)) {
			this.scrollableBoth.scrollTo(position[0], position[1], options);
		} else {
			this.scrollableBoth.scrollTo(position as any, options);
		}
	}
	setTriggerInputRangeValue(val: number) { this.triggerInputRange.invoke('val', val).trigger('change'); }
	getTriggerInputRangeValue() { return this.triggerInputRangeP.invoke('text'); }
}
