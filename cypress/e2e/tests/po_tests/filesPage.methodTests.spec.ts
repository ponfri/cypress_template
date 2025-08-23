import FilesPage from '../../pageObjects/FilesPage.po';

describe('FilesPage Page Object', () => {
  let page: FilesPage;
  beforeEach(() => {
    page = new FilesPage('/files');
  });

  it('should get filesSection', () => {
    page.filesSection.should('exist');
  });

  it('should get cyFixtureHeader', () => {
    page.cyFixtureHeader.should('exist');
  });

  it('should get cyFixtureCode', () => {
    page.cyFixtureCode.should('exist');
  });

  it('should get fixtureBtn', () => {
    page.fixtureBtn.should('exist');
  });

  it('should get fixtureComment', () => {
    page.fixtureComment.should('exist');
  });

  it('should get cyRequireHeader', () => {
    page.cyRequireHeader.should('exist');
  });

  it('should get cyRequireCode', () => {
    page.cyRequireCode.should('exist');
  });

  it('should get cyReadFileHeader', () => {
    page.cyReadFileHeader.should('exist');
  });

  it('should get cyReadFileCode', () => {
    page.cyReadFileCode.should('exist');
  });

  it('should get cyWriteFileHeader', () => {
    page.cyWriteFileHeader.should('exist');
  });

  it('should get cyWriteFileCode', () => {
    page.cyWriteFileCode.should('exist');
  });

  it('should get moreInfoLinks', () => {
    page.moreInfoLinks.forEach(link => link.should('exist'));
  });

  it('should click fixtureBtn', () => {
    page.clickFixtureBtn();
    // Add assertion for expected result if needed
  });

  it('should click all moreInfoLinks', () => {
    page.clickMoreInfoLinks();
    // Add assertion for expected result if needed
  });
});
