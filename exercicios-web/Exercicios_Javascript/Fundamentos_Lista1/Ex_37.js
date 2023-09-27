/*Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.*/

class progressao{
    constructor(n, a1, r){
        let resultadoPA = [];
        let resultadoPG = [];

        this.PA = function(){
            let termoAtual = a1;
            let somaElementosPA = 0;

            for(let i = 0; i < n; i++){
                                
                resultadoPA[i] = termoAtual;
                somaElementosPA += resultadoPA[i];
                termoAtual += r; 
            }
            return console.log(`\nPA gerada: ${resultadoPA}. \nSoma dos elementos da PA: ${somaElementosPA}`);

        }

        this.PG = function (){
            let termoAtual = a1;
            let somaElementosPG = 0;

            for(let i = 0; i < n; i++){

                resultadoPG[i] = termoAtual;
                somaElementosPG += resultadoPG[i];
                termoAtual *= r;
            }
            return console.log(`\nPG gerada: ${resultadoPG}. \nSoma dos elementos da PG: ${somaElementosPG}`);
        }
    }
}

const conta1 = new progressao (5, 1, 2);
conta1.PA();
conta1.PG();