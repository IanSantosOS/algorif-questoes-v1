// Faça um programa que imprima na tela apenas os N primeiros números pares entre 1 e 50. Leia N como
// entrada do programa.
const prompt = require('prompt-sync')();

let n1 = parseFloat(prompt('Digite um Número:'));
let par = 2;

for(let i = 1; i <= n1; i++, par += 2){
    console.log(par);
}