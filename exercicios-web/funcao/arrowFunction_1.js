let dobro = function (a){
    return a * 2;
}

console.log('Dobro de a:', dobro(2));

let dobro2 = (b) => {
    return b * 2;
}

console.log('Dobro de b:', dobro2(4));

let dobro3 = c => c * 2 //retorna diretamente, return implícito

console.log('Dobro de c: ', dobro3(8));

//Exemplos de formas de declarar função 
let ola = function(){
    return 'Olá'
}

let oi = () => 'Oi!'

let iai = _ => 'Iai'

console.log(ola(), oi(), iai());