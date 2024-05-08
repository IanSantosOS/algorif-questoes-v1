// Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura
// em graus Celsius. C = (5 * (F-32) / 9).
const prompt = require('prompt-sync')();

let f = parseFloat(prompt('Escreva em Fahrenheit:'));
let c = 5 * (f - 32) / 9;

console.log(c);