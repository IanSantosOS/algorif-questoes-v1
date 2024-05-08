// Fazer um programa que leia 4 números inteiros e calcular/imprimir a soma dos que forem par.
const prompt = require('prompt-sync')();

let n1;
let soma = 0;

for (let i = 0; i < 5; i++){
    n1 = parseInt(prompt('Digite um Número:'));
    if (n1 % 2 == 0){
        soma += n1;
    } 
}
console.log(soma);