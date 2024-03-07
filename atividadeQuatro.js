/*
4- Escreva um programa que receba três números inteiros e mostre eles em ordem crescente.
Nome: Maria Eduarda Freitas
*/
var teclado = require("prompt-sync")();
var nUm = parseFloat(teclado("Digite um n\u00FAmero: "));
var nDois = parseFloat(teclado("Digite um n\u00FAmero: "));
var nTres = parseFloat(teclado("Digite um n\u00FAmero: "));
var maior = 0;
var meio = 0;
var menor = 0;
if (nUm > nDois && nUm > nTres) {
    maior = nUm;
    if (nDois > nTres) {
        meio = nDois;
        menor = nTres;
    }
    else {
        meio = nTres;
        menor = nDois;
    }
}
else if (nDois > nUm && nDois > nTres) {
    maior = nDois;
    if (nUm > nTres) {
        meio = nUm;
        menor = nTres;
    }
    else {
        meio = nTres;
        menor = nUm;
    }
}
else if (nTres > nUm && nTres > nDois) {
    maior = nTres;
    if (nDois > nUm) {
        meio = nDois;
        menor = nUm;
    }
    else {
        meio = nUm;
        menor = nDois;
    }
}
console.log("\u00C0 ordem crescente correspondente \u00E9: ".concat(menor, ", ").concat(meio, " e ").concat(maior));
