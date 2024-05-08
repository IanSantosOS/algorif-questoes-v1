// Escreva um algoritmo que leia um número e informe se ele é divisível por 10, por 5 ou por 2 ou se
// não é divisível por nenhum deles.
const prompt = require('prompt-sync')();

let n1 = parseInt(prompt('Digite um Número:'));

if (n1 % 10 == 0){
    console.log(10);
}
if (n1 % 5 == 0){
    console.log(5);
}
if (n1 % 2 == 0){
    console.log(2);
}