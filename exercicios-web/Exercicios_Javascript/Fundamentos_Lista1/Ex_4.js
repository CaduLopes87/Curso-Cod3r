//Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
//e o resto da divisão destes dois valores.

const divisao = function (dividendo, divisor){
    return {
        Resultado: dividendo / divisor,
        resto: dividendo % divisor
    }
}

console.log(divisao (4, 2));
console.log(divisao(5, 2));
console.log(divisao(10, 6));
