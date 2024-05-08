// Faça um programa que receba dois números inteiros e imprima a soma dos dois números.
const prompt = require('prompt-sync')();

let n1 = parseInt(prompt('Primeiro Número: '));
let n2 = parseInt(prompt('Segundo Número: '));

let soma = n1 + n2;

console.log(soma);