const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');


const Chinesa = dados => dados.pais === 'China'
const mulher = dados => dados.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    const func = funcionarios
        .filter(Chinesa)
        .filter(mulher)
        .reduce(menorSalario)
    
        
    console.log(`Mulher Chinesa com menor salário:`)
    console.log(`id: ${func.id}\n nome: ${func.nome}\n Salário: ${func.salario}`)
})






