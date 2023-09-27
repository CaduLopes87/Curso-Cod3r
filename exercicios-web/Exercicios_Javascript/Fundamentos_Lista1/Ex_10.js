//Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
//ou false.

const verificarDivisaoPorTres = num_Recebido => {
    
    const divisao = num_Recebido % 3

    if (divisao == 0){
        return console.log(true)
    }else {
        return console.log(false)
    }
}

verificarDivisaoPorTres(9);
verificarDivisaoPorTres(8);