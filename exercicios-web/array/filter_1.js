const produtos = [
    {nome: 'Notebook', preco: 3499.39, fragil: true},
    {nome: 'Ipad Pro', preco: 2999.49, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.99, fragil: true},
    {nome: 'Copo de Plástico', preco: 3.99, fragil: false}
]

console.log(produtos.filter(function(p){
    //return p.preco > 2500
}))

const eCaro = function(p){
    return p.preco > 2500
}

const eFragil = function (p){
    return p.fragil == true
}

console.log(produtos.filter(eCaro).filter(eFragil))