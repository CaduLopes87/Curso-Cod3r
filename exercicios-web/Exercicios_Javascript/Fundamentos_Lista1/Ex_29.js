/*Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.*/

const veIntervalo = function (vetor){
    let dentro = 0;
    let fora = 0;

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] >= 10 && vetor[i] <= 20){
            dentro++;
        }else{
            fora++;
        }
    }
    return console.log(`Quantidade dentro: ${dentro}. \nQuantidade fora: ${fora}`)
}

numeros = [3, 94, 102, 7, 32, 91, 5, 18, 22]
veIntervalo(numeros);

numeros2 = [14, 5, 8, 18, 23, 63, 13, 7, 28, 52]
veIntervalo(numeros2);