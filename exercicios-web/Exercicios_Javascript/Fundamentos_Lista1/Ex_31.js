/*Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/

const qtdNegativos = vetor => {
    let contaNegativos = 0;

    for(let i in vetor){
    contaNegativos = vetor[i] < 0 ? contaNegativos + 1 : contaNegativos; 
    }

    return console.log(`O vetor tem ${contaNegativos} números negativos.`);
}

qtdNegativos([-2, 32, -6, 4, 6, -14, 15, 28, -5]);
qtdNegativos([-1, -2, -3, -4, -5, 1, 2])