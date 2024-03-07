/* (10 pontos)
10 - Crie um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
    "Telefonou para a vítima?"
    "Esteve no local do crime?"
    "Mora perto da vítima?"
     "Devia para a vítima?"
    "Já trabalhou com a vítima?"
O programa deve no final emitir uma classificação sobre a participação da pessoa no crime.
Se a pessoa responder positivamente a 2 questões ela deve ser classificada/exibida como "Suspeita",
entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".
Aluno: Maria Eduarda Freitas
*/
var teclado = require("prompt-sync")();
console.log("Responda Sim = 1 e N\u00E3o = 0 !!");
var pergunta1 = parseFloat(teclado("Telefonou para a v\u00EDtima?: "));
var pergunta2 = parseFloat(teclado("Esteve no local do crime?: "));
var pergunta3 = parseFloat(teclado("Mora perto da v\u00EDtima?: "));
var pergunta4 = parseFloat(teclado("Devia para a v\u00EDtima?: "));
var pergunta5 = parseFloat(teclado("J\u00E1 trabalhou com a v\u00EDtima?: "));
var respostas = 0;
if (pergunta1 == 1) {
    respostas++;
}
if (pergunta2 == 1) {
    respostas++;
}
if (pergunta3 == 1) {
    respostas++;
}
if (pergunta4 == 1) {
    respostas++;
}
if (pergunta5 == 1) {
    respostas++;
}
if (respostas == 5) {
    console.log("Voc\u00EA \u00E9 o Assassino!!");
}
else if (respostas == 3 || respostas == 4) {
    console.log("Voc\u00EA \u00E9 o c\u00FAmplice do assassino!!");
}
else if (respostas == 2) {
    console.log("Voc\u00EA \u00E9 um suspeito!");
}
else {
    console.log("Voc\u00EA \u00E9 um inocente!!");
}
