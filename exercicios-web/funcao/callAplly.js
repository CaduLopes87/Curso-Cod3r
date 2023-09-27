function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 1999.99,
    desc: 0.1,
    getPreco
}

console.log(getPreco());//this.preco não está definido dessa forma

global.preco = 20;
global.desc = 0.1; //agora estão definidos manualmente

console.log(getPreco());

console.log(produto.getPreco());//Passa os atributos do objeto

const carro = {preco: 42000, desc: 0.15}
console.log(getPreco.call(carro)); //mudam o contexto para o objeto carro
console.log(getPreco.apply(carro));

console.log(getPreco.call(carro, 0.17, '$'));//Define o contexto e os parâmetros da função

console.log(getPreco.apply(carro, [0.17, '$']));//Define os parâmetros dentro deum array