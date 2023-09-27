//Função em JavaScript é First-Class Objects (Citizens)
//Higher-order Function

//criar de forma literal
function fun1(){

}

//possível armazenar em uma variável
const fun2 = function(){

}

//armazenar dentro de um array

const array = [function (a, b) {return a + b}, fun1, fun2]//armazena funções no array

console.log(array[0](2, 3)); //chama a função da posição 0 com os parametros

// Armazenar em um atributo de objeto

const obj = {}

obj.falar = function(){return 'Opa!'} //cria dinamicamente

console.log(obj.falar());

// Passar função como parâmetro

function run(fun){
    fun()
}

run(function() {console.log('Executando...')})

// Uma função pode retornar/conter uma outra função

function soma(a ,b){
    return function (c){
        console.log(a + b + c);
    }
}

soma(2, 3)(4)

const cincoMais = soma (2, 3);
cincoMais(4); //duas maneiras de fazer função que retorna função