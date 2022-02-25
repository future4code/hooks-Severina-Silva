//QUESTÃO 1
/* Letra A
o codigo solicita que o usuário digite um número
transforma o número em uma constante
se o resto do numero for igual a 0 passa no teste
se não for igual a zero não pasas no teste */

/* Letra B
imprime números positivos "passou no teste"
*/

/* Letra C
não imprime números negativos "não passou no teste"
*/

//QUESTÃO 2

/*Letra A
serve como uma espécie de catálogo para busca de 
preços das frutas*/

/*Letra B
será impresso
"O precço da fruta Maçã é, 2.25"
*/

/*Letra C
não teria o "corte" no código e iria imprimir tudo abaixo
*/

//QUESTÃO 3

/*Letra A
está pedindo para o usuário digitar o primeiro numero*/

/*Letra B
10 > 0 apareceria as mensagens do console.log
-10 x < 0 não apareceria nada impresso
*/

/*Letra C
não apareceria erro no console pq nos casos de if o console 
simplismente não imprime no console
*/


//QUESTÃO 1

const idadeDoUsuario = Number(prompt("Digite sua idade."))
const numero = Number(idadeDoUsuario)

if (numero > 18) {
    console.log("você pode dirigir.")
  } else {
    console.log("Você não pode dirigir.")
  }if (numero === 18) {
    console.log("você pode dirigir.")
  } else {
    console.log("Você não pode dirigir.")
  }

//L49 - solicitado que o usuário digite a idade através do prompet
//L50 - numero guardado para análise de caso
//{52/60} - critério de maioridade para dirigir
// não consigo colocar no teclado o símbulo maior ou igual


//QUESTÃO 2

const turnoDeAula = prompt("Digite M (matutino), V (vespertino), N (noturno)")

function boasVindas(turnoDeAula) {
    if (turnoDeAula === "M") {
        console.log("Bom dia");
    } else if (turnoDeAula === "V") {
        console.log("Boa tarde");
    } else if (turnoDeAula === "N") {
        console.log("Boa tarde");
    }
}

boasVindas(turnoDeAula)

//QUSTÃO 3

const turnoDeAula1 = prompt("Digite M (matutino), V (vespertino), N (noturno)")
switch (turnoDeAula1) {
    case "M":
        console.log("Bom dia")
        break;
    case "V":
        console.log("Boa tarde")
        break;
    case "N":
        console.log("Boa noite")
    default:
        console.log("Digite a letra MAIUSCULA!")
        break;
}

//QUESTÃO 4

const genero = prompt("Qual o genero do filme?")
const ingresso = prompt("Qual o valor do ingresso?")

if(genero === 'fantasia' && ingresso < 15){
    console.log("Bom filme")
    else {
        console.log("Escolha outro filma :(")
    }
}









