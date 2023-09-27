const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 9.1
    }, {
        nome: 'Ana',
        nota: 8.4
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Felipe',
        nota: 4.5
    }, {
        nome: 'Gabriel',
        nota: 6.5
    }]
}]

const getnotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getnotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)