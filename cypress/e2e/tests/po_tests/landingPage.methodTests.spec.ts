import LandingPage from '../../pageObjects/LandingPage.po';

describe('LandingPage Page Object', () => {
  let page: LandingPage;
  beforeEach(() => {
    page = new LandingPage('/');
    cy.visit('/');
  });

  // Locator getter tests
  it('should get banner', () => {
    page.banner.should('exist');
  });
  it('should get bannerAlt', () => {
    page.bannerAlt.should('exist');
  });
  it('should get kitchenSinkTitle', () => {
    page.kitchenSinkTitle.should('exist');
  });
  it('should get kitchenSinkDesc', () => {
    page.kitchenSinkDesc.should('exist');
  });
  it('should get commandsSection', () => {
    page.commandsSection.should('exist');
  });
  it('should get commandsDesc', () => {
    page.commandsDesc.should('exist');
  });
  it('should get utilitiesSection', () => {
    page.utilitiesSection.should('exist');
  });
  it('should get utilitiesDesc', () => {
    page.utilitiesDesc.should('exist');
  });
  it('should get cypressApiSection', () => {
    page.cypressApiSection.should('exist');
  });
  it('should get cypressApiDesc', () => {
    page.cypressApiDesc.should('exist');
  });
  it('should get homeList', () => {
    page.homeList.should('exist');
  });

  // Link getter tests
  it('should get queryingLink', () => {
    page.queryingLink.should('exist');
  });
  it('should get traversalLink', () => {
    page.traversalLink.should('exist');
  });
  it('should get actionsLink', () => {
    page.actionsLink.should('exist');
  });
  it('should get windowLink', () => {
    page.windowLink.should('exist');
  });
  it('should get viewportLink', () => {
    page.viewportLink.should('exist');
  });
  it('should get locationLink', () => {
    page.locationLink.should('exist');
  });
  it('should get navigationLink', () => {
    page.navigationLink.should('exist');
  });
  it('should get assertionsLink', () => {
    page.assertionsLink.should('exist');
  });
  it('should get miscLink', () => {
    page.miscLink.should('exist');
  });
  it('should get connectorsLink', () => {
    page.connectorsLink.should('exist');
  });
  it('should get aliasingLink', () => {
    page.aliasingLink.should('exist');
  });
  it('should get waitingLink', () => {
    page.waitingLink.should('exist');
  });
  it('should get networkRequestsLink', () => {
    page.networkRequestsLink.should('exist');
  });
  it('should get filesLink', () => {
    page.filesLink.should('exist');
  });
  it('should get storageLink', () => {
    page.storageLink.should('exist');
  });
  it('should get cookiesLink', () => {
    page.cookiesLink.should('exist');
  });
  it('should get spiesStubsClocksLink', () => {
    page.spiesStubsClocksLink.should('exist');
  });
  it('should get utilitiesLink', () => {
    page.utilitiesLink.should('exist');
  });
  it('should get cypressApiLink', () => {
    page.cypressApiLink.should('exist');
  });
  it('should get githubLink', () => {
    page.githubLink.should('exist');
  });

  // Click method tests
  it('should click queryingLink', () => {
    page.clickQueryingLink();
  });
  it('should click traversalLink', () => {
    page.clickTraversalLink();
  });
  it('should click actionsLink', () => {
    page.clickActionsLink();
  });
  it('should click windowLink', () => {
    page.clickWindowLink();
  });
  it('should click viewportLink', () => {
    page.clickViewportLink();
  });
  it('should click locationLink', () => {
    page.clickLocationLink();
  });
  it('should click navigationLink', () => {
    page.clickNavigationLink();
  });
  it('should click assertionsLink', () => {
    page.clickAssertionsLink();
  });
  it('should click miscLink', () => {
    page.clickMiscLink();
  });
  it('should click connectorsLink', () => {
    page.clickConnectorsLink();
  });
  it('should click aliasingLink', () => {
    page.clickAliasingLink();
  });
  it('should click waitingLink', () => {
    page.clickWaitingLink();
  });
  it('should click networkRequestsLink', () => {
    page.clickNetworkRequestsLink();
  });
  it('should click filesLink', () => {
    page.clickFilesLink();
  });
  it('should click storageLink', () => {
    page.clickStorageLink();
  });
  it('should click cookiesLink', () => {
    page.clickCookiesLink();
  });
  it('should click spiesStubsClocksLink', () => {
    page.clickSpiesStubsClocksLink();
  });
  it('should click utilitiesLink', () => {
    page.clickUtilitiesLink();
  });
  it('should click cypressApiLink', () => {
    page.clickCypressApiLink();
  });
  it('should click githubLink', () => {
    page.clickGithubLink();
  });

  // Workflow method tests
  it('should navigate to section querying', () => {
    page.navigateToSection('querying');
  });
  it('should open kitchen sink example querying', () => {
    page.openKitchenSinkExample('querying');
  });
  it('should throw error for invalid section', () => {
    expect(() => page.navigateToSection('invalid')).to.throw();
  });
  it('should throw error for invalid example', () => {
    expect(() => page.openKitchenSinkExample('invalid')).to.throw();
  });
});
