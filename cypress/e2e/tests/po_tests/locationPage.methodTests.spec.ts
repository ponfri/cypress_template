import { LocationPage } from '../../pageObjects/LocationPage.po';

describe('LocationPage Page Object', () => {
  let page: LocationPage;
  beforeEach(() => {
    page = new LocationPage('/location');
  });

  it('should get navigationSection', () => {
    page.navigationSection.should('exist');
  });
  it('should get cyHashHeader', () => {
    page.cyHashHeader.should('exist');
  });
  it('should get cyLocationHeader', () => {
    page.cyLocationHeader.should('exist');
  });
  it('should get cyUrlHeader', () => {
    page.cyUrlHeader.should('exist');
  });
  it('should get cyHashCode', () => {
    page.cyHashCode.should('exist');
  });
  it('should get cyLocationCode', () => {
    page.cyLocationCode.should('exist');
  });
  it('should get cyUrlCode', () => {
    page.cyUrlCode.should('exist');
  });

  it('should click cyHashHeader', () => {
    page.clickCyHashHeader();
  });
  it('should click cyLocationHeader', () => {
    page.clickCyLocationHeader();
  });
  it('should click cyUrlHeader', () => {
    page.clickCyUrlHeader();
  });

  it('should verify hash workflow', () => {
    page.verifyHash();
  });
  it('should verify location property workflow', () => {
    page.verifyLocationProperty();
  });
  it('should verify url workflow', () => {
    page.verifyUrl();
  });
  it('should click all headers', () => {
    page.clickAllHeaders();
  });
});
