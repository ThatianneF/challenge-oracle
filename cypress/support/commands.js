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
// Cypress.Commands.add('login', (email, password) => { ... })
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

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

Cypress.Commands.add('login', (email, password) => {
    cy.get('#P9999_USERNAME').type(email)
    cy.get('#P9999_PASSWORD').type(password)
    cy.get('#P9999_REMEMBER_LABEL').click()
    cy.get('#B12601466532783624621').click()
  })

Cypress.Commands.add('save', () => {
    cy.get('#B12602635547059750577').click()
})

Cypress.Commands.add('order',() => {
    cy.get('#C12602635284101750575_HDR').click()
    cy.get('#R12602633341339750555_ig_column_header_search').type(10)
    cy.wait(2000)
    cy.get('label[class="a-IRR-sortWidget-searchLabel"]').type('{enter}')
})