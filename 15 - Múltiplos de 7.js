// Imprimir os múltiplos de 7 menores que o número lido.
const prompt = require('prompt-sync')();

let n1 = parseFloat(prompt('Digite um Número:'));
let n2 = 7;

while(n2 < n1){
    console.log(n2);
    n2 += 7;
}