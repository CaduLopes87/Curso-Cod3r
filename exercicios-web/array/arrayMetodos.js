const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Masssa']

pilotos.pop();
console.log(pilotos);

pilotos.push('Verstappen');
console.log(pilotos);

pilotos.shift();//Remove primeiro elemento
console.log(pilotos);

pilotos.unshift('hamilton');//Adiciona elemento no início
console.log(pilotos);

//splice pode adicionar ou remover elementos

//Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

//Remover
pilotos.splice(3, 1);
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 3);//O último índice não entra
console.log(algunsPilotos2);

