require('./global')

console.log(minhaApp.saudacao())

minhaApp.nome = 'Eita!' //Se não tiver o Object.freeze, é possível alterar o objeto global
console.log(minhaApp.nome)
