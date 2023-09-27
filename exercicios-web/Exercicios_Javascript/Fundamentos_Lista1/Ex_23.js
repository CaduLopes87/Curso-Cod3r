/*Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/

const calculaNota = function (codigo, nota1, nota2, nota3){
    let media = 0;
    let resultado = '';

    if(codigo >= 0){
        media = (4*nota1 + 3*nota2 + 3*nota3)/(4+3+3)

        resultado = media >= 5 ? 'Aprovado!' : 'Reprovado.' 

        /*if(media >= 5){
            resultado = 'Aprovado!'
        }else{
            resultado = 'Reprovado.'
        }*/
        
    }else{
        return resultado = '\nCódigo inválido';
    }

    return{
        aluno: codigo,
        nota1,
        nota2,
        nota3,
        media,
        resultado
    }    
}

console.log(calculaNota(21, 5, 6.5, 3));
console.log(calculaNota(22, 8, 4.5, 7));
console.log(calculaNota(-22, 8, 4.5, 7));