/*As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.*/

const verificaBissexto = ano => {
    
    if(ano <= 0){
        return console.log('\nAno inválido.', false)
    }else if((ano % 400) == 0){
        return console.log(`\nO ano ${ano} é bissexto.`, true)
    }else if((ano % 100) == 0){
        return console.log(`\nO ano ${ano} não é bissexto.`, false)
    }else if((ano % 4) == 0){
        return console.log(`\nO ano ${ano} é bissexto.`, true)
    }else {
        return console.log(`\nO ano ${ano} não é bissexto.`, false)
    }
}

verificaBissexto(1988);
verificaBissexto(4);
verificaBissexto(5);
verificaBissexto(0);
verificaBissexto(100);
verificaBissexto(400);
verificaBissexto(500);
verificaBissexto(800);
verificaBissexto(2000);
verificaBissexto(2021);
verificaBissexto(2020);
