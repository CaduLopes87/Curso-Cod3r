let a = 1;
console.log(a);

let p = new Promise(function(cumprirPromessa){
    //valor único
    //cumprirPromessa("resposta");
    //ou array
    cumprirPromessa(['Ana', 'Bia', 'Carlos'])
    //ou objeto
    /*cumprirPromessa({
        x: 3,
        y: 4
    })*/;
});

p
    .then(resposta => {
        console.log(resposta);
        return resposta;
    })
    .then(primeiro => {
        console.log(primeiro[0]);
        return primeiro[0];
    })
    .then(primeiraLetra => {
        console.log(primeiraLetra[0])
        return primeiraLetra[0].toLowerCase();
    })
    .then(letraMinuscula => console.log(letraMinuscula));


const primeiroElemento = arrayOuString => arrayOuString[0];
const paraMinuscula = letra => letra.toLowerCase();

new Promise(function(resolve){
    resolve(['Daniel', 'Ana', 'Bia', 'Carlos'])
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(paraMinuscula)
    .then(console.log);