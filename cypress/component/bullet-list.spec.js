const storyBookUtils = require('../support/frameUtil');


describe('RTE bullet list test', () => { // e.g. bold
    beforeEach(() => {
      cy.visit('toolbar-options--bullet-list'); // e.g. toolbar-options--bold
      storyBookUtils.renderStorybookIframe();
    });

    // Create variables for your selectors
    const textField = '.tiptap';
    const bulletListButton = '[aria-label="Bullet List"]';
    const bulletListText = '.tiptap p Bullet';

    // Update the below to test out your own component
    it('unbullets content', () => {
      cy.get('@iframe').find(textField).should('exist').click().type('{selectall}');
      cy.get('@iframe').find(bulletListButton).should('exist').click();
      cy.get('@iframe').find(bulletListText).should('not.exist');
    });
  });