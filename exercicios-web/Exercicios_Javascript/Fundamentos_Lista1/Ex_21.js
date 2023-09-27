/* Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130*/

const valorPlano = idade => {
    let adicional = 0;
    let valorTotal;

    if(idade >= 0 && idade < 10){
        adicional = 80;
    }else if(idade >= 10 && idade <= 30){
        adicional = 50;
    }else if (idade > 30 && idade <= 60){
        adicional = 95;
    }else if (idade > 60){
        adicional = 130;
    }else {
        return console.log('idade inválida.');
    }

    valorTotal = (100 + adicional).toFixed(2).replace('.', ',');
    return console.log(`O valor total do plano é: R$${valorTotal}`);
}

valorPlano(9);
valorPlano(10);
valorPlano(30);
valorPlano(60);
valorPlano(65);
valorPlano(-10);