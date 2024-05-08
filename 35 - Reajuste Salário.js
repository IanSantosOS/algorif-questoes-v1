// Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste.
// Calcular e escrever o valor do novo salário.
const prompt = require('prompt-sync')();

let n1 = parseInt(prompt('Digite o Salário:'));
let n2 = parseInt(prompt('Digite o Percentual de Aumento:'));

let reajuste = (n1 * n2 / 100) + n1;

console.log(reajuste);