// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Command confirms the page by getting a DOM object and comparing its value
Cypress.Commands.add('confirmPage', (obj, value) => {
  cy.get(obj).contains(value);
})

// Command gets the necessary dropdown and checks if it is correct
Cypress.Commands.add('confirmDropdown', () => {
  cy.get('select[id=dropdown]').within(() => {
    cy.get('option[selected=selected]').contains('Please select an option');
    cy.get('option[value=1]').contains('Option 1');
    cy.get('option[value=2]').contains('Option 2');
  });
})