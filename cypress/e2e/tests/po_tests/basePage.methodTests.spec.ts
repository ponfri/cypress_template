// Author: Phillip Onfri
// Company: pvoSoft
// Date Created: 2025-08-18
// File Name: basePage.methodTests.spec.ts
// Framework: Cypress.io, JS, TS
// Description: Full test coverage for all BasePage.po.ts methods and selectors

import { BasePage } from '../pageObjects/BasePage.po';

const basePage = new BasePage('/');

describe('BasePage Page Object Method & Locator Tests', () => {
  beforeEach('[ ] Load base page and wait for ready.', () => {
    basePage.visit('/');
    cy.waitForPageReady && cy.waitForPageReady();
  });

  // Individual tests for each navigation getter
  it('[getter] NavCommands should exist', () => { basePage.NavCommands.should('exist'); });
  it('[getter] NavUtilities should exist', () => { basePage.NavUtilities.should('exist'); });
  it('[getter] NavCypressAPI should exist', () => { basePage.NavCypressAPI.should('exist'); });
  it('[getter] NavGitHub should exist', () => { basePage.NavGitHub.should('exist'); });

  // Individual tests for each commands sub-menu getter
  it('[getter] CommandsQuerying should exist', () => { basePage.CommandsQuerying.should('exist'); });
  it('[getter] CommandsTraversal should exist', () => { basePage.CommandsTraversal.should('exist'); });
  it('[getter] CommandsActions should exist', () => { basePage.CommandsActions.should('exist'); });
  it('[getter] CommandsWindow should exist', () => { basePage.CommandsWindow.should('exist'); });
  it('[getter] CommandsViewport should exist', () => { basePage.CommandsViewport.should('exist'); });
  it('[getter] CommandsLocation should exist', () => { basePage.CommandsLocation.should('exist'); });
  it('[getter] CommandsNavigation should exist', () => { basePage.CommandsNavigation.should('exist'); });
  it('[getter] CommandsAssertions should exist', () => { basePage.CommandsAssertions.should('exist'); });
  it('[getter] CommandsMisc should exist', () => { basePage.CommandsMisc.should('exist'); });
  it('[getter] CommandsConnectors should exist', () => { basePage.CommandsConnectors.should('exist'); });
  it('[getter] CommandsAliasing should exist', () => { basePage.CommandsAliasing.should('exist'); });
  it('[getter] CommandsWaiting should exist', () => { basePage.CommandsWaiting.should('exist'); });
  it('[getter] CommandsNetworkRequests should exist', () => { basePage.CommandsNetworkRequests.should('exist'); });
  it('[getter] CommandsFiles should exist', () => { basePage.CommandsFiles.should('exist'); });
  it('[getter] CommandsStorage should exist', () => { basePage.CommandsStorage.should('exist'); });
  it('[getter] CommandsCookies should exist', () => { basePage.CommandsCookies.should('exist'); });
  it('[getter] CommandsSpiesStubsClocks should exist', () => { basePage.CommandsSpiesStubsClocks.should('exist'); });

  // Individual tests for each navigation click method
  it('[workflow] clickNavCommands should click navCommands', () => { basePage.clickNavCommands(); });
  it('[workflow] clickNavUtilities should click navUtilities', () => { basePage.clickNavUtilities(); });
  it('[workflow] clickNavCypressAPI should click navCypressAPI', () => { basePage.clickNavCypressAPI(); });
  it('[workflow] clickNavGitHub should click navGitHub', () => { basePage.clickNavGitHub(); });

  // Individual tests for each commands sub-menu click method
  it('[workflow] clickCommandsQuerying should click commandsQuerying', () => { basePage.CommandsQuerying.click({ force: true }); });
  it('[workflow] clickCommandsTraversal should click commandsTraversal', () => { basePage.CommandsTraversal.click({ force: true }); });
  it('[workflow] clickCommandsActions should click commandsActions', () => { basePage.CommandsActions.click({ force: true }); });
  it('[workflow] clickCommandsWindow should click commandsWindow', () => { basePage.CommandsWindow.click({ force: true }); });
  it('[workflow] clickCommandsViewport should click commandsViewport', () => { basePage.CommandsViewport.click({ force: true }); });
  it('[workflow] clickCommandsLocation should click commandsLocation', () => { basePage.CommandsLocation.click({ force: true }); });
  it('[workflow] clickCommandsNavigation should click commandsNavigation', () => { basePage.CommandsNavigation.click({ force: true }); });
  it('[workflow] clickCommandsAssertions should click commandsAssertions', () => { basePage.CommandsAssertions.click({ force: true }); });
  it('[workflow] clickCommandsMisc should click commandsMisc', () => { basePage.CommandsMisc.click({ force: true }); });
  it('[workflow] clickCommandsConnectors should click commandsConnectors', () => { basePage.CommandsConnectors.click({ force: true }); });
  it('[workflow] clickCommandsAliasing should click commandsAliasing', () => { basePage.CommandsAliasing.click({ force: true }); });
  it('[workflow] clickCommandsWaiting should click commandsWaiting', () => { basePage.CommandsWaiting.click({ force: true }); });
  it('[workflow] clickCommandsNetworkRequests should click commandsNetworkRequests', () => { basePage.CommandsNetworkRequests.click({ force: true }); });
  it('[workflow] clickCommandsFiles should click commandsFiles', () => { basePage.CommandsFiles.click({ force: true }); });
  it('[workflow] clickCommandsStorage should click commandsStorage', () => { basePage.CommandsStorage.click({ force: true }); });
  it('[workflow] clickCommandsCookies should click commandsCookies', () => { basePage.CommandsCookies.click({ force: true }); });
  it('[workflow] clickCommandsSpiesStubsClocks should click commandsSpiesStubsClocks', () => { basePage.CommandsSpiesStubsClocks.click({ force: true }); });
});
