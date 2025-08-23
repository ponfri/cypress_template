import StoragePage from '../../pageObjects/StoragePage.po';

describe('StoragePage Page Object', () => {
  let page: StoragePage;
  beforeEach(() => {
    page = new StoragePage('/storage');
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

  it('should get clearLocalStorageSection', () => {
    page.clearLocalStorageSection.should('exist');
  });

  it('should get clearLocalStorageHeader', () => {
    page.clearLocalStorageHeader.should('exist');
  });

  it('should get clearLocalStorageLink', () => {
    page.clearLocalStorageLink.should('exist');
  });

  it('should get clearLocalStorageCode', () => {
    page.clearLocalStorageCode.should('exist');
  });

  it('should get clearLocalStorageButton', () => {
    page.clearLocalStorageButton.should('exist');
  });

  it('should get getAllLocalStorageSection', () => {
    page.getAllLocalStorageSection.should('exist');
  });

  it('should get getAllLocalStorageHeader', () => {
    page.getAllLocalStorageHeader.should('exist');
  });

  it('should get getAllLocalStorageLink', () => {
    page.getAllLocalStorageLink.should('exist');
  });

  it('should get getAllLocalStorageCode', () => {
    page.getAllLocalStorageCode.should('exist');
  });

  it('should get clearAllLocalStorageSection', () => {
    page.clearAllLocalStorageSection.should('exist');
  });

  it('should get clearAllLocalStorageHeader', () => {
    page.clearAllLocalStorageHeader.should('exist');
  });

  it('should get clearAllLocalStorageLink', () => {
    page.clearAllLocalStorageLink.should('exist');
  });

  it('should get clearAllLocalStorageCode', () => {
    page.clearAllLocalStorageCode.should('exist');
  });

  it('should get getAllSessionStorageSection', () => {
    page.getAllSessionStorageSection.should('exist');
  });

  it('should get getAllSessionStorageHeader', () => {
    page.getAllSessionStorageHeader.should('exist');
  });

  it('should get getAllSessionStorageLink', () => {
    page.getAllSessionStorageLink.should('exist');
  });

  it('should get getAllSessionStorageCode', () => {
    page.getAllSessionStorageCode.should('exist');
  });

  it('should get clearAllSessionStorageSection', () => {
    page.clearAllSessionStorageSection.should('exist');
  });

  it('should get clearAllSessionStorageHeader', () => {
    page.clearAllSessionStorageHeader.should('exist');
  });

  it('should get clearAllSessionStorageLink', () => {
    page.clearAllSessionStorageLink.should('exist');
  });

  it('should get clearAllSessionStorageCode', () => {
    page.clearAllSessionStorageCode.should('exist');
  });

  it('should get populateButton', () => {
    page.populateButton.should('exist');
  });

  it('should click docsLink', () => {
    page.clickDocsLink();
  });

  it('should click clearLocalStorageButton', () => {
    page.clickClearLocalStorageButton();
  });

  it('should click populateButton', () => {
    page.clickPopulateButton();
  });

  it('should click clearLocalStorageLink', () => {
    page.clickClearLocalStorageLink();
  });

  it('should click getAllLocalStorageLink', () => {
    page.clickGetAllLocalStorageLink();
  });

  it('should click clearAllLocalStorageLink', () => {
    page.clickClearAllLocalStorageLink();
  });

  it('should click getAllSessionStorageLink', () => {
    page.clickGetAllSessionStorageLink();
  });

  it('should click clearAllSessionStorageLink', () => {
    page.clickClearAllSessionStorageLink();
  });

  it('should run clearLocalStorageWorkflow', () => {
    page.clearLocalStorageWorkflow();
  });

  it('should run populateStorageWorkflow', () => {
    page.populateStorageWorkflow();
  });

  it('should click all storage links', () => {
    page.clickAllStorageLinks();
  });
});
