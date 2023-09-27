const prod1 = {};
prod1.nome = "Celular Ultra Mega"; //Atribui valores de forma dinâmica
prod1.preco = 1459.90; //cria uma chave (preco) e um identificador (1459.90)
prod1['Desconto Imperdível'] = '40%'; //Evitar atributos com espaço

console.log(prod1);

const prod2 = {
    
    nome: 'Camisa Polo',
    preco: 79.99,
    obj: {
        marca: 'society',
        obj: {
            tecido: 'Algodão'
        }
    } //exemplo de estrutura com nome repetido

}

console.log(prod2);