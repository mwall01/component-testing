const storyBookUtils = require('../support/frameUtil');

// Your test
describe('RTE italic', () => { // e.g. bold
  beforeEach(() => {
    cy.visit('toolbar-options--italic'); // e.g. toolbar-options--bold
    storyBookUtils.renderStorybookIframe();
  });

  // Create variables for your selectors
  const textField = '.tiptap';
  const italicButton = '[aria-label="Italic"]';
  const italicText = '.tiptap p em';

  // Update the below to test out your own component
  it('makes content italic', () => {
    cy.get('@iframe').find(textField).should('exist').click().type('{selectall}');
    cy.get('@iframe').find(italicButton).should('exist').click();
    cy.get('@iframe').find(italicText).should('exist');
  });

  it('makes content un-italic', () => {
    cy.get('@iframe').find(textField).click().type('{selectall}');
    cy.get('@iframe').find(italicButton).click();
    cy.get('@iframe').find(italicText).should('exist');
    cy.get('@iframe').find(italicButton).click();
    cy.get('@iframe').find(italicText).should('not.exist');
  });
});
