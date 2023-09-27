console.log(module.exports === this);
console.log(module.exports === exports)

console.log(module.exports)
this.a = 1;
exports.b = 2;
module.exports.c = 3;

exports = null; //muda a referência para outro objeto

console.log(module.exports) //Mas é este que é exportado

exports = {
    nome: 'Ana'
}

console.log(module.exports) //Continua o mesmo

module.exports = {
    nome: 'Maria'
}

console.log(module.exports) //Agora mudou a referência