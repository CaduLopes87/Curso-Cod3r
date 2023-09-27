//Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares

const verificaNum = function(numeros){
    let Qtdpares = 0;
    let Qtdimpares = 0;

    for(let i in  numeros){

        if((numeros[i] % 2) == 0){
            Qtdpares++;
        }else{
            Qtdimpares++;
        }
    }
    console.log(`\nTotal de Pares: ${Qtdpares}`);
    console.log(`Total de Ímpares: ${Qtdimpares}`);
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
verificaNum(numeros);

numeros = [3, 94, 102, 7, 32, 91, 5, 18, 22]
verificaNum(numeros);
