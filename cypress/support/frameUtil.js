export const renderStorybookIframe = () => {
  cy.get('#storybook-preview-iframe').then(($iframe) => {
    const iframe = $iframe.contents();
    cy.wrap(iframe).as('iframe');
  });
};
