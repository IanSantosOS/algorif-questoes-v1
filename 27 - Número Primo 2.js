// Escrever um algoritmo que leia um valor inteiro e informe se o número lido é primo. Retornar sim ou não.
const prompt = require('prompt-sync')();

let n1 = parseFloat(prompt('Digite um Número:'));

if(n1==2||n1==3||n1==5||n1==7|| n1%2!=0 & n1%3!=0 & n1%5!=0 & n1%7!=0){
    console.log('sim');
} else {
    console.log('não');
}