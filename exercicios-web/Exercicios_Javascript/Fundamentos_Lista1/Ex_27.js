/* Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.*/

const comparaAltura = (altura1, taxa1, altura2, taxa2) => {
    let t = 0;
    let aMaior = 0;
    let aMenor = 0;
    let txMaior = 0;
    let txMenor = 0;

    if(altura1 < altura2){
        console.log('\nA criança 1 é menor');
        aMenor = altura1;
        txMenor = taxa1 + 100;
        aMaior = altura2;
        txMaior = taxa2 + 100;
    }else if(altura1 > altura2){
        console.log('\nA criança 2 é menor');
        aMenor = altura2;
        txMenor = taxa2 + 100;
        aMaior = altura1;
        txMaior = taxa1 + 100;
    }else{
        if(taxa1 > taxa2){
            return console.log(`\nA criança 1 ultrapassará a criança 2 em 1 ano.`);
        }else if(taxa2 > taxa1){
            return console.log(`\nA criança 2 ultrapassará a criança 1 em 1 ano.`);
        }else{
            return console.log('\nAs crianças ficarão do mesmo tamanho.');
        }
    }
    //cálculo do tempo de crescimento
    if(txMenor > txMaior){
        while(aMenor < aMaior){
            aMenor *= (txMenor/100);
            aMaior *= (txMaior/100);
            t++; 
        }
    }else{
        return console.log('A criança menor nunca ultrapassará a maior.');
    }

    return console.log(`A criança menor ultrapassará a maior em ${t} ano(s).`)
}

comparaAltura(145, 10, 158, 5);
comparaAltura(123, 8, 164, 7);
comparaAltura(140, 5, 140, 8);
comparaAltura(154, 5, 148, 7);
comparaAltura(140, 10, 140, 10);
comparaAltura(140, 5, 145, 10);

//altura1 = tx1 * t1
//altura2 = tx2 * t2
//console.log(145*0.1, )