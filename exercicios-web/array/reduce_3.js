Array.prototype.reduce2 = function(callback){
    let acumulador = this[0];

    for(let i = 1; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
        console.log(acumulador)
    } 
    return acumulador;
}

const alunos = [
    {nome: 'João', nota: 7.8, bolsista: true},
    {nome: 'Roberta', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 5.8, bolsista: true},
    {nome: 'Maria', nota: 3.4, bolsista: true}
]

const bolsa = alunos.map(a => a.bolsista)

const EBolsista = function(acumulador, atual){
    return  acumulador * atual == 1 ? true : false
}

console.log('Todos são bolsistas?', bolsa.reduce2(EBolsista))
