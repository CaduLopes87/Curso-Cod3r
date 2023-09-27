function real (partes, ...valores){
    const resultado = []
    const ultimaParte = partes.length - 1
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    resultado.push(partes[ultimaParte])
    return resultado.join('')
}

const preco = 29.9
const precoParcela = 11

console.log(real `1x de ${preco} ou 3x de ${precoParcela}!!`)