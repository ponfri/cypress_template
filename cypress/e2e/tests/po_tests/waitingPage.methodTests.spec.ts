import WaitingPage from '../../pageObjects/WaitingPage.po';

describe('WaitingPage Page Object', () => {
  let page: WaitingPage;
  beforeEach(() => {
    page = new WaitingPage('/waiting');
  });

  it('should get waitingSection', () => {
    page.waitingSection.should('exist');
  });

  it('should get cyWaitHeader', () => {
    page.cyWaitHeader.should('exist');
  });

  it('should get cyWaitCode', () => {
    page.cyWaitCode.should('exist');
  });

  it('should get waitInput1', () => {
    page.waitInput1.should('exist');
  });

  it('should get waitInput2', () => {
    page.waitInput2.should('exist');
  });

  it('should get waitInput3', () => {
    page.waitInput3.should('exist');
  });

  it('should get networkBtn', () => {
    page.networkBtn.should('exist');
  });

  it('should get networkComment', () => {
    page.networkComment.should('exist');
  });

  it('should get moreInfoLinks', () => {
    page.moreInfoLinks.forEach(link => link.should('exist'));
  });

  it('should click waitingSection', () => {
    page.clickWaitingSection();
  });

  it('should click cyWaitHeader', () => {
    page.clickCyWaitHeader();
  });

  it('should click cyWaitCode', () => {
    page.clickCyWaitCode();
  });

  it('should type waitInput1', () => {
    page.typeWaitInput1('one');
  });

  it('should type waitInput2', () => {
    page.typeWaitInput2('two');
  });

  it('should type waitInput3', () => {
    page.typeWaitInput3('three');
  });

  it('should click networkBtn', () => {
    page.clickNetworkBtn();
  });

  it('should click networkComment', () => {
    page.clickNetworkComment();
  });

  it('should click each moreInfoLink', () => {
    for (let i = 0; i < page.moreInfoLinks.length; i++) {
      page.clickMoreInfoLink(i);
    }
  });

  it('should fill all wait inputs', () => {
    page.fillAllWaitInputs(['one', 'two', 'three']);
  });

  it('should click network and validate comment', () => {
    page.clickNetworkAndValidateComment();
  });

  it('should visit all more info links', () => {
    page.visitAllMoreInfoLinks();
  });

  it('should demonstrate waiting workflow', () => {
    page.demonstrateWaitingWorkflow(['one', 'two', 'three']);
  });
});
