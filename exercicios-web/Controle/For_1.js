let contador = 1;
while (contador <= 10){
    console.log(`contador = ${contador}`);
    contador++;
}

console.log('valor de fora:', contador);

contador = 1;

for (let i = 1; i <= 10; i++){
    console.log(`contador for = ${contador}`);
    contador++;
}

const notas = [6.4, 7.8, 9.5, 5.3, 8.2];

for (let i = 0; i < notas.length; i++){
    console.log(`${i+1}º nota`, notas[i]);
    //console.log('Tamanho do array:', notas.length);
}