/// <reference types ="cypress"/>
import { faker } from "@faker-js/faker";
describe('Funcionalidade - cadastro de usuário', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    it('Cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type(faker.internet.password())
        cy.get(':nth-child(4) > .button').click()
        cy.get('.page-title').contains('Minha conta').should('exist')
    });
});