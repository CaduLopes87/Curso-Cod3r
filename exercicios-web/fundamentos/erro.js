function tratarErroELancar(erro){
    throw new Error ('...') //mostra na tela
    //throw 'message'
}

function imprimirNomeGrirado(obj){
    try{ //bloco com potencial risco de erro
    console.log(obj.name.toUpperCase() + '!!');
    }catch(e){ //executa caso tenha erro
        tratarErroELancar(e)
    } finally {//mostra dando erro ou não
        console.log('Final.');
    }
}

const obj = {nome: 'Rubens'}; //nome do objeto está errado
//**Forma certa** const obj = {name: 'Rubens'};
imprimirNomeGrirado(obj);