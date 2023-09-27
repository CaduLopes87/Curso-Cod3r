/*Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.*/

function multiplica(vetor, numInt){
    let multiplicado = []

    for(let i in vetor){
        multiplicado[i] = vetor[i] * numInt;
    }

    return console.log(`\nVetor inicial: ${vetor}.\nVetor multiplicado completo: ${multiplicado}`);
}

const multiplicaCondicional = (vetor2, numInt2) => {
    let multiplicado = []

    for(let i in vetor2){
        if(vetor2[i] > 5){
            multiplicado[i] = vetor2[i] * numInt2;
        }else{
            multiplicado[i]  = vetor2[i];
        }
    }
    return console.log(`\nVetor inicial: ${vetor2}.\nVetor multiplicado se > que 5: ${multiplicado}`);

}

const vetorInicial = [1, 2, 3, 4, 5, 6, 7, 8];

multiplica(vetorInicial, 2);
multiplicaCondicional(vetorInicial, 2);