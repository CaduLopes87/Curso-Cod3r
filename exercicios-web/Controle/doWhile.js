function randomicoEntre(min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;

do {
    opcao = randomicoEntre(-4, 10);
    console.log('O valor gerado foi:', opcao);
}while(opcao != -4)
