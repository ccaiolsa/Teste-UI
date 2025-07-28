/// <reference types ="cypress"/>
describe('Funcionalidade - login', () =>{
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
        cy.get('.icon-user-unfollow').click()
    });
    it('Login feito com sucesso', () =>{ 
        cy.get('#username').type('email@email.com')
        cy.get('#password').type('senha123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').contains('email').should('exist')
    })
    it('E-mail não reconhecido', () => {
        cy.get('#username').type('email-errado@email.com')
        cy.get('#password').type('senha123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').contains('Endereço de e-mail desconhecido').should('exist')
    });
    it('Senha incorreta', () =>{
        cy.get('#username').type('email@email.com')
        cy.get('#password').type('senha1234')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').contains('A senha fornecida').should('exist')
    })
})