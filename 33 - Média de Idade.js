// Escreva um programa que receba a idade de vários alunos e informa a idade média da turma.
// Informe zero para finalizar as entradas.
const prompt = require('prompt-sync')();

let idade;
let soma = 0;
let n = -1;

while (idade != 0){
    idade = parseInt(prompt('Digite uma Idade:'));
    soma += idade;
    n++;
}
console.log(soma / n);