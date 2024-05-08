// Faça um programa que receba um número com raiz exata (4, 9, 25...) e imprima a raiz do número recebido.
const prompt = require('prompt-sync')();

let n1 = parseFloat(prompt('Escreva um Número'));
let raiz = n1 ** (1/2);

console.log(raiz);