// Faça um programa que leia duas palavras, junte as duas strings em uma terceira string e imprima a mesma.
const prompt = require('prompt-sync')();

let palavra1 = prompt('Primeira Palavra');
let palavra2 = prompt('Segunda Palavra');

let concatenar = palavra1 + palavra2;

console.log(concatenar);