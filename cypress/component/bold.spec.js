/*
 * OWNER: #website-content-team
 * TEAM: Website Content
 */

const storyBookUtils = require('../support/frameUtil');

const textField = '.tiptap';
const boldButton = '[aria-label="Bold"]';
const boldText = '.tiptap p strong';

describe('RTE Bold', () => {
  beforeEach(() => {
    cy.viewport(1200, 900);
    cy.visit('?path=/story/toolbar-options--bold');
    storyBookUtils.renderStorybookIframe();
    cy.wait(5000);
    // make all of above a util (include in frame util)
  });

  it('bolds content', () => {
    cy.get('@iframe').find(textField).should('exist').click().type('{selectall}');
    cy.get('@iframe').find(boldButton).should('exist').click();
    cy.get('@iframe').find(boldText).should('exist');
  });
});
