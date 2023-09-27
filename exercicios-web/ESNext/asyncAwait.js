//Com Promise
const http = require('http');
const { get } = require('lodash');

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = "";
    
            res.on('data', dados => {
                resultado += dados;
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

//Recurso do ES8
//Objetivo de simplificar o uso de Promise

let obterAlunos = async () => {
    const TA = await getTurma('A');
    const TB = await getTurma('B');
    const TC = await getTurma('C');

    return [].concat(TA, TB, TC);
} //retorna um objeto async function

obterAlunos()
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
