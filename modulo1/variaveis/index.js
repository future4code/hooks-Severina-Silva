let nome
let idade
console.log("typeof nome")
console.log("typeof idade")

/*index.js:4 Uncaught TypeError: console.logt is not a function
    at index.js:4:9
(anonymous) @ index.js:4
content.js:1 127.0.0.1 <<<<<*/
/*typeof nome
index.js:4 typeof idade
content.js:1 127.0.0.1 <<<<<*/

// foi utilizado o comando let por nao ter um valor atribuido

let nome = "camila"
let idade = "33"
console.log("nome")
console.log ("idade")
console.log("typeof nome")
console.log("typeof idade")
console.log("Olá", nome, "você tem", idade, "anos")

/* essas variaveis possibilitam a troca de valor
*/

/*index.js:4 nome
index.js:5 idade
index.js:6 typeof nome
index.js:7 typeof idade
index.js:8 typeof idadeindex.js:6 Olá camila você tem 33 anos
content.js:1 127.0.0.1 <<<<<
content.js:1 127.0.0.1 <<<<<*/

const nome = prompt ("voce usou mascara hoje?")
console.log(nome)

//receber um nome do usuario
/*index.js:2 sim
content.js:1 127.0.0.1 <<<<<*/

const nome = prompt ("voce usou alongou hoje?")
console.log(nome)

//receber um nome do usuario
/*const nome = prompt ("voce usou alongou hoje?")
console.log(nome)*/

const nome = prompt ("voce bebeu agua hoje?")
console.log(nome)

const nome = prompt ("voce bebeu agua hoje?")
console.log(nome)

/*index.js:9 sim
content.js:1 127.0.0.1 <<<<<*/


let a = 10
let b = 25
let c
c = a //c = 10
a = b //a = 25
b = c //b = 10
console.log(a , b, c)

//logica para trocar valores
/*index.js:25 25 10 10
content.js:1 127.0.0.1 <<<<<*/