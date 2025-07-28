/// <reference types ="cypress"/>

describe('Funcionalidade - cadastro', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
    });
    it('Cadastrar um produto', () => {
        cy.get('.product-block').first().click()
        cy.get('#tab-title-description > a').should('have.text', 'Descrição')
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Orange').click()
        cy.get('.plus').click()
        cy.get('.single_add_to_cart_button').should('be.enabled')
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').contains('2').should('exist')
    });
});