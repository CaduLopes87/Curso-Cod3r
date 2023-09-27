//Função que recebe a idade em anos e reorna em dias -> 1 ano = 365 dias

const converteIdade = (idadeAnos) => {
    let idadeDias = 0;
    idadeDias = idadeAnos * 365
    return console.log(`A idade de ${idadeAnos} ano(s) em dias é: ${idadeDias} dias`);
}

converteIdade(1);
converteIdade(10);
converteIdade(25);