Array.prototype.filter2 = function(callback){
    const newArray = []

    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this) == true){
            newArray.push(this[i])
        }
    }

    return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 3499.39, fragil: true},
    {nome: 'Ipad Pro', preco: 2999.49, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.99, fragil: true},
    {nome: 'Copo de Plástico', preco: 3.99, fragil: false}
]

const eCaro = function(p, indice){
    console.log(`posição: ${indice}, ${p.preco > 2500}`)
    return p.preco > 2500
}

const eFragil = function (p){
    return p.fragil == true
}

console.log(produtos.filter2(eCaro).filter2(eFragil))