import UtilitiesPage from '../../pageObjects/UtilitiesPage.po';

describe('UtilitiesPage Page Object', () => {
  let page: UtilitiesPage;
  beforeEach(() => {
    page = new UtilitiesPage('/utilities');
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
  it('should get lodashHeader', () => {
    page.lodashHeader.should('exist');
  });
  it('should get lodashLink', () => {
    page.lodashLink.should('exist');
  });
  it('should get lodashMethodLink', () => {
    page.lodashMethodLink.should('exist');
  });
  it('should get lodashCode', () => {
    page.lodashCode.should('exist');
  });
  it('should get jqueryHeader', () => {
    page.jqueryHeader.should('exist');
  });
  it('should get jqueryLink', () => {
    page.jqueryLink.should('exist');
  });
  it('should get jqueryCode', () => {
    page.jqueryCode.should('exist');
  });
  it('should get jqueryList', () => {
    page.jqueryList.should('exist');
  });
  it('should get jqueryListItems', () => {
    page.jqueryListItems.should('exist');
  });
  it('should get blobHeader', () => {
    page.blobHeader.should('exist');
  });
  it('should get blobLink', () => {
    page.blobLink.should('exist');
  });
  it('should get blobCode', () => {
    page.blobCode.should('exist');
  });
  it('should get blobDiv', () => {
    page.blobDiv.should('exist');
  });
  it('should get blobImg', () => {
    page.blobImg.should('exist');
  });
  it('should get minimatchHeader', () => {
    page.minimatchHeader.should('exist');
  });
  it('should get minimatchLink', () => {
    page.minimatchLink.should('exist');
  });
  it('should get minimatchCode', () => {
    page.minimatchCode.should('exist');
  });
  it('should get promiseHeader', () => {
    page.promiseHeader.should('exist');
  });
  it('should get promiseLink', () => {
    page.promiseLink.should('exist');
  });
  it('should get promiseCode', () => {
    page.promiseCode.should('exist');
  });

  it('should click banner', () => {
    page.clickBanner();
  });
  it('should click mainHeader', () => {
    page.clickMainHeader();
  });
  it('should click docsLink', () => {
    page.clickDocsLink();
  });
  it('should click lodashHeader', () => {
    page.clickLodashHeader();
  });
  it('should click lodashLink', () => {
    page.clickLodashLink();
  });
  it('should click lodashMethodLink', () => {
    page.clickLodashMethodLink();
  });
  it('should click lodashCode', () => {
    page.clickLodashCode();
  });
  it('should click jqueryHeader', () => {
    page.clickJqueryHeader();
  });
  it('should click jqueryLink', () => {
    page.clickJqueryLink();
  });
  it('should click jqueryCode', () => {
    page.clickJqueryCode();
  });
  it('should click jqueryList', () => {
    page.clickJqueryList();
  });
  it('should click first jqueryListItem', () => {
    page.clickJqueryListItems(0);
  });
  it('should click blobHeader', () => {
    page.clickBlobHeader();
  });
  it('should click blobLink', () => {
    page.clickBlobLink();
  });
  it('should click blobCode', () => {
    page.clickBlobCode();
  });
  it('should click blobDiv', () => {
    page.clickBlobDiv();
  });
  it('should click blobImg', () => {
    page.clickBlobImg();
  });
  it('should click minimatchHeader', () => {
    page.clickMinimatchHeader();
  });
  it('should click minimatchLink', () => {
    page.clickMinimatchLink();
  });
  it('should click minimatchCode', () => {
    page.clickMinimatchCode();
  });
  it('should click promiseHeader', () => {
    page.clickPromiseHeader();
  });
  it('should click promiseLink', () => {
    page.clickPromiseLink();
  });
  it('should click promiseCode', () => {
    page.clickPromiseCode();
  });

  it('should visit all utility docs', () => {
    page.visitAllUtilityDocs();
  });
  it('should interact with all code samples', () => {
    page.interactWithAllCodeSamples();
  });
});
