// Ler dois números inteiros, x e y, e imprimir o resto da divisão inteira entre eles.
const prompt = require('prompt-sync')();

let dividendo = parseFloat(prompt('Divisor:'));
let divisor = parseFloat(prompt('Dividendo:'));

let resultado = dividendo % divisor;

console.log(resultado);