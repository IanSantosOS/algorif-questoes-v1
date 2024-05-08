// Criar um algoritmo em que leia o um número inteiro entre 1 e 7 e escreva o dia da semana correspondente
// Iniciando com o Domingo (1), Segunda (2), ..., Sábado (7). Apenas primeira letra maiúscula.
const prompt = require('prompt-sync')();

let dia = parseInt(prompt('Digite um Número:'));

switch (dia){
    case 1: console.log('Domingo'); break;
    case 2: console.log('Segunda'); break;
    case 3: console.log('Terça'); break;
    case 4: console.log('Quarta'); break;
    case 5: console.log('Quinta'); break;
    case 6: console.log('Sexta'); break;
    case 7: console.log('Sábado'); break;
}