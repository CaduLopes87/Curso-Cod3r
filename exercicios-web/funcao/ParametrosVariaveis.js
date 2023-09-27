function Soma(){
    let soma = 0;
    
    for(i in arguments){
        soma += arguments[i];
    }
    return soma;
}

const total = Soma(4, 8, 3);
console.log(`A soma total foi: ${total}`);

console.log(`A soma total foi: ${Soma(2, 4, 6, 3)}`);

//testes
console.log(Soma());
console.log(Soma(1));
console.log(Soma(1.1, 2.2, 3.3))
console.log(Soma(1.1, 2.2, 'teste'));
console.log(Soma('a', 'b', 'c'));
