/// <reference types ="cypress"/>
import produtosPage from "../support/page-objects/produtos.page";
const produto = require('../fixtures/produtos.json')
describe('Funcionalidade - buscar produtos', () => {
    beforeEach(() => {
        produtosPage.visitarUrl('produtos')
    });
    //it('Cadastrar um produto', () => {
    //    cy.get('.product-block').first().click()
    //    cy.get('#tab-title-description > a').should('have.text', 'Descrição')
    //    cy.get('.button-variable-item-XS').click()
    //    cy.get('.button-variable-item-Orange').click()
    //    cy.get('.plus').click()
    //    cy.get('.single_add_to_cart_button').should('be.enabled')
    //    cy.get('.single_add_to_cart_button').click()
    //    cy.get('.dropdown-toggle > .mini-cart-items').contains('2').should('exist')
    //});
    it('buscar produto usando massa de dados na posição [0]', () => {
        produtosPage.buscarProduto(produto[0].nome)
        produtosPage.adicionarProduto(produto[0].tamanho, produto[0].cor, produto[0].quantidade)
        cy.get('.woocommerce-message').should('contain', `${produto[0].quantidade} × “${produto[0].nome}” foram adicionados no seu carrinho.`)
    });
        it('buscar produto usando massa de dados na posição [1]', () => {
        produtosPage.buscarProduto(produto[1].nome)
        produtosPage.adicionarProduto(produto[1].tamanho, produto[1].cor, produto[1].quantidade)
        cy.get('.woocommerce-message').should('contain', `${produto[1].quantidade} × “${produto[1].nome}” foram adicionados no seu carrinho.`)
    });
        it('buscar produto usando massa de dados na posição [2]', () => {
        produtosPage.buscarProduto(produto[2].nome)
        produtosPage.adicionarProduto(produto[2].tamanho, produto[2].cor, produto[2].quantidade)
        cy.get('.woocommerce-message').should('contain', `${produto[2].quantidade} × “${produto[2].nome}” foram adicionados no seu carrinho.`)
    });
        it('buscar produto usando massa de dados na posição [3]', () => {
        produtosPage.buscarProduto(produto[3].nome)
        produtosPage.adicionarProduto(produto[3].tamanho, produto[3].cor, produto[3].quantidade)
        cy.get('.woocommerce-message').should('contain', `${produto[3].quantidade} × “${produto[3].nome}” foram adicionados no seu carrinho.`)
    });
});