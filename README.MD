# Atividade 11 
- Aluno:Kauã Igor
- Professor: Thiago
## Questão 1: Gerenciamento de Lista de Tarefas
- foi pedido para criar uma array vazia eu utilizei da seguinte forma *´let tarefas = [];`*

### Código:

```javascript
function gerenciamentotarefas() {
    let tarefas = []; // Criando uma array vazia chamada tarefas
    
    // Adicionando tarefas usando o push
    tarefas.push("aprendendo javascript");
    tarefas.push("Vamos Endoidar");
    tarefas.push("ja estamos crayz");

    // Removendo o último índice com pop
    tarefas.pop();

    // Exibir o array final no console
    console.log(tarefas);
}
// Chamar a função
gerenciamentotarefas();
```

# Questão 2: Gerenciamento de Estoque
Ao longo da implementação, pude aprender na prática o poder dos arrays para guardar e manipular listas de dados. Ao aderir à sugestão, aprendi a:

- **Elaborar um array inicial** com os itens do inventário, espelhando uma situação concreta em que é preciso gerir recursos.
- **Atualizar elementos específicos no array** através de indexação, uma abordagem eficaz para simular alterações no inventário, como a troca de um item por outro.
- **Empregar a propriedade `.length`** para calcular a quantidade total de itens no array, uma função útil para acompanhar dinamicamente a dimensão do inventário.
#### Código:
```javascript
function gerenciarEstoque() {
    let estoque = ["farofa", "feijao", "macarrão", "carne"]; // Array inicial

    // Atualizando o segundo item do array
    estoque[1] = "Manga";

    // Exibir a quantidade de itens no estoque
    console.log("Quantidade de itens no estoque:", estoque.length);
}
// Chamar a função
gerenciarEstoque();

```

## Questão 3: Cálculo da Média de Notas dos Alunos
- **Montagem de arrays bidimensionais:** Empreguei um array no qual cada subarray representa as notas de um estudante, demonstrando uma estrutura organizada para guardar informações agrupadas.
- **Iteração com loops aninhados:** O loop externo percorreu os estudantes, enquanto o interno somou as notas individuais. Essa estratégia foi essencial para a correta determinação das médias.
- **Cálculo e arredondamento da média:** Utilizando `Math.round` para dividir a soma das notas pelo número de elementos no subarray, apresentei resultados precisos e bem formatados.
- **Clareza no console:** A exibição das médias foi realizada com descrições que simplificaram a compreensão dos resultados.
### Código:
```javascript
function calcularMediaAlunos() {
    /**@type {string} */
    let Alunos = [
        [5, 8, 9],   // Notas do aluno 1
        [6, 10, 11], // Notas do aluno 2
        [7, 8, 9],   // Notas do aluno 3
    ];

    // Loop aninhado para calcular a média dos alunos
    for (let i = 0; i < Alunos.length; i++) {
        let somaNotas = 0;
        for (let j = 0; j < Alunos[i].length; j++) {
            somaNotas += Alunos[i][j];
        }
        // Calcula a média e arredonda para duas casas decimais
        let media = Math.round((somaNotas / Alunos[i].length) * 100) / 100;
        console.log(`A média das notas do aluno ${i + 1} é ${media}`);
    }
}
// Chamar a função
calcularMediaAlunos();
```
## Questão 4: Exibição de Palavras em Ordem Reversa
### Como o conhecimento foi utilizado:
- Construí um script que recebe um array de palavras, permitindo trabalhar com dados em sequencia.
- Loop reverso: Empreguei um loop `for` para construir uma array em ordem inversa.
mesmo caminho que fosse fazer uma normal so trocando o sinal pois ives de aumentar ela diminui.
- Exibição clara no console: As palavras foram exibidas uma por uma, seguindo a logica do loop reverso , tendo uma visualização clara e organizada do resultado 
### Código:
```javascript
function exibirPalavrasReverso(palavras) {
    // Usar um loop for reverso para exibir cada palavra no console
    for (let i = palavras.length - 1; i >= 0; i--) {
        console.log(palavras[i]);
    }
}
// Chamar a função
exibirPalavrasReverso(["café", "livro", "código", "javascript", "aprendizado"]);
```

## 5 Questão: Jogo de Adivinhação
- Para gerar numeros aleatorio eu usei `Math.random` para criar um lista de numero aleatorio de 1 a 10 deixando inprevisivel de saber qual e o numero.
- utilizei o comando `prompt` para permitir que o usuario entre com sua tentativa de acertar o numero 
- na estrutura de repetição foi utilizado o `while` para que ficasse repetindo ate o numero fosse adivinhado deixando o jogo vivo ate que o usuario cansasse e saisse.
- condiçoes e conversão utilizei o if para ter condiçoes para deixar o jogo com fluxo logico correto.
- E no console ira orientar o jogador de forma clara com as mensagens informativa.
### Código:
```javascript
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
// Chamar função
jogoAdivinhacao();
```
