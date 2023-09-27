/*Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.*/

const calculadora = (num1, num2, op) => {
    let resultado = 0;
    let operacao = ''

    switch(op){
        case '+': 
            resultado = num1 + num2;
            operacao = 'soma';
            break;
        case '-': 
            resultado = num1 - num2;
            operacao = 'subtração';
            break;
        case '*': 
            resultado = num1 * num2;
            operacao = 'multiplicação';
            break;
        case '/':
            resultado = (num1 / num2).toFixed(2);
            operacao = 'divisão';
            break;
        default: 
            console.log('Esta operação não é válida.')
            break;
    }
    return console.log(`O resultado da ${operacao} é igual a ${resultado}`);
}

calculadora(2, 3, '+');
calculadora(2, 3, '-');
calculadora(2, 3, '*');
calculadora(2, 3, '/');