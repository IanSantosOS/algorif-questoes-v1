// Faça um Programa que leia três números e mostre-os em ordem decrescente.
const prompt = require('prompt-sync')();

let n1 = parseInt(prompt('Primeiro Número:'));
let n2 = parseInt(prompt('Segundo Número:'));
let n3 = parseInt(prompt('Terceiro Número:'));

// Maior
let maior = n1;
if (n2 > n1 & n2 > n3){
    maior = n2;
}
if (n3 > n1 & n3 > n2){
    maior = n3;
}

// Menor
let menor = n1;
if (n1 > n2 & n3 > n2){
    menor = n2;
}
if (n1 > n3 & n2 > n3){
    menor = n3;
}

// Meio
let meio = n1;
if (maior > n2 & n2 > menor){
    meio = n2;
}
if (maior > n3 & n3 > menor){
    meio = n3;
}

console.log(maior);
console.log(meio);
console.log(menor);