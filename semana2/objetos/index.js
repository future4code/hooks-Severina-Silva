//QUESTÃO DE INTERPRETAÇÃO 01
//em console.log(filme.elenco[0]) só exibe o nome da primeira posição

/*em console.log(filme.elenco[filme.elenco.length - 1]) o primeiro () do console.log
"chama a função" o [] define o objeto a ser impresso e length define o numero do
argumento a ser impresso*/

//em console.log(filme.transmissoesHoje[2]) será impresso "canal e horário"

//QUESTÃO DE INTERPRETAÇÃO 02
//LETRA A:
/*será impresso as mesmas informações da const cachorro em 3 linhas diferentes
"nome: juca, idade: 3 raca: srd"
sendo uma para cachorro, uma para gato a ultima para tartaruga*/

//LETRA B:
//os ... se remetem a {} anterior e "copia" os dados 

//QUESTÃO 03
//LETRA A
/*em console.log(minhaFuncao(pessoa, "backender")) seá impresso "false"
em console.log(minhaFuncao(pessoa, "altura")) acredito que não seja
impresso nada pq não existe esse valor na função*/

//LETRA B
// ??

//ESCRITA DE CÓDIGO

//questão 01

const objeto = {
    nome: "Camila", 
    apelidos: ["Camis", "Mila", "Mi"]
}

function imprimirMensagem(receber) {
    console.log(`Eu sou ${receber.nome}, mas pode me chamar de: ${receber.apelidos[0]}, ${receber.apelidos[1]} ou ${receber.apelidos[2]}`)
}

const outroObjeto = {
    ...objeto,
    apelidos: ["Panda", "Bicho Do Mato", "Penelope"]
}

console.log( imprimirMensagem(outroObjeto) )


//questão 02

const dados0 = {
    nome: "Camila",
    idade: "32",
    job: "dev front"

}

const dados1 = {
    nome: "Severina",
    idade: "33",
    job: "programadora"
}

function imprimeInfo(info){
    return[
        info.nome,
        info.nome.length,
        info.idade,
        info.idade.length
    ]
}

console.log(imprimeInfo(dados0))
console.log(imprimeInfo(dados1))




//questão 03

const carrinho =[]

const fruta0 = {
    nome:"goiaba",
    disp: true
}

const fruta1 = {
    nome:"bananinha",
    disp: true
}

const fruta2 = {
    nome:"manga",
    disp: true
}

function adicionarNoCarrinho(fruta){
    carrinho.push(fruta)
}

adicionarNoCarrinho(fruta0)
adicionarNoCarrinho(fruta1)
adicionarNoCarrinho(fruta2)

console.log(carrinho)


//desafio