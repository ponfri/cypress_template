import NavigationPage from '../../pageObjects/NavigationPage.po';

describe('NavigationPage Page Object', () => {
  let page: NavigationPage;
  beforeEach(() => {
    page = new NavigationPage('/navigation');
  });

  it('should get navigationSection', () => {
    page.navigationSection.should('exist');
  });
  it('should get cyGoHeader', () => {
    page.cyGoHeader.should('exist');
  });
  it('should get cyGoCode', () => {
    page.cyGoCode.should('exist');
  });
  it('should get cyReloadHeader', () => {
    page.cyReloadHeader.should('exist');
  });
  it('should get cyReloadCode', () => {
    page.cyReloadCode.should('exist');
  });
  it('should get cyVisitHeader', () => {
    page.cyVisitHeader.should('exist');
  });
  it('should get cyVisitCode', () => {
    page.cyVisitCode.should('exist');
  });

  it('should click cyGoHeader', () => {
    page.clickCyGoHeader();
  });
  it('should click cyReloadHeader', () => {
    page.clickCyReloadHeader();
  });
  it('should click cyVisitHeader', () => {
    page.clickCyVisitHeader();
  });

  it('should go back and forward', () => {
    page.goBackAndForward();
  });
  it('should reload page', () => {
    page.reloadPage();
  });
  it('should visit url', () => {
    page.visitUrl('/some-url');
  });
  it('should click all headers', () => {
    page.clickAllHeaders();
  });
});
