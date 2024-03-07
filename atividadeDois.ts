/* (5 pontos)
2 - Crie um programa que peça um número ao usuário e armazene ele na variável x. 
Depois peça outro número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y,
e que y passe a ter o valor de x.
Nome: Maria Eduarda Freitas
*/

const teclado = require (`prompt-sync`)();

let x: number = parseFloat(teclado(`Digite um número: `));
let y: number = parseFloat(teclado(`Digite outro número: `));

console.log(`O valor de x é ${x}, e valor de y é ${y}`);
console.log(`Agora o valor de x é ${y}, e o valor de y é ${x}`);
