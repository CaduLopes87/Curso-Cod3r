// const { set } = require("lodash")

// setTimeout(function(){
//     console.log('Executando Callback')
    
//     setTimeout( function(){
//         console.log('Executando Callback')
        
//         setTimeout(function(){
//             console.log('Executando Callback')
            
//         }, 2000)
//     }, 2000) 
// }, 2000 );

function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando Promise...')
            resolve('Vishhhh');
        }, tempo)
    })
}

// esperarPor(3000)
//     .then(texto => console.log(texto))


function esperarPor2(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando Promise...')
            resolve();
        }, tempo)
    })
}

esperarPor2()
    .then(() => esperarPor2())
    .then(esperarPor2)