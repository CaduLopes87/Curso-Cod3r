let isAtivo = false;

console.log(isAtivo);

isAtivo = true; 

console.log(isAtivo);

isAtivo = 1;

console.log(!isAtivo);
console.log(!!isAtivo);

console.log('os verdadeiros: ');
console.log('1', !!3);
console.log('2', !!-1);
console.log('3', !!' '); //string
console.log('4', !![]);  //array
console.log('5', !!{});  //objeto
console.log('6', !!Infinity);
console.log('8', !!(isAtivo = true));

console.log('\nOs falos:');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('pra Finzalizar...');
console.log(!!('' || null || 0 || ' ' ));

let nome = '';

console.log(nome || 'Desconhecido');
