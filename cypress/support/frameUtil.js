export const renderStorybookIframe = () => {
  cy.get('#storybook-preview-iframe').then(($iframe) => {
    cy.viewport(1200, 900);
    cy.wait(5000);
    const iframe = $iframe.contents();
    cy.wrap(iframe).as('iframe');
  });
};
