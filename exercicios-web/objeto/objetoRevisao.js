//Coleção dinâmica de pares chave/valor

const produto = new Object;
produto.nome = 'Cadeira';
produto['marca do produto'] = 'Genérico';
produto.preco = 228;  

console.log(produto);

delete produto['marca do produto'];
delete produto.preco;

console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'José',
        idade: 40,
        endereco: {
            rua: 'Maranhão',
            lote: 14
        }
    },
    condutores: [{
        nome: 'Júnior',
        idade: 19
    }, {
        nome: 'Maria',
        idade: 36
    }],
    calcularValorDoSeguro: function(){
        //...
    }
}

carro.proprietario.endereco.lote = 1000;
carro['proprietario']['endereco']['rua'] = 'Jardim ouro'

console.log(carro)

console.log(carro.condutores.length);
delete carro.condutores;

console.log(carro);

delete carro.proprietario.endereco;
delete carro.calcularValorDoSeguro;

console.log(carro);
console.log(carro.condutores);//ainda acessa atributos, mesmo indefinidos

//Não acessa propriedade de atributo indefinidos
//console.log(carro.condutores.length);