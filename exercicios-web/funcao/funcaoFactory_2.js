function criarProduto(nome, preco){
    return{
        nome,
        preco,//Não precisa colocar dois pontos pois o nome e o valor é o mesmo
        desconto: 0.1
    }
}

console.log(criarProduto(`Sabão em pó`, 10))
console.log(criarProduto(`Cadeira Gamer`, 498.99))