// Author: Phillip Onfri
// Company: pvoSoft
// Date Created: 2025-08-22
// File Name: networkRequestsPage.methodTests.spec.ts
// Framework: Cypress.io, JS, TS
// Description: Full test coverage for all NetworkRequestsPage.po.ts methods and selectors

import NetworkRequestsPage from '../../pageObjects/NetworkRequestsPage.po';

const networkPage = new NetworkRequestsPage('/commands/network-requests');

describe('NetworkRequestsPage Page Object Method & Locator Tests', () => {
  beforeEach('[ ] Load network requests page and wait for ready.', () => {
    networkPage.visit('/commands/network-requests');
    cy.waitForPageReady();
  });

  // Individual tests for each getter
  it('[getter] networkRequestsSection should be visible', () => { networkPage.networkRequestsSection.should('be.visible'); });
  it('[getter] cyRequestHeader should be visible', () => { networkPage.cyRequestHeader.should('be.visible'); });
  it('[getter] cyRequestCode should be visible', () => { networkPage.cyRequestCode.should('be.visible'); });
  it('[getter] cyInterceptHeader should be visible', () => { networkPage.cyInterceptHeader.should('be.visible'); });
  it('[getter] cyInterceptCode should be visible', () => { networkPage.cyInterceptCode.should('be.visible'); });
  it('[getter] networkBtn should be visible', () => { networkPage.networkBtn.should('be.visible'); });
  it('[getter] networkComment should exist', () => { networkPage.networkComment.should('exist'); });
  it('[getter] networkPostBtn should be visible', () => { networkPage.networkPostBtn.should('be.visible'); });
  it('[getter] networkPostComment should exist', () => { networkPage.networkPostComment.should('exist'); });
  it('[getter] networkPutBtn should be visible', () => { networkPage.networkPutBtn.should('be.visible'); });
  it('[getter] networkPutComment should exist', () => { networkPage.networkPutComment.should('exist'); });
  it('[getter] moreInfoLinks should exist', () => { networkPage.moreInfoLinks.forEach(link => link.should('exist')); });

  // Individual tests for each interaction method
  it('[interaction] clickNetworkBtn should click network button', () => { networkPage.clickNetworkBtn(); });
  it('[interaction] clickNetworkPostBtn should click network post button', () => { networkPage.clickNetworkPostBtn(); });
  it('[interaction] clickNetworkPutBtn should click network put button', () => { networkPage.clickNetworkPutBtn(); });
  it('[interaction] clickMoreInfoLinks should click all info links', () => { networkPage.clickMoreInfoLinks(); });

  // Workflow methods
  it('[workflow] sendNetworkRequest should send network request', () => { networkPage.sendNetworkRequest(); });
  it('[workflow] sendNetworkPostRequest should send network post request', () => { networkPage.sendNetworkPostRequest(); });
  it('[workflow] sendNetworkPutRequest should send network put request', () => { networkPage.sendNetworkPutRequest(); });
  it('[workflow] verifyNetworkComments should run workflow', () => { networkPage.verifyNetworkComments(); });
  it('[workflow] clickAllNetworkButtons should click all network buttons', () => { networkPage.clickAllNetworkButtons(); });
});
