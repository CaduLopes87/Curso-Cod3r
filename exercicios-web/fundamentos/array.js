const valores = [7.7,8.9,5.6, 8.3];

console.log(valores[0], valores[3]);
console.log(valores[4]); //um valor fora do array fica como indefinido

valores[4] = 10;
console.log(valores[4]);

console.log(valores);
console.log(valores.length);

valores.push({id: 3}, false, null, 'teste'); //adiciona intens no array
console.log(valores);

console.log(valores.pop()); //exclui o último item do array

console.log(valores);

delete valores[5]; //Exclui o elemento determinado

console.log(valores);

valores[5] = 'novo num';

console.log(valores);

console.log(typeof valores);

console.log(valores.pop());