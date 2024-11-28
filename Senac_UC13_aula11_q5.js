/**
 * Jogo de adivinhação de números entre 1 e 10.
 * O usuário pode digitar "sair" para encerrar o jogo.
 *
 * @returns {void}
 */
function jogoAdivinhacao() {
    let numeroCorreto = Math.floor(Math.random() * 10) + 1;
    let tentativa;
    while (true) {
        tentativa = prompt("Adivinhe um número entre 1 e 10 ou digite 'sair' para encerrar:");
        if (tentativa.toLowerCase() === "sair") {
            console.log("Você saiu do jogo.");
            break;
        }
        tentativa = parseInt(tentativa, 10);
        if (tentativa === numeroCorreto) {
            console.log("Parabéns! Você acertou o número.");
            break;
        } else {
            console.log("Tente novamente!");
        }
    }
}
//chamar função
jogoAdivinhacao();
