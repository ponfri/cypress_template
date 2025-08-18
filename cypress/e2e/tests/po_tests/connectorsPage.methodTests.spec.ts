import ConnectorsPage from '../pageObjects/ConnectorsPage.po';

describe('ConnectorsPage Page Object Method & Locator Tests', () => {
  let page: ConnectorsPage;
  beforeEach(() => {
    page = new ConnectorsPage('/commands/connectors');
    page.visit();
  });


  // Connectors Section
  it('[getter] ConnectorsSection should exist', () => {
    page.getConnectorsSection().should('exist');
  });
  it('[getter] ConnectorsHeader should exist', () => {
    page.getConnectorsHeader().should('exist');
  });
  it('[workflow] ConnectorsHeader should be visible', () => {
    page.assertConnectorsHeaderVisible();
  });
  it('[getter] ConnectorsCode should exist', () => {
    page.getConnectorsCode().should('exist');
  });
  it('[workflow] ConnectorsCode should be visible', () => {
    page.assertConnectorsCodeVisible();
  });

  // .each() example
  it('[getter] EachHeader should exist', () => {
    page.getEachHeader().should('exist');
  });
  it('[workflow] EachHeader should be visible', () => {
    page.assertEachHeaderVisible();
  });
  it('[getter] EachCode should exist', () => {
    page.getEachCode().should('exist');
  });
  it('[workflow] EachCode should be visible', () => {
    page.assertEachCodeVisible();
  });
  it('[getter] EachListItems should exist', () => {
    page.getEachListItems().should('exist');
  });
  it('[workflow] EachListItems should have correct length', () => {
    page.assertEachListItemsLength(3);
  });
  it('[workflow] EachListItems should have correct text', () => {
    page.assertEachListItemsText(['Lara Williams', 'William Grey', 'Monica Pharrel']);
  });

  // .its() example
  it('[getter] ItsHeader should exist', () => {
    page.getItsHeader().should('exist');
  });
  it('[workflow] ItsHeader should be visible', () => {
    page.assertItsHeaderVisible();
  });
  it('[getter] ItsCode should exist', () => {
    page.getItsCode().should('exist');
  });
  it('[workflow] ItsCode should be visible', () => {
    page.assertItsCodeVisible();
  });
  it('[getter] ItsListItems should exist', () => {
    page.getItsListItems().should('exist');
  });
  it('[workflow] ItsListItems should have correct length', () => {
    page.assertItsListItemsLength(3);
  });
  it('[workflow] ItsListItems should have correct text', () => {
    page.assertItsListItemsText(['Chai', 'Chai-jQuery', 'Chai-Sinon']);
  });

  // .invoke() example
  it('[getter] InvokeHeader should exist', () => {
    page.getInvokeHeader().should('exist');
  });
  it('[workflow] InvokeHeader should be visible', () => {
    page.assertInvokeHeaderVisible();
  });
  it('[getter] InvokeCode should exist', () => {
    page.getInvokeCode().should('exist');
  });
  it('[workflow] InvokeCode should be visible', () => {
    page.assertInvokeCodeVisible();
  });
  it('[getter] InvokeDiv should exist', () => {
    page.getInvokeDiv().should('exist');
  });
  it('[workflow] InvokeDiv should be hidden by default', () => {
    page.assertInvokeDivHidden();
  });
  it('[workflow] InvokeDiv should show after invoke', () => {
    page.invokeShowOnDiv();
  });

  // .spread() example
  it('[getter] SpreadHeader should exist', () => {
    page.getSpreadHeader().should('exist');
  });
  it('[workflow] SpreadHeader should be visible', () => {
    page.assertSpreadHeaderVisible();
  });
  it('[getter] SpreadCode should exist', () => {
    page.getSpreadCode().should('exist');
  });
  it('[workflow] SpreadCode should be visible', () => {
    page.assertSpreadCodeVisible();
  });

  // .then() example
  it('[getter] ThenHeader should exist', () => {
    page.getThenHeader().should('exist');
  });
  it('[workflow] ThenHeader should be visible', () => {
    page.assertThenHeaderVisible();
  });
  it('[getter] ThenCode should exist', () => {
    page.getThenCode().should('exist');
  });
  it('[workflow] ThenCode should be visible', () => {
    page.assertThenCodeVisible();
  });
  it('[getter] ThenListItems should exist', () => {
    page.getThenListItems().should('exist');
  });
  it('[workflow] ThenListItems should have correct length', () => {
    page.assertThenListItemsLength(3);
  });
  it('[workflow] ThenListItems should have correct text', () => {
    page.assertThenListItemsText(['Walk the dog', 'Feed the cat', 'Write JavaScript']);
  });

  // ...existing code...
});
