// Escreva um programa que receba dois números inteiros e que disponibilize as opções abaixo e imprima o
// resultado da operação: S - retornar o soma de dois números; M - retornar a multiplicação de dois
// números; Outra opção - retornar mensagem de erro: opção inválida.
const prompt = require('prompt-sync')();

let n1 = parseInt(prompt('Primeiro Número:'));
let n2 = parseInt(prompt('Segundo Número:'));
let opcao = prompt('(S)Soma ou (M)Multiplicação:');

switch (opcao){
    case 'S': console.log(n1 + n2); break;
    case 'M': console.log(n1 * n2); break;
    default: console.log('opção inválida');
}