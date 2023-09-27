/*Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.*/

const anuidade = mes => {
    let valorPadrao = 1000;
    let montante = 0;
    let tempo = 0;
    let nomeMes = '';
    let taxa = 0.05;

    if(mes == 1){
        return console.log('Anuidade paga antes do vencimento. Tudo certo!') 
    }else if (mes == 2){
        tempo = 1;
        nomeMes = 'Fevereiro';
    }else if (mes == 3){
        tempo = 2;
        nomeMes = 'Março';
    }else if(mes == 4){
        tempo = 3;
        nomeMes = 'Abril';
    }else if(mes == 5){
        tempo = 4;
        nomeMes = 'Maio';
    }else if (mes == 6){
        tempo = 5;
        nomeMes = 'Junho';
    }else if (mes == 7){
        tempo = 6;
        nomeMes = 'Julho';
    }else if (mes == 8){
        tempo = 7;
        nomeMes = 'Agosto';
    }else if (mes == 9){
        tempo = 8;
        nomeMes = 'Setembro'
    }else if (mes == 10){
        tempo = 9;
        nomeMes = 'Outubro'
    }else if (mes == 11){
        tempo = 10;
        nomeMes = 'Novembro'
    }else if(mes == 12){
        tempo = 11;
        nomeMes = 'Dezembro'
    }else {
        return console.log('Mês inválido');
    }
    
    montante = (valorPadrao * Math.pow((1+taxa), tempo)).toFixed(2).replace('.', ',');
    
    return console.log(`Pago em ${nomeMes} - Total: R$${montante}`);
}

anuidade(4);
anuidade(8);
anuidade(1);
//M C (1+i)^t