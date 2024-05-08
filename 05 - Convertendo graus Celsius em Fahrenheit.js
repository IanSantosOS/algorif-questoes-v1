// Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre a temperatura
// em graus Fahrenheit. F = C * 1.8 + 32.
const prompt = require('prompt-sync')();

let c = parseFloat(prompt('Escreva em graus Celsius'));
let f = c * 1.8 + 32;

console.log(f);