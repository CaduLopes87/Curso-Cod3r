const alunos = [
    {nome: 'João', nota: 7.8, bolsista: false},
    {nome: 'Roberta', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 5.8, bolsista: true},
    {nome: 'Maria', nota: 3.4, bolsista: false}
]

const resultado = alunos.map (a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual);
    return acumulador + atual
})