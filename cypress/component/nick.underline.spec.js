const storyBookUtils = require('../support/frameUtil');


describe('RTE NICK', () => {
  beforeEach(() => {
    cy.visit('toolbar-options--underline');
    storyBookUtils.renderStorybookIframe();
  });

  const textField = '.tiptap';
  const underlineButton = '[aria-label="Underline"]';
  const underlinedText = '.tiptap p u';

  it('underlines content', () => {
    cy.get('@iframe').find(textField).should('exist').click().type('{selectall}');
    cy.get('@iframe').find(underlineButton).should('exist').click();
    cy.get('@iframe').find(underlinedText).should('exist');
  });
});
