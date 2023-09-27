class Pessoa {
    constructor(nome){
        this.nome = nome;
    }

    falar(){
        console.log(`Meu nome é: ${this.nome}`);
    }
}

function criarPessoa(nome){
    this.nome = nome;//joga pro contexto global, pode ser usado em outras partes do código
    //poderia ser usado sem o 'this', mas fica local

    this.getName = function(){
    return console.log(`Meu nome é: ${this.nome}`);
    }
}

const p1 = new criarPessoa('João');
p1.getName();

const p2 = new criarPessoa('Maria');
p2.getName();