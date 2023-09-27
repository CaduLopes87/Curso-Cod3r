/*Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.*/

//delta = b² - 4 a c
//x1 = -b + raiz(delta)       x2 = - b - raiz(delta)
//     ----------------            ----------------
//          2a                            2a

const Bhaskara = function (ax2, bx, c){
    const delta = Math.pow(bx, 2) - (4 * ax2 * c)

    if(delta < 0){
        console.log('Delta é negativo.');
    }else {

        const x0 = (- bx + Math.sqrt(delta))/ (2*ax2);
        const x1 = (- bx - Math.sqrt(delta))/ (2*ax2);

        return [x0, x1]
    }
}

let Resultado = Bhaskara(2, -5, 2)

//25-16 = 9 ==> 5 + 3 = 8/2*2 = 2
//          ==> 5 - 3 = 2 / 4 = 0.5

//console.log(Bhaskara(2, -5, 2));

for(let i in Resultado){
    console.log(`X${i} = ${Resultado[i]}`)
}

Resultado = Bhaskara(1, -6, 4)

for(let i = 0; i < Resultado.length; i++){
    console.log(`X${i+1} = ${Resultado[i].toFixed(2)}`)
}
