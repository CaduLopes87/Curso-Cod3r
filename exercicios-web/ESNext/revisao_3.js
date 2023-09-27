// ES8: Object.values / Object.entries

const obj = { a: 1, b: 2, c: 3}

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Nelhorias na notação literal

const nome = 'Carla'
const idade = 15

const pessoa = {
    nome: nome, // Repetiu
    idade,      //Não precisa repetir
    ola(){
        return `Olá, ${nome}`
        //A função pode ser declarada direto
    }
}
console.log(pessoa)
console.log(pessoa.ola())

// Class

class animal {
    constructor(name){
        this.name = name
    }
}
class cachorro extends animal {
    constructor(name, raca){
        super(name)
        this.raca = raca
    }
    falar(){ 
        return `Au au! Sou ${this.name} e ${this.raca}`
    }
} 

const c1 = new cachorro('Max', 'Pitbul')
console.log(c1.falar())