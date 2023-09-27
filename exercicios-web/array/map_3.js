Array.prototype.map2 = function(callback){
    let novoArray = []

    for(let i = 0; i < this.length; i++){
        
        novoArray.push(callback(this[i], i, this))
    }
    return novoArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 14.90}',
    '{"nome": "Kit de Lapis", "preco": 18.49}',
    '{"nome": "Caneta", "preco": 2.99}'
]


//Retornar um array apenas com os preços

const getPrecos = produto => {
    produto = JSON.parse(produto)
    return produto.preco
}


console.log(carrinho.map2(getPrecos))