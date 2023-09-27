let a = 7;
let b = 94;

// a >> b e b >> a

let troca;

console.log("Valores iniciais:");
console.log("a =", a);
console.log("b =", b);

troca = a; 
a = b;
b = troca;

console.log("Valores finais:");
console.log("a =", a);
console.log("b =", b);

