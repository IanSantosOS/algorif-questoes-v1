// Faça um Programa que verifique se uma letra digitada é vogal ou consoante. Leia o caractere e
// retorne um string: vogal ou consoante.
const prompt = require('prompt-sync')();

let letra = prompt('Digite uma Letra::').toUpperCase();

if (letra == 'A' || letra == 'E' || letra == 'I' || letra == 'O' || letra == 'U'){
    console.log('vogal');
} else {
    console.log('consoante');
}