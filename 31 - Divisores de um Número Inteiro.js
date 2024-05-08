// Dado um número n, informar todos os seus divisores em ordem crescente.
const prompt = require('prompt-sync')();

let n1 = parseInt(prompt('Digite um Número:'));

for (let i = 1; i <= n1; i++){
    if (n1 % i == 0){
        console.log(i);
    }
}