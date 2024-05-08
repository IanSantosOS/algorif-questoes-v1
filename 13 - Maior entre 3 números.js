// Um programa para ler três valores e determinar o maior dentre eles.
const prompt = require('prompt-sync')();

// 1º FORMA
let n;
let maior = 0;

for (let i = 0; i < 4; i++){
    n = parseInt(prompt('Digite um Número:'));
    if (n > maior){
        maior = n;
    } 
}
console.log(maior);

// 2º FORMA
let n1 = parseInt(prompt('Digite o Primeiro Número:'));
let n2 = parseInt(prompt('Digite o Segundo Número:'));
let n3 = parseInt(prompt('Digite o Terceiro Número:'));

console.log(Math.max(n1,n2,n3));