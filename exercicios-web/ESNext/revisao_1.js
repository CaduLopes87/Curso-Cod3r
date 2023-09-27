//let e const 
{
    var a = 1
    let b = 2
    console.log('Escopo de bloco, apenas dentro:', b)
}

console.log(a)
console.log('Não tem acesso ao b fora do bloco', /*b*/)

// Template String

const produto = 'IPad'
console.log(`\n${produto} é caro`)

//Destructuring

const [l ,e, ...tras] = 'cod3r'
console.log(l, e, tras)

const [x, y, , z] = [1, 2, 3, 4]
console.log(x, y, z)

const {idade: i, nome} = {nome: 'Ana', idade: 2}
console.log(i, nome) //renomeou idade para i