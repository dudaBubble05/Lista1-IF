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

const teclado = require (`prompt-sync`)();

console.log(`Responda Sim = 1 e Não = 0 !!`)

let pergunta1: number = parseFloat(teclado(`Telefonou para a vítima?: `));
let pergunta2: number = parseFloat(teclado(`Esteve no local do crime?: `));
let pergunta3: number = parseFloat(teclado(`Mora perto da vítima?: `));
let pergunta4: number = parseFloat(teclado(`Devia para a vítima?: `));
let pergunta5: number = parseFloat(teclado(`Já trabalhou com a vítima?: `));

let respostas: number = 0;

if (pergunta1 == 1){
    respostas++;
}
if (pergunta2 == 1){
    respostas++;
}
if (pergunta3 == 1){
    respostas++;
}
if (pergunta4 == 1){
    respostas++;
}
if (pergunta5 == 1){
    respostas++;
}
if (respostas == 5){
    console.log(`Você é o Assassino!!`)
}
else if (respostas == 3 || respostas == 4){
    console.log(`Você é o cúmplice do assassino!!`)
}
else if (respostas == 2){
    console.log(`Você é um suspeito!`)
}
else{
    console.log(`Você é inocente!!`)
}
4