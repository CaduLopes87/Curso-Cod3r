/*Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.*/

const concatenar = (vet1, vet2, vet3) => {
    let resultado = []

    for (let i in vet1){
        for(let j in vet2){
            for(let t in vet3){
                resultado = vet1.concat(vet2).concat(vet3);
            }
        }
    }
    return console.log(resultado);
}

let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['um', 'dois', 'três', 'quatro']
let vetorDouble = [2.2, 4.4, 6.6, 8.8]; 

concatenar(vetorDouble, vetorInteiro, vetorString);
