/**
 *  Questão 2
 * 
 * gerenciamento de estoque  
 * 
 * @return {void}
*/
function gerenciarEstoque(){
    /**@type {string} */
    //array com 4 itens inicial
    let estoque = ["farofa", "feijao", "macarrão", "carne"];

    //Atualizando a segundo iten da array 
    estoque[1]= "Manga";

    //Exibir o estado final a quantidade do estoque usando a função de contar
    console.log("Quantidade de itens no estoque:", estoque.length);
    
}
gerenciarEstoque();


