// Dado um número n, informar o maior divisor de um número inteiro diferente dele mesmo.
const prompt = require('prompt-sync')();

let n1 = parseInt(prompt('Digite um Número:'));

for (let i = n1-1; i > 0; i--){
    if (n1 % i == 0){
        console.log(i);
    }
}