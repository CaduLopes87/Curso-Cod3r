// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite à função acessar e manipular variáveis externas à função

//Contexto léxico em ação

const x = 'global';

function fora(){
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro;
}

console.log(fora());

const minhaFuncao = fora();
console.log(minhaFuncao());