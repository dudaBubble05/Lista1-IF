/* (5 pontos)
1 - Faça um programa que calcule e apresente o valor do volume de uma lata,
sabendo que PI é um valor constante de 3.14159,
o programa deve pedir os valores de RAIO e ALTURA,
utilize a fórmula VOLUME = PI * RAIO² *ALTURA.
Nome: Maria Eduarda Ffreitas
*/
var teclado = require("prompt-sync")();
var raio = parseFloat(teclado("Digite o valor do raio: "));
var altura = parseFloat(teclado("Digite o valor da altura: "));
var pi = 3.14159;
var volume = (altura * (raio * raio) * pi);
console.log("O valor da convers\u00E3o \u00E9: ".concat(volume));
