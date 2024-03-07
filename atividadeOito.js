/* (10 pontos)
8-Escreva um programa que leia o valor de 3 ângulos de um triângulo
e escreva se o triângulo é Acutângulo, Retângulo ou Obtusângulo. Sendo que:
− Triângulo Retângulo: possui um ângulo reto. (igual a 90º)
− Triângulo Obtusângulo: possui um ângulo obtuso. (maior que90º)
− Triângulo Acutângulo: possui três ângulos agudos. (menor que 90º)
Nome Aluno: Maria Eduarda Freitas
*/
var teclado = require("prompt-sync")();
var angulo1 = parseFloat(teclado("Digite o primeiro \u00E2ngulo: "));
var angulo2 = parseFloat(teclado("Digite o segundo \u00E2ngulo: "));
var angulo3 = parseFloat(teclado("Digite o terceiro \u00E2ngulo: "));
if (angulo1 == 90 || angulo2 == 90 || angulo3 == 90) {
    console.log("O valor do \u00C2ngulo corresponde a um \"Tri\u00C2ngulo Ret\u00E2ngulo\"!");
}
else if (angulo1 > 90 || angulo2 > 90 || angulo3 > 90) {
    console.log("O valor do \u00E2ngulo corresponde a um \"Tri\u00E2ngulo Obtus\u00E2ngulo\"!");
}
else if (angulo1 && angulo2 && angulo3 < 90) {
    console.log("O valor do \u00E2ngulo corresponde a um \"Tri\u00E2ngulo Acut\u00E2ngulo\"!");
}
