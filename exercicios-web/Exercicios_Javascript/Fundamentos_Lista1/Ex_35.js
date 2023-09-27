/*Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos
inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha
e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao
final das operações imprima os vetores no console.*/

const adicionaValores = function(pilha, adiciona){
    //Forma 1, sem push

    for(let i = 0; i < adiciona.length; i++){
        let j = pilha.length;

        pilha[j] = adiciona[i];
        j++;
    }
    return console.log(pilha);
}

const adicionarVetor = (vetorInicial, vetorAdicionar) => {
    //Forma 2, com push

    console.log('\nVetor Pilha:',  vetorInicial);

    for(let i = 0; i < vetorAdicionar.length; i++){
        vetorInicial.push(vetorAdicionar[i]);
    }

    console.log('Vetor Adicional:', vetorAdicionar);
    console.log('Vetor Resultado:', vetorInicial);
}

vetorPilha = [1, 2, 3, 4, 5];
vetorAdiciona = [6, 7, 8, 9, 10];

vetorPilha2 = [1, 2, 3, 4, 5];
vetorAdiciona2 = [6, 7, 8, 9, 10];

adicionaValores(vetorPilha, vetorAdiciona);
adicionarVetor(vetorPilha2, vetorAdiciona2);