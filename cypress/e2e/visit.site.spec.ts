/*
 * Author: Phillip Onfri
 * Company: pvoSoft
 * Date Created: 07/06/2024
 * File Name: visit.site.spec.ts
 * Framework: Cypress.io, JS, TS
 * Description: Test file for loading website
 * ['@regression', '@smoke', '@sanity', '@template'],
 */

describe('Template Description here.', () => {
  beforeEach('Run before each test here.', () => {
    cy.visit('/');
  });

  // Tests here:
  it('Template Test here.', { tags: ['@smoke', '@template'],}, () => {
    cy.log('Running Smoke tests!');
    console.log('Running Smoke tests!');
  });

  it('Template Test here.', { tags: ['@regression', '@template'],}, () => {
    cy.log('Running Regression tests!');
    console.log('Running Regression tests!');
  });
});