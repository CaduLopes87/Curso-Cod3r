const randomicoEntre = function (min = 0, max = 1000){
    const valor = Math.random() * (max-min) + min;
    return Math.floor(valor);
}

//console.log(randomicoEntre(0, 10));

let opcao = 0;

while (opcao != -1){
    opcao = randomicoEntre(-1, 10);
    console.log(opcao);
}

