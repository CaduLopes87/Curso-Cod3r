let num1 = 1;
let num2 = 2;

num1++; //pós fixada

console.log(num1);

--num1; //pré fixada

console.log(num1);

console.log(++num1 === num2--); //o incremento é feito depois da comparação para num2
console.log(num1 === num2);