// Faça um algoritmo para ler dois números inteiros e informar se estes números são iguais ou diferentes.
// Escreve o resultado com letras minúsculas.
const prompt = require('prompt-sync')();

let n1 = parseInt(prompt('Primeiro Número:'));
let n2 = parseInt(prompt('Segundo Número:'));

switch(n1){
    case n2: console.log('iguais'); break;
    default: console.log('diferentes');
}