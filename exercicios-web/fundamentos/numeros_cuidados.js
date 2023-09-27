console.log(7/0);
console.log('10'/2); //executa operação com string
console.log('10,2'/2); //Não executa se o num não for válido
console.log('3' + 2); //Concatena pq a string tem prioridade e a operação faz sentido com string
console.log('10.2'/2); //executa operação se sa string for um num válido
console.log('show' * 2); //Não executa operação com string
console.log(0.1 + 0.7); //gera imprecisão
//console.log(10.toString(2)); --- Não permite número literal
console.log((10.345).toFixed(2)); //Mas permite se o número estiver entre parênteses

