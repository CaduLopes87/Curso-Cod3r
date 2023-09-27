//Criar uma função para receber um número entre 1 e 12 e retornar o mês correspondente

const { get } = require("lodash");

const getMes = numMes => {
    let mesCorrespondente = '';

    switch(numMes){
        case 1: mesCorrespondente = 'Janeiro';
            break;
        case 2: mesCorrespondente = 'Fevereiro';
            break;
        case 3: mesCorrespondente = 'Março';
            break; 
        case 4: mesCorrespondente = 'Abril';
            break;
        case 5: mesCorrespondente = 'Maio';
            break;
        case 6: mesCorrespondente = 'Junho';
            break;
        case 7: mesCorrespondente = 'Julho';
            break;
        case 8: mesCorrespondente = 'Agosto';
            break;
        case 9: mesCorrespondente = 'Setembro';
            break;
        case 10: mesCorrespondente = 'Outubro';
            break;
        case 11: mesCorrespondente = 'Novembro';
            break;
        case 12: mesCorrespondente = 'Dezembro';
            break;
        default: mesCorrespondente = 'Mês Inválido';
    }
    return console.log(`mês ${numMes}: ${mesCorrespondente}`);
}

getMes(1);
getMes(7);
getMes(14);