//pesspa -> 123 -> {...} constante aponta para o endereço de memória que aponta para o objeto

const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro' //altera somente o objeto
console.log(pessoa)

//pessoa -> 456 -> {...} 
//pessoa = {nome: 'Ana'} //tenta apontar para outro endereco
// gera erro

Object.freeze(pessoa); //o objeto não pode mais ser alterado

pessoa.nome = 'Maria' //Comando ignorado
console.log(pessoa.nome);

pessoa.endereco = 'Rua ABC'//ignorado
delete pessoa.nome; //ignorado

console.log(pessoa);

const pessoaConstante = Object.freeze({nome: 'João'}) //Já define objeto constante
pessoaConstante.nome = 'Maria' //Ignorado

console.log(pessoaConstante);