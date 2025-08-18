import CypressAPIPage from '../pageObjects/CypressAPIPage.po';

describe('CypressAPIPage Page Object Method & Locator Tests', () => {
  let page: CypressAPIPage;
  beforeEach(() => {
    page = new CypressAPIPage('/cypress-api');
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
  it('[workflow] MainHeader should be visible and contain "Cypress API"', () => {
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
    page.getDocsLink().each(($el, idx) => {
      cy.wrap($el).should('be.visible').invoke('removeAttr', 'target').click();
      // Optionally assert navigation or URL change here
    });
  });

  // Commands.add section
  it('[getter] CommandsAddHeader should exist', () => {
    page.getCommandsAddHeader().should('exist');
  });
  it('[workflow] CommandsAddHeader should be visible', () => {
    page.assertCommandsAddHeaderVisible();
  });
  it('[getter] CommandsAddLink should exist', () => {
    page.getCommandsAddLink().should('exist');
  });
  it('[workflow] CommandsAddLink should be visible', () => {
    page.assertCommandsAddLinkVisible();
  });
  it('[workflow] CommandsAddLink should navigate', () => {
    page.getCommandsAddLink().each(($el, idx) => {
      cy.wrap($el).should('be.visible').invoke('removeAttr', 'target').click();
      // Optionally assert navigation or URL change here
    });
  });
  it('[getter] CommandsAddCode should exist', () => {
    page.getCommandsAddCode().should('exist');
  });
  it('[workflow] CommandsAddCode should be visible', () => {
    page.assertCommandsAddCodeVisible();
  });

  // Cookies.debug section
  it('[getter] CookiesDebugHeader should exist', () => {
    page.getCookiesDebugHeader().should('exist');
  });
  it('[workflow] CookiesDebugHeader should be visible', () => {
    page.assertCookiesDebugHeaderVisible();
  });
  it('[getter] CookiesDebugLink should exist', () => {
    page.getCookiesDebugLink().should('exist');
  });
  it('[workflow] CookiesDebugLink should be visible', () => {
    page.assertCookiesDebugLinkVisible();
  });
  it('[workflow] CookiesDebugLink should navigate', () => {
    page.getCookiesDebugLink().each(($el, idx) => {
      cy.wrap($el).should('be.visible').invoke('removeAttr', 'target').click();
      // Optionally assert navigation or URL change here
    });
  });
  it('[getter] CookiesDebugCode should exist', () => {
    page.getCookiesDebugCode().should('exist');
  });
  it('[workflow] CookiesDebugCode should be visible', () => {
    page.assertCookiesDebugCodeVisible();
  });

  // arch section
  it('[getter] ArchHeader should exist', () => {
    page.getArchHeader().should('exist');
  });
  it('[workflow] ArchHeader should be visible', () => {
    page.assertArchHeaderVisible();
  });
  it('[getter] ArchLink should exist', () => {
    page.getArchLink().should('exist');
  });
  it('[workflow] ArchLink should be visible', () => {
    page.assertArchLinkVisible();
  });
  it('[workflow] ArchLink should navigate', () => {
    page.getArchLink().each(($el, idx) => {
      cy.wrap($el).should('be.visible').invoke('removeAttr', 'target').click();
      // Optionally assert navigation or URL change here
    });
  });
  it('[getter] ArchCode should exist', () => {
    page.getArchCode().should('exist');
  });
  it('[workflow] ArchCode should be visible', () => {
    page.assertArchCodeVisible();
  });

  // config section
  it('[getter] ConfigHeader should exist', () => {
    page.getConfigHeader().should('exist');
  });
  it('[workflow] ConfigHeader should be visible', () => {
    page.assertConfigHeaderVisible();
  });
  it('[getter] ConfigLink should exist', () => {
    page.getConfigLink().should('exist');
  });
  it('[workflow] ConfigLink should be visible', () => {
    page.assertConfigLinkVisible();
  });
  it('[workflow] ConfigLink should navigate', () => {
    page.getConfigLink().each(($el, idx) => {
      cy.wrap($el).should('be.visible').invoke('removeAttr', 'target').click();
      // Optionally assert navigation or URL change here
    });
  });
  it('[getter] ConfigCode should exist', () => {
    page.getConfigCode().should('exist');
  });
  it('[workflow] ConfigCode should be visible', () => {
    page.assertConfigCodeVisible();
  });

  // dom.isHidden section
  it('[getter] DomIsHiddenHeader should exist', () => {
    page.getDomIsHiddenHeader().should('exist');
  });
  it('[workflow] DomIsHiddenHeader should be visible', () => {
    page.assertDomIsHiddenHeaderVisible();
  });
  it('[getter] DomIsHiddenLink should exist', () => {
    page.getDomIsHiddenLink().should('exist');
  });
  it('[workflow] DomIsHiddenLink should be visible', () => {
    page.assertDomIsHiddenLinkVisible();
  });
  it('[workflow] DomIsHiddenLink should navigate', () => {
    page.getDomIsHiddenLink().each(($el, idx) => {
      cy.wrap($el).should('be.visible').invoke('removeAttr', 'target').click();
      // Optionally assert navigation or URL change here
    });
  });
  it('[getter] DomIsHiddenCode should exist', () => {
    page.getDomIsHiddenCode().should('exist');
  });
  it('[workflow] DomIsHiddenCode should be visible', () => {
    page.assertDomIsHiddenCodeVisible();
  });
  it('[getter] DomPHidden should exist', () => {
    page.getDomPHidden().should('exist');
  });
  it('[workflow] DomPHidden should be visible', () => {
    page.assertDomPHiddenVisible();
  });
  it('[getter] DomPVisible should exist', () => {
    page.getDomPVisible().should('exist');
  });
  it('[workflow] DomPVisible should be visible', () => {
    page.assertDomPVisibleVisible();
  });

  // env section
  it('[getter] EnvHeader should exist', () => {
    page.getEnvHeader().should('exist');
  });
  it('[workflow] EnvHeader should be visible', () => {
    page.assertEnvHeaderVisible();
  });
  it('[getter] EnvLink should exist', () => {
    page.getEnvLink().should('exist');
  });
  it('[workflow] EnvLink should be visible', () => {
    page.assertEnvLinkVisible();
  });
  it('[workflow] EnvLink should navigate', () => {
    page.getEnvLink().each(($el, idx) => {
      cy.wrap($el).should('be.visible').invoke('removeAttr', 'target').click();
      // Optionally assert navigation or URL change here
    });
  });
  it('[getter] EnvCode should exist', () => {
    page.getEnvCode().should('exist');
  });
  it('[workflow] EnvCode should be visible', () => {
    page.assertEnvCodeVisible();
  });

  // log section
  it('[getter] LogHeader should exist', () => {
    page.getLogHeader().should('exist');
  });
  it('[workflow] LogHeader should be visible', () => {
    page.assertLogHeaderVisible();
  });
  it('[getter] LogLink should exist', () => {
    page.getLogLink().should('exist');
  });
  it('[workflow] LogLink should be visible', () => {
    page.assertLogLinkVisible();
  });
  it('[workflow] LogLink should navigate', () => {
    page.getLogLink().each(($el, idx) => {
      cy.wrap($el).should('be.visible').invoke('removeAttr', 'target').click();
      // Optionally assert navigation or URL change here
    });
  });
  it('[getter] LogCode should exist', () => {
    page.getLogCode().should('exist');
  });
  it('[workflow] LogCode should be visible', () => {
    page.assertLogCodeVisible();
  });

  // platform section
  it('[getter] PlatformHeader should exist', () => {
    page.getPlatformHeader().should('exist');
  });
  it('[workflow] PlatformHeader should be visible', () => {
    page.assertPlatformHeaderVisible();
  });
  it('[getter] PlatformLink should exist', () => {
    page.getPlatformLink().should('exist');
  });
  it('[workflow] PlatformLink should be visible', () => {
    page.assertPlatformLinkVisible();
  });
  it('[workflow] PlatformLink should navigate', () => {
    page.getPlatformLink().each(($el, idx) => {
      cy.wrap($el).should('be.visible').invoke('removeAttr', 'target').click();
      // Optionally assert navigation or URL change here
    });
  });
  it('[getter] PlatformCode should exist', () => {
    page.getPlatformCode().should('exist');
  });
  it('[workflow] PlatformCode should be visible', () => {
    page.assertPlatformCodeVisible();
  });

  // version section
  it('[getter] VersionHeader should exist', () => {
    page.getVersionHeader().should('exist');
  });
  it('[workflow] VersionHeader should be visible', () => {
    page.assertVersionHeaderVisible();
  });
  it('[getter] VersionLink should exist', () => {
    page.getVersionLink().should('exist');
  });
  it('[workflow] VersionLink should be visible', () => {
    page.assertVersionLinkVisible();
  });
  it('[workflow] VersionLink should navigate', () => {
    page.getVersionLink().each(($el, idx) => {
      cy.wrap($el).should('be.visible').invoke('removeAttr', 'target').click();
      // Optionally assert navigation or URL change here
    });
  });
  it('[getter] VersionCode should exist', () => {
    page.getVersionCode().should('exist');
  });
  it('[workflow] VersionCode should be visible', () => {
    page.assertVersionCodeVisible();
  });

  // Full workflow
  it('[workflow] runAllCypressAPIWorkflows should complete without error', () => {
    page.runAllCypressAPIWorkflows();
  });
});
