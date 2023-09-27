/*Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.*/

const trocaValores = (vetor1, vetor2) =>{
   
    console.log(`\nVetor Inicial 1: ${vetor1}.\nVetor Inicial 2: ${vetor2}.`);

    if(vetor1.length == vetor2.length){
        for(let i = 0; i < vetor1.length; i++){
            let tamanho = vetor1.length;

            vetor2[tamanho] = vetor1[i];
            vetor1[i] = vetor2[i];
            vetor2[i] = vetor2[tamanho];
        }
        vetor2.pop();

        console.log(`\nVetor trocado 1: ${vetor1}.\nVetor trocado 2: ${vetor2}.`)
    }else{
        return console.log('\nO vetores possuem tamanhos diferentes.')
    }
}

const vet1 = [1, 2, 3, 4, 5];
const vet2 = [5, 4, 3, 2, 1];
const vet3 = [5, 4, 3, 2, 1, 0];

trocaValores(vet1, vet2);
trocaValores(vet1, vet3);