//Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

const calculaMedia = vetor => {
    somaTotal = 0;

    for(let i in vetor){
        somaTotal += vetor[i];
    }

    let media = somaTotal/vetor.length;
    return console.log(`A média do vetor é: ${media.toFixed(2)}`);
}

calculaMedia([5, 5, 5, 5, 5]);
calculaMedia([22, 33, 53, 84, 36, 47]);