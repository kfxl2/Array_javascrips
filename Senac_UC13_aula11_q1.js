/**
 * Questão 1
 * 
 * gerenciamento de lista de tarefas 
 * 
 * @returns {void}
 * 
 */
function gerenciamentotarefas(){

    let tarefas = []; //criando uma array vazia chamada tarefas
    /**@type {string} */    
    //adicionando tarefas usando o push
    tarefas.push("aprendendo javascript");
    tarefas.push("Vamos Endoidar");
    tarefas.push("ja estamos crayz");


    //removendo o ultimo index com pop     
    tarefas.pop();

    //exibir o array final no console
    console.log(tarefas);

}
// chamar a função lembrar pois fui tentar testar o codigo sem chamar a função 
gerenciamentotarefas();
