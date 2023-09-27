const valor = 'global';

function minhaFuncao(){
    console.log(valor); //mostra o valor de onde a função foi definida
}

function exec(){
    const valor = 'Local' 
    minhaFuncao(); //E não deonde a função foi chamada
}

exec();