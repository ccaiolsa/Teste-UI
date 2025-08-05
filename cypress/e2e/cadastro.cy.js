/// <reference types ="cypress"/>
import { faker } from "@faker-js/faker";
describe('Funcionalidade - cadastro de usuário', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        //cy.fixture('login').then(dados =>{
        //    cy.comandoLogin(dados.email, dados.senha)
        //})
    });
    //it('Cadastro com sucesso', () => {
    //   cy.get('#reg_email').type(faker.internet.email())
    //    cy.get('#reg_password').type(faker.internet.password())
    //    cy.get(':nth-child(4) > .button').click()
    //    cy.get('.page-title').contains('Minha conta').should('exist')
    //});
    //it('Cadastro com sucesso usando fixture', () => {
    //    cy.fixture('login').then(dados =>{
    //        cy.get('#reg_email').type(dados.email)
    //        cy.get('#reg_password').type(dados.senha , {log: false})
    //        cy.get(':nth-child(4) > .button').click()
    //        cy.get('.page-title').contains('Minha conta').should('exist')
    //    })
    //});
    //it.only('Cadastro com sucesso usando comandos customizados', () => {            
    //        cy.get('.page-title').contains('Minha conta').should('exist')
    //});
    it.only('Cadastro com sucesso usando comandos customizados + faker', () => {
        cy.comandoLogin(faker.internet.email(), faker.internet.password())
        cy.get('.page-title').contains('Minha conta').should('exist')
    });
});