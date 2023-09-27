const fs = require('fs');
const path = require('path');

const caminho  = path.join(__dirname, 'dados.txt');


function lerConteudo() {
    return new Promise( resolve => {
        fs.readFile(caminho, function(_, conteudo){
            resolve(conteudo.toString());
        });

    })
}

lerConteudo()
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)