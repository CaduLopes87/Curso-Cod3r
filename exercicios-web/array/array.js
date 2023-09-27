console.log(typeof Array, typeof new Array, typeof [])

//trabalhar arrays com mesmo tipo de dados, dados homogêneos

let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

let aprovados2 = ['Bia', 'Carlos', 'Carla']
console.log(aprovados2[0]);
console.log(aprovados2[1]);
console.log(aprovados2[2]);
console.log(aprovados2[3]);

aprovados2[3] = 'Paula'
aprovados2.push('Rubia');
console.log(aprovados2.length)
console.log(aprovados2);

aprovados2[9] = 'Rafael'
console.log(aprovados2)

console.log(aprovados2.length)
console.log(aprovados2[8] === null);
console.log(aprovados2[8] === undefined);

aprovados2.sort()
console.log(aprovados2)

delete aprovados2[1];
console.log(aprovados2)

aprovados.splice(1, 2) //(1[exlcui a partir de elemento], 2[quantidade de elementos excluidos a partir do selecionado])
console.log(aprovados)

aprovados2.splice(1, 1, 'Geovane', 'Thais')//Os dois elementos foram adicioandos depois do elemnto de posição 1
console.log(aprovados2)//1 elemento foi excluido e 2 adicionados
