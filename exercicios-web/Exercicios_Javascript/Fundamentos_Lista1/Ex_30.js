//Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

const pegaMaiorEMenor = function(vetor){
    let maior = vetor[0];
    let menor = vetor[0];
    
    for(let i = 0; i < vetor.length; i++){
        menor = vetor[i] < menor ? vetor[i] : menor;
        maior = vetor[i] > maior ? vetor[i] : maior;
    }
    return console.log(`\nMaior encontrado: ${maior}. \nMenor encontrado: ${menor}.`)
}

pegaMaiorEMenor([3, 94, 102, 7, 32, 91, 5, 18, 22]);

numeros = [14, 5, 8, 18, 23, 63, 13, 7, 28, 52]
pegaMaiorEMenor(numeros);