function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(() => resolve(), tempo)
    })
}

// esperarPor()
//     .then(() => console.log('Executando promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 3...'))

function retornarValor(){
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 2000)
    })
}
async function retornarValorRapido(){
    return 20
}

async function executar() {
    // const valor = await retornarValor();
    const valor = await retornarValorRapido();

    await esperarPor(1000);
    console.log(`Asyn/Await ${valor}...`);
    await esperarPor(1000);
    console.log(`Asyn/Await ${valor + 1}...`);
    await esperarPor(1000);
    console.log(`Asyn/Await ${valor + 2}...`);

    return valor + 3;
}

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor);
}

executar().then(console.log);
executarDeVerdade();
