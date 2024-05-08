// Faça um Programa que peça um valor e retorne uma string com o valor positivo, neutro ou negativo.
const prompt = require('prompt-sync')();

let n1 = parseFloat(prompt('Primeiro Número:'));

if (n1 == 0){
    console.log('neutro');
}
if (n1 > 0){
    console.log('positivo');
}
if (n1 < 0){
    console.log('negativo');
}