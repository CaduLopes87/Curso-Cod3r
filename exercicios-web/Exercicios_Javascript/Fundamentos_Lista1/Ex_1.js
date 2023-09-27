//Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
//multiplicação e divisão desses valores.

const operacoes = function (a, b){
    return {
        soma: a + b,
        subtracao: a - b,
        'multiplicação': a * b,
        divisao: a/b 
    }
}

console.log(operacoes(4, 2));