// Faça um programa para calcular o fatorial de um número qualquer informado pelo usuário.
const prompt = require('prompt-sync')();

let n1 = parseInt(prompt('Digite um Número:'));
let n2 = n1-1;

while(n2 > 0){
    n1 = n1 * n2;
    n2--;
}
console.log(n1);