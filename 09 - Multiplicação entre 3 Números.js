// Um programa para ler 3 números inteiros e imprimir a multiplicação entre eles.
const prompt = require('prompt-sync')();

let n1 = parseFloat(prompt('Primeiro Número:'));
let n2 = parseFloat(prompt('Segundo Número:'));
let n3 = parseFloat(prompt('Terceiro Número:'));

let multiplicacao = n1 * n2 * n3;

console.log(multiplicacao);