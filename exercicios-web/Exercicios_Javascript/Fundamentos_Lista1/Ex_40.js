/*Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.*/

const dizConceito = nota => {
    for(let i = 0; i < nota.length; i++){
        if(nota[i] >= 0 && nota[i] < 5){
            nota[i] += ' - D';
        }else if(nota[i] >= 5 && nota[i] < 7){
            nota[i] += ' - C';
        }else if(nota[i] >= 7 && nota[i] < 9){
            nota[i] += ' - B';
        }else if(nota[i] >= 9 && nota[i] <=10){
            nota[i] += ' - A';
        }else{
            nota[i] += ' - Nota inválida';
        }
    }
    return console.log(nota);
}

dizConceito([-2, 0, 4.5, 5.5, 6.5, 7.5, 8.8, 9.5, 11]);