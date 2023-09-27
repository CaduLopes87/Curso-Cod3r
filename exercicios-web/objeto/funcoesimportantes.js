const pessoa = {
    nome: 'Rebeca',
    idade: 30,
    peso: 65
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(e => {
    console.log((`${e[0]}: ${e[1]}`))
})

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log((`${chave}: ${valor}`))
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2000'
})

pessoa.dataNascimento2 = '01/01/2010';
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

Object.defineProperty(pessoa, 'dataNascimento2', {
    enumerable: false, //não mostra a chave
    writable: true,
    value: '01/01/2000'
})

pessoa.dataNascimento2 = '01/01/2010';
console.log(pessoa.dataNascimento2);
console.log(Object.keys(pessoa));

//Object.assign (ECMASript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}//subscreveu o a após a concatenação
const obj = Object.assign(dest, o1, o2)

console.log(obj);

Object.freeze(obj);
obj.c = 123;

console.log(obj);