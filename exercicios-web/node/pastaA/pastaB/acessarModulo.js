const moduloA = require('../../modulo_a')

console.log(moduloA.ola);

const saudacao = require('saudacao')

console.log(saudacao.ola)

// const http = require('http')
// http.createServer((req, res) => {
//     res.write('Bom dia!')
//     res.end()
// }).listen(8080)

//const pastaC = require('./pastaC/index');
//--------Ou----------
const pastaC = require('./pastaC') //Ele procura o arquivo index automaticamente 

console.log(pastaC.ola2);
