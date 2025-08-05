class ProdutosPage {
    visitarUrl(extensão) {
        cy.visit(extensão)
    }
    buscarProduto(nomeProduto){
        cy.get('[type="text"]').eq(1).type(nomeProduto)
        cy.get('.button-group').eq(1).click()
    }
    adicionarProduto(tamanho, cor, quantidade){
        cy.get('.button-variable-item-'+tamanho).click()
        cy.get('.button-variable-item-'+cor).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

    }
    verificarCarrinho(){

    }
}
export default new ProdutosPage