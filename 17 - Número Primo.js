// Ler um número e escreva se ele é primo ou não é primo. Retorne um valor do tipo booleano, true ou false.
const prompt = require('prompt-sync')();

let n1 = parseFloat(prompt('Digite um Número:'));
let primo = (n1==2||n1==3||n1==5||n1==7 || n1%2!=0 & n1%3!=0 & n1%5!=0 & n1%7!=0);

console.log(Boolean(primo));