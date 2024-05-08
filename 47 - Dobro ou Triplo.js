// Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja negativo, imprimindo o resultado.
const prompt = require('prompt-sync')();

let n1 = parseInt(prompt('Digite um Número:'));

if (n1 >= 0){
    console.log(n1 * 2);
} else {
    console.log(n1 * 3);
}