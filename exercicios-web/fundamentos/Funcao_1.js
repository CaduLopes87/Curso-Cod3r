//Função sem retorno

function ImprimirSoma(a, b){

    console.log(a+b);
}

ImprimirSoma(2, 3);
ImprimirSoma(2); //Soma 2 com um número indefinido = NaN
ImprimirSoma(2,5,6,8,4); //Pega só os dois primeiros
ImprimirSoma(); //Soma dois número indefinidos = NaN

//Função com retorno

function Soma(a, b = 0){
    return a + b;
} 

console.log(Soma(2, 3));
console.log(Soma(2)); //b é igual a 0 quando não definido
