/* Uma função que recebe dois parâmetros: horas trabalhadas e quano recebe por hora. Retornar a String: 'Salário igual a R$X,00 */

const salario = function (horasTrab, SalPorHora){
    const salario = (horasTrab * SalPorHora).toFixed(2).replace('.', ',')
    return console.log(`Salário igual a R$${salario}`)
}

salario(150, 40.5);