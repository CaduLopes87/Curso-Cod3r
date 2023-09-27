/*Pedro joga N jogos de basquete por temporada. Para saber como ele está progredindo, ele mantém
registro de todas as pontuações feitas por jogo. Após cada jogo, ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)*/

//const PontuacaoTotal = '10, 12, 20, 5, 30, 25, 8, 3'

const filtroPontuacao = function (PontuacaoTotal){
    pontuacao = PontuacaoTotal.split(',');

    let RecordAtingido = 0;
    let menorPontuacao = 0;

    console.log('Pontuação recebida:', pontuacao);

    for(let i = 0; i < pontuacao.length; i++){

        if(i > 1 && pontuacao[i] >= pontuacao[i - 1]){
            RecordAtingido++;
        }else if(pontuacao[i] == 0 || pontuacao[i] <= pontuacao[i - 1]){
            menorPontuacao = i;
        }
    }

    return [RecordAtingido, menorPontuacao]
}

const Resultado = filtroPontuacao('10, 12, 20, 5, 30, 25, 8, 3');

console.log(`O recorde de pontução foi batido ${Resultado[0]} vezes`);
console.log(`A menor pontuação está na ${Resultado[1] + 1}º posição`);