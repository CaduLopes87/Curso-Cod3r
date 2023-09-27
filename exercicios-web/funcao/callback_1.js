const fabricantes = ['Mercedes', 'Audi', 'BMW'];

function imprimir(nome, indice){
    console.log(`${indice + 1}: ${nome}`)
}

fabricantes.forEach(imprimir);
//ou
fabricantes.forEach(function (fabricante){
    return console.log(fabricante);
})
//ou
fabricantes.forEach(fabricante => console.log(fabricante))