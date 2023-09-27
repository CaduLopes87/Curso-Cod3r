const ImprimirResultado = function (nota) {
    if(nota >= 7){
        console.log('Aprovado com', nota, 'pontos!')
    }else {
        console.log('Reprovado com', nota, 'pontos :(')
    }
}

ImprimirResultado(8);
ImprimirResultado(6);
ImprimirResultado('Epa'); //cuidado!!! Fraca tipagem