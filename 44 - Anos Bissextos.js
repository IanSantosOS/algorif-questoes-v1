// Sabe-se que anos bissextos são os anos que possuem 366 dias no calendário, esse dia representa o
// acrescimo de 1 dia em Fevereiro, que deixa de ter 28 dias, e passa a ter 29. Faça um programa que
// receba como entrada dois anos e imprima todos eles entre os dois anos dados.
const prompt = require('prompt-sync')();

let ano1 = parseInt(prompt('Primeiro Ano:'));
let ano2 = parseInt(prompt('Segundo Ano:'));

for (; ano1 <= ano2; ano1++) {
  if (ano1 % 4 == 0) {
    console.log(ano1);
  }
}