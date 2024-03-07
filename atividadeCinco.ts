/* (10 pontos)
5 – Faça um programa que o usuário digite dois números e o programa informe qual é o número maior, 
com a seguinte frase: `O número maior é ${variavel} e o número menor é ${variavel}`, se ser iguais uma frase: 
 ` Os números ${variavel} e ${variavel} são iguais`.
Nome: Maria Eduarda Freitas
*/

const teclado = require (`prompt-sync`)();

let nUm: number = parseFloat(teclado(`Digite o primeiro número: `));
let nDois: number = parseFloat(teclado(`Digite o primeiro número: `));

if (nUm > nDois){
    console.log(`O número maior é ${nUm}, e o número menor é ${nDois}!`);
}
else if (nUm < nDois) {
    console.log(`O número maior é ${nDois} e o número menor é ${nUm}!`)
}
else (nUm = nDois){
     console.log(`Os números ${nUm} e ${nDois} são iguais!`);
}

