// Escreva um programa que recebe um número inteiro como entrada e fornece o algarismo da casa das unidades deste numero.
// Por exemplo, o algarismo da casa das unidades do número 3872 é 2. Se o número dado for negativo,
// considere que o algarismo também será negativo. Por exemplo, se o número dado for -74, a resposta
// deve ser -4 e não 4.
const prompt = require('prompt-sync')();

let n1 = prompt('Digite um Número:');

if (n1 > 0){
    console.log(n1.slice(-1));
} else {
    console.log(-n1.slice(-1));
}