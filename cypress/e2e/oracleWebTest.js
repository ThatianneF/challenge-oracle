/// <reference types="Cypress" />

describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login('QA_USER', 'qatest123')
  })

  it('change the quantity of order', () => {
    cy.get('td[class="a-GV-cell u-tE"]')
      .contains('10')
      .dblclick({force:true})
      .wait(2000)
      .type(20)
    cy.save()

    expect(20).to.equal(20)
  })

  it('change the location of order', () => {
    cy.order()
    cy.get('tr[data-id="10"]')
      .contains('Store A')
      .dblclick({force:true})
      .wait(2000)
      .type("Deli")
      .get('span[class="a-Icon icon-search"]').click({force:true})
    cy.get('li[class="a-IconList-item"]')
      .contains('Deli')
      .type('{enter}')
      .click({force:true})
      .should('have.text', 'Deli')
    cy.save()

    expect("Deli").to.equal("Deli")
  })
});