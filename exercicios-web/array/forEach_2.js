Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}


const aprovados = ['Luan', 'Bia', 'Daniel', 'Ana']


aprovados.forEach2(function(nome, indice){//a função callback recebe 3 parâmetros (nome do elemento, indice do elemento e o array completo)
    console.log(`${indice + 1}: ${nome}`)
  })