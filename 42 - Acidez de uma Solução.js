// Escreva um programa que leia o valor do índice de acidez (pH) de uma solução e informe se ela é ácida,
// básica ou neutra. A solução é ácida quando o pH é menor que 7. A solução é básica quando o pH é maior
// que 7. Caso contrário a solução é neutra. Dica: a saída não deverá conter acentuação.
const prompt = require('prompt-sync')();

let ph = parseInt(prompt('Digite o pH:'));

if (ph == 7){
    console.log('neutra');
}
if (ph > 7){
    console.log('basica');
}
if (ph < 7){
    console.log('acida');
}