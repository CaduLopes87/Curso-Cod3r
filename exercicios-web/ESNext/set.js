//Não aceita repetição / Não indexada

const times = new Set()

times.add('Vasco')
times.add('Palmeiras').add('São Paulo').add('Corinthians')
times.add('Framengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('framengo'))
console.log(times.has('Framengo'))
times.delete('Vasco')
console.log(times.has('Vasco'))

const nomes = ['Ana', 'Julia', 'Lucas', 'Ana']
const nomesSet = new Set(nomes)

console.log(nomesSet)