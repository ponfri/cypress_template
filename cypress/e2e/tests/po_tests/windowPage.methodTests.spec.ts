import WindowPage from '../../pageObjects/WindowPage.po';

describe('WindowPage Page Object', () => {
  let page: WindowPage;
  beforeEach(() => {
    page = new WindowPage('/window');
  });

  it('should get windowSection', () => {
    page.windowSection.should('exist');
  });

  it('should get cyWindowHeader', () => {
    page.cyWindowHeader.should('exist');
  });

  it('should get cyWindowCode', () => {
    page.cyWindowCode.should('exist');
  });

  it('should get cyDocumentHeader', () => {
    page.cyDocumentHeader.should('exist');
  });

  it('should get cyDocumentCode', () => {
    page.cyDocumentCode.should('exist');
  });

  it('should get cyTitleHeader', () => {
    page.cyTitleHeader.should('exist');
  });

  it('should get cyTitleCode', () => {
    page.cyTitleCode.should('exist');
  });

  it('should click windowSection', () => {
    page.clickWindowSection();
  });

  it('should click cyWindowHeader', () => {
    page.clickCyWindowHeader();
  });

  it('should click cyWindowCode', () => {
    page.clickCyWindowCode();
  });

  it('should click cyDocumentHeader', () => {
    page.clickCyDocumentHeader();
  });

  it('should click cyDocumentCode', () => {
    page.clickCyDocumentCode();
  });

  it('should click cyTitleHeader', () => {
    page.clickCyTitleHeader();
  });

  it('should click cyTitleCode', () => {
    page.clickCyTitleCode();
  });

  it('should demonstrate all window commands', () => {
    page.demonstrateAllWindowCommands();
  });

  it('should explore all window sections', () => {
    page.exploreAllWindowSections();
  });
});
