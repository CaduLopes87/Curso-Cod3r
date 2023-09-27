const aprovados = ['Luan', 'Bia', 'Daniel', 'Ana']

aprovados.forEach(function(nome, indice, array, x){//a função callback recebe 3 parâmetros (nome do elemento, indice do elemento e o array completo)
    console.log(`${indice + 1}: ${nome}`);
    //console.log(array)//mostra o array completo 
    //console.log(x); //Não existe indíce a partir do quarto
})

aprovados.forEach(nome => console.log(nome))
//provados.forEach(indice => console.log(indice))
//aprovados.forEach(l => console.log(l))
//aprovados.forEach((l, n) => console.log(l, n))

const exibirAprovados = aprovado => console.log('2', aprovado);

aprovados.forEach(exibirAprovados);