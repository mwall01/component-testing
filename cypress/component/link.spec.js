// TEAM: Product Test Engineering

const storyBookUtils = require('../support/frameUtil');

describe('RTE Link', () => {
  beforeEach(() => {
    cy.visit('toolbar-options-link--default-link');
    storyBookUtils.renderStorybookIframe();
  });

  const textField = '.tiptap';
  const linkButton = '[aria-label="Link"]';
  const boldText = '.tiptap p strong';

  it('default link', () => {
    cy.get('@iframe').within(() => {
      cy.get(textField).should('exist').click().type('{selectall}');
      cy.get(linkButton).should('exist');
    cy.contains('a','content').should('exist').should("not.have.attr", "href", "https://www.google.com/");
    });
  });
});
