// EXEMPLOS DE IMPLEMENTAÇÃO

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
let altura = Number(prompt(" digite a altura: "))
let largura = Number(prompt(" digite a largura: "))
console.log( altura * largura)
/*solicitado ao usuário a altura e largura,
tendo resultado de multiplicação dessa operação
impresso no console*/
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
let anoAtual = Number(prompt("digite o ano atual:"))
let anoNacimento = Number(prompt("digite o ano de nascimento:"))
console.log( anoAtual - anoNacimento)
/* solicitado ao uduário que digite o ano atual
e o ano de nascimento, resultado impresso 
direto no console*/
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
/*let peso = Number prompt("digite seu peso")  
let altura = Number prompt("digite sua altura")
imc = peso / ( altura * altura)
console.log( imc )*/
  return peso / (altura*altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nomeUsuario = prompt("Digite seu nome")
  let idadeUsuario = Number(prompt("Digite sua idade"))
  let emailUsuario = prompt("Digite seu email")
  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const corFavorita1 = prompt("Digite a primeira cor")
  const corFavorita2 = prompt("Digite a segunda cor")
  const corFavorita3 = prompt("Digite a terceira cor")
  arrayResultante = [corFavorita1, corFavorita2, corFavorita3]
  console.log(arrayResultante)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo/valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const tamanhoStr1 = string1.length
  const tamanhoStr2 = string2.length
  return tamanhoStr1 === tamanhoStr2

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const quantosElementos = array.length 
  return array[quantosElementos-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const ultimoNumero = array[array.length -1]
  const primeiroNumero = array[0]

  array[array.length -1] = primeiroNumero
  array[0] = ultimoNumero
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const novaStr1 = string1.toUpperCase() 
  const novaStr2 = string2.toUpperCase()
  return novaStr1 === novaStr2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}