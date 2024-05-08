// Dados três números em ponto flutuante queremos saber quantos deles estão acima da média aritmética.
const prompt = require('prompt-sync')();

// 1º FORMA
let n1 = parseFloat(prompt('Primeiro Número:'));
let n2 = parseFloat(prompt('Segundo Número:'));
let n3 = parseFloat(prompt('Terceiro Número:'));
let media = (n1 + n2 + n3) / 3;
let acimaMedia = 0;

if (n1 > media){
    acimaMedia++;
}
if (n2 > media){
    acimaMedia++;
}
if (n3 > media){
    acimaMedia++;
}
console.log(acimaMedia);

// 2º FORMA
let n = [];
for (let i = 0; i < 3; i++){
    n.push(parseFloat(prompt('Digite um Número:')));
}
let media_ = (n[1] + n[2] + n[3]) / 3;
let acimaMedia_ = 0;

for (let i = 0; i < 3; i++){
    if (n[1] > media_){
        acimaMedia_++;
    }
}
console.log(acimaMedia_);