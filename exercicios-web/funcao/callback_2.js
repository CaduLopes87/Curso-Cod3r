const notas = [7.7, 8.2, 5.6, 3.8, 4.5, 8.9, 9.0]

//sem callback

const notasBaixas = []

for (let i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas);

//Com Callback

const notasBaixas2 = notas.filter(function(nota){
    return nota < 8
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 5)
console.log(notasBaixas3); 