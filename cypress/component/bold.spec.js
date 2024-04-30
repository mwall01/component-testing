// TEAM: Product Test Engineering

const storyBookUtils = require('../support/frameUtil');

const textField = '.tiptap';
const boldButton = '[aria-label="Bold"]';
const boldText = '.tiptap p strong';

describe('RTE Bold', () => {
  beforeEach(() => {
    cy.visit('rich-text-editor--default-usage');
    storyBookUtils.renderStorybookIframe();
  });

  it('bolds content', () => {
    cy.get('@iframe').find(textField).should('exist').click().type('{selectall}');
    cy.get('@iframe').find(boldButton).should('exist').click();
    cy.get('@iframe').find(boldText).should('exist');
  });
});
