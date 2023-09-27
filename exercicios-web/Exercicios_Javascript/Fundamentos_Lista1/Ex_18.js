/*Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’ */

const escreveNum = num => {
    switch(num){
        case 0: console.log(`${num} --> Zero`);
            break;
        case 1: console.log(`${num} --> Um`);
            break;
        case 2: console.log(`${num} --> Dois`);
            break;
        case 3: console.log(`${num} --> Três`);
            break;
        case 4: console.log(`${num} --> Quatro`);
            break;
        case 5: console.log(`${num} --> Cinco`);
            break;
        case 6: console.log(`${num} --> Seis`);
            break;
        case 7: console.log(`${num} --> Sete`);
            break;
        case 8: console.log(`${num} --> Oito`);
            break;
        case 9: console.log(`${num} --> Nove`);
            break;
        case 10: console.log(`${num} --> Dez`);
            break;
        default: console.log(`${num} --> Número fora do intervalo`);
            break;
    }
}

escreveNum(-10);
escreveNum(0);
escreveNum(1);
escreveNum(2);
escreveNum(3);
escreveNum(4);
escreveNum(5);
escreveNum(6);
escreveNum(7);
escreveNum(8);
escreveNum(9);
escreveNum(10);
escreveNum(11);