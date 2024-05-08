// Faça um programa que leia 5 números e informe a soma dos números.
const prompt = require('prompt-sync')();

// 1º FORMA
let n = 0;
for (let i = 0; i < 5; i++){
    n += parseInt(prompt('Digite um Número:'));
}
console.log(n);

// 2º FORMA
let n1 = parseFloat(prompt('Primeiro Número:'));
let n2 = parseFloat(prompt('Segundo Número:'));
let n3 = parseFloat(prompt('Terceiro Número:'));
let n4 = parseFloat(prompt('Quarto Número:'));
let n5 = parseFloat(prompt('Quinto Número:'));

console.log(n1 + n2 + n3 + n4 + n5);