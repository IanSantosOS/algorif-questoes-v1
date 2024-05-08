// Faça um programa que receba 5 idades e retorne quantas são bebês, crianças, adultos ou idosos,
// respectivamente. bebê menos de 1 ano; criança mais igual a um e menos de 18; adulto mais igual a 18
// e menor que 65; idoso mais igual a 65. Dica: Só retorne os números.
const prompt = require('prompt-sync')();

let idade;
let bebe = 0;
let crianca = 0;
let adulto = 0;
let idoso = 0;

for (let i = 0; i < 5; i++) {
    idade = parseInt(prompt('Digite uma Idade:'));
    if (idade < 1) {
        bebe++;
    }
    if (idade >= 1 & idade < 18) {
        crianca++;
    }
    if (idade >= 18 & idade < 65) {
        adulto++;
    }
    if (idade >= 65) {
        idoso++;
    }
}
console.log(bebe);
console.log(crianca);
console.log(adulto);
console.log(idoso);