// TEAM: Product Test Engineering

const storyBookUtils = require('../support/frameUtil');

describe('RTE Bold', () => {
  beforeEach(() => {
    cy.visit('toolbar-options--bullet-list');
    storyBookUtils.renderStorybookIframe();
  });

  const textField = '.tiptap';
  const bulletListButton = '[aria-label="Bullet List"]';
  const bulletList = '.tiptap ul';

  it('creates a bulleted list', () => {
    cy.get('@iframe').find(textField).should('exist').click().type('{selectall}');
    cy.get('@iframe').find(bulletList).should('exist');
    cy.get('@iframe').find(bulletListButton).should('exist').click();
    cy.get('@iframe').find(bulletList).should('not.exist')
  });
});
