//QUESTÃO 1 / A 
/* ACREDITO QUE APARECERÁ NO CONSOLE CADA NOME E APELIDO DA LISTA
"nome: Amanda Rangel, apelido: Mandi */

//QUESTAO 2 
/* ACREDITO QUE APARECERÁ NO CONSOLE CADA NOME DA LISTA
"Amanda Rangel, Laís Petra, Letícia chijo*/

//QUESTAO 3
/* ACREDITO QUE APARECERÁ NO CONSOLE O NOME E APELIDO QUE NÃO SEJA CHIJO*/

//ESCRITA DE CÓDIGO

//QUESTÃO 1
/*
const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]
//letra a

const nomePet = pets.map((item, index, array) => {
    return item.nome
 })
console.log (nomePet)

//letra b

const racaSalsicha = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
 })
 
 console.log(racaSalsicha)

//letra c

let racaPoodle = pets.filter ((item) => {
    return item.raca ==='Poodle'
})

let racaDesconto = racaPoodle.map ((item) => {
    return item.nome
})
console.log(`Você ganhou um cupom de desconto de 10% para tosar a/o ${racaDesconto[0]}!`)
console.log(`Você ganhou um cupom de desconto de 10% para tosar a/o ${racaDesconto[1]}!`)
*/

//QUESTÃO 2






