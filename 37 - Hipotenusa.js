// Dados os comprimentos dos lados de um triângulo (lado1 e lado2)
// crie um programa para calcular a hipotenusa.
const prompt = require('prompt-sync')();

let lado1 = parseInt(prompt('Primeiro Lado:'));
let lado2 = parseInt(prompt('Segundo Lado:'));

let hipotenusa = (lado1 ** 2 + lado2 ** 2) ** (1/2);

console.log(hipotenusa);