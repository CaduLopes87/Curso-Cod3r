function soma1(a, b, c){ //Gerar um valor padrão
    //Também é muito utilizada ainda hoje
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
}
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)); //para parametros 0, a função pega os valores padrão, errado

//estratégia 2, 3 e 4 para gerar valor padrão

function soma2(a, b, c){
    a = a != undefined ? a : 1;//variável ternaria
    b = 1 in arguments ? b : 1;
    c = isNaN(c) ? 1 : c;
    return a + b + c;
}

console.log(soma2(), soma2(3), soma2(2, 4, 6), soma2(0, 0, 0)); //Agora pega os valores de 0 também

// valor padrão es2015
// Dar preferência a essa
function soma3(a = 1, b = 1, c = 1){
    return a + b + c;
}

console.log(soma2(), soma2(3), soma2(2, 4, 6), soma2(0, 0, 0)); //Agora pega os valores de 0 também
