/* (5 pontos)
2 - Crie um programa que peça um número ao usuário e armazene ele na variável x.
Depois peça outro número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y,
e que y passe a ter o valor de x.
Nome: Maria Eduarda Freitas
*/
var teclado = require("prompt-sync")();
var x = parseFloat(teclado("Digite um n\u00FAmero: "));
var y = parseFloat(teclado("Digite outro n\u00FAmero: "));
console.log("O valor de x \u00E9 ".concat(x, ", e valor de y \u00E9 ").concat(y));
console.log("Agora o valor de x \u00E9 ".concat(y, ", e o valor de y \u00E9 ").concat(x));
