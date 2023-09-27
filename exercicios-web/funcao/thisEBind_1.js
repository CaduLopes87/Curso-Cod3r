const pessoa = {
    saudacao: "Bom dia!",
    falar(){
        console.log(this.saudacao);
    }
}

pessoa.falar(); //referencia ao objeto pessoa
//console.log(pessoa);

const falar2 = pessoa.falar;
falar2(); //erro pois o this não tá referenciando o objeto pessoa dessa forma

const falarDePessoa = pessoa.falar.bind(pessoa); //referencia ao objeto pessoa
falarDePessoa();
