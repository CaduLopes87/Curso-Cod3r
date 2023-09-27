const soma = function (x ,y){
    return x + y;
}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(2, 3);
imprimirResultado(4, 3, soma);
imprimirResultado(4, 3, function(x, y){
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)

const Pessoa = {
    falar: function(){
        console.log('opa!')
    }
}

Pessoa.falar();