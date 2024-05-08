// Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra informada
// retornar uma string: feminino, masculino ou inválido.
const prompt = require('prompt-sync')();

let genero = prompt('Digite F ou M:').toUpperCase();

switch (genero){
    case 'F':
        console.log('feminino'); break;
    case 'M':
        console.log('masculino'); break;
    default:
    console.log('inválido');
}