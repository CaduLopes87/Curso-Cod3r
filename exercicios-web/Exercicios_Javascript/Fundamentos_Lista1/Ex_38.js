/* Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.*/

const imprimeImpar = (inicio = 0, fim = 100) => {
    if(inicio > fim){
        let temporaria = inicio;
        inicio = fim;
        fim = temporaria;
    }else if (inicio == fim){
        return console.log('\nIntervalo Inválido.');
    }
    
    let armazenaImpar = []
    let geraValores = inicio;

    for(let i = inicio; i <= fim; i++){
        if(geraValores != 0 && geraValores % 2 != 0){
            armazenaImpar.push(geraValores);
        }
        geraValores += 1;
    }
    return console.log(`\nIntervalo: de ${inicio} a ${fim}. \nValores Ímpares: ${armazenaImpar}`);
}

imprimeImpar();
imprimeImpar(20, 10);
imprimeImpar(100)
imprimeImpar('um')