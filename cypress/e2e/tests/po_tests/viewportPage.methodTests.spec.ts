import ViewportPage from '../../pageObjects/ViewportPage.po';

describe('ViewportPage Page Object', () => {
  let page: ViewportPage;
  beforeEach(() => {
    page = new ViewportPage('/viewport');
  });

  it('should get viewportSection', () => {
    page.viewportSection.should('exist');
  });

  it('should get cyViewportHeader', () => {
    page.cyViewportHeader.should('exist');
  });

  it('should get cyViewportCode', () => {
    page.cyViewportCode.should('exist');
  });

  it('should click viewportSection', () => {
    page.clickViewportSection();
  });

  it('should click cyViewportHeader', () => {
    page.clickCyViewportHeader();
  });

  it('should click cyViewportCode', () => {
    page.clickCyViewportCode();
  });

  it('should demonstrate viewport change', () => {
    page.demonstrateViewportChange();
  });

  it('should explore viewport documentation', () => {
    page.exploreViewportDocumentation();
  });
});
