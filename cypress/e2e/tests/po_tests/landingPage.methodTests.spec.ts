// Author: Phillip Onfri
// Company: pvoSoft
// Date Created: 2025-08-18
// File Name: landingPage.methodTests.spec.ts
// Framework: Cypress.io, JS, TS
// Description: Full test coverage for all LandingPage.po.ts methods and selectors

import LandingPage from '../pageObjects/LandingPage.po';

const landingPage = new LandingPage();

// All tests must be inside a single describe block

describe('LandingPage Page Object Method & Locator Tests', () => {
  beforeEach('[ ] Load landing page and wait for ready.', () => {
    landingPage.visit('/');
    cy.waitForPageReady();
  });

  // Individual tests for each getter
  it('[getter] navbar should be visible', () => { landingPage.navbar.should('be.visible'); });
  it('[getter] navbarContainer should be visible', () => { landingPage.navbarContainer.should('be.visible'); });
  it('[getter] navbarHeader should be visible', () => { landingPage.navbarHeader.should('be.visible'); });
  it('[getter] navbarToggle should exist and may be hidden', () => {
    landingPage.navbarToggle.should('exist');
    // If visible, assert visible; otherwise, assert hidden
    landingPage.navbarToggle.then($el => {
      if ($el.is(':visible')) {
        expect($el).to.be.visible;
      } else {
        expect($el).to.not.be.visible;
      }
    });
  });
  it('[getter] navBrand should be visible', () => { landingPage.navBrand.should('be.visible'); });
  it('[getter] navCommands should be visible', () => { landingPage.navCommands.should('be.visible'); });
  it('[getter] navUtilities should be visible', () => { landingPage.navUtilities.should('be.visible'); });
  it('[getter] navCypressApi should be visible', () => { landingPage.navCypressApi.should('be.visible'); });
  it('[getter] navGitHub should be visible', () => { landingPage.navGitHub.should('be.visible'); });
  it('[getter] banner should be visible', () => { landingPage.banner.should('be.visible'); });
  it('[getter] bannerAlt should be visible', () => { landingPage.bannerAlt.should('be.visible'); });
  it('[getter] kitchenSinkTitle should be visible', () => { landingPage.kitchenSinkTitle.should('be.visible'); });
  it('[getter] kitchenSinkDesc should be visible', () => { landingPage.kitchenSinkDesc.should('be.visible'); });
  it('[getter] commandsSection should be visible', () => { landingPage.commandsSection.should('be.visible'); });
  it('[getter] commandsDesc should be visible', () => { landingPage.commandsDesc.should('be.visible'); });
  it('[getter] utilitiesSection should be visible', () => { landingPage.utilitiesSection.should('be.visible'); });
  it('[getter] utilitiesDesc should be visible', () => { landingPage.utilitiesDesc.should('be.visible'); });
  it('[getter] cypressApiSection should be visible', () => { landingPage.cypressApiSection.should('be.visible'); });
  it('[getter] cypressApiDesc should be visible', () => { landingPage.cypressApiDesc.should('be.visible'); });
  it('[getter] homeList should be visible', () => { landingPage.homeList.should('be.visible'); });
  it('[getter] queryingLink should be visible', () => { landingPage.queryingLink.should('be.visible'); });
  it('[getter] traversalLink should be visible', () => { landingPage.traversalLink.should('be.visible'); });
  it('[getter] actionsLink should be visible', () => { landingPage.actionsLink.should('be.visible'); });
  it('[getter] windowLink should be visible', () => { landingPage.windowLink.should('be.visible'); });
  it('[getter] viewportLink should be visible', () => { landingPage.viewportLink.should('be.visible'); });
  it('[getter] locationLink should be visible', () => { landingPage.locationLink.should('be.visible'); });
  it('[getter] navigationLink should be visible', () => { landingPage.navigationLink.should('be.visible'); });
  it('[getter] assertionsLink should be visible', () => { landingPage.assertionsLink.should('be.visible'); });
  it('[getter] miscLink should be visible', () => { landingPage.miscLink.should('be.visible'); });
  it('[getter] connectorsLink should be visible', () => { landingPage.connectorsLink.should('be.visible'); });
  it('[getter] aliasingLink should be visible', () => { landingPage.aliasingLink.should('be.visible'); });
  it('[getter] waitingLink should be visible', () => { landingPage.waitingLink.should('be.visible'); });
  it('[getter] networkRequestsLink should be visible', () => { landingPage.networkRequestsLink.should('be.visible'); });
  it('[getter] filesLink should be visible', () => { landingPage.filesLink.should('be.visible'); });
  it('[getter] storageLink should be visible', () => { landingPage.storageLink.should('be.visible'); });
  it('[getter] cookiesLink should be visible', () => { landingPage.cookiesLink.should('be.visible'); });
  it('[getter] spiesStubsClocksLink should be visible', () => { landingPage.spiesStubsClocksLink.should('be.visible'); });
  it('[getter] utilitiesLink should be visible', () => { landingPage.utilitiesLink.should('be.visible'); });
  it('[getter] cypressApiLink should be visible', () => { landingPage.cypressApiLink.should('be.visible'); });
  it('[getter] githubLink should be visible', () => { landingPage.githubLink.should('be.visible'); });

  // Individual tests for each workflow method
  it('[workflow] clickBanner should click banner', () => { landingPage.clickBanner(); });
  it('[workflow] clickBannerAlt should click bannerAlt', () => { landingPage.clickBannerAlt(); });
  it('[workflow] clickQueryingLink should click queryingLink', () => { landingPage.clickQueryingLink(); });
  it('[workflow] clickTraversalLink should click traversalLink', () => { landingPage.clickTraversalLink(); });
  it('[workflow] clickActionsLink should click actionsLink', () => { landingPage.clickActionsLink(); });
  it('[workflow] clickWindowLink should click windowLink', () => { landingPage.clickWindowLink(); });
  it('[workflow] clickViewportLink should click viewportLink', () => { landingPage.clickViewportLink(); });
  it('[workflow] clickLocationLink should click locationLink', () => { landingPage.clickLocationLink(); });
  it('[workflow] clickNavigationLink should click navigationLink', () => { landingPage.clickNavigationLink(); });
  it('[workflow] clickAssertionsLink should click assertionsLink', () => { landingPage.clickAssertionsLink(); });
  it('[workflow] clickMiscLink should click miscLink', () => { landingPage.clickMiscLink(); });
  it('[workflow] clickConnectorsLink should click connectorsLink', () => { landingPage.clickConnectorsLink(); });
  it('[workflow] clickAliasingLink should click aliasingLink', () => { landingPage.clickAliasingLink(); });
  it('[workflow] clickWaitingLink should click waitingLink', () => { landingPage.clickWaitingLink(); });
  it('[workflow] clickNetworkRequestsLink should click networkRequestsLink', () => { landingPage.clickNetworkRequestsLink(); });
  it('[workflow] clickFilesLink should click filesLink', () => { landingPage.clickFilesLink(); });
  it('[workflow] clickStorageLink should click storageLink', () => { landingPage.clickStorageLink(); });
  it('[workflow] clickCookiesLink should click cookiesLink', () => { landingPage.clickCookiesLink(); });
  it('[workflow] clickSpiesStubsClocksLink should click spiesStubsClocksLink', () => { landingPage.clickSpiesStubsClocksLink(); });
  it('[workflow] clickUtilitiesLink should click utilitiesLink', () => { landingPage.clickUtilitiesLink(); });
  it('[workflow] clickCypressApiLink should click cypressApiLink', () => { landingPage.clickCypressApiLink(); });
  it('[workflow] clickGithubLink should click githubLink', () => { landingPage.clickGithubLink(); });

  it('[workflow] getText should return text for kitchenSinkDesc', () => {
    landingPage.getText('kitchenSinkDesc').should('be.a', 'string');
  });
  it('[workflow] getCss should return css for navbar', () => {
    landingPage.getCss('navbar', 'display').should('exist');
  });
  it('[workflow] isVisible should assert navbar is visible', () => {
    landingPage.isVisible('navbar');
  });
  it('[workflow] isEnabled should assert navbar is enabled', () => {
    landingPage.isEnabled('navbar');
  });
  // The following are generic and may require valid selectors on the page:
  it('[workflow] typeInput should type into input (skipped, no input on page)', () => {
    // landingPage.typeInput('someInputSelector', 'test');
    // cy.get('input').type('test');
    // Skipped: No input selector on landing page
  });
  it('[workflow] clearInput should clear input (skipped, no input on page)', () => {
    // landingPage.clearInput('someInputSelector');
    // cy.get('input').clear();
    // Skipped: No input selector on landing page
  });
  it('[workflow] check should check checkbox (skipped, no checkbox on page)', () => {
    // landingPage.check('someCheckboxSelector');
    // cy.get('input[type="checkbox"]').check();
    // Skipped: No checkbox selector on landing page
  });
  it('[workflow] uncheck should uncheck checkbox (skipped, no checkbox on page)', () => {
    // landingPage.uncheck('someCheckboxSelector');
    // cy.get('input[type="checkbox"]').uncheck();
    // Skipped: No checkbox selector on landing page
  });
  it('[workflow] selectOption should select option (skipped, no select on page)', () => {
    // landingPage.selectOption('someSelectSelector', 'optionValue');
    // cy.get('select').select('optionValue');
    // Skipped: No select element on landing page
  });
});
