import { QueryingPage } from '../../pageObjects/QueryingPage.po';

describe('QueryingPage Page Object', () => {
  let page: QueryingPage;
  beforeEach(() => {
    page = new QueryingPage('/querying');
  });

  it('should get pageHeader', () => {
    page.pageHeader.should('exist');
  });

  it('should get pageDesc', () => {
    page.pageDesc.should('exist');
  });

  it('should get queryingSection', () => {
    page.queryingSection.should('exist');
  });

  it('should get getLink', () => {
    page.getLink.should('exist');
  });

  it('should get containsLink', () => {
    page.containsLink.should('exist');
  });

  it('should get withinLink', () => {
    page.withinLink.should('exist');
  });

  it('should get rootLink', () => {
    page.rootLink.should('exist');
  });

  it('should get inputName', () => {
    page.inputName.should('exist');
  });

  it('should get inputEmail', () => {
    page.inputEmail.should('exist');
  });

  it('should get inputPassword', () => {
    page.inputPassword.should('exist');
  });

  it('should get saveFormButton', () => {
    page.saveFormButton.should('exist');
  });

  it('should get submitButton', () => {
    page.submitButton.should('exist');
  });

  it('should get dataTestExample', () => {
    page.dataTestExample.should('exist');
  });

  it('should get queryList', () => {
    page.queryList.should('exist');
  });

  it('should get queryListItems', () => {
    page.queryListItems.should('exist');
  });

  it('should get queryUl', () => {
    page.queryUl.should('exist');
  });

  it('should get queryUlItems', () => {
    page.queryUlItems.should('exist');
  });

  it('should get bestPracticesWell', () => {
    page.bestPracticesWell.should('exist');
  });

  it('should click getLink', () => {
    page.clickGetLink();
  });

  it('should click containsLink', () => {
    page.clickContainsLink();
  });

  it('should click withinLink', () => {
    page.clickWithinLink();
  });

  it('should click rootLink', () => {
    page.clickRootLink();
  });

  it('should type inputName', () => {
    page.typeInputName('Test Name');
  });

  it('should type inputEmail', () => {
    page.typeInputEmail('test@example.com');
  });

  it('should type inputPassword', () => {
    page.typeInputPassword('password123');
  });

  it('should click saveFormButton', () => {
    page.clickSaveFormButton();
  });

  it('should click submitButton', () => {
    page.clickSubmitButton();
  });

  it('should fill form and submit', () => {
    page.fillFormAndSubmit('Test Name', 'test@example.com', 'password123');
  });

  it('should click all query links', () => {
    page.clickAllQueryLinks();
  });
});
