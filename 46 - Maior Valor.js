// Faça um algoritmo que leia os valores inteiros A, B, C e imprima na tela se a soma de A + B é menor
// que C ('true' ou 'false'). Todos as letras minúsculas.
const prompt = require('prompt-sync')();

let a = parseInt(prompt('Primeiro Número:'));
let b = parseInt(prompt('Segundo Número:'));
let c = parseInt(prompt('Terceiro Número:'));

console.log(Boolean(a + b < c));