import SpiesStubsClocksPage from '../../pageObjects/SpiesStubsClocksPage.po';

describe('SpiesStubsClocksPage Page Object', () => {
  let page: SpiesStubsClocksPage;
  beforeEach(() => {
    page = new SpiesStubsClocksPage('/spies-stubs-clocks');
  });

  it('should get banner', () => {
    page.banner.should('exist');
  });

  it('should get mainHeader', () => {
    page.mainHeader.should('exist');
  });

  it('should get docsLink', () => {
    page.docsLink.should('exist');
  });

  it('should get spySection', () => {
    page.spySection.should('exist');
  });

  it('should get spyHeader', () => {
    page.spyHeader.should('exist');
  });

  it('should get spyLink', () => {
    page.spyLink.should('exist');
  });

  it('should get spyCode', () => {
    page.spyCode.should('exist');
  });

  it('should get stubHeader', () => {
    page.stubHeader.should('exist');
  });

  it('should get stubLink', () => {
    page.stubLink.should('exist');
  });

  it('should get stubCode', () => {
    page.stubCode.should('exist');
  });

  it('should get clockHeader', () => {
    page.clockHeader.should('exist');
  });

  it('should get clockLink', () => {
    page.clockLink.should('exist');
  });

  it('should get clockCode', () => {
    page.clockCode.should('exist');
  });

  it('should get clockDiv', () => {
    page.clockDiv.should('exist');
  });

  it('should get tickHeader', () => {
    page.tickHeader.should('exist');
  });

  it('should get tickLink', () => {
    page.tickLink.should('exist');
  });

  it('should get tickCode', () => {
    page.tickCode.should('exist');
  });

  it('should get tickDiv', () => {
    page.tickDiv.should('exist');
  });

  it('should get stubArgumentsHeader', () => {
    page.stubArgumentsHeader.should('exist');
  });

  it('should get stubArgumentsLink', () => {
    page.stubArgumentsLink.should('exist');
  });

  it('should get stubArgumentsCode', () => {
    page.stubArgumentsCode.should('exist');
  });

  it('should get matchersHeader', () => {
    page.matchersHeader.should('exist');
  });

  it('should get matchersLink', () => {
    page.matchersLink.should('exist');
  });

  it('should get matchersCode', () => {
    page.matchersCode.should('exist');
  });

  it('should click docsLink', () => {
    page.clickDocsLink();
  });

  it('should click spyLink', () => {
    page.clickSpyLink();
  });

  it('should click stubLink', () => {
    page.clickStubLink();
  });

  it('should click clockLink', () => {
    page.clickClockLink();
  });

  it('should click tickLink', () => {
    page.clickTickLink();
  });

  it('should click stubArgumentsLink', () => {
    page.clickStubArgumentsLink();
  });

  it('should click matchersLink', () => {
    page.clickMatchersLink();
  });

  it('should click all API links', () => {
    page.clickAllApiLinks();
  });
});
