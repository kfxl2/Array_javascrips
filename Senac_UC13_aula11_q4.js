/**
 * Questão 4
 *  Crie um script que leia um array de palavras e exiba cada palavra no console em ordem reversa. O script deve:
 * 
 * @param {string[]} palavras - Array de palavras a serem exibidas.
 * @returns {void}
 */
function exibirPalavrasReverso(palavras) {
    // Usar um loop for reverso para exibir cada palavra no console (lembrando que tem que ser - para poder fazer reverse)
    for (let i = palavras.length - 1; i >= 0; i--) {
        console.log(palavras[i]);
    }
}
// Chamar a função
exibirPalavrasReverso(["café", "livro", "código", "javascript", "aprendizado"]);