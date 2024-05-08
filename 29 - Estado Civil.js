// Faça um algoritmo que leia a primeira letra do estado civil de uma pessoa e informe o estado civil.
// S - solteiro, C - casado, D - divorciado, V - viúvo e inválido para qualquer outra letra.
const prompt = require('prompt-sync')();

let estadoCivil = prompt('Você é Solteiro(S), Casado(C), Divorciado(D) ou Viúvo(V)?').toUpperCase();

switch(estadoCivil){
    default:
        console.log('inválido'); break;
    case 'S':
        console.log('solteiro'); break;
    case 'C':
        console.log('casado'); break;
    case 'D':
        console.log('divorciado'); break;
    case 'V':
        console.log('viúvo');
}