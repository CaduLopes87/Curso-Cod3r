/*Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.*/

const comparaCaracteres = (string1, string2) => {
    let SeIgual = 0;
    let resultado = true;

    let stringMaior = [];
    let stringMenor = [];

    if(string2.length > string1.length){
        stringMaior = string2.toUpperCase();
        stringMenor = string1.toUpperCase();
    }else{
        stringMaior = string1;
        stringMenor = string2;
    }

    for(let i in stringMaior){
        for(let j in stringMenor){

            if(stringMaior[i] == stringMenor[j]){               
                SeIgual++;
                break;
            }
        }
    }
        
    return console.log(resultado = SeIgual == stringMaior.length ? true : false);

}

comparaCaracteres('dCeba', 'abcdabe');
