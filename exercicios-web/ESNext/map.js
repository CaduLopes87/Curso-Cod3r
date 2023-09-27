const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('Angular', {framework: true})

console.log(tecnologias.react)
console.log(tecnologias.get('react'))
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function(){}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') //Não aceita repetição de chave
console.log(chavesVariadas)

chavesVariadas.set(456, 'b') // Mas aceita repetição de valor
console.log(chavesVariadas)