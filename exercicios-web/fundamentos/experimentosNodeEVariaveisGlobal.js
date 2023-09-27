let a = 3;

global.b = 123;

this.c = 456; //this exporta a variável pra fora do arquivo, fica global
this.d = false;
this.e = 'teste';

console.log(a);
console.log(global.b);

console.log(this.c);
console.log(module.exports.c);//this e module.exports são iguais
console.log(module.exports === this);
console.log(module.exports);

//cria uma variável global, sem var e sem let
abc = 4; //não fazer isso, pode dar ruim

module.exports = {f: 456, g: true, h: 'teste'}; //assim é mais comum
console.log(module.exports);