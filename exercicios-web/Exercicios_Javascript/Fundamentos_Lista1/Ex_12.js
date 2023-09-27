// Faça um algoritmo que calcule o fatorial de um número.

const fatorial = num => {

    const fat = []
    let resultado = 1;

    for (let i = num; i > 0; i--){
        fat.push(i);
        resultado *= i;
    }
    return{fatorial: fat, resultado: resultado}
}

console.log(fatorial(3));
console.log(fatorial(4));
console.log(fatorial(7));