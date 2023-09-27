const alunos = [
    {nome: 'João', nota: 7.92},
    {nome: 'Maria', nota: 4.55}
]

//Imperativo
let total1 = 0
for(let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}

console.log((total1/alunos.length).toFixed(2));
//Como é feito é mais importante do que o que é feito

//Declarativo
const getnota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getnota).reduce(soma)
console.log((total2 / alunos.length).toFixed(2))
//O que é feito é mais importante do que como é feito
//Usa o map e o reduce, mas não importa como eles funcionam