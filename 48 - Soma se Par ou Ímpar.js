// Faça um algoritmo que leia uma variável e some 5 caso seja par ou some 8 caso seja ímpar,
// imprimir o resultado desta operação.
const prompt = require('prompt-sync')();

let n1 = parseInt(prompt('Digite um Número:'));

if (n1 % 2 == 0){
    console.log(n1 + 5);
} else {
    console.log(n1 + 8);
}