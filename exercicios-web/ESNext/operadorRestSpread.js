// Operador ... rest (juntar)/spread(espalhar)
// Usar rest com parâmetro de função 

// Usar spread com objetos

const funcionarios = { nome: 'Maria', salario: 2459.60 }
const clone = { ativo: true, ...funcionarios}

console.log(clone)

clone.nome = 'josé'

console.log(funcionarios)
console.log(clone)

// Usar spread com array

const grupoA = ['João', 'Pedro', 'Glória']
const grupoFinal = ['Maria', ...grupoA, 'Roberta']

console.log(grupoFinal)