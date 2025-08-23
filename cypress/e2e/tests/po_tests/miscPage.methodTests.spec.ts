// Author: Phillip Onfri
// Company: pvoSoft
// Date Created: 2025-08-22
// File Name: miscPage.methodTests.spec.ts
// Framework: Cypress.io, JS, TS
// Description: Full test coverage for all MiscPage.po.ts methods and selectors

import MiscPage from '../../pageObjects/MiscPage.po';

const miscPage = new MiscPage('/commands/misc');

describe('MiscPage Page Object Method & Locator Tests', () => {
  beforeEach('[ ] Load misc page and wait for ready.', () => {
    miscPage.visit('/commands/misc');
    cy.waitForPageReady();
  });

  // Individual tests for each getter
  it('[getter] miscSection should be visible', () => { miscPage.miscSection.should('be.visible'); });
  it('[getter] miscHeader should be visible', () => { miscPage.miscHeader.should('be.visible'); });
  it('[getter] miscCode should be visible', () => { miscPage.miscCode.should('be.visible'); });
  it('[getter] miscButton should be visible', () => { miscPage.miscButton.should('be.visible'); });

  // Individual tests for each interaction method
    it('[interaction] clickMiscButton should click misc button', () => { miscPage.clickMiscButton(); });
    it('[interaction] typeMiscInput should type in misc input', () => { miscPage.typeMiscInput('test input'); });
    it('[interaction] checkMiscCheckbox should check misc checkbox', () => { miscPage.checkMiscCheckbox(); });
    it('[interaction] uncheckMiscCheckbox should uncheck misc checkbox', () => { miscPage.uncheckMiscCheckbox(); });
    it('[interaction] selectMiscOption should select misc option', () => { miscPage.selectMiscOption('option1'); });
});
    it('[workflow] fillAndSubmitMiscForm should fill and submit form', () => { miscPage.fillAndSubmitMiscForm('input', 'option1'); });
    it('[workflow] checkAndUncheckMiscCheckbox should check and uncheck checkbox', () => { miscPage.checkAndUncheckMiscCheckbox(); });
    it('[workflow] verifyMiscTableRowsCount should run workflow', () => { miscPage.verifyMiscTableRowsCount(); });
    it('[workflow] verifyMiscListItemsContain should verify list item', () => { miscPage.verifyMiscListItemsContain('item1'); });
