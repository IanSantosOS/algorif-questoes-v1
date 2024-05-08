// Dados n números inteiros diferentes de zero, calcular a soma dos números pares informados.
// Utilize o zero para encerrar a entrada de números.
const prompt = require('prompt-sync')();

let soma = 0;
for (let i = 1; i != 0;){
    i = parseInt(prompt('Digite um Número:'));
    if(i % 2 == 0){
        soma += i;
    }
}
console.log(soma);