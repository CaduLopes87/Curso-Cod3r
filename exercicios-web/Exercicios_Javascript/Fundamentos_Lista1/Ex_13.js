//Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
//. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

const verificarDia = function(dia){
    switch (dia){
        case 1: 
            console.log('Domingo. Não é dia útil.')
            break; 
        case 2: case 3: case 4: case 5: case 6:
            console.log('Dia útil.');
            break;
        case 7: 
            console.log('Sábado. Não é dia útil.')
            break;
        default: 
            console.log('Dia inválido.')
            break;
    }
}

verificarDia(1);
verificarDia(2);
verificarDia(3);
verificarDia(4);
verificarDia(5);
verificarDia(6);
verificarDia(7);
verificarDia(8);