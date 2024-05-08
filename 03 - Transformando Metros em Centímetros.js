// Faça um Programa que converta metros para centímetros.
const prompt = require('prompt-sync')();

let metros = parseInt(prompt('Escreva em Metros:'));
let centimetros = metros * 100;

console.log(centimetros);