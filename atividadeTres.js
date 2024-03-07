/* (5 pontos)
3 – Faça um programa que verifique se uma letra digitada é vogal ou consoante.
Nome: Maria Eduarda Freitas
*/
var teclado = require("prompt-sync")();
var letra = teclado("Digite alguma letra: ");
if (letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U" || letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
    console.log("A letra digitada \u00E9 uma vogal!");
}
else {
    console.log("A letra digitada \u00E9 consoante!");
}
