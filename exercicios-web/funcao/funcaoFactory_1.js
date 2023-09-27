const prod1 = {
    nome: 'Abacate',
    preco: 2
}

const prod2 = {
    nome: 'maça',
    preco: 4
}

//Jeito errado de declarar muitos objetos pois é muito longo
//Pode usar a função factory para isso

function criarPessoa(){
    return {
        nome: 'Ana',
        Sobrenome: 'Costa'
    }
}

console.log(criarPessoa()); //Função Factory retorna um objeto

//Exercício com parâmetros personalizado

function carroVendido(modelo, preco, custo){
    return {
        Modelo: modelo,
        Valor: preco,
        custoDeEntrada: custo,
        Lucro: preco - custo
    }
}

console.log(carroVendido('Ford Ka', 22000, 14000));
console.log(carroVendido('Astra', 35000, 28000));