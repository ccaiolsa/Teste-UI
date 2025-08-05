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

Cypress.Commands.add('comandoLogin', (email, password) => {
    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type(password, {log: false})
    cy.get(':nth-child(4) > .button').click()
})

Cypress.Commands.add('fazerLogin', (email, senha) =>{
    cy.get('#username').type(email)
    cy.get('#password').type(senha)
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })