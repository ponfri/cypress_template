import CookiesPage from '../pageObjects/CookiesPage.po';

describe('CookiesPage Page Object Method & Locator Tests', () => {
  let page: CookiesPage;
  beforeEach(() => {
    page = new CookiesPage('/commands/cookies');
    page.visit();
  });

  // Banner and header
  it('[getter] Banner should exist', () => {
    page.getBanner().should('exist');
  });
  it('[workflow] Banner should be visible', () => {
    page.assertBannerVisible();
  });
  it('[getter] MainHeader should exist', () => {
    page.getMainHeader().should('exist');
  });
  it('[workflow] MainHeader should be visible and contain "Cookies"', () => {
    page.assertMainHeaderVisible();
  });

  // Docs link
  it('[getter] DocsLink should exist', () => {
    page.getDocsLink().should('exist');
  });
  it('[workflow] DocsLink should be visible', () => {
    page.assertDocsLinkVisible();
  });
  it('[workflow] DocsLink should navigate', () => {
    page.clickDocsLink();
  });

  // cy.getCookie section
  it('[getter] GetCookieSection should exist', () => {
    page.getGetCookieSection().should('exist');
  });
  it('[getter] GetCookieHeader should exist', () => {
    page.getGetCookieHeader().should('exist');
  });
  it('[workflow] GetCookieHeader should be visible', () => {
    page.assertGetCookieHeaderVisible();
  });
  it('[getter] GetCookieLink should exist', () => {
    page.getGetCookieLink().should('exist');
  });
  it('[workflow] GetCookieLink should be visible', () => {
    page.assertGetCookieLinkVisible();
  });
  it('[workflow] GetCookieLink should navigate', () => {
    page.clickGetCookieLink();
  });
  it('[getter] GetCookieCode should exist', () => {
    page.getGetCookieCode().should('exist');
  });
  it('[workflow] GetCookieCode should be visible', () => {
    page.assertGetCookieCodeVisible();
  });
  it('[getter] GetCookieButton should exist', () => {
    page.getGetCookieButton().should('exist');
  });
  it('[workflow] GetCookieButton should be clickable', () => {
    page.clickGetCookieButton();
  });

  // cy.getCookies section
  it('[getter] GetCookiesSection should exist', () => {
    page.getGetCookiesSection().should('exist');
  });
  it('[getter] GetCookiesHeader should exist', () => {
    page.getGetCookiesHeader().should('exist');
  });
  it('[workflow] GetCookiesHeader should be visible', () => {
    page.assertGetCookiesHeaderVisible();
  });
  it('[getter] GetCookiesLink should exist', () => {
    page.getGetCookiesLink().should('exist');
  });
  it('[workflow] GetCookiesLink should be visible', () => {
    page.assertGetCookiesLinkVisible();
  });
  it('[workflow] GetCookiesLink should navigate', () => {
    page.clickGetCookiesLink();
  });
  it('[getter] GetCookiesCode should exist', () => {
    page.getGetCookiesCode().should('exist');
  });
  it('[workflow] GetCookiesCode should be visible', () => {
    page.assertGetCookiesCodeVisible();
  });
  it('[getter] GetCookiesButton should exist', () => {
    page.getGetCookiesButton().should('exist');
  });
  it('[workflow] GetCookiesButton should be clickable', () => {
    page.clickGetCookiesButton();
  });

  // cy.getAllCookies section
  it('[getter] GetAllCookiesSection should exist', () => {
    page.getGetAllCookiesSection().should('exist');
  });
  it('[getter] GetAllCookiesHeader should exist', () => {
    page.getGetAllCookiesHeader().should('exist');
  });
  it('[workflow] GetAllCookiesHeader should be visible', () => {
    page.assertGetAllCookiesHeaderVisible();
  });
  it('[getter] GetAllCookiesLink should exist', () => {
    page.getGetAllCookiesLink().should('exist');
  });
  it('[workflow] GetAllCookiesLink should be visible', () => {
    page.assertGetAllCookiesLinkVisible();
  });
  it('[workflow] GetAllCookiesLink should navigate', () => {
    page.clickGetAllCookiesLink();
  });
  it('[getter] GetAllCookiesCode should exist', () => {
    page.getGetAllCookiesCode().should('exist');
  });
  it('[workflow] GetAllCookiesCode should be visible', () => {
    page.assertGetAllCookiesCodeVisible();
  });

  // cy.setCookie section
  it('[getter] SetCookieSection should exist', () => {
    page.getSetCookieSection().should('exist');
  });
  it('[getter] SetCookieHeader should exist', () => {
    page.getSetCookieHeader().should('exist');
  });
  it('[workflow] SetCookieHeader should be visible', () => {
    page.assertSetCookieHeaderVisible();
  });
  it('[getter] SetCookieLink should exist', () => {
    page.getSetCookieLink().should('exist');
  });
  it('[workflow] SetCookieLink should be visible', () => {
    page.assertSetCookieLinkVisible();
  });
  it('[workflow] SetCookieLink should navigate', () => {
    page.clickSetCookieLink();
  });
  it('[getter] SetCookieCode should exist', () => {
    page.getSetCookieCode().should('exist');
  });
  it('[workflow] SetCookieCode should be visible', () => {
    page.assertSetCookieCodeVisible();
  });

  // cy.clearCookie section
  it('[getter] ClearCookieSection should exist', () => {
    page.getClearCookieSection().should('exist');
  });
  it('[getter] ClearCookieHeader should exist', () => {
    page.getClearCookieHeader().should('exist');
  });
  it('[workflow] ClearCookieHeader should be visible', () => {
    page.assertClearCookieHeaderVisible();
  });
  it('[getter] ClearCookieLink should exist', () => {
    page.getClearCookieLink().should('exist');
  });
  it('[workflow] ClearCookieLink should be visible', () => {
    page.assertClearCookieLinkVisible();
  });
  it('[workflow] ClearCookieLink should navigate', () => {
    page.clickClearCookieLink();
  });
  it('[getter] ClearCookieCode should exist', () => {
    page.getClearCookieCode().should('exist');
  });
  it('[workflow] ClearCookieCode should be visible', () => {
    page.assertClearCookieCodeVisible();
  });
  it('[getter] ClearCookieButton should exist', () => {
    page.getClearCookieButton().should('exist');
  });
  it('[workflow] ClearCookieButton should be clickable', () => {
    page.clickClearCookieButton();
  });

  // cy.clearCookies section
  it('[getter] ClearCookiesSection should exist', () => {
    page.getClearCookiesSection().should('exist');
  });
  it('[getter] ClearCookiesHeader should exist', () => {
    page.getClearCookiesHeader().should('exist');
  });
  it('[workflow] ClearCookiesHeader should be visible', () => {
    page.assertClearCookiesHeaderVisible();
  });
  it('[getter] ClearCookiesLink should exist', () => {
    page.getClearCookiesLink().should('exist');
  });
  it('[workflow] ClearCookiesLink should be visible', () => {
    page.assertClearCookiesLinkVisible();
  });
  it('[workflow] ClearCookiesLink should navigate', () => {
    page.clickClearCookiesLink();
  });
  it('[getter] ClearCookiesCode should exist', () => {
    page.getClearCookiesCode().should('exist');
  });
  it('[workflow] ClearCookiesCode should be visible', () => {
    page.assertClearCookiesCodeVisible();
  });
  it('[getter] ClearCookiesButton should exist', () => {
    page.getClearCookiesButton().should('exist');
  });
  it('[workflow] ClearCookiesButton should be clickable', () => {
    page.clickClearCookiesButton();
  });

  // cy.clearAllCookies section
  it('[getter] ClearAllCookiesSection should exist', () => {
    page.getClearAllCookiesSection().should('exist');
  });
  it('[getter] ClearAllCookiesHeader should exist', () => {
    page.getClearAllCookiesHeader().should('exist');
  });
  it('[workflow] ClearAllCookiesHeader should be visible', () => {
    page.assertClearAllCookiesHeaderVisible();
  });
  it('[getter] ClearAllCookiesLink should exist', () => {
    page.getClearAllCookiesLink().should('exist');
  });
  it('[workflow] ClearAllCookiesLink should be visible', () => {
    page.assertClearAllCookiesLinkVisible();
  });
  it('[workflow] ClearAllCookiesLink should navigate', () => {
    page.clickClearAllCookiesLink();
  });
  it('[getter] ClearAllCookiesCode should exist', () => {
    page.getClearAllCookiesCode().should('exist');
  });
  it('[workflow] ClearAllCookiesCode should be visible', () => {
    page.assertClearAllCookiesCodeVisible();
  });

  // Full workflow
  it('[workflow] runAllCookiesWorkflows should complete without error', () => {
    page.runAllCookiesWorkflows();
  });
});
