class avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class pai extends avo {
    constructor(sobrenome, profissao = 'professor'){
        super(sobrenome)
        this.profissao = profissao

    }
}

class filho extends pai {
    constructor(){
        super('Silva')
    }
}

const Filho = new filho

console.log(Filho);

const Pai = new pais
console.log(Pai);