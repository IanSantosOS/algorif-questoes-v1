// Escreva um programa que receba como entrada vários números, até que seja informado o valor 99,
// e exiba o segundo maior número dentre os lidos. Dica: considere que sempre serão lidos pelo menos dois números.
const prompt = require('prompt-sync')();

let array = [];
let n1;

while(n1 != 99){
    n1 = parseInt(prompt('Digite um Número:'));
    array.push(n1);
}
array.splice(array.indexOf(99));
array.sort(function(a, b){return b-a});

console.log(array[1]);