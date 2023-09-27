const notas = [6.4, 7.8, 9.5, 5.3, 8.2];

for (let i in notas){
    console.log(`${i}º nota: ${notas[i]}`);
    //console.log(typeof i);
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Carvalho',
    idade: '29',
    peso: '64'
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`);
}

