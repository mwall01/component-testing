# Cypress Component Testing Workshop

Welcome to the Cypress Component Testing Workshop! In this workshop, you will learn how to use Cypress for testing individual components of a web application.

## Sample Webpage URL
[Test App](https://rich-text-editor.squarespace.net/?path=/docs/welcome--docs)

### Getting Started

Follow these steps to get started with the workshop:

1. Clone the Repository

Clone this repository to your local machine using Git:

```bash
git clone https://github.com/mwall01/component-testing.git
cd component-testing
```
2. Install Dependencies

Install project dependencies using npm:

```bash
npm install
```

3. Run Cypress Tests

To run Cypress tests locally, simply run:

```bash
npm run cypress:open
```
This will open the Cypress Test Runner, where you can select and run your Cypress tests.

4. Writing Your Own Cypress Tests

To write your own Cypress tests, follow these steps:

- Create a new test file in the cypress/component directory
- Add in the template below
- Save the file with a .spec.js extension (e.g., my_test.spec.js)
- Run the test using the Cypress Test Runner (npx cypress open)

Here's the Cypress test snippet to get you started:

```javascript
// TEAM: Product Test Engineering

const storyBookUtils = require('../support/frameUtil');

// Create variables for your selectors
const textField = '.tiptap';
const boldButton = '[aria-label="Bold"]';
const boldText = '.tiptap p strong';

// Your test
describe('RTE <your_option>', () => {
  beforeEach(() => {
    cy.visit('toolbar-options--{option-you-are-testing}'); // e.g. toolbar-options--bold
    storyBookUtils.renderStorybookIframe();
  });

  // Update the below to test out your own component
  it('bolds content', () => {
    cy.get('@iframe').find(textField).should('exist').click().type('{selectall}');
    cy.get('@iframe').find(boldButton).should('exist').click();
    cy.get('@iframe').find(boldText).should('exist');
  });
});

```

Additional Resources
- [Cypress Documentation](https://docs.cypress.io/guides/overview/why-cypress)
