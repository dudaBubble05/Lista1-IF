/*
4- Escreva um programa que receba três números inteiros e mostre eles em ordem crescente.
Nome: Maria Eduarda Freitas
*/

const teclado = require (`prompt-sync`)();

let nUm: number = parseFloat(teclado(`Digite um número: `));
let nDois: number = parseFloat(teclado(`Digite um número: `));
let nTres: number = parseFloat(teclado(`Digite um número: `));

let maior: number = 0;
let meio: number = 0;
let menor: number = 0;

if (nUm > nDois && nUm > nTres){
    maior = nUm
    if(nDois>nTres){
        meio = nDois;
        menor = nTres;
    }
    else{
        meio = nTres;
        menor = nDois;
    }
}
else if(nDois > nUm && nDois > nTres){
    maior = nDois
    if(nUm>nTres){
        meio = nUm
        menor = nTres
    }
    else{
        meio = nTres
        menor = nUm
    }
}
else if(nTres > nUm && nTres > nDois){
    maior = nTres
    if(nDois>nUm){
        meio = nDois
        menor = nUm
    }
    else{
        meio = nUm 
        menor = nDois 
    }
}

console.log(`À ordem crescente correspondente é: ${menor}, ${meio} e ${maior}`);
