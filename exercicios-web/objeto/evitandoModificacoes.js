//Object.preventExtesion -- Não permite adicinar atributos
//Mas permite excluir e modificar

const produto = Object.preventExtensions({
    nome: 'Sabão', preco: 4.99, tag: 'Promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar';
delete produto.tag;

console.log(produto);

//Object.seal

const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa); //Não adiciona e nem exclui, mas modifica

console.log('Selado:', Object.isSealed(pessoa));

pessoa.nome = 'Arthur'
pessoa.sobrenome = 'Aguiar'
delete pessoa.idade;

console.log(pessoa);

//Object.freeze ==> selado + valores constantes
//Não adiciona, nem remove e nem modifica