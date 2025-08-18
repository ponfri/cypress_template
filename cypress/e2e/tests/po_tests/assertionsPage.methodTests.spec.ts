
import AssertionsPage from '../pageObjects/AssertionsPage.po';

describe('AssertionsPage Page Object Method & Locator Tests', () => {
  const page = new AssertionsPage('/commands/assertions');

  beforeEach(() => {
    cy.visit('/commands/assertions');
  });

  // Getters
  it('[getter] assertionsSection should be visible', () => {
    page.getAssertionsSection().should('be.visible');
  });
  it('[getter] assertionTable should be visible', () => {
    page.getAssertionTable().should('be.visible');
  });
  it('[getter] assertionTableRows should exist', () => {
    page.getAssertionTableRows().should('exist');
  });
  it('[getter] assertionTableLastRow should exist', () => {
    page.getAssertionTableLastRow().should('exist');
  });
  it('[getter] assertionTableSuccessRow should exist', () => {
    page.getAssertionTableSuccessRow().should('exist');
  });
  it('[getter] assertionTableCells should exist', () => {
    page.getAssertionTableCells().should('exist');
  });
  it('[getter] assertionsLink should be visible', () => {
    page.getAssertionsLink().should('be.visible');
  });
  it('[getter] assertionsLinkActive should be visible', () => {
    page.getAssertionsLinkActive().should('be.visible');
  });
  it('[getter] assertionsP should be visible', () => {
    page.getAssertionsP().should('be.visible');
  });
  it('[getter] assertionsPParagraphs should exist', () => {
    page.getAssertionsPParagraphs().should('exist');
  });
  it('[getter] docsHeader should be visible', () => {
    page.getDocsHeader().should('be.visible');
  });
  it('[getter] docsHeaderDiv should exist', () => {
    page.getDocsHeaderDiv().should('exist');
  });
  it('[getter] twoElements should be visible', () => {
    page.getTwoElements().should('be.visible');
  });
  it('[getter] twoElementsFirst should be visible', () => {
    page.getTwoElementsFirst().should('be.visible');
  });
  it('[getter] twoElementsSecond should be visible', () => {
    page.getTwoElementsSecond().should('be.visible');
  });
  it('[getter] randomNumber should be visible', () => {
    page.getRandomNumber().should('be.visible');
  });
  it('[getter] randomNumberExample should be visible', () => {
    page.getRandomNumberExample().should('be.visible');
  });
  it('[getter] shouldHeader should be visible', () => {
    page.getShouldHeader().should('be.visible');
  });
  it('[getter] andHeader should be visible', () => {
    page.getAndHeader().should('be.visible');
  });
  it('[getter] expectHeader should be visible', () => {
    page.getExpectHeader().should('be.visible');
  });
  it('[getter] assertHeader should be visible', () => {
    page.getAssertHeader().should('be.visible');
  });
  it('[getter] shouldCallbackHeader should be visible', () => {
    page.getShouldCallbackHeader().should('be.visible');
  });

  // Workflow methods
  it('[workflow] assertTableLastRowHasClassSuccess should assert last row has class success', () => {
    page.assertTableLastRowHasClassSuccess();
  });
  it('[workflow] assertTableCellText should assert cell text', () => {
  // Use actual value from Cypress example
  page.assertTableCellText('.assertion-table td:first', 'Column content');
  });
  it('[workflow] assertTableCellContains should assert cell contains text', () => {
  page.assertTableCellContains('.assertion-table td:first', 'Column content');
  });
  it('[workflow] assertTableCellHtml should assert cell HTML', () => {
  page.assertTableCellHtml('.assertion-table td:first', 'Column content');
  });
  it('[workflow] assertTableCellMatches should assert cell matches selector', () => {
    page.assertTableCellMatches('.assertion-table td:first', 'td');
  });
  it('[workflow] assertTableCellTextMatches should assert cell text matches regex', () => {
  page.assertTableCellTextMatches('.assertion-table td:first', /column content/i);
  });
  it('[workflow] assertTableContainsTextWithRegex should assert last row contains text matching regex', () => {
  page.assertTableContainsTextWithRegex(/column content/i);
  });
  it('[workflow] assertAssertionsLinkActive should assert active link', () => {
    page.assertAssertionsLinkActive();
  });
  it('[workflow] assertAssertionsPParagraphsLength should assert paragraphs length', () => {
  page.assertAssertionsPParagraphsLength(3); // Actual length from Cypress example
  });
  it('[workflow] assertAssertionsPParagraphsText should assert paragraphs text', () => {
    page.assertAssertionsPParagraphsText([
      'Some text from first p',
      'More text from second p',
      'And even more text from third p',
    ]);
  });
  it('[workflow] assertDocsHeaderDivHasClassHeading should assert docs header div has heading class', () => {
    page.assertDocsHeaderDivHasClassHeading();
  });
  it('[workflow] assertDocsHeaderDivText should assert docs header div text', () => {
  page.assertDocsHeaderDivText('Introduction'); // Actual text from Cypress example
  });
  it('[workflow] assertTwoElementsTextMatch should assert two elements text match', () => {
    page.assertTwoElementsTextMatch();
  });
  it('[workflow] assertRandomNumberInRange should assert random number in range', () => {
    page.assertRandomNumberInRange(1, 100);
  });

  // Header assertions
  it('[workflow] assertShouldHeaderVisible should assert should header visible', () => {
    page.assertShouldHeaderVisible();
  });
  it('[workflow] assertAndHeaderVisible should assert and header visible', () => {
    page.assertAndHeaderVisible();
  });
  it('[workflow] assertExpectHeaderVisible should assert expect header visible', () => {
    page.assertExpectHeaderVisible();
  });
  it('[workflow] assertAssertHeaderVisible should assert assert header visible', () => {
    page.assertAssertHeaderVisible();
  });
  it('[workflow] assertShouldCallbackHeaderVisible should assert should callback header visible', () => {
    page.assertShouldCallbackHeaderVisible();
  });
});
