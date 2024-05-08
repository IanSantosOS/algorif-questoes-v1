// Faça um programa que receba um array de 3 posições e multiplique cada elemento pelo seu
// maior divisor diferente do próprio elemento. Imprima o array no final.
const prompt = require('prompt-sync')();

/* FORMA QUE NÃO FUNCIONA NO ALGORIF (motivo desconhecido)
let array = [];
let n = [];

for (let i = 0; i < 3; i++){
    array.push(parseInt(prompt('Digite um Número:')));
    n.push(array[i] - 1);
}

for (let i = 0; i < 3; n[i]--){
    if (array[i] % n[i] == 0){
        array[i] *= n[i];
        console.log(array[i]);
        i++;
    }
}
 *///FORMA QUE FUNCIONA NO ALGORIF
 let array = [];

array[0] = parseInt(prompt('Primeiro Número:'));
array[1] = parseInt(prompt('Segundo Número:'));
array[2] = parseInt(prompt('Terceiro Número:'));

let n1 = array[0] - 1;
let n2 = array[1] - 1;
let n3 = array[2] - 1;

while(array[0] % n1 != 0){
    n1--;
}
while(array[1] % n2 != 0){
    n2--;
}
while(array[2] % n3 != 0){
    n3--;
}

console.log(array[0] * n1);
console.log(array[1] * n2);
console.log(array[2] * n3);