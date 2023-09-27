//Usando a notação literal do objeto
const obj1 = {

}

console.log(obj1);

//Objeto em JS
console.log(typeof Object, typeof new Object);

const obj2 = new Object //Criando a partir da função construtora
console.log(obj2);

//Funções Construtoras

function Produto(nome, preco, desconto){
    this.nome = nome

    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto);
    }
}

const p1 = new Produto('Caneta', 2, 0.1);
const p2 = new Produto('Notebook', 2998.99, 0.15);

console.log(p1.getPrecoComDesconto());
console.log(p2.getPrecoComDesconto());

//Função Factory

function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase/30) * (30 - faltas)
        }
    }
}

const f1 = new criarFuncionario('Paulo', 3000, 8);
const f2 = new criarFuncionario('Freitas', 800, 0);

console.log(f1.getSalario());
console.log(f2.getSalario());

//Object.create

const filha = Object.create(null);
filha.nome = 'Maria'
console.log(filha);

//Uma função famosa que retorna Objeto:
const fromJSON = JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSON.info);
console.log(fromJSON);