// Crie um programa que lê o nome e duas notas de um aluno, e em seguida calcula a sua média.
const prompt = require('prompt-sync')();

prompt('Digite o seu Nome:');
let n1 = parseInt(prompt('Primeira Nota:'));
let n2 = parseInt(prompt('Segunda Nota:'));

let media = (n1 + n2) / 2;

console.log(media);