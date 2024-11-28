/**
 * Questão 3 
 * 
 * @returns {void}
 * 
 */
function calcularMediaAlunos(){
    /**@type {string} */
    let Alunos = [
        [5,8,9], //nota 1
        [6,10,11], //nota 2
        [7,8,9], //nota 3
    ] ;
    //loop aninhado para calcular media dos alunos 
    for(let i = 0; i < Alunos.length; i++){
        let somaNotas = 0;
        for(let j = 0; j < Alunos[i].length; j++){
            somaNotas += Alunos[i][j];
        }
        //calcula a média e arredonda para duas casas decimais
        let media = Math.round((somaNotas / Alunos[i].length) * 100) / 100;
        console.log(`A média das notas do aluno ${i+1} é ${media}`);
    }
}
//chamar a função 
calcularMediaAlunos();
