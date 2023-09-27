/*Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.*/

const calculaNotas = valor => {
    let cem = 0;
    let cinquenta = 0;
    let vinte = 0;
    let dez = 0; 
    let cinco = 0;
    let um = 0;
    let armazenaValor = 0;

    while (armazenaValor != valor){
        if((armazenaValor + 100) <= valor){
            armazenaValor += 100;
            cem++;
        }else if ((armazenaValor + 50) <= valor){
            armazenaValor += 50;
            cinquenta++;
        }else if ((armazenaValor + 20) <= valor){
            armazenaValor += 20;
            vinte++;
        }else if ((armazenaValor + 10) <= valor){
            armazenaValor += 10;
            dez++;
        }else if ((armazenaValor + 5) <= valor){
            armazenaValor += 5;
            cinco++;
        }else if ((armazenaValor + 1) <= valor){
            armazenaValor += 1;
            um++;
    }   }

    return console.log(`    ${cem} nota(s) de R$100
    ${cinquenta} nota(s) de R$50
    ${vinte} nota(s) de R$20
    ${dez} nota(s) de R$10
    ${cinco} nota(s) de R$5
    ${um} nota(s) de R$1
    Total: R$${armazenaValor}`)
}

calculaNotas(200);
calculaNotas(1253);
calculaNotas(877);