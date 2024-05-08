// Faça um Programa que peça dois números e imprima o maior deles.
const prompt = require('prompt-sync')();

let n1 = parseFloat(prompt('Primeiro Número:'));
let n2 = parseFloat(prompt('Segundo Número:'));

console.log(Math.max(n1,n2));