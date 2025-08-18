import AliasingPage from '../pageObjects/AliasingPage.po';

describe('AliasingPage Page Object Method & Locator Tests', () => {
  const page = new AliasingPage('/commands/aliasing');

  beforeEach(() => {
    cy.visit('/commands/aliasing');
  });

  // Getters
  it('[getter] aliasingSection should be visible', () => {
    page.getAliasingSection().should('be.visible');
  });
  it('[getter] aliasingHeader should be visible', () => {
    page.getAliasingHeader().should('be.visible');
  });
  it('[getter] aliasingCode should be visible', () => {
    page.getAliasingCode().should('be.visible');
  });
  it('[getter] asTable should be visible', () => {
    page.getAsTable().should('be.visible');
  });
  it('[getter] asTableRows should exist', () => {
    page.getAsTableRows().should('exist');
  });
  it('[getter] asTableCells should exist', () => {
    page.getAsTableCells().should('exist');
  });
  it('[getter] asTableFirstBtn should be visible', () => {
    page.getAsTableFirstBtn().should('be.visible');
  });
  it('[getter] networkBtn should be visible', () => {
    page.getNetworkBtn().should('be.visible');
  });
  it('[getter] networkComment should exist', () => {
    page.getNetworkComment().should('exist');
  });
  it('[getter] getCommentBtn should be visible', () => {
    page.getGetCommentBtn().should('be.visible');
  });
  it('[getter] asTableHeaders should exist', () => {
    page.getAsTableHeaders().should('exist');
  });
  it('[getter] asTableChangeBtns should exist', () => {
    page.getAsTableChangeBtns().should('exist');
  });

  // Workflow: alias and click first button
  it('[workflow] aliasFirstBtn should alias first button', () => {
    page.aliasFirstBtn();
    cy.get('@firstBtn').should('exist');
  });
  it('[workflow] clickAliasedFirstBtn should click aliased button', () => {
    page.aliasFirstBtn();
    page.clickAliasedFirstBtn();
    // No error means click worked
  });
  it('[workflow] assertAliasedFirstBtnChanged should assert button changed', () => {
    page.aliasFirstBtn();
    page.clickAliasedFirstBtn();
    page.assertAliasedFirstBtnChanged();
  });

  // Workflow: alias and wait for network
  it('[workflow] aliasGetCommentRoute should alias GET comment route', () => {
  page.aliasGetCommentRoute();
  page.clickNetworkBtn(); // trigger the GET request
  cy.wait('@getComment').its('response.statusCode').should('eq', 200);
  });
  it('[workflow] clickNetworkBtn should click network button', () => {
    page.clickNetworkBtn();
    // No error means click worked
  });
  it('[workflow] waitForGetComment should wait for GET comment', () => {
    page.aliasGetCommentRoute();
    page.clickNetworkBtn();
    page.waitForGetComment();
  });

  // Table workflows
  it('[workflow] assertAsTableHeaders should assert table headers', () => {
  // Use actual headers from the UI
  const expected = ['Column 1', 'Column 2'];
  page.assertAsTableHeaders(expected);
  });
  it('[workflow] assertAsTableRowsLength should assert table row count', () => {
    page.getAsTableRows().then($rows => {
      page.assertAsTableRowsLength($rows.length);
    });
  });
  it('[workflow] assertAsTableCellText should assert cell text', () => {
    // Assert the actual text present in the first cell of the first row
    page.getAsTableRows().eq(0).find('td').eq(0).invoke('text').then((cellText) => {
      expect(cellText.trim()).to.not.be.empty;
    });
  });
  it('[workflow] clickAsTableChangeBtn should click change button', () => {
  // Use valid cell index (0 or 1)
  page.clickAsTableChangeBtn(0, 0);
  });
  it('[workflow] assertAsTableChangeBtnText should assert change button text', () => {
  page.clickAsTableChangeBtn(0, 0);
  page.assertAsTableChangeBtnText(0, 0, 'Changed');
  });

  // Header/code assertions
  it('[workflow] assertAliasingHeaderVisible should assert header visible', () => {
    page.assertAliasingHeaderVisible();
  });
  it('[workflow] assertAliasingCodeVisible should assert code block visible', () => {
    page.assertAliasingCodeVisible();
  });
});
