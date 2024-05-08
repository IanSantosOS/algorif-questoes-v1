// Faça um programa que leia 5 números e informe o maior número.
const prompt = require('prompt-sync')();

// 1º FORMA
let n;
let maior = 0;

for (let i = 0; i < 6; i++){
    n = parseInt(prompt('Digite um Número:'));
    if (n > maior){
        maior = n;
    } 
}
console.log(maior);

// 2º FORMA
let n1 = parseInt(prompt('Digite o Primeiro Número:'));
let n2 = parseInt(prompt('Digite o Segundo Número:'));
let n3 = parseInt(prompt('Digite o Terceiro Número:'));
let n4 = parseInt(prompt('Digite o Quarto Número:'));
let n5 = parseInt(prompt('Digite o Quinto Número:'));

console.log(Math.max(n1,n2,n3,n4,n5));