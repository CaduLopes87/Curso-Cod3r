//function Declaration
//Pode ser chamada mesmo antes de declarar
//O interpretador do JS carrega todas as funções primeiro

console.log(soma(3,5));

function soma(x, y){
    return x + y;
}

//Function Expression
//Não pode ser chamada antes de declarar pq é uma constante

const sub = function(x, y){
    return x - y;
}
console.log(sub(4, 5));
//Named function Expression
//Também não pode ser chamada antes 

const multi = function multi(x ,y){
    return x * y;
}
console.log(multi(8, 4));
