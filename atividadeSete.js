/* (10 pontos)
 7 - As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia,
e R$ 0,25 se forem compradas pelo menos doze. Escreva um programa que leia o número de maçãs compradas,
calcule e escreva o valor total da compra.
Nome: Maria Eduarda Freitas
*/
var teclado = require("prompt-sync")();
var maca1 = 0.30;
var maca2 = 0.25;
var compra = parseFloat(teclado("Digite a quantidade de ma\u00E7\u00E3s: "));
if (compra > 12) {
    console.log(maca1 * compra);
}
else if (compra <= 12) {
    console.log(maca2 * compra);
}
