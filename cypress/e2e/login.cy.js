/// <reference types ="cypress"/>
import { faker } from '@faker-js/faker';
const perfil = require('../fixtures/login.json')
describe('Funcionalidade - login', () =>{
    beforeEach(() => {
        cy.visit('minha-conta')
    //    cy.fazerLogin(perfil.email, perfil.senha)
    });
    //it('Login feito com sucesso', () =>{ 
    //    cy.get('#username').type('email@email.com')
    //    cy.get('#password').type('senha123')
    //    cy.get('.woocommerce-form > .button').click()
    //    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').contains('email').should('exist')
    //})
    //it('E-mail não reconhecido', () => {
    //    cy.get('#username').type('email-errado@email.com')
    //    cy.get('#password').type('senha123')
    //    cy.get('.woocommerce-form > .button').click()
    //    cy.get('.woocommerce-error > li').contains('Endereço de e-mail desconhecido').should('exist')
    //});
    //it('Senha incorreta', () =>{
    //    cy.get('#username').type('email@email.com')
    //    cy.get('#password').type('senha1234')
    //    cy.get('.woocommerce-form > .button').click()
    //    cy.get('.woocommerce-error > li').contains('A senha fornecida').should('exist')
    //})
    it('fazer login usando massa de dados', () => {
        cy.get('#username').type(perfil.email)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('have.text', 'Minha conta')       
    });
    it('fazer login usando fixture', () => {
        cy.fixture('login').then(dados =>{
            cy.get('#username').type(dados.email)
            cy.get('#password').type(dados.senha)
            cy.get('.woocommerce-form > .button').click()
            cy.get('.page-title').should('have.text', 'Minha conta') 
        })
    });
    it('fazer login usando comandos personalizados + dados fixos', () => {
        cy.fazerLogin('testeJson2@teste.com', 'teste1234!')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('have.text', 'Minha conta')
    });
    it('fazer login usando comandos personalizados + fixture', () => {
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('have.text', 'Minha conta')
    });
})