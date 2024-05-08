// Faça um programa que receba dois números inteiros e retorne como resultado a exponencial dos números
// Exemplo: 2 e 3, retorna 2 elevado a 3, que é 8.
const prompt = require('prompt-sync')();

let base = parseFloat(prompt('Base:'));
let expoente = parseFloat(prompt('Expoente:'));

let resultado = base ** expoente;

console.log(resultado);