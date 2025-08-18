// Author: Phillip Onfri
// Company: pvoSoft
// Date Created: 2025-08-18
// File Name: actionsPage.methodTests.spec.ts
// Framework: Cypress.io, JS, TS
// Description: Full test coverage for all ActionsPage.po.ts methods and selectors

import ActionsPage from '../pageObjects/ActionsPage.po';

const actionsPage = new ActionsPage('/commands/actions');

describe('ActionsPage Page Object Method & Locator Tests', () => {
  beforeEach('[ ] Load actions page and wait for ready.', () => {
    actionsPage.visit('/commands/actions');
    cy.waitForPageReady();
  });

  // Individual tests for each getter
  it('[getter] emailInput should be visible', () => { actionsPage.emailInput.should('be.visible'); });
  it('[getter] disabledTextarea should be visible', () => { actionsPage.disabledTextarea.should('be.visible'); });
  it('[getter] passwordInput should be visible', () => { actionsPage.passwordInput.should('be.visible'); });
  it('[getter] fullNameInput should be visible', () => { actionsPage.fullNameInput.should('be.visible'); });
  it('[getter] describeInput should be visible', () => { actionsPage.describeInput.should('be.visible'); });
  it('[getter] couponCodeInput should be visible', () => { actionsPage.couponCodeInput.should('be.visible'); });
  it('[getter] couponForm should be visible', () => { actionsPage.couponForm.should('be.visible'); });
  it('[getter] submitButton should be visible', () => { actionsPage.submitButton.should('be.visible'); });
  it('[getter] actionButton should be visible', () => { actionsPage.actionButton.should('be.visible'); });
  it('[getter] actionCanvas should be visible', () => { actionsPage.actionCanvas.should('be.visible'); });
  it('[getter] actionLabels should be visible', () => { actionsPage.actionLabels.should('be.visible'); });
  it('[getter] actionOpacityButton should be visible', () => { actionsPage.actionOpacityButton.should('be.visible'); });
  it('[getter] actionDiv should be visible', () => { actionsPage.actionDiv.should('be.visible'); });
  it('[getter] actionInputHidden should exist', () => { actionsPage.actionInputHidden.should('exist'); });
  it('[getter] rightClickDiv should be visible', () => { actionsPage.rightClickDiv.should('be.visible'); });
  it('[getter] rightClickInputHidden should exist', () => { actionsPage.rightClickInputHidden.should('exist'); });
  it('[getter] checkboxes should exist', () => { actionsPage.checkboxes.should('exist'); });
  it('[getter] radios should exist', () => { actionsPage.radios.should('exist'); });
  it('[getter] multipleCheckboxes should exist', () => { actionsPage.multipleCheckboxes.should('exist'); });
  it('[getter] checkSectionCheckboxes should exist', () => { actionsPage.checkSectionCheckboxes.should('exist'); });
  it('[getter] selectSingle should be visible', () => { actionsPage.selectSingle.should('be.visible'); });
  it('[getter] selectMultiple should be visible', () => { actionsPage.selectMultiple.should('be.visible'); });
  it('[getter] scrollHorizontalButton should be visible', () => {
    actionsPage.scrollHorizontalButton.scrollIntoView();
    actionsPage.scrollHorizontalButton.should('be.visible');
  });
  it('[getter] scrollVerticalButton should be visible', () => {
    actionsPage.scrollVerticalButton.scrollIntoView();
    actionsPage.scrollVerticalButton.should('be.visible');
  });
  it('[getter] scrollBothButton should be visible', () => {
    actionsPage.scrollBothButton.scrollIntoView();
    actionsPage.scrollBothButton.should('be.visible');
  });
  it('[getter] scrollableHorizontal should exist', () => { actionsPage.scrollableHorizontal.should('exist'); });
  it('[getter] scrollableVertical should exist', () => { actionsPage.scrollableVertical.should('exist'); });
  it('[getter] scrollableBoth should exist', () => { actionsPage.scrollableBoth.should('exist'); });
  it('[getter] triggerInputRange should be visible', () => { actionsPage.triggerInputRange.should('be.visible'); });
  it('[getter] triggerInputRangeP should be visible', () => { actionsPage.triggerInputRangeP.should('be.visible'); });

  // Individual tests for each workflow method
  it('[workflow] typeEmail should type email', () => { actionsPage.typeEmail('test@example.com'); });
  it('[workflow] typeDisabledTextarea should type text (force)', () => { actionsPage.typeDisabledTextarea('disabled text', { force: true }); });
  it('[workflow] typePassword should type password', () => { actionsPage.typePassword('password123'); });
  it('[workflow] typeFullName should type full name', () => { actionsPage.typeFullName('John Doe'); });
  it('[workflow] typeDescribe should type description', () => { actionsPage.typeDescribe('description'); });
  it('[workflow] clearDescribe should clear description', () => { actionsPage.clearDescribe(); });
  it('[workflow] submitCouponForm should submit form', () => { actionsPage.submitCouponForm(); });
  it('[workflow] typeCouponCode should type coupon code', () => { actionsPage.typeCouponCode('COUPON2025'); });
  it('[workflow] clickSubmitButton should click submit', () => { actionsPage.clickSubmitButton(); });
  it('[workflow] clickActionButton should click action button', () => { actionsPage.clickActionButton(); });
  it('[workflow] clickActionCanvas should click canvas', () => { actionsPage.clickActionCanvas(); });
  it('[workflow] clickActionCanvas should click canvas at position', () => { actionsPage.clickActionCanvas('topLeft'); });
  it('[workflow] clickActionLabels should click all labels', () => { actionsPage.clickActionLabels(); });
  it('[workflow] clickActionOpacityButton should click opacity button', () => { actionsPage.clickActionOpacityButton(); });
  it('[workflow] dblClickActionDiv should double click div', () => { actionsPage.dblClickActionDiv(); });
  it('[workflow] getActionInputHidden should get hidden input', () => { actionsPage.getActionInputHidden().should('exist'); });
  it('[workflow] rightClickActionDiv should right click div', () => { actionsPage.rightClickActionDiv(); });
  it('[workflow] getRightClickInputHidden should get hidden input', () => { actionsPage.getRightClickInputHidden().should('exist'); });
  it('[workflow] checkCheckboxes should check all checkboxes', () => { actionsPage.checkCheckboxes(); });
  it('[workflow] checkRadios should check all radios', () => { actionsPage.checkRadios(); });
  it('[workflow] checkMultipleCheckboxes should check multiple checkboxes', () => { actionsPage.checkMultipleCheckboxes(['checkbox1', 'checkbox2']); });
  it('[workflow] uncheckSectionCheckboxes should uncheck section checkboxes', () => { actionsPage.uncheckSectionCheckboxes(); });
  it('[workflow] checkSectionCheckboxesByValue should check section checkboxes by value', () => { actionsPage.checkSectionCheckboxesByValue(['checkbox1']); });
  it('[workflow] uncheckSectionCheckboxesByValue should uncheck section checkboxes by value', () => { actionsPage.uncheckSectionCheckboxesByValue(['checkbox1']); });
  it('[workflow] selectSingleOption should select single option', () => { actionsPage.selectSingleOption('apples'); });
  it('[workflow] selectMultipleOptions should select multiple options', () => { actionsPage.selectMultipleOptions(['apples', 'bananas']); });
  it('[workflow] scrollHorizontalButtonIntoView should scroll horizontal button', () => { actionsPage.scrollHorizontalButtonIntoView(); });
  it('[workflow] scrollVerticalButtonIntoView should scroll vertical button', () => { actionsPage.scrollVerticalButtonIntoView(); });
  it('[workflow] scrollBothButtonIntoView should scroll both button', () => { actionsPage.scrollBothButtonIntoView(); });
  it('[workflow] scrollWindowTo should scroll window', () => { actionsPage.scrollWindowTo('bottom'); });
  it('[workflow] scrollScrollableHorizontalTo should scroll horizontal', () => { actionsPage.scrollScrollableHorizontalTo('right'); });
  it('[workflow] scrollScrollableVerticalTo should scroll vertical', () => { actionsPage.scrollScrollableVerticalTo('bottom'); });
  it('[workflow] scrollScrollableBothTo should scroll both', () => { actionsPage.scrollScrollableBothTo('bottom'); });
  it('[workflow] setTriggerInputRangeValue should set range value', () => { actionsPage.setTriggerInputRangeValue(50); });
  it('[workflow] getTriggerInputRangeValue should get range value', () => { actionsPage.getTriggerInputRangeValue().should('exist'); });
});
