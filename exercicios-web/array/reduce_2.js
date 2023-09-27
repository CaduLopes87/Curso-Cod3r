const alunos = [
    {nome: 'João', nota: 7.8, bolsista: false},
    {nome: 'Roberta', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 5.8, bolsista: true},
    {nome: 'Maria', nota: 3.4, bolsista: false}
]

//Desafio1: Todos os alunos são bolsistas?

const bolsa = alunos.map(a => a.bolsista)

const EBolsista = function(acumulador, atual){
    const resultado = acumulador * atual == 1 ? true : false
    return resultado
}

console.log('Todos são bolsistas?', bolsa.reduce(EBolsista))

//Desafio 2: Algum aluno é bolsita?


const AlgumEBolsista = function(acumulador, atual){

    return acumulador + atual > 0 ? true : false
}

console.log('Algum aluno é bolsista?', bolsa.reduce(AlgumEBolsista))