// Escrever um algoritmo que leia um valor inteiro e informe se o número lido é ímpar ou par.
const prompt = require('prompt-sync')();

let n1 = parseFloat(prompt('Digite um Número:'));

if (n1 % 2 == 0){
    console.log('par');
}
else {
    console.log('ímpar');
}