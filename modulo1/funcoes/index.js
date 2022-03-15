/* INTERPRETACAO DE CODIGO

EXERCICIO 01:
a - vai imprimir u valor do console multiplicado por 5
b - o console não vai identificar nada 

ERCICIO 02
a. está solicitando que o usuário insira os dados para que uma frase seja montada

b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura`
     ii.  `CENOURA é bom pra vista`
     iii. `Cenouras crescem na terra`
  
let textoDoUsuario = prompt("Insira um texto");
const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}
const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
*/

//ESCRITA DE CODIGO
//QUESTAO1
/*
function imprimirMensagem0 (){
    return `Eu sou Camila, tenho 32 anos, moro no Rio de Janeiro sou estudante de programação.`
}

function imprimirMensagem1( nome, idade, cidade, profissão){
    `eu sou ${nome}, tenho ${idade} anos, moro no ${cidade} e sou ${profissão}`
    const nome = prompt(qual é o seu nome)
    const nome = prompt(qual é a sua idade)
    const nome = prompt(onde você mora)
    const nome = prompt(qual é a sua profissão)
}
console.log( imprimirMensagem1( nome, idade, cidade, profissão) )
*/
// NÃO CONSEGUI ACHAR A LÓGICA CERTA PARA REALIZAR A EXECUÇÃO NO CONSOLE

//QUESTÃO2


/*a) Escreva uma função que receba 2 números como
parâmetros, e, dentro da função, faça a soma das duas 
entradas e retorne o resultado. Invoque a função e 
imprima no console o resultado.

b) Faça uma função que recebe 2 números e retorne
um booleano que informa se o primeiro número é 
**maior ou igual** ao segundo.

c) Escreva uma função que receba um número e devolva
um booleano indicando se ele é par ou não

d) Faça uma função que recebe uma mensagem (`string`)
como parâmetro e imprima o tamanho dessa mensagem,
juntamente com uma versão dela em letras maiúsculas.




/*Crie uma função para cada uma das operações básicas 
(soma, subtração, multiplicação e divisão). Em seguida,
peça para o usuário inserir dois números e chame essas 
4 funções com esses valores inputados pelo usuário 
sendo o argumento. Por fim, mostre no console o 
resultado das operações:
*/

//QUESTÃO3
/*
function soma(num1 , num2){
    return num1 + num2
}

function subtracao(num1 , num2){
    return num1 - num2
}

function mutiplicacao(num1 , num2){
    return num1 * num2
}

function divisao(num1 , num2){
    return num1 / num2
}


let primeiroNumero = prompt("digite um número)")
let segundoNumero = prompt("digite outro numero")

console.log(`numeros inseridos: ${primeiroNumero}, ${segundoNumero}`)
console.log("soma:", soma(primeiroNumero,segundoNumero)
console.log("diferença:", subtracao(primeiroNumero,segundoNumero)
console.log("multiplicação:", mutiplicacao(primeiroNumero,segundoNumero)
console.log("divisão:", divisao(primeiroNumero,segundoNumero)
*/

