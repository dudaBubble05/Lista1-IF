/* (5 pontos)
3 – Faça um programa que verifique se uma letra digitada é vogal ou consoante.  
Nome: Maria Eduarda Freitas
*/

const teclado = require (`prompt-sync`)();

let letra: string = teclado(`Digite alguma letra: `);
 
if (letra == `A` || letra == `E` || letra == `I` || letra == `O` || letra == `U` || letra == `a` || letra == `e` || letra == `i` || letra == `o` || letra == `u`){
    console.log(`A letra digitada é uma vogal!`)
}
else{
    console.log(`A letra digitada é consoante!`)
}
