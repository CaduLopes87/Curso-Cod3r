let valor; //Não inicializada

console.log(valor); //undefined
//console.log(valor2); --- is not defined pq nem foi declarada

valor = null; //ausência de valor, não aponta pra nenhum lugar da memória

console.log(valor);
//console.log(valor.toString()); //Erro! pq a variável é nula, não é possível acessar nulo e indefinido 

const produto = {}
console.log(produto.preco);
console.log(produto);

produto.preco = 5.59;

console.log(produto);

produto.preco = undefined; //evitar atribuir undefined

console.log(!!produto.preco);
console.log(produto);

produto.preco = null; //sem preço

console.log(!!produto.preco);
console.log(produto);